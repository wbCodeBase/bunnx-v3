'use client';
import Link from 'next/link';

import { FaLocationArrow } from "react-icons/fa";

// function formatparameter(input) {
//   return input
//     .split('-') // Split the string by hyphen
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
//     .join(' '); // Join them back together without hyphens
// }


// export async function generateMetadata({ params }, parent) {
//   // read route params
//   const currentIndustrySlug = params.industry
//   console.log("Industry page", currentIndustrySlug);

//   // fetch data
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/metadata/${currentIndustrySlug}`);
//   if (!response.ok) {
//     console.log(`Failed to fetch metadata: ${response.statusText}`);
//     return null
//   }

//   // Parse JSON once
//   const jsonData = await response.json(); 

//   return {
//     title: jsonData.title || "Industry",
//     description: jsonData.description || "Industry Description",
//     robots: "noindex",
//     // openGraph: {
//     //   images: ['/some-specific-page-image.jpg', ...previousImages],
//     // },
//   }
// }



import { useSubmitContactFormMutation } from '@/store/api/myApi';
import { useState } from 'react';


export default function Industry({ params }) {

  const currentIndustrySlug = params.industry


  const industries = [
    {
      id: 1,
      title: "Finance & Insurance: Secure, Compliant, and Future-Ready",
      description: "The finance and insurance world is evolving, and so should your business. Our intelligent solutions help you automate workflows, strengthen security, and stay ahead of ever-changing regulations. Whether you're streamlining claims, optimizing risk assessment, or enhancing customer trust, we bring innovation to the core of your financial operations—turning compliance headaches into growth opportunities.",
      slug: "finance-insurance-solutions",
    },
    {
      id: 2,
      title: "Education: Transforming Learning with Smart Digital Solutions",
      description: "Education is no longer confined to classrooms. We help schools, universities, and EdTech innovators create engaging, personalized learning experiences that break geographical barriers. From AI-driven tutoring to immersive virtual classrooms, our technology fosters a smarter, more accessible education system—empowering both educators and learners to reach new heights.",
      slug: "education-software-development",
    },
    {
      id: 3,
      title: "Healthcare: Patient-Centered Technology for a Healthier Tomorrow",
      description: "Healthcare is about people, and technology should enhance—not replace—the human touch. Our digital solutions improve communication, streamline operations, and unlock real-time patient insights, ensuring better care and faster decision-making. Whether you're managing hospitals, telemedicine platforms, or health data systems, we help you deliver the best patient outcomes with efficiency and compassion.",
      slug: "healthcare-app-development",
    },
    {
      id: 4,
      title: "Logistics & Distribution: Optimized, Automated, and Always on Time",
      description: "Managing supply chains is no easy feat. Our cutting-edge logistics solutions ensure real-time tracking, predictive analytics, and automation that keep your operations running smoothly. From warehouses to last-mile delivery, we help businesses eliminate inefficiencies, reduce costs, and meet growing customer expectations—making every shipment count.",
      slug: "logistics-software-development",
    },
    {
      id: 5,
      title: "Retail & eCommerce: Seamless Shopping, Personalized Experiences",
      description: "The future of retail is digital, and we help you stay ahead. Our eCommerce solutions merge technology with consumer psychology, creating immersive and seamless online shopping experiences. Whether you're launching an online store, optimizing mobile commerce, or personalizing customer journeys, we turn your digital storefront into a revenue powerhouse.",
      slug: "retail-ecommerce-solutions",
    },
    {
      id: 6,
      title: "Travel & Hospitality: Elevate Every Journey with Smart Tech",
      description: "Travel should be effortless and memorable. Our technology helps hotels, airlines, and travel platforms create smooth booking experiences, hyper-personalized services, and lasting guest relationships. From AI-powered recommendations to seamless itinerary management, we build solutions that turn first-time travelers into loyal brand ambassadors.",
      slug: "travel-hospitality-solutions",
    },
    {
      id: 7,
      title: "Media & Entertainment: Engaging Audiences in a Digital World",
      description: "Storytelling meets technology with our innovative media solutions. Whether you're a content creator, streaming platform, or digital publisher, we help you connect with your audience through seamless distribution, real-time engagement, and personalized experiences. Let's redefine how entertainment is created, shared, and experienced.",
      slug: "media-entertainment-solutions",
    },
    {
      id: 8,
      title: "Manufacturing: Smart Factories, Smarter Production",
      description: "Modern manufacturing demands efficiency, precision, and real-time decision-making. We build intelligent software that powers predictive maintenance, automation, and data-driven insights—optimizing production at every stage. Whether you're scaling operations or implementing Industry 4.0, we help manufacturers embrace the future with confidence.",
      slug: "manufacturing-software-solutions",
    },
    {
      id: 9,
      title: "Real Estate & Construction: Digitizing the Built Environment",
      description: "From blueprint to breakthrough, technology is reshaping real estate and construction. Our digital solutions simplify project planning, improve collaboration, and bring smart infrastructure to life. Whether you're developing smart cities or managing large-scale construction, we streamline workflows and ensure every project is built for the future.",
      slug: "real-estate-construction-solutions",
    },
  ];


  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', activeLead: true });
  const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation();


  const handleChange = (e) => {
    const { id, value } = e.target;

    // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
    if (id === 'phone') {
      if (!/^\d*$/.test(value)) return; // Prevent non-digit input
      if (value.length > 10) return; // Limit to 10 digits
    }

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional validation to ensure phone number has exactly 10 digits
    if (formData.phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      await submitContactForm(formData).unwrap();
      alert('Form submitted successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
      window.location.href = "/thank-you"
    } catch (err) {
      console.log(err);
      alert('Error submitting form: ' + err.data.error);
    }
  };

  const currentIndustry = industries.find(industry => industry.slug === currentIndustrySlug);

  return (
    <>
      <div className="relative">
        <div className="flex flex-wrap industry-heroSection">

          <div className='lg:w-3/5 w-full'>
            <div className='h-full relative text-gray-500 py-8 sm:py-20 px-7 lg:px-24'>

              <div className='flex flex-wrap z-10 borde h-full'>
                <div className='z-10 w-full'>
                  <span className='text-white text-base block lg:tracking-wide'>INDUSTRY</span>
                  <h1 className='text-4xl text-white lg:text-5xl font-bold lg:tracking-wide pr10 py-6'>
                    {currentIndustry ? currentIndustry.title : 'Industry'}
                  </h1>
                  <p className='lg:text-lg text-md mb-6 text-white font-medium'>
                    {currentIndustry ? currentIndustry.description : 'Explore how we bring innovation and solutions to various industries.'}
                  </p>
                  <button className="flex items-center justify-center sm:justify-start">
                    <Link href="tel:+91-9971544661" className='flex items-center justify-center gap-2 border-2 p-1 pl-3 font-medium text-lg rounded-full mt-4 text-white'>
                      <span className="px-2"> Contact Us </span>
                      <span className='bg-white rounded-full p-3 text-black rotate-45'>
                        <FaLocationArrow />
                      </span>
                    </Link>
                  </button>
                </div>
              </div>

            </div>
          </div>


          {/* half */}


          <div className='lg:w-2/5 w-full flex-shrink-0 flex-grow-0 relative'>
            <div className='px-4 py-10 lg:px-24 relative'>
              <div className='z-10 relative'>


                <span className='text-white text-3xl block lg:tracking-wide mb-2 text-center font-semibold'>Let&apos;s Talk</span>


                <form onSubmit={handleSubmit} className="flex gap-4 flex-col max-w-md mx-auto p-4 rounded-lg">
                  {['name', 'phone', 'email', 'message'].map((field) => (
                    <div key={field}>
                      <label className="text-white" htmlFor={field}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      {field === 'message' ? (
                        <textarea
                          id={field}
                          placeholder={`Enter your ${field}`}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full rounded-lg p-2.5 px-4 mt-1"
                        />
                      ) : (
                        <input
                          id={field}
                          type="text"
                          placeholder={`Enter your ${field}`}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full rounded-lg p-2.5 px-4 mt-1"
                        />
                      )}
                    </div>
                  ))}

                  <div className='flex justify-center flex-col'>
                    {isSuccess && <p className="text-white">Form submitted successfully!</p>}
                    {isError && <p className="text-white">Error: {error?.data?.error || 'Something went wrong'}</p>}

                    <button
                      type="submit"
                      className="text-base mt-4 lg:text-lg tracking-widest border-2 px-6 lg:px-8 py-3 lg:py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-orange-500"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Submit'}
                    </button>

                  </div>
                </form>

              </div>
            </div>
          </div>


        </div>
      </div>


      {AllIndustry()}


      {/* <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-12 flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-3 h-3 bg-blue-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div> */}


    </>
  );
}




import React from 'react'
import Image from 'next/image';

import agreement from "@/public/industry/icons/agreement.png";
import investmentInsurance from "@/public/industry/icons/investmentInsurance.png";
import logistics from "@/public/industry/icons/logistics.png";
import manufacturing from "@/public/industry/icons/manufacturing.png";
import onlineShopping from "@/public/industry/icons/onlineShopping.png";
import protection from "@/public/industry/icons/protection.png";
import travelTourism from "@/public/industry/icons/travelTourism.png";
import school from "@/public/industry/icons/school.png";
import socialMedia from "@/public/industry/icons/socialMedia.png";


const industries = [
  { name: "Finance & Insurance", slug: "finance-insurance-solutions", img: investmentInsurance },
  { name: "Education", slug: "education-software-development", img: school },
  { name: "Healthcare", slug: "healthcare-app-development", img: protection },
  { name: "Logistics & Distribution", slug: "logistics-software-development", img: logistics },
  { name: "Retail & eCommerce", slug: "retail-ecommerce-solutions", img: onlineShopping },
  { name: "Travel & Hospitality", slug: "travel-hospitality-solutions", img: travelTourism },
  { name: "Media & Entertainment", slug: "media-entertainment-solutions", img: socialMedia },
  { name: "Manufacturing", slug: "manufacturing-software-solutions", img: manufacturing },
  { name: "Real Estate & Construction", slug: "real-estate-construction-solutions", img: agreement }
];

function AllIndustry() {
  return (
    <>
      <section className="border-t border-b container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">
        <p className='font-semibold text-orange-500 text-lg'>We deal with</p>
        <h2 className='font-semibold text-2xl my-3'>Industries We Serve with end-to-end support</h2>
        <p className='text-md text-gray-800'>
          We empower businesses across diverse sectors, delivering tailored solutions that drive efficiency and growth.
          Our expertise spans:
        </p>

        <div className="antialiased mt-8">
          <main className="flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
              <section className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-10 text-center">
                {industries.map((industry, index) => (
                  <Link key={index} href={`/industry/${industry.slug}`} passHref>
                    <article className='hover:shadow-sm flex cursor-pointer group justify-center items-center flex-col p-4 rounded-lg'>
                      <Image className="h-12 w-auto mb-2" src={industry.img} alt={industry.name} />
                      <h3 className="text-md text-gray-700">{industry.name}</h3>
                    </article>
                  </Link>
                ))}
              </section>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}





