"use client";

import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { createLinkedContent } from '@/utils/LinkBuilder';


const keywordToSlug = {
    "outsourcing software development": "it-outsourcing-services",
    "custom application development company": "custom-software-development-services",
    "white-label software development services": "it-outsourcing-services",
    "Front-End Development companies": "front-end-development-services-india",
    "Front-End Development company": "front-end-development-services-india",
    "back-end development agency": "back-end-development-services-india",
    "software development services": "software-development-company-in-india",
    "custom software consulting services": "software-consulting-services-india",
    "IT consulting services India": "it-consulting-services-india",
    "CRM software developers company": "crm-software-development-company-india",
};


const faqData = {
    "it-outsourcing-services": [

        {
            id: "default-2",
            question: "Why Choose Bunnx for Software Engineering, Consulting, and Outsourcing?",
            answer: {
                type: "list",
                para: "Bunnx offers a highly skilled team dedicated to delivering quality software solutions. Here’s why we stand out:",
                content: [
                    "Over 675 developers capable of handling complex projects.",
                    "Expertise across a wide range of technologies.",
                    "Known for delivering high-standard, reliable work.",
                    "Experience across diverse sectors, bringing valuable insights."
                ]
            }
        },
        {
            id: "default-1",
            question: "How much does it cost to outsource software development to India?",
            answer: {
                type: "text",
                content: "The cost of outsourcing software development to India varies based on the project scope, application complexity, and specific needs—like features, integrations, APIs, animations, localization, backend requirements, cross-platform support, and more. If you share a general idea of your project, we’ll gladly provide you with an estimated timeline and cost tailored to your goals."
            }
        },
        {
            id: "default-4",
            question: "I own a digital agency. Do you offer white-label software development services?",
            answer: {
                type: "text",
                content: "Absolutely! We offer full white-label software development services across B2B, B2C, and SaaS models. Our approach is transparent and collaborative, understanding that every business is unique. We work closely with our clients to meet specific needs and offer 24/7 support to keep your business running smoothly. Reach out to one of our experts to learn more about how our white-label solutions can support your agency."
            }
        },
        {
            id: "default-3",
            question: "Is outsourcing software development risky? How do you protect intellectual property and data?",
            answer: {
                type: "list",
                para: "Outsourcing software development can be secure and straightforward when you partner with a trusted company. At ValueCoders, we prioritize your intellectual property (IP) and data protection through various measures:",
                content: [
                    "Signing a Non-Disclosure Agreement (NDA)",
                    "Complying with industry-specific regulations like GDPR and HIPAA",
                    "Adhering to secure coding and robust data protection practices",
                    "Using firewalls, encryption, and VPNs to safeguard against online threats",
                    "Carefully verifying all employees before they join our team"
                ]
            }
        },
        {
            id: "default-6",
            question: "What kind of developers can I hire through your service?",
            answer: {
                type: "text",
                content: "We offer a wide range of developers, including PHP, React, Node.js, Python, Angular, .NET, and many more. Whether you need frontend, backend, or full-stack developers, we can connect you with experts who fit your project’s unique requirements."
            }
        },
        {
            id: "default-5",
            question: "Do you offer project management support along with developers?",
            answer: {
                type: "text",
                content: "Yes, we can provide project management support to help oversee your project, track progress, and ensure smooth communication between your team and our developers. This option is particularly helpful for clients who want end-to-end support."
            }
        },
        {
            id: "default-7",
            question: "How do you handle intellectual property and data security?",
            answer: {
                type: "text",
                content: "We take IP and data security very seriously. We sign Non-Disclosure Agreements (NDAs) and adhere to industry standards for secure coding, data protection, and compliance with GDPR and other relevant regulations. You retain full ownership of the work completed."
            }
        },
        {
            id: "default-8",
            question: "I want to outsource software development. What engagement options do you offer?",
            answer: {
                type: "paragraph",
                headPara: "At Bunnx, we offer a variety of engagement models to suit your specific project requirements. Whether you need a dedicated team of coders for an ongoing project or just a few extra hands for a one-off task, we have an engagement model that will fit your needs.",
                content: [
                    { title: "Dedicated Team", para: "Dedicated team model comprises a PM, SW Engineer, QA Engineer, and other roles defined for each specific project." },
                    { title: "Staff Augmentation", para: "We provide extra talent to boost your specific projects. This extended team works as a part of your local team, attending your daily meetings and reporting directly to your manager." },
                    { title: "Offshore Development Center", para: "We also provide a dedicated software development office with all required infrastructure and employees in India. Our ODC model helps you save budget and speed up development, recruiting, and optimizing accounting and HR." },
                ]
            }
        },

    ],
    "back-end-development-services-india": [
        {
            id: "backend-1",
            question: "What technologies do you specialize in?",
            answer: {
                type: "text",
                content:
                    "We specialize in a wide range of back-end technologies, including Python (Django, Flask), Java (Spring Boot), Node.js (Express, NestJS), Ruby on Rails, Go, and PHP (Laravel). We also have expertise in various databases, cloud platforms, and containerization technologies.",
            },
        },
        {
            id: "backend-2",
            question: "How do you ensure the security of our applications?",
            answer: {
                type: "text",
                content:
                    "We prioritize security throughout the development process. This includes implementing robust authentication and authorization mechanisms, conducting regular security audits and penetration testing.",
            },
        },
        {
            id: "backend-3",
            question: "What is your approach to project management?",
            answer: {
                type: "text",
                content:
                    "We follow agile methodologies, emphasizing iterative development, close collaboration, and regular communication with our clients. Our back-end development agency uses project management tools to track progress.",
            },
        },
        {
            id: "backend-4",
            question: "Do you offer post-launch support?",
            answer: {
                type: "text",
                content:
                    "Yes, we provide comprehensive post-launch support, including bug fixes, maintenance, performance optimization, and ongoing support to ensure the continued smooth operation of your application.",
            },
        },
        {
            id: "backend-5",
            question: "How do you ensure the scalability of your solutions?",
            answer: {
                type: "text",
                content:
                    "We design and develop solutions using microservices architecture, cloud-native technologies, and containerization techniques to accommodate growing user bases and data volumes.",
            },
        },
        {
            id: "backend-6",
            question:
                "What are the benefits of hiring your back-end development services?",
            answer: {
                type: "text",
                content:
                    "By hiring our services, you gain access to a team of skilled engineers, accelerate development timelines, reduce costs, and benefit from our expertise.",
            },
        },
    ],
    "front-end-development-services-india": [
        {
            id: "default-1",
            question: "What technologies do Front-End Development companies use?",
            answer: {
                type: "text",
                content:
                    "Top Front-End Development companies work with a variety of technologies, including React.js, Angular, and Vue.js.",
            },
        },
        {
            id: "default-2",
            question: "Do Front-End Development companies offer post-launch support?",
            answer: {
                type: "text",
                content:
                    "Yes, most Front-End Development companies provide post-launch support and maintenance services, including bug fixes, updates, performance optimization, and feature enhancements to keep your application running smoothly.",
            },
        },
        {
            id: "default-3",
            question: "Why should I hire a Front-End Development company?",
            answer: {
                type: "text",
                content:
                    "Hiring a Front-End Development company ensures you get end-to-end development services under one roof. They offer expertise in multiple programming languages, frameworks, and tools, enabling them to deliver seamless, user-friendly, and robust applications tailored to your business needs.",
            },
        },
        {
            id: "default-4",
            question:
                "How does a Front-End Development company ensure scalability and security?",
            answer: {
                type: "text",
                content:
                    "A reliable company designs systems with scalability in mind, using modular architecture and cloud solutions to handle growth. For security, they implement best practices like data encryption, secure authentication, and regular vulnerability assessments to protect your application from threats.",
            },
        },
        {
            id: "default-5",
            question: "Do Front-End Development companies offer post-launch support?",
            answer: {
                type: "text",
                content:
                    "Yes, most Front-End Development companies provide post-launch support and maintenance services, including bug fixes, updates, performance optimization, and feature enhancements.",
            },
        },
    ],

    "software-development-company-in-india": [
        {
            "id": "default-1",
            "question": "What software technologies does Bunnx use for development?",
            "answer": {
                "type": "text",
                "content": "We use a wide range of advanced software tools and technologies. And it depends on the type of software you are looking for."
            }
        },
        {
            "id": "default-2",
            "question": "What’s your pricing model?",
            "answer": {
                "type": "text",
                "content": "We have an affordable pricing model for the projects we take on. Our estimates will go well with your budget and provide you with a great value."
            }
        },
        {
            "id": "default-3",
            "question": "Do you provide end-to-end software delivery?",
            "answer": {
                "type": "text",
                "content": "Absolutely! From design and development to implementation, integration, setup, and post-deployment support – we handle it all. Our team builds only industry standard projects. With our software development services, we save your time and resources."
            }
        },
        {
            "id": "default-4",
            "question": "Will you match my timeline?",
            "answer": {
                "type": "text",
                "content": "Yes, we will! After discussing what your requirements are, we create a plan and agree on a timeline together. We always commit to delivering projects on time with minimal hurdles."
            }
        },
        {
            "id": "default-5",
            "question": "Do you provide quality software delivery?",
            "answer": {
                "type": "text",
                "content": "Quality is our top priority and we’re known for it. At every stage of development, we integrate thorough testing to catch and fix issues early. When you work with us, you can trust that quality will never be a concern."
            }
        },
        {
            "id": "default-6",
            "question": "Do you offer after-sales software development services?",
            "answer": {
                "type": "text",
                "content": "Yes, we provide support even after your project is delivered. We’re here to help with everything including updates, maintenance, or guidance."
            }
        }
    ],

    "crm-software-development-company-india": [
        {
            "id": "crm-1",
            "question": "How do you make my CRM systems genuine and authentic?",
            "answer": {
                "type": "text",
                "content": "We are using modular designs, cloud-native platforms like Docker and Kubernetes. These methods will help your company handle traffic of your visitors, transactions, and data without issues."
            }
        },
        {
            "id": "crm-2",
            "question": "Do you have post-launch support for my CRM systems?",
            "answer": {
                "type": "text",
                "content": "Yes, we provide full post-launch support for your CRM system. This makes us fix any issues, update the software you currently have, and add new features to keep it up to date."
            }
        },
        {
            "id": "crm-3",
            "question": "What is your approach to managing CRM development projects?",
            "answer": {
                "type": "text",
                "content": "We manage CRM development projects by following an iterative approach. With tools like Jira and Trello, we keep clients updated on progress and deliver updates in stages. It allows a big room for feedback throughout the process."
            }
        },
        {
            "id": "crm-4",
            "question": "How do you handle security in CRM systems?",
            "answer": {
                "type": "text",
                "content": "We have tools such as OAuth and JWT for authentication of systems, use SSL/TLS encryption for data in transit, and perform regular security audits to safeguard your CRM and customer information from threats."
            }
        },
        {
            "id": "crm-5",
            "question": "What technologies are you using for CRM software development?",
            "answer": {
                "type": "text",
                "content": "Our CRM software developers company have been using back-end technologies like Python, Java, Node.js, and PHP to make your CRM systems. For data storage and management, we have been relying on databases such as MySQL, PostgreSQL, and MongoDB."
            }
        },
        {
            "id": "crm-6",
            "question": "Why should we choose your CRM development services?",
            "answer": {
                "type": "text",
                "content": "Choosing us means working with a team that understands your business and creates CRM systems. We use proven technologies and techniques to build CRM systems and for long-term support."
            }
        }
    ],

    "custom-software-development-services": [
        {
            "id": "csd-1",
            "question": "What tech stack do you use for custom software development?",
            "answer": {
                "type": "text",
                "content": "Our custom application development company uses React, Angular, and Vue.js for the front end. On the back end, the experts at Bunnx stick to Node.js and Python for building mobile apps. And when it comes to the cloud, we have extreme trust in AWS, Azure, and Google Cloud."
            }
        },
        {
            "id": "csd-2",
            "question": "Can you integrate third-party services with my custom software?",
            "answer": {
                "type": "text",
                "content": "At Bunnx, we sync with CRM systems or add analytics platforms. Our team has also got the API expertise to integrate third-party services with your custom software."
            }
        },
        {
            "id": "csd-3",
            "question": "Do you have a support team after launching our custom software?",
            "answer": {
                "type": "text",
                "content": "Of course! Launch day isn’t the finish line—it’s just the start. We do lower the bugs, tweak features, and roll out updates."
            }
        },
        {
            "id": "csd-4",
            "question": "How will you manage my project?",
            "answer": {
                "type": "text",
                "content": "We keep things transparent and organized. Using tools such as Jira, our experts break your project into bite-sized phases. This way, you can share feedback at every step. It will make us stay laser-focused on what matters to your project."
            }
        },
        {
            "id": "csd-5",
            "question": "Do you create mobile apps using Flutter?",
            "answer": {
                "type": "text",
                "content": "Yes, we do! If it’s iOS or Android, Flutter and React Native are our go-to tools for creating apps. Which one we use depends on your app—whether you’re going for a UI, fast performance, or both."
            }
        },
        {
            "id": "csd-6",
            "question": "How do you get safe custom software?",
            "answer": {
                "type": "text",
                "content": "Security is mandated into every stage of our development process. From encrypting data with SSL/TLS protocols to implementing OAuth and JWT for authentication, our custom application development company takes no chances."
            }
        }
    ],

    "software-consulting-services-india": [
        {
            "id": "csd-1",
            "question": "How do you make sure about our software security?",
            "answer": {
                "type": "text",
                "content": "We take security seriously. From secure authentication methods like OAuth and JWT to SSL/TLS encryption for data, we ensure your software and data are safe. With our regular security audits, you can keep your system protected from threats."
            }
        },
        {
            "id": "csd-2",
            "question": "How do you make software consulting services reliable?",
            "answer": {
                "type": "text",
                "content": "We take a practical approach to software consulting. This is done by analyzing your business and recommendations from our team for the right technologies. Our custom software consulting services keep things simple and easy for your team to manage."
            }
        },
        {
            "id": "csd-3",
            "question": "Do you offer support after delivering the solution?",
            "answer": {
                "type": "text",
                "content": "Yes. The work at Bunnx doesn’t stop once the project is delivered. We stick around to help you fix any issues and add new features to your software. Think of it as having a trusted tech partner by your side."
            }
        },
        {
            "id": "csd-4",
            "question": "How do you manage software consultancy projects?",
            "answer": {
                "type": "text",
                "content": "We like to keep things transparent and collaborative. Using tools like Trello and Jira, we break down the work into smaller steps, so you know exactly what’s happening and when. This way, you can give feedback at every stage, ensuring we’re always moving in the right direction."
            }
        },
        {
            "id": "csd-5",
            "question": "What technologies do you rely on in your software consultancy services?",
            "answer": {
                "type": "text",
                "content": "As we work with a range of technologies, we still prefer Python, Java, Node.js, and PHP for back-end. For databases, we stick to options like MySQL, PostgreSQL, and MongoDB. And when it comes to architecture, we make sure it’s modern and scalable."
            }
        },
        {
            "id": "csd-6",
            "question": "Why should you choose us for software consultancy?",
            "answer": {
                "type": "text",
                "content": "Because we genuinely care about solving your challenges, not just delivering a product. We take the time to understand your business, suggest the right solutions, and stick with you for the long haul. It’s not just about building great software—it’s about building trust."
            }
        }
    ],

    "it-consulting-services-india": [
        {
            "id": "1",
            "question": "What services are included in IT consulting?",
            "answer": {
                "type": "text",
                "content": "IT consulting services India help businesses set up new systems, fix issues in the old apps, or get advice on how to use emerging tech. If you work with the latest technology, your system will remain updated and the business will grow."
            }
        },
        {
            "id": "2",
            "question": "How can an IT consulting company help my business?",
            "answer": {
                "type": "text",
                "content": "An IT consulting services India can make your team work smarter. They can maintain the security of your systems. Our agency will also analyze the current IT structure and install new systems."
            }
        },
        {
            "id": "3",
            "question": "Why should I go for a custom IT solution instead of buying something off the shelf?",
            "answer": {
                "type": "text",
                "content": "Off-the-shelf software might work for some, but custom IT solutions are built just for you. They’re designed only after looking at how your business works and whether it will be able to adopt advanced tech or not."
            }
        },
        {
            "id": "4",
            "question": "What does working with an IT consultant look like?",
            "answer": {
                "type": "text",
                "content": "Our team will reach out to you for a chat on the tech challenges you're facing. Then, together, we will figure out the best way to tackle those challenges. From there, we can set things to keep you updated every step of the way."
            }
        },
        {
            "id": "5",
            "question": "Should I invest a lot of my budget for IT consulting services?",
            "answer": {
                "type": "text",
                "content": "The cost depends on what you need and how big or small your project is. Custom-built services might require a bigger investment upfront, but they save you time and reduce the need for constant fixes. If you need just a little assistance, you'll not be required to allocate a higher budget on this."
            }
        },
        {
            "id": "6",
            "question": "Can IT consultants help with data security?",
            "answer": {
                "type": "text",
                "content": "Data security is a priority of every IT consultant at Bunnx. They protect your customer information with measures, like encryption and access control. Plus, it keeps your systems compliant with privacy laws. So, you don’t have to worry about your data being exposed."
            }
        },
        {
            "id": "7",
            "question": "How do I know when I need IT consulting?",
            "answer": {
                "type": "text",
                "content": "If you're struggling with various tech problems you can’t solve on your own, that’s when you should reach out to an IT consultant. We’re here to help you with technical and make sure everything works like it should."
            }
        }
    ],

    "mobile-app-development-company-india": [
        {
            "id": "1",
            "question": "What technologies will you use for mobile app development?",
            "answer": {
                "type": "text",
                "content": "We have a mix of technologies and our usage depends on what type of project you have. For apps, we work with Swift for iOS and Kotlin for Android. Also, if you need a cross-platform app, we use React Native and Flutter. This way, we can pick what works best for your mobile application development."
            }
        },
        {
            "id": "2",
            "question": "How do you keep mobile apps secure?",
            "answer": {
                "type": "text",
                "content": "We stick to the strategy of creating apps that have clean content, safe codes, encrypt sensitive data, and follow the latest industry rules. We also test and review the app so that we quickly catch and fix app issues."
            }
        },
        {
            "id": "3",
            "question": "What’s your approach to project management for mobile app development?",
            "answer": {
                "type": "text",
                "content": "When it comes to working for our clients, we work with agility. We break the project into smaller tasks, stay in regular contact with you, and make changes based on your feedback. You’ll get regular updates on what’s happening so you always know where things stand."
            }
        },
        {
            "id": "4",
            "question": "Do you provide post-launch support for mobile apps?",
            "answer": {
                "type": "text",
                "content": "Yes, we do! After your app is live, we’re still here to help. If it’s fixing bugs or handling a lot of people on the app at one time, we'll do it all. Our team always helps you become the best among competitors."
            }
        },
        {
            "id": "5",
            "question": "How do you make sure the app can grow with the business?",
            "answer": {
                "type": "text",
                "content": "We have designers that make apps with the future in mind. From writing codes that work to handling data, we do everything that will help you grow your business."
            }
        },
        {
            "id": "6",
            "question": "Why should I choose your mobile app development services?",
            "answer": {
                "type": "text",
                "content": "When you work with us, you’re not just getting a development team—you’re getting a partner for a long time. That's because we care about your app as much as you do. And that's why our team makes the whole process easy and transparent for you."
            }
        }
    ],

    "api-integration-and-development-services": [
        {
            "id": "1",
            "question": "How do you ensure the scalability of your solutions?",
            "answer": {
                "type": "text",
                "content": "Scalability is built into our development process by leveraging cloud-native technologies, microservices architecture, and containerized environments. This ensures your system can handle growing user demands, traffic spikes, and larger datasets without performance degradation."
            }
        },
        {
            "id": "2",
            "question": "What technologies do you specialize in?",
            "answer": {
                "type": "text",
                "content": "We specialize in a wide range of programming languages and frameworks, including Python, Node.js, Java, Ruby on Rails, and PHP. Our expertise extends to relational and non-relational databases, cloud platforms like AWS and Azure, and containerization tools like Docker. These tools allow us to address challenges such as real-time data processing, complex system integrations, and global deployments."
            }
        },
        {
            "id": "3",
            "question": "How do you address security concerns in API Development & Integration?",
            "answer": {
                "type": "text",
                "content": "Security is integrated at every stage of development. We implement advanced authentication protocols, data encryption techniques, and API security layers. Regular vulnerability assessments and compliance checks ensure your application meets industry standards and remains safeguarded against threats."
            }
        },
        {
            "id": "4",
            "question": "Do you provide post-launch support?",
            "answer": {
                "type": "text",
                "content": "We offer extensive post-launch support, addressing issues such as system monitoring, bug fixes, and performance tuning. Our team also provides updates and feature enhancements, ensuring your application evolves with user needs and market demands."
            }
        },
        {
            "id": "5",
            "question": "How do you tackle data management challenges?",
            "answer": {
                "type": "text",
                "content": "We handle data management by designing optimized database schemas, implementing indexing for faster queries, and employing data partitioning techniques. These practices ensure seamless data handling, even with large volumes, and maintain data integrity across systems."
            }
        },
        {
            "id": "6",
            "question": "How do you ensure timely delivery of projects?",
            "answer": {
                "type": "text",
                "content": "We achieve timely project delivery by breaking down tasks into sprints and using agile workflows. Regular updates and reviews ensure alignment with the timeline, and potential delays are addressed proactively through contingency planning."
            }
        }
    ],


    "agile-consulting-services-india": [
        {
            "id": "1",
            "question": "How does Agile actually work for my business?",
            "answer": {
                "type": "text",
                "content": "Agile is like a team huddle before the big game. It’s all about breaking down your big plans into small, doable steps. But we make sure there are regular check-ins and tweaks along the way so the process feels less overwhelming and more manageable."
            }
        },
        {
            "id": "2",
            "question": "What kind of businesses can benefit from Agile?",
            "answer": {
                "type": "text",
                "content": "From tech startups to retail giants, Agile can work for any team that wants to deliver projects with accuracy and within deadlines. If you are managing a product launch, a website revamp, or even day-to-day operations, Agile adds structure without the stress."
            }
        },
        {
            "id": "3",
            "question": "Will Agile assist my team?",
            "answer": {
                "type": "text",
                "content": "Agile consultants will work with your workflow and collaborate without upending everything. It’s not about forcing change but about making small adjustments so your team works smarter, not harder."
            }
        },
        {
            "id": "4",
            "question": "Do we need any special tool or software for Agile?",
            "answer": {
                "type": "text",
                "content": "Nope, you don’t need anything fancy! Tools like Trello, Asana, or even simple spreadsheets work great. Agile is more about the mindset than the tools—regular check-ins, task prioritization, and a clear plan are what really make it work."
            }
        },
        {
            "id": "5",
            "question": "Why should I choose your team for Agile consulting services?",
            "answer": {
                "type": "text",
                "content": "We’re not about forcing textbook solutions onto your business. Our team takes time to understand how you already work and show you how Agile consulting services can bring out the best in your experts. We stick with you every step of the way, guiding you through the process without any confusion."
            }
        }
    ],

    "application-development-company-india": [
        {
            "id": "1",
            "question": "What technologies do you use for application development?",
            "answer": {
                "type": "text",
                "content": "Our application development company uses React, Angular, and Vue.js for front-end development; Node.js, Python, and Java for back-end development for mobile apps. We also work with AWS, Azure, and Google Cloud."
            }
        },
        {
            "id": "2",
            "question": "Can you connect third-party services to the applications?",
            "answer": {
                "type": "text",
                "content": "At Bunnx, we use APIs and third-party tools like payment gateways, CRM systems, or analytics platforms. This helps us in extending the functionality of your app."
            }
        },
        {
            "id": "3",
            "question": "Do you provide support after launching application development?",
            "answer": {
                "type": "text",
                "content": "We do offer support for bug fixing and adding new features in your app."
            }
        },
        {
            "id": "4",
            "question": "How will you manage my projects?",
            "answer": {
                "type": "text",
                "content": "We follow methods and break the work into smaller phases to allow for feedback. Jira also keeps us on track and communicates with clients."
            }
        },
        {
            "id": "5",
            "question": "Do you create mobile apps on Flutter?",
            "answer": {
                "type": "text",
                "content": "We develop your apps for iOS and Android using Flutter or React Native. Whatever language we use to code your app depends on the type of application you want us to create."
            }
        },
        {
            "id": "6",
            "question": "How do we build safe applications?",
            "answer": {
                "type": "text",
                "content": "Security is built into every step of our application development process because we use encryption (e.g., SSL/TLS, OAuth and JWT). Our team also follows standards like GDPR, HIPAA, and PCI-DSS when required."
            }
        }
    ],

    "website-development-services-india": [
        {
            "id": "1",
            "question": "What technologies do you specialize in?",
            "answer": {
                "type": "text",
                "content": "We work with a variety of web technologies, including front-end frameworks like React and Angular, back-end frameworks such as WordPress, Laravel, and Django, as well as database and cloud platforms like AWS and Azure."
            }
        },
        {
            "id": "2",
            "question": "How do you ensure the security of our websites?",
            "answer": {
                "type": "text",
                "content": "We implement strong encryption, secure login systems, and conduct regular security checks. Our team stays updated on the latest security trends to protect your users' data."
            }
        },
        {
            "id": "3",
            "question": "What is your approach to project management?",
            "answer": {
                "type": "text",
                "content": "We use project management tools like Trello and Jira to organize tasks and track progress. Our process ensures clear communication and transparency throughout the project."
            }
        },
        {
            "id": "4",
            "question": "Do you offer post-launch support?",
            "answer": {
                "type": "text",
                "content": "Yes, we provide ongoing support, including maintenance, updates, bug fixes, and assistance with any issues after your website goes live."
            }
        },
        {
            "id": "5",
            "question": "How do you ensure the scalability of your websites?",
            "answer": {
                "type": "text",
                "content": "We design websites with modular architecture and optimized code, ensuring they can handle increasing traffic and feature expansions as your business grows."
            }
        },
        {
            "id": "6",
            "question": "How do you ensure the user-friendliness of the website or app?",
            "answer": {
                "type": "text",
                "content": "Our design team focuses on creating intuitive and visually appealing interfaces with smooth navigation, clear calls to action, and an optimal user experience."
            }
        }
    ],

    "cms-development-services-india": [
        {
            "id": "1",
            "question": "What technologies do you use for CMS development?",
            "answer": {
                "type": "text",
                "content": "We pick the right tools and not just what’s trendy. If your site is packed with content and needs an easy way to manage updates, WordPress or Drupal are solid choices. Need more control? Laravel or Django offer a more customized approach. And if speed is your priority, headless CMS options like Strapi or Contentful keep things lightning-fast."
            }
        },
        {
            "id": "2",
            "question": "How do you make CMS websites load faster?",
            "answer": {
                "type": "text",
                "content": "We keep things moving by compressing images, trimming unnecessary code, and cutting out scripts that don’t pull their weight. Instead of making visitors load everything at once, our team uses global delivery networks."
            }
        },
        {
            "id": "3",
            "question": "Do you provide support after the website goes live?",
            "answer": {
                "type": "text",
                "content": "We’re here for the long haul. If something breaks, we fix it. If you need updates, we handle them. And if you ever feel stuck using your CMS, we walk you through it. Think of us as your tech partners, not just developers who disappear after launch."
            }
        },
        {
            "id": "4",
            "question": "Do you offer help after the site is live?",
            "answer": {
                "type": "text",
                "content": "Yes, just like anything else, Websites need care. If something’s off, we’ll fix it. If you need fresh features, we’ll add them. And if you ever feel lost using your CMS, we’re just a message away. The relationship doesn’t end when the site goes live—it’s just getting started."
            }
        },
        {
            "id": "5",
            "question": "Can your CMS handle a sudden spike in traffic?",
            "answer": {
                "type": "text",
                "content": "No one wants their website to crash right when it’s needed the most. That’s why we build CMS platforms that can handle thousands of visitors without breaking a sweat. We set up smart traffic distribution, keep an eye on resource usage, and prepare your site for those big moments—so you don’t have to worry when your content goes viral."
            }
        },
        {
            "id": "6",
            "question": "What do you do to keep CMS platforms secure?",
            "answer": {
                "type": "text",
                "content": "A good CMS makes content easy to manage, but not for the wrong people. We lock down access, keep software up to date, and run regular security checks. Encryption and security patches are baked into our process. Your content is yours—no one else should get their hands on it."
            }
        }
    ],


    "full-stack-development-services": [
        {
            "id": "1",
            "question": "What is included in your full stack development services?",
            "answer": {
                "type": "text",
                "content": "Our full stack development covers both the front-end and back-end of your application. We handle everything from crafting intuitive user interfaces to building scalable back-end systems that work seamlessly together. Whether it's designing, coding, or deploying, we manage it all to deliver a complete solution."
            }
        },
        {
            "id": "2",
            "question": "How do you ensure the user experience is top-notch?",
            "answer": {
                "type": "text",
                "content": "We believe a great app starts with a great user experience. Our full stack development company focuses on designing simple, responsive, and user-friendly interfaces. We make sure every interaction feels intuitive, ensuring your users have the best possible experience on any device."
            }
        },
        {
            "id": "3",
            "question": "What tools do you use for development?",
            "answer": {
                "type": "text",
                "content": "We work with a variety of tools and technologies to build robust applications, including React, Angular, Node.js, Django, and more. For databases, we use options like MySQL, MongoDB, and PostgreSQL. Our approach is to select the best tools based on your project needs."
            }
        },
        {
            "id": "4",
            "question": "How do you handle project timelines?",
            "answer": {
                "type": "text",
                "content": "We believe in transparency and communication. We break down the development process into clear milestones and deliverables, keeping you updated every step of the way. Using agile methods in our full stack development services, we adapt to any changes while meeting deadlines without compromising on quality."
            }
        },
        {
            "id": "5",
            "question": "Do you provide ongoing support after launch?",
            "answer": {
                "type": "text",
                "content": "Absolutely! Once your application is live, we offer continuous support. From fixing bugs to performance tweaks, we're always here to help with any maintenance or updates needed to keep your app performing at its best."
            }
        },
        {
            "id": "6",
            "question": "What makes your full stack services different from others?",
            "answer": {
                "type": "text",
                "content": "We focus on creating solutions that are tailored to your specific needs, not just generic templates. Our team’s expertise spans both front-end and back-end technologies for performance, security, and user satisfaction."
            }
        }
    ],


    "ecommerce-development-company-india": [
        {
            "id": "1",
            "question": "Which technology do you use while creating eCommerce websites?",
            "answer": {
                "type": "text",
                "content": "We use a number of technologies customized for your eCommerce requirements. This includes databases like MySQL and MongoDB for effective data management, as well as frameworks for back-end programming like Node.js, Python, and PHP. Our experience as an eCommerce development company guarantees that we choose the best resources to create safe and scalable online stores."
            }
        },
        {
            "id": "2",
            "question": "How can you make sure eCommerce stores load quickly?",
            "answer": {
                "type": "text",
                "content": "The efficiency of eCommerce depends on speed. We use strategies like caching, effective database queries, and reducing code bloat to maximize website performance. As an eCommerce development services, we additionally guarantee responsive designs and optimize load speeds on all platforms by utilizing content delivery networks (CDNs)."
            }
        },
        {
            "id": "3",
            "question": "How do you ensure fast loading times for eCommerce websites?",
            "answer": {
                "type": "text",
                "content": "Speed is critical for ecommerce success. We optimize website performance through techniques like caching, efficient database queries, and minimizing code bloat. We also ensure responsive designs and use content delivery networks (CDNs) to enhance load times across all devices."
            }
        },
        {
            "id": "4",
            "question": "Do you provide support after launch?",
            "answer": {
                "type": "text",
                "content": "Yes, we offer full post-launch support which involves bug fixes, upkeep, performance enhancements, and continuous assistance to guarantee your program keeps running well."
            }
        },
        {
            "id": "5",
            "question": "When sales are at their highest, can your solutions manage excessive traffic?",
            "answer": {
                "type": "text",
                "content": "Yes, we look into scalability while designing e-commerce platforms, using load balancing and cloud services to manage unexpected spikes in traffic."
            }
        },
        {
            "id": "6",
            "question": "How is the security of eCommerce platforms managed?",
            "answer": {
                "type": "text",
                "content": "When creating eCommerce websites, security comes first. To protect your platform and client data, we use encryption for sensitive data, secure payment gateway integration, and frequent vulnerability checks."
            }
        }
    ],


    "ecommerce-consulting-services": [
        {
            "id": "1",
            "question": "How can you help my online store stand out?",
            "answer": {
                "type": "text",
                "content": "It’s not just about a pretty website or a flashy app. We dive into the nitty-gritty—like making your product pages irresistible, streamlining the checkout process, and building trust with your customers."
            }
        },
        {
            "id": "2",
            "question": "Will you help me handle the tech side of things?",
            "answer": {
                "type": "text",
                "content": "Absolutely. If you are setting up payment systems, managing inventory tools, or making a website that works like a charm during the busiest sales, Bunnx is what you should choose. We are the best eCommerce consultant in India that makes the tech part feel less daunting so you can focus on growing your business."
            }
        },
        {
            "id": "3",
            "question": "What kind of businesses do you work with?",
            "answer": {
                "type": "text",
                "content": "We’ve helped everyone from niche boutique stores to large-scale online retailers. Whether you’re just starting or looking to level up your existing store, we know how to get you where you want to be."
            }
        },
        {
            "id": "4",
            "question": "Can Bunnx help me attract more customers?",
            "answer": {
                "type": "text",
                "content": "Of course! Our experts design loyalty programs, create personalized marketing strategies to keep your customers coming back for more. Plus, we’ll help you understand what’s working and what’s not, so you can keep refining your approach."
            }
        },
        {
            "id": "5",
            "question": "Why should I choose your eCommerce consulting services?",
            "answer": {
                "type": "text",
                "content": "Because we care about making your success feel personal. We’re not just consultants—we’re your brainstorming buddies, your troubleshooting team, and your biggest cheerleaders. When your store thrives, we celebrate right alongside you."
            }
        },
    ],


    "web-application-development-company-india": [
        {
            "id": "1",
            "question": "How long does it take to build a web app?",
            "answer": {
                "type": "text",
                "content": "The timeline depends on the project’s complexity. A basic app with standard features can take a few weeks, while a custom-built platform with advanced functionality might take months. Breaking the project into stages speeds up development."
            }
        },
        {
            "id": "2",
            "question": "Will my web app work on different devices?",
            "answer": {
                "type": "text",
                "content": "Yes, web apps are built to run across desktops, tablets, and mobile browsers. A responsive design approach makes sure the layout adjusts based on screen size."
            }
        },
        {
            "id": "3",
            "question": "Can I update my web app later with new features?",
            "answer": {
                "type": "text",
                "content": "Web apps aren’t set in stone. Features can be added over time to make apps that work as your business grows. Planning for future upgrades from the start makes expansion easier."
            }
        },
        {
            "id": "4",
            "question": "How much does web development cost?",
            "answer": {
                "type": "text",
                "content": "Costs vary based on features, design, and the development approach. A simple app will be more affordable, while a feature-rich platform requires more time and resources."
            }
        },
        {
            "id": "5",
            "question": "What technologies do you use for web development?",
            "answer": {
                "type": "text",
                "content": "The choice depends on the project requirements. Popular options include JavaScript with React and Angular, backend solutions like Node.js, Python, or PHP, and databases like PostgreSQL and MongoDB."
            }
        },
        {
            "id": "6",
            "question": "Do you offer support after the app is launched?",
            "answer": {
                "type": "text",
                "content": "Web apps need maintenance to fix bugs, improve speed, and add new features. Check-ins help keep the app up-to-date and run with no slow speed and interruptions."
            }
        }
    ],

    "ecommerce-implementation": [
        {
            "id": "1",
            "question": "How long does it take to build a web app?",
            "answer": {
                "type": "text",
                "content": "The timeline depends on the project’s complexity. A basic app with standard features can take a few weeks, while a custom-built platform with advanced functionality might take months. Breaking the project into stages speeds up development."
            }
        },
        {
            "id": "2",
            "question": "Will my web app work on different devices?",
            "answer": {
                "type": "text",
                "content": "Yes, web apps are built to run across desktops, tablets, and mobile browsers. A responsive design approach makes sure the layout adjusts based on screen size."
            }
        },
        {
            "id": "3",
            "question": "Can I update my web app later with new features?",
            "answer": {
                "type": "text",
                "content": "Web apps aren’t set in stone. Features can be added over time to make apps that work as your business grows. Planning for future upgrades from the start makes expansion easier."
            }
        },
        {
            "id": "4",
            "question": "How much does web development cost?",
            "answer": {
                "type": "text",
                "content": "Costs vary based on features, design, and the development approach. A simple app will be more affordable, while a feature-rich platform requires more time and resources."
            }
        },
        {
            "id": "5",
            "question": "What technologies do you use for web development?",
            "answer": {
                "type": "text",
                "content": "The choice depends on the project requirements. Popular options include JavaScript with React and Angular, backend solutions like Node.js, Python, or PHP, and databases like PostgreSQL and MongoDB."
            }
        },
        {
            "id": "6",
            "question": "Do you offer support after the app is launched?",
            "answer": {
                "type": "text",
                "content": "Web apps need maintenance to fix bugs, improve speed, and add new features. Check-ins help keep the app up-to-date and run with no slow speed and interruptions."
            }
        }
    ],

    "shopify-development-company-in-india": [
        {
            "id": "1",
            "question": "How long does it take to build a web app?",
            "answer": {
                "type": "text",
                "content": "The timeline depends on the project’s complexity. A basic app with standard features can take a few weeks, while a custom-built platform with advanced functionality might take months. Breaking the project into stages speeds up development."
            }
        },
        {
            "id": "2",
            "question": "Will my web app work on different devices?",
            "answer": {
                "type": "text",
                "content": "Yes, web apps are built to run across desktops, tablets, and mobile browsers. A responsive design approach makes sure the layout adjusts based on screen size."
            }
        },
        {
            "id": "3",
            "question": "Can I update my web app later with new features?",
            "answer": {
                "type": "text",
                "content": "Web apps aren’t set in stone. Features can be added over time to make apps that work as your business grows. Planning for future upgrades from the start makes expansion easier."
            }
        },
        {
            "id": "4",
            "question": "How much does web development cost?",
            "answer": {
                "type": "text",
                "content": "Costs vary based on features, design, and the development approach. A simple app will be more affordable, while a feature-rich platform requires more time and resources."
            }
        },
        {
            "id": "5",
            "question": "What technologies do you use for web development?",
            "answer": {
                "type": "text",
                "content": "The choice depends on the project requirements. Popular options include JavaScript with React and Angular, backend solutions like Node.js, Python, or PHP, and databases like PostgreSQL and MongoDB."
            }
        },
        {
            "id": "6",
            "question": "Do you offer support after the app is launched?",
            "answer": {
                "type": "text",
                "content": "Web apps need maintenance to fix bugs, improve speed, and add new features. Check-ins help keep the app up-to-date and run with no slow speed and interruptions."
            }
        }
    ],

    "ecommerce-maintenance-and-support-services": [
        {
            "id": "1",
            "question": "Which technology do you use while maintaining e-commerce websites?",
            "answer": {
                "type": "text",
                "content": "We use a combination of tried-and-true technologies and rely on databases like MySQL and MongoDB to handle your data. For the back-end, we use dependable frameworks such as Node.js, Python, and PHP, so your website remains fast."
            }
        },
        {
            "id": "2",
            "question": "How do you make sure the website remains fast after launch?",
            "answer": {
                "type": "text",
                "content": "Bunnx team uses a mix of strategies to make sure your customers never experience delays. We also make sure your website is mobile-friendly and looks great on any device, so your customers won’t have to wait around."
            }
        },
        {
            "id": "3",
            "question": "How do you keep everything running during high traffic times?",
            "answer": {
                "type": "text",
                "content": "We know that your busiest days can cause your site to get a lot of attention. That’s why we make sure your site is built with traffic spikes in mind. Using things like load balancing and advanced server management, we make sure your platform can handle a crowd."
            }
        },
        {
            "id": "4",
            "question": "Do you provide eCommerce website maintenance and support services after the website goes live?",
            "answer": {
                "type": "text",
                "content": "Our job isn’t done just because your eCommerce site is live. We provide ongoing support to fix any bugs and improve performance. If it’s tweaking something that’s not quite right or keeping up with software updates, we’re here for you."
            }
        },
        {
            "id": "5",
            "question": "Can your eCommerce maintenance and support solutions handle unexpected issues?",
            "answer": {
                "type": "text",
                "content": "Things don’t always go according to plan, and we understand that. Our maintenance services include quick troubleshooting to fix any issues that arise, whether it’s a broken link, slow loading speed, or something else. We’re fast to react without a lot of downtime."
            }
        },
        {
            "id": "6",
            "question": "How is the security of e-commerce platforms maintained?",
            "answer": {
                "type": "text",
                "content": "We protect your data, but also your customers’ sensitive information. To safeguard everything, our team also uses encryption for payment data. They make sure transactions are safe and carry out regular vulnerability scans to stay ahead of any threats."
            }
        }
    ],

    "shopify-development-company-in-india": [
        {
            "id": "1",
            "question": "What is Shopify development?",
            "answer": {
                "type": "text",
                "content": "Shopify development refers to the process of building and customizing Shopify e-commerce websites. It includes designing unique themes, creating custom apps, and integrating third-party services."
            }
        },
        {
            "id": "2",
            "question": "Why should I choose Shopify for my e-commerce store?",
            "answer": {
                "type": "text",
                "content": "Shopify is a robust, scalable e-commerce platform that allows businesses to create customizable, mobile-friendly online stores. It provides an easy-to-use interface, secure payment integrations, inventory management, and a variety of apps and plugins to help businesses grow."
            }
        },
        {
            "id": "3",
            "question": "Can I customize my Shopify store?",
            "answer": {
                "type": "text",
                "content": "Yes, Shopify allows extensive customization options. You can modify existing themes, develop custom themes, and create personalized features through Shopify's API. Shopify developers can help ensure your store matches your branding and functional requirements."
            }
        },
        {
            "id": "4",
            "question": "How long does it take to develop a custom Shopify store?",
            "answer": {
                "type": "text",
                "content": "The development timeline for a custom Shopify store varies depending on the complexity of the project. A simple store with basic customization can take around 2–4 weeks, while more complex stores with advanced features, custom apps, and integrations may take 6–8 weeks or more."
            }
        },
        {
            "id": "5",
            "question": "Is Shopify secure for online transactions?",
            "answer": {
                "type": "text",
                "content": "Yes, Shopify is a highly secure platform. It offers SSL certification, PCI DSS compliance for payment processing, and continuous security updates. These measures protect your store and customer data."
            }
        },
        {
            "id": "6",
            "question": "Can I migrate my existing store to Shopify?",
            "answer": {
                "type": "text",
                "content": "Yes, Shopify provides migration services to help move your existing online store from platforms like WooCommerce, Magento, or BigCommerce. A migration expert ensures that all your products, customer data, and other critical information are safely transferred with minimal downtime."
            }
        }
    ],

    "ecommerce-implementation": [
        {
            "id": "1",
            "question": "How long does it take to set up an online store?",
            "answer": {
                "type": "text",
                "content": "A basic setup with a ready-made template can go live in a few days, while a fully custom-built store with features might take a few months."
            }
        },
        {
            "id": "2",
            "question": "Do I need technical skills to manage my store?",
            "answer": {
                "type": "text",
                "content": "Your store should be easy to update, even if you’ve never worked with an ecommerce site before. Adding products, changing prices, and handling orders should feel as simple as posting on social media. We set things up in a way that lets you handle the day-to-day without calling a developer every five minutes."
            }
        },
        {
            "id": "3",
            "question": "What’s the best platform for eCommerce platform implementation?",
            "answer": {
                "type": "text",
                "content": "Some platforms are great for small stores, while others work better for big brands with thousands of products. We help you pick the right one based on what you sell, how much control you want, and how you plan to grow."
            }
        },
        {
            "id": "4",
            "question": "How do payments and shipping work?",
            "answer": {
                "type": "text",
                "content": "Your store should accept payments the way your customers prefer credit cards, UPI, wallets, or even cash on delivery. Shipping is just as important. The right setup will connect you with reliable couriers and send automatic tracking updates."
            }
        },
        {
            "id": "5",
            "question": "Can I make changes after the store is live?",
            "answer": {
                "type": "text",
                "content": "Your business isn’t set in stone, and your store shouldn’t be either. You can add new features, update your design, or tweak your product catalog whenever you want."
            }
        },
        {
            "id": "6",
            "question": "What if something goes wrong after the launch of eCommerce implementation services?",
            "answer": {
                "type": "text",
                "content": "Sometimes things break or you might want to add new features. That’s why ongoing support is important. If it’s a quick fix or a bigger upgrade, an expert would figure out things alone."
            }
        }
    ],

    "woocommerce-development-services-india": [
        {
            "id": "1",
            "question": "What makes WooCommerce a good choice for my online store?",
            "answer": {
                "type": "text",
                "content": "WooCommerce is a powerful eCommerce platform built on WordPress, offering flexibility and ease of use. It is highly customizable, allowing you to adjust product pages and checkout flows."
            }
        },
        {
            "id": "2",
            "question": "Can I migrate my existing website to WooCommerce?",
            "answer": {
                "type": "text",
                "content": "Migrating your current website to WooCommerce is entirely possible. Our team specializes in helping businesses transition smoothly from other platforms."
            }
        },
        {
            "id": "3",
            "question": "Do I need to know coding to manage my WooCommerce store?",
            "answer": {
                "type": "text",
                "content": "With our WooCommerce development services, you can easily manage the dashboard. But if you do it all alone, you might need some basic coding knowledge or a developer’s help."
            }
        },
        {
            "id": "4",
            "question": "What types of payment gateways can I integrate with WooCommerce?",
            "answer": {
                "type": "text",
                "content": "WooCommerce supports a variety of payment gateways, from PayPal and Stripe to bank transfers and credit card processors. You can choose the options and set them up according to your business model."
            }
        },
        {
            "id": "5",
            "question": "How long does it take to set up a WooCommerce store?",
            "answer": {
                "type": "text",
                "content": "The timeline for setting up a WooCommerce store depends on the complexity of your requirements. A basic store can be up and running in just a few days, while a store with advanced features might take a few weeks."
            }
        },
        {
            "id": "6",
            "question": "Is WooCommerce development suitable for mobile shopping?",
            "answer": {
                "type": "text",
                "content": "WooCommerce is fully responsive, meaning it works well on all devices, from desktops to smartphones and tablets. Your customers will have a seamless shopping experience regardless of the device they use."
            }
        }
    ],

    "ecommerce-web-development": [
        {
            "id": "1",
            "question": "How long does it take to build an online store?",
            "answer": {
                "type": "text",
                "content": "If you’re going for a custom-built store with advanced features, it could take months. The best approach? Start with a base, get your store live, and keep improving along the way instead of waiting for the 'perfect' launch."
            }
        },
        {
            "id": "2",
            "question": "How much does it cost to create an eCommerce website?",
            "answer": {
                "type": "text",
                "content": "The price tag depends on design, features, and development style. A basic store with pre-made templates might cost a few thousand, while a platform with tools and functions can stretch into lakhs. There are additional costs such as hosting, payment gateways, and marketing."
            }
        },
        {
            "id": "3",
            "question": "Should I use an existing platform or build everything from scratch?",
            "answer": {
                "type": "text",
                "content": "If you want a quick setup, platforms like Shopify, Magento, or WooCommerce make sense, they come packed with ready-to-use tools."
            }
        },
        {
            "id": "4",
            "question": "What are the must-have features for an online store?",
            "answer": {
                "type": "text",
                "content": "Your store should be easy to browse, load quickly, and guide buyers to checkout. That's why our eCommerce web development company makes clear product pages, a cart system, multiple payment options, and a design. Extras like recommendations, live chat, and automated email follow-ups can help engage shoppers."
            }
        },
        {
            "id": "5",
            "question": "How do I get people to visit my store?",
            "answer": {
                "type": "text",
                "content": "A great store is useless if no one knows about it. Writing clear product descriptions and making checkout easy helps boost sales. On the marketing side, ads, social media promotions, and SEO help drive traffic. Customer reviews and testimonials also work wonders, as people tend to trust what others say before making a purchase."
            }
        },
        {
            "id": "6",
            "question": "How do I keep my store running without technical hiccups?",
            "answer": {
                "type": "text",
                "content": "No one likes a slow website or a checkout page that crashes at the last step. Regular maintenance keeps check for broken links, updating software, and keeping backups ready in case something goes wrong."
            }
        }
    ],

    "it-staff-augmentation-services-india": [
        {
            "id": "1",
            "question": "What exactly is staff augmentation, and how can it help my business?",
            "answer": {
                "type": "text",
                "content": "Staff augmentation involves bringing in skilled professionals from outside your company to work on projects or fill skill gaps in your team. If you need developers, designers, or marketers, this will let you quickly scale your team without the commitment of long-term hires."
            }
        },
        {
            "id": "2",
            "question": "How do I know if staff augmentation is the right choice for my company?",
            "answer": {
                "type": "text",
                "content": "Staff augmentation works well for companies looking for expertise on a temporary basis or when there's a need to meet project deadlines. If your business requires extra resources or specific projects, this model offers a great solution without the complexity of hiring full-time staff."
            }
        },
        {
            "id": "3",
            "question": "Can I hire remote staff through staff augmentation?",
            "answer": {
                "type": "text",
                "content": "Staff augmentation allows you to hire remote professionals. This is useful when you need skill sets but don't have access to local talent. By extending your team with remote workers, you gain access to a global pool of expertise."
            }
        },
        {
            "id": "4",
            "question": "How do I manage augmented staff?",
            "answer": {
                "type": "text",
                "content": "Managing augmented staff is similar to overseeing your internal team. Clear communication, defined roles, and regular check-ins are essential for keeping the work on track. You'll want to provide guidance and feedback, just like you would with in-house employees."
            }
        },
        {
            "id": "5",
            "question": "What's the typical duration for a staff augmentation engagement?",
            "answer": {
                "type": "text",
                "content": "Some engagements last for a few weeks, while others may extend for months. Staff augmentation is highly flexible. It helps in your adjustments of the duration as per your business."
            }
        },
        {
            "id": "6",
            "question": "How do I connect augmented staff into my existing team?",
            "answer": {
                "type": "text",
                "content": "Establish clear communication channels and set expectations from the start. You should also provide augmented staff with the tools, access to your project management system, and a clear understanding of your company culture."
            }
        }
    ],


    "hire-software-developer-india": [
        {
            "id": "1",
            "question": "How do I hire software developers for my project?",
            "answer": {
                "type": "text",
                "content": "Different projects require different skills. A mobile app developer isn't the same as someone who builds websites. Once you know what you need, look at past work, ask for references, and test their skills with a small task before committing."
            }
        },
        {
            "id": "2",
            "question": "Should I hire a freelancer or a full-time developer?",
            "answer": {
                "type": "text",
                "content": "If you need quick fixes or short-term work, a freelancer can be the best option. But if you're building something long-term, hire a dedicated developer or team."
            }
        },
        {
            "id": "3",
            "question": "What should I look for besides coding skills?",
            "answer": {
                "type": "text",
                "content": "Great developers do more than just write code. They think critically, solve problems, and communicate well. Someone who can explain their ideas clearly and adapt to challenges is worth more than someone who just follows instructions."
            }
        },
        {
            "id": "4",
            "question": "How do I avoid wasting money on the wrong hire?",
            "answer": {
                "type": "text",
                "content": "A bad hire can be expensive—missed deadlines, broken code, and wasted resources. To avoid this, check past projects, conduct trial tasks, and have a clear agreement in place before starting."
            }
        },
        {
            "id": "5",
            "question": "How much should I pay a software developer?",
            "answer": {
                "type": "text",
                "content": "Rates vary based on experience, location, and project complexity. While it's tempting to go for the cheapest option, experienced developers often save you money by getting things done right the first time."
            }
        },
        {
            "id": "6",
            "question": "What if the developer I hire isn't a good fit?",
            "answer": {
                "type": "text",
                "content": "The best approach is to start with a trial period or a small project before committing to a long-term contract. That way, you can see if they're the right fit before investing too much time and money."
            }
        }
    ],

    "it-outsourcing-services": [
        {
            "id": "1",
            "question": "Is IT outsourcing only for big companies?",
            "answer": {
                "type": "text",
                "content": "Small businesses, startups, and even solo entrepreneurs benefit just as much. If you need a single developer for a short-term fix or a whole team for a project, IT outsourcing lets you work with skilled professionals without the full-time salaries."
            }
        },
        {
            "id": "2",
            "question": "Will I lose control over my project if I outsource?",
            "answer": {
                "type": "text",
                "content": "As long as you set things up the right way, regular updates and a structured workflow will help you. Instead of micromanaging every step, you can review progress at important stages. Many businesses actually find outsourcing gives them more control because they can focus on strategy."
            }
        },
        {
            "id": "3",
            "question": "How do I make sure the work meets my standards?",
            "answer": {
                "type": "text",
                "content": "Quality depends on two things: hiring the right team and giving clear instructions. If you choose experienced developers who have a solid portfolio, half the battle is won. You must also clearly define what you expect."
            }
        },
        {
            "id": "4",
            "question": "Isn’t IT outsourcing expensive?",
            "answer": {
                "type": "text",
                "content": "It can be if you go in blindly. But if done right, outsourcing saves money compared to hiring in-house staff. A full-time developer means salaries, benefits, office costs, software licenses, and training. With outsourcing, you pay only for the work you need."
            }
        },
        {
            "id": "5",
            "question": "How do I pick the right IT outsourcing partner?",
            "answer": {
                "type": "text",
                "content": "A good IT outsourcing company is like a good restaurant: great service, excellent reviews, and a portfolio that proves they know what they’re doing."
            }
        },
        {
            "id": "6",
            "question": "What if I need changes after the project is done?",
            "answer": {
                "type": "text",
                "content": "Some outsourcing teams have post-launch support for bug fixes and small tweaks. Others may charge extra for extra work after delivery."
            }
        }
    ],

    "hire-dedicated-development-team-india": [
        {
            "id": "1",
            "question": "What is a dedicated development team?",
            "answer": {
                "type": "text",
                "content": "A dedicated development team is a group of professionals such as developers, designers, testers, and project managers. They function as an extension of your company and handle all technical aspects."
            }
        },
        {
            "id": "2",
            "question": "How does this model differ from hiring in-house developers?",
            "answer": {
                "type": "text",
                "content": "Hiring an in-house team means going through recruitment, onboarding, training, and managing payroll. A dedicated team is already experienced, ready to start, and requires no additional administrative effort from your side."
            }
        },
        {
            "id": "3",
            "question": "When is it a good idea to hire a dedicated team?",
            "answer": {
                "type": "text",
                "content": "If you have a long-term project or don’t want to spend time on recruitment, a dedicated team is a great choice. It also works well if you expect the project requirements to grow and want a team that can adapt along the way."
            }
        },
        {
            "id": "4",
            "question": "How do I find the right dedicated team?",
            "answer": {
                "type": "text",
                "content": "Look for companies with a strong track record, relevant experience, and positive client feedback. Communication is also important—choose a team that understands your project."
            }
        },
        {
            "id": "5",
            "question": "How does the development process work?",
            "answer": {
                "type": "text",
                "content": "First, the team is selected based on the skills required. Once assembled, they begin development in phases, with regular updates and discussions to keep things on track. Testing is done throughout the process to catch any issues early."
            }
        },
        {
            "id": "6",
            "question": "Can I communicate directly with the team?",
            "answer": {
                "type": "text",
                "content": "You’ll have direct access to the developers, designers, and project managers. Regular meetings, reports, and discussions help in tracking progress."
            }
        },
        {
            "id": "7",
            "question": "How is pricing structured?",
            "answer": {
                "type": "text",
                "content": "Most companies charge on a monthly or hourly basis, depending on the size of the team and the length of the project. Since you’re paying for dedicated experts, it’s an alternative to hiring full-time employees."
            }
        }
    ],

    "offshore-dedicated-development-center-india": [
        {
            "id": "1",
            "question": "What is an offshore dedicated centre?",
            "answer": {
                "type": "text",
                "content": "An offshore dedicated centre is a team of experts working exclusively for a company from a different country. It helps businesses expand their development team without setting up an office in another location."
            }
        },
        {
            "id": "2",
            "question": "How does an offshore dedicated centre reduce costs?",
            "answer": {
                "type": "text",
                "content": "Setting up an in-house team requires office space, salaries, and infrastructure. An offshore centre provides access to skilled professionals at lower costs."
            }
        },
        {
            "id": "3",
            "question": "What kind of services does an offshore dedicated centre provide?",
            "answer": {
                "type": "text",
                "content": "An offshore centre can handle software development, testing, support, and maintenance. Some teams also provide research, data analysis, and project management services."
            }
        },
        {
            "id": "4",
            "question": "How do I manage an offshore team?",
            "answer": {
                "type": "text",
                "content": "Regular communication, clear instructions, and project tracking tools help in managing an offshore team. Choosing a reliable partner with experienced professionals also makes collaboration easier."
            }
        },
        {
            "id": "5",
            "question": "What industries benefit from offshore development centres?",
            "answer": {
                "type": "text",
                "content": "Offshore teams are useful in various industries, including IT, healthcare, banking, retail, and manufacturing. Companies that require constant software updates or technical support often prefer this model."
            }
        },
        {
            "id": "6",
            "question": "How do I choose the right offshore development partner?",
            "answer": {
                "type": "text",
                "content": "Select a partner with a good track record, skilled professionals, and a strong communication system. Checking past work and speaking with previous clients can help you make the right choice."
            }
        }
    ],


    "outsourcing-software-development-in-india": [
        {
            "id": "1",
            "question": "Why should I outsource software development to India?",
            "answer": {
                "type": "text",
                "content": "India is home to some of the world's top engineering talent, offering high-quality development at a fraction of the cost. Whether you're a startup looking to scale fast or an enterprise seeking efficiency, outsourcing to India ensures access to skilled developers, 24/7 support due to time zone advantages, and a strong work ethic—all without the hassle of hiring in-house."
            }
        },
        {
            "id": "2",
            "question": "Will outsourcing affect the quality of my project?",
            "answer": {
                "type": "text",
                "content": "Not at all! Quality depends on choosing the right outsourcing partner. Top-tier outsourcing companies follow agile development, conduct rigorous testing, and maintain open communication to ensure the final product meets your expectations. You also get access to specialized talent, ensuring your project is handled by experts, not generalists."
            }
        },
        {
            "id": "3",
            "question": "I’ve heard communication is a challenge when outsourcing. How do you handle this?",
            "answer": {
                "type": "text",
                "content": "Great question! Communication can be a challenge with the wrong partner. We solve this by ensuring **real-time collaboration**, **daily stand-up meetings**, and **project managers** who act as a bridge between your team and ours. Tools like Slack, Zoom, and Jira ensure seamless updates so you're never left wondering about progress."
            }
        },
        {
            "id": "4",
            "question": "What if I need to scale my team up or down?",
            "answer": {
                "type": "text",
                "content": "Outsourcing gives you unmatched flexibility. Need to add more developers during peak times? No problem. Want to scale down once the core development is done? We adjust resources based on your needs—no hiring or firing headaches!"
            }
        },
        {
            "id": "5",
            "question": "How do you ensure my idea and data stay secure?",
            "answer": {
                "type": "text",
                "content": "We take security seriously. Every project starts with a **Non-Disclosure Agreement (NDA)**, and all data is handled with strict **access controls and encryption**. Our team follows **GDPR and ISO security standards**, so your intellectual property remains safe and sound."
            }
        },
        {
            "id": "6",
            "question": "What engagement models do you offer?",
            "answer": {
                "type": "text",
                "content": "We offer three flexible models: \n1️⃣ **Dedicated Team** – A team that works exclusively on your project, just like an in-house team. \n2️⃣ **Staff Augmentation** – Need extra hands? We add skilled engineers to your existing team. \n3️⃣ **Project-Based Outsourcing** – We handle everything from start to finish with a fixed scope and timeline."
            }
        },
        {
            "id": "7",
            "question": "How do I ensure transparency in project development?",
            "answer": {
                "type": "text",
                "content": "We provide **weekly reports, real-time dashboards, and milestone tracking** so you always know what’s happening. Plus, our developers work in an agile methodology, meaning you can review progress every sprint and request changes as needed!"
            }
        },
        {
            "id": "8",
            "question": "Can I test a small project before committing long-term?",
            "answer": {
                "type": "text",
                "content": "Absolutely! Many of our clients start with a small pilot project to evaluate our skills, communication, and process. Once satisfied, they scale up their engagement. Think of it as a ‘try before you buy’ model!"
            }
        },
        {
            "id": "9",
            "question": "How does outsourcing help my business grow?",
            "answer": {
                "type": "text",
                "content": "By outsourcing, you free up time and resources to focus on your core business while experts handle your development. This means **faster time to market, lower operational costs, and access to top-tier talent** without long-term hiring commitments. Plus, you can scale your team instantly as your business grows."
            }
        },
        {
            "id": "10",
            "question": "What industries do you specialize in?",
            "answer": {
                "type": "text",
                "content": "We’ve worked across various industries, including **FinTech, Healthcare, E-commerce, SaaS, EdTech, and AI/ML solutions**. No matter your industry, we customize our approach to meet your specific business needs."
            }
        }
    ],



    "hire-dedicated-technical-team-india": [
        {
            "id": "1",
            "question": "Why should I hire a dedicated technical team instead of freelancers?",
            "answer": {
                "type": "text",
                "content": "Think of freelancers as sprint runners and dedicated teams as marathon partners. While freelancers are great for quick tasks, dedicated teams become an extension of your vision - they learn your business inside out, share your goals, and stick with you through the entire journey. Plus, you avoid the constant onboarding headaches and knowledge gaps that come with rotating freelancers."
            }
        },
        {
            "id": "2",
            "question": "How quickly can a dedicated team start working on my project?",
            "answer": {
                "type": "text",
                "content": "We move at startup speed! Once we understand your needs, we can assemble your dream team within 2-3 weeks. While traditional hiring takes months, we've refined our talent-matching process to handpick the perfect technical minds for your specific challenge. By day one, your team is ready to dive in - no lengthy training periods or adjustment phases."
            }
        },
        {
            "id": "3",
            "question": "Will I have direct access to the developers or just a project manager?",
            "answer": {
                "type": "text",
                "content": "You'll have complete access to your entire team! We believe in breaking down communication barriers. Talk directly with your developers, designers, and architects through daily stand-ups, Slack channels, and video calls. Your project manager doesn't act as a gatekeeper but as a facilitator, ensuring everything runs smoothly while you maintain that crucial direct connection with your technical talent."
            }
        },
        {
            "id": "4",
            "question": "How do you ensure my dedicated team stays aligned with my company culture?",
            "answer": {
                "type": "text",
                "content": "Culture alignment is our secret sauce! We begin with immersive onboarding where your team learns not just your tech stack, but your company values, communication style, and business goals. We encourage regular virtual team-building activities and ensure your dedicated team participates in your company meetings and celebrations. They don't just work for you - they become true representatives of your brand and vision."
            }
        },
        {
            "id": "5",
            "question": "What if I need to scale my team up or down quickly?",
            "answer": {
                "type": "text",
                "content": "Flexibility is built into our DNA! Need to add specialized talent for a major feature? Done. Need to downsize after a product launch? No problem. Unlike traditional hiring with lengthy contracts, we can scale your team size within days - not months. This elasticity means you're never paying for idle resources or scrambling to find talent when opportunity knocks."
            }
        },
        {
            "id": "6",
            "question": "How do you handle intellectual property rights and confidentiality?",
            "answer": {
                "type": "text",
                "content": "Your ideas are your crown jewels, and we protect them accordingly. Every engagement begins with comprehensive NDAs and IP agreements ensuring everything your team creates belongs exclusively to you. We implement strict access controls, secure development environments, and regular security training. Your intellectual property isn't just legally protected - it's built into our operational security framework."
            }
        },
        {
            "id": "7",
            "question": "What if a developer on my team isn't the right fit?",
            "answer": {
                "type": "text",
                "content": "We believe in perfect matches, not forced relationships. If a team member isn't meeting expectations, we'll replace them within 48 hours - no questions asked. Our deep talent pool means we can quickly find alternatives without disrupting your project flow. We continuously monitor team performance and satisfaction, catching potential misalignments before they become problems."
            }
        },
        {
            "id": "8",
            "question": "How do you ensure code quality and maintainability?",
            "answer": {
                "type": "text",
                "content": "Quality isn't an afterthought - it's woven into our development process. Your team follows industry best practices including code reviews, automated testing, and continuous integration. We maintain comprehensive documentation and conduct regular knowledge-sharing sessions. The result? Clean, maintainable code that won't become a nightmare to update six months down the road."
            }
        },
        {
            "id": "9",
            "question": "What's the typical cost structure for a dedicated team?",
            "answer": {
                "type": "text",
                "content": "Our pricing is refreshingly transparent. You pay a monthly rate based on team composition and expertise levels - no hidden fees or surprise charges. This predictable cost structure typically saves 40-60% compared to local hiring. Plus, we handle all the overhead costs like equipment, software licenses, and office space, turning unpredictable capital expenses into manageable operational costs."
            }
        },
        {
            "id": "10",
            "question": "How do I know if my project is suitable for a dedicated team model?",
            "answer": {
                "type": "text",
                "content": "Dedicated teams shine for ongoing development needs, complex projects, or when you need specialized talent yesterday. They're perfect when you want the benefits of in-house developers without the hiring headaches. During our initial consultation, we'll honestly assess if this model works for your specific situation. For some short-term projects, we might even recommend project-based engagement instead - we're committed to finding the right fit, not just selling services."
            }
        }
    ]




};



