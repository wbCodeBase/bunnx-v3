'use client';

import { ArrowRight, BookOpen, Send, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ── Helpers ──────────────────────────────────────────────────
function extractHeadings(html) {
  if (typeof window === 'undefined') return [];
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return Array.from(doc.querySelectorAll('h1,h2,h3')).map((h, i) => ({
    id: `heading-${i}`,
    text: h.textContent || '',
    level: parseInt(h.tagName[1]),
  }));
}



export default function BlogContent({ dedicatedBlogPost }) {


  const guideData = dedicatedBlogPost;
  const blog = dedicatedBlogPost;



  const contentRef = useRef(null);
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');

  // Extract headings client-side
  useEffect(() => {
    setHeadings(extractHeadings(blog.content));
  }, [blog.content]);

  // Inject IDs into rendered headings
  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.querySelectorAll('h1,h2,h3').forEach((el, i) => {
      el.id = `heading-${i}`;
    });
  }, [blog.content]);

  // Intersection observer for active heading highlight
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveHeading(e.target.id); }),
      { rootMargin: '-15% 0px -70% 0px' }
    );
    contentRef.current?.querySelectorAll('h1,h2,h3').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [blog.content, headings]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };



  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 sm:py-10 py-5">


      {/* ── 3-Column Layout ──────────────────── */}
      {/* Navigation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 py-10">

        {/* ── LEFT SIDEBAR: Key Points ─────── */}
        <aside className="lg:col-span-3 order-2 lg:order-1">
          <div className="sticky top-24 space-y-5">

            {/* Table of Contents */}
            {headings.length > 0 && (
              <div className="rounded-2xl p-6" style={{ background: '#fff', boxShadow: '0 2px 16px rgba(26,18,8,0.06)' }}>
                <div className="flex items-center gap-2 mb-5">
                  <BookOpen size={15} className="text-orange-500" />
                  <h3 className="text-xs font-semibold uppercase">
                    Key Points
                  </h3>
                </div>
                <nav className="space-y-0.5">
                  {headings.map(h => (
                    <button key={h.id} onClick={() => scrollTo(h.id)}
                      className={`toc-link w-full cursor-pointer text-left px-3 py-2 rounded-r-lg text-sm ${activeHeading === h.id ? 'active' : 'text-gray-500'}`}
                      style={{ paddingLeft: h.level === 1 ? '0.75rem' : h.level === 2 ? '1.25rem' : '1.75rem' }}>
                      {h.text}
                    </button>
                  ))}
                </nav>
              </div>
            )}



          </div>
        </aside>



        <main className="lg:col-span-6 order-1 lg:order-2">

            {/* Excerpt / lede */}
            <p className="italic leading-relaxed mb-10 pb-10 border-b border-gray-200">
              {guideData.excerpt}
            </p>

          <article ref={contentRef}
            className="prose lg:prose-lg max-w-none prose-headings:font-semibold prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: guideData.content || "" }}
          />

          {/* Author bio */}
          <div className="mt-16 p-8 rounded-2xl">
            <div className="flex justify-end items-center gap-5">

              <div>
                <div className="flex justify-center items-center gap-2">Written By <div> <h4 className="text-xl font-bold"> {blog.author?.name}</h4>  </div></div>
                {/* <p className="text-sm mt-0.5">
                  {blog.author?.email}
                </p> */}
              </div>
            </div>
          </div>
        </main>


        {/* ── RIGHT SIDEBAR: CTA + Promos ──── */}
        <aside className="lg:col-span-3 order-3">
          <div className="sticky top-24 space-y-5">

            {/* CTA 1: Explore Agra */}
            <div className="rounded-2xl p-6 overflow-hidden relative"
              style={{ background: '#1A1208' }}>
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-10"
                style={{ background: '#C8873A' }} />
              <div className="relative z-10">
                <span className="text-xs tracking-[0.2em] uppercase font-semibold"
                  style={{ color: '#C8873A', fontFamily: "'Outfit', sans-serif" }}>
                  PLAN YOUR PROJECT
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 leading-snug">
                  Build Software That Scales
                </h3>
                <p className="text-sm leading-relaxed mb-5"
                  style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Outfit', sans-serif" }}>
                  Beyond off-the-shelf solutions custom development, expert architecture, and tailored technology await.
                </p>
                <Link href="/explore"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition hover:opacity-90 bg-orange-500 text-white">
                  Start Building <ArrowRight size={15} />
                </Link>
              </div>
            </div>

      

          </div>
        </aside>


        {/* </div> */}

      </div>


    </section>
  );
}









