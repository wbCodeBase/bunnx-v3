import React from 'react'


import Image from 'next/image';

import accountability from "@/public/aboutUs/Accountability.png";
import collaboration from "@/public/aboutUs/Collaboration.png";
import Excellence from "@/public/aboutUs/Excellence.png";
import Innovation from "@/public/aboutUs/Innovation.png";
import Integrity from "@/public/aboutUs/Integrity.png";
import Transparency from "@/public/aboutUs/Transparency.png";


export default function OurCoreValue() {
    return (
        <>
            <section className="border-t border-gray-300 border-b container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">

                <h2 className='font-semibold text-orange-500 text-lg'>Our Core Values</h2>
                <h4 className='font-semibold text-3xl my-2'>Inspire Trust and Create a Culture to Grow</h4>
                <p className='text-md text-gray-800'>Bunnx maintains the highest ethical culture and transparency while conducting business. Our core values are the foundation for achieving the highest results for clients, always promoting collaborative relationships based on mutual respect.</p>


                <div className="antialiased mt-8">

                    <main className="flex flex-col justify-center overflow-hidden">
                        <div className="w-full rounded-lg max-w-6xl bgorange-50 mx-auto px-4 md:px-6">

                            <section className="font-quando grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-10">


                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                    
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >                                         
                                        <span className="text-gray-500 text-7xl group-hover:text-orange-500">
                                            <Image className="h-12 w-auto" src={Excellence} alt='excellence' />
                                            </span>
                                        </span>
                                    
                                    <p className="text-md text-gray-700 text-center mt-4">Excellence</p>
                                </article>


                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                    
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >                                            
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500">
                                                <Image className="h-12 w-auto" src={Transparency} alt='Transparency' />
                                                </span>
                                        </span>
                                    
                                    <p className="text-md text-gray-700 text-center mt-4">Transparency</p>
                                </article>


                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >                                            
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500">
                                            <Image className="h-12 w-auto" src={Integrity} alt='integrity' />
                                                </span>
                                        </span>
                                    
                                    <p className="text-md text-gray-700 text-center mt-4">Integrity</p>
                                </article>

                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500">
                                                
                                            <Image className="h-12 w-auto" src={Innovation} alt='Innovation' />

                                            </span>
                                        </span>
                                    
                                    <p className="text-md text-gray-700 text-center mt-4">Innovation</p>
                                </article>

                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500">
                                            <Image className="h-12 w-auto" src={collaboration} alt='collaboration' />
                                                </span>
                                        </span>
                                    
                                    <p className="text-md text-gray-700 text-center mt-4">Collaboration</p>
                                </article>


                                <article className='hover:border hover:shadow-sm flex cursor-pointer group items-center flex-col p-4 rounded-lg'>
                                
                                        <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                            <span className="text-gray-500 text-7xl group-hover:text-orange-500">
                                            <Image className="h-12 w-auto" src={accountability} alt='accountability' />

                                            </span>
                                        </span>
                                    
                                    <p className="text-md text-gray-700 text-center mt-4">Accountability</p>
                                </article>


                            </section>


                        </div>

                    </main>


                </div>



            </section>
        </>
    )
}

