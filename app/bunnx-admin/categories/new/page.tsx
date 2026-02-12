// app/bunnx-admin/categories/new/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateSlug } from '@/lib/utils/blogUtils';
import { toast } from 'sonner';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

import AdminDashboardLayout from '@/components/adminpanel/AdminpanelLayout';

const categorySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name cannot exceed 50 characters'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format').min(2).max(50),
  description: z.string().max(500, 'Description cannot exceed 500 characters').optional(),
});

type CategoryFormData = z.infer<typeof categorySchema>;

export default function CreateCategoryPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: '',
      slug: '',
      description: '',
    },
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setValue('name', newName);

    if (newName) {
      const slug = generateSlug(newName);
      setValue('slug', slug);
    }
  };

  const onSubmit = async (data: CategoryFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Category created successfully!');
        router.push('/bunnx-admin/categories');
      } else {
        toast.error(result.error || 'Failed to create category');
      }
    } catch (error) {
      console.error('Error creating category:', error);
      toast.error('Failed to create category');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <AdminDashboardLayout>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/bunnx-admin/categories"
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ArrowLeft size={20} />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Create Category</h1>
                <p className="text-gray-600 mt-1">Add a new blog category</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-4 cursor-pointer py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
            >
              <Save size={20} />
              {isSubmitting ? 'Creating...' : 'Create Category'}
            </button>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Name *
              </label>
              <input
                type="text"
                {...register('name')}
                onChange={handleNameChange}
                placeholder="e.g., Travel Tips"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-2">{errors.name.message}</p>
              )}
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug *
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">/category/</span>
                <input
                  type="text"
                  {...register('slug')}
                  placeholder="travel-tips"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.slug && (
                <p className="text-red-600 text-sm mt-2">{errors.slug.message}</p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                Auto-generated from name. You can edit it manually.
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description (Optional)
              </label>
              <textarea
                {...register('description')}
                rows={4}
                placeholder="Brief description of this category..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-2">{errors.description.message}</p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                {watch('description')?.length || 0} / 500 characters
              </p>
            </div>
          </div>
        </form>
      </div>
    </AdminDashboardLayout>
  );
}