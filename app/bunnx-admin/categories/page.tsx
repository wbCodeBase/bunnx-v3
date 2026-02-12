// app/bunnx-admin/categories/page.tsx
'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import AdminDashboardLayout from '@/components/adminpanel/AdminpanelLayout';
import { useEffect } from 'react';

async function fetchCategories() {
    const response = await fetch('/api/categories');
    if (!response.ok) throw new Error('Failed to fetch categories');
    const result = await response.json();
    return result.data || [];
}

export default function CategoriesPage() {
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    });

    useEffect(() => {
        refetch();
    }, [refetch]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this category?')) return;

        try {
            const response = await fetch(`/api/categories/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                toast.success('Category deleted successfully!');
                refetch();
            } else {
                toast.error('Failed to delete category');
            }
        } catch (error) {
            console.error('Error deleting category:', error);
            toast.error('Failed to delete category');
        }
    };

    return (

        <AdminDashboardLayout>

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
                        <p className="text-gray-600 mt-1">Manage blog categories</p>
                    </div>
                    <Link
                        href="/bunnx-admin/categories/new"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <Plus size={20} />
                        New Category
                    </Link>
                </div>

                {/* Categories List */}
                {isLoading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    </div>
                ) : categories.length === 0 ? (
                    <div className="bg-white rounded-lg shadow p-12 text-center">
                        <p className="text-gray-600 mb-4">No categories yet</p>
                        <Link
                            href="/bunnx-admin/categories/new"
                            className="text-blue-600 hover:underline"
                        >
                            Create your first category
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <div
                                key={category._id}
                                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    /category/{category.slug}
                                </p>
                                {category.description && (
                                    <p className="text-gray-700 mb-4 line-clamp-2">
                                        {category.description}
                                    </p>
                                )}
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={`/bunnx-admin/categories/${category._id}/edit`}
                                        className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                                    >
                                        <Edit size={16} />
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(category._id)}
                                        className="flex items-center gap-2 px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                                    >
                                        <Trash2 size={16} />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </AdminDashboardLayout>

    );
}