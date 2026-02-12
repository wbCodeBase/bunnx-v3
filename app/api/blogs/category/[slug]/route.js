import { NextResponse } from 'next/server'
import Blog from '@/models/Blog'
import Category from '@/models/Category'
import connectToDatabase from '@/lib/database'

export async function GET(
  req,
  { params } // ✅ Changed to Promise
) {
  try {
    await connectToDatabase()

    
    const slugParams = await params;

    // console.log(slugParams, "slugParams");

    // 1️⃣ Find category by slug
    const category = await Category.findOne({ 'slug': slugParams?.slug }).lean()

    if (!category) {
      return NextResponse.json(
        { success: false, message: 'Category not found' },
        { status: 404 }
      )
    }

    // 2️⃣ Fetch blogs that contain this category _id
    const blogs = await Blog.find({
      categories: category._id,
    }) 
      .sort({ publishedAt: -1, createdAt: -1 })
      .populate({
        path: 'categories',
        select: 'name slug',
      })
      .lean()

    return NextResponse.json({
      success: true,
      category: {
        name: category.name,
        slug: category.slug,
      },
      count: blogs.length,
      blogs,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
