

// import BlogContent from "@/components/blog/BlogContent";
// import HeroSectionBlogDetail from "@/components/blog/HeroSectionBlogDetail";
// import { getSingleBlogPost } from "@/lib/blogs"

// export function extractCleanText(html) {
//   if (!html || typeof html !== 'string') return '';

//   // Remove all HTML tags
//   let cleanText = html.replace(/<\/?[^>]+(>|$)/g, "");

//   // Remove escaped newline characters and trim whitespace
//   cleanText = cleanText.replace(/\\n/g, "").trim();

//   return cleanText;
// }



// export async function generateMetadata({ params }) {
//     const currentSlug = `/blog/${params.slug}`;
// //   const meta = {};

//   const singleBlogPost = await getSingleBlogPost(params.slug);  
//   // console.log("singleBlogPost", singleBlogPost);

//   return { 
//     title: `${singleBlogPost?.title} | BunnX`,
//     description: extractCleanText(singleBlogPost?.excerpt),
//     robots: "noindex",  
//     alternates: {
//       canonical: currentSlug,
//     },
//   }
// }


// export default async function BlogPost({params}) {


//     const singleBlogPost = await getSingleBlogPost(params.slug);  


//     return (
//         <>

//             <HeroSectionBlogDetail dedicatedBlogPost={singleBlogPost} />
//             <BlogContent dedicatedBlogPost={singleBlogPost} />

//         </>
//     )
// }

