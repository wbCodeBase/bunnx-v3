"use client"

import React from 'react'
import CountUp from 'react-countup';
import Link from 'next/link'
import { FaLocationArrow } from "react-icons/fa";

const HeroSection = () => {
    return (<>
        <section className="borde pb20 bg-gray800 bg-gray-100">
            <div className="flex items-cente justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

                <div className="sm:mt-8 w-full lg:w-[55%] py-10 px-4 flex gap-20 flex-col sm:pt-18">
                    <div>
                        <span className="lg:text-4xl text-2xl font-bold">Company Overview</span>
                        {/* <h1 className="lg:text-2xl my-2 font-medium">We transform today&apos;s ideas into tomorrow&apos;s possibilities to drive technology and business changes.</h1>
                        <p className="lg:text-lg text-md text-gray-600 my-4">AppsDevPro (App Developers Programmers) is a leading IT company providing expert offshore developers for hire for your project. We provide highly experienced, certified and skilled developers with technical expertise and domain knowledge. We provide 500+ developers that help companies ranging from startups to enterprises. Our large pool of inhouse development team gives us expertise in meeting technology challenges of any magnitude or complexity.</p>
                        <p className="lg:text-lg text-md text-gray-600 my-4">AppsDevPro&apos; team of professional and dedicated developers offer decades of experience in the different niches and industries to launch custom software, web & mobile apps successfully for seamless performance across different platforms.</p> */}


                        <h1 className="lg:text-2xl my-2 font-medium">We craft innovative digital solutions that turn ideas into impactful technology, fueling business growth.</h1>
                        <p className="lg:text-lg text-md text-gray-600 my-4">Bunnx is a trusted software development company delivering top-tier engineering talent for businesses worldwide. We specialize in providing highly skilled, dedicated developers who bring deep technical expertise and industry insights. With a robust team of 500+ professionals, we help startups and enterprises build, scale, and optimize their software solutions efficiently.</p>
                        <p className="lg:text-lg text-md text-gray-600 my-4">Our passionate team at Bunnx blends years of experience with cutting-edge technology to develop custom web, mobile, and enterprise applications. From concept to deployment, we ensure high-performance solutions tailored to meet evolving business needs.</p>


                        <div className="flex items-center justify-center sm:justify-start">
                            <Link href="/" className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span> Get connected with us </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
                        </div>

                    </div>


                </div>

                <div className="md:w-[44%] w-full flex items-center justify-center">


                    <div className="antialiased my-10">

                        <main className="flex flex-col justify-center overflow-hidden">
                            <div className="w-full rounded-lg max-w-6xl bgorange-50 mx-auto px-4 md:px-6 py-6">

                                <section className="font-quando grid gap-6 grid-cols-2 md:gap-10">


                                    <article className='flex justify-center items-center flex-col p-4 rounded-lg'>


                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-orange-500"><CountUp end={16} enableScrollSpy />+</span>
                                        </span>

                                        <p className="text-md text-gray-700 text-center">Years in Industry</p>
                                    </article>

                                    <article className='flex justify-center items-center flex-col p-4 rounded-lg'>


                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-orange-500"><CountUp end={60} enableScrollSpy />+</span>
                                        </span>

                                        <p className="text-md text-gray-700 text-center">Projects Delivered</p>
                                    </article>

                                    <article className='flex justify-center items-center flex-col p-4 rounded-lg'>


                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-orange-500"><CountUp end={200} enableScrollSpy />+</span>
                                        </span>

                                        <p className="text-md text-gray-700 text-center">Mentors</p>
                                    </article>

                                    <article className='flex justify-center items-center flex-col p-4 rounded-lg'>


                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-orange-500"><CountUp end={800} enableScrollSpy />+</span>
                                        </span>

                                        <p className="text-md text-gray-700 text-center">Satisfied Clients</p>
                                    </article>

                                    <article className='flex justify-center items-center flex-col p-4 rounded-lg'>


                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-orange-500"><CountUp end={8} enableScrollSpy />+</span>
                                        </span>

                                        <p className="text-md text-gray-700 text-center">Industries Served</p>
                                    </article>

                                    <article className='flex justify-center items-center flex-col p-4 rounded-lg'>


                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-orange-500"><CountUp end={12} enableScrollSpy />+</span>
                                        </span>

                                        <p className="text-md text-gray-700 text-center">Countries</p>
                                    </article>



                                </section>


                            </div>

                        </main>


                    </div>


                    {/* <Image
                                src={imageUrl || "https://img.freepik.com/premium-photo/astronaut-outer-space-surrounded-by-planets-satellites-generative-ai_1028873-12416.jpg"}
                                alt="Digital Brain Visualization"
                                width={600}
                                height={600}
                                className="w-full h-auto -translatey6"
                            /> */}
                </div>

            </div>
        </section>
    </>
    )
}

export default HeroSection