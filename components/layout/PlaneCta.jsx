import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import { createLinkedContent } from '@/utils/LinkBuilder';

const PlaneCta = ({ serviceDetailPageSlug }) => {

    const CtaMain = [
        {
            span: "Solutions That Evolve as Your Business Grows!",
            head: "Frustrated with a lacklustre website design?",
            para: "Our expert Front-End Development team is here to help you captivate your visitors. Whether it’s sleek animations, navigation, or pixel-perfect design, we craft experiences that leave a lasting impact.",
            ctaText: "Let's Connect!",
            slug: "front-end-development-services-india"
        },
        {
            span: "Growth-Oriented Strategies That Adapt to Your Expanding Needs!",
            head: "Let us handle complex codes for your website while you scale your business!",
            para: "Are you fed up with unreliable servers and constant downtime? Say no more! Our back-end experts will design solid architectures to boost your database performance.",
            ctaText: "Let's Connect!",
            slug: "back-end-development-services-india"
        },
        {
            span: "Scale Your Success with Adaptive CRM Development!",
            head: "Get Expert Insights to Build Better CRM Solutions with Us!",
            para: "Transform your business operations with a CRM software solution that grows alongside your company. We build powerful systems that eliminate workflow bottlenecks and maximize team efficiency.",
            ctaText: "Let's Connect!",
            slug: "crm-software-development-company-india"
        },
        {
            span: "Scale Your Success with Adaptive CRM Development!",
            head: "Get all your details at one place with the best CRM solutions!",
            para: "Transform your business operations with a CRM software solution that grows alongside your company. We build powerful systems that eliminate workflow bottlenecks and maximize team efficiency.",
            ctaText: "Let's Connect!",
            slug: "software-consulting-services-india"
        },
        {
            span: "We create softwares that redefines your processes.",
            head: "Get connected with us and gain applications that connect and solve!",
            para: "It all starts with your unique idea. We dig deep to not just technically sound but also help you how real people will use it. Our custom software development delivers tools that truly integrate into your users’ lives. It’s not just about what the app does—it’s about how it makes them feel.",
            ctaText: "Let's Connect!",
            slug: "custom-software-development-services"
        },
        {
            span: "Smart Solutions That Evolve with Your Business!",
            head: "Let us handle complex codes for your website while you scale your business!",
            para: "Are you fed up with unreliable servers and constant downtime? Say no more! Our software development services experts will design solid architectures to boost your database performance.",
            ctaText: "Let's Connect!",
            slug: "software-development-company-in-india"
        },
        {
            span: "Get Results with Smart IT Solutions!",
            head: "Stay away from outdated systems with the best IT consulting firm!",
            para: "Use our IT consulting services India to tackle your challenges and simplify complex processes. Let’s turn technology into a tool that helps your business thrive every step of the way.",
            ctaText: "Let's Connect!",
            slug: "it-consulting-services-india"
        },
        {
            span: "Code That Scales, Apps That Shine!",
            head: "Struggling with apps that lag, crash, or fail?",
            para: "Say no more! With Bunnx, you can get the best-in-class solution for all your mobile app development needs. Be it a gaming app or an educational app, our experts are here to help you out in every way. So, let's make the next best app together!",
            ctaText: "Let's Connect!",
            slug: "mobile-app-development-company-india"
        },
        {
            span: "We Code the Connection and Power the Future.",
            head: "Frustrated with unreliable systems and frequent downtimes?",
            para: "Our API Development & Integration Services deliver robust architectures, optimize database performance, and streamline integration services for seamless functionality. So, with us you get the best service with outcomes that matter.",
            ctaText: "Let's Connect!",
            slug: "api-integration-and-development-services"
        },
        {
            span: "Let’s Create Something Your Customers Can’t Resist!",
            head: "Frustrated with unreliable systems and frequent downtimes?",
            para: "With our Agile consulting services, we’ll design workflows that evolve with your business. Stay ahead of the competition with processes that evolve as your business grows.",
            ctaText: "Let's Connect!",
            slug: "api-integration-and-development-services"
        },
        {
            span: "We build apps that are not just powerful but a joy to use.",
            head: "With us, get mobile apps that become a gateway to your business growth!",
            para: "Every app starts with a vision, and we’re here to turn that vision into an architecture. With our Agile consulting services, we design dynamic workflows that evolve with your business.",
            ctaText: "Let's Connect!",
            slug: "application-development-company-india"
        },
        {
            span: "We don’t just build websites!",
            head: "We create online experiences that your customers will love.",
            para: "Our team brings your ideas to life with websites that tell your story and engage your customers. From eye-catching visuals to effortless navigation, we create digital spaces that keep visitors coming back. Your vision drives our creativity, and we bring it to life with precision and passion.",
            ctaText: "Let's Connect!",
            slug: "website-development-services-india"
        },
        {
            span: "Get A Backend That Won’t Slow You Down",
            head: "Ever clicked on a website that took forever to load? ",
            para: "We build CMS platforms that keep everything moving like clockwork. With us you not only get the perfect CMS solution but also a team that is there to support and guide you. Enhance your business and streamline every process with the best in class CMS development services.",
            ctaText: "Let's Connect!",
            slug: "cms-development-services-india"
        },
        {
            span: "Your tech partner for every step of the journey!",
            head: "Frustrated with laggy applications and inconsistent performance?",
            para: "From reducing load times to enhancing data flow, we focus on making a solid and integrated architecture. Connect with the full-stack experts and get your working strengthened in minutes.",
            ctaText: "Let's Connect!",
            slug: "full-stack-development-services"
        },
        {
            span: "Turning browsers into buyers, one click at a time.",
            head: "You build your eCommerce business, while we build your eCommerce store!",
            para: "Struggling with slow-loading pages and checkout failures? Say no more! We have got you covered with the best solutions to ensure that your eCommerce business is not impacted at all.",
            ctaText: "Let's Connect!",
            slug: "ecommerce-development-company-india"
        },
        {
            span: "Let us Build an eCommerce Experience Customers will Love",
            head: "Your website is your storefront in the digital world—make it unforgettable.",
            para: "From custom storefronts to order management, we’ll build a platform that’s as bold as your brand. With our experts, get the best w-commerce web consulting and ensure that your website stands out!",
            ctaText: "Let's Connect!",
            slug: "ecommerce-consulting-services"
        },
        {
            span: "Web Apps That Work, Results That Matter!",
            head: "We Build Fast and Responsive Web Apps.",
            para: "If you're launching a high-traffic platform or a data-driven dashboard, we make sure your app does its job—and does it well. Ready to ditch the bugs and build something real?",
            ctaText: "Let's Connect!",
            slug: "web-application-development-company-india"
        },

        {
            slug: "ecommerce-implementation",
            span: "From Concept to Checkout – We Make It Happen!",
            head: "eCommerce implementation That Works Without the Extra Work.",
            para: "The right setup connects the front and back end, so each click moves the customer closer to checkout, while updates and operations stay streamlined.",
            ctaText: "Let's Connect!",
        },
        {
            slug: "shopify-development-company-in-india",
            span: "We don’t just build Shopify stores.",
            head: "We craft Shopify experiences your customers will keep coming back to!",
            para: "Our team transforms your ideas into high-performing Shopify stores. With us, you not only ensure that your shopify store is perfect but also loaded with the best features to help your business grow.",
            ctaText: "Let's Connect!",
        },
        {
            slug: "ecommerce-maintenance-and-support-services",
            span: "Keeping your online store open 24/7!",
            head: "Frustrated with site crashes or slow-loading product pages?",
            para: "Our eCommerce maintenance and support team fine-tunes server performance, streamlines database processes, and integrates essential APIs to keep your store running. With a hands-on team keeping every detail in check, your store stays strong, secure, and ready for growth.",
            ctaText: "Let's Connect!",
        },

        {
            slug: "ecommerce-web-development",
            span: "We deliver the Best Shopping Experience for your Customers!",
            head: "Engineered for Speed and Built for Growth.",
            para: "An eCommerce platform should list products, drive sales, and improve customer retention. At Bunnx, we develop solutions that support these along with inventory tracking and checkout flows. If you're launching a marketplace or a subscription service, our eCommerce web development team designs every component for fast execution.",
            ctaText: "Let's Connect!",
        },

        {
            slug: "woocommerce-development-services-india",
            span: "WooCommerce Development That Works without Frustration!",
            head: "Tired of abandoned carts and checkout pages?",
            para: "We will make your WooCommerce store so that shoppers can browse, add to cart, and checkout without an issue. With us not just grow your business but make sure that you stand out as the best in the industry.",
            ctaText: "Let's Connect!",
        },
        {
            "span": "Strengthen your Site's Format with our Team!",
            "head": "Frustrated by pages that crash in mid-checkout? Let’s fix that.",
            "para": "Our tech developers will connect the tech dots and change engines to give the best outcome. We provide staff augmentation services that will allow you to grow your revenue. It will help you to scale resources while maintaining project timelines and quality.",
            "ctaText": "Let's Connect!",
            "slug": "it-staff-augmentation-services-india"
        },
        {
            "span": "Build with the Best, Scale Without Limits",
            "head": "Finding the right talent, though?",
            "para": "That’s where things get tricky. That’s why businesses turn to us. We connect you with software engineers who build web apps, mobile platforms, AI-powered systems, or complex enterprise solutions.",
            "ctaText": "Let's Connect!",
            "slug": "hire-software-developer-india"
        },
        {
            "span": "Let Experts Handle the Tech, You Lead Your Business",
            "head": "Instead of stretching your in-house team too thin or hiring an expensive IT department, you get a team of experts who handle everything for you.",
            "para": "We provide IT support that’s actually helpful, fixing problems quickly so you don’t lose valuable time.",
            "ctaText": "Let's Connect!",
            "slug": "it-outsourcing-services"
        },
        {
            "span": "Deep Technical Expertise to Keep your Projects on Track",
            "head": "Get Highest ROI with our Dedicated Development Team",
            "para": "We write maintainable code, implement backend architectures, and use automation to speed up testing and deployment. If it’s API development, microservices implementation, or front-end engineering, hire dedicated PHP developers to build systems that work the best.",
            "ctaText": "Let's Connect!",
            "slug": "hire-dedicated-development-team-india"
        },
        {
            "span": "Bunnx - Your full-fledged development team",
            "head": "Grow with our Offshore Dedicated Centre",
            "para": "Why get tangled in recruitment, training, and retention when you can have an expert team ready to dive into your projects? Our offshore development center isn’t just about outsourcing—it’s about having a dedicated extension of your in-house team.",
            "ctaText": "Let's Connect!",
            "slug": "offshore-dedicated-development-center-india"
        },
        {
            "span": "Outsource Smart, Scale Faster, Innovate Better",
            "head": "Your Vision, Our Code – Build Exceptional Software with India’s Best Talent",
            "para": "Skip the hiring struggles and development delays. Our expert teams integrate seamlessly into your workflow, delivering high-quality software at speed and scale. Whether you need full-cycle development or specialized expertise, we’ve got you covered. Let’s turn your ideas into reality with cutting-edge technology and world-class engineering.",
            "ctaText": "Start Your Project Today!",
            "slug": "outsourcing-software-development-in-india"
        },
        {
            "span": "Tech Talent Without Limits, Impact Without Boundaries",
            "head": "Your Vision, Our Expertise, Zero Compromises",
            "para": "Forget the recruitment maze and talent wars. We've curated a dream team of tech experts who seamlessly integrate into your workflow, turning your boldest ideas into reality. It's not outsourcing – it's a technological partnership that transforms businesses.",
            "ctaText": "Let's Connect!",
            "slug": "hire-dedicated-technical-team-india"
        }


    ]







    const ctaMainObj = CtaMain?.find((ctaMain) => ctaMain?.slug === serviceDetailPageSlug) || {
        span: `Where Your Goals Become Our Mission`,
        head: `Elevate Your Business with Cutting-Edge Web Solutions!`,
        para: `Are you ready to elevate your business? At Bunnx, we turn your vision into reality. From eye-catching designs to smooth deployments, our team is dedicated to crafting solutions that help you thrive.`,
        ctaText: "Let's Connect!",
    };


    const keywordToSlug = {
        'software development services': 'software-development-company-in-india',
        'IT consulting services India': 'it-consulting-services-india',
        'API Development & Integration Services': 'api-integration-and-development-services',
    }


    return (
        <>

            <section className='sm:py-12 py-2'>
                <div className="bg-[#00214E] px-4 md:px-6">

                    <div className="container mx-auto max-w-screen-xl flex gap-8 items-center flex-wrap sm:justify-between justify-center sm:px-10 px-4 py-10 bg-purple900 bg-[#00214E] rounded-md borde border-gray-50">

                        {ctaMainObj && <div className='text-white flex gap-4 flex-col lg:items-start items-center xl:w-[58%] w-full'>
                            <span>{ctaMainObj.span}</span>
                            <h2 className='text-3xl font-semibold'>{ctaMainObj.head}</h2>
                            <p>{createLinkedContent(ctaMainObj.para, keywordToSlug, serviceDetailPageSlug)}</p>
                        </div>
                        }


                        <div className='flex justify-center items-center'>

                            <Link href="contact-us" className='flex items-center justify-center gap-2 bg[#261E80] p-1 pr-3 font-medium text-md bg-orange-500 rounded-full mt-4 text-white'> <span className='bg-white rounded-full p-3 text-xl text-black animate-bounce'> <FaPhoneAlt /> </span> <span> {ctaMainObj.ctaText} </span></Link>

                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default PlaneCta;













