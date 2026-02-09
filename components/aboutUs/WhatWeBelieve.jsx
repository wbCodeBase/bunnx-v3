import Image from 'next/image';
// import Link from 'next/link';
// import { FaLocationArrow } from "react-icons/fa";
import bulbVision from "@/public/aboutUs/bulbVision.png"
import rocketMission from "@/public/aboutUs/rocketMission.png"
import diamondValues from "@/public/aboutUs/diamondValues.png"


export default function WhatWeBelieve() {
    return (
        <>
            <section className="border-t border-gray-300 container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">

                <h2 className='font-semibold text-orange-500 text-lg'>What We Believe</h2>
                <h4 className='font-semibold text-3xl my-2'>Driven by Purpose, Guided by Innovation</h4>
                <p className='text-md text-gray-800'>We believe in building strong relationships with our clients, delivering solutions that are as innovative as they are impactful. By integrating advanced features and the latest technologies, we help our clients stay ahead and succeed in a constantly evolving world.</p>

                <div className='flex items-cente justify-center flex-wrap gap-10 mt-6'>

                    <div className="border rounded-xl shadow-lg p-4 flex items-center flex-col w-96 text-center relative">
                        <Image className='w-24' src={bulbVision} alt="Our Vision" />
                        <h3 className='font-semibold my-3 text-lg sm:text-xl'>Our Vision</h3>
                        <p>Our VISION is to be a leading provider of dedicated IT teams to provide end-to-end services. Our team is completely focused on transparency and ethical business strategies - with the ultimate aim of giving back to the society.</p>

                        {/* <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}
                    </div>

                    <div className="border rounded-xl shadow-lg p-4 flex items-center flex-col w-96 text-center relative">
                        <Image className='w-24' src={rocketMission} alt="Our Mission" />
                        <h3 className='font-semibold my-3 text-lg sm:text-xl'>Our Mission</h3>
                        <p>Our MISSION is to provide technical consultation, expertise and dedicated teams throughout the development lifecycle, irrespective of industry with constant emphasis on people, process quality and customer satisfaction to create business value.</p>

                        {/* <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}
                    </div>

                    <div className="border rounded-xl shadow-lg p-4 flex items-center flex-col w-96 text-center relative">
                        <Image className='w-24' src={diamondValues} alt="Our Values"/>
                        <h3 className='font-semibold my-3 text-lg sm:text-xl'>Our Values</h3>
                        <p>We’re driven by integrity, innovation, and collaboration. Putting people first, we build trusted relationships and embrace challenges as opportunities to create impactful solutions. Our commitment to quality and progress empowers clients to thrive in a changing world.</p>
                       
                        {/* <Link className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white' href="/services/mobile-app"><span> Learn more </span> <span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}
                    </div>



                </div>

            </section>
        </>
    )
}

