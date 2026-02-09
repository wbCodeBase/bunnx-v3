"use client"


import { useEffect } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";

import TechExpertise from "@/components/hire/TechExpertise";
import EngagementModel from "@/components/hire/EngagementModel";
import BenefitsHiring from "@/components/hire/BenefitsHiring";
import HiringModelsHire from "@/components/hire/HiringModelsHire";
import HeroSection from '@/components/layout/HeroSection';
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/layout/Faqs";
import StepToHire from "@/components/hire/StepToHire";

import GlassmorphismCta from '@/components/layout/GlassmorphismCta';
import PlaneCta2 from "@/components/layout/PlaneCta2";

import { useGetTemplateContentByStrQuery, useGetActiveSlugQuery } from '@/store/api/myApi';

import Lottie from "lottie-react";
import loaderJson from "@/public/pageAnimations/loader.json";
import Techcard from "@/components/hire/Techcard";

import PlaneCta from "@/components/layout/PlaneCta";
import heroDefaultImg from "@/public/hireDev.png"

function formatparameter(input) {
  return input
    .split('-') // Split the string by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' '); // Join them back together without hyphens
}




export default function HireDetailsComponentt() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { hireDevOf } = params;

  const { data, error, isLoading } = useGetTemplateContentByStrQuery("hire");
  const { data: activeSlugData, error: activeSlugError, isLoading: activeSlugIsLoading } = useGetActiveSlugQuery();

  console.log(activeSlugData, activeSlugError, activeSlugIsLoading);


  // Check if the current path matches any active slug
  useEffect(() => {
    // Wait until activeSlugData is loaded, then check if the pathname matches
    if (!isLoading && activeSlugData) {
      const isSlugActive = activeSlugData.some((item) => `/hire/${item.slug}` === pathname);

      // Redirect to 404 if no matching slug is found
      if (!isSlugActive) {
        router.replace("/404");
      }
    }
  }, [activeSlugData, isLoading, pathname, router]);


  if (isLoading || activeSlugIsLoading || activeSlugError || error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full space-y-4">
        {/* Show loader if either loading flag is true */}
        {(isLoading || activeSlugIsLoading) && (
          <div className="flex items-center justify-center h-screen w-full">
            <Lottie animationData={loaderJson} loop={true} />
          </div>
        )}

        {/* Display error messages */}
        {error && (
          <p className="text-red-500 text-lg">
            Error fetching template data: {error?.data?.message || error?.message || "Unknown error"}
          </p>
        )}
        {activeSlugError && (
          <p className="text-red-500 text-lg">
            Error fetching active slug data: {activeSlugError?.data?.message || activeSlugError?.message || "Unknown error"}
          </p>
        )}
      </div>
    );
  }


  const faqData = [

    {
      id: "default-2",
      question: "How can I hire a PHP developer in just 5 steps?",
      answer: {
        type: "list",
        para: "Hiring a PHP developer is simple:",
        content: [
          "Drop an Inquiry",
          "Consult with Our Experts",
          "Select an Engagement Model",
          "Sign Off and Begin Work",
          "Scale Your Team"
        ]
      }
    },
    {
      id: "default-8",
      question: "What hiring models do you offer for developers?",
      answer: {
        type: "paragraph",
        headPara: "We provide flexible models:",
        content: [
          { title: "Monthly Based", para: "Hire offshore staff for up to 160 hours/month with monthly billing cycles." },
          { title: "Hourly Based", para: "Pay for hours worked with real-time updates via timesheets." },
          { title: "Fixed-Cost Projects", para: "Establish a project cost, scope, and timeline before starting." },
        ]
      }
    },
    {
      id: "default-1",
      question: "Can I scale my team during the project?",
      answer: {
        type: "text",
        content: "Yes, you can easily scale your team at any stage of the project based on evolving requirements."
      }
    },
    {
      id: "default-7",
      question: "How does the offshore hiring process work?",
      answer: {
        type: "text",
        content: "Our offshore developers integrate seamlessly with your team, working remotely while maintaining effective communication and delivering high-quality results."
      }
    },
    {
      id: "default-4",
      question: "Can I hire developers on an hourly basis for small tasks?",
      answer: {
        type: "text",
        content: "Yes, our hourly model allows flexibility to add or revoke hours as needed, with real-time updates and communication through your preferred channels."
      }
    },
    {
      id: "default-5",
      question: "Do you offer post-project support?",
      answer: {
        type: "text",
        content: "Yes, our developers can assist with post-project maintenance and updates to ensure smooth performance after deployment."
      }
    },

    {
      id: "default-6",
      question: "How do I book a consultation?",
      answer: {
        type: "text",
        content: "You can book a consultation directly through our website by filling out a form or contacting our team to discuss your requirements."
      }
    },

  ];


  const heroSectionObj = (data.heroSection).find((heroData) => heroData.fetchOnSlug === hireDevOf) || {};
  const serviceSectionObj = (data?.servicesSection).filter((serviceData) => serviceData?.fetchOnSlug.includes(hireDevOf)) || [];


  const servicesData = (Array.isArray(serviceSectionObj) && serviceSectionObj.length > 0)
    ? serviceSectionObj
    : [
      {
        title: "Custom Software Development",
        description:
          "We are committed to deliver custom software solutions that perfectly align with your complex technical needs. You Share your requirements, and we'll create a custom application that evolves with your business and user demands.",
        ctaRedirectUrl: "custom-software-development-services",
      },
      {
        title: "Software Outsourcing Services",
        description:
          "Our software outsourcing services reduce costs, accelerate timelines, and connect you with top-tier talent to give you a competitive edge. At Bunnx we have domain experts, our team delivers tailored, efficient solutions that meet your business needs.",
        ctaRedirectUrl: "software-outsourcing",
      },
      {
        title: "Desktop App Development",
        description:
          "We create robust desktop applications for Mac, Windows, and Linux using C++/Qt, .NET, and Python. Our expertise ensures high-performance solutions tailored to your specific requirements, providing seamless functionality across all major operating systems.",
        ctaRedirectUrl: "",
      },
      {
        title: "Database Integration",
        description:
          "We organize your raw data efficiently, enabling seamless analysis and informed decision-making. Our database development services ensure your data is structured for optimal performance and accessibility, enhancing your ability to derive actionable insights.",
      },
      {
        title: "On-demand Software Teams",
        description:
          "Accelerate development projects and access skilled professionals with our flexible on-demand software teams. Integrate our talent into your workflow for efficient collaboration and faster project delivery.",
        ctaRedirectUrl: "hire-dedicated-development-team-india"
      },
      {
        title: "Ecommerce",
        description:
          "As a leading software development company in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.",
        ctaRedirectUrl: "ecommerce",
      },
      {
        title: "Features Advancement",
        description:
          "As a leading software development company in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.",
        ctaRedirectUrl: "features-advancement",
      },
      {
        title: "Web App Development",
        description:
          "Our team builds responsive, scalable, and efficient web applications tailored to your business needs. We focus on creating seamless user experiences, ensuring high performance, security, and easy navigation.",
        ctaRedirectUrl: "web-application-development-company-india",
      },
      {
        title: "Devops",
        description:
          "Adopt DevOps to optimize software development and operations. With our expertise in collaboration, automation, continuous integration, and delivery pipelines, we empower your business to achieve greater efficiency, quality, and agility.",
        ctaRedirectUrl: "devops",
      },
      {
        title: "Mobile App Development",
        description:
          "Our skilled mobile app developers combine deep IT knowledge with extensive hands-on experience across diverse projects. They analyze your business ecosystem to fully understand your needs and goals, delivering tailored solutions that best fit your requirements.",
        ctaRedirectUrl: "mobile-app-development-company-india",
      },
      {
        title: "API & Software Integration",
        description:
          "We utilize API-driven development to seamlessly integrate custom software with your corporate and third-party systems and services. Our approach ensures smooth, efficient connectivity and enhances the functionality of your software solutions.",
        ctaRedirectUrl: "api-integration",
      },
      {
        title: "Cloud App & Hosting Services",
        description:
          "Leverage our expertise to build secure, scalable cloud applications tailored to your needs. We assess your requirements, develop a risk-mitigation strategy, ensure smooth integration, and optimize performance for maximum efficiency.",

      },
      {
        title: "Support and Maintenance",
        description:
          "At our software development company in India, we prioritise application maintenance just as much as development. We recognize that even the most innovative solutions are only valuable when supported by a stable, well-maintained ecosystem free from bugs and glitches.",
        ctaRedirectUrl: "",
      },


      {
        title: "Application Support Services",
        description:
          "Ensure uninterrupted business operations with proactive support across all levels (L0, L1, L2, L3). Our experts resolve issues, reduce downtime, and enhance system stability, allowing your business to focus on growth and innovation.",
        ctaRedirectUrl: "",
      },
      {
        title: "Application Security Management",
        description:
          "Safeguard your software with end-to-end security management. Our team implements proactive threat detection and prevention measures to minimize risks and ensure your applications remain compliant with industry standards.",
        ctaRedirectUrl: "",
      },
      {
        title: "Application Performance Management",
        description:
          "Achieve peak performance with our application monitoring and optimization services. We ensure your systems run smoothly and efficiently by addressing challenges and improving overall performance for better user experiences.",
        ctaRedirectUrl: "",
      },
      {
        title: "CI/CD and DevOps Implementation",
        description:
          "Accelerate software delivery with seamless CI/CD and DevOps practices. We enhance your development pipelines, enabling faster releases, reduced errors, and greater efficiency for continuous improvements in your applications.",
        ctaRedirectUrl: "",
      },
      {
        title: "Cloud Migration",
        description:
          "Future-proof your software with a smooth transition to the cloud. We provide end-to-end cloud migration services, ensuring minimal disruption while enhancing scalability, flexibility, and cost efficiency.",
        ctaRedirectUrl: "",
      },

    ];



  return (
    <>

      <HeroSection heroSectionObj={heroSectionObj} pageSlug={hireDevOf} heroDefaultImg={heroDefaultImg} extractNameFromSlug={formatparameter(hireDevOf)} />

      <NumericCounterInfo />

      <TechExpertise servicesData={servicesData} />

      <PlaneCta />

      <BenefitsHiring />

      <EngagementModel hiredevOf={formatparameter(hireDevOf)} />

      <GlassmorphismCta />

      <HiringModelsHire />

      <Techcard />

      <PlaneCta2 />

      <StepToHire hiredevOf={formatparameter(hireDevOf)} />

      <ChooseUs />

      <Faqs faqData={faqData} />


    </>
  );
}

