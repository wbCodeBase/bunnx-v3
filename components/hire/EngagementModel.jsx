import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

// Dummy data for engagement options
const engagement = [
    {
        head: "Monthly Based",
        lists: [
            "Hire offshore staff for up to 160 hours a month",
            "Manage the team using your own methodologies",
            "Get timely updates on work progress",
            "Monthly billing cycles",
        ],
    },
    {
        head: "Hourly Based",
        lists: [
            "Pay for the work done in hours",
            "Add or revoke hours based on requirements",
            "Communicate via your own preferred channels",
            "Real-time updates via timesheet",
        ],
    },
    {
        head: "Fixed-Cost Projects",
        lists: [
            "Fix the project cost before getting started",
            "Pre-defined scope and deliverables established prior to commencement",
            "Flexibility to change scope at nominal charges",
            "Establishment of a fixed timeline for project completion",
        ],
    },
];

// Dummy data for different services
const engageMentModelData = [
    {
        slug: "front-end-development-services-india",
        h2: "Choose From Our Hiring Models",
        h4: "Hire The Best Front End Developer with the Best Engagement Models",
        p: "We analyze your project’s requirements to recommend the ideal collaboration model. Our three models are designed to ensure every brand acquires the services that match its needs and budget.",
        engagement: engagement,
    },
    {
        slug: "back-end-development-services-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Back-End Developers Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right back-end development solution for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "software-consulting-services-india",
        h2: "Choose From Hiring Models",
        h4: "Collaborate with Top Software Developer Through Engagement Models",
        p: "At our software consultancy company, our team helps businesses grow by building strong customer relationships. We make solutions that are simple yet powerful, using trusted platforms like Salesforce and Microsoft Dynamics to deliver results that matter. Our IT software consulting services cover everything from smart contact management and automating your sales pipeline to giving you detailed reports that track customer interactions effectively.",
        engagement: engagement,
    },
    {
        slug: "crm-software-development-company-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top CRM Software Developer Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right back-end development solution for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "custom-software-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top App Developers Through Engagement Models",
        p: "We offer custom software development with flexible models tailored for any project, maximizing resources, meeting timelines, and achieving your goals.",
        engagement: engagement,
    },
    {
        slug: "software-development-company-in-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Software Developer Through Engagement Models",
        p: "Our team will recommend the most appropriate engagement model for your project, taking into account its complexity, vision, and overall product concept.",
        engagement: engagement,
    },
    {
        slug: "it-consulting-services-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top CRM Software Developers Through Engagement Models",
        p: "Our engagement models are based on the size of the project and timeline. After you've chosen a plan that works for you, we'll help with a single project or provide ongoing support. Our team believes that the client should be on the same page with us to make a real difference.",
        engagement: engagement,
    },
    {
        slug: "mobile-app-development-company-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Mobile App Developers Through Engagement Models",
        p: "We understand that your mobile app development will require a different approach. That’s why we offer various engagement models. If you need a team to take full ownership of your mobile app development or a project-based approach for short-term goals, our services are for all types of your workflow. With us, you’ll get a partnership that’s as precise as your app demands.",
        engagement: engagement,
    },
    {
        slug: "api-integration-and-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top API Developers Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right API Development & Integration Solution for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "agile-consulting-services-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Agile Consultants Through Engagement Models",
        p: "Agile is all about change, and so are we. Whether you're fine-tuning an existing process or building a brand-new approach, we offer flexible collaboration models to suit your project’s needs.",
        engagement: engagement,
    },
    {
        slug: "application-development-company-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top App Developers Through Engagement Models",
        p: "Our engagement models are built by our experts for ongoing support. We use a project-based approach for specific tasks or a time-and-materials model. Each model is designed to get the best from your resources, match your timeline, and deliver exactly what your project requires.",
        engagement: engagement,
    },
    {
        slug: "website-development-services-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Website Developers Through Engagement Models",
        p: "Choosing the right team structure is crucial when building or upgrading your website. Some projects need ongoing collaboration, while others require extra hands or short-term expertise. Our engagement models are built to match your specific needs, offering flexibility and technical expertise at every step of the development process.",
        engagement: engagement,
    },
    {
        slug: "cms-development-services-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top CMS Developers Through Engagement Models",
        p: "Some CMS projects need dedicated developers from start to finish. Others require specialized expertise at critical stages. And sometimes, all it takes is the right team to execute a well-planned strategy. Whatever your case, we let you decide how you want to work with us.",
        engagement: engagement,
    },
    {
        slug: "full-stack-development-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Full Stack Developers Through Engagement Models",
        p: "Our models focus on one thing: delivering the perfect back-end solution for your brand. By understanding your project’s aim, goals, and deadlines, we craft a personalized collaboration plan that fits your needs.",
        engagement: engagement,
    },
    {
        slug: "ecommerce-development-company-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top eCommerce Developers Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right ecommerce development India solution for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "ecommerce-consulting-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top CRM Software Developers Through Engagement Models",
        p: "Creating a successful ecommerce platform is more than just setting up an online store. It's about building a system that can grow with your business and offer a seamless experience to your customers. If you’re just starting or already established, we have the right mix of expertise and flexibility.",
        engagement: engagement,
    },
    {
        slug: "web-application-development-company-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Web App Developers Through Engagement Models",
        p: "Web application development is not an easy process and neither is hiring. If you're looking for a team to jump in for a specific phase, we have models for you. You can get long-term commitments and project-based collaborations with this to get your work within deadlines. No unnecessary processes, no rigid contracts—just the right talent at the right time.",
        engagement: engagement,
    },
    {
        slug: "ecommerce-implementation",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top eCommerce Implementation through Engagement Models",
        p: "Not all ecommerce projects are the same, and neither should be the way you build them. If you're launching a new online store or upgrading an existing one, have the right team in place. It will make all the difference if you will add advanced features. We also offer different engagement models to bring in the right expertise.",
        engagement: engagement,
    },
    {
        slug: "shopify-development-company-in-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Shopify Developers through Engagement Models",
        p: "Our engagement models are crafted to match your unique project requirements and ensure the best Shopify development solutions for your business. We carefully assess your project scope, objectives, and deadlines to recommend a collaboration model.",
        engagement: engagement,
    },
    {
        slug: "ecommerce-maintenance-and-support-services",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top eCommerce website maintenance services Developers Through Engagement Models",
        p: "Every online store has its quirks. Maybe your site needs a quick tune-up, a dedicated team to keep things running, or extra hands during peak seasons. Whatever the case, we’ve got you covered with different engagement models that bring in the right kind of expertise at the right time.",
        engagement: engagement,
    },
    {
        slug: "woocommerce-development-services-india",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top Woo Commerce Development Company Through Engagement Models",
        p: "Our engagement models are designed with one goal in mind: to deliver the right Woo Commerce development agency for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        engagement: engagement,
    },
    {
        slug: "ecommerce-web-development",
        h2: "Choose From Our Hiring Models",
        h4: "Collaborate with Top eCommerce Developers Through Engagement Models",
        p: "Need a full-fledged team to take charge from start to finish? We’ll test and launch your app with precision. Working on a short-term project and need experts to step in? We can jump in at any phase—design, backend, or final tweaks. No unnecessary processes, no wasted time, just an eCommerce web development approach that works the way you do.",
        engagement: engagement,
    },



    {
        "slug": "it-staff-augmentation-services-india",
        "h2": "Choose From Our Hiring Models",
        "h4": "Collaborate with Top Staff Augmentation Experts Through Engagement Models",
        "p": "Our engagement models are designed with one goal in mind: to deliver the right staff augmentation services for your brand. We analyze your project’s scope, goals, and timeline to propose a customized collaboration plan.",
        "engagement": engagement
    },
    {
        "slug": "hire-software-developer-india",
        "h2": "Choose From Our Hiring Models",
        "h4": "Collaborate with Top Software Developers Through Engagement Models",
        "p": "Every software project has challenges that come with it. For businesses who want to develop a new application and fix existing code, the right developers on board can make it happen. Our engagement models allow you to bring in top-tier developers without unnecessary or long-term commitments.",
        "engagement": engagement
    },
    {
        "slug": "it-outsourcing-services",
        "h2": "Choose From Our Hiring Models",
        "h4": "Collaborate with Top IT Outsourcing Through Engagement Models",
        "p": "Finding the right developers isn’t just about filling a position. And you might not want a team that just ticks boxes. Instead, you will need people who understand what you're trying to create and have the skills to make it happen. That’s where Bunnx steps in. We bring in the right expert for the job.",
        "engagement": engagement
    },
    {
        "slug": "hire-dedicated-development-team-india",
        "h2": "Choose From Our Hiring Models",
        "h4": "Collaborate with Top Ecommerce Website Developers Through Engagement Models",
        "p": "Building a strong tech foundation requires the right people, not just the right code. Our development team services are designed to bring in expertise that aligns with your project’s scope and keeps your software evolving without delays or compromises.",
        "engagement": engagement
    },
    {
        "slug": "offshore-dedicated-development-center-india",
        "h2": "Choose From Our Hiring Models",
        "h4": "Collaborate with Top Offshore Dedicated Centre Through Engagement Models",
        "p": "Our offshore development model is designed for businesses looking to make a strong development presence without the burden of setting up an in-house facility. With a team of experts working on your projects, you gain a highly skilled workforce that operates within your workflows and development cycles. So, check our hiring models.",
        "engagement": engagement
    },
    {
        "slug": "outsourcing-software-development-in-india",
        "h2": "Choose From Our Hiring Models",
        "h4": "Flexible Engagement Models for Your Software Development Needs",
        "p": "Every project is unique, and so is our approach to hiring. Whether you need a dedicated team, project-based outsourcing, or a hybrid model, we offer tailored solutions to match your goals. Gain access to top-tier developers, reduce hiring complexities, and accelerate your development process. Explore our hiring models and find the perfect fit for your business.",
        "engagement": engagement
    },


    {
        "slug": "hire-dedicated-technical-team-india",
        "h2": "Choose From Our Hiring Models",
        "h4": "Tailored Solutions for Your Software Journey",
        "p": "We help you tell your project's story with precision. Our flexible models—dedicated teams, project-based, or hybrid—ensure a perfect fit for your vision. Unlock top talent, simplify hiring, and accelerate development.",
        "engagement": engagement
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

export default function EngagementModel({ serviceDetailPageSlug }) {
    // Find the data matching the slug
    const content = getCtaContent(engageMentModelData, serviceDetailPageSlug);

    // Handle case where no content matches the slug
    if (!content) {
        return <p>Content not found for the provided slug.</p>;
    }

    return (
        <>
            <section className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10">
                <h4 className="font-semibold text-orange-500 text-lg">
                    {content.h2}
                </h4>
                <h2 className="font-semibold text-3xl my-2">{content.h4}</h2>
                <p className="text-md text-gray-800">{content.p}</p>

                <div className="flex justify-center flex-wrap gap-5 mt-12">
                    {content.engagement &&
                        content.engagement.map((engageItems, i) => (
                            <div
                                key={i}
                                className="origin-bottom hover:scale-y-105 transform transition-all duration-300 ease-in-out border rounded-2xl group hover:text-white hover:shadow-lg bg-yellow-50 hover:bg-[#00214E] p-6 justify-between flex flex-col w-96 relative"
                            >
                                <div>
                                    <h3 className="font-semibold text-gray-800 group-hover:text-white mb-3 text-3xl">
                                        {engageItems.head}
                                    </h3>

                                    <ul className="text-sm space-y-4 my-6">
                                        {engageItems.lists &&
                                            engageItems.lists.map((listItems, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                                                    {listItems}
                                                </li>
                                            ))}
                                    </ul>
                                </div>

                                <Link
                                    className="text-lg bg-amber-500 group-hover:bg-white group-hover:text-black rounded-lg mt-4 text-white text-center p-2"
                                    href="/contact-us">
                                    Hire Us
                                </Link>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
}
