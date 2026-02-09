"use client"

import React, { useState } from "react"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"
import { createLinkedContent } from '@/utils/LinkBuilder';


const techStackData = {
    head: "Software Development Services in India",
    para: "Our approach as a top software solutions company combines innovative thinking with technical expertise, ensuring every project from CRM software development to comprehensive application solutions meets the highest standards of excellence.",
    categories: [
        'Software Development',
        'Application Development',
        'Dedicated Software Teams',
        'eCommerce',
        // 'QA & Testing',
        // 'Cloud Services',
    ],

    "content": {
        "Software Development": {
            "title": "Software Development",
            "description": "Bunnx is your go-to software development agency in this evolving and dynamic era. Our software development services adhere to high-quality coding.",
            "columns": [
                { "name": "Custom Software Development", "description": "Tailored solutions for excellence", "slug": "custom-software-development-services" },
                { "name": "CMS Development", "description": "Faster CMS Development", "slug": "cms-development-services-india" },
                { "name": "CRM Software Development", "description": "Transform ideas into powerful apps", "slug": "crm-software-development-company-india" },
                { "name": "Software Consulting", "description": "Expert advice on tech", "slug": "software-consulting-services-india" },

                { "name": "IT Consulting", "description": "Software Outsourcing", "slug": "it-consulting-services-india" },
                { "name": "Agile Consulting", "description": "Optimizing customer relations", "slug": "agile-consulting-services-india" },
            ],
            linkViewMore: "software-development-company-in-india"
        },
        "Application Development": {
            "title": "Application Development",
            "description": "Transforming ideas into powerful digital solutions, we craft innovative web and mobile applications that drive your business forward with smart & hi-tech technology.",
            "columns": [
                { "name": "Web App Development", "description": "Next-gen web experiences", "slug": "web-application-development-company-india" },
                { "name": "Mobile App Development", "description": "Fast, dynamic web apps", "slug": "mobile-app-development-company-india" },
                { "name": "Frontend Development", "description": "Sleek, powerful iOS apps", "slug": "frontend-development" },
                { "name": "Backend Development", "description": "Robust Android solutions", "slug": "backend-development" },
                { "name": "API Development & Integration", "description": "Build once, run everywhere", "slug": "api-integration-and-development-services" },
                { "name": "Full stack Development", "description": "Build once, run everywhere", "slug": "full-stack-development-services" },
                { "name": "Website Development", "description": "Build once, run everywhere", "slug": "website-development-services-india" },
            ],
            linkViewMore: "application-development-company-india"
        },
        "Dedicated Software Teams": {
            "title": "Dedicated Software Teams",
            "description": "Scale your tech potential with flexible, expert software development teams. Seamless staff augmentation, dedicated developers, and offshore solutions that drive your business growth.",
            "columns": [
                { "name": "Staff Augmentation", "description": "Next-gen web experiences", "slug": "it-staff-augmentation-services-india" },
                { "name": "Hire Software Developer", "description": "Fast, dynamic web apps", "slug": "hire-software-developer-india" },
                { "name": "IT Outsourcing", "description": "Sleek, powerful iOS apps", "slug": "it-outsourcing-services" },
                { "name": "Dedicated Development Team", "description": "Robust Android solutions", "slug": "hire-dedicated-development-team-india" },
                { "name": "Offshore Dedicated Centre", "description": "Build once, run everywhere", "slug": "offshore-dedicated-development-center-india" }
            ],
            linkViewMore: "hire-dedicated-technical-team-india"
        },
        "eCommerce": {
            "title": "eCommerce",
            "description": "Transform your online business with smart eCommerce solutions. We build powerful web experiences, drive sales, and provide strategic development and consulting.",
            "columns": [
                { "name": "Ecommerce Web Development", "description": "Next-gen web experiences", "slug": "ecommerce-web-development" },
                { "name": "Ecommerce Web Consulting", "description": "Fast, dynamic web apps", "slug": "ecommerce-consulting-services" },
                { "name": "Ecommerce Implementation", "description": "Sleek, powerful iOS apps", "slug": "ecommerce-implementation" },
                { "name": "Ecommerce Maintenance & Support", "description": "Robust Android solutions", "slug": "ecommerce-maintenance-and-support-services" },
            ],
            linkViewMore: "ecommerce-development-company-india"
        },
        // "QA & Testing": {
        //     "title": "QA & Testing",
        //     "description": "Ensure software excellence with comprehensive testing services. Precision-driven methodologies, expert consulting, and quality assurance that guarantee robust performance.",
        //     "columns": [
        //         { "name": "QA Consulting", "description": "Next-gen web experiences", "slug": "qa-consulting" },
        //         { "name": "Software Testing", "description": "Fast, dynamic web apps", "slug": "software-testing" },
        //         { "name": "Web App Testing", "description": "Sleek, powerful iOS apps", "slug": "web-app-testing" },
        //         { "name": "Mobile App Testing", "description": "Robust Android solutions", "slug": "mobile-app-testing" },
        //         { "name": "QA Outsourcing", "description": "Build once, run everywhere", "slug": "qa-outsourcing" }
        //     ],
        //     linkViewMore: "qa-testing"
        // },
        // "Cloud Services": {
        //     "title": "Cloud Services",
        //     "description": "Navigate digital transformation with intelligent cloud solutions. Strategic development, migration, and consulting that enhance your technological capabilities.",
        //     "columns": [
        //         { "name": "Cloud Application Development", "description": "Sleek, powerful iOS apps", "slug": "cloud-application-development" },
        //         { "name": "Cloud Strategy & Consulting", "description": "Next-gen web experiences", "slug": "cloud-strategy-consulting" },
        //         { "name": "Cloud Migration", "description": "Fast, dynamic web apps", "slug": "cloud-migration" },
        //         { "name": "Devops & CI/CD Pipelines", "description": "Build once, run everywhere", "slug": "devops-and-ci-cd-pipelines" },
        //     ],
        //     linkViewMore: "cloud-services"
        // }
    }

}

