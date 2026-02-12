

import BlogContent from "@/components/blog/BlogContent";
import HeroSectionBlogDetail from "@/components/blog/HeroSectionBlogDetail";
import { notFound } from "next/navigation";

export function extractCleanText(html) {
  if (!html || typeof html !== 'string') return '';

  // Remove all HTML tags
  let cleanText = html.replace(/<\/?[^>]+(>|$)/g, "");

  // Remove escaped newline characters and trim whitespace
  cleanText = cleanText.replace(/\\n/g, "").trim();

  return cleanText;
}

async function getBlog(slug: string) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${base}/blogs/slug/${slug}`, { next: { revalidate: 300 } });
  if (!res.ok) return null;
  const result = await res.json();
  return result.data;
}



export async function generateMetadata({ params }) {
  const paramsSlug = await params;
  const blog = await getBlog(paramsSlug.slug);
  if (!blog) return { title: 'Not Found' };
  const currentSlug = `/blog/${paramsSlug.slug}`;

  return {
    title: `${blog?.seo?.metaTitle} | BunnX`,
    description: extractCleanText(blog?.seo?.metaDescription),
    robots: "noindex",
    alternates: {
      canonical: currentSlug,
    },
  }
}



export default async function BlogPost({ params }) {

  const paramsSlug = await params;
  const blog = await getBlog(paramsSlug.slug);
  
  if (!blog) notFound();


  return (
    <>

      <HeroSectionBlogDetail dedicatedBlogPost={blog} />
      <BlogContent dedicatedBlogPost={blog} />

    </>
  )
}





