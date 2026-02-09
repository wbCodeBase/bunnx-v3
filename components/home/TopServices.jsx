import React from 'react'
import Image from 'next/image';
import { IoMdAppstore } from "react-icons/io";
import { MdShield } from "react-icons/md";
import { CgMonday } from "react-icons/cg";
import { MdOutlineSettingsSuggest } from "react-icons/md";

const TopServices = () => {
    return (
        <>
            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">


                <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

                    <div className="rounded-xl px4">
                        <span className='font-semibold text-orange-500 text-lg'>Top Services</span>
                        <h2 className='font-semibold sm:text-3xl text-2xl my-2'>Futuristic Software Solutions</h2>
                        <p className='text-md text-gray-800'>We provide expert software development services designed to meet your unique business needs, ensuring innovation and future-readiness.</p>

                        <div className='grid sm:grid-cols-2 gap-10 mt-6 grid-cols-1 px-4'>
                            <div className="">
                                {/* <span><SiApacheguacamole className='text-purple-500' /></span> */}
                                <span><MdOutlineSettingsSuggest className='text-purple-500 text-xl' /></span>
                                <h3 className='font-semibold my-1'>Product Prototyping</h3>
                                <p className='text-sm text-gray-500 font-normal'>Turn your ideas into reality with rapid prototyping.</p>
                            </div>

                            <div className="">
                                <span><MdShield className='text-red-500 text-xl' /></span>
                                {/* <span><MdOutlineSecurity className='text-red-500 text-xl' /></span> */}
                                <h3 className='font-semibold my-1'>System Modernization</h3>
                                <p className='text-sm text-gray-500 font-normal'>Upgrade legacy systems for improved performance and scalability.</p>
                            </div>

                            <div className="">
                                <span><CgMonday className='text-yellow-500 text-xl' /></span>
                                <h3 className='font-semibold my-1'>Web App Development</h3>
                                <p className='text-sm text-gray-500 font-normal'>Build responsive and feature-rich web applications seamlessly.</p>
                            </div>

                            <div className="">
                                <span><IoMdAppstore className='text-blue-500 text-xl' /></span>
                                <h3 className='font-semibold my-1'>Mobile App Development</h3>
                                <p className='text-sm text-gray-500 font-normal'>Deliver exceptional user experiences with custom mobile solutions.</p>
                            </div>

                        </div>

                    </div>

                    <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">

                        <Image src={"/basicComponent/wall.jpg"} className='rounded-xl' alt="component image" width={500} height={400} />

                    </div>

                </div>


            </section></>
    )
}

export default TopServices