import React from 'react'
import { HiMiniUsers } from "react-icons/hi2";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"


const testimonials = [
    {
        text: "Bunnx was super helpful in optimizing the backend of our website. They identified unused code and streamlined our database queries, leading to a faster and more efficient platform.",
        name: "Mike Casavant",
        role: "Kersonic Organics",
        rating: 4.5,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "I have worked with Neha and her team on multiple web development projects. They consistently deliver high-quality code, on time and within budget. Excellent communication and technical expertise.",
        name: "Bhushan",
        role: "5X Journel",
        rating: 4.7,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Bunnx did an outstanding job setting up our e-commerce store from scratch. They delivered a seamless user experience with excellent categorization and design. Highly recommended for anyone needing a reliable developer.",
        name: "Parsa Jandaghi",
        role: "WertFels GmbH",
        rating: 5,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
];

const testimonials2 = [
    {
        text: "Bunnx helped us build a scalable and user-friendly e-commerce site. They were professional, responsive, and provided excellent guidance on the tech stack we should use. Highly recommended!",
        name: "Kyle McConnell",
        role: "McConnell Enterprises",
        rating: 5,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Neha was instrumental in our web development projects. Her proactive communication and dedication to delivering clean, optimized code helped us meet our tight deadlines. I highly recommend her services.",
        name: "Sue Vester",
        role: "Vester Enterprises",
        rating: 4.7,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Bunnx went above and beyond on our web application. They ensured that all functionalities were optimized and provided great support during the launch phase. Truly a valuable partner in development.",
        name: "Joe Morris",
        role: "Deselect",
        rating: 4.6,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },

];

const testimonials3 = [
    {
        text: "Neha and her team provided invaluable support on our backend API development. They were efficient and maintained a high level of quality throughout the project. Highly recommend them for complex projects.",
        name: "Sarah Wright",
        role: "Luxvan",
        rating: 4.0,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Bunnx is a team of highly skilled developers and did a fantastic job on our custom software project. They completed everything ahead of schedule, and her expertise made a significant impact on the project’s success.",
        name: "Jeff Wright",
        role: "Bridge Storage",
        rating: 5,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Bunnx attention to detail in web development is exceptional. They has become a go-to for any of our custom coding needs. Their commitment to quality and customer satisfaction is remarkable.",
        name: "Mehmet Alcan",
        role: "Crocliner Autoparts",
        rating: 4.6,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    },
    {
        text: "Bunnx was fantastic to work with on our website overhaul. Use knowledge of development best practices ensured our new site is optimized for performance and scalability. I look forward to working with her again.",
        name: "Charlotte Chipperfield",
        role: "Heavy Bucks",
        rating: 4.9,
        image: "https://media.licdn.com/dms/image/v2/D5635AQEhQeOVXs6miw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730093324958?e=1731582000&v=beta&t=Bxu5-9SUMWtnQx73vRX5Qq4j3kUTEk1JA_Ge1Ikj9zA"
    }
];



const testimonialCombinedArray = [...testimonials, ...testimonials2, ...testimonials3];


const Testimonial = () => {

    return (
        <>

            <section className="border-t border-gray-300 container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <span className='font-semibold text-orange-500 text-lg'>Testimonial</span>
                <h2 className='font-semibold text-3xl my-2'>What our clients say about Bunnx</h2>
                <p className='text-md text-gray-800'>At Bunnx, our clients’ feedback reflects our dedication to excellence. They appreciate our reliable service, innovative solutions, and personalized approach. Hear directly from our clients about the positive impact we&apos;ve made.</p>


                <section className="hidden sm:flex flex-wrap justify-center gap-10 py-2 mt-6">

                    <div className="w-full h-[30rem] flex items-center justify-center gap-6 overflow-hidden py-2">

                        <MarqueeRow direction="top" reviews={testimonials} />

                        <MarqueeRow direction="bottom" reviews={testimonials2} />

                        <MarqueeRow direction="top" reviews={testimonials3} />

                    </div>

                </section>


                <div className="w-full max-w-6xl sm:hidden block mx-auto px-1 sm:px-4 py-8">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonialCombinedArray.map((testimonial, index) => (

                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card className="border-none shadow-sm">
                                        <CardContent className="p-0">


                                            <div
                                                key={testimonial.name}
                                                className={`rounded-2xl p-6 border-gray-300 transition-all duration-300 hover:shadow-lg ${index % 2 === 0 ? 'bg-[#F8F9FF]' : 'bg-white border'
                                                    }`}
                                            >
                                                <p className="text-gray-600 text-wrap mb-8 min-h-[80px]">
                                                    {testimonial.text}
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">


                                                        <HiMiniUsers className='text-2xl' />


                                                        <div>
                                                            <p className="font-semibold text-gray-900">
                                                                {testimonial.name}
                                                            </p>
                                                            <p className="text-gray-500 text-sm">
                                                                {testimonial.role}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <svg
                                                            className="w-5 h-5 text-[#6366F1]"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                            />
                                                        </svg>
                                                        <span className="font-semibold text-[#6366F1]">
                                                            {testimonial.rating}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>


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


function MarqueeRow({ direction, reviews }) {
    // Duplicate reviews for seamless infinite scroll
    const duplicatedReviews = [...reviews, ...reviews];
    
    const animationClass = direction === 'bottom' 
        ? 'animate-marquee-reverse-y' 
        : 'animate-marqueeY';

    return (
        <div className="relative flex flex-col flex-1 overflow-y-hidden py-2 group h-full">
            <div className={`flex flex-col gap-6 ${animationClass} group-hover:pause-animation`}>
                {duplicatedReviews.map((testimonial, index) => (
                    <TestimonialCard 
                        key={`marquee-${direction}-${index}`} 
                        testimonial={testimonial} 
                        index={index} 
                    />
                ))}
            </div>
        </div>
    )
}



function TestimonialCard({ testimonial, index }) { 
    return (
        <div
            key={testimonial.name}
            className={`rounded-2xl border-gray-300 p-6 transition-all duration-300 hover:shadow-lg ${index % 2 === 0 ? 'bg-[#F8F9FF]' : 'bg-white border'
                }`}
        >
            <p className="text-gray-600 text-wrap mb-8 min-h-[80px]">
                {testimonial.text}
            </p>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">


                    <HiMiniUsers className='text-2xl' />


                    <div>
                        <h3 className="font-semibold text-gray-900">
                            {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {testimonial.role}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <svg
                        className="w-5 h-5 text-[#6366F1]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <span className="font-semibold text-[#6366F1]">
                        {testimonial.rating}
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Testimonial;




















