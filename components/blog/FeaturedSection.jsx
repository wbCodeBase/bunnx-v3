"use client"

import Image from "next/image";

import { IoReader } from "react-icons/io5";

import Link from "next/link";
import { Calendar } from "lucide-react";



export default function FeaturedSection({ latestBlog }) {

  const heroSectionData = {
    title: latestBlog?.title,
    description: latestBlog?.excerpt,
    imageUrl: latestBlog?.featuredImage?.url,
    ctaTextPri: "Read more",
    categories: latestBlog?.categories,
    readMoreBtnUrl: `/blog/${latestBlog?.slug}`,
    // authorAvatar: latestBlog?.featuredImage?.node?.author?.node?.avatar?.url,
    authorName: latestBlog?.author?.name
  };

  const { title, description, imageUrl, ctaTextPri, categories, readMoreBtnUrl, authorName } = heroSectionData;


  return (
    <>
      <section className="lg:py-16">
        <div className="bg-orange-500 flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full lg:py-6 rounded-2xl">

          <div className="w-full lg:w-[41%] py-6 px-4 flex justify-center gap-20 flex-col">
            <div>
              <span className="font-medium text-lg text-white">Featured</span>
              <h2 className={`lg:text-3xl text-2xl my-2 font-semibold text-white`}>{title}</h2>

              {/* <div className={`text-gray-700 ${post.title.length > 32 ? "line-clamp-2" : "line-clamp-3" }`} dangerouslySetInnerHTML={{ __html: post.excerpt }}></div> */}
              <div className={`text-gray-100 text-lg my-4 font-medium line-clamp-3`}>{description}</div>

              <div className="my-4 mt-6">
                {categories.map((category) => (
                  <button key={category.name} className="flex items-center justify-center sm:justify-start">
                    <Link href={`/blog/cat/${category?.slug}`} className='flex items-center justify-center p-1 font-medium text-md border border-white rounded-full text-white'>
                      <span className="px-2"> {category.slug} </span>
                    </Link>
                  </button>
                ))}
              </div>

              <div className="flex mt-8 gap-10">
                <div className="flex items-center gap-4">
                  <div>

                  </div>
                  <div className="flex flex-col gap-1 text-white">
                    <span className="font-medium">{authorName}</span>

                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {new Date(latestBlog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>

                  </div>
                </div>

                <button className="flex items-center justify-center sm:justify-start ">
                  <Link href={readMoreBtnUrl} className='flex items-center justify-center mt-2 p-1 hover:bg-orange-500 font-medium text-md border border-white rounded-full text-white'>
                    <span className='bg-white rounded-full p-2 text-black'> <IoReader /> </span>
                    <span className="px-2"> {ctaTextPri} </span>
                  </Link>
                </button>
              </div>

            </div>
          </div>

          <div className="md:w-[55%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={imageUrl}
              alt="Blog Image"
              width={600} // Provide width
              height={800} // Provide height
              className="lg:max-w-lg h-auto borde border-white rounded-3xl"
            />

          </div>

        </div>
      </section>
    </>
  )
}