// Add keyword mapping
const keywordToSlug = {
    'CRM software development': 'crm-software-development-company-india',
    'software development agency': 'software-development-company-in-india',
    'web and mobile applications': 'application-development-company-india',
    'Seamless staff augmentation': 'it-staff-augmentation-services-india',
    'smart eCommerce solutions': 'ecommerce-development-company-india',
};


const OurServices = () => {


    const [activeCategory, setActiveCategory] = useState('Software Development')


    const handleCategoryHover = (category) => {
        setActiveCategory(category)
    }


    return (
        <>

            {techStackData.content[activeCategory] && (
                <>


                    <section className="relativ bordert container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                        <span className='font-semibold text-orange-500 text-lg'>Our Services</span>
                        <h2 className='font-semibold text-3xl my-2'>{techStackData?.head}</h2>
                        <p className='text-md text-gray-800'>{createLinkedContent(techStackData?.para, keywordToSlug)}</p>

                        <div className="w-full my-6 transition-all duration-300 ease-in-out">
                            <div className="container mx-auto flex relative flex-col lg:flex-row">

                                <div className="border-r z-10 bg-blue900 bg-black text-white w-full lg:w-1/4 p-6 hidden md:block">
                                    {techStackData.categories.map((category) => (
                                        <div key={category}
                                            className={`py-3 my-1 group px-5 text-lg w-[19rem] text-nowrap transform hover:translate-x-1 transition-all ease-in-out duration-300 flex items-center cursor-pointer font-medium ${activeCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 hover:text-black'
                                                }`}
                                            onMouseEnter={() => handleCategoryHover(category)}
                                            onClick={() => handleCategoryHover(category)}
                                        >
                                            {category}
                                            <ChevronRight className="float-right h-5 w-5 hidden group-hover:block" />
                                        </div>
                                    ))}

                                </div>



                                <div className="w-full lg:w-3/4">


                                    <div className='p-6 sm:px-20 my-5 border border-gray-300'>


                                        <div className="mb-4 py-4 border-b border-gray-300">

                                            <h3 className='text-3xl font-bold'> {techStackData.content[activeCategory].title} </h3>
                                            <p className="text-gray-600 font-medium mt-4">{createLinkedContent(techStackData.content[activeCategory].description, keywordToSlug)}</p>

                                        </div>



                                        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-2 sm:gap-2">
                                            {techStackData.content[activeCategory].columns.map((column, index) => (
                                                <div key={index} className='relative'>

                                                    <div className="cursor-pointer rounded-lg py-1 px-2 group">
                                                        <Link href={`/${column.slug}`} className="flex items-center gap-4">

                                                            <span className="relative flex h-3 w-3">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                                            </span>

                                                            <p className="font-medium inline-block text-lg relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">{column.name}</p>

                                                        </Link>
                                                    </div>


                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <Link href={techStackData.content[activeCategory].linkViewMore} className="text-white bg-blue-600 hover:bg-white border-2 hover:border-blue-600 hover:text-blue-600 rounded-lg px-6 py-3 transition-colors duration-200">
                                                View More <ChevronRight className="inline h-4 w-4" />
                                            </Link>
                                        </div>

                                    </div>



                                </div>



                            </div>
                        </div>


                    </section>


                </>
            )}

        </>
    )
}

export default OurServices;
