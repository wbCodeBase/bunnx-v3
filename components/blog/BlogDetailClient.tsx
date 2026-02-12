
// ─────────────────────────────────────────────────────────────
// components/blog/BlogDetailClient.tsx   (Client Component)
// ─────────────────────────────────────────────────────────────
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import {
  Clock, Eye, Calendar, Copy, Send, ArrowRight,
  MessageSquare, Heart, Reply, ChevronDown, ChevronUp,
  Star, ArrowLeft, Twitter, Facebook, X, BookOpen,
} from 'lucide-react';

// ── Types ────────────────────────────────────────────────────
interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: { url: string; alt: string };
  categories: {
    slug: any; _id: string; name: string 
}[];
  tags: string[];
  author: { name: string; email: string; avatar?: string };
  readTime: number;
  views: number;
  publishedAt: string;
  seo?: { metaTitle?: string; metaDescription?: string };
}

interface Comment {
  _id: string;
  content: string;
  author: { _id: string; name: string; image?: string };
  likes: string[];
  replies: Reply[];
  createdAt: string;
}

interface Reply {
  _id: string;
  content: string;
  author: { _id: string; name: string; image?: string };
  likes: string[];
  createdAt: string;
}

interface Heading { id: string; text: string; level: number }

// ── Helpers ──────────────────────────────────────────────────
function extractHeadings(html: string): Heading[] {
  if (typeof window === 'undefined') return [];
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return Array.from(doc.querySelectorAll('h1,h2,h3')).map((h, i) => ({
    id: `heading-${i}`,
    text: h.textContent || '',
    level: parseInt(h.tagName[1]),
  }));
}


