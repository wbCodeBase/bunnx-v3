import React from 'react';
import Link from "next/link";

const data = [
  {
    slug: "front-end-development-services-india",
    tagline: "Shape the Future of Your Online Presence",
    title: "Elevate Your Brand with Expert Front-End Development!",
    description: "We excel in crafting intuitive, visually appealing websites and applications that ensure an outstanding user experience. Trust us to transform your creative concepts into a dynamic, user-friendly online interface.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "back-end-development-services-india",
    tagline: "We build systems that stay sharp under pressure.",
    title: "We make sure your tech keeps its promises!",
    description: "Get fluid back-end structures that act as the silent architect behind every interaction. Our agency converts everything into real-time experiences.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "custom-software-development-services",
    tagline: "We don’t Just Build Softwares; We Make Solutions",
    title: "Designed for Impact, Built for Results.",
    description: "We don’t just build software; we aim to simplify your customers' lives and enhance your business intelligence, driving smarter operations and growth. Our solutions are designed to streamline processes, increase efficiency, and boost customer satisfaction, ensuring your business thrives.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "crm-software-development-company-india",
    tagline: "We Make the Foundation of Your Customer Success Through CRM",
    title: "Grow Business by Mapping out Your Customer's Journey.",
    description: "Our experts design and implement CRM software solutions to serve as the central hub for all your customer interactions. At Bunnx, we also balance your app load and do auto-scaling configurations on cloud platforms to handle fluctuating user demands.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "software-development-company-in-india",
    tagline: "We build industry specific softwares with cost-effective solutions.",
    title: "Get benefit from our expert analysis for better software performance!",
    description: "Access a skilled team that works for your growth. Get people who know how to handle your software in both ups and downs. From fast fixes to system functionality, we focus on everything.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "software-consulting-services-india",
    tagline: "Make Successful Softwares With Our Experts",
    title: "Get Access to New Technologies and Talented Software Experts.",
    description: "Our IT software consulting services work to make your customer interactions better. At Bunnx, we also dig deep in the roots of your problems rather than giving surface-level advice.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "it-consulting-services-india",
    tagline: "We Help Lay the Foundation for your Business Success through IT Consulting.",
    title: "Fix Tech Challenges or Set Up Better Systems with Us!",
    description: "At Bunnx, we’ll work with you to find the right solutions—like setting up cloud platforms, automating workflows, or making sure your systems can handle busy times.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "mobile-app-development-company-india",
    tagline: "Get Mobile Apps with Best Back-End and Front-End",
    title: "Solutions That Increase Your Visitors On the App",
    description: "Behind every swipe and scroll is a back-end made to perfection. If it’s syncing data or live chats on your app, we can still scale it as your audience grows. With our mobile app development services, your app will thrive in the digital world.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "api-integration-and-development-services",
    tagline: "Behind Every Great App Is a Brilliant API.",
    title: "APIs Built to Connect, Scale, and Succeed! ",
    description: "We specialize in advanced custom API Development & Integration services to create efficient, scalable systems that drive seamless functionality. Our focus is on crafting back-end solutions that seamlessly integrate with front-end interfaces, enhancing performance and user experience.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "agile-consulting-services-india",
    tagline: "Let’s get you ahead of the game",
    title: "Streamline your workflow with the right approach",
    description: "Agile doesn’t need to be complicated—it’s about finding what works best for your team.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "application-development-company-india",
    tagline: "We build, you succeed.",
    title: "Smarter apps, simpler lives.",
    description: "Our team works with you every step of the way, so you get a product that adds real value to your business. With us, you get smart apps that stay ahead of time and help you build a strong foothold in the market.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "website-development-services-india",
    tagline: "Your website should do more than exist—it should work hard for your success. ",
    title: "And we make that happen!",
    description: "We specialize in the latest web technologies like React, Angular, Node.js, and Laravel. Our expertise enables us to develop websites with cutting-edge functionality, robust back-end systems, and modern user interfaces tailored to your needs.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "cms-development-services-india",
    tagline: "Build a CMS That Keeps Visitors Coming Back for More.",
    title: "Get our CMS solutions for Your Next Big Success Story.",
    description: "A CMS helps to manage content and expand your online presence effortlessly. At Bunnx, we get that. That’s why we create CMS solutions that don’t just organize content but transform how you connect with your audience.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "full-stack-development-services",
    tagline: "Design it, code it, launch it – we handle everything.",
    title: "All-in-one development, made just for you!",
    description: "We craft sophisticated yet seamless back-end systems that power every interaction effortlessly. So, get the best outcome and ensure there are no lapses in the process at all.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "ecommerce-development-company-india",
    tagline: "Molding the Symphony of Your Success: Great merchants need masterful mechanics!",
    title: "Turning your brand into the next big eCommerce story",
    description: "Our eCommerce development company doesn’t just keep your site running—it transforms your ideas into experiences. We build exactly what businesses and customers expect. It allows you to expand your reach and increase your ROI.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "ecommerce-consulting-services",
    tagline: "Tools that simplify your business",
    title: "Growth is easier when you have the right foundation",
    description: "Bunnx is the top eCommerce consulting services in India that help you set up the right systems to manage your orders, track customer behavior, and keep everything in sync.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "web-application-development-company-india",
    tagline: "Get Web Apps to Handle the Heavy Lifting",
    title: "Precision-Built Apps That Run Fast",
    description: "We build apps that don’t freeze when you need them most, drain your battery by mid-day, and crash when thousands of users log in at once. Our team works on animations, balances resource usage, and cuts unnecessary processing every time.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "ecommerce-implementation",
    tagline: "Built for Performance, Designed for Growth",
    title: "Faster Checkouts, Better Conversions",
    description: "A growing user base means increasing data loads. Every scroll, tap, and interaction is backed by a system designed for users. No lag and breakdowns, just an app that works as expected.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "shopify-development-company-in-india",
    tagline: "Transforming Shopify Stores into Unforgettable Shopping Experiences.",
    title: "Where Innovation Meets eCommerce Success with Shopify.",
    description: "Your Shopify store deserves to be more than just a platform—it should be the heart of your online business. We bring unmatched expertise to craft bespoke Shopify solutions. If you're building a brand-new Shopify store or scaling an existing one, our team is dedicated to providing specialized support.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "ecommerce-maintenance-and-support-services",
    tagline: "Built for Your Business, Backed by Expertise",
    title: "Examine Traffic Patterns With Us!",
    description: "Get a technical setup and a support plan that keeps everything running with our team. If you need constant monitoring, quick fixes, or full-scale upgrades, our approach is built around what works best for you.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "ecommerce-web-development",
    tagline: "Need lightning-speed searches?",
    title: "We analyze buying behaviors and build layouts.",
    description: "An eCommerce store shouldn’t just look good, it should sell. We make high-converting product pages and designs every element to keep customers from abandoning their carts.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },


  {
    slug: "woocommerce-development-services-india",
    tagline: "Crafting Stores That Sell & Scale",
    title: "Get a Store That Works as Hard as You Do",
    description: "We have WooCommerce development services that allows us to handle high traffic, sync inventory in real-time, and process payments. No more lost orders, abandoned carts, or checkout errors—just a shopping experience that keeps customers coming back.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
{
    slug: "it-staff-augmentation-services-india",
    tagline: "Get Expertise Without the Hiring",
    title: "Expand Your Team at the Speed of Business",
    description: "Workloads fluctuate, and hiring full-time employees for short-term projects isn’t always practical. With our staff augmentation services, you get the time to scale up when demand rises and down when things stabilize.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "hire-software-developer-india",
    tagline: "No more frustrating disconnects between your systems!",
    title: "Building Everything from Scratch with our Developers.",
    description: "Getting software up and running should be the easiest part. Our developers handle the entire setup, so you don’t have to stress over server choices or downtime. Also, they put backup systems in place to never lose important data.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "it-outsourcing-services",
    tagline: "Code That Works, Developers Who Deliver!",
    title: "A Team That Stays in the Loop.",
    description: "You don’t need to decode cryptic IT terms. We keep things simple, so you always know what’s happening. No sorting through applications, just the right people for the job. We don’t just build and disappear. We're here when you need us.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "hire-dedicated-development-team-india",
    tagline: "Engineering the Future of Your Software!",
    title: "Making systems that innovate technology",
    description: "We construct back-end foundations that operate with precision. Our functions run without disruption. We have a team at Bunnx that develops applications.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  {
    slug: "offshore-dedicated-development-center-india",
    tagline: "Building foundations that go beyond outsourcing!",
    title: "Our offshore development center is more than just a cost-saving move.",
    description: "We work with the same commitment and technical excellence as an in-house unit. From custom software solutions to large-scale system engineering, our developers bring structured problem-solving. With a development environment, we engineer solutions that shape industries.",
    buttonText: "Launch Your Project Now!",
    backgroundImage: "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg",
  },
  
  {
    "slug": "hire-dedicated-technical-team-india",
    "tagline": "Tech Talent Without Boundaries, Impact Without Limits!",
    "title": "Your Success Is Our Obsession",
    "description": "Imagine a team that breathes your vision, thinks like founders, and transforms complex challenges into breakthrough solutions. Our dedicated developers are more than experts – they're your strategic technology allies, committed to turning your most ambitious technological dreams into reality.",
    "buttonText": "Transform Your Vision Now!",
    "backgroundImage": "https://spirecapital.com/wp-content/uploads/2017/02/CTA-background-get-in-touch.jpg"
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

const GlassmorphismCta = ({ serviceDetailPageSlug }) => { 
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
          backgroundImage: `url('${content?.backgroundImage}')`,
        }}
        className="rounded-md container mx-auto max-w-screen-xl px-4 md:px-10 py-10 bg-center bg-cover bg-no-repeat"
      >
        <div className="h-full w-full flex gap-8 items-center flex-wrap justify-between sm:px-10 px-4 py-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-50">
          <div className="text-white flex gap-3 flex-col lg:items-start items-center xl:w-[50%] w-full">
            <span className="italic">{content.tagline}</span>
            <h2 className="text-3xl font-semibold">{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <div className="xl:w-[47%] w-full flex justify-center items-center">
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

export default GlassmorphismCta;



