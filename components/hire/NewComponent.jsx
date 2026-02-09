import React from 'react'
import TechStackMarquee from './TechStackMarquee';
import { AiOutlineStar } from "react-icons/ai";

const NewComponent = () => {
    return (
        <>

            <section className="border-t border-gray-300 container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <h2 className='font-semibold text-orange-500 text-lg'>Our Technology Expertise</h2>
                <h4 className='font-semibold text-3xl my-2'>We leverage the latest technologies to deliver top-notch software solutions.</h4>
                <p className='text-md text-gray-800'>Whether you require a complex enterprise software solution or seamless software integration, we will convert your ideas into reality with our long-standing, industry-proven IT consulting and bespoke software development services.</p>


                <section className="flex flex-wrap justify-center gap-10 py-2 mt-6">

                    <div className='lg:w-[46%] w-full'>
                        <h5 className='font-semibold text-2xl'>We done our best here</h5>
                        <p className='mt-2 text-md'>We leverage the latest technologies to deliver top-notch software solutions. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum repudiandae animi vitae ab dolore nam.</p>
                        <p className='mt-2 text-md'>We leverage the latest technologies to deliver top-notch software solutions. Lorem ipsum dolor sit amet consectetur.</p>
                        <ul className="text-md mt-2 font-medium flex flex-col gap-1">
                            <li className='flex items-center gap-2'> <span className='text-orange-500'> <AiOutlineStar /> </span> <span> Web Development </span></li>
                            <li className='flex items-center gap-2'> <span className='text-orange-500'> <AiOutlineStar /> </span> <span> Software Development </span></li>
                            <li className='flex items-center gap-2'> <span className='text-orange-500'> <AiOutlineStar /> </span> <span> CMS/Ecommerce </span></li>
                            <li className='flex items-center gap-2'> <span className='text-orange-500'> <AiOutlineStar /> </span> <span> Database </span></li>
                            <li className='flex items-center gap-2'> <span className='text-orange-500'> <AiOutlineStar /> </span> <span> Cloud/DevOps </span></li>
                            <li className='flex items-center gap-2'> <span className='text-orange-500'> <AiOutlineStar /> </span> <span> Application Development </span></li>
                            <li className='flex items-center gap-2'> <span className='text-orange-500'> <AiOutlineStar /> </span> <span> Api Integration/Maintenance </span></li>
                        </ul>
                    </div>

                    <TechStackMarquee />

                </section>

            </section>
            
        </>
    )
}

export default NewComponent;



