// app/api/blogs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/database';
import Blog from '@/models/Blog';
import { auth } from '@/auth';
import { calculateReadTime } from '@/lib/utils/blogUtils';
import { uploadToCloudinary, deleteFromCloudinary } from '@/lib/cloudinary';
// import User from '@/models/User';

// GET single blog
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();

    const { id } = await params;

    const blog = await Blog.findById(id).exec();

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}



export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const existingBlog = await Blog.findById(id).exec();

    if (!existingBlog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    const formData = await request.formData();

    // Extract fields
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const categories = JSON.parse(formData.get('categories') as string);
    const tags = JSON.parse(formData.get('tags') as string || '[]');
    const status = formData.get('status') as string;
    const seoMetaTitle = formData.get('seoMetaTitle') as string;
    const seoMetaDescription = formData.get('seoMetaDescription') as string;
    const seoKeywords = JSON.parse(formData.get('seoKeywords') as string || '[]');
    const featuredImageAlt = formData.get('featuredImageAlt') as string;

    // ✅ Check if user uploaded a new image
    const hasNewImage = formData.get('hasNewImage') === 'true';
    const featuredImageFile = formData.get('featuredImage') as File | null;

    // Validate slug uniqueness
    if (slug !== existingBlog.slug) {
      const slugExists = await Blog.findOne({
        slug,
        _id: { $ne: id }
      }).exec();

      if (slugExists) {
        return NextResponse.json(
          { success: false, error: 'A blog with this slug already exists' },
          { status: 400 }
        );
      }
    }

    // Handle featured image
    let featuredImage = existingBlog.featuredImage;

    // ✅ Only upload if user selected a new image
    if (hasNewImage && featuredImageFile) {
      // Verify it's actually a File object
      if (!(featuredImageFile instanceof File)) {
        console.error('featuredImageFile is not a File:', typeof featuredImageFile);
        return NextResponse.json(
          { success: false, error: 'Invalid image file' },
          { status: 400 }
        );
      }

      console.log('📤 Uploading new image:', featuredImageFile.name, featuredImageFile.size);

      // Delete old image from Cloudinary
      if (existingBlog.featuredImage?.publicId) {
        try {
          await deleteFromCloudinary(existingBlog.featuredImage.publicId);
          console.log('✅ Old image deleted');
        } catch (error) {
          console.error('⚠️ Error deleting old image:', error);
        }
      }

      // Upload new image
      try {
        const uploadedImage = await uploadToCloudinary(featuredImageFile, {
          folder: 'Bunnx/blogs/covers',
          transformation: {
            width: 1200,
            height: 630,
            crop: 'fill',
            gravity: 'auto',
            quality: 'auto',
            fetch_format: 'auto',
          },
        });

        featuredImage = {
          url: uploadedImage.url,
          publicId: uploadedImage.publicId,
          alt: featuredImageAlt || title,
          width: uploadedImage.width,
          height: uploadedImage.height,
        };

        console.log('✅ New image uploaded:', uploadedImage.url);
      } catch (error) {
        console.error('❌ Error uploading new image:', error);
        return NextResponse.json(
          { success: false, error: 'Failed to upload new image' },
          { status: 500 }
        );
      }
    } else if (featuredImageAlt) {
      // ✅ Just update alt text if provided (no new image)
      featuredImage = {
        ...existingBlog.featuredImage,
        alt: featuredImageAlt,
      };
      console.log('ℹ️ Keeping existing image, updating alt text');
    } else {
      console.log('ℹ️ Keeping existing image unchanged');
    }

    // Calculate read time
    const readTime = calculateReadTime(content);

    // Update publishedAt if status changed to published
    const publishedAt =
      status === 'published' && existingBlog.status !== 'published'
        ? new Date()
        : existingBlog.publishedAt;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        slug,
        excerpt,
        content,
        categories,
        tags,
        status,
        featuredImage,
        seo: {
          metaTitle: seoMetaTitle || title,
          metaDescription: seoMetaDescription || excerpt,
          keywords: seoKeywords,
        },
        readTime,
        publishedAt,
      },
      { new: true, runValidators: true }
    ).exec();

    console.log('✅ Blog updated successfully');

    return NextResponse.json({ success: true, data: updatedBlog });
  } catch (error) {
    console.error('❌ Error updating blog:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update blog' },
      { status: 500 }
    );
  }
}




// DELETE blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const blog = await Blog.findById(id).exec();

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    // Delete featured image from Cloudinary
    if (blog.featuredImage?.publicId) {
      try {
        await deleteFromCloudinary(blog.featuredImage.publicId);
      } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
      }
    }

    await Blog.findByIdAndDelete(id).exec();

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}