// app/bunnx-admin/blogs/[id]/edit/page.tsx
'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { blogSchema, type BlogFormData } from '@/lib/validations/blogSchema';
import { calculateReadTime, generateSlug } from '@/lib/utils/blogUtils';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import BlogEditor from '@/components/blog/BlogEditor';
import ImageUploader from '@/components/blog/ImageUploader';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import Link from 'next/link';

import AdminDashboardLayout from '@/components/adminpanel/AdminpanelLayout';


async function fetchBlog(id: string) {
  const response = await fetch(`/api/blogs/${id}`);
  if (!response.ok) throw new Error('Failed to fetch blog');
  const result = await response.json();
  return result.data;
}

async function fetchCategories() {
  const response = await fetch('/api/categories');
  if (!response.ok) throw new Error('Failed to fetch categories');
  const result = await response.json();
  return result.data || [];
}

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const [newFeaturedImage, setNewFeaturedImage] = useState<File | null>(null); // ✅ Track new image


  const { id } = use(params)

  const { data: blog, isLoading: loadingBlog } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlog(id),
  });



  const { data: categories = [], isLoading: loadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  // Load blog data into form
  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        categories: blog.categories,
        tags: blog.tags || [],
        status: blog.status,
        featuredImage: blog.featuredImage,
        seo: blog.seo || {
          metaTitle: '',
          metaDescription: '',
          keywords: [],
        },
      });
    }
  }, [blog, reset]);

  const title = watch('title');
  const tags = watch('tags') || [];
  const content = watch('content');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setValue('title', newTitle);

    if (newTitle) {
      const slug = generateSlug(newTitle);
      setValue('slug', slug);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setValue('tags', [...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setValue(
      'tags',
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`/api/blogs/${(await params).id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('Blog deleted successfully!');
        router.push('/bunnx-admin/blogs');
      } else {
        toast.error('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete blog');
    }
  };


  const onSubmit = async (data: BlogFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Add text fields
      formData.append('title', data.title);
      formData.append('slug', data.slug);
      formData.append('excerpt', data.excerpt);
      formData.append('content', data.content);
      formData.append('categories', JSON.stringify(data.categories));
      formData.append('tags', JSON.stringify(data.tags || []));
      formData.append('status', data.status);
      formData.append('seoMetaTitle', data.seo?.metaTitle || '');
      formData.append('seoMetaDescription', data.seo?.metaDescription || '');
      formData.append('seoKeywords', JSON.stringify(data.seo?.keywords || []));

      // ✅ Only add new image if user selected one
      if (newFeaturedImage) {
        formData.append('featuredImage', newFeaturedImage);
        formData.append('hasNewImage', 'true'); // ✅ Flag for backend
      } else {
        formData.append('hasNewImage', 'false');
      }

      // Add alt text if exists
      if (blog?.featuredImage?.alt) {
        formData.append('featuredImageAlt', blog.featuredImage.alt);
      }

      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Blog updated successfully!');
        router.push('/bunnx-admin/blogs');
      } else {
        toast.error(result.error || 'Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      toast.error('Failed to update blog');
    } finally {
      setIsSubmitting(false);
    }
  };



  if (loadingBlog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (

    <AdminDashboardLayout>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/bunnx-admin/blogs"
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edit Blog</h1>
              <p className="text-gray-600 mt-1">
                {content ? `~${calculateReadTime(content)} min read` : 'Start writing...'}
              </p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                {...register('title')}
                onChange={handleTitleChange}
                placeholder="Enter blog title..."
                className="w-full px-4 py-3 text-2xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.title && (
                <p className="text-red-600 text-sm mt-2">{errors.title.message}</p>
              )}
            </div>

            {/* Slug */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Slug *
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">/blogs/</span>
                <input
                  type="text"
                  {...register('slug')}
                  placeholder="auto-generated-slug"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.slug && (
                <p className="text-red-600 text-sm mt-2">{errors.slug.message}</p>
              )}
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                {...register('excerpt')}
                rows={3}
                placeholder="Brief description of your blog..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.excerpt && (
                <p className="text-red-600 text-sm mt-2">{errors.excerpt.message}</p>
              )}
              <p className="text-xs text-gray-500 mt-2">
                {watch('excerpt')?.length || 0} / 300 characters
              </p>
            </div>

            {/* Content Editor */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <Controller
                name="content"
                control={control}
                render={({ field }) => (
                  <BlogEditor content={field.value} onChange={field.onChange} />
                )}
              />
              {errors.content && (
                <p className="text-red-600 text-sm mt-2">{errors.content.message}</p>
              )}
            </div>
          </div>

          {/* Sidebar - Same as Create */}
          <div className="space-y-6">
            {/* Status */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                {...register('status')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Featured Image */}
            {/* <div className="bg-white rounded-lg shadow p-6">
             
              <Controller
                name="featuredImage"
                control={control}
                render={({ field }) => (
                  <ImageUploader
                    existingImage={blog?.featuredImage}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.featuredImage && (
                <p className="text-red-600 text-sm mt-2">
                  {typeof errors.featuredImage.message === 'string' ? errors.featuredImage.message : 'Featured image is required'}
                </p>
              )}
            </div> */}
            
            {/* Featured Image */}
            <div className="bg-white rounded-lg shadow p-6">
              <ImageUploader
                existingImage={blog?.featuredImage}
                onChange={(file) => {
                  setNewFeaturedImage(file); // ✅ Store the file
                  setValue('featuredImage', file); // Update form state
                }}
              />
              {errors.featuredImage && (
                <p className="text-red-600 text-sm mt-2">
                  {typeof errors.featuredImage.message === 'string'
                    ? errors.featuredImage.message
                    : 'Featured image is required'}
                </p>
              )}
            </div>


            {/* Categories */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categories *
              </label>
              {loadingCategories ? (
                <p className="text-gray-500 text-sm">Loading categories...</p>
              ) : (
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category._id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={category._id}
                        {...register('categories')}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              )}
              {errors.categories && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.categories.message}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={handleTagKeyPress}
                  placeholder="Add tag..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* SEO */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                SEO Settings (Optional)
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    {...register('seo.metaTitle')}
                    placeholder={title || 'Meta title...'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {watch('seo.metaTitle')?.length || 0} / 60 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Meta Description
                  </label>
                  <textarea
                    {...register('seo.metaDescription')}
                    rows={3}
                    placeholder="Meta description..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {watch('seo.metaDescription')?.length || 0} / 160 characters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </AdminDashboardLayout>

  );
}