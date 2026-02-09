"use client"

import React from "react";
import Image from "next/image";

import { IoReader } from "react-icons/io5";

import Link from "next/link";
import { useParams } from "next/navigation";

import { formatDate } from "@/lib/blogs"


export const HeroSectionBlog = ({ latestBlog }) => {

  const heroSectionData = {
    title: latestBlog?.title,
    description: latestBlog?.excerpt,
    imageUrl: latestBlog.featuredImage.node.mediaDetails.sizes[0].sourceUrl,
    ctaTextPri: "Read more",
    categories: latestBlog?.categories?.nodes,
    readMoreBtnUrl: `/blog/${latestBlog?.slug}`,
    authorAvatar: latestBlog?.featuredImage?.node?.author?.node?.avatar?.url,
    authorName: latestBlog?.featuredImage?.node?.author?.node?.name
  };

  const { title, description, imageUrl, ctaTextPri, categories, readMoreBtnUrl, authorName, authorAvatar } = heroSectionData;

  if (!latestBlog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full lg:p-10">

          <div className="sm:mt12 w-full lg:w-[41%] py-6 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <span className="text-orange-400 font-medium text-lg">Latest</span>
              <h1 className="lg:text-4xl text-3xl my-2 font-semibold">{title}</h1>

              {/* <div className={`text-gray-700 ${post.title.length > 32 ? "line-clamp-2" : "line-clamp-3" }`} dangerouslySetInnerHTML={{ __html: post.excerpt }}></div> */}
              <div
                className="text-gray-300 text-lg my-4 font-medium"
                dangerouslySetInnerHTML={{ __html: description || "" }}
              />

              <div className="my-4">
                {categories.map((category) => (
                  <button key={category.name} className="flex items-center justify-center sm:justify-start">
                    <Link href={`/blog/cat/${category.slug}`} className='flex items-center justify-center p-1 font-medium text-md border border-orange-400 rounded-full text-orange-400'>
                      <span className="px-2"> {category.name} </span>
                    </Link>
                  </button>
                ))}
              </div>

              <div className="flex mt-8 gap-10">
                <div className="flex items-center gap-4">
                  <div>


                    <div className="relative w-10 h-10 rounded-full border border-gray-500 overflow-hidden">
                      <Image
                        src={authorAvatar}
                        alt={authorName}
                        width={30}
                        height={30}
                        className="object-cover w-10 h-auto"
                      />
                    </div>

                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">{authorName}</span>
                    <span className="text-gray-300 text-xs">{formatDate(latestBlog.date)}</span>
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




