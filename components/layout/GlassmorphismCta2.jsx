import React from 'react';
import Link from "next/link";

const data = [
  {
    slug: "front-end-development-services-india",
    tagline: "Get a Digital Ecosystem with Our Experts!",
    title: "Accelerate Your Project’s Success with the Best Front End Technologies.",
    description: "From databases to deployment, we create intelligent solutions that scale with your ambitions. Get the best website designed that will help you boost your reach and help your customers navigate easily.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "back-end-development-services-india",
    tagline: "Get a Blueprint for the Back-end of your Application.",
    title: "Our Database knows no Failures and Long Load Times.",
    description: "As your business grows, we solve all the tasks by talking technical. We combine the architecture and cybersecurity to provide the best experience to your visitors.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "crm-software-development-company-india",
    tagline: "Scale Your Business with Expert CRM Solutions!",
    title: "Transform Customer Relationships into Business Success with Professional CRM Development.",
    description: "From database optimization to reliable deployment, ourCRM software developers develop CRM software solutions that evolve with you.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "custom-software-development-services",
    tagline: "Get Lightweight Frameworks, Heavy Results!",
    title: "Drive Unstoppable Growth with Agile, Secure custom software Development.",
    description: "Every line of code, feature, and interaction is built with your purpose. From mapping out ideas to delivering a product, we stay hands-on every step of the way.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "software-consulting-services-india",
    tagline: "Ready to elevate your customer relationships?",
    title: "Turn Your Customer Relationships into Lasting Success with our Software Consulting Services.",
    description: "We’re here to help you with custom software consulting services that fits your business today!",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "software-development-company-in-india",
    tagline: "Be Success-Ready With the Right Software!",
    title: "Get Ready to Stay Ahead with Best Software Development Services",
    description: "Whether you need a custom-made software or one that can merge with your existing system, we have the right solution. Connect with us and get the best software development services in no time.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "it-consulting-services-india",
    tagline: "Your IT Solutions Just Got Better With Us!",
    title: "Big Ideas Need Smarter IT Solutions.",
    description: "Searching for a tech solution can be hard. But with the best IT consulting experts, you get smart and effective solutions easily. So, get tech support and extraordinary results from the best IT consulting services in India.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "mobile-app-development-company-india",
    tagline: "Get the Best Mobile App with Our Experts!",
    title: "We Design Apps that are as Dynamic as your Vision",
    description: "From creating user journeys to making features, we design apps with jaw-dropping interfaces.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "api-integration-and-development-services",
    tagline: "Your API Partner for Smarter Solutions!",
    title: "We Enable Smarter Workflows With Intelligent APIs",
    description: "As a trusted API Development & Integration Company, we focus on scalable solutions. Our API Development & Integration Services ensure seamless connectivity, making your systems efficient and future-ready.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "agile-consulting-services-india",
    tagline: "Let’s set you up for lasting success.",
    title: "Sharpen your approach with us.",
    description: "We’ll work side by side with you to fine-tune workflows, smooth out bumps, and get your team firing on all cylinders.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "application-development-company-india",
    tagline: "Get Lightweight Frameworks, Heavy Results!",
    title: "Drive Unstoppable Growth with Agile, Secure Application Development.",
    description: "Our experts code to make custom architectures for smarter applications. So, from APIs to algorithms, we’ve got it covered. That’s because we build applications with performance-first engineering.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "website-development-services-india",
    tagline: "Fuel Innovation with our Architectures That Power Progress.",
    title: "We Create Digital Foundations That Propel Growth Beyond Limits.",
    description: "From responsive design to secure coding practices, our website development company builds dynamic, high-performing websites that adapt to your business needs and technological advancements.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "cms-development-services-india",
    tagline: "Need A Full-fledged Team?",
    title: "Achieve Unmatched Growth with our CMS Solutions",
    description: "Our developers make the stage where your brand performs its daily show. It helps us add new products, update banners, tweak layouts, and tell your brand story. So, why rely on the ordinary, when you can get the best with Bunnx?",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "full-stack-development-services",
    tagline: "Get apps that look great and work better!",
    title: "Drive Unstoppable Growth with Agile, Secure Full Stack Development",
    description: "Our approach to full stack development brings technical precision to deliver results. Whether it’s designing engaging user experiences or building strong, scalable back-end systems, we focus on creating solutions that drive growth for your business.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "ecommerce-development-company-india",
    tagline: "Your success, coded into every detail. ",
    title: "Achieve Unmatched Growth with Secure Ecommerce Solutions",
    description: "From efficient database management to cloud deployment, our ecommerce development company creates systems designed to grow alongside your business. We make the store that is no longer static and creates more traffic.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "ecommerce-consulting-services",
    tagline: "Keep your customers coming back for more.",
    title: "Looking to make your online store?",
    description: "We’ll dig into your current platform and work together to create an experience for both you and your customers. With detailed analysis, our solutions not only ensure you get the best but also your customer’s get the best.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "web-application-development-company-india",
    tagline: "Get Engaging Web Apps Built for the Future!",
    title: "Web Apps That Work Harder, So You Don’t Have To",
    description: "Your web app should tell your story, serve your audience, and create connections. We build applications that are fast and have the best layout. Our web application development services put thought into every detail, so your app leaves an impression.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "ecommerce-implementation",
    tagline: "Build Smart. Scale Fast. Succeed",
    title: "We Make Tech That Works the Way You Want it To",
    description: "Ecommerce implementation or hiring developers: whatever you choose, we make sure you get nothing less than excellence. Bunnx don't just place developers but train, upskill, and mentor them.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "shopify-development-company-in-india",
    tagline: "Bring Your Vision to Life with Shopify Stores That Truly Reflect Your Brand.",
    title: "We Create Experiences That Feel Like Home to Your Customers.",
    description: "With every click, we ensure your Shopify store tells your story. From easy navigation to personalized features, we design and build stores that grow with your business. It’s not just about selling—it’s about building a space where customers feel valued.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "ecommerce-maintenance-and-support-services",
    tagline: "No wasted budget, no unnecessary commitments.",
    title: "Just Expert Help When You Need It!",
    description: "Not everything in eCommerce website maintenance services comes with a neatly packaged to-do list. It’s a broken checkout button costing you sales. The unexpected happens and that’s where we step in. Our team dives into the details, fine-tuning your store’s back-end, and fixing glitches before they become problems.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },




  {
    slug: "ecommerce-web-development",
    tagline: "Build an eCommerce App That Turns Heads!",
    title: "We Create a Lasting Impression.",
    description: "With a shopping flow, safe payments, and a layout that helps to explore, customers don’t just browse—they buy. Give them a reason to stay, return, and rave about your brand.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },
  {
    slug: "woocommerce-development-services-india",
    tagline: "Your Store, Built to Thrive!",
    title: "Get An Online Business That Stands The Test of Time.",
    description: "We build each aspect of your store with care, from designing the perfect storefront to ensuring every technical detail works together to support your business. This makes Bunnx a leading Woo Commerce development agency in India.",
    buttonText: "Contact Us Now",
    backgroundImage: "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg",
  },


  {
    "slug": "it-staff-augmentation-services-india",
    "tagline": "Grow Your Team with the Right Talent",
    "title": "Fill in the Gaps with the Right People",
    "description": "Our staff augmentation services let you add experts when you need them and help you execute projects without the wait. Whether you require specialized skills for a short-term assignment or long-term support, we provide professionals who integrate with your team.",
    "buttonText": "Contact Us Now",
    "backgroundImage": "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
  },
  {
    "slug": "hire-software-developer-india",
    "tagline": "We match you with top-tier developers!",
    "title": "Deliver Results Without Distractions",
    "description": "A great product starts with a great team. Finding the right developers can be overwhelming. That’s where we step in. We match you with top-tier developers who don’t just write code but work in your time zone.",
    "buttonText": "Contact Us Now",
    "backgroundImage": "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
  },
  {
    "slug": "it-outsourcing-services",
    "tagline": "Find the Right Talent, The Right Way.",
    "title": "Your In-House Tech Experts, Without the Overhead.",
    "description": "Need long-term support? Our IT outsourcing company will work exclusively on your project. We create a team that mixes with your workflow completely and makes progress day after day.",
    "buttonText": "Contact Us Now",
    "backgroundImage": "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
  },
  {
    "slug": "hire-dedicated-development-team-india",
    "tagline": "High-Functioning Software with Expert-Led Engineering",
    "title": "Your Development Team, Aligned with Your Vision",
    "description": "We provide skilled engineers, project leads, and QA specialists who work as an extension of your existing setup. Our team also analyzes response times, server loads, and does request handling.",
    "buttonText": "Contact Us Now",
    "backgroundImage": "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
  },
  {
    "slug": "offshore-dedicated-development-center-india",
    "tagline": "Your vision, engineered with precision.",
    "title": "Expand Your Capabilities with a High-Performance Offshore Development Center",
    "description": "We create a collaborative space where ideas turn into working systems. If it’s backend development or system architecture, our engineers bring expertise that drives measurable progress.",
    "buttonText": "Contact Us Now",
    "backgroundImage": "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
  },

  {
    "slug": "outsourcing-software-development-in-india",
    "tagline": "Outsource Smart. Scale Fast. Innovate Without Limits.",
    "title": "Empower Your Business with India’s Best Software Development Talent",
    "description": "Why struggle with hiring, infrastructure, and overhead costs? Get a world-class team of developers, designers, and engineers working exclusively on your projects—without the hassle. Let’s build something extraordinary, together.",
    "buttonText": "Get Your Free Consultation",
    "backgroundImage": "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
  },

  {
    "slug": "hire-dedicated-technical-team-india",
    "tagline": "Partner with Passion. Scale with Ease. Innovate Without Boundaries.",
    "title": "Want to Hire Dedicated Software Development Teams?",
    "description": "Imagine having a dedicated team of innovators working just for you—no hiring headaches, no overhead worries. From MVPs to enterprise solutions, we bring your vision to life with cutting-edge tech and proven expertise. Let’s create something amazing together!",
    "buttonText": "Start Your Journey with a Free Consultation",
    "backgroundImage": "https://images.pexels.com/photos/316681/pexels-photo-316681.jpeg"
}




];





const getCtaContent = (data, serviceDetailPageSlug) => {
  // First try to find content matching the page slug
  const contentBySlug = data.find(item => item?.slug === serviceDetailPageSlug);

  if (contentBySlug) {
    return contentBySlug;
  }

  // Fallback to default content if no match
  return data.find(item => item?.slug === "software-development-company-in-india") || data[0];
};

const GlassmorphismCta2 = ({ serviceDetailPageSlug }) => {
  // Find content for the provided slug
  const content = getCtaContent(data, serviceDetailPageSlug);
  // Handle case where slug doesn't match any data
  if (!content) {
    return <p>Content not found for the provided slug.</p>;
  }

  return (
    <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">
      <div
        style={{
          backgroundImage: `url('${content.backgroundImage}')`,
        }}
        className="rounded-md container mx-auto max-w-screen-xl px-4 md:px-10 py-10 bg-center bg-cover bg-no-repeat"
      >
        <div className="h-full w-full flex gap-8 items-center flex-wrap justify-between sm:px-10 px-4 py-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-50">
          <div className="text-white flex gap-3 flex-col lg:items-start items-center xl:w-[52%] w-full">
            <span className="italic">{content.tagline}</span>
            <h2 className="text-3xl font-semibold">{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <div className="xl:w-[40%] w-full flex justify-center items-center">
            <Link href="contact-us"
              className="px-6 mt-4 py-3 bg-white/30 backdrop-blur-md text-white font-semibold rounded-full shadow-md hover:bg-white/40 transition duration-300 border border-white/20"
            >
              {content.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default GlassmorphismCta2;

