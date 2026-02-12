import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/database';
import Category from '@/models/Category';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> } // ✅ Changed to Promise
) {
  try {
    await connectToDatabase();

    const slugParams = await params;

    const category = await Category.findOne({ slug: slugParams.slug }).lean();

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: category });
  } catch (error: any) {
    console.error('Error fetching category by slug:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}












