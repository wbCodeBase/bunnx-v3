import React from 'react'
import Image from 'next/image';
import { MdShield } from "react-icons/md";
import { CgMonday } from "react-icons/cg";
import { IoBarcode } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const CaseStudiesnProjects = () => {
    return (
        <>

            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">


                <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>



                    <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                        <Image src={"/basicComponent/bugCicd.jpg"} className='rounded-xl' alt="component image" width={500} height={400} />

                        {/* <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}
                    </div>


                    <div className="rounded-xl px4">
                        {/* <h2 className='font-semibold text-orange-500 text-lg'>Our Success Stories</h2> */}
                        <h2 className='font-semibold sm:text-3xl text-2xl my-2'>How We Ensure Code Quality</h2>
                        <p className='text-md text-gray-800'>We prioritize code quality with rigorous testing, detailed reviews, and best practices to deliver reliable, long-lasting software.</p>


                        <div className='grid gap-4 mt-6 grid-cols-1 px-4'>
                            <div className="">
                                {/* <span><SiApacheguacamole className='text-purple-500' /></span> */}
                                <span><FaClipboardCheck className='text-purple-500 text-xl' /></span>
                                <h3 className='font-semibold my-1'>Unit Testing</h3>
                                <p className='text-sm text-gray-500 font-normal'>Ensure functionality with robust and precise test cases.</p>
                            </div>
                            <hr />
                            <div className="">
                                <span><FaLaptopCode className='text-red-500 text-xl' /></span>
                                {/* <span><MdOutlineSecurity className='text-red-500 text-xl' /></span> */}
                                <h3 className='font-semibold my-1'>Code Review Practices</h3>
                                <p className='text-sm text-gray-500 font-normal'>Enhance code quality through meticulous peer reviews.</p>
                            </div>
                            <hr />

                            <div className="">
                                <span><MdShield className='text-yellow-500 text-xl' /></span>
                                <h3 className='font-semibold my-1'>Code Quality Metrics</h3>
                                <p className='text-sm text-gray-500 font-normal'>Measure and improve software standards with key insights.</p>
                            </div>

                        

                        </div>

                    </div>


                </div>


            </section>
        </>

    )
}

export default CaseStudiesnProjects