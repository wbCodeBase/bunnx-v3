"use client"

import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    title: "Our Core Competence",
    content: "Our capabilities define our clients success and their success defines our process, knowledge and domain excellence of 21 years",
  },
  {
    title: "Agile Approach",
    content: "A business consulting approach with the thirst for success. Our flexible models pave the path for definitive transformation of the businesses.",
  },
  {
    title: "Our Promise",
    content: "Hidden Brains commitment sets us apart from the rest. We deliver excellence through experience and quality above everything.",
  },
  {
    title: "Our Process",
    content: "We are in the forefront of digital transformation in Web, Mobile, and Cloud. Our domain expertise surpasses boundaries delivering brilliance.",
  },
]

export default function OurPhilosophy() {
  return (
    <>

      <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

        <h2 className='font-semibold text-orange-500 text-lg'>Our Business Philosophy</h2>
        <h4 className='font-semibold text-3xl my-2'>Building Success Through Innovation and Integrity.</h4>
        <p className='text-md text-gray-800'>We believe in delivering value through thoughtful design, cutting-edge technology, and genuine client partnerships. Our approach combines creativity and functionality to craft web solutions that are not only visually compelling but also drive growth. With integrity at our core, we’re dedicated to helping businesses succeed in the digital world.</p>



        <div className="w-full max-w-6xl mx-auto px-4 py-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {items.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border rounded-lg shadow-sm">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{item.content}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="sm:flex justify-center gap-2 mt-4 hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>


      </section>

    </>
  )
}