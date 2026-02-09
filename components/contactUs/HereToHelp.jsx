import React from 'react'



const HereToHelp = () => {


    const servicesData = [
        {
            title: "Share your Requirement",
            description:
                "We analyze your project requirements from the beginning for a seamless development process.",
        },
        {
            title: "Non Disclosure Agreement (NDA)",
            description:
                "We assure you complete confidentiality with NDA. Your business ideas are always safe with us.",
        },
        {
            title: "Understanding your Requirement",
            description:
                "Based on your requirement, we will provide experts for consultation to select the right approach.",
        },


    ];



    return (
        <>

            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">

                <h2 className='font-semibold text-orange-500 text-lg'>We’re here to help</h2>
                <h4 className='font-semibold text-3xl my-2'>Solutions and Support, When You Need Them Most</h4>
                <p className='text-lg text-gray-800'>We provide expert mobile app developers exactly based on your requirements to scale your team.</p>

                <div className='flex items-center justify-center flex-wrap gap-10 mt-6'>


                    {servicesData.map((service, i) => (
                        <div key={i} className="border hover:border-orange-200 rounded-xl shadow-sm p-4 flex itemscenter flex-col w-96  relative">

                            <h3 className='font-semibold my-3 pb-3 text-gray-800 text-xl border-b border-orange-500'>{service.title}</h3>

                            <p className='text-lg text-gray-600'>{service.description}</p>


                        </div>
                    ))
                    }



                </div>

            </section>


        </>
    )
}

export default HereToHelp