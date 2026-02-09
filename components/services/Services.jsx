import React from 'react'
import Link from 'next/link';
import { IoArrowForward } from "react-icons/io5";
import { createLinkedContent } from '@/utils/LinkBuilder';


const defaultServices = [
  {
    title: "Front-End Development",
    description:
      "Take the user level to the next level and develop a flawless website with the top front end development company.",
    "ctaRedirectUrl": "front-end-development-services-india",
  },
  {
    title: "Back-End Development",
    description:
      "Redesign the future of your web presence with a flawlessly tuned website, crafted by the wizards of the best back end development.",
    "ctaRedirectUrl": "back-end-development-services-india",
  },
  {
    title: "Full Stack Development",
    description:
      "Full Stack Development involves building and managing both front-end and back-end of web applications, ensuring seamless functionality.",
    ctaRedirectUrl: "full-stack-development-services",
  },
  {
    title: "Software Development",
    description: "Custom Software Development Services and Solutions to build top-tier intelligent enterprises with speed and agility.",
    ctaRedirectUrl: "software-development-company-in-india",
  },
];


const keywordToSlug = {
  'top front end development service provider': 'front-end-development-services-india',
  'front end development services': 'front-end-development-services-india',
  'front end development company': 'front-end-development-services-india',
  'software development company in India': 'software-development-company-in-india',
  'custom application development company': 'software-development-company-in-india',
  'best software development companies': 'software-development-company-in-india',
  'CRM software development companies': 'crm-software-development-company-india',
  'CRM development services': 'crm-software-development-company-india',
  'CRM software development company': 'crm-software-development-company-india',
  'CRM development services': 'crm-software-development-company-india',
  'custom software development company': 'custom-software-development-services',
  'best IT consulting services in India': 'it-consulting-services-india',
  'mobile app development company': 'mobile-app-development-company-india',
  'API Development & Integration company': 'api-integration-and-development-services',
  'custom API Development & Integration services': 'api-integration-and-development-services',
  'Agile consultant services': 'agile-consulting-services-india',
  'website development services': 'website-development-services-india',
  'website development company': 'website-development-services-india',
  'web development company': 'web-application-development-company-india',
};



