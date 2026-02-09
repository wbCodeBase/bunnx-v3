'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

import dropEnquiry from "@/public/iconStepToHire/drop-enquiry.png";
import consult from "@/public/iconStepToHire/consult.png";
import engagement from "@/public/iconStepToHire/engagement.png";
import signoff from "@/public/iconStepToHire/signoff.png";
import Hire_Scale from "@/public/iconStepToHire/Hire_Scale.png";

export default function StepToHire({ hiredevOf }) {
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

    const steps = [
        {
            title: "Drop an Inquiry",
            icon: dropEnquiry,
        },
        {
            title: "Consult With Our Experts",
            icon: consult,
        },
        {
            title: "Select Engagement Model",
            icon: engagement,
        },
        {
            title: "Sign off and Begin Work",
            icon: signoff,
        },
        {
            title: "Scale Your Team",
            icon: Hire_Scale,
        },

    ]

    return (

        <section className='bg-gray-50'>
            <div className='container mx-auto max-w-screen-xl px-4 md:px-6 sm:py-10 py-5'>


                <h2 className='font-semibold text-orange-500 text-lg'>Steps You Follow</h2>
                <h4 className='font-semibold text-3xl my-2'>Hire {hiredevOf} in 5 Steps</h4>
                <p className='text-md text-gray-800'>Explores the essentials of creating, managing, and refining software. It covers methodologies, benefits, best practices, and insights for selecting partners, optimizing processes, and understanding software&apos;s pivotal role in tech.</p>


                <div ref={containerRef} className="relative mt-14">


                    <div className="grid gap-8 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-6 md:px-0">
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


                                <motion.div className={`relative flex bg-white justify-center gap-6 items-center flex-col rounded-3xl p-4 py-4 border h-full shadow-sm`}>


                                    <motion.div
                                        className="absolute -top-3 bg-white z-10 shadow-lg rounded-full p-1 right-5 -translate-x-1/2 transform"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: index <= activeIndex ? 1 : 0,
                                            scale: index <= activeIndex ? 1 : 0,
                                        }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <CheckCircle2 className="h-6 w-6 text-amber-500" />
                                    </motion.div>


                                    <motion.div
                                        className={`absolute md:top-1/2 top-full md:left-full sm:hidden left-1/2 -translate-x-1/2 transform ${index < activeIndex ? 'lg:block' : 'hidden'}`}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: index <= activeIndex ? 1 : 0,
                                            scale: index <= activeIndex ? 1 : 0,
                                        }}
                                        transition={{ delay: index * 0.4 }}
                                    >
                                        <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0 text-amber-500" />
                                    </motion.div>

                                    <Image src={step.icon} alt={step.title} className='w-20 h-auto' />

                                    <motion.div
                                        className={`relative text-center rounded-3xl p-3 transition-colors ${index <= activeIndex ? 'bg-amber-50' : 'bg-background'
                                            }`}
                                        animate={{
                                            backgroundColor: index <= activeIndex ? 'rgb(255 251 235)' : 'rgb(255 255 255)',
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-md font-semibold">{step.title}</h3>
                                    </motion.div>


                                </motion.div>

                            </motion.div>


                        ))}
                    </div>
                </div>

            </div>
        </section>

    )
}