// app/api/categories/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/database';
import Category from '@/models/Category';
// import { generateSlug } from '@/lib/utils/blogUtils';
import { auth } from '@/auth';


// GET all categories
export async function GET() {
  try {
    await connectToDatabase();

    const categories = await Category.find().sort({ name: 1 }).lean();

    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

// POST create new category
export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
 
    await connectToDatabase();

    const body = await request.json();

    // const slug = generateSlug(body.name);

    const category = await Category.create({ ...body });

    return NextResponse.json(
      { success: true, data: category },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create category' },
      { status: 500 }
    );
  }
}