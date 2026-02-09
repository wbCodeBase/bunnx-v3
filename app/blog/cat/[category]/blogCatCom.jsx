// "use client"

// import { useParams } from "next/navigation"
// import { HeroSectionCategory } from "@/components/blog/HeroSectionBlog"
// import FeaturedPosts from "@/components/blog/BlogCard"

// export default function BlogCatCom({ allBlogPosts }) {

//     const params = useParams()
//     console.log("Params", params.category)
//     // console.log("allBlogPosts", allBlogPosts)

//     const filteredPost = allBlogPosts?.filter((blogPost) =>
//         blogPost?.categories?.nodes.some(category => params.category === category.slug)
//     );

//     // console.log("filteredPost", filteredPost)

//     return (
//         <>


//             <HeroSectionCategory />

//             <FeaturedPosts featuredPosts={filteredPost} />


//         </>
//     )
// }


