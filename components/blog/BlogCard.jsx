import Image from "next/image"
import Link from "next/link"


export default function FeaturedPosts({ featuredPosts }) {


    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">Featured Posts</h2> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts && featuredPosts?.map((post, i) => (
                        <BlogCard key={i} post={post} />
                    ))}
                </div>

            </div>
        </section>
    )
}






// GraphQl
export function BlogCard({ post }) {


    return (
        <Link href={post.slug ? `/blog/${post.slug}` : "/"}>
            <article className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                <div className="relative h64 w-full overflow-hidden">
                    <Image
                        src={post.featuredImage.url}
                        alt={post.title}
                        width="600"
                        height="400"
                    />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-4 flex flex-wrap gap-2">

                        {post.categories.map((category) => (
                            // <Link href={category.slug} key={category.slug} className="inline-block py-1 px-3 rounded-full border border-orange-500 text-orange-500 font-medium">
                            <div key={category.slug} className="inline-block py-1 px-3 rounded-full border border-orange-500 text-orange-500 font-medium">
                                {category.name}
                            </div>
                        ))}

                    </div>

                    <div className="mb-4 flex gap-1 flex-col">
                        {/* <h3 className="text-xl font-semibold">{post.title}</h3> */}

                        <h3 className={`text-xl font-semibold`} >{post.title}</h3>


                        <div className={`text-gray-700 mt-3 ${post.title.length > 32 ? "line-clamp-2" : "line-clamp-3"}`}>{post.excerpt}</div>
                    </div>


                    <div className="flex justify-center items-center mt-auto">

                        {/* <div className="relative rounded-full border border-gray-100 overflow-hidden">
                            <Image
                                src={post.featuredImage.node.author.node.avatar.url}
                                alt={post.featuredImage.node.author.node.name}
                                width={post.featuredImage.node.author.node.avatar.width}
                                height={post.featuredImage.node.author.node.avatar.size}
                                className="w-8 h-auto"
                            />
                        </div> */}
                        <div className="ml-3">
                            <p className="text-gray-500">{post.author.name}</p>
                        </div>

                        <div className="ml-auto text-xs text-gray-500">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    </div>
                </div>
            </article>
        </Link>
    )
}