const Faqs = ({ serviceDetailPageSlug }) => {

    const data = faqData[serviceDetailPageSlug] || faqData["software-development-company-in-india"];

    return (
        <section className="border-t border-gray-300 container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">
            <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">
                <div className="lg:w-[30%] w-full">
                    <h2 className="font-semibold text-orange-500 text-xl">FAQs</h2>
                    <h2 className="font-semibold text-3xl my-2">Ask what you want</h2>
                    <p className="text-lg text-gray-800">
                        Whether you require a complex enterprise software solution or
                        seamless software integration.
                    </p>
                </div>

                <div className="lg:w-[62%] w-full py-2">
                    <Accordion type="single" collapsible className="w-full">
                        {data.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="text-[17px] text-left text-gray-800 hover:no-underline">
                                    {faq.question || "No question available"}
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px] text-gray-700 my-6">

                                    {faq.answer?.type === "text" && faq.answer?.content && (
                                        <p>{createLinkedContent(faq?.answer?.content, keywordToSlug, serviceDetailPageSlug)}</p>
                                    )}

                                    {faq.answer?.type === "paragraph" && Array.isArray(faq.answer.content) && (
                                        <>
                                            {faq.answer.headPara && (
                                                <p className="mb-3">{faq.answer.headPara}</p>
                                            )}

                                            {faq.answer.content.map((item, index) => (
                                                <div key={index} className="mb-4 flex">
                                                    {item.para && item.title && <p> <strong>{item.title}:</strong> {item.para}</p>}
                                                </div>
                                            ))}

                                        </>


                                    )}

                                    {faq.answer?.type === "list" && (
                                        <>
                                            {/* Optional paragraph before the list */}
                                            {faq.answer.para && (
                                                <p className="mb-3">{faq.answer.para}</p>
                                            )}
                                            {/* List content */}
                                            {Array.isArray(faq.answer.content) && (
                                                <ul className='list-disc mt-6 list-inside space-y-2'>
                                                    {faq.answer.content.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}

                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </section>
    );
};

export default Faqs;
