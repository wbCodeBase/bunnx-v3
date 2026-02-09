import React from 'react'
import TechStackMarquee from './TechStackMarquee';
import { AiOutlineStar } from "react-icons/ai";
import { createLinkedContent } from '@/utils/LinkBuilder';

const keywordToSlug = {
"best software development company in India": "it-outsourcing-services",
};

const TechStackExpertise = () => {
    return (
        <>

            <section className="border-t border-gray-300 container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <span className='font-semibold text-orange-500 text-lg'>Our Technology Expertise</span>
                <h2 className='font-semibold text-3xl my-2'>Technologies That Speaks Your Business Language</h2>
                <p className='text-md text-gray-800'>{createLinkedContent("Whether you require a complex enterprise software solution or seamless software integration, As a best software development company in India, we will convert your ideas into reality with our long-standing, industry-proven IT consulting and software development services.", keywordToSlug)}</p>


                <section className="flex flex-wrap justify-center gap-10 py-2 mt-6">

                    <div className='lg:w-[46%] w-full'>
                        <h3 className='font-semibold text-2xl'>We done our best here</h3>
                        <p className='mt-2 text-md'>At our core, we believe in using the right technology for each specific task. By understanding your unique needs, we create robust and high-tech software solutions that operate smoothly and efficiently.</p>
                        <p className='mt-2 text-md'>Our goal is to not only meet but exceed your expectations, ensuring that every solution we deliver is perfectly aligned with your business objectives and designed for success.</p>
                        <ul className="text-md mt-4 font-medium flex flex-col gap-3">
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

export default TechStackExpertise;



