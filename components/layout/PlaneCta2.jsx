import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const PlaneCta2 = () => {
    return (
        <>


            <section className='sm:py-12 py-2'>
                <div className="bg-[#00214E] px-4 md:px-6">

                    <div className="container mx-auto max-w-screen-xl flex gap-8 items-center flex-wrap sm:justify-between justify-center sm:px-10 px-4 py-10 bg-purple900 bg-[#00214E] rounded-md ">

                        <div className='text-white flex gap-4 flex-col lg:items-start items-center xl:w-[58%] w-full'>
                            <span className='italic'>Your Digital Transformation Starts Here...</span>
                            <h2 className='text-3xl font-semibold'>Crafting Tomorrow&apos;s Technologies, Today</h2>
                            <p>We don&apos;t just develop software. We architect digital futures that redefine what&apos;s possible for your business.
                            </p>
                        </div>

                        <div className='flex justify-center items-center'>

                            <Link href="contact-us" className='flex items-center justify-center gap-2 bg[#261E80] p-1 pr-3 font-medium text-md bg-orange-500 rounded-full mt-4 text-white'> <span className='bg-white rounded-full p-3 text-xl text-black animate-bounce'> <FaPhoneAlt /> </span> <span> Lets Talk </span></Link>

                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default PlaneCta2;