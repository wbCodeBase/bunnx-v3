'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

import lightdotnetmodalicon from "@/public/iconMethodology/light-dot-net-modal-icon.webp";
import teamAug from "@/public/iconMethodology/teamAug.webp";
import ProjectBased from "@/public/iconMethodology/ProjectBased.webp";

export default function HiringModelsHire() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev < 4 ? prev + 1 : prev))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isInView])

    const serviceModels = [
        {
            title: "Bunnx Managed Team",
            icon: lightdotnetmodalicon,
            subtitle: "(also known as product engineering teams)",
            sections: [
                {
                    type: "para",
                    content: "It is an expert autonomous team comprising of different roles (e.g. project manager, software engineers, QA engineers, and other roles) capable of delivering technology solutions rapidly and efficiently. The roles are defined for each specific project and management is conducted jointly by a Scrum Master and the client's product owner."
                },
                {
                    type: "list",
                    content: "Agile processes,Affordable Pricing,Monthly billing,Maximum flexibility,Suitable for startups, MVPs and software/product companies"
                }
            ]
        },
        {
            title: "Client Managed Team",
            icon: teamAug,
            subtitle: "(also known as team extension or staff augmentation)",
            sections: [
                {
                    type: "para",
                    content: "Suitable for every scale of business and project, team augmentation helps add required talent to you team to fill the talent gap. The augmented team members work as part of your local or distributed team, attending your regular daily meetings and reporting directly to your managers. This helps businesses scale immediately and on-demand."
                },
                {
                    type: "list",
                    content: "Scale on-demand,Quick & cost-effective,Monthly billing,Avoid hiring hassles,Affordable Pricing"
                }
            ]
        },
        {
            title: "Hybrid Model",
            icon: ProjectBased,
            subtitle: "(best suited for small-mid scale projects)",
            sections: [
                {
                    type: "para",
                    content: "Fixed Price Model:\nWhen project specifications, scope, deliverables and acceptance criteria are clearly defined, we can evaluate and offer a fixed quote for the project. This is mostly suitable for small-mid scale projects with well documented specifications."
                },
                {
                    type: "para",
                    content: "Time & Material Model:\nSuitable for projects that have undefined or dynamic scope requirements or complicated business requirements due to which the cost estimation is not possible. Therefore, developers can be hired per their time."
                }
            ]
        }
    ];



    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto max-w-screen-xl px-4 md:px-6 sm:py-10 py-5'>

                <h2 className='font-semibold text-orange-500 text-lg'>Hiring Models</h2>
                <h4 className='font-semibold sm:text-4xl text-2xl my-2'>Choose From Our Hiring Models</h4>
                <p className='text-md text-gray-800'>With us, you can choose from multiple hiring models that best suit your needs</p>


                <div ref={containerRef} className="relative mt-8 my-4">

                    <div className="grid gap-5 grid-col-1 sm:grid-cols-3">
                        {serviceModels.map((step, index) => (


                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isInView ? 1 : 0,
                                    y: isInView ? 0 : 20,
                                }}
                                transition={{ delay: index * 0.2 }}
                            >


                                <motion.div className={`relativ flex items-start flex-col rounded-2xl p-6 bg-white border border-blue-100 hover:shadow-md cursor-pointer h-full shadow-sm`}>


                                    <motion.div
                                        className={`rounded-full p-3 transition-colors ${index <= activeIndex ? 'bg-amber-50' : 'bg-background'
                                            }`}
                                        animate={{
                                            backgroundColor: index <= activeIndex ? 'rgb(255 251 235)' : 'rgb(255 255 255)',
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >


                                        <Image src={step.icon} className='h-14 w-auto' alt={step.title} />



                                    </motion.div>

                                    <h3 className="text-xl my-4 font-semibold">{step.title}</h3>

                                    <p className="text-gray-600 mb-6 text-sm">
                                        {step.subtitle}
                                    </p>

                                    {step.sections.map((section, sectionIndex) => (
                                        <div key={sectionIndex} className="mb-6 last:mb-0">
                                            {section.type === "para" ? (
                                                <p className="text-gray-700 leading-relaxed">
                                                    {section.content.split('\n').map((paragraph, i) => (
                                                        <span key={i} className={`block mb-4 last:mb-0`}>
                                                            {paragraph}
                                                        </span>
                                                    ))}
                                                </p>
                                            ) : (
                                                <ul className="space-y-3">
                                                    {section.content.split(',').map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <span className="mt-1.5 flex-shrink-0">
                                                                <svg
                                                                    className="w-4 h-4 text-amber-400"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span className="text-gray-700">{item.trim()}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}

                                    {/* <p className="text-md text-muted-foreground">{step.description}</p> */}
                                </motion.div>
                            </motion.div>


                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}