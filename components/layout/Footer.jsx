"use client"

import React, { useState } from 'react'
import './layout.css'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react'

import indianFlag from "@/public/india-flag.svg"
import { useSubmitContactFormMutation } from '@/store/api/myApi';

import bigLogo from "@/public/big-logo.png"


const Footer = () => {
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
            // alert('Error submitting form: ' + err);
        }
    };




    return (
        <>

            <footer id='contact-us' className="md:pt-8 pt-0">

                <div className="relative">
                    <div className="flex flex-wrap items-end mx-0">

                        <div className='lg:w-1/2 w-full flex-shrink-0 flex-grow-0 relative'>
                            <div className='footer-left lg:rounded-tr-lg px-8 py-12 lg:px-28 relative'>
                                <div className='z-10 relative'>


                                    <span className='text-white text-3xl block lg:tracking-wide mb-4 text-center font-semibold'>Let&apos;s Talk</span>



                                    <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
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
                                                        className="w-full rounded-lg p-2.5 mt-1 bg-white"
                                                    />
                                                ) : (
                                                    <input
                                                        id={field}
                                                        type="text"
                                                        placeholder={`Enter your ${field}`}
                                                        value={formData[field]}
                                                        onChange={handleChange}
                                                        className="w-full rounded-lg p-2.5 mt-1 bg-white"
                                                    />
                                                )}
                                            </div>
                                        ))}

                                        <div>
                                            {isSuccess && <p className="text-white">Form submitted successfully!</p>}
                                            {isError && <p className="text-white">Error: {error?.data?.error || 'Something went wrong'}</p>}
                                            <button
                                                type="submit"
                                                className="text-base mt-4 lg:text-lg tracking-widest border-2 px-6 lg:px-8 py-3 lg:py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-[#ee076e]"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? 'Submitting...' : 'Submit'}
                                            </button>
                                        </div>
                                    </form>




                                </div>
                            </div>
                        </div>



                        <div className='lg:w-1/2 w-full flex-shrink-0 flex-grow-0 relative'>
                            <div className='footer-right bg-gray900 bg-[#00214E] text-gray-500 py-14 sm:py-20 px-10 lg:px-24'>

                                <div className='flex flex-wrap relative z-10'>

                                    <div className='inne z-10 relative'>
                                        <span className='text-white text-base block lg:tracking-wide'>READY TO DO THIS</span>
                                        <p className='text-5xl text-white lg:text-7xl font-extrabold lg:tracking-wide pr-10 py-6 lg:py-12'>Let&apos;s get to work</p>
                                        <a href="tel:+91-9971544661" className="text-base lg:text-lg tracking-widest border-2 px-4 lg:px-8 py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-[#ee076e]">
                                            <span className=''>CONTACT US</span>
                                        </a>
                                        <Image className='imgFooterDesign w-24 sm:w-48' src={bigLogo} alt="footer shape image" />
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div>

                    <div className="bg-[#323466] text-white sm:py-14 py-8">
                        <div className="container mx-auto px-6 sm:px-24">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                                {/* Who we are & Resources Section */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-md font-medium mb-4">Who we are</h3>
                                        <ul className="space-y-2 text-gray-400 text-sm">
                                            <li><Link href="/about-us" className="text-gray-300 hover:text-white">About Us</Link></li>
                                            {/* <li><Link href="/founder" className="text-gray-300 hover:text-white">Founder</Link></li>
                                            <li><Link href="/testimonials" className="text-gray-300 hover:text-white">Testimonials</Link></li>
                                            <li><Link href="/faqs" className="text-gray-300 hover:text-white">FAQs</Link></li> */}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-md font-medium mb-4">Resources</h3>
                                        <ul className="space-y-2 text-gray-400 text-sm">
                                            <li><Link href="#" className="text-gray-300 hover:text-white">Blog</Link></li>
                                            <li><Link href="#" className="text-gray-300 hover:text-white">Guides</Link></li>
                                            <li><Link href="#" className="text-gray-300 hover:text-white">Case Studies</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Digital Transformation Section */}
                                <div>
                                    <h3 className="text-md font-medium mb-4">Services</h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li><Link href="software-development-company-in-india" className="text-gray-300 hover:text-white">Software Development</Link></li>
                                        <li><Link href="application-development-company-india" className="text-gray-300 hover:text-white">Application Development</Link></li>
                                        <li><Link href="/" className="text-gray-300 hover:text-white">Cloud Services</Link></li>
                                        <li><Link href="ecommerce-development-company-india" className="text-gray-300 hover:text-white">Ecommerce Development</Link></li>
                                        <li><Link href="/" className="text-gray-300 hover:text-white">QA Testing</Link></li>
                                        <li><Link href="hire-dedicated-technical-team-india" className="text-gray-300 hover:text-white">Dedicated Technical-Team</Link></li>
                                    </ul>
                                </div>

                                {/* Industries Section */}
                                <div className='sm:ml-12 ml-0'>
                                    <h3 className="text-md font-medium mb-4">Hire</h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li><div className="text-gray-300 hover:text-white">Node Developer</div></li>
                                        <li><div className="text-gray-300 hover:text-white">Java Developer</div></li>
                                        <li><div className="text-gray-300 hover:text-white">C Sharp Developer</div></li>
                                        <li><div className="text-gray-300 hover:text-white">Next Developer</div></li>
                                        <li><div className="text-gray-300 hover:text-white">DevOps</div></li>
                                        <li><div className="text-gray-300 hover:text-white">Django</div></li>
                                    </ul>
                                </div>

                                {/* India Office Section */}
                                <div className='lg:col-span-2'>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Image src={indianFlag} height={26} width={26} alt='Indian flag' />
                                        <h3 className="text-md font-medium">India Offices:</h3>
                                    </div>
                                    <div className="bg-[#494b77] p-3 rounded-lg">
                                        <h4 className="font-semibold text-md mb-2">Noida</h4>
                                        <p className="text-gray-300 text-sm">
                                            H-160, BSI Business Park, Sector-63,<br />
                                            Noida, Uttar Pradesh 201301
                                        </p>
                                        <Link href="tel:+15614633233" className="text-gray-300 hover:text-white text-sm">
                                            +91-9971544661
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="mt-6 pt-8 border-t border-gray-700">
                                <div className="flex flex-col md:flex-row justify-between items-center">
                                    <div className="flex gap-6 mb-4 md:mb-0">
                                        <Link href="https://twitter.com" className="text-gray-300 hover:text-white">
                                            <Twitter className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/bunnx/" className="text-gray-300 hover:text-white">
                                            <Linkedin className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://www.facebook.com/Bunnx.official/" className="text-gray-300 hover:text-white">
                                            <Facebook className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://www.instagram.com/bunn_x.official/" className="text-gray-300 hover:text-white">
                                            <Instagram className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://youtube.com" className="text-gray-300 hover:text-white">
                                            <Youtube className="w-6 h-6" />
                                        </Link>
                                    </div>
                                    <div className="flex gap-4 mb-4 md:mb-0">
                                        {/* <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                                            Term of Use
                                        </Link>
                                        <span className="text-gray-500">|</span> */}
                                        <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                                            Privacy Policy
                                        </Link>
                                    </div>
                                    <div className="text-gray-400 text-sm hover:text-white">
                                        ©2024 Bunnx All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </footer>
        </>
    )
}

export default Footer




