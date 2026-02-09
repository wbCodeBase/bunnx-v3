import React from 'react'
import Link from 'next/link';
import { IoArrowForward } from "react-icons/io5";

const TechExpertise = ({servicesData}) => {


  return (
    <>
      <section className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10">

        <h2 className='font-semibold text-orange-500 text-lg'>Tech Expertise</h2>
        <h4 className='font-semibold text-3xl my-2'>Expertise of our Backend Developers</h4>
        <p className='text-md text-gray-800'>Our developers bring top-notch expertise, combining technical skill with innovative problem-solving. Focused on quality and tailored solutions, they deliver robust, scalable results to empower your business in a competitive digital world.</p>

        <div className='relative flex justify-center flex-wrap gap-10 mt-6'>

          {(servicesData).map((service, i) => (
            <div key={i} className="border hover:border-orange-200 rounded-xl shadow-sm p-4 flex itemscenter flex-col w-96  relative">

              <h3 className='font-semibold my-3 pb-3 text-gray-800 text-xl border-b border-orange-500'>{service.title}</h3>

              <p className='text-gray-600'>{service.description}</p>


              {service?.ctaRedirectUrl &&
                <div className='flex justify-end items-center mt-4'>
                  <Link href={`/service/${service.ctaRedirectUrl}`} className='flex absolute bottom-2 right-4 items-center justify-center text-orange-500 p-1 pl-3 font-medium text-md mt-4'><span className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'> Know more </span> <span className='px-1'> <IoArrowForward /> </span></Link>
                </div>
              }

            </div>
          ))
          }

        </div>

      </section>
    </>
  )
}

export default TechExpertise;