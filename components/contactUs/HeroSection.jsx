"use client"

import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import { useSubmitContactFormMutation } from '@/store/api/myApi';

import clutch from "@/public/certification/clutch.svg";
import androidEnterprise from "@/public/certification/androidEnterprise.svg";
import awsPartner from "@/public/certification/aws-partner.png";
import goodFirm from "@/public/certification/goodFirm.svg";
import MicrosoftMin from "@/public/certification/Microsoft-min.png";
import googlePartner from "@/public/certification/googlePartner.png";
import Image from 'next/image';

const HeroSection = () => {

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
            setFormData({ name: '', phone: '', email: '', message: '' });
            alert('Form submitted successfully!');
            window.location.href = "/thank-you"
        } catch (err) {
            console.log(err);
            alert('Error submitting form: ' + err.data.error);
        }
    };



    return (<>

        <div className="relative">
            <div className="flex flex-wrap industry-heroSection">

                <div className='lg:w-3/5 w-full'>
                    <div className='h-full relative text-gray-500 py-8 sm:py-20 px-7 lg:px-24'>

                        <div className='flex flex-wrap z-10 borde h-full'>
                            <div className='z-10 w-full'>
                                <span className='text-white text-base block lg:tracking-wide'>WE ARE HERE FOR YOU</span>
                                <h1 className='text-4xl text-white lg:text-5xl font-bold lg:tracking-wide py-6'>
                                    Contact Us
                                </h1>
                                    <p className='lg:text-lg text-md mb-6 text-white font-medium'>
                                        Got a game-changing app idea? Let&apos;s bring it to life! Drop us a message, and our team will reach out to understand your vision, goals, and requirements. Whether you&apos;re looking to build a sleek web platform or a cutting-edge mobile app, we&apos;ve got world-class developers ready to turn your ideas into reality. Let&apos;s create something extraordinary together!
                                    </p>
                                
                                <button className="flex items-center justify-center sm:justify-start">
                                    <Link href="tel:+91-9971544661" className='flex items-center justify-center gap-1 border-2 p-1 pr-3 font-medium text-lg rounded-full my-2 text-white'>
                                        <span className='bg-white rounded-full p-3 text-black vibrating-icon'>
                                            <FaPhoneAlt size="1.2em" />
                                        </span>
                                        <span className="px-2"> Contact Us </span>
                                    </Link>
                                </button>

                            </div>

                            <div className='mt-6 w-full'>

                                <span className='text-white'> Awards & Certifications </span>

                                <div className='flex flex-wrap gap-6 justify-around items-center mt-4 border border-white bg-white p-1 rounded-lg'>
                                    <Image src={clutch} className='sm:w-24 w-20 h-auto' alt="Clutch icon" />
                                    <Image src={androidEnterprise} className='sm:w-24 w-20 h-auto' alt="Android Enterprise icon" />
                                    <Image src={awsPartner} className='sm:w-24 w-20 h-auto' alt="awsPartner icon" />
                                    <Image src={goodFirm} className='sm:w-24 w-20 h-auto' alt="goodFirm icon" />
                                    <Image src={MicrosoftMin} className='sm:w-24 w-20 h-auto' alt="MicrosoftMin icon" />
                                    <Image src={googlePartner} className='sm:w-24 w-20 h-auto' alt="MicrosoftMin icon" />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


                {/* 2nd half */}


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





    </>
    )
}

export default HeroSection