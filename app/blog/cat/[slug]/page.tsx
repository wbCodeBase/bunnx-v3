// app/(public)/blogs/category/[slug]/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';

async function getCategoryData(slug: string) {
  const base = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';


  const [catRes, blogsRes] = await Promise.all([
    // fetch(`${base}/api/categories/slug/deep-tech`, { next: { revalidate: 3600 } }),
    fetch(`${base}/api/categories/slug/${slug}`, { next: { revalidate: 3600 } }),
    fetch(`${base}/api/blogs/category/${slug}`, { next: { revalidate: 300 } }),
  ]);
  // console.log();
  
  const category = catRes.ok ? (await catRes.json()).data : null;
  const blogs = blogsRes.ok ? (await blogsRes.json())?.blogs || [] : [];
  return { category, blogs };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slugParams = await params

  const { category } = await getCategoryData(slugParams?.slug);
  return {
    title: category ? `${category.name} | BunnX` : 'Category',
    description: category?.description,
  };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const data = await params

  if (!data.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F7F3EE' }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", color: '#8B7355' }}>Category not found</p>
      </div>
    );
  }


  const { category, blogs } = await getCategoryData(data?.slug);
  


  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F7F3EE' }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", color: '#8B7355' }}>Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">

      {/* ── Category Hero ────────────────────── */}
      <header className="relative overflow-hidden bg-black">
        {/* Decorative blob */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-5 -translate-x-1/3 -translate-y-1/3"
          style={{ background: '#C8873A' }} />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full opacity-5 translate-x-1/4 translate-y-1/4"
          style={{ background: '#C8873A' }} />

        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 relative z-10">
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-8 transition hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Outfit', sans-serif" }}>
            <ArrowLeft size={16} /> Back to all stories
          </Link>

          <div className="flex items-start gap-5">
            {/* Vertical rule */}
            <div className="w-1 h-20 rounded-full flex-shrink-0 mt-2 bg-orange-500" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3 text-orange-500">
                Category
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {category.name}
              </h1>
              {category.description && (
                <p className="text-base leading-relaxed mt-4 max-w-2xl"
                  style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
                  {category.description}
                </p>
              )}
              <p className="text-sm mt-5"
                style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Outfit', sans-serif" }}>
                {blogs.length} {blogs.length === 1 ? 'story' : 'stories'} in this collection
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Blogs Grid ──────────────────────── */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {blogs.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-2xl font-light italic" style={{ color: '#8B7355' }}>
              No stories in this collection yet
            </p>
            <Link href="/blogs"
              className="inline-block mt-5 text-sm font-medium transition hover:opacity-70"
              style={{ color: '#C8873A', fontFamily: "'Outfit', sans-serif" }}>
              Browse all stories →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any, i: number) => (
              <BlogCard key={i} post={blog} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

