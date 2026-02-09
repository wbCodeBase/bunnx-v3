import React from 'react'
import Image from 'next/image'

import clutch from "@/public/certification/clutch.svg";
import androidEnterprise from "@/public/certification/androidEnterprise.svg";
import awsPartner from "@/public/certification/aws-partner.png";
import goodFirm from "@/public/certification/goodFirm.svg";
import MicrosoftMin from "@/public/certification/Microsoft-min.png";
import googlePartner from "@/public/certification/googlePartner.png";

import redis from "@/public/techLogos/redis.png";
import Jenkins from "@/public/techLogos/Jenkins.svg";
import aws from "@/public/techLogos/aws.webp";
import nginx from "@/public/techLogos/nginx.webp";
import mysql from "@/public/techLogos/mysql.webp";
import docker from "@/public/techLogos/docker.webp";
import graphQL from "@/public/techLogos/graphQL.webp";
import mongodb from "@/public/techLogos/mongodb.webp";

import go from "@/public/techLogos/go.webp";
import kotlin from "@/public/techLogos/kotlin.png";
import flutter from "@/public/techLogos/flutter.webp";
import php from "@/public/techLogos/php.webp";
import java from "@/public/techLogos/java.png";
import python from "@/public/techLogos/python.svg";
import nodejs from "@/public/techLogos/nodejs.svg";

import svelte from "@/public/techLogos/svelte.png";
import angular from "@/public/techLogos/angular.webp";
import vuejs from "@/public/techLogos/vuejs.webp";
import typescript from "@/public/techLogos/typescript.svg";
import next from "@/public/techLogos/next.svg";
import react from "@/public/techLogos/react.webp";
import tailwind from "@/public/techLogos/tailwind.png";


const frontend = [
  { name: 'React', icon: react },
  { name: 'Next.js', icon: next },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'TypeScript', icon: typescript },
  { name: 'Vue.js', icon: vuejs },
  { name: 'Angular.js', icon: angular },
  { name: 'Svelte', icon: svelte },
]

const backend = [
  { name: 'Node.js', icon: nodejs },
  { name: 'Python', icon: python },
  { name: 'Java', icon: java },
  { name: 'Php', icon: php },
  { name: 'Flutter', icon: flutter },
  { name: 'Kotlin', icon: kotlin },
  { name: 'Go', icon: go },
]

const toolsAndDbs = [
  { name: 'MongoDB', icon: mongodb },
  { name: 'GraphQL', icon: graphQL },
  { name: 'Docker', icon: docker },
  { name: 'MySql', icon: mysql },
  { name: 'Nginx', icon: nginx },
  { name: 'Aws', icon: aws },
  { name: 'Jenkins', icon: Jenkins },
  { name: 'Redis', icon: redis },
]



export default function TechStackMarquee() {
  return (
    <>
      <section className='lg:w-[46%] w-full'>
        <div className="flex flex-col gap-2 overflow-hidden py-2">

          <MarqueeRow direction="right" techArr={frontend} />

          <MarqueeRow direction="left" techArr={backend} />

          <MarqueeRow direction="right" techArr={toolsAndDbs} />

        </div>

        <div className='mt-6'>
          <span> Awards & Certifications </span>

          <div className='flex flex-wrap gap-6 justify-around items-center mt-6'>
            <Image src={clutch} className='sm:w-24 w-20 h-auto' alt="Clutch icon" />
            <Image src={androidEnterprise} className='sm:w-24 w-20 h-auto' alt="Android Enterprise icon" />
            <Image src={awsPartner} className='sm:w-24 w-20 h-auto' alt="awsPartner icon" />
            <Image src={goodFirm} className='sm:w-24 w-20 h-auto' alt="goodFirm icon" />
            <Image src={MicrosoftMin} className='sm:w-24 w-20 h-auto' alt="MicrosoftMin icon" />
            <Image src={googlePartner} className='sm:w-24 w-20 h-auto' alt="MicrosoftMin icon" />
          </div>

        </div>

      </section>
    </>
  )
}

function MarqueeRow({ direction, techArr }) {
  const animationClass = direction === 'left' ? 'animate-marquee-reverse' : 'animate-marquee'
  const animationClass2 = direction === 'left' ? 'animate-marquee2-reverse' : 'animate-marquee2'

  return (
    <div className="relative flex overflow-x-hidden py-1 group">
      <div className={`flex whitespace-nowrap ${animationClass} group-hover:pause-animation`}>
        {techArr.map((tech, index) => (
          <TechIcon key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} />
        ))}
      </div>
      <div className={`absolute top4 flex whitespace-nowrap ${animationClass2} group-hover:pause-animation`}>
        {techArr.map((tech, index) => (
          <TechIcon key={`${tech.name}-${index}-duplicate`} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  )
}

function TechIcon({ name, icon }) {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-6 rounded-lg justify-center mx-2">
      <div className="relative w-16 h-16 mb2">
        <Image src={icon} alt={`${name} icon`} fill={true} sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "contain" }} />
      </div>
      {/* <span className="text-sm font-medium text-gray-600">{name}</span> sizes="(max-width: 768px) 100vw, 33vw"*/}
    </div>
  )
}
