// app/api/categories/[id]/route.js
import { auth } from '@/auth';
import connectToDatabase from '@/lib/database';
import Category from '@/models/Category';
// import { getUserFromDB } from '@/lib/getUserFromDB';
// import { canAccessFeature } from '@/lib/permissions';
import { NextResponse } from 'next/server';

// GET single category
export async function GET(request, { params }) {
  try {
    await connectToDatabase();

    const paramsId = await params;

    const category = await Category.findById(paramsId.id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch category' },
      { status: 500 }
    );
  }
}

// PUT update category
export async function PUT(request, { params }) {
  try {
    const session = await auth();
    
    const paramsId = await params;

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check permission
    // const user = await getUserFromDB(session.user.id, false);
    // if (!user || !canAccessFeature(user.role, 'manage_blogs')) {
    //   return NextResponse.json(
    //     { success: false, error: 'Insufficient permissions' },
    //     { status: 403 }
    //   );
    // }

    await connectToDatabase();

    const body = await request.json();

    const category = await Category.findByIdAndUpdate(
      paramsId.id,
      body,
      { new: true, runValidators: true }
    );

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update category' },
      { status: 500 }
    );
  }
}

// DELETE category
export async function DELETE(request, { params }) {
  try {
    const session = await auth();
    
    const paramsId = await params;

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check permission
    // const user = await getUserFromDB(session.user.id, false);
    // if (!user || !canAccessFeature(user.role, 'manage_blogs')) {
    //   return NextResponse.json(
    //     { success: false, error: 'Insufficient permissions' },
    //     { status: 403 }
    //   );
    // }

    await connectToDatabase();

    const category = await Category.findByIdAndDelete(paramsId.id);

    if (!category) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}