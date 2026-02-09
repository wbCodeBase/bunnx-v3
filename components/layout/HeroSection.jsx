"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { createLinkedContent } from '@/utils/LinkBuilder';
import { FaLocationArrow } from "react-icons/fa";

// Keep value empty if no redirection is required 
const keywordToSlug = {
  'top front end development company': 'front-end-development-services-india',
  'back end development company': 'back-end-development-services-india',
  'software development company in India': 'software-development-company-in-india',
  'software development services': 'software-development-company-in-india',
  'CRM software solutions': 'crm-software-development-company-india',
  "custom software development company": 'custom-software-development-services',
  "IT consulting services India": 'it-consulting-services-india',
  "web development company": 'web-application-development-company-india',
  "mobile app development company": 'mobile-app-development-company-india',
};

const HeroSection = ({ pageSlug, extractNameFromSlug, heroDefaultImg }) => {


  const heroSection = [  {
    "title": "Front End Development Services India",
    "description": "Take the user level to the next level and develop a flawless website with the top front end development company.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "front-end-development-services-india"
  },

  {
    "title": "A Brilliant Team, Minus the Headaches",
    "description": "Remember that brilliant idea keeping you up at night? The one that could change everything? We're the secret weapon that turns those 3 AM sparks into world-changing realities. Imagine having a team of tech wizards who don't just code, but truly get your vision.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "hire-dedicated-technical-team-india"
  },

  {
    "title": "Software Development Company in India",
    "description": "Bunnx is Leading software Development Company in India to plan, implement new softwares and upgrades, improve customer service, and drive productivity. Enhance user satisfaction, drive results and accelerate innovation with Leading software development services that exceed expectations in functionality and growth.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "software-development-company-in-india"
  },
  {
    "title": "Back End Development Services India",
    "description": "Behind every great app is a strong backend. We realise this and write the codes that make things work in the background of your website. This makes us the best back end development company in India.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "back-end-development-services-india"
  },
  {
    "title": "CRM Software Development Company India",
    "description": "Using smooth CRM software solutions created by professionals at a top CRM software development company, you can't reimagine how your company will operate in the future.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "crm-software-development-company-india"
  },
  {
    "title": "Custom Software Development Services",
    "description": "Whether it’s building an app with real-time analytics, integrating advanced APIs, or optimizing performance for heavy user traffic, our custom software development company handles the technical complexities so you can offer your users the best.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "custom-software-development-services"
  },
  {
    "title": "Software Consulting Services India",
    "description": "With smart software consulting services, we help you rethink how your business runs, simpler, faster, and more efficiently. As one of India’s leading software consulting companies, we’re all about creating solutions that actually work for you.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "software-consulting-services-india"
  },
  {
    "title": "IT Consulting Services India",
    "description": "With our IT consulting services India, you can completely change how your business operates and gets ready for the future. As one of India’s top IT consulting firms, it brings innovation to the core of your operations.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "it-consulting-services-india"
  },
  {
    "title": "Web Application Development Company in India",
    "description": "Web applications should do more than just functioning. And hence, our web development company builds such apps that don’t just work but leave a lasting impression. Every project we take on is crafted with a lot of detailed work while balancing design.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "web-application-development-company-india"
  },
  {
    "title": "Mobile App Development Company India",
    "description": "Get futuristic mobile experiences with apps that go beyond the ordinary. Our mobile app development company creates a balance between design and performance. We also excel in collaboration and precision. From wireframes to the final launch, we pay attention to every detail.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "mobile-app-development-company-india"
  },
  {
    "title": "API Integration & Development Services",
    "description": "We design APIs that make your systems work better together. With our API Development & Integration services, your applications can communicate effortlessly and your business can run smartly. Get the best outcome of API development & integration with no hassle at all!",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "api-integration-and-development-services"
  },
  {
    "title": "Agile Consulting Services India",
    "description": "Tired of endless meetings and bottlenecks slowing your team down? Agile isn’t just a method and we’re here to help you master it.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "agile-consulting-services-india"
  },
  {
    "title": "CMS Development Services India",
    "description": "Now no more struggling with updates or dealing with web designs—just an effortless way to manage your content. Our team builds CMS solutions that let you add, edit, and organize everything without the usual maintenance tension.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "cms-development-services-india"
  },
  {
    "title": "Application Development Company India",
    "description": "Let’s create an application that is built to impress your visitors. With our application development services, we’ll bring better apps that have the right user interface and stand out from the crowd.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "application-development-company-india"
  },
  {
    "title": "Website Development Services India",
    "description": "From idea to launch, we build websites that truly reflect your business. You'll get exceptional results from the best website development company.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "website-development-services-india"
  },
  {
    "title": "Full Stack Development Services",
    "description": "Remold the potential of your presence online with a fully customized website created by experts of our full stack development company.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "full-stack-development-services"
  },
  {
    "title": "eCommerce Development Company in India",
    "description": "Transform the future of your online business with a perfectly designed eCommerce website, built by specialists from a leading eCommerce development company. Elevate your brand with innovative solutions and an error-free user experience that sets your digital store apart.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-development-company-india"
  },
  {
    "title": "Ecommerce Consulting Services to Grow Your Business",
    "description": "We are the best eCommerce consultant in India that dives deep into your goals, making sure every click and scroll translates to sales. We optimize your mobile experience or revamp your product pages.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-consulting-services"
  },
  {
    "title": "Ecommerce Maintenance & Support",
    "description": "Our eCommerce website maintenance & support services team in India builds and maintains online stores that are fast and free from frustrating errors. If you're starting fresh or upgrading an existing store, we make sure your website runs like a dream.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-maintenance-and-support-services"
  },
  {
    "title": "Shopify Development Agency",
    "description": "Dreaming of an online store that doesn’t just sell but leaves an impression? Bunnx, a top Shopify development company in India can turn your ideas into a digital masterpiece. We think sleek designs, lightning-fast performance, and features that wow your customers.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "shopify-development-company-in-india"
  },
  {
    "title": "Ecommerce Implementation Services",
    "description": "We don’t just set up ecommerce platforms; we build stores that make browsing, buying, and returning effortless. Our team handles the ecommerce implementation process. If you’re launching a new store or giving an old one a fresh look, we make sure your ecommerce site isn’t just another shop.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-implementation"
  },
  {
    "title": "eCommerce Web Development",
    "description": "Redefine eCommerce with apps that don’t just function but leave a lasting impression. Our eCommerce web development strategy bridges UI/UX precision with backend stability. It also includes creation of the first blueprint and the final rollout.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "ecommerce-web-development"
  },
  {
    "fetchOnSlug": "woocommerce-development-services-india",
    "title": "WooCommerce Development Services India",
    "description": "We create a website  that has a bright and welcoming interface. So, team up with our WooCommerce development agency. We’re not just developers; we’re your partners in creating a space that is inviting.",
    "ctaText": "Get Connected Now",
    "ctaRedirectUrl": "#contact-us", 
  },
  {
    "fetchOnSlug": "it-staff-augmentation-services-india",
    "title": "IT Staff Augmentation Services in India",
    "description": "Missing a Python developer for your new project? Or do you need a UI/UX designer? Tell us what’s missing in your team and we’ll send you the talented experts. Our staff augmentation company in India will fill the skill gap instantly.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
  },
  {
    "title": "Hire Software Developer India",
    "description": "Every great software product starts with the right people behind it. Finding the right developers, though? We make it easy. If you need a single developer or an entire team, our team connects you with professionals who don’t just write code but build solutions that work.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "hire-software-developer-india"
  },
  {
    "title": "IT Outsourcing Services",
    "description": "IT outsourcing brings a skilled tech team without the stress of hiring, training, or managing in-house developers. We handle the heavy lifting while you concentrate on your core business. Our team maintains existing systems and develops the best solutions.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "it-outsourcing-services"
  },
  {
    "title": "Hire Dedicated Software Development Team in India",
    "description": "Great ideas need the right people who can work side by side, tackle challenges, and create a fully functional software. If you're building a startup from the ground up or expanding an existing platform, we bring the right mix of skills to the table.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "hire-dedicated-development-team-india"
  },
  {
    "title": "Offshore Dedicated Development Center in India",
    "description": "Why build everything in-house when you can have a dedicated team working on your projects? Our offshore development center gives you access to skilled engineers, architects, and testers. Instead of dealing with hiring headaches or infrastructure costs, you get a team that’s already set up and ready to build. With expertise in multiple programming languages, we take care of the technical side so you can concentrate on growing your business.",
    "ctaText": "Get started with us",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "offshore-dedicated-development-center-india"
  },

  {
    "title": "India’s Leading Software Development Outsourcing Company",
    "description": "Bring your ideas to life with our expert engineers. With 500+ successful projects, we blend Silicon Valley excellence with India’s innovation. Our 200+ certified developers specialize in AI, Cloud, Blockchain, and more, delivering solutions 40% faster. Skip the hassle of building a team – we provide pre-vetted talent, modern tools, and proven processes. Whether you need a full product team or niche expertise, we’re here to help you build the future.",
    "ctaText": "Let’s Talk – Free Consultation",
    "ctaRedirectUrl": "#contact-us",
    "fetchOnSlug": "outsourcing-software-development-in-india"
  }

]

  const heroSectionObj = heroSection.find(section => 
    section.fetchOnSlug === pageSlug
  );

  const heroSectionData = { 
    title: heroSectionObj?.title || extractNameFromSlug,
    description: heroSectionObj?.description || "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    imageUrl: heroSectionObj?.imageUrl || heroDefaultImg,
    ctaText: heroSectionObj?.ctaText || "Get Connected With us",
    ctaRedirectUrl: heroSectionObj?.ctaRedirectUrl || "#contact-us", 
  };

  const { title, description, imageUrl, ctaText, ctaRedirectUrl } = heroSectionData;


  return (
    <>
      <section className="borde pb20 bg-gray800 bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

          <div className="sm:mt12 w-full lg:w-[58%] py-10 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 className="lg:text-5xl text-3xl my-2 font-semibold responsive-heading">{title}</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">{createLinkedContent(description, keywordToSlug, pageSlug)}</p>

              <button className="flex items-center justify-center sm:justify-start">
                <Link href={ctaRedirectUrl || "/"} className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span className="px-2"> {ctaText || "Launch Your Project"} </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
              </button>

            </div>
          </div>

          <div className="md:w-[41%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={imageUrl}
              alt="Digital Brain Visualization"
              className="w-full h-auto"
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection;



