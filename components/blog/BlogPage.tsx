"use client"

import { useState } from "react";
import Lottie from "lottie-react";
import { useQuery } from '@tanstack/react-query';
import FeaturedPosts from '@/components/blog/BlogCard'
import loaderJson from "@/public/pageAnimations/loader.json";
import { HeroSectionBlog } from '@/components/blog/HeroSectionBlog'
import FeaturedSection from '@/components/blog/FeaturedSection'



async function fetchBlogs(page: number) {
  const params = new URLSearchParams({
    status: 'published',
    page: page.toString(),
    limit: '9',
  });
  const res = await fetch(`/api/blogs?${params}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}



export default function BlogPage() {

  const [page, setPage] = useState(1);



  const { data, isLoading } = useQuery({
    queryKey: ['public-blogs', page],
    queryFn: () => fetchBlogs(page),
  });



  const blogs = data?.data?.blogs || [];
  // const pagination = data?.data?.pagination;



  if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <Lottie animationData={loaderJson} loop={true} />
            </div>
        );
    }


  return (
    
    <>

      <HeroSectionBlog />
      

      <FeaturedSection latestBlog={blogs[0]} />


      <FeaturedPosts featuredPosts={blogs} /> 

      
    </>
  )
}




// // app/(public)/blog/page.tsx
// 'use client';

// import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Clock, Eye, ArrowRight, Search } from 'lucide-react';

// async function fetchBlogs(category: string, search: string, page: number) {
//   const params = new URLSearchParams({
//     status: 'published',
//     page: page.toString(),
//     limit: '9',
//     ...(category && category !== 'all' && { category }),
//     ...(search && { search }),
//   });
//   const res = await fetch(`/api/blogs?${params}`);
//   if (!res.ok) throw new Error('Failed to fetch');
//   return res.json();
// }

// async function fetchCategories() {
//   const res = await fetch('/api/categories');
//   if (!res.ok) throw new Error('Failed to fetch categories');
//   const result = await res.json();
//   return result.data || [];
// }

// export default function BlogsPage() {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [search, setSearch] = useState('');
//   const [searchInput, setSearchInput] = useState('');
//   const [page, setPage] = useState(1);

//   const { data: categoriesData } = useQuery({
//     queryKey: ['categories'],
//     queryFn: fetchCategories,
//   });

//   const { data, isLoading } = useQuery({
//     queryKey: ['public-blogs', selectedCategory, search, page],
//     queryFn: () => fetchBlogs(selectedCategory, search, page),
//   });

//   const blogs = data?.data?.blogs || [];
//   const pagination = data?.data?.pagination;
//   const categories = categoriesData || [];

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSearch(searchInput);
//     setPage(1);
//   };

//   const handleCategoryChange = (slug: string) => {
//     setSelectedCategory(slug);
//     setPage(1);
//   };

//   return (
//     <div className="min-h-screen" style={{
//       // background: '#F7F3EE',
//       fontFamily: "'Cormorant Garamond', serif"
//     }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');
//         :root {
//           --ink: #1A1208;
//           --amber: #C8873A;
//           --cream: #F7F3EE;
//           --warm-gray: #8B7355;
//         }
//         .blog-card { transition: transform 0.35s cubic-bezier(.25,.46,.45,.94), box-shadow 0.35s ease; }
//         .blog-card:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(26,18,8,0.15); }
//         .blog-card:hover .img-zoom { transform: scale(1.06); }
//         .img-zoom { transition: transform 0.6s cubic-bezier(.25,.46,.45,.94); }
//         .cat-pill { transition: all 0.2s ease; font-family: 'Outfit', sans-serif; }
//         .cat-pill:hover { letter-spacing: 0.08em; }
//         .search-input { font-family: 'Outfit', sans-serif; }
//         .featured-badge {
//           background: linear-gradient(135deg, #C8873A, #E8A855);
//           font-family: 'Outfit', sans-serif;
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .card-appear { animation: fadeUp 0.5s ease forwards; }
//         .card-appear:nth-child(2) { animation-delay: 0.1s; }
//         .card-appear:nth-child(3) { animation-delay: 0.15s; }
//         .card-appear:nth-child(4) { animation-delay: 0.2s; }
//         .card-appear:nth-child(5) { animation-delay: 0.25s; }
//         .card-appear:nth-child(6) { animation-delay: 0.3s; }
//       `}</style>

//       {/* ── Hero Header ─────────────────────── */}
//       <header style={{ background: 'var(--ink)' }} className="relative overflow-hidden">
//         {/* Decorative grain texture */}
//         <div className="absolute inset-0 opacity-[0.03]"
//           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

//         {/* Decorative circle */}
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5"
//           style={{ background: 'var(--amber)', transform: 'translate(30%, -40%)' }} />

//         <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative z-10">
//           {/* Eyebrow */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="h-px w-12" style={{ background: 'var(--amber)' }} />
//             <span className="text-xs tracking-[0.3em] uppercase text-amber-400"
//               style={{ fontFamily: "'Outfit', sans-serif" }}>
//               Stories &amp; Insights
//             </span>
//           </div>

//           <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] mb-6">
//             The<br />
//             <em className="font-normal" style={{ color: 'var(--amber)' }}>Journal</em>
//           </h1>

//           <p className="text-gray-400 text-lg max-w-lg leading-relaxed mb-10"
//             style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
//             Explore the culture, history, and vibrant city life of Agra — told through our carefully crafted stories.
//           </p>



//           {/* Search */}
//           <form onSubmit={handleSearch} className="flex gap-3 max-w-lg">
//             <div className="relative flex-1">
//               <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 type="text"
//                 value={searchInput}
//                 onChange={e => setSearchInput(e.target.value)}
//                 placeholder="Search stories..."
//                 className="search-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition"
//                 style={{
//                   background: 'rgba(255,255,255,0.07)',
//                   border: '1px solid rgba(255,255,255,0.1)',
//                   '--tw-ring-color': 'var(--amber)',
//                 } as any}
//               />
//             </div>
//             <button type="submit"
//               className="px-6 py-3.5 rounded-xl text-sm font-semibold transition hover:opacity-90"
//               style={{ background: 'var(--amber)', color: 'var(--ink)', fontFamily: "'Outfit', sans-serif" }}>
//               Search
//             </button>
//           </form>



//         </div>
//       </header>

//       {/* ── Sticky Category Filter ───────────── */}
//       <div className="sticky top-0 z-30 border-b"
//         style={{ background: 'rgba(247,243,238,0.95)', backdropFilter: 'blur(12px)', borderColor: '#E5DDD5' }}>
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">

//             {[{ slug: 'all', name: 'All Stories' }, ...categories].map((c: any) => {
//               const label = c.slug === 'all' ? 'All Stories' : c.name;
//               const isActive = selectedCategory === c.slug;

//              {/* {['all', ...categories.map((c: any) => c.slug)].map((slug, i) => {
//                const label = slug === 'all' ? 'All Stories' : categories.find((c: any) => c.slug === slug)?.name || slug;
//                const isActive = selectedCategory === slug; */}
               
//               return (
//                 <button key={c.slug} onClick={() => handleCategoryChange(c._id)}
//                   className="cat-pill flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium border"
//                   style={{
//                     background: isActive ? 'var(--ink)' : 'transparent',
//                     color: isActive ? '#fff' : 'var(--warm-gray)',
//                     borderColor: isActive ? 'var(--ink)' : '#D4C9BC',
//                     letterSpacing: isActive ? '0.04em' : '0.02em',
//                   }}>
//                   {label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── Blogs Grid ──────────────────────── */}
//       <main className="max-w-6xl mx-auto px-6 py-16">
//         {isLoading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="animate-pulse rounded-2xl overflow-hidden">
//                 <div className="h-56 rounded-2xl mb-4" style={{ background: '#E5DDD5' }} />
//                 <div className="h-4 rounded mb-2 w-3/4" style={{ background: '#E5DDD5' }} />
//                 <div className="h-3 rounded w-1/2" style={{ background: '#E5DDD5' }} />
//               </div>
//             ))}
//           </div>
//         ) : blogs.length === 0 ? (
//           <div className="text-center py-32">
//             <p className="text-2xl font-light italic" style={{ color: 'var(--warm-gray)' }}>
//               No stories found
//             </p>
//           </div>
//         ) : (
//           <>
//             {/* ── Featured First Blog ──── */}
//             {blogs[0] && (
//               <Link href={`/blog/${blogs[0].slug}`} className="block mb-14 blog-card card-appear group">
//                 <div className="grid md:grid-cols-5 rounded-3xl overflow-hidden shadow-xl">
//                   {/* Image — 3 cols */}
//                   <div className="md:col-span-3 relative h-72 md:h-auto min-h-[320px] overflow-hidden">
//                     <Image
//                       src={blogs[0].featuredImage?.url || '/placeholder.jpg'}
//                       alt={blogs[0].featuredImage?.alt || blogs[0].title}
//                       fill className="object-cover img-zoom"
//                     />
//                     <div className="absolute inset-0"
//                       style={{ background: 'linear-gradient(to right, transparent 70%, rgba(26,18,8,0.4))' }} />
//                   </div>
//                   {/* Content — 2 cols */}
//                   <div className="md:col-span-2 flex flex-col justify-between p-10"
//                     style={{ background: 'var(--ink)' }}>
//                     <div>
//                       <div className="flex items-center gap-2 mb-5">
//                         <span className="featured-badge px-3 py-1 text-xs font-semibold rounded-full tracking-wider uppercase text-white">
//                           Featured
//                         </span>
//                         {blogs[0].categories?.[0] && (
//                           <span className="px-3 py-1 border rounded-full text-xs"
//                             style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', fontFamily: "'Outfit', sans-serif" }}>
//                             {blogs[0].categories[0].name}
//                           </span>
//                         )}
//                       </div>
//                       <h2 className="text-3xl font-bold leading-tight text-white mb-4 group-hover:text-amber-300 transition">
//                         {blogs[0].title}
//                       </h2>
//                       <p className="text-sm leading-relaxed line-clamp-3"
//                         style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Outfit', sans-serif" }}>
//                         {blogs[0].excerpt}
//                       </p>
//                     </div>
//                     <div className="pt-6 border-t flex items-center justify-between"
//                       style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
//                       <div className="flex items-center gap-4 text-xs"
//                         style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Outfit', sans-serif" }}>
//                         <span className="flex items-center gap-1"><Clock size={12} /> {blogs[0].readTime} min</span>
//                         <span className="flex items-center gap-1"><Eye size={12} /> {blogs[0].views?.toLocaleString()}</span>
//                       </div>
//                       <span className="flex items-center gap-2 text-sm font-medium"
//                         style={{ color: 'var(--amber)', fontFamily: "'Outfit', sans-serif" }}>
//                         Read <ArrowRight size={14} />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             )}

//             {/* ── Standard Grid ── */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {blogs.slice(1).map((blog: any, i: number) => (
//                 <Link key={blog._id} href={`/blog/${blog.slug}`}
//                   className="blog-card card-appear group flex flex-col rounded-2xl overflow-hidden"
//                   style={{ background: '#fff', boxShadow: '0 2px 16px rgba(26,18,8,0.06)' }}>
//                   {/* Image */}
//                   <div className="relative h-52 overflow-hidden">
//                     <Image
//                       src={blog.featuredImage?.url || '/placeholder.jpg'}
//                       alt={blog.featuredImage?.alt || blog.title}
//                       fill className="object-cover img-zoom"
//                     />
//                     {blog.categories?.[0] && (
//                       <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
//                         style={{
//                           background: 'rgba(247,243,238,0.92)',
//                           color: 'var(--ink)',
//                           fontFamily: "'Outfit', sans-serif",
//                           backdropFilter: 'blur(8px)',
//                         }}>
//                         {blog.categories[0].name}
//                       </span>
//                     )}
//                   </div>
//                   {/* Body */}
//                   <div className="flex flex-col flex-1 p-6">
//                     <h3 className="text-xl font-bold leading-snug mb-3 line-clamp-2 group-hover:text-amber-700 transition"
//                       style={{ color: 'var(--ink)' }}>
//                       {blog.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed line-clamp-2 flex-1"
//                       style={{ color: 'var(--warm-gray)', fontFamily: "'Outfit', sans-serif" }}>
//                       {blog.excerpt}
//                     </p>
//                     <div className="flex items-center justify-between mt-5 pt-5 border-t"
//                       style={{ borderColor: '#F0EBE4' }}>
//                       <div className="flex items-center gap-3 text-xs"
//                         style={{ color: '#B0A090', fontFamily: "'Outfit', sans-serif" }}>
//                         <span className="flex items-center gap-1"><Clock size={11} /> {blog.readTime} min</span>
//                         <span className="flex items-center gap-1"><Eye size={11} /> {blog.views?.toLocaleString()}</span>
//                       </div>
//                       <ArrowRight size={16} className="group-hover:translate-x-1 transition"
//                         style={{ color: 'var(--amber)' }} />
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* ── Pagination ── */}
//             {pagination && pagination.pages > 1 && (
//               <div className="flex items-center justify-center gap-4 mt-16">
//                 <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
//                   className="px-7 py-3 rounded-xl text-sm font-medium border transition hover:border-amber-700 disabled:opacity-30"
//                   style={{ borderColor: '#D4C9BC', color: 'var(--warm-gray)', fontFamily: "'Outfit', sans-serif" }}>
//                   ← Previous
//                 </button>
//                 <span className="text-sm" style={{ color: 'var(--warm-gray)', fontFamily: "'Outfit', sans-serif" }}>
//                   {page} / {pagination.pages}
//                 </span>
//                 <button onClick={() => setPage(p => p + 1)} disabled={page >= pagination.pages}
//                   className="px-7 py-3 rounded-xl text-sm font-semibold transition hover:opacity-90 disabled:opacity-30"
//                   style={{ background: 'var(--ink)', color: '#fff', fontFamily: "'Outfit', sans-serif" }}>
//                   Next →
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   );
// }