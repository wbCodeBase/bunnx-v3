import Image from 'next/image';
import React from 'react'



import clutch from "@/public/certification/clutch.svg";
import androidEnterprise from "@/public/certification/androidEnterprise.svg";
import awsPartner from "@/public/certification/aws-partner.png";
import goodFirm from "@/public/certification/goodFirm.svg";
import MicrosoftMin from "@/public/certification/Microsoft-min.png";
import googlePartner from "@/public/certification/googlePartner.png";
import aboutUsGrpImgMain from "@/public/aboutImages/aboutUsGrpImgMain.webp";



const OurTeam = () => {
    return (
        <>
            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <h2 className='font-semibold text-orange-500 text-lg'>Our Team</h2>
                <h4 className='font-semibold text-3xl my-2'>Bunnx team is passionate about delivering excellence</h4>
                <p className='text-md text-gray-800'>We have a professional and dedicated team with proficiency in web, mobile and emerging technologies. Our in-house team comprises of professional thinkers with decades of experience in the industry and a track record of transforming your idea into a reality that aligns with your needs.</p>


                <section className="flex flex-wrap justify-cente justify-between gap-8 py-2 mt-6">

                    <div className='lg:w-[50%] w-full border rounded-md'>

                        {/* <Image className='h-auto w-full' src={"/whyChooseUs.jpg"} alt="Custom Software Development" width={650} height={600} /> */}
                        <Image className='h-auto w-full' src={aboutUsGrpImgMain} alt="Custom Software Development" />

                        <div className='p-6'>

                            <p className='font-semibold text-xl my-2'>Empowering Your Vision with Expert Team</p>
                            <p className='text-md text-gray-800'>We are a team of believers, dreamers, doers and creators. We are customer-centric, creating new opportunities.</p>

                        </div>

                    </div>

                    <div className='lg:w-[47%] w-full flex flex-col gap-4 rounded-md'>

                        <p className='text-lg text-gray-800'>
                            We have a team of 500+ skilled and dedicated professionals comprising project managers, business analysts, quality analysts, UX/UI designers, architects, and developers. Our team is highly experienced, creative, dynamic and skilled working collaboratively at all stages to deliver successful solutions.
                        </p>

                        <p className='text-lg text-gray-800'>
                            We are a team of believers, dreamers, doers and creators. We are customer-centric, creating new opportunities.
                        </p>




                        <div className='flex flex-wrap gap-6 justify-around items-center mt-6'>
                            <Image src={clutch} className='sm:w-28 w-24 h-auto' alt="Clutch icon" />
                            <Image src={androidEnterprise} className='sm:w-28 w-24 h-auto' alt="Android Enterprise icon" />
                            <Image src={awsPartner} className='sm:w-28 w-24 h-auto' alt="awsPartner icon" />
                            <Image src={goodFirm} className='sm:w-28 w-24 h-auto' alt="goodFirm icon" />
                            <Image src={MicrosoftMin} className='sm:w-28 w-24 h-auto' alt="MicrosoftMin icon" />
                            <Image src={googlePartner} className='sm:w-28 w-24 h-auto' alt="MicrosoftMin icon" />
                        </div>



                    </div>

                </section>


            </section>
        </>

    )
}

export default OurTeam;