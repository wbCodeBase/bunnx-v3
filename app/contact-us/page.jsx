import HeroSection from '@/components/contactUs/HeroSection'
import HereToHelp from '@/components/contactUs/HereToHelp'

import { MdShield } from "react-icons/md";
import { CgMonday } from "react-icons/cg";
import { DiDatabase } from "react-icons/di";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import Image from 'next/image';


export const metadata = {
  title: "Contant Us | BunnX",
  description: 'Have questions or need assistance? Contact Bunnx for expert support and personalized solutions. We are here to help you every step of the way!',
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",  
  alternates: {
    canonical: "contact-us",
},
}


const contactUs = () => {
  return (
    <>

      <HeroSection />


      <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">


        <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

          <div className="rounded-xl px4">
            <h2 className='font-semibold text-orange-500 text-lg'>Exceptional Support</h2>
            <h4 className='font-semibold sm:text-3xl text-2xl my-2'>Reliable & Customer-Centric Assistance</h4>
            <p className='text-md text-gray-800'>
              Our dedicated support team ensures seamless communication, quick issue resolution, and 24/7 assistance, making sure your business runs without interruptions. We prioritize your satisfaction with expert guidance and proactive solutions.
            </p>
            <div className='grid sm:grid-cols-2 gap-10 mt-6 grid-cols-1 px-4'>
              <div className="">
                <span><DiDatabase className='text-purple-500 text-xl' /></span>
                <h5 className='font-semibold my-1'>Quick Responses</h5>
                <p className='text-sm text-gray-500 font-normal'>Reach out for fast, efficient answers.</p>
              </div>

              <div className="">
                <span><MdShield className='text-red-500 text-xl' /></span>
                <h5 className='font-semibold my-1'>Expert Advice</h5>
                <p className='text-sm text-gray-500 font-normal'>Our team is here to provide tailored solutions.</p>
              </div>

              <div className="">
                <span><CgMonday className='text-yellow-500 text-xl' /></span>
                <h5 className='font-semibold my-1'>Reliable Support</h5>
                <p className='text-sm text-gray-500 font-normal'>Count on us whenever you need assistance.</p>
              </div>

              <div className="">
                <span><MdOutlineSettingsSuggest className='text-purple-500 text-xl' /></span>
                <h5 className='font-semibold my-1'>Proactive Support</h5>
                <p className='text-sm text-gray-500 font-normal'>
                  24/7 availability to keep your business running smoothly.
                </p>
              </div>


            </div>

          </div>

          <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">

            <Image src={"/basicComponent/wall.jpg"} className='rounded-xl' alt="component image" width={500} height={400} />

          </div>

        </div>


      </section>




      <HereToHelp />

    </>
  )
}

export default contactUs