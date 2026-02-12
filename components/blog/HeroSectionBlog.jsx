"use client"


import { IoReader } from "react-icons/io5";

import Link from "next/link";
import { useParams } from "next/navigation";

// import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import BlogSearch from "@/components/blog/BlogSearch"

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


async function fetchCategories() {
  const res = await fetch('/api/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  const result = await res.json();
  return result.data || [];
}



export const HeroSectionBlog = () => {


  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const categories = categoriesData || [];


  // In your component:
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };




  return (
    <>
      <section className="bg-black">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full lg:p-10">

          <div className="sm:mt12 w-full py-6 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div className="text-center">
              <h1 className="lg:text-6xl text-4xl my-4 font-semibold text-white">All Blogs</h1>
              <p className="text-gray-300 lg:text-2xl text-xl my-4 font-medium">Your Trusted Source For Software Development Wisdom</p>
              <p className="lg:text-lg text-gray-300 text-lg my-4 font-medium">Get expert guidance and real-world tips from industry leaders, making your journey through the world of software development smoother, smarter, and more rewarding.</p>


              <div className="flex md:flex-nowrap flex-wrap gap-8 justify-around items-center mt-16 py-6">


                {/* Search */}
                {/* <form className="flex gap-3 max-w-md w-full">
                  <div className="relative flex-1">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      value={searchInput}
                      onChange={e => setSearchInput(e.target.value)}
                      placeholder="Search stories..."
                      className="text-black w-full pl-11 pr-4 py-3.5 rounded-full bg-white text-md placeholder-gray-500 focus:outline-none focus:ring-1 transition"
                    />
                  </div>
                </form> */}

                <BlogSearch />



                <div className="relative lg:w-1/2 w-full">
                  {/* Left Arrow */}
                  {showLeftArrow && (
                    <button
                      onClick={() => scroll('left')}
                      className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}

                  {/* Categories Container */}
                  <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-2 overflow-x-auto pb-1 max-w-xl mx-auto scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {categories.map((c) => {
                      return (
                        <Link
                          href={`/blog/cat/${c?.slug}`}
                          key={c?.slug}
                          className="shrink-0 px-5 py-2 rounded-full bg-gray-600 text-white text-md hover:bg-orange-500 font-medium border cursor-pointer"
                        >
                          {c.name}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Right Arrow */}
                  {showRightArrow && (
                    <button
                      onClick={() => scroll('right')}
                      className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>

              </div>


            </div>
          </div>


        </div>
      </section>
    </>
  )
}


function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}



export const HeroSectionCategory = () => {

  const params = useParams()
  console.log("Params", params.category)


  return (
    <>
      <section className="bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full lg:p-10">

          <div className="sm:mt12 w-full py-6 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div className="text-center">
              <h1 className="lg:text-6xl text-4xl my-4 font-semibold">{formatparameter(params.category)}</h1>
              <p className="text-gray-300 lg:text-2xl text-xl my-4 font-medium">Your Trusted Source For Software Development Wisdom</p>
              <p className="lg:text-lg text-gray-300 text-lg my-4 font-medium">Get expert guidance and real-world tips from industry leaders, making your journey through the world of software development smoother, smarter, and more rewarding.</p>

              <div className="flex items-center justify-center gap-10">

                <button className="flex items-center justify-center sm:justify-start ">
                  <Link href="/blog" className='flex items-center justify-center mt-2 p-1.5 hover:bg-orange-500 font-medium text-md border border-white rounded-full text-white'>
                    <span className='bg-white rounded-full p-2 text-black'> <IoReader fontSize={20} /> </span>
                    <span className="px-2"> All Posts </span>
                  </Link>
                </button>

              </div>

            </div>
          </div>


        </div>
      </section>
    </>
  )
}




