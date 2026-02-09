"use client"
import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup';


import coreops from "@/public/logo/coreops.png"
import deselect from "@/public/logo/deselect.png"
import hexaview from "@/public/logo/hexaview.png"
import jera from "@/public/logo/Jera.png"
import netrika from "@/public/logo/Netrika.png"
import nimble from "@/public/logo/nimble.png"
import nodinite from "@/public/logo/nodinite.png"
import Peersol from "@/public/logo/Peersol.png"
import saaswork from "@/public/logo/saaswork.png"




const clients = [
    { name: 'Peersol', icon: Peersol },
    { name: 'Saaswork', icon: saaswork },
    { name: 'Nodinite', icon: nodinite },
    { name: 'Coreops', icon: coreops },
    { name: 'Nimble', icon: nimble },
    { name: 'Netrika', icon: netrika },
    { name: 'Jera', icon: jera },
    { name: 'Hexaview', icon: hexaview },
    { name: 'Deselect', icon: deselect },
]

export default function NumericCounterInfo() {

    return (
        <>


            <div className="antialiased my-10 -translatey-16 md:block hidden">

                <main className="flex flex-col justify-center overflowhidden">
                    <div className="w-full relative border-y border-gray-300 max-w-6xl bg-orange50 mx-auto px-4 py-0">

                        <h4 className='font-quando absolute bg-white px-8 top-0 left-1/2 -translate-y-6 -translate-x-1/2 font-medium text-gray-500 text-lg my-2 text-center'>Trusted by <span className='text-orange-300'>Startups</span> and <span className='text-orange-300'>Fortunes</span></h4>

                        <div className="flex flex-col gap-2 overflow-hidden py-2">
                            <MarqueeRow direction="right" />
                        </div>



                    </div>

                </main>


            </div>


            <div className="antialiased my10 -translatey-16 block md:hidden">

                <main className="flex flex-col justify-center overflow-hidden">
                    <div className="w-full rounded-lg max-w6xl bg-orange50 mx-auto px-4 md:px-6 py-6">

                        <section className="font-quando grid gap-6 grid-cols-2 md:grid-cols-4 md:gap-10">


                            <article className='flex justify-cente items-center flex-col p-4 rounded-lg'>

                                <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                    <span className="text-orange-500"><CountUp end={16} enableScrollSpy />+</span>
                                </span>
                                <p className="text-md text-gray-700 text-center">Years Experience</p>
                            </article>

                            <article className='flex justify-cente items-center flex-col p-4 rounded-lg'>

                                <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                    <span className="text-orange-500"><CountUp end={60} enableScrollSpy />+</span>
                                </span>
                                <p className="text-md text-gray-700 text-center">Successful Projects</p>
                            </article>

                            <article className='flex justify-cente items-center flex-col p-4 rounded-lg'>

                                <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                    <span className="text-orange-500"><CountUp end={180} enableScrollSpy />+</span>
                                </span>
                                <p className="text-md text-gray-700 text-center">Satisfied Clients</p>
                            </article>


                            <article className='flex justify-cente items-center flex-col p-4 rounded-lg'>

                                <span className="flex tabular-nums text-4xl font-bold mb-2 duration-\[3s\] ease-out" >
                                    <span className="text-orange-500"><CountUp end={12} enableScrollSpy />+</span>
                                </span>
                                <p className="text-md text-gray-700 text-center">Countries</p>
                            </article>



                        </section>



                    </div>

                </main>


            </div>




        </>)
}


function MarqueeRow({ direction }) {
    const animationClass = direction === 'left' ? 'animate-marquee-reverse' : 'animate-marquee'
    const animationClass2 = direction === 'left' ? 'animate-marquee2-reverse' : 'animate-marquee2'

    return (
        <div className="relative flex overflow-x-hidden group">
            <div className={`flex whitespace-nowrap ${animationClass} group-hover:pause-animation`}>
                {clients.map((tech, index) => (
                    <TechIcon key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} />
                ))}
            </div>
            <div className={`absolute flex whitespace-nowrap ${animationClass2} group-hover:pause-animation`}>
                {clients.map((tech, index) => (
                    <TechIcon key={`${tech.name}-${index}-duplicate`} name={tech.name} icon={tech.icon} />
                ))}
            </div>
        </div>
    )
}

function TechIcon({ name, icon }) {
    return (
        <div className="flex flex-col items-center px-6 rounded-lg justify-center mx-2">
            <div className="relative w-28 h-28">
                <Image src={icon} alt={`${name} icon`} fill={true} style={{ objectFit: "contain" }} sizes="(max-width: 768px) 100vw, 44vw" />
            </div>
        </div>
    )
}




