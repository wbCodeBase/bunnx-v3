// app/bunnx-admin/categories/[id]/edit/page.tsx
'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import AdminDashboardLayout from '@/components/adminpanel/AdminpanelLayout';
import { generateSlug } from '@/lib/utils/blogUtils';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import Link from 'next/link';

const categorySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format').min(2).max(50),
  description: z.string().max(500).optional(),
});


async function fetchCategory(id) {
  const response = await fetch(`/api/categories/${id}`);
  if (!response.ok) throw new Error('Failed to fetch category');
  const result = await response.json();
  return result.data;
}

export default function EditCategoryPage({ params }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const idFromParams = use(params);

  const { data: category, isLoading } = useQuery({
    queryKey: ['category', idFromParams.id],
    queryFn: async () => fetchCategory(idFromParams.id),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
  });

  useEffect(() => {
    if (category) {
      reset({
        name: category.name,
        slug: category.slug,
        description: category.description || '',
      });
    }
  }, [category, reset]);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setValue('name', newName);

    if (newName) {
      const slug = generateSlug(newName);
      setValue('slug', slug);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this category? All blogs with this category will need to be updated.')) return;

    try {
      const response = await fetch(`/api/categories/${(await params).id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Category deleted successfully!');
        router.push('/bunnx-admin/categories');
      } else {
        toast.error('Failed to delete category');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Failed to delete category');
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/categories/${(await params).id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Category updated successfully!');
        router.push('/bunnx-admin/categories');
      } else {
        toast.error(result.error || 'Failed to update category');
      }
    } catch (error) {
      console.error('Error updating category:', error);
      toast.error('Failed to update category');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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
                <h1 className="text-3xl font-bold text-gray-900">Edit Category</h1>
                <p className="text-gray-600 mt-1">Update category details</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition"
              >
                <Trash2 size={20} />
                Delete
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
              >
                <Save size={20} />
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
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