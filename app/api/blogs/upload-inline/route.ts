// app/api/blogs/upload-inline/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file type' },
        { status: 400 }
      );
    }

    const maxSize = 3 * 1024 * 1024; // 3MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, error: 'File size exceeds 3MB' },
        { status: 400 }
      );
    }

 // 🔥 Upload inline image with different transformation
    const result = await uploadToCloudinary(file, {
      folder: 'Bunnx/blogs/content',
      transformation: {
        width: 1000, // Smaller for inline images
        crop: 'limit', // Maintains aspect ratio
        quality: 'auto',
        fetch_format: 'auto',
      },
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('Error uploading inline image:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to upload' },
      { status: 500 }
    );
  }
}