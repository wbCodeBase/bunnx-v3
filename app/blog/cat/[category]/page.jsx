// import { getAllBlogPosts } from "@/lib/blogs";
// import BlogCatCom from "./blogCatCom"


// export async function generateMetadata({ params }) {
//     const currentSlug = `/blog/cat/${params.category}`;

//     const category = params.category
//         .split("-")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");

//     return {
//         title: `${category} Blogs | BunnX`,
//         description: "",
//         robots: "noindex",
//         alternates: {
//             canonical: currentSlug,
//         },
//     };
// }



// export default async function BlogCardByCategory() {


//     const allBlogPosts = await getAllBlogPosts();

//     return (
//         <>

//             <BlogCatCom allBlogPosts={allBlogPosts.nodes} />


//         </>
//     )
// }

