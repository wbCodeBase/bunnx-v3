"use client"

import { useState } from "react";
import Lottie from "lottie-react";
import loaderJson from "@/public/pageAnimations/loader.json";
import { useQuery } from '@tanstack/react-query';
import FeaturedPosts from '@/components/blog/BlogCard'
import { HeroSectionBlog } from '@/components/blog/HeroSectionBlog'
import FeaturedSection from '@/components/blog/FeaturedSection'
import { ArrowLeft, ArrowRight } from "lucide-react";



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
  const pagination = data?.data?.pagination;



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



      
             {/* ── Pagination ── */}
             {pagination && pagination.pages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-16">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                  className="px-7 cursor-pointer py-3 flex items-center gap-1 justify-between border-2 rounded-xl text-sm font-medium transition hover:border-orange-500 hover:text-orange-500 disabled:opacity-30 bg-gray-50">
                   <ArrowLeft className="h-4 font-semibold"/> <span> Previous </span>
                </button>
                <span className="text-sm">
                  {page} / {pagination.pages}
                </span>
                <button onClick={() => setPage(p => p + 1)} disabled={page >= pagination.pages}
                  className="px-7 cursor-pointer py-3 flex items-center gap-1 justify-between border-2 rounded-xl text-sm font-semibold transition hover:border-orange-500 hover:text-orange-500 hover:opacity-90 disabled:opacity-30 bg-gray-50">
                  Next <ArrowRight className="h-4 font-semibold"/>
                </button>
              </div>
             )}


      
    </>
  )
}


