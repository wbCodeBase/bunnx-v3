import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/database';
import Blog from '@/models/Blog';
// import Category from '@/models/Category';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> } // ✅ Changed to Promise
) {
  try {
    await connectToDatabase(); 

    const slugParams = await params;

    const blog = await Blog.findOne({ slug: slugParams.slug }).populate('categories').lean();

    
    // const blog = await (await Blog.findOne({ slug: slugParams.slug }).populate('categories').lean().exec());

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    console.error('Error fetching blog by slug:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}












