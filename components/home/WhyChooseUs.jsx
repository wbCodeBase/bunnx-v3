import Image from 'next/image';
import React from 'react'
import ofc from "@/public/ofc.jpg";

const WhyChooseUs = () => {
    return (
        <>
            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">

                <span className='font-semibold text-orange-500 text-lg'>Why Choose Us</span>
                <h2 className='font-semibold text-3xl my-2'>Empowering Your Vision to Life with Heart and Expertise</h2>
                <p className='text-md text-gray-800'>At our core, we believe in the power of collaboration. Our friendly team is dedicated to crafting personalized solutions that resonate with your unique goals. From innovative platforms to ongoing support, we’re here every step of the way, ensuring your business not only grows but thrives. Let’s embark on this journey together!</p>


                <section className="flex flex-wrap justify-cente justify-between gap-2 py-2 mt-6">

                    <div className='lg:w-[52%] w-full border border-gray-300 rounded-lg overflow-hidden'>

                        {/* <Image className='h-auto w-full' src={"/whyChooseUs.jpg"} alt="Custom Software Development" width={650} height={600} /> */}
                        <Image className='h-auto w-full rounded-tlg' src={ofc} alt="Custom Software Development" width={650} height={600} />

                        <div className='p-6'>

                            <h2 className='font-semibold text-orange-500 text-md'>Our Team</h2>
                            <h2 className='font-semibold text-xl my-2'>Driven by Passion, Empowered by Expertise</h2>
                            <p className='text-md text-gray-800'>Our team consists of industry experts who are committed to delivering innovative solutions. We work collaboratively to ensure every project exceeds expectations, combining technical prowess with a client-first approach.</p>

                        </div>

                    </div>

                    <div className='lg:w-[47%] w-full flex rounded-md'>



                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-1">
                            {/* Card 1 style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'}}*/}

                            <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} className="group relative py-4 px-6 overflow-hidden rounded-lg flex items-center justify-center flex-col transition-all duration-300">

                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/410/77/199/5bd0bdc12d414-wallpaper-preview.jpg")' }}
                                ></div>

                                <div className="flex flex-col items-center group-hover:text-white justify-cente h-ful">
                                    <h3 className="text-xl font-semibold mb-2 z-10">Client-Centric</h3>
                                    <p className="text-center group-hover:opacity-0 opacity-100 transition-opacity duration-300">We prioritize your goals, delivering tailored solutions and personalized support to ensure every project aligns with your vision and business needs.</p>
                                </div>
                                <ul className="absolute px-10 ml-5 font-medium text-md inset-0 flex group-hover:text-white flex-col items-cente mt-10 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <li className="mb-2">- Tailored Solutions</li>
                                    <li className="mb-2">- Personalized Support</li>
                                    <li className="mb-2">- Vision Alignment</li>
                                </ul>

                                {/* <Link className='flex z-10 border items-center justify-center gap-2 bg[#261E80] p-1 font-medium text-sm bg-orange-500 group-hover:bg-black rounded-full mt-4 text-white' href="/services/mobile-app"><span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}

                            </div>

                            {/* Card 2 */}
                            <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} className="group relative py-4 px-6 overflow-hidden rounded-lg flex items-center justify-center flex-col transition-all duration-300">

                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: 'url("https://img.pikbest.com/backgrounds/20200512/abstract-black-background-with-square-purple-and-blue-frame-luxury-futuristic-technology-v_1761876jpg!w700wp")' }}
                                ></div>

                                <div className="flex flex-col items-center group-hover:text-white justify-cente h-ful">
                                    <h3 className="text-xl font-semibold mb-2 z-10">Innovative Solutions</h3>
                                    <p className="text-center group-hover:opacity-0 opacity-100 transition-opacity duration-300">Leverage cutting-edge technologies, advanced tools, and scalable platforms to gain a competitive edge and drive your business forward effectively.</p>
                                </div>
                                <ul className="absolute px-10 font-medium text-md inset-0 flex group-hover:text-white flex-col items-cente ml-5 mt-8 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <li className="mb-2">- Advanced Tools</li>
                                    <li className="mb-2">- Scalable Platforms</li>
                                    <li className="mb-2">- Competitive Edge</li>
                                </ul>

                                {/* <Link className='flex z-10 border items-center justify-center gap-2 bg[#261E80] p-1 font-medium text-sm bg-orange-500 group-hover:bg-black rounded-full mt-4 text-white' href="/services/mobile-app"><span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}

                            </div>

                            {/* Card 3 */}
                            <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} className="group relative py-4 px-6 overflow-hidden rounded-lg flex items-center justify-center flex-col transition-all duration-300">

                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: 'url("https://png.pngtree.com/background/20210710/original/pngtree-tech-black-gold-line-particle-business-background-picture-image_994449.jpg' }}
                                ></div>


                                <div className="flex flex-col items-center group-hover:text-white justify-cente h-ful">
                                    <h3 className="text-xl font-semibold mb-2 z-10">Expertise You Can Trust</h3>
                                    <p className="text-center group-hover:opacity-0 opacity-100 transition-opacity duration-300">With years of proven experience, our team delivers industry-leading solutions designed to meet your unique challenges and achieve measurable results.</p>
                                </div>
                                <ul className="absolute px-10 font-medium text-md inset-0 flex group-hover:text-white flex-col items-cente  ml-5 mt-8 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <li className="mb-2">- Proven Track Record</li>
                                    <li className="mb-2">- Industry Knowledge</li>
                                    <li className="mb-2">- Result-Oriented</li>
                                </ul>

                                {/* <Link className='flex z-10 border items-center justify-center gap-2 bg[#261E80] p-1 font-medium text-sm bg-orange-500 group-hover:bg-black rounded-full mt-4 text-white' href="/services/mobile-app"><span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}

                            </div>


                            {/* Card 4 */}
                            <div style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)' }} className="group relative py-4 px-6 overflow-hidden rounded-lg flex items-center justify-center flex-col transition-all duration-300">

                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: 'url("https://png.pngtree.com/background/20210710/original/pngtree-tech-black-gold-line-particle-business-background-picture-image_994449.jpg' }}
                                ></div>

                                <div className="flex flex-col items-center group-hover:text-white justify-cente h-ful">
                                    <h3 className="text-xl font-semibold mb-2 z-10">Reliable Support</h3>
                                    <p className="text-center group-hover:opacity-0 opacity-100 transition-opacity duration-300">Enjoy 24/7 proactive monitoring, assistance, and quick resolutions to keep your systems running smoothly and ensure peace of mind at all times.</p>
                                </div>
                                <ul className="absolute px-10 font-medium text-md inset-0 flex group-hover:text-white flex-col items-cente  ml-5 mt-10 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <li className="mb-2">- 24/7 Assistance</li>
                                    <li className="mb-2">- Proactive Monitoring</li>
                                    <li className="mb-2">- Quick Resolutions</li>
                                </ul>

                                {/* <Link className='flex z-10 border items-center justify-center gap-2 bg[#261E80] p-1 font-medium text-sm bg-orange-500 group-hover:bg-black rounded-full mt-4 text-white' href="/services/mobile-app"><span className='bg-white rounded-full p-2 text-black'> <FaLocationArrow /> </span></Link> */}

                            </div>


                        </div>




                    </div>

                </section>


            </section>
        </>

    )
}

export default WhyChooseUs;