const services = [
  {
    "title": "Custom front end Development",
    "description": "Every business is unique, and so are its needs. We create custom front end designs and applications using tools like React, Angular, or Vue.js, ensuring they’re tailored to meet your goals while being user-friendly and efficient.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "UI/UX Design and Development",
    "description": "We create intuitive, engaging, and user-friendly designs that align with your brand’s vision. Our focus is on delivering exceptional user experiences that drive engagement and conversions.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "Single-Page Applications (SPAs)",
    "description": "We build SPAs for smoother, faster navigation. They load just once and update dynamically as users interact with them, creating a more engaging experience.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "HTML5/CSS Development",
    "description": "Using the latest HTML5 and CSS3 standards, we build responsive and accessible web pages optimized for performance across all devices and browsers.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "Web App Interface Development",
    "description": "We specialize in developing scalable and interactive interfaces for your web applications. Our team works in a way that only allows you to get a functional website.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "Legacy Frontend Modernization",
    "description": "As a front end development company, we help modernize outdated front-end systems, incorporating the latest technologies and design practices to give your web applications a fresh and contemporary look.\n",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "Progressive Web Apps (PWAs)",
    "description": "Want the feel of an app without actually building one? We create PWAs—websites that behave like apps, with offline functionality and faster load times.\n",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "ReactJS Development",
    "description": "With its component-based architecture, virtual DOM, and declarative syntax, ReactJS is optimized for building complex and dynamic user interfaces with state management.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "Node.js Development",
    "description": "Our team implements event-driven, non-blocking I/O operations with Node.js to develop scalable, real-time backend architectures. Our solutions are optimized for low-latency environments for microservices and RESTful APIs.\n",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "back-end-development-services-india"
    ],
  },
  {
    "title": "CMS Theming Services",
    "description": "We develop and integrate custom themes for Content Management Systems (CMS) using modular, reusable components. Our theming services focus on semantic HTML and optimized CSS.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "front-end-development-services-india"
    ],
  },
  {
    "title": "Custom Software Development",
    "description": "We are committed to deliver custom software solutions that perfectly align with your complex technical needs. You Share your requirements, and we'll create a custom application that evolves with your business and user demands. ",
    "ctaRedirectUrl": "custom-software-development-services",
    "fetchOnSlug": [
      "software-development-company-in-india",
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Software Outsourcing Services",
    "description": "Our software outsourcing services reduce costs, accelerate timelines, and connect you with top-tier talent to give you a competitive edge. At Bunnx, we have domain experts; our team delivers tailored, efficient solutions that meet your business needs.",
    "ctaRedirectUrl": "it-outsourcing-services",
    "fetchOnSlug": [
      "software-development-company-in-india"
    ],
  },
  {
    "title": "QA & Testing",
    "description": "Our certified experts perform thorough testing to detect and resolve any errors or bugs that could affect your software’s performance. Guarantee the quality, reliability, and performance of your software applications with our QA Experts and testing services.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-development-company-in-india",
      "website-development-services-india"
    ],
  },
  {
    "title": "Ecommerce Development",
    "description": "As one of the best software development companies in India, we offer comprehensive e-commerce solutions, including secure payment gateways and streamlined shopping experiences, ensuring convenience for your customers.\n",
    "ctaRedirectUrl": "ecommerce-development-company-india",
    "fetchOnSlug": [
      "software-development-company-in-india",
      "full-stack-development-services"
    ],
  },
  {
    "title": "Web App Development",
    "description": "Our team builds responsive, scalable, and efficient web applications tailored to your business needs. We focus on creating seamless user experiences, ensuring high performance, security, and easy navigation.",
    "ctaRedirectUrl": "web-application-development-company-india",
    "fetchOnSlug": [
      "software-development-company-in-india"
    ],
  },
  {
    "title": "Mobile App Development",
    "description": "Our skilled mobile app developers combine deep IT knowledge with extensive hands-on experience across diverse projects. They analyze your business ecosystem to fully understand your needs and goals, delivering tailored solutions that best fit your requirements.",
    "ctaRedirectUrl": "mobile-app-development-company-india",
    "fetchOnSlug": [
      "software-development-company-in-india",
      "custom-software-development-services"
    ],
  },
  {
    "title": "Cloud Application Development",
    "description": "Leverage our expertise to build secure, scalable cloud applications tailored to your needs. We assess your requirements, develop a risk-mitigation strategy, ensure smooth integration, and optimize performance for maximum efficiency.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-development-company-in-india"
    ],
  },
  {
    "title": "Support and Maintenance",
    "description": "At our software development company in India, we prioritise application maintenance just as much as development. We recognize that even the most innovative solutions are only valuable when supported by a stable, well-maintained ecosystem free from bugs and glitches. ",
    
    "fetchOnSlug": [
      "software-development-company-in-india"
    ],
  },
  // {
  //   "title": "DevOps & CI/CD Pipelines",
  //   "description": "Adopt DevOps to optimize software development and operations. With our expertise in collaboration, automation, continuous integration, and delivery pipelines, we empower your business to achieve greater efficiency, quality, and agility.\n",
  //   "ctaRedirectUrl": "devops-and-ci-cd-pipelines",
  //   "fetchOnSlug": [
  //     "software-development-company-in-india"
  //   ],
  // },
  {
    "title": "Implementation & Migration",
    "description": "Our CRM implementation services will make better sales, marketing, and customer support tasks. We also identify current challenges in your CRM system and make migrations to strategies that really work. If you are building a new CRM system or transferring historical data, we handle it all through our experts",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "crm-software-development-company-india"
    ],
  },
  {
    "title": "Support and Evolution",
    "description": "As a custom CRM software development company, we believe in supporting you at each step so that you get the best systems. Our approach is based on data management, system monitoring, troubleshooting, and regular updates. ",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "crm-software-development-company-india"
    ],
  },
  {
    "title": "Custom CRM Development",
    "description": "We have a CRM team that takes care of every step to build specifically what is required. We have a big team that analyzes your business through a fully tested solution. This allows businesses to better manage customer relationships, sales, and marketing processes.\n",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "crm-software-development-company-india",
      "full-stack-development-services"
    ],
  },
  {
    "title": "Campaign Management",
    "description": "With our CRM development services, we help you design, run, and track marketing campaigns. From creating target lists and sending emails to analyzing results, we include everything in our campaigns.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "crm-software-development-company-india"
    ],
  },
  {
    "title": "Software Consulting",
    "description": "Sometimes, finding the right software feels comes with a lot of challenges. That’s where the Bunnx team comes in. Our custom software development company understands your business inside out.",
    "ctaRedirectUrl": "software-consulting-services-india",
    "fetchOnSlug": [
      "custom-software-development-services"
    ],
  },
  {
    "title": "SaaS Development ",
    "description": "If you need a SaaS application that doesn’t just work but works with results, we’ve got you covered. Every line of code we write is designed for delivering what your business needs today—and tomorrow",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "custom-software-development-services"
    ],
  },
  {
    "title": "Desktop App Development ",
    "description": "When you need software that packs a punch, desktop softwares are the answer. If you’re running detailed financial simulations, our experts build applications for Windows, Mac, and Linux",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "custom-software-development-services"
    ],
  },
  {
    "title": "Web App Development",
    "description": "Our custom software development company has a plan for custom-built e-commerce platforms and workflow management tools to create web softwares that are designed for scale.",
    "ctaRedirectUrl": "web-application-development-company-india",
    "fetchOnSlug": [
      "custom-software-development-services"
    ],
  },
  {
    "title": "API & Software Integration ",
    "description": "For people connecting their e-commerce site to your inventory system and automating workflows across tools, you can get from our team. The result? Fewer manual tasks and one less headache for your team.\n",
    "ctaRedirectUrl": "api-integration-and-development-services",
    "fetchOnSlug": [
      "custom-software-development-services"
    ],
  },
  {
    "title": "Software Modernization",
    "description": "We’ll keep the features you love, enhance the ones you don’t, and give your system a new lease on life—with minimal disruption to your day-to-day life.",
    "fetchOnSlug": [
      "custom-software-development-services",
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Software Stack Assessment",
    "description": "We dig deep into your existing software setup to see what’s working and what’s not. From outdated systems to inefficiencies slowing you down, we pinpoint the issues and plan smarter solutions—whether that’s modernization, refactoring, or a full migration to better technologies.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Architecture Review and Redesign",
    "description": "A robust software architecture is the backbone of high performance, security, and scalability. Our team evaluates your current setup, makes improvements for faster deployments, greater resilience, and cost-effective maintenance, and ensures your software can keep up as your business grows.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Software Selection Made Simple",
    "description": "Choosing the right software can feel overwhelming. We cut through the noise by comparing vendors, pricing plans, and features tailored to your needs. Then, we present a summary that makes decision-making painless and straightforward.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Regulatory Compliance Consulting",
    "description": "Stay ahead of industry laws and regulations with our compliance checks. We’ll assess your software, highlight necessary licenses, and make sure everything’s legally airtight.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Team Augmentation",
    "description": "Need extra hands on deck? We provide skilled developers, testers, and project managers to integrate with your team and fill any gaps in expertise. It is all included in our software consulting services.",
    "ctaRedirectUrl": "it-staff-augmentation-services-india",
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  // {
  //   "title": "Streamlined DevOps Processes",
  //   "description": "We set up efficient DevOps pipelines that simplify and speed up your software delivery. From CI/CD implementation to optimizing workflows, we ensure your development process is lean and productive.",
  //   "ctaRedirectUrl": "devops-and-ci-cd-pipelines",
  //   "fetchOnSlug": [
  //     "software-consulting-services-india"
  //   ],
  // },
  {
    "title": "QA and Testing Setup",
    "description": "Say goodbye to bugs slowing down your progress. We establish automated testing processes to save time and improve reliability. Need expert testers? Our team augmentation model has you covered. ",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Business Process Overhaul",
    "description": "Sometimes, the solution lies in streamlining how your business operates. We analyze your workflows, find inefficiencies, and design software-based fixes—whether it’s automation, better collaboration tools, or faster reporting systems.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Using the Development Lifecycle (SDLC)",
    "description": "We evaluate your development practices, suggest tools and methodologies to speed things up, and keep your projects on track. From Agile adoption to setting up clear project controls, we guide your team toward better efficiency and quality.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  {
    "title": "Building Your Next Big Software Product",
    "description": "Got a product idea? We help bring it to life. From analyzing the market and crafting your unique selling point to designing a user-friendly interface and planning a scalable architecture, we turn concepts into software that stands out.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "software-consulting-services-india"
    ],
  },
  {
    "title": "IT Strategy Consulting",
    "description": "Your technology should do more than just work. We mean by this is that it should lead. And hence, our team makes IT strategies to maximize the value of your tech investments. From evaluating governance to planning initiatives, we make sure your IT becomes the backbone of progress.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "IT Operations Consulting",
    "description": "Smooth out operational wrinkles with services designed to fix errors and boost productivity. We troubleshoot them, evaluate tools, and develop strategies to make better IT operations.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "Digital Transformation",
    "description": "Reimagine the way you work with digital solutions for innovations. We provide the best IT consulting services in India to modernize outdated software, develop cutting-edge systems, and guide your journey into the digital age. It will soon become a natural part of your growth.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "Custom Application Development",
    "description": "We have design applications that solve your unique challenges, from streamlining operations to providing productivity-enhancing tools. So, if you're a startup or a growing enterprise, you can get our applications that keep your customers coming back.",
    "ctaRedirectUrl": "custom-software-development-services",
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "Software Product Engineering",
    "description": "From concept to launch, we’re with you every step of the way. Our team integrates systems, optimizes performance, and ensures your software adapts to your growing needs—because your applications should evolve as fast as you do.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "Business Process Consulting",
    "description": "Complex workflows holding you back? We find data to understand your business processes, identify inefficiencies and opportunities for improvement. With actionable insights and a structured plan, we rate the maturity of your applications and systems.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "Cloud Services",
    "description": "Take your systems to the cloud without breaking a sweat. We simplify cloud migration, maintain control, and provide cost-friendly services. It makes your infrastructure scale while staying resilient with cloud solutions.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "Security Consulting",
    "description": "Protect your wireless networks before it’s too late. Our security experts identify vulnerabilities, improve your existing security framework, and build strategies for future security planning. Your data’s safety is our priority.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "IT Service Management",
    "description": "Keep your operations running like clockwork with the best IT consulting services in India built for performance. From ITSM frameworks to DevOps adoption, we streamline service delivery and improve efficiency. It helps us make your systems faster and give more reliable deployments.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "Cybersecurity Services",
    "description": "Cyber threats don’t take breaks, and neither do we. Our proactive cybersecurity solutions safeguard your systems with real-time monitoring, threat detection, and compliance measures that keep you a step ahead of attackers.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "IT Assessments",
    "description": "Stop guessing and start optimizing. At Bunnx, our team analyzes your IT infrastructure for performance gaps, security risks, and inefficiencies. If it’s fine-tuning policies or upgrading systems, our experts make your IT ecosystem leaner and faster, all while keeping costs under control.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "IT and Software Support",
    "description": "Don’t let downtime disrupt your business. With 24/7 support for applications and infrastructure, we provide the expertise needed to maintain smooth operations and troubleshoot issues before they turn into problems.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "it-consulting-services-india"
    ],
  },
  {
    "title": "CRM Consulting",
    "description": "We, at Bunnx, provide consulting services for your CRM software development projects and workflow improvement. We understand your needs and help you at every stage of the development to ensure that outcomes resonate with your customers.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "crm-software-development-company-india"
    ],
  },
  {
    "title": "CRM Testing",
    "description": "We conduct detailed CRM system testing for load testing by performance metrics. We focus on the UI/UX evaluation and API integration verification for third-party compatibility, and penetration testing. This makes the solution best for all platforms.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "crm-software-development-company-india"
    ],
  },
  {
    "title": "API Development and Integration",
    "description": "When you have an app idea, our experts will help you shape it into something actionable. From refining your concept to advising on the right technology and platform, we make your app get a strong foundation. At Bunnx, we also offer practical tips to set your app up for success.",
    "ctaRedirectUrl": "api-integration-and-development-services",
    "fetchOnSlug": [
      "mobile-app-development-company-india",
      "back-end-development-services-india",
      "web-application-development-company-india"
    ],
  },
  {
    "title": "Maintenance and Support",
    "description": "Your app needs care even after it’s launched. We provide ongoing support to monitor performance, fix any issues, and roll out updates. Post-deployment, we provide monitoring, updates, and maintenance.",
    
    "fetchOnSlug": [
      "mobile-app-development-company-india"
    ],
  },
  {
    "title": "Mobile App Modernization",
    "description": "If your app is starting to feel outdated, we can help. By updating its design, technology, and functionality, we bring it up to speed with modern standards. We handle app store submissions to meet all guidelines for a launch.",
    "fetchOnSlug": [
      "mobile-app-development-company-india"
    ],
  },
  {
    "title": "Cross-Platform App Development",
    "description": "Want an app that works on both iOS and Android? Our mobile app development company creates cross-platform solutions that save time and cost without compromising on quality. With a single codebase, your app will look and feel consistent no matter the device.",
    "ctaRedirectUrl": "application-development-company-india",
    "fetchOnSlug": [
      "mobile-app-development-company-india"
    ],
  },
  {
    "title": "Mobile App Integration",
    "description": "A great app doesn’t work in isolation. We connect your app to APIs and backend systems. This not only enhances functionality but also simplifies tasks and maintains consistency across platforms.",
    "ctaRedirectUrl": "api-integration-and-development-services",
    "fetchOnSlug": [
      "mobile-app-development-company-india"
    ],
  },
  {
    "title": "Web App Development",
    "description": "Whether it’s complementing your mobile app or standing alone, our custom web applications help extend your reach. With rigorous QA processes, including automated and manual testing, we make your app work across devices, screen sizes, and operating systems.",
    "ctaRedirectUrl": "web-application-development-company-india",
    "fetchOnSlug": [
      "mobile-app-development-company-india"
    ],
  },
  {
    "title": "Mobile App Development",
    "description": "From the first brainstorming session to launching your app, we handle it all. Our goal is to develop apps that work well and look great. We follow best practices in data encryption, secure authentication, and compliance standards like GDPR and HIPAA to protect user data and build trust.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "mobile-app-development-company-india"
    ],
  },
  {
    "title": "Mobile App UI/UX Design",
    "description": "Design plays a key role in how your visitors will interact with your app. Our team will create designs only after understanding your audience and business. We gain your trust after developing prototypes and wireframes to give you a clear picture of the final product.",
    "ctaRedirectUrl": "front-end-development-services-india",
    "fetchOnSlug": [
      "mobile-app-development-company-india"
    ],
  },
  {
    "title": "Mobile App Backend Development",
    "description": "Behind every great mobile app is a backend and we truly believe this. Hence, we build intelligent systems so that your app stays responsive and consistent across Android, iOS, and other platforms. We create it for cross-platforms to deliver the kind of experience your visitors expect.",
    "ctaRedirectUrl": "mobile-app-development-company-india",
    "fetchOnSlug": [
      "back-end-development-services-india"
    ],
  },
  {
    "title": "ERP/CRM Backend Development",
    "description": "Your ERP or CRM should grow as your business grows. Hence, we improve your existing systems by adding advanced features and reporting tools. With modern frameworks at the core, we also help you make these systems better to make operations of your website more effective.",
    "ctaRedirectUrl": "crm-software-development-company-india",
    "fetchOnSlug": [
      "back-end-development-services-india"
    ],
  },
  {
    "title": "Custom Backend Solutions",
    "description": "No two businesses are alike, so why should their backend be? Our team strictly follows this and makes backend solutions to create what you need. From initial concepts to fully functional systems, we build platforms that are fast and dependable.",
    "ctaRedirectUrl": "back-end-development-services-india",
    "fetchOnSlug": [
      "back-end-development-services-india"
    ],
  },
  {
    "title": "Backend Refactoring",
    "description": "An outdated backend can hold your app back. But don't worry as our team will revamp and optimize your system to boost speed and performance—all without touching your frontend. The result? A backend that works with your existing app and is ready to support your next big step.",
    "fetchOnSlug": [
      "back-end-development-services-india"
    ],
  },
  {
    "title": "API Monitoring and Debugging",
    "description": "Setting up monitoring tools such as Postman, Swagger, and ELK Stack to track API performance, debug errors, and ensure high availability.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "Cloud-Native API Development & Integration",
    "description": "Deploying APIs in cloud environments like AWS, Azure, or Google Cloud, using serverless architectures and containerization with Kubernetes and Docker.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "Third-Party API Integration Services",
    "description": "Integrating popular third-party APIs (e.g., payment gateways, CRM, social media platforms) to extend functionality and simplify external interactions.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "APIs Performance Optimization",
    "description": "Leveraging caching solutions like Redis and Memcached, optimizing query performance, and ensuring low-latency API responses for high-demand applications.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "Microservices API Development & Integration",
    "description": "Designing modular APIs for microservices architecture using frameworks like Spring Cloud, Node.js, and Docker to enable scalable and decoupled application ecosystems.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "Real-Time API Development & Integration",
    "description": "Building APIs with real-time capabilities using WebSocket, Socket.io, or streaming technologies like Kafka and RabbitMQ for instant data synchronization and live updates.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "Authentication and Security",
    "description": "Implementing secure authentication mechanisms using OAuth 2.0, JWT, and API keys to protect sensitive data and ensure robust role-based access control.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "API Development Services",
    "description": "Designing and developing RESTful and GraphQL APIs customised for web, mobile, and third-party integrations, ensuring efficient data exchange and enhanced functionality.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "API Integration Services",
    "description": "Connecting disparate systems, tools, and platforms through seamless API integration to enable unified workflows and improved operational efficiency.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "api-integration-and-development-services"
    ],
  },
  {
    "title": "Your Agile Starting Point",
    "description": "Not sure where to begin with Agile? We’ll help you chart the course. Our consulting services are like a compass, pointing you toward the methodology and framework that match your team’s strengths. You can get started on the right foot and keep making meaningful strides forward.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "agile-consulting-services-india"
    ],
  },
  {
    "title": "Revamp Processes with Purpose",
    "description": "Processes should work for you—not the other way around. We’ll collaborate to design workflows that reflect your business needs and goals. With our Agile consulting services, we’ll help you create efficient systems that drive productivity and keep your team.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "agile-consulting-services-india"
    ],
  },
  {
    "title": "Get Guidance from Our Team",
    "description": "Change is the only constant when your projects are growing fast. That’s why we offer continuous Agile consultant services to keep you on track. With us, you’re never on this journey alone. Our experts will ensure you remain agile and prepared, no matter how your business evolves.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "agile-consulting-services-india"
    ],
  },
  {
    "title": "Web App Development",
    "description": "We build web applications that look great and work even better. Whether you need something simple or feature-packed, we’ll create a web app after analyzing your industry practices and checking what your competitors are doing. ",
    "ctaRedirectUrl": "web-application-development-company-india",
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Mobile App Development",
    "description": "From idea to launch, we create mobile apps that have value other than direct revenue. Whether it’s for iOS or Android, we focus on making apps that are fast, reliable, and user-friendly.",
    "ctaRedirectUrl": "mobile-app-development-company-india",
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Front-End Development",
    "description": "We design and develop the front end of your app with precision, making sure it looks fantastic and feels smooth to use. Also, our application development company has a team that makes clean designs, provides quick loading times, and a great user experience. ",
    "ctaRedirectUrl": "front-end-development-services-india",
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Back-End Development",
    "description": "Behind every great app is a solid back end. We build powerful systems that involve the correct database and other operations. These are built behind the scenes but they have the capability to run the web servers efficiently.",
    "ctaRedirectUrl": "back-end-development-services-india",
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Cross-Platform Development",
    "description": "Want an app that works on both Android and iOS? You can use our cross-platform mobile development solutions. We help you save time and cost while delivering apps that feel native on every device. ",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "App Maintenance and Support",
    "description": "We don’t stop at building your app. Our team has a strong belief that an app should be kept running like new. If you need updates, bug fixes, or add new features, we’ll take care of it all.  ",
    
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Website and Portal Development",
    "description": "We understand that your website is your online home, and we’re here to make it welcoming. From corporate websites to complex portals, we’ll design and develop something that’s both functional and engaging. ",
    "ctaRedirectUrl": "crm-software-development-company-india",
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Application Modernization",
    "description": "Have an old app that needs a fresh look or better performance? We’ll update it with emerging and advanced technology. We will add features to make it faster and ready for the future. ",
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Full-Stack Development",
    "description": "Why hire multiple teams when we can handle it all? From the front end to the back end, our full-stack development services will cover your project  and give a complete solution. ",
    "ctaRedirectUrl": "full-stack-development-services",
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Cloud Application Development",
    "description": "Take your app to the cloud with continuous integration and resource orchestration. We build cloud-based solutions that adapt to your needs and grow with your business. ",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "application-development-company-india",
      "full-stack-development-services"
    ]
  },
  {
    "title": "Wearables and Embedded Software",
    "description": "Whether it’s a smartwatch or an IoT device, we design software that makes wearables smarter and embedded systems more efficient. Let’s bring innovation to your customer’s fingertips!",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "API Development & Integration",
    "description": "APIs are the glue that holds your apps together. With REST and SOAP APIs, we also provide you with a lightweight and efficient way for different systems to communicate over the internet.",
    "ctaRedirectUrl": "api-integration-and-development-services",
    "fetchOnSlug": [
      "application-development-company-india"
    ]
  },
  {
    "title": "Custom Website Development",
    "description": "We specialize in developing bespoke websites using frameworks like Laravel, React, and Node.js. Our team integrates custom functionalities, databases, and APIs to deliver high-performance web solutions. ",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "website-development-services-india"
    ]
  },
  {
    "title": "E-commerce Web Development",
    "description": "We design and develop e-commerce platforms using technologies like Adobe Commerce, WooCommerce, and Shopify. Our solutions include secure payment gateway integration, automated order processing, product catalog management, and real-time inventory updates.",
    "ctaRedirectUrl": "ecommerce-web-development",
    "fetchOnSlug": [
      "website-development-services-india",
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "Responsive Web Design",
    "description": "Our responsive design approach leverages CSS frameworks such as Bootstrap and Foundation to create adaptive layouts. We ensure websites dynamically adjust to multiple devices and screen resolutions using media queries. ",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "application-development-company-india",
      "website-development-services-india"
    ]
  },
  {
    "title": "CMS Integration (WordPress, Drupal)",
    "description": "We integrate content management systems like WordPress, Drupal, and Joomla with custom themes and plugins. Our team configures complex taxonomies, custom post types, and user roles to ensure flexibility and functionality. ",
    "ctaRedirectUrl": "cms-development-services-india",
    "fetchOnSlug": [
      "website-development-services-india"
    ]
  },
  {
    "title": "Web Portal Development",
    "description": "Every business has different users, and they all want different things. That’s why we build portals that work for them. Customers get personalized dashboards, employees get the right tools, and partners get direct access to what matters.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "application-development-company-india",
      "website-development-services-india"
    ]
  },
  {
    "title": "Website Architecture",
    "description": "Rushing into development without a plan?  We map out the entire system, check for any weak spots, and make sure your business logic actually works before it’s built. Our team makes sure every piece of your application fits perfectly before a single line of code goes live.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "website-development-services-india"
    ]
  },
  {
    "title": "Website Maintenance and Optimization",
    "description": "Our website maintenance services include code optimization, server performance tuning, and database indexing to improve speed and reduce latency. Our team also utilizes tools for website development like Google PageSpeed and GTmetrix to ensure ongoing performance optimization and responsiveness.",
    
    "fetchOnSlug": [
      "website-development-services-india"
    ]
  },
  {
    "title": "Full Stack Development",
    "description": "Our front-end development utilizes JavaScript frameworks like Angular, React, and Vue.js to create dynamic, interactive interfaces. On the back-end, we work with technologies such as PHP, Python, and Ruby on Rails to develop APIs.",
    "ctaRedirectUrl": "full-stack-development-services",
    "fetchOnSlug": [
      "website-development-services-india"
    ]
  },
  {
    "title": "UX/UI Design Services",
    "description": "We implement UX/UI design principles using tools like Adobe XD, Sketch, and Figma to create wireframes, prototypes, and interactive designs. Our process includes user flow analysis, A/B testing, and heatmap analysis to ensure the interface is intuitive.",
    "ctaRedirectUrl": "front-end-development-services-india",
    "fetchOnSlug": [
      "website-development-services-india"
    ]
  },
  {
    "title": "Web Security Implementation",
    "description": "We employ robust security practices such as SSL/TLS encryption, multi-factor authentication (MFA), and role-based access control (RBAC). Our team implements coding practices, conducts regular penetration testing, and monitors for vulnerabilities using tools like OWASP ZAP and Nessus.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "website-development-services-india"
    ]
  },
  {
    "title": "Custom CMS Development",
    "description": "Tailored CMS solutions cater specifically to unique business needs, enabling the creation of custom features and functionalities that enhance efficiency and user engagement across digital platforms.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "CMS Theme Development & Customization",
    "description": "We design and customize themes/templates to align perfectly with your brand identity. Our team converts Figma/PSD designs into fully functional and responsive CMS themes.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "Headless CMS Development",
    "description": "Develops headless CMS solutions for a decoupled approach to content management, enabling API-driven content delivery to various platforms and enhancing frontend flexibility.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "E-commerce Integration",
    "description": "Integrates robust e-commerce functionalities within your CMS, including custom shopping carts and payment gateways, to streamline online transactions and product management.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "SEO Optimization",
    "description": "Optimizes your CMS for search engines, integrating with essential SEO tools like Yoast SEO and All in One SEO to enhance your online visibility and reach.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "CMS Maintenance & Support",
    "description": "In order to make the product robust day by day, we ensure regular updates, security patches, and performance optimization, along with continuous bug fixes and technical issue resolution to enhance stability, security, and user experience.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "Cloud-Based CMS Solutions",
    "description": "Provides development and deployment of CMS on scalable cloud platforms like AWS, Azure, and Google Cloud, ensuring flexible and scalable content management options.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "CMS Website Development",
    "description": "We build CMS-powered websites on WordPress, Drupal, Joomla, and Shopify. Our sites are dynamic, SEO-friendly, and fully responsive for a seamless experience.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "CMS Integration",
    "description": "This service seamlessly integrates your CMS with existing business systems like CRM, ERP, and eCommerce platforms, utilizing APIs for efficient data exchange and system functionality.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "CMS Migration & Upgrades",
    "description": "We seamlessly migrate your CMS (e.g., WordPress to Drupal) while keeping your data safe. Upgrades are smooth, ensuring better performance without any loss.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "E-commerce CMS Development",
    "description": "We build online stores with WooCommerce, Shopify, Magento, and OpenCart, tailored to your needs. From custom themes to seamless payment integration, we make selling easy.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "API & Third-Party Integration",
    "description": "We build online stores with WooCommerce, Shopify, Magento, and OpenCart, tailored to your business needs. From theme customization to seamless payment gateway integration, we ensure a smooth shopping experience.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "Multilingual & Multi-site CMS Development",
    "description": "We can help you expand globally with multilingual support and effortlessly manage multiple websites from a single CMS dashboard. 🌍🚀",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "Plugin and Module Development",
    "description": "We can create custom plugins or extensions to add new features and modify existing ones to perfectly match your business needs. Let’s tailor your CMS to work exactly how you want! ",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "cms-development-services-india"
    ]
  },
  {
    "title": "MERN/MEAN Stack Development",
    "description": "Different projects call for different tech stacks. MEAN and MERN offer JavaScript-powered agility, while LAMP brings a time-tested foundation for web applications.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "full-stack-development-services"
    ]
  },
  {
    "title": "Mobile App Development",
    "description": "We develop native Android and iOS applications using Kotlin, Swift, and Objective-C. For cross-platform solutions, we leverage frameworks like Flutter and React Native to deliver high-quality apps with a single codebase.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "full-stack-development-services"
    ]
  },
  {
    "title": "Front-End Development",
    "description": "A clunky interface sends them running, while an intuitive one keeps them engaged. If it’s an e-commerce store or a SaaS platform, we make sure every interaction works exactly the way it should.",
    "ctaRedirectUrl": "front-end-development-services-india",
    "fetchOnSlug": [
      "full-stack-development-services"
    ]
  },
  {
    "title": "Back-End Development",
    "description": "A great front-end means nothing without a strong backbone. That’s why we build back-end systems that handle data, processes, and keep everything connected.",
    "ctaRedirectUrl": "back-end-development-services-india",
    "fetchOnSlug": [
      "full-stack-development-services"
    ]
  },
  // {
  //   "title": "DevOps and CI/CD Pipelines",
  //   "description": "Streamline your development process with our automated deployment pipelines and CI/CD setups using Jenkins, GitLab CI/CD, or CircleCI.",
  //   "ctaRedirectUrl": "devops-and-ci-cd-pipelines",
  //   "fetchOnSlug": [
  //     "full-stack-development-services"
  //   ]
  // },
  {
    "title": "Database Design and Management",
    "description": "Our experts design, optimize, and manage relational databases like MySQL and PostgreSQL, as well as NoSQL solutions like MongoDB and Cassandra, ensuring scalability and high performance.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "full-stack-development-services",
      "web-application-development-company-india",
      "custom-software-development-services"
    ]
  },
  {
    "title": "Authentication and Authorization",
    "description": "We ensure secure user access with technologies like OAuth 2.0, JWT, and Single Sign-On (SSO), providing robust role-based control mechanisms.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "full-stack-development-services"
    ]
  },
  {
    "title": "API Development and Integration",
    "description": "We craft powerful RESTful and GraphQL APIs to enable smooth communication between front-end applications, mobile platforms, and third-party services.",
    "ctaRedirectUrl": "api-integration-and-development-services",
    "fetchOnSlug": [
      "full-stack-development-services"
    ]
  },
  {
    "title": "Ecommerce Development",
    "description": "Your eCommerce store should reflect how you sell, what you offer, and how your customers shop. With 24/7 availability, your store is always open for customers, no matter where they are.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-web-development"
    ]
  },
  {
    "title": "Feature Implementation",
    "description": "Our experts incorporate tools like payment gateways, CRM, POS systems, and automation features. Managing inventory and processing transactions is also done by our team.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "Website Design",
    "description": "First impressions matter, and your website is the face of your business. So, we design eCommerce websites that are not only visually stunning but also intuitive to navigate.",
    "ctaRedirectUrl": "front-end-development-services-india",
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "eCommerce Consulting",
    "description": "An online store needs expert consulting for refining and boosting your store’s ROI. If it’s selecting the right technology or identifying gaps in your sales funnel, we offer guidance.",
    "ctaRedirectUrl": "ecommerce-consulting-services",
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "Backend Development",
    "description": "The foundation of any successful eCommerce store lies in its backend. With inventory management and payment processing, we handle high traffic and transactions without breaking down.",
    "ctaRedirectUrl": "back-end-development-services-india",
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "Frontend Development",
    "description": "Your storefront is where visitors turn into buyers, and we make sure it’s an experience they won’t forget. Using the latest web technologies like HTML, CSS, and JavaScript, we craft engaging and high-performing interfaces.",
    "ctaRedirectUrl": "front-end-development-services-india",
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "Mobile App Development",
    "description": "People spend hours on their phones every day, and if your business isn’t there, you’re missing out. Features like push notifications, recommendations, and mobile payment options encourage more purchases.",
    "ctaRedirectUrl": "mobile-app-development-company-india",
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "Maintenance & Migration",
    "description": "Technology evolves, and so should your eCommerce store. If you're moving from an old platform to a new one, we manage the transition carefully and preserve your data to avoid disruptions.",
    "ctaRedirectUrl": "ecommerce-maintenance-and-support-services",
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "Platform-Based Development",
    "description": "Every eCommerce platform has its strengths, and we help you choose the right one. Whether it’s Magento, Shopify, WooCommerce, or another platform, we build online stores that align with how you do business.",
    "ctaRedirectUrl": "cms-development-services-india",
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "eCommerce System Connections",
    "description": "An online store doesn’t function in isolation—it needs to work with your CRM, ERP, and other business tools. We set up connections that sync your inventory, track customer data, and automate repetitive tasks.",
    "ctaRedirectUrl": "crm-software-development-company-india",
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "eCommerce Audits",
    "description": "Even the best eCommerce stores have room for improvement. We provide a detailed report with actionable insights to improve navigation, checkout processes, and technical performance.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "Digital Marketing for eCommerce",
    "description": "A great store is useless if no one knows about it. We craft digital marketing strategies that bring targeted traffic to your store through SEO, paid ads, and social media campaigns.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-development-company-india"
    ]
  },
  {
    "title": "eCommerce Strategy Evaluation",
    "description": "We provide a thorough assessment of your IT strategy, resources, and technologies to guide your digital transformation effectively. Our services include evaluating app maturity, generating process analysis reports, and assessing existing business processes.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-consulting-services"
    ]
  },
  {
    "title": "eCommerce Mobile/Web Application Design",
    "description": "Tailored for both startups and established companies, we design custom eCommerce mobile and web applications. Our services range from developing POS systems to designing custom eCommerce storefronts and managing product information systems.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-consulting-services"
    ]
  },
  {
    "title": "eCommerce App Development Consulting",
    "description": "We specialize in creating custom eCommerce applications for SMEs, startups, agencies, and enterprises. Our solutions are designed to help you with customer loyalty and brand building. With this, you can automate your solutions making it great.",
    "ctaRedirectUrl": "ecommerce-development-company-india",
    "fetchOnSlug": [
      "ecommerce-consulting-services"
    ]
  },
  {
    "title": "QA & Testing Consulting",
    "description": "We offer expert QA consulting as well. This is to ensure seamless software performance. Our approach includes developing expert QA strategies, enhancing product reliability, and providing comprehensive testing solutions.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-consulting-services"
    ]
  },
  {
    "title": "eCommerce Digitalization Consulting",
    "description": "Our consultancy focuses on enhancing business efficiency through digital transformation strategies. We assist in multi-channel order management, digitalizing customer experiences, and facilitating remote working and team collaboration.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-consulting-services"
    ]
  },
  {
    "title": "Custom Web Application Development",
    "description": "Every business runs differently, and that’s why not all softwares works for them. Hence, our web development team builds business dashboards, ERP systems, CRM platforms, and online marketplaces. It streamlines your operations while giving businesses a structured yet dynamic way to manage data, processes, and interactions.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "web-application-development-company-india"
    ]
  },
  {
    "title": "Full-Stack Development",
    "description": "Having the right combination of technologies makes all the difference in a web app’s speed. Our web development team works with MERN (MongoDB, Express.js, React.js, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) to develop applications that handle large amounts of data.",
    "ctaRedirectUrl": "full-stack-development-services",
    "fetchOnSlug": [
      "web-application-development-company-india"
    ]
  },
  {
    "title": "Progressive Web App (PWA) Development",
    "description": "PWAs bring the best of both web and mobile apps. These applications work even when there’s no internet connection and offer an experience that feels as responsive as a mobile app. This makes them a great choice for businesses looking to expand their reach without building a separate mobile application.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "web-application-development-company-india"
    ]
  },
  {
    "title": "Authentication & Security",
    "description": "Data protection isn’t optional—it’s a necessity. Our web development company implements authentication methods such as JWT, OAuth, and Single Sign-On to manage user access. Additionally, role-based access control and encryption techniques protect sensitive information from unauthorized access.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "web-application-development-company-india"
    ]
  },
  {
    "title": "Interactive Web Applications",
    "description": "Web apps aren’t just about displaying static content anymore. So, our experts make applications that support live interactions such as chat applications using Socket.io and WebRTC or notification systems that keep users engaged for more time.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "web-application-development-company-india"
    ]
  },
  {
    "title": "Cloud & DevOps Services",
    "description": "A strong infrastructure needs an application that runs without interruptions. It requires us to deploy on AWS, Google Cloud, and DigitalOcean while setting up CI/CD pipelines for continuous development. Also, this technique keeps applications running at their best.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "web-application-development-company-india"
    ]
  },
  {
    "title": "Implementation Consulting",
    "description": "Every business has its own challenges and aspirations, and we take the time to understand yours. Instead of offering generic solutions, we work closely with you to build a strategy. Our approach is hands-on to refine workflows to address uncertainties.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-implementation"
    ]
  },
  {
    "title": "Configuration and Customization",
    "description": "Sometimes old software doesn’t always work the way you want it to. That’s why we look for every aspect of your system to match how you operate. Our experts also set up features that align with your processes or adjust functionalities to improve usability.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-implementation"
    ]
  },
  {
    "title": "UX and UI Design",
    "description": "A good product isn’t just about what it does—it’s about how people interact with it. Hence, we make designs that feel natural, look appealing, and make navigation. With a strong balance of aesthetics and usability, we create interfaces that customers enjoy.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-implementation"
    ]
  },
  {
    "title": "System Connections",
    "description": "Your business tools should talk to each other without friction. Our team makes sure all essential systems such as customer databases and third-party software. It reduces manual work and streamline day-to-day operations. A well-connected system allows everything to function as a single and cohesive unit.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-implementation"
    ]
  },
  {
    "title": "Solution Migration",
    "description": "Moving from one system to another can be overwhelming, but we make the process structured and predictable. We transfer everything from data and settings to user preference. The transition is done with minimal disruption to continue running your business.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-implementation"
    ]
  },
  {
    "title": "Security Testing",
    "description": "A strong system is one that keeps threats out. We put your platform through rigorous testing to find and fix vulnerabilities before they become a problem. If risk is identified and weak spots are strengthened, we create a safer environment for your business.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-implementation"
    ]
  },
  {
    "title": "User Training",
    "description": "The best tools are only as good as the people using them. We don’t just hand over a system and walk away. Instead, our team guides your team through every feature. From hands-on demonstrations to clear instructions, we equip everyone with the knowledge they need to get the most out of the system.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-implementation"
    ]
  },
  {
    "title": "After-Launch Support",
    "description": "Technology doesn’t stop evolving, and neither should your system. After launch, we stay by your side to handle updates, resolve unexpected issues, and make necessary adjustments. If it’s troubleshooting technical glitches or refining features, we’re here to keep everything running at its best.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-implementation"
    ]
  },
  {
    "title": "eStore Development",
    "description": "Our Shopify development company in India creates Shopify stores tailored to your brand's unique requirements, ensuring seamless user experiences and optimized performance across all devices. Our development process focuses on speed, scalability, and an intuitive interface for customers.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "shopify-development-company-in-india"
    ]
  },
  {
    "title": "Web Design",
    "description": "Our team specializes in designing and developing custom Shopify themes from scratch. We make them using HTML5, CSS3, JavaScript, and modern frameworks like React.js and Vue.js.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "shopify-development-company-in-india"
    ]
  },
  {
    "title": "Plugin Development",
    "description": "We build custom Shopify apps to extend the platform's capabilities using Node.js, Ruby on Rails, and PHP. Our solutions are built for compatibility across different devices and browsers.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "shopify-development-company-in-india"
    ]
  },
  {
    "title": "Testing & Quality Assurance",
    "description": "Using Shopify Test Cloud and automated testing tools like Selenium and Jest, we identify inconsistencies across browsers. Our testing process covers UI/UI validation, load handling, and bug resolution.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "shopify-development-company-in-india"
    ]
  },
  {
    "title": "Migration and Customization Services",
    "description": "We provide end-to-end migration and customization services, transferring your existing online store from other platforms to Shopify without data loss, downtime, or disruption to your operations.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "shopify-development-company-in-india"
    ]
  },
  {
    "title": "eCommerce Site Audit and Analysis",
    "description": "Our experts perform a comprehensive audit of your eCommerce site, evaluating its technical operations, speed, security, and SEO to identify enhancement opportunities and optimization areas.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-maintenance-and-support-services"
    ]
  },
  {
    "title": "Shopping Cart Maintenance",
    "description": "We provide meticulous maintenance and updates for your shopping cart, ensuring seamless functionality and access to the latest features for an improved shopping experience.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-maintenance-and-support-services"
    ]
  },
  {
    "title": "eCommerce Website Content Management",
    "description": "Our team refreshes and manages your site's content, including product details, navigation, and visuals, to keep your platform current and engaging for visitors.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-maintenance-and-support-services"
    ]
  },
  {
    "title": "eCommerce Website Security ",
    "description": "We enhance your site's security through SSL installation, data encryption, PCI compliance, and continuous monitoring, safeguarding your business and customers.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-maintenance-and-support-services"
    ]
  },
  {
    "title": "Marketing and Optimization for eCommerce",
    "description": "We optimize your eCommerce site by improving navigation and adding interactive features, enhancing the shopping experience, boosting conversions, and driving targeted traffic.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-maintenance-and-support-services"
    ]
  },

  {
    "title": "eCommerce Support Services",
    "description": "Our eCommerce website maintenance & support services team is ready to swiftly address and resolve any site issues, minimizing downtime and ensuring continuous, efficient operations.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": [
      "ecommerce-maintenance-and-support-services"
    ]
  },

  {
    "title": "eCommerce Support Services",
    "description": "Our eCommerce website maintenance & support services team is ready to swiftly address and resolve any site issues, minimizing downtime and ensuring continuous, efficient operations.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Custom eCommerce Website Design",
    "description": "Your store’s look and feel should do more than just exist. That's why our design team builds layouts that match your brand’s personality. Every button, menu, and interaction is made to keep shoppers engaged. It helps to guide them from product discovery to checkout without distractions.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Shopping Cart Implementation",
    "description": "A clunky checkout process can kill conversions in seconds. We build shopping carts to control product availability, apply discounts dynamically, and allow friction-free payments. Customers can save items, switch between devices without losing their carts, and complete transactions with just a few taps.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Payment Gateway Setup",
    "description": "No matter how your customers prefer to pay. We make multiple payment options, from credit cards and digital wallets to regional payment providers. Every transaction is processed, with no unnecessary redirects or page reloads.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Product Management Dashboard",
    "description": "Managing hundreds—or thousands—of products shouldn’t feel like a chore. Our dashboard lets you add, edit, and categorize products in bulk. Update prices, track stock levels, and highlight featured items with a few clicks.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Customer Data & Service Tools",
    "description": "Understanding your shoppers is the key to bringing them back. Our eCommerce web development company lets you track past purchases and interactions so you can personalize offers and provide better support. Automated responses, customer segmentation, and feedback collection tools keep your customer service proactive.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "eCommerce SEO Strategies",
    "description": "A great store is useless if no one finds it. We fine-tune your product pages, URLs, and metadata to rank higher on search engines. Structured data implementation makes your listings stand out with price and rating snippets in search results.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Mobile-Friendly Storefronts",
    "description": "Your store should look and work just as well on a phone as it does on a desktop. We create layouts that adapt automatically to different screen sizes, ensuring images, buttons, and checkout flows work in a better way.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Advanced Sales & Customer Insights",
    "description": "Tracking numbers isn't enough—you need insights that drive action. Our analytics tools go beyond basic traffic reports, providing deep insights into conversion rates and revenue trends. Find out which products sell the most, where visitors drop off, and how different campaigns impact sales.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Security & Fraud Prevention",
    "description": "Your store must protect customers’ data at all costs. Our team uses SSL encryption, multi-factor authentication, and advanced fraud detection to safeguard transactions. Automatic alerts notify you of suspicious activity, prevent chargebacks and unauthorized access before they become an issue.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Hosting & Server Infrastructure",
    "description": "Your store needs a foundation that can handle growth without slowing down. We set up hosting environments that balance speed and reliability. Auto-scaling servers and CDN integration keep things running fast, no matter how many visitors arrive at once.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Content Control & Management",
    "description": "Keeping your store fresh shouldn’t require a developer. Our eCommerce web development services allow you to update banners, tweak product descriptions, and publish blog content without touching a single line of code. Custom templates and drag-and-drop builders make managing your store as easy as editing a document.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },
  {
    "title": "Support & Store Evolution",
    "description": "A store launch is just the beginning. We provide performance tuning and feature updates to keep your eCommerce site at the top of its game. If it’s adding new payment methods or fixing minor glitches, we handle it all while you focus on selling.",
    "fetchOnSlug": ["ecommerce-web-development"]
  },

  {
    "title": "Setup and Integration",
    "description": "Our team uses WooCommerce like any WordPress plugin. Find it in your dashboard, click 'Activate,' and launch your store. You don’t need any technology knowledge.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },
  {
    "title": "Guided Store Setup",
    "description": "The Setup team checks your store basics: currency, payment methods, and shipping zones. It will skip the unnecessary and focus on what gets your shop ready for customers.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },
  {
    "title": "Wordpress Theme Integration",
    "description": "Works smoothly with 99% of WordPress themes. Prefer something built just for Woo? Take help from our team for a free Storefront theme which is clean and lightweight.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },
  {
    "title": "Data Control",
    "description": "Your data must stay under confidentiality. No third-party platform will be holding it. We host everything on your server, and tweak/backup customer info, sales stats, and inventory as you please.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },
  {
    "title": "Data Protection",
    "description": "WooCommerce doesn’t share your data with middlemen. Our experts pair it with trusted hosting and plugins.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },
  {
    "title": "Checkout Customization",
    "description": "We design checkout flows that match your brand. Our team also adds/removes fields, enables guest purchases, or redirects customers to a custom 'Thank You' page.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },
  {
    "title": "Payment Gateways",
    "description": "At Bunnx, our experts take cash, checks, bank transfers, or digital payments via PayPal or Stripe. You'll get the payment methods on/off in minutes.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },
  {
    "title": "Automatic Tax & Location",
    "description": "Show prices with taxes included based on a customer’s location. For this, we set rules once, and WooCommerce handles the math.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },
  {
    "title": "Checkout Process Control",
    "description": "You can now decide who can buy countries or global, force secure checkout, or let shoppers come as guests. We make your rules come to reality by setting your checkout flow URLs.",
    "fetchOnSlug": ["woocommerce-development-services-india"]
  },

  {
    "title": "Dedicated Development Teams",
    "description": "Build your dream team without the hiring hassle. Our pre-vetted developers seamlessly integrate with your existing workflow, bringing fresh perspectives and specialized skills to accelerate your project timelines.",
    "fetchOnSlug": ["it-staff-augmentation-services-india"]
  },
  {
    "title": "Flexible Scaling Solutions",
    "description": "Adapt your team size as your needs evolve. Whether you're scaling up for a major release or optimizing resources during quiet periods, we ensure you have the right talent at the right time.",
    "fetchOnSlug": ["it-staff-augmentation-services-india"]
  },
  {
    "title": "Technology Expertise On-Demand",
    "description": "Access specialists across the tech spectrum without long-term commitments. From cloud architects to AI developers, we match you with experts who can hit the ground running on your specific technology stack.",
    "fetchOnSlug": ["it-staff-augmentation-services-india"]
  },
  {
    "title": "Seamless Knowledge Transfer",
    "description": "Our augmented staff doesn't just code - they collaborate and share. Through detailed documentation, pair programming, and regular knowledge sharing sessions, we ensure your internal team grows stronger with every engagement.",
    "fetchOnSlug": ["it-staff-augmentation-services-india"]
  },
  {
    "title": "Cultural Fit Guarantee",
    "description": "We understand that technical skills alone aren't enough. Our professionals are selected for their communication abilities, adaptability, and cultural awareness to ensure they truly become part of your team.",
    "fetchOnSlug": ["it-staff-augmentation-services-india"]
  },
  {
    "title": "Project Acceleration Support",
    "description": "Behind schedule or facing tight deadlines? Our experienced developers can jump in at any project stage, quickly understand your codebase, and help deliver results without compromising quality.",
    "fetchOnSlug": ["it-staff-augmentation-services-india"]
  },
  {
    "title": "Risk Mitigation Expertise",
    "description": "Reduce the risks associated with hiring and training. Our professionals come with proven track records and are backed by our quality guarantees, ensuring consistent delivery and minimal onboarding time.",
    "fetchOnSlug": ["it-staff-augmentation-services-india"]
  },
  {
    "title": "Innovation Enablement",
    "description": "Bring fresh perspectives to your projects with our diverse talent pool. Our specialists stay current with emerging technologies and best practices, helping you innovate while maintaining project stability.",
    "fetchOnSlug": ["it-staff-augmentation-services-india"]
  },


  {
    "title": "Full-Stack Development Experts",
    "description": "Access versatile developers who master both frontend and backend technologies. Our full-stack experts bring comprehensive solutions, reducing communication overhead and accelerating your development cycle.",
    "fetchOnSlug": ["hire-software-developer-india"]
  },
  {
    "title": "Cloud Architecture Specialists",
    "description": "Transform your infrastructure with cloud-native solutions. Our cloud architects design scalable, cost-effective systems that grow with your business, ensuring optimal performance and security.",
    "fetchOnSlug": ["hire-software-developer-india"]
  },
  {
    "title": "Mobile App Development Pros",
    "description": "Create engaging mobile experiences across platforms. Our mobile developers craft native and cross-platform applications that deliver exceptional user experiences while maintaining high performance.",
    "fetchOnSlug": ["hire-software-developer-india"]
  },
  {
    "title": "AI & Machine Learning Engineers",
    "description": "Leverage cutting-edge AI capabilities in your applications. Our specialists implement intelligent features, from predictive analytics to natural language processing, driving innovation in your products.",
    "fetchOnSlug": ["hire-software-developer-india"]
  },
  {
    "title": "DevOps Implementation Experts",
    "description": "Streamline your development pipeline with automated processes. Our DevOps engineers set up efficient CI/CD pipelines, container orchestration, and monitoring systems for reliable deployments.",
    "fetchOnSlug": ["hire-software-developer-india"]
  },
  {
    "title": "Quality Assurance Engineers",
    "description": "Ensure flawless software delivery with comprehensive testing. Our QA experts implement automated testing frameworks and detailed manual testing procedures to maintain high quality standards.",
    "fetchOnSlug": ["hire-software-developer-india"]
  },

  {
    "title": "Strategic IT Consulting",
    "description": "Transform your business with expert IT guidance. Our consultants analyze your needs, recommend optimal solutions, and create roadmaps for digital transformation that align with your business goals.",
    "fetchOnSlug": ["it-outsourcing-services"]
  },
  {
    "title": "Custom Software Development",
    "description": "Build tailored solutions that perfectly fit your needs. Our development teams create custom applications that streamline your operations and give you a competitive edge in your market.",
    "fetchOnSlug": ["it-outsourcing-services"]
  },
  {
    "title": "Legacy System Modernization",
    "description": "Breathe new life into your existing systems. We help you modernize legacy applications, ensuring they integrate seamlessly with current technologies while preserving your valuable business logic.",
    "fetchOnSlug": ["it-outsourcing-services"]
  },
  {
    "title": "Cloud Migration Services",
    "description": "Move your operations to the cloud with confidence. Our experts handle complete cloud migrations, from planning to execution, ensuring minimal disruption to your business operations.",
    "fetchOnSlug": ["it-outsourcing-services"]
  },
  {
    "title": "24/7 IT Support & Maintenance",
    "description": "Keep your systems running smoothly around the clock. Our dedicated support teams provide continuous monitoring, rapid issue resolution, and proactive maintenance to prevent downtime.",
    "fetchOnSlug": ["it-outsourcing-services"]
  },
  {
    "title": "Cybersecurity Solutions",
    "description": "Protect your digital assets with robust security measures. Our security experts implement comprehensive protection strategies, from threat detection to incident response and recovery.",
    "fetchOnSlug": ["it-outsourcing-services"]
  },

  {
    "title": "Turnkey Development Center",
    "description": "Launch your offshore center without the setup hassle. We handle everything from infrastructure and hiring to team management, allowing you to focus on your core business objectives.",
    "fetchOnSlug": ["offshore-dedicated-development-center-india"]
  },
  {
    "title": "Technology Innovation Hub",
    "description": "Create cutting-edge solutions with access to India's top tech talent. Our innovation centers provide the perfect environment for developing next-generation products and services.",
    "fetchOnSlug": ["offshore-dedicated-development-center-india"]
  },
  {
    "title": "Scalable Team Operations",
    "description": "Grow your development capabilities on demand. Our offshore centers accommodate rapid scaling, providing the flexibility to expand or contract your team as needed.",
    "fetchOnSlug": ["offshore-dedicated-development-center-india"]
  },
  {
    "title": "Intellectual Property Protection",
    "description": "Secure your innovations with robust IP protection. We implement strict security protocols and legal frameworks to ensure your intellectual property remains completely protected.",
    "fetchOnSlug": ["offshore-dedicated-development-center-india"]
  },
  {
    "title": "Quality Control Systems",
    "description": "Maintain consistent quality across all deliverables. Our offshore centers implement comprehensive quality management systems, ensuring every piece of code meets your standards.",
    "fetchOnSlug": ["offshore-dedicated-development-center-india"]
  },
  {
    "title": "Cultural Alignment Programs",
    "description": "Bridge cultural gaps effectively. Our teams undergo extensive training in your business culture and communication practices, ensuring smooth collaboration across time zones.",
    "fetchOnSlug": ["offshore-dedicated-development-center-india"]
  },




  {
    "title": "Homeshore Software Development",
    "description": "When a company assigns its software development project to a team within the same city or region, communication is seamless. Face-to-face meetings, brainstorming sessions, and troubleshooting become more efficient, ensuring strong project oversight.",
    "fetchOnSlug": ["outsourcing-software-development-in-india"]
  },
  {
    "title": "Nearshore Software Development",
    "description": "Nearshore outsourcing expands hiring options beyond national borders while keeping operations within neighboring countries. This approach offers the advantage of similar time zones, making coordination, meetings, and development cycles more streamlined.",
    "fetchOnSlug": ["outsourcing-software-development-in-india"]
  },
  {
    "title": "Offshore Software Development",
    "description": "Offshoring takes outsourcing to distant countries, often across continents. Companies benefit from lower development costs and access to a diverse talent pool, provided there are clear documentation processes and structured workflows in place.",
    "ctaRedirectUrl": "offshore-dedicated-development-center-india",
    "fetchOnSlug": ["outsourcing-software-development-in-india"]
  },
  {
    "title": "Onshore Software Development",
    "description": "Onshore outsourcing allows businesses to work with a development team within the same country but outside their immediate region. This ensures compliance with national regulations while expanding access to skilled professionals.",
    "fetchOnSlug": ["outsourcing-software-development-in-india"]
  },

  {
    "title": "Handpicked Experts for Your Project",
    "description": "Skip the hiring hassle—get access to pre-vetted developers with specialized skills tailored to your needs. Scale your team effortlessly with top-tier engineers ready to deliver excellence.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },
  {
    "title": "Flexible Engagement Models",
    "description": "Choose a hiring model that fits your project’s demands. Whether it’s a short-term requirement or a long-term partnership, we provide dedicated developers to match your workflow.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },
  {
    "title": "Seamless Team Integration",
    "description": "Our dedicated developers work as an extension of your in-house team. With aligned time zones, smooth communication, and shared goals, collaboration feels natural and efficient.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },
  {
    "title": "Agile & Scalable Teams",
    "description": "Need to scale up or down quickly? Our dedicated teams are built to adapt, ensuring you always have the right talent at the right time without the overhead of full-time hiring.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },
  {
    "title": "Industry-Specific Expertise",
    "description": "From fintech to healthcare, e-commerce to AI—our developers bring domain-specific experience to accelerate your project and deliver high-quality solutions with precision.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },
  {
    "title": "100% IP Protection & NDA Compliance",
    "description": "Your ideas and data are safe with us. We ensure complete confidentiality with airtight NDAs and strict IP protection protocols, so you retain full ownership of your product.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },
  {
    "title": "Full-Stack Development Support",
    "description": "Hire frontend, backend, or full-stack engineers who are proficient in modern technologies like React, Node.js, Python, and more to build robust and scalable applications.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },
  {
    "title": "Faster Time to Market",
    "description": "Speed up development with our dedicated team model. Get expert engineers onboarded within days and accelerate your product’s launch while maintaining high-quality standards.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },
  {
    "title": "Ongoing Support & Maintenance",
    "description": "Beyond development, we offer continuous support to keep your software running smoothly. From bug fixes to performance optimization, our experts have you covered.",
    "fetchOnSlug": ["hire-dedicated-development-team-india"]
  },





  {
    "title": "IT Staff Augmentation",
    "description": "Need superhero developers without the hiring headache? We're your talent accelerator, plugging world-class tech experts directly into your team, instantly boosting your innovation power and project momentum.",
    "ctaRedirectUrl": "it-staff-augmentation-services-india",
    "fetchOnSlug": ["hire-dedicated-technical-team-india"]
  },
  {
    "title": "Hire Software Developer",
    "description": "Forget endless recruitment cycles. We handpick coding rockstars who don't just write code, but breathe life into your most ambitious technological dreams with precision and passion.",
    "ctaRedirectUrl": "hire-software-developer-india",
    "fetchOnSlug": ["hire-dedicated-technical-team-india"]
  },
  {
    "title": "IT Outsourcing Services",
    "description": "Transform your IT challenges into strategic opportunities. Our outsourcing isn't about replacing your team—it's about empowering them with global expertise, seamless collaboration, and breakthrough innovations.",
    "ctaRedirectUrl": "it-outsourcing-services",
    "fetchOnSlug": ["hire-dedicated-technical-team-india"]
  },
  {
    "title": "Dedicated Development Team",
    "description": "Imagine having a dream team of tech experts who are 100% committed to your project, working as an extension of your own team. We don't just assign developers; we craft a custom squad of innovation champions who live and breathe your technological vision.",
    "ctaRedirectUrl": "hire-dedicated-development-team-india",
    "fetchOnSlug": ["hire-dedicated-technical-team-india"]
  },

  {
    "title": "Offshore Software Development Center India",
    "description": "Unlock the power of global talent without the global headaches. Our India-based development center is your gateway to world-class tech expertise, delivering cutting-edge solutions with the precision of local collaboration.",
    "ctaRedirectUrl": "offshore-dedicated-development-center-india",
    "fetchOnSlug": ["hire-dedicated-technical-team-india"]
  },
  {
    "title": "Outsourcing Software Development",
    "description": "Beyond borders, beyond expectations. We're not just an outsourcing company – we're your strategic technology partner, transforming India's rich tech talent into your competitive advantage, with seamless communication and breakthrough innovations.",
    "ctaRedirectUrl": "outsourcing-software-development-in-india",
    "fetchOnSlug": ["hire-dedicated-technical-team-india"]
  },
  
  {
    "title": "Cloud Engineering",
    "description": "Navigate the cloud revolution with our engineering virtuosos. We design, migrate, and optimize cloud infrastructures that scale seamlessly, secure intelligently, and power your digital transformation.",
    "ctaRedirectUrl": null,
    "fetchOnSlug": ["hire-dedicated-technical-team-india"]
  },

]




const OurServicesHeadPara = [
  {
    serviceTitle: "Best WooCommerce Development Services",
    servicePara: "Your business isn’t static, and neither is your website. Whether you’re adding 10 products or 10,000, we create a foundation. Need a new feature down the road? We’ve got your back.",
    slug: "woocommerce-development-services-india"
  },
  {
    serviceTitle: "More Than Developers. Your Innovation Partners.",
    "servicePara": "We're not just filling seats – we're your tech dream team. Imagine having rockstar developers who think like founders, code like artists, and are 100% committed to turning your wildest tech ideas into reality. No more settling for generic talent. We handpick tech wizards who don't just work for you, but work with you – transforming challenges into breakthrough innovations.",
    "slug": "hire-dedicated-technical-team-india"
  },
  {
    serviceTitle: "Best Front End Development Services",
    servicePara: "We are a top front end development service provider in India, focused on delivering the best user solutions. We build powerful, integrated websites that make navigation smoother and drive business growth seamlessly. Our innovative range of front end development services include.",
    slug: "front-end-development-services-india"
  },
  {
    serviceTitle: "Best eCommerce Web Development Services",
    servicePara: "Need integrations? We will connect your app with a lot of payment gateways, CRMs, APIs, and more. The team at our eCommerce web development company will work on push notifications for better data analytics to refine strategies.",
    slug: "ecommerce-web-development"
  },
  {
    serviceTitle: "Best Back End Development Services",
    servicePara: "We create backend systems using frameworks like Node.js, Python, or Ruby. We build server logic that handles data and connects with frontend of your website. Our focus is on making APIs for data sharing and setting up databases that store and retrieve information without a hitch. Security and performance are always priorities for us. So, if you are building something new or upgrading your current setup, we will provide you with the best backend.",
    slug: "back-end-development-services-india"
  },
  {
    serviceTitle: "Our Software Development Services",
    servicePara: "We are a leading software development company in India, providing unique and innovative custom software development services that help your business to achieve exponential growth.",
    slug: "software-development-company-in-india"
  },
  {
    serviceTitle: "Best CRM Software Development Services",
    servicePara: "Being one of the top CRM software development companies in India, we are experts in providing reliable CRM development services that improve processes and accelerate company expansion. We have made solutions that will help you modify engagement of your visitors.",
    slug: "crm-software-development-company-india"
  },
  {
    serviceTitle: "Best custom software Development Services",
    servicePara: "Need a mobile app that feels effortless to use? A custom platform tailored to your business operations? We’re here to create software that not only works flawlessly but also makes your brand stand out. Let’s build software that doesn’t just meet expectations—it exceeds them. At Bunnx, it’s more than development; it’s about creating something exceptional. Ready to get started?",
    slug: "custom-software-development-services"
  },
  {
    serviceTitle: "Our Software Consulting Services",
    servicePara: "When it comes to optimizing your software ecosystem, we’re here to make sense of the chaos and deliver solutions that work. Here’s how we can help:",
    slug: "software-consulting-services-india"
  },
  {
    serviceTitle: "Best IT Consulting Services",
    servicePara: "If you’re upgrading old systems or starting fresh with something new, we focus on creating new technologies. Let’s redefine what your IT systems can do for you.  Our team creates solutions that help you make better decisions backed by data.",
    slug: "it-consulting-services-india"
  },
  {
    serviceTitle: "Best Mobile App Development Services",
    servicePara: "Our team makes an app that not only looks amazing but works on all devices. Need integrations? We will connect your app with a lot of payment gateways, CRMs, APIs, and more. The team at our mobile app development company also works on push notifications to keep users engaged, data analytics to refine strategies.",
    slug: "mobile-app-development-company-india"
  },

  {
    serviceTitle: "Best API Development & Integration Services",
    servicePara: "As a leading API Development & Integration company in India, we specialize in delivering robust custom API Development & Integration services. Our expertise lies in crafting APIs that drive innovation, enhance integration, and streamline workflows across diverse platforms and applications.",
    slug: "api-integration-and-development-services"
  },
  {
    serviceTitle: "Best Agile Consulting Services",
    servicePara: "Together, we’ll break the chains of outdated practices, empower your team to collaborate like never before. Ready to see your business thrive in real-time? Let’s make it happen!",
    slug: "agile-consulting-services-india"
  },
  {
    serviceTitle: "Best CMS Development Services",
    servicePara: "Your CMS should work for you—not the other way around. Let’s build a system that takes the stress out of website management so you can focus on what really matters, creating great content and growing your business awareness.",
    slug: "cms-development-services-india"
  },
  {
    serviceTitle: "Best Application Development Services",
    servicePara: "Looking to bring your app idea to life? Bunnx, the best application development company is here to help you.",
    slug: "application-development-company-india"
  },
  {
    serviceTitle: "Best Full Stack Development Services",
    servicePara: "As a leading full stack development company in India, we specialize in creating dynamic, end-to-end solutions designed to drive business growth.",
    slug: "full-stack-development-services"
  },
  {
    serviceTitle: "Best Ecommerce Development Services",
    servicePara: "As a reputable eCommerce website development company in India, we create feature-loaded, that attracts online surfers to boost your Business.",
    slug: "ecommerce-web-development"
  },
  {
    serviceTitle: "Best Ecommerce Web Consulting Services",
    servicePara: "With our eCommerce consulting services, we’ll help you build a shopping experience your customers can’t resist. From smoother checkouts to eye-catching designs, let’s make your online store the one everyone’s talking about.",
    slug: "ecommerce-consulting-services"
  },
  {
    serviceTitle: "Best Web Application Development Services",
    servicePara: "While creating the first sketch or releasing the final product, we shape every element with care. We don’t believe in providing you with less accurate solutions. Instead, our team builds with purpose. If you're looking for something beyond the usual, let's create something that stands out. Here’s what our web development company offers: ",
    slug: "web-application-development-company-india"
  },
  {
    serviceTitle: "Best Website Development Services",
    servicePara: "At the core of our website development services is a commitment to building reliable and efficient systems that power high-performing websites. Our expertise lies in crafting solid solutions that support user-friendly and feature-rich websites.",
    slug: "website-development-services-india"
  },
  {
    serviceTitle: "Best Ecommerce Implementation Services",
    servicePara: "We build apps that work on any device to give users an enjoyable experience. If you want your app to handle payments, connect with customer databases, or pull data from third-party services, we’ve got it covered. And with built-in data tracking, you’ll always know what’s working and what needs a tweak.",
    slug: "ecommerce-implementation"
  },
  {
    serviceTitle: "Best Shopify Development Services",
    servicePara: "Our Shopify web development services India leverage the power of Shopify to craft dynamic online stores that align perfectly with your business needs.",
    slug: "shopify-development-company-in-india"
  },
  {
    serviceTitle: "Best Ecommerce Maintenance & Support Services",
    servicePara: "Your eCommerce website should do more than just exist—it should pull people in, keep them engaged, and make every visit worth their time. We bring years of expertise to the table to provide the best eCommerce website maintenance & support services.",
    slug: "ecommerce-maintenance-and-support-services"
  },
  {
    serviceTitle: "Best Ecommerce Maintenance & Support Services",
    servicePara: "Your eCommerce website should do more than just exist—it should pull people in, keep them engaged, and make every visit worth their time. We bring years of expertise to the table to provide the best eCommerce website maintenance & support services.",
    slug: "ecommerce-maintenance-and-support-services"
  },



  {
    "serviceTitle": "Top IT Staff Augmentation Services for Scaling Fast",
    "servicePara": "Finding the right tech talent shouldn’t slow down your growth. Our IT staff augmentation services empower you with skilled developers, engineers, and IT professionals on demand—seamlessly integrating with your team and delivering results from day one.",
    "slug": "it-staff-augmentation-services-india"
  },
  {
    "serviceTitle": "Hire Software Developers Who Deliver Excellence",
    "servicePara": "Your next big project deserves top-tier developers. We help you hire experienced software developers who align with your vision, work with your tech stack, and accelerate your development cycle—without the hiring headaches.",
    "slug": "hire-software-developer-india"
  },
  {
    "serviceTitle": "Reliable IT Outsourcing Services for Businesses Worldwide",
    "servicePara": "Reduce costs, scale faster, and access world-class tech talent with our IT outsourcing services. From software development to infrastructure management, we ensure your business stays agile and competitive in a fast-evolving digital landscape.",
    "slug": "it-outsourcing-services"
  },
  {
    "serviceTitle": "Hire a Dedicated Development Team That Feels In-House",
    "servicePara": "Forget one-size-fits-all solutions. Our dedicated development teams are tailored to your project needs, offering specialized expertise, seamless collaboration, and a commitment to your success—just like an in-house team, but better.",
    "slug": "hire-dedicated-development-team-india"
  },
  {
    "serviceTitle": "Offshore Software Development Center in India – Your Tech Hub",
    "servicePara": "Build your dream tech team without borders. Our offshore software development center in India provides skilled developers, robust infrastructure, and cost-effective solutions—so you can scale your software projects with confidence and efficiency.",
    "slug": "offshore-dedicated-development-center-india"
  },
  {
    "serviceTitle": "Leading Software Development Outsourcing Company in India",
    "servicePara": "Outsourcing software development isn’t just about cost savings—it’s about innovation, expertise, and efficiency. As a trusted software development outsourcing company in India, we build cutting-edge solutions tailored to your needs, ensuring top-notch quality and timely delivery.",
    "slug": "outsourcing-software-development-in-india"
  }


]





const Services = ({ serviceDetailPageSlug, extractNameFromSlug }) => {


  var matchingServices = services.filter(service =>
    service.fetchOnSlug.includes(serviceDetailPageSlug)
  );

  matchingServices = matchingServices.length > 0 ? matchingServices : defaultServices;

  const servicesHeadParaObj = OurServicesHeadPara?.find((serviceHeadPara) => serviceHeadPara?.slug === serviceDetailPageSlug) || {
    serviceTitle: `${extractNameFromSlug}`,
    servicePara: `We are a top ${extractNameFromSlug} service provider in India, focused on delivering the best user solutions. We build powerful, integrated websites that make navigation smoother and drive business growth seamlessly. Our innovative range of front end development services include`,
  };

  return (
    <>
      <section className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10">

        <h2 className='font-semibold text-orange-500 text-lg'>Our Services</h2>
        {
          servicesHeadParaObj &&
          <>
            <h4 className='font-semibold text-3xl my-2'>{servicesHeadParaObj.serviceTitle}</h4>
            <p className='text-md text-gray-800'>{createLinkedContent(servicesHeadParaObj.servicePara, keywordToSlug, serviceDetailPageSlug)}</p>
          </>
        }

        <div className='relative flex justify-start flex-wrap gap-10 mt-6'>

          {matchingServices.map((service, i) => (
            <div key={i} className="border hover:border-orange-200 rounded-xl shadow-sm p-4 flex itemscenter flex-col w-96  relative">

              <h3 className='font-semibold my-3 pb-3 text-gray-800 text-xl border-b border-orange-500'>{service.title}</h3>

              <p className='text-gray-600'>{createLinkedContent(service.description, keywordToSlug, serviceDetailPageSlug)}</p>

              {service?.ctaRedirectUrl &&
                <div className='flex justify-end items-center mt-2'>
                  <Link href={`${service?.ctaRedirectUrl}`} className='flex items-center justify-center text-orange-500 p-1 pl-3 font-medium text-md'><span className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full'> Know more </span> <span className='px-1'> <IoArrowForward /> </span></Link>
                </div>
              }

            </div>
          ))
          }



        </div>

      </section>
    </>
  )
}

export default Services