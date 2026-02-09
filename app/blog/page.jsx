// import dynamic from 'next/dynamic'
// import { HeroSectionBlog } from '@/components/blog/HeroSectionBlog'
// const FeaturedPosts = dynamic(() => import('@/components/blog/BlogCard'), { ssr: true })
// import { getAllBlogPosts } from "@/lib/blogs"
// import { Suspense } from "react";


// export const metadata = {
//   title: "Blog | BunnX",
//   description: 'Read the latest articles on the Bunnx blog. Stay up to date with the latest news, trends, and insights from the world of finance and technology.',
//   robots: "noindex",
// }


// const Blog = async () => {

//   const allBlogPosts = await getAllBlogPosts();

//   const latestBlog = allBlogPosts.nodes.reduce((latest, blog) => {
//     return new Date(blog.date) > new Date(latest.date) ? blog : latest;
//   }, allBlogPosts.nodes[0]); // Start with the first blog



//   return (
//     <>

//       <HeroSectionBlog latestBlog={latestBlog} />
//       <Suspense fallback={<p>Loading posts...</p>}>
//         <FeaturedPosts featuredPosts={allBlogPosts?.nodes} />
//       </Suspense>
//     </>
//   )
// }

// export default Blog