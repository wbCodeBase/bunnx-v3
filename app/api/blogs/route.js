// app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/database';
import Blog from '@/models/Blog';
import { auth } from '@/auth';
import { calculateReadTime } from '@/lib/utils/blogUtils';
import { uploadToCloudinary } from '@/lib/cloudinary';
import User from '@/models/User';
import '@/models/Category'

// POST create new blog with images
export async function POST(request) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const user = await User.findById(session.user.id);

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    // Get form data (includes files)
    const formData = await request.formData();

    // Extract all fields
    const title = formData.get('title');
    const slug = formData.get('slug');
    const excerpt = formData.get('excerpt');
    const content = formData.get('content');
    const categories = JSON.parse(formData.get('categories'));
    const tags = JSON.parse(formData.get('tags') || '[]');
    const status = formData.get('status');
    const seoMetaTitle = formData.get('seoMetaTitle');
    const seoMetaDescription = formData.get('seoMetaDescription');
    const seoKeywords = JSON.parse(formData.get('seoKeywords') || '[]');

    // Get featured image file
    const featuredImageFile = formData.get('featuredImage');
    const featuredImageAlt = formData.get('featuredImageAlt');

    // Validate required fields
    if (!title || !slug || !excerpt || !content || !categories || !featuredImageFile) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug }).exec();
    if (existingBlog) {
      return NextResponse.json(
        { success: false, error: 'A blog with this slug already exists' },
        { status: 400 }
      );
    }



    // 🔥 Upload cover image with specific transformation
    const featuredImage = await uploadToCloudinary(featuredImageFile, {
      folder: 'Bunnx/blogs/covers',
      transformation: {
        width: 1200,
        height: 630,
        crop: 'fill', // Better for cover images
        gravity: 'auto',
        quality: 'auto',
        fetch_format: 'auto',
      },
    });

    // Calculate read time
    const readTime = calculateReadTime(content);

    // Prepare blog data
    const blogData = {
      title,
      slug,
      excerpt,
      content,
      categories,
      tags,
      status,
      featuredImage: {
        url: featuredImage.url,
        publicId: featuredImage.publicId,
        alt: featuredImageAlt || title,
        width: featuredImage.width,
        height: featuredImage.height,
      },
      seo: {
        metaTitle: seoMetaTitle || title,
        metaDescription: seoMetaDescription || excerpt,
        keywords: seoKeywords,
      },
      readTime,
      author: {
        id: user._id,
        name: user.name || '',
        email: user.email || '',
        avatar: user.avatar || '',
      },
      publishedAt: status === 'published' ? new Date() : undefined,
      views: 0,
    };

    const blog = await Blog.create(blogData);

    return NextResponse.json(
      { success: true, data: blog },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create blog' },
      { status: 500 }
    );
  }
}

// GET all blogs (same as before)
export async function GET(request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status') || 'published';
    const category = searchParams.get('category');
    const search = searchParams.get('search');



    const query = {};

    if (status !== 'all') {
      query.status = status;
    }

    if (category) {
      query.categories = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } },
      ];
    }



    const skip = (page - 1) * limit;



    const [blogs, total] = await Promise.all([
      Blog.find(query)
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit).populate('categories')
        .lean()
        .exec(),
      Blog.countDocuments(query).exec(),
    ]);



    return NextResponse.json({
      success: true,
      data: {
        blogs,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}






