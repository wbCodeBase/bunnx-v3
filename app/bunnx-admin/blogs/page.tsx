// app/bunnx-admin/blogs/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import {
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar,
} from 'lucide-react';
import AdminDashboardLayout from '@/components/adminpanel/AdminpanelLayout';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  status: 'draft' | 'published' | 'archived';
  categories: string[];
  featuredImage: {
    url: string;
    alt: string;
  };
  author: {
    name: string;
    avatar: string;
  };
  views: number;
  publishedAt?: string;
  createdAt: string;
}

interface Filters {
  status: string;
  category: string;
  search: string;
  dateFrom: string;
  dateTo: string;
}

async function fetchBlogs(page: number, filters: Filters) {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: '10',
    status: filters.status,
    category: filters.category,
    search: filters.search,
  });

  const response = await fetch(`/api/blogs?${params}`);
  if (!response.ok) throw new Error('Failed to fetch blogs');
  return response.json();
}

async function deleteblog(id: string) {
  const response = await fetch(`/api/blogs/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete blog');
  return response.json();
}

export default function BlogsPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    status: 'all',
    category: '',
    search: '',
    dateFrom: '',
    dateTo: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['blogs', page, filters],
    queryFn: () => fetchBlogs(page, filters),
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    try {
      await deleteblog(id);
      refetch();
    } catch (error) {
      console.log(error, "error");
      
      alert('Failed to delete blog');
    }
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const clearFilters = () => {
    setFilters({
      status: 'all',
      category: '',
      search: '',
      dateFrom: '',
      dateTo: '',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'draft':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
      case 'archived':
        return 'bg-gray-50 text-gray-600 border border-gray-200';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-200';
    }
  };

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Blogs</h1>
            <p className="text-gray-600 mt-1">Manage and publish your blog posts</p>
          </div>
          <Link
            href="/bunnx-admin/blogs/new"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <Plus size={18} />
            New Blog
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 flex-1">

              {/* Search Box */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Status */}
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>

              {/* Expand Filters */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <Filter size={18} />
                Filters
              </button>
            </div>

            {(filters.search || filters.status !== 'all' || filters.category) && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Clear
              </button>
            )}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              
              <div>
                <label className="block text-sm text-gray-700 mb-1">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Categories</option>
                  <option value="travel">Travel</option>
                  <option value="culture">Culture</option>
                  <option value="food">Food</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">From</label>
                <input
                  type="date"
                  value={filters.dateFrom}
                  onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">To</label>
                <input
                  type="date"
                  value={filters.dateTo}
                  onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* List */}
        {isLoading ? (
          <div className="py-14 text-center">
            <div className="animate-spin h-10 w-10 border-2 border-blue-600 border-t-transparent rounded-full mx-auto" />
            <p className="text-gray-600 mt-3">Loading blogs...</p>
          </div>
        ) : data?.data?.blogs?.length === 0 ? (
          <div className="bg-white rounded-lg border shadow-sm p-12 text-center">
            <p className="text-gray-600 mb-3">No blogs found</p>
            <Link href="/bunnx-admin/blogs/new" className="text-blue-600 hover:underline">
              Create Blog
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b text-xs text-gray-500 uppercase">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium">Blog</th>
                    <th className="px-6 py-3 text-left font-medium">Status</th>
                    <th className="px-6 py-3 text-left font-medium">Views</th>
                    <th className="px-6 py-3 text-left font-medium">Date</th>
                    <th className="px-6 py-3 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {data?.data?.blogs?.map((blog: Blog) => (
                    <tr key={blog._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex gap-4">
                          <Image
                            src={blog.featuredImage.url}
                            alt={blog.featuredImage.alt}
                            width={80}
                            height={60}
                            className="rounded-lg border object-cover"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">
                              {blog.title}
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {blog.excerpt}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-500">
                                {blog.author.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(blog.status)}`}>
                          {blog.status}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Eye size={16} />
                          <span className="font-medium">{blog.views}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {blog.publishedAt
                            ? formatDistanceToNow(new Date(blog.publishedAt), { addSuffix: true })
                            : 'Not published'}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          >
                            <Eye size={18} />
                          </Link>
                          <Link
                            href={`/bunnx-admin/blogs/${blog._id}/edit`}
                            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition"
                          >
                            <Edit size={18} />
                          </Link>
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {data?.data?.pagination && (
              <div className="flex items-center justify-between bg-white rounded-lg border shadow-sm px-6 py-4">
                <p className="text-sm text-gray-600">
                  Showing {(page - 1) * 10 + 1} to{' '}
                  {Math.min(page * 10, data.data.pagination.total)} of{' '}
                  {data.data.pagination.total}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="px-4 text-sm text-gray-700">
                    Page {page} of {data.data.pagination.pages}
                  </span>
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page >= data.data.pagination.pages}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </AdminDashboardLayout>
  );
}






