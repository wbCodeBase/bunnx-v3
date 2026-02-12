// app/api/blogs/analytics/route.js
import { auth } from '@/auth';
import connectToDatabase from '@/lib/database';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    // Total views
    const totalViewsResult = await Blog.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: null, totalViews: { $sum: '$views' } } },
    ]);
    const totalViews = totalViewsResult[0]?.totalViews || 0;

    // Total posts
    const totalPosts = await Blog.countDocuments();
    const publishedPosts = await Blog.countDocuments({ status: 'published' });

    // Average views per post
    const avgViewsPerPost = publishedPosts > 0 ? totalViews / publishedPosts : 0;

    // Posts this month
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const postsThisMonth = await Blog.countDocuments({
      createdAt: { $gte: startOfMonth },
    });

    // Most popular posts
    const popularPosts = await Blog.find({ status: 'published' })
      .sort({ views: -1 })
      .limit(5)
      .select('title views')
      .lean();

    // Category distribution
    const categoryDistribution = await Blog.aggregate([
      { $match: { status: 'published' } },
      { $unwind: '$categories' },
      { $group: { _id: '$categories', count: { $sum: 1 } } },
      { $project: { name: '$_id', count: 1, _id: 0 } },
      { $sort: { count: -1 } },
    ]);

    // Recent posts
    const recentPosts = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('title status views createdAt')
      .lean();

    return NextResponse.json({
      success: true,
      data: {
        totalViews,
        totalPosts,
        publishedPosts,
        avgViewsPerPost,
        postsThisMonth,
        viewsGrowth: 12, // Calculate actual growth
        popularPosts,
        categoryDistribution,
        recentPosts,
      },
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}