// ── Main Component ────────────────────────────────────────────
export default function BlogDetailClient({ blog }: { blog: Blog }) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const contentRef = useRef<HTMLDivElement>(null);

  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState('');
  const [comment, setComment] = useState('');
  const [replyTo, setReplyTo] = useState<{ id: string; name: string } | null>(null);
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set());
  const [shareOpen, setShareOpen] = useState(false);

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    if (platform === 'copy') { navigator.clipboard.writeText(url); toast.success('Link copied!'); }
    else if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(url)}`);
    else if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
    else if (platform === 'whatsapp') window.open(`https://wa.me/?text=${encodeURIComponent(blog.title + ' ' + url)}`);
    setShareOpen(false);
  };

  
  // ── Render ──────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: '#F7F3EE', fontFamily: "'Cormorant Garamond', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');
        :root { --ink: #1A1208; --amber: #C8873A; --cream: #F7F3EE; --warm-gray: #8B7355; }

        /* Blog content styles */
        .blog-body { font-family: 'Outfit', sans-serif; font-size: 1.05rem; line-height: 1.9; color: #3A2E22; }
        .blog-body h1,.blog-body h2,.blog-body h3 { font-family: 'Cormorant Garamond', serif; color: var(--ink); margin: 2.5rem 0 1rem; scroll-margin-top: 100px; }
        .blog-body h1 { font-size: 2.2rem; font-weight: 700; line-height: 1.2; }
        .blog-body h2 { font-size: 1.8rem; font-weight: 700; line-height: 1.25; border-left: 3px solid var(--amber); padding-left: 1rem; }
        .blog-body h3 { font-size: 1.35rem; font-weight: 600; }
        .blog-body p { margin: 0 0 1.5rem; }
        .blog-body img { width: 100%; border-radius: 1rem; margin: 2rem 0; box-shadow: 0 12px 40px rgba(26,18,8,0.12); }
        .blog-body blockquote { border-left: 4px solid var(--amber); padding: 1.25rem 1.75rem; margin: 2rem 0; background: rgba(200,135,58,0.06); border-radius: 0 0.75rem 0.75rem 0; font-style: italic; color: #7A6448; font-size: 1.15rem; }
        .blog-body ul,.blog-body ol { padding-left: 1.75rem; margin: 1rem 0 1.5rem; }
        .blog-body li { margin: 0.5rem 0; }
        .blog-body a { color: var(--amber); text-decoration: underline; text-underline-offset: 3px; }
        .blog-body strong { color: var(--ink); font-weight: 600; }
        .blog-body code { background: #EDE8E1; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.88rem; }
        .blog-body pre { background: #1A1208; color: #E8D5B0; padding: 1.5rem; border-radius: 1rem; overflow-x: auto; margin: 1.5rem 0; }

        /* TOC */
        .toc-link { font-family: 'Outfit', sans-serif; transition: all 0.2s ease; border-left: 2px solid transparent; }
        .toc-link:hover { border-left-color: rgba(200,135,58,0.4); color: var(--ink); }
        .toc-link.active { border-left-color: var(--amber) !important; color: var(--amber) !important; font-weight: 600; background: rgba(200,135,58,0.06); }

        /* Comment */
        .comment-card { transition: box-shadow 0.2s ease; }
        .comment-card:hover { box-shadow: 0 4px 20px rgba(26,18,8,0.08); }
        @keyframes slideIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .slide-in { animation: slideIn 0.3s ease; }
      `}</style>

      {/* ── Hero Image ───────────────────────── */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src={blog.featuredImage?.url || '/placeholder.jpg'}
          alt={blog.featuredImage?.alt || blog.title}
          fill className="object-cover" priority
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.3) 50%, transparent 100%)' }} />

        {/* Back btn */}
        <Link href="/blog"
          className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition hover:opacity-80"
          style={{
            background: 'rgba(26,18,8,0.5)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            fontFamily: "'Outfit', sans-serif",
          }}>
          <ArrowLeft size={15} /> Back
        </Link>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <div className="max-w-4xl">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.categories?.map(cat => (
                <Link key={cat._id} href={`/blog/cat/${cat.slug}`}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition hover:opacity-80"
                  style={{ background: '#C8873A', color: '#fff', fontFamily: "'Outfit', sans-serif" }}>
                  {cat.name}
                </Link>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm"
              style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Outfit', sans-serif" }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0"
                  style={{ background: '#C8873A', color: '#1A1208' }}>
                  {blog.author?.name?.[0]}
                </div>
                {blog.author?.name}
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {blog.readTime} min read</span>
              <span className="flex items-center gap-1.5"><Eye size={13} /> {blog.views?.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3-Column Layout ──────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── LEFT SIDEBAR: Key Points ─────── */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-24 space-y-5">

              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="rounded-2xl p-6" style={{ background: '#fff', boxShadow: '0 2px 16px rgba(26,18,8,0.06)' }}>
                  <div className="flex items-center gap-2 mb-5">
                    <BookOpen size={15} style={{ color: '#C8873A' }} />
                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase"
                      style={{ color: '#8B7355', fontFamily: "'Outfit', sans-serif" }}>
                      Key Points
                    </h3>
                  </div>
                  <nav className="space-y-0.5">
                    {headings.map(h => (
                      <button key={h.id} onClick={() => scrollTo(h.id)}
                        className={`toc-link w-full text-left px-3 py-2 rounded-r-lg text-sm ${activeHeading === h.id ? 'active' : 'text-gray-500'}`}
                        style={{ paddingLeft: h.level === 1 ? '0.75rem' : h.level === 2 ? '1.25rem' : '1.75rem' }}>
                        {h.text}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Share */}
              <div className="rounded-2xl p-6" style={{ background: '#fff', boxShadow: '0 2px 16px rgba(26,18,8,0.06)' }}>
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                  style={{ color: '#8B7355', fontFamily: "'Outfit', sans-serif" }}>
                  Share This
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Copy, label: 'Copy Link', p: 'copy' },
                    { icon: Twitter, label: 'Twitter', p: 'twitter' },
                    { icon: Facebook, label: 'Facebook', p: 'facebook' },
                    { icon: Send, label: 'WhatsApp', p: 'whatsapp' },
                  ].map(({ icon: Icon, label, p }) => (
                    <button key={p} onClick={() => handleShare(p)}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium border transition hover:border-amber-400 hover:text-amber-700"
                      style={{ borderColor: '#E5DDD5', color: '#8B7355', fontFamily: "'Outfit', sans-serif" }}>
                      <Icon size={13} /> {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {blog.tags?.length > 0 && (
                <div className="rounded-2xl p-6" style={{ background: '#fff', boxShadow: '0 2px 16px rgba(26,18,8,0.06)' }}>
                  <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                    style={{ color: '#8B7355', fontFamily: "'Outfit', sans-serif" }}>
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map(tag => (
                      <span key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: '#F0EBE4', color: '#8B7355', fontFamily: "'Outfit', sans-serif" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* ── CENTER: Blog Content ─────────── */}
          <main className="lg:col-span-6 order-1 lg:order-2">
            {/* Excerpt / lede */}
            <p className="text-xl md:text-2xl italic leading-relaxed mb-10 pb-10"
              style={{ color: '#7A6448', borderBottom: '1px solid #E5DDD5' }}>
              {blog.excerpt}
            </p>

            {/* Blog body */}
            <div ref={contentRef} className="blog-body"
              dangerouslySetInnerHTML={{ __html: blog.content }} />

            {/* Author bio */}
            <div className="mt-16 p-8 rounded-2xl" style={{ background: '#1A1208' }}>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-2xl"
                  style={{ background: '#C8873A', color: '#1A1208' }}>
                  {blog.author?.name?.[0]}
                </div>
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase mb-1"
                    style={{ color: '#C8873A', fontFamily: "'Outfit', sans-serif" }}>
                    Written by
                  </p>
                  <h4 className="text-xl font-bold text-white">{blog.author?.name}</h4>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Outfit', sans-serif" }}>
                    {blog.author?.email}
                  </p>
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
                    Plan Your Visit
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3 leading-snug">
                    Discover Hidden Agra
                  </h3>
                  <p className="text-sm leading-relaxed mb-5"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Outfit', sans-serif" }}>
                    Beyond the Taj Mahal — local markets, authentic cuisine, and forgotten history await.
                  </p>
                  <Link href="/explore"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition hover:opacity-90"
                    style={{ background: '#C8873A', color: '#1A1208', fontFamily: "'Outfit', sans-serif" }}>
                    Explore Now <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* CTA 2: Register Business */}
              <div className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg,#FDF6EC,#FFF8EE)', border: '1px solid #F0DFC4' }}>
                <span className="text-xs tracking-[0.2em] uppercase font-semibold"
                  style={{ color: '#C8873A', fontFamily: "'Outfit', sans-serif" }}>
                  For Businesses
                </span>
                <h3 className="text-lg font-bold mt-2 mb-3" style={{ color: '#1A1208' }}>
                  Get Featured Here
                </h3>
                <ul className="space-y-2 mb-5">
                  {['Free business listing', '10,000+ monthly readers', 'Accept bookings online', 'Appear in search'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm"
                      style={{ color: '#5A4A38', fontFamily: "'Outfit', sans-serif" }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{ background: '#C8873A', color: '#fff' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/auth/signin"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition hover:opacity-90"
                  style={{ background: '#1A1208', color: '#fff', fontFamily: "'Outfit', sans-serif" }}>
                  List My Business <ArrowRight size={15} />
                </Link>
              </div>

              {/* CTA 3: Newsletter */}
              <div className="rounded-2xl p-6" style={{ background: '#fff', boxShadow: '0 2px 16px rgba(26,18,8,0.06)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: '#1A1208' }}>
                  <Send size={18} style={{ color: '#C8873A' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1A1208' }}>Weekly Stories</h3>
                <p className="text-sm leading-relaxed mb-4"
                  style={{ color: '#8B7355', fontFamily: "'Outfit', sans-serif" }}>
                  Agra's best stories, straight to your inbox every week.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl text-sm mb-2 focus:outline-none transition"
                  style={{
                    border: '1.5px solid #E5DDD5',
                    fontFamily: "'Outfit', sans-serif",
                    color: '#1A1208',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#C8873A')}
                  onBlur={e => (e.target.style.borderColor = '#E5DDD5')}
                />
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-semibold transition hover:opacity-90"
                  style={{ background: '#C8873A', color: '#1A1208', fontFamily: "'Outfit', sans-serif" }}>
                  Subscribe Free
                </button>
              </div>

              {/* Promo: Testimonial */}
              <div className="rounded-2xl p-6" style={{ background: '#fff', boxShadow: '0 2px 16px rgba(26,18,8,0.06)' }}>
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={15} fill="#C8873A" style={{ color: '#C8873A' }} />
                  ))}
                </div>
                <p className="text-base italic leading-relaxed mb-4" style={{ color: '#5A4A38' }}>
                  "The most authentic guide to Agra I've ever read. Every article feels like a letter from a local friend."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: '#C8873A', color: '#1A1208' }}>P</div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#1A1208' }}>Priya Sharma</p>
                    <p className="text-xs" style={{ color: '#B0A090', fontFamily: "'Outfit', sans-serif" }}>
                      Travel Blogger
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}