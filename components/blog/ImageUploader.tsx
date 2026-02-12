// components/blog/ImageUploader.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  onChange: (file: File | null) => void;
  existingImage?: {
    url: string;
    alt?: string;
  };
  label?: string;
}

export default function ImageUploader({ 
  onChange, 
  existingImage,
  label = 'Featured Image' 
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [hasNewFile, setHasNewFile] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false); // ✅ Track if user removed image
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ✅ Set initial preview only when component mounts or existingImage changes
  useEffect(() => {
    if (existingImage?.url && !isRemoved) {
      setPreview(existingImage.url);
    }
  }, [existingImage?.url, isRemoved]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Invalid file type. Only JPEG, PNG, and WebP are allowed');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('File size exceeds 5MB limit');
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // ✅ Mark that we have a new file and not removed
    setHasNewFile(true);
    setIsRemoved(false);

    // Pass file to parent
    onChange(file);
  };

  const handleRemove = () => {
    // ✅ Clear preview completely
    setPreview(null);
    setHasNewFile(false);
    setIsRemoved(true); // ✅ Mark as removed
    
    onChange(null);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} *
      </label>

      {preview ? (
        <div className="relative w-full h-64 border-2 border-gray-300 rounded-lg overflow-hidden">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
          >
            <X size={20} />
          </button>
          {/* ✅ Show indicator if new image */}
          {hasNewFile && (
            <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              New image selected
            </div>
          )}
          {/* ✅ Show indicator if existing image (not new) */}
          {!hasNewFile && existingImage && (
            <div className="absolute bottom-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Current image
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition"
        >
          <Upload size={48} className="text-gray-400 mb-4" />
          <p className="text-gray-600 text-sm">Click to upload or drag and drop</p>
          <p className="text-gray-400 text-xs mt-2">PNG, JPG, WebP up to 5MB</p>
          <p className="text-gray-400 text-xs mt-1">Recommended: 1200x630px</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}




















// components/blog/ImageUploader.tsx
// 'use client';

// import { useState, useRef } from 'react';
// import Image from 'next/image';
// import { Upload, X } from 'lucide-react';

// interface ImageUploaderProps {
//   onChange: (file: File | null) => void;
//   existingImage?: {
//     url: string;
//     alt?: string;
//   };
//   label?: string;
// }

// export default function ImageUploader({ 
//   onChange, 
//   existingImage,
//   label = 'Featured Image' 
// }: ImageUploaderProps) {
//   const [preview, setPreview] = useState<string | null>(
//     existingImage?.url || null
//   );
//   const [hasNewFile, setHasNewFile] = useState(false); // ✅ Track if new file selected
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Validate file type
//     const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//     if (!validTypes.includes(file.type)) {
//       alert('Invalid file type. Only JPEG, PNG, and WebP are allowed');
//       return;
//     }

//     // Validate file size (max 5MB)
//     const maxSize = 5 * 1024 * 1024;
//     if (file.size > maxSize) {
//       alert('File size exceeds 5MB limit');
//       return;
//     }

//     // Show preview
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreview(reader.result as string);
//     };
//     reader.readAsDataURL(file);

//     // ✅ Mark that we have a new file
//     setHasNewFile(true);

//     // Pass file to parent
//     onChange(file);
//   };

//   const handleRemove = () => {
//     setPreview(existingImage?.url || null); // ✅ Revert to existing image
//     setHasNewFile(false);
//     onChange(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         {label} *
//       </label>

//       {preview ? (
//         <div className="relative w-full h-64 border-2 border-gray-300 rounded-lg overflow-hidden">
//           <Image
//             src={preview}
//             alt="Preview"
//             fill
//             className="object-cover"
//           />
//           <button
//             type="button"
//             onClick={handleRemove}
//             className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
//           >
//             <X size={20} />
//           </button>
//           {/* ✅ Show indicator if new image */}
//           {hasNewFile && (
//             <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
//               New image selected
//             </div>
//           )}
//         </div>
//       ) : (
//         <div
//           onClick={() => fileInputRef.current?.click()}
//           className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition"
//         >
//           <Upload size={48} className="text-gray-400 mb-4" />
//           <p className="text-gray-600 text-sm">Click to upload or drag and drop</p>
//           <p className="text-gray-400 text-xs mt-2">PNG, JPG, WebP up to 5MB</p>
//           <p className="text-gray-400 text-xs mt-1">Recommended: 1200x630px</p>
//         </div>
//       )}

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className="hidden"
//       />
//     </div>
//   );
// }










// // components/blog/ImageUploader.tsx
// 'use client';

// import { useState, useRef } from 'react';
// import Image from 'next/image';
// import { Upload, X } from 'lucide-react';

// interface ImageUploaderProps {
//   onChange: (file: File | null) => void;
//   existingImage?: {
//     url: string;
//     alt: string;
//   };
//   label?: string;
// }

// export default function ImageUploader({ 
//   onChange, 
//   existingImage,
//   label = 'Featured Image' 
// }: ImageUploaderProps) {
//   const [preview, setPreview] = useState<string | null>(
//     existingImage?.url || null
//   );
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Validate file type
//     const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//     if (!validTypes.includes(file.type)) {
//       alert('Invalid file type. Only JPEG, PNG, and WebP are allowed');
//       return;
//     }

//     // Validate file size (max 5MB)
//     const maxSize = 5 * 1024 * 1024;
//     if (file.size > maxSize) {
//       alert('File size exceeds 5MB limit');
//       return;
//     }

//     // Show preview
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreview(reader.result as string);
//     };
//     reader.readAsDataURL(file);

//     // Pass file to parent
//     onChange(file);
//   };

//   const handleRemove = () => {
//     setPreview(null);
//     onChange(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         {label} *
//       </label>

//       {preview ? (
//         <div className="relative w-full h-64 border-2 border-gray-300 rounded-lg overflow-hidden">
//           <Image
//             src={preview}
//             alt="Preview"
//             fill
//             className="object-cover"
//           />
//           <button
//             type="button"
//             onClick={handleRemove}
//             className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
//           >
//             <X size={20} />
//           </button>
//         </div>
//       ) : (
//         <div
//           onClick={() => fileInputRef.current?.click()}
//           className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition"
//         >
//           <Upload size={48} className="text-gray-400 mb-4" />
//           <p className="text-gray-600 text-sm">Click to upload or drag and drop</p>
//           <p className="text-gray-400 text-xs mt-2">PNG, JPG, WebP up to 5MB</p>
//           <p className="text-gray-400 text-xs mt-1">Recommended: 1200x630px</p>
//         </div>
//       )}

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className="hidden"
//       />
//     </div>
//   );
// }







