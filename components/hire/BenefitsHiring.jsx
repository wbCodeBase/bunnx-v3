'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

import Agile from "@/public/iconMethodology/scrum.png";
import Waterfall from "@/public/iconMethodology/waterfall-chart.png";
import Rapid from "@/public/iconMethodology/rapid.png";
import DevOps from "@/public/iconMethodology/devops.png";

export default function BenefitsHiring() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev < 5 ? prev + 1 : prev))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isInView])


    const steps = [
        {
            title: "Control Over Project",
            description: "We ensure iterative progress, continuous improvements, and quick deliveries for complete project control.",
            icon: Agile,
        },
        {
            title: "Cost Savings",
            description: "Our waterfall approach aligns with your goals, ensuring cost-effective and successful project completion.",
            icon: Waterfall,
        },
        {
            title: "Talented Developers",
            description: "Our skilled developers meet deadlines by creating and refining prototypes based on user feedback.",
            icon: Rapid,
        },
        {
            title: "Scalability & Flexibility",
            description: "DevOps integration boosts efficiency, flexibility, and collaboration while maintaining brand credibility.",
            icon: DevOps,
        },
    ];
    

    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto max-w-screen-xl px-4 md:px-6 sm:py-10 py-5'>

                <h2 className='font-semibold text-orange-500 text-lg'>Hiring Benefits</h2>
                <h4 className='font-semibold sm:text-4xl text-2xl my-2'>Benefits of hiring PHP Developers from Bunnx</h4>
                <p className='text-md text-gray-800'>Partner with us to hire top developers skilled in cutting-edge tech. We deliver innovative solutions, fast turnaround, and dedicated support for your success.</p>


                <div ref={containerRef} className="relative mt-8 my-4">

                    <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-4">
                        {steps.map((step, index) => (


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


                                        <Image src={step.icon} className='h-12 w-auto' alt={step.title} />



                                    </motion.div>

                                    <h3 className="text-lg my-4 font-semibold">{step.title}</h3>

                                    <p className="text-md text-muted-foreground">{step.description}</p>
                                </motion.div>
                            </motion.div>


                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}