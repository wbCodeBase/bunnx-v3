import HeroSection from "@/components/aboutUs/HeroSection"
import WhatWeBelieve from "@/components/aboutUs/WhatWeBelieve"
import OurCoreValue from "@/components/aboutUs/OurCoreValue"
import OurTeam from "@/components/aboutUs/OurTeam"
import OurPhilosophy from "@/components/aboutUs/OurPhilosophy"


export const metadata = {
    title: "About Us | BunnX",
    description: 'Discover the story behind Bunnx – your trusted partner in Software Development. Learn about our mission, values, and commitment to delivering top-notch solutions tailored to your needs.',
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
        canonical: "about-us",
    },
  }


const AboutUs = () => {
        return (
            <>

                <HeroSection />

                <WhatWeBelieve />

                <OurCoreValue />

                <OurTeam />

                <OurPhilosophy />

            </>
        )
    }

export default AboutUs
