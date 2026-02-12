// lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

interface UploadOptions {
  folder?: string;
  transformation?: {
    width?: number;
    height?: number;
    crop?: 'limit' | 'fill' | 'scale' | 'fit' | 'thumb';
    gravity?: 'auto' | 'face' | 'center';
    quality?: 'auto' | number;
    fetch_format?: 'auto' | 'jpg' | 'png' | 'webp';
  };
}

// Upload image helper with optional transformation
export async function uploadToCloudinary(
  file: File,
  options?: UploadOptions
): Promise<{
  url: string;
  publicId: string; 
  width: number;
  height: number;
}> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Default options
  const defaultOptions: UploadOptions = {
    folder: 'Bunnx/blogs/content',
    transformation: {
      width: 1200,
      height: 630,
      crop: 'limit',
      quality: 'auto',
      fetch_format: 'auto',
    },
  };

  // Merge with provided options
  const finalOptions = {
    folder: options?.folder || defaultOptions.folder,
    transformation: options?.transformation || defaultOptions.transformation,
  };

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: finalOptions.folder,
          transformation: [finalOptions.transformation],
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve({
              url: result.secure_url,
              publicId: result.public_id,
              width: result.width,
              height: result.height,
            });
          }
        }
      )
      .end(buffer);
  });
}

// Delete image helper
export async function deleteFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId);
    console.log(`✅ Deleted image: ${publicId}`);
  } catch (error) {
    console.error(`❌ Failed to delete image: ${publicId}`, error);
    throw error;
  }
}

// Delete multiple images
export async function deleteMultipleFromCloudinary(
  publicIds: string[]
): Promise<void> {
  try {
    const results = await Promise.allSettled(
      publicIds.map((id) => cloudinary.uploader.destroy(id))
    );

    const successful = results.filter((r) => r.status === 'fulfilled').length;
    console.log(`✅ Deleted ${successful}/${publicIds.length} images`);
  } catch (error) {
    console.error('❌ Failed to delete multiple images', error);
    throw error;
  }
}







