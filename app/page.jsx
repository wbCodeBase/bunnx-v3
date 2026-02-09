

import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import OurServices from "@/components/home/OurServices";
import Industries from "@/components/home/Industries";
import CaseStudiesnProjects from "@/components/home/CaseStudiesnProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Solutions from "@/components/home/Solutions";
import TechStackExpertise from "@/components/home/TechStackExpertise";
import TopServices from "@/components/home/TopServices";
import Faqs from "@/components/layout/Faqs";
import Testimonial from "@/components/home/Testimonial";

import PlaneCta from "@/components/layout/PlaneCta";
import PlaneCta2 from "@/components/layout/PlaneCta2";
import GlassmorphismCta from "@/components/layout/GlassmorphismCta";
import GlassmorphismCta2 from "@/components/layout/GlassmorphismCta2";

import heroHomeImage from "@/public/brodbot.png"
// import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";


export const metadata = {
  title: "Software Development Services in India | Software Development Agency | BunnX",
  description: 'Bunnx offers expert software development services in India, delivering scalable web and mobile app solutions tailored to your business needs.',
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: '/',
  }
}


// Company information - centralized for consistency
const companyInfo = {
  telephone: "+91-9971544661",
  address: {
    streetAddress: "H-160, 203A BSI Business Park, Sector-63",
    addressLocality: "Noida",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    latitude: 28.625605488625713,
    longitude: 77.37881815528482,
  },
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "957",
    bestRating: "5",
    worstRating: "1",
  },
  openingHours: {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.facebook.com/Bunnx.official/",
    "https://www.instagram.com/bunn_x.official/",
    "https://www.linkedin.com/company/bunnx/",
  ],
}


export default async function Home() {

  // const session = await auth()
  // console.log("Home - User", session?.user || "Not Authenticated")

  const heroSectionObj = {
    title: "Expert Software Development Services in India for Web & Mobile Apps",
    description: "We are an acclaimed Indian software development firm dedicated to delivering exceptional outsourced development solutions and expert engineering teams to clients around the world.",
    imageUrl: heroHomeImage,
    ctaText: "Get Connected Now",
    ctaRedirectUrl: "#contact-us",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Software Development Service Company",
    description: "Bunnx offers expert software development services in India, delivering scalable web and mobile app solutions tailored to your business needs.",
    image: "https://www.bunnx.com/logo/bunnx-logo.png",
    "@id": "https://www.bunnx.com",
    url: "https://www.bunnx.com",
    telephone: "+91-9971544661",
    "priceRange": "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: companyInfo.aggregateRating.ratingValue,
      reviewCount: companyInfo.aggregateRating.reviewCount,
      bestRating: companyInfo.aggregateRating.bestRating,
      worstRating: companyInfo.aggregateRating.worstRating,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.streetAddress,
      addressLocality: companyInfo.address.addressLocality,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
      "hasMap": "https://maps.app.goo.gl/8VmvbyhhHqqgmVNU8"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: companyInfo.openingHours.dayOfWeek,
      opens: companyInfo.openingHours.opens,
      closes: companyInfo.openingHours.closes,
    },
    "sameAs": [
      "https://www.facebook.com/Bunnx.official/",
      "https://www.instagram.com/bunn_x.official/",
      "https://www.linkedin.com/company/bunnx/"
    ]

  }


  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="borde pb20 bg-gray800 bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

          <div className="sm:mt12 w-full lg:w-[58%] py-10 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 className="lg:text-5xl text-3xl my-2 font-semibold responsive-heading">{heroSectionObj.title}</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">{heroSectionObj.description}</p>

              <button className="flex items-center justify-center sm:justify-start">
                <Link href={heroSectionObj.ctaRedirectUrl || "/"} className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span className="px-2"> {heroSectionObj.ctaText || "Launch Your Project"} </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
              </button>

            </div>
          </div>

          <div className="md:w-[41%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={heroSectionObj.imageUrl}
              alt="Digital Brain Visualization"
              className="w-full h-auto"
            />
          </div>

        </div>
      </section>

      <NumericCounterInfo />

      <OurServices />

      <PlaneCta />

      <Industries />

      <GlassmorphismCta />

      <TopServices />

      <Solutions />

      <TechStackExpertise />

      <PlaneCta2 />

      <WhyChooseUs />

      <CaseStudiesnProjects />

      <GlassmorphismCta2 />

      <Testimonial />

      <Faqs />



    </>
  );
}
