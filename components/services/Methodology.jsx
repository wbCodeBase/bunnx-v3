'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

import Agile from "@/public/iconMethodology/scrum.png";
import Waterfall from "@/public/iconMethodology/waterfall-chart.png";
import Rapid from "@/public/iconMethodology/rapid.png";
import DevOps from "@/public/iconMethodology/devops.png";
import Meeting from "@/public/iconMethodology/meeting.png";
import Startup from "@/public/iconMethodology/startup.png";
import Migration from "@/public/iconMethodology/migration.png";
import Coding from "@/public/iconMethodology/coding.png";
import FeaturesValidation from "@/public/iconMethodology/integration.png";
import Backlog from "@/public/iconMethodology/backlog.png";
import RealTime from "@/public/iconMethodology/realTime.png";
import LaunchSupport from "@/public/iconMethodology/launchSupport.png";

import { createLinkedContent } from '@/utils/LinkBuilder';

const keywordToSlug = {
    'front end development': 'front-end-development-services-india',
    'software development services': 'software-development-company-in-india',
    'custom software development company': 'custom-software-development-services',
    'best IT consulting services in India': 'it-consulting-services-india',
    'back end development': 'back-end-development-services-india',
    'API Development & Integration Services': 'api-integration-and-development-services',
};


const contentBySlug = {
    "front-end-development-services-india": {
        h2: "Methodology",
        h4: "Get Smarter Applications with Effective Front End Solutions",
        p: "Our front end development strategies are specifically designed to improve usability, scalability, and performance. By combining user-centric design with technological competence, we enable organisations to provide seamless digital experiences.",
        steps: [
            {
                title: "Agile Development",
                description: "At Bunnx, we adopt an iterative approach, focusing on continuous feedback and swift iterations to ensure a polished and responsive user interface.",
                icon: Agile,
            },
            {
                title: "Waterfall Development",
                description: "For projects with well-defined requirements, we utilize the waterfall method to deliver front ends that meet exact specifications in a structured, phase-wise manner.",
                icon: Waterfall,
            },
            {
                title: "Rapid Development",
                description: "To tackle tight deadlines, we employ rapid development practices, building interface prototypes and refining them iteratively based on real-time user feedback.",
                icon: Rapid,
            },
            {
                title: "DevOps Development",
                description: "By implementing DevOps, Hidden Brains ensures streamlined collaboration between design and development, accelerating deployment while maintaining code quality and reliability.",
                icon: DevOps,
            },

        ]
    },
    "back-end-development-services-india": {
        h2: "Methodology",
        h4: "Get Smarter Applications with Effective Back End Solutions",
        p: "Our back end development strategies are specifically designed to improve usability, scalability, and performance. By combining user-centric design with technological competence, we enable organisations to provide digital experiences.",
        "steps": [
            {
                "title": "Custom API Development and Integration",
                "description": "At Bunnx, we create APIs and connect your back-end with other services. Our team is an expert in building RESTful and GraphQL APIs. This simplifies the process of integrating with third-party platforms and minimizes downtime during the process.",
                "icon": Agile
            },
            {
                "title": "Database Optimization and Management",
                "description": "At our company, we fine-tune your databases to handle data. We can work on multiple backend platforms like MySQL, PostgreSQL, or NoSQL. Not only that, our team can help you with advanced databases like MongoDB, too.",
                "icon": Waterfall
            },
            {
                "title": "Cloud Infrastructure and Deployment",
                "description": "We design systems on cloud platforms like AWS, Azure, or Google Cloud. Our team sets up cloud architectures that focus on quick uptime. We build backup systems to recover from outages.",
                "icon": Rapid
            },
            {
                "title": "Real-Time Data Processing",
                "description": "We have options for regular data updates for chat, notifications, or live data feeds. With tools like WebSockets, Kafka, and RabbitMQ, we stream high-volume data messages and provide instant updates across devices.",
                "icon": DevOps
            }
        ]
    },
    "software-development-company-in-india": {
        h2: "Methodology",
        h4: "Get Softwares that Require Low Maintenance",
        p: "Our software development services team works towards developing a more secure and advanced software solution by using technologies that are latest and fruitful.",
        steps: [
            {
                title: "Daily Sync Meetings",
                description: "The Scrum Master facilitates daily stand-ups to resolve blockers,  review progress, and other challenges faced by our team members.",
                icon: Meeting,
            },
            {
                title: "Project Initiation",
                description: "We kick off with bi-weekly sprints and planned rollouts. Our experts adhere to defined project timelines for this.",
                icon: Startup,
            },
            {
                title: "Task Implementation & Development",
                description: "Our team works in collaboration with your staff to execute tasks, address user stories, and move towards sprint objectives.",
                icon: Coding,
            },
            {
                title: "Feature Validation",
                description: "Quality Assurance Engineers are used to validate and test new features for good functionality and integration of your system.",
                icon: FeaturesValidation,
            },
            {
                title: "Backlog Management",
                description: "The software development services team takes full responsibility for updating the sprint backlog and making sure your projects are provided to you on time.",
                icon: Backlog,
            },
            {
                title: "Sprint Retrospectives",
                description: "Post-sprint reviews are made to identify areas of improvement,  check workflows of the team, and improve0 future sprint planning.",
                icon: Agile,
            },

        ]
    },
    "crm-software-development-company-india": {
        h2: "Methodology",
        h4: "Get Smarter Applications with Effective CRM Software Development Solutions",
        p: "We build real-time back-end systems that allow for communication and data updates across multiple users and devices. Our expertise includes setting up WebSockets, Kafka, and RabbitMQ to process streaming data, handle high-throughput messaging, and push notifications.",
        steps: [
            {
                title: "CRM Module Integration",
                description: "At Bunnx, we develop lead management pipelines with Django ORM or Hibernate. We also design contact tracking modules with indexed database queries. Our API development helps in integration with ERP systems, marketing automation tools, and analytics platforms.",
                icon: FeaturesValidation,
            },
            {
                title: "Advanced Customer Data Management",
                description: "We implement data management systems using SQL schemas for relational data in PostgreSQL or MySQL. The document-based NoSQL architectures with MongoDB or Couchbase are also used to manage unstructured customer interaction data.",
                icon: Agile,
            },
            {
                title: "Cloud-Native CRM Execution",
                description: "Some of the technologies we, at Bunnx, use are AWS EC2, S3, and RDS for application hosting and data storage. Azure Cosmos DB for globally distributed databases supporting low-latency customer queries.",
                icon: Coding,
            },
            {
                title: "Real-Time CRM Systems",
                description: "We build WebSocket-based notification for instant updates on lead or customer status. Event-driven architecture using Apache Kafka or RabbitMQ for high-throughput messaging and task queuing is also our go-to strategy.",
                icon: RealTime,
            }
        ]

    },

    "custom-software-development-services": {
        h2: "Methodology",
        h4: "Get Smarter Custom Softwares with Effective Custom Software Solutions",
        p: "Making custom software is all about solving the right problems in the smartest way. And our approach involves this as we deliver not just software, but solutions. Here's how custom software development company get it done:",
        steps: [
            {
                title: "Discovery and Strategy",
                description: "Every project starts with a question: what challenge are we solving? And hence, we’ll map out the big picture and focus on what matters most. Our team will hold detailed discussions to define your software’s purpose. We also have experts who share a shared understanding of the problem.",
                icon: FeaturesValidation
            },
            {
                title: "Sketching the Blueprint",
                description: "Before writing a single line of code, we make a solid foundation by creating a detailed plan of how your software will work and look. We will create user flow diagrams to visualize how users navigate the system.",
                icon: Agile
            },
            {
                title: "Making It Real",
                description: "This is where ideas take shape with our developers. They have been building clean and maintainable code for a long time. The experts at Bunnx code the front end for your interface and core features.",
                icon: Coding
            },
            {
                title: "Testing",
                description: "No software leaves our hands rigorous testing is done. For this, we run functional tests to verify every feature works as intended. Our plan also involves conducting performance testing, simulating real-world scenarios, creating detailed feedback reports and resolving issues.",
                icon: RealTime
            }
        ]

    },

    "software-consulting-services-india": {
        h2: "Methodology",
        h4: "Get Smarter Software with our Consultants",
        p: "We have IT software consulting services that allow for communication and data updates across multiple users and devices. We process streaming data and handle high-throughput messaging.",
        "steps": [
            {
                "title": "Getting to Know You",
                "description": "We start by a little chit-chat with you to understand your business and the challenges you're facing. It's an open conversation to grasp what's working, what's not, and where you want to go. This helps us figure out how we can assist you.",
                "icon": FeaturesValidation
            },
            {
                "title": "Crafting a Plan",
                "description": "We work on creating a plan that's just right for you. This involves outlining the steps we'll take together, the tools we'll use, and setting clear milestones. Think of it as drawing up a roadmap for our journey ahead.",
                "icon": Agile
            },
            {
                "title": "Recommending the Right Tools",
                "description": "With a plan in place, we suggest technologies and methods that fit your specific situation. Our goal is to find solutions that align with your business processes and help you achieve your objectives without unnecessary complexity.",
                "icon": Coding
            },
            {
                "title": "Walking You Through the Process",
                "description": "We don't just hand over a plan and leave you to it. The team will guide you through each step, working closely with your team to implement the solutions we've discussed. It's a collaborative effort to make sure everything fits into your operations.",
                "icon": RealTime
            }
        ]

    },


    "it-consulting-services-india": {
        h2: "Methodology",
        h4: "Get Smarter Applications with Effective IT Consulting Solutions",
        p: "Bring balance to your tech ecosystem with our experts. We have built methodologies to connect dots of your business ideas and give you the real advantage.",
        "steps": [
            {
                "title": "Back-End Systems",
                "description": "At Bunnx, the best IT consulting services in India, we create systems that keep users and devices connected. We use technologies like WebSockets for live communication, Kafka for managing high-volume data, and RabbitMQ for efficient message queuing. Our experts also make instant data synchronization across your platforms.",
                "icon": FeaturesValidation
            },
            {
                "title": "Modular System Integration",
                "description": "We build pipelines for data and system integration frameworks like Django ORM and Hibernate to simplify the management of relational data. Our expertise extends to APIs that connect your core systems with external platforms, such as ERP, analytics tools, or marketing automation software.",
                "icon": Agile
            },
            {
                "title": "Advanced Data Management Systems",
                "description": "Handling structured and unstructured data is at the core of what we do. If it’s setting up databases using PostgreSQL, MySQL or NoSQL for datasets, we design architectures that make data retrieval and management.",
                "icon": Coding
            },
            {
                "title": "Cloud-Native Solutions",
                "description": "Our team uses cloud platforms like AWS and EC2 for application deployment, S3 for storage, and RDS. For businesses requiring global reach, we also implement Azure Cosmos DB for distributed, low-latency database solutions.",
                "icon": RealTime
            },
            {
                "title": "Event-Driven Architectures",
                "description": "If you are building IT systems, you can rely on proven technologies like WebSockets for instant updates and Apache Kafka for task automation. This strategy makes sure that your systems are not just reactive but proactive.",
                "icon": Rapid
            }
        ]

    },

    "mobile-app-development-company-india": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Mobile App Solutions",
        "p": "Our mobile app development strategies include user-centric design with technological competence. With advanced tools and programming practices, we create mobile applications that are fast and feature-packed.",
        "steps": [
            {
                "title": "Platform-Specific Mobile Development",
                "description": "We build mobile apps natively for iOS using Swift and Objective-C, and for Android. The team also checks deep integration with platform-specific features like Siri, Face ID, Google Maps, and more.",
                "icon": FeaturesValidation
            },
            {
                "title": "API Development and Integration",
                "description": "We develop mobile-specific APIs to enhance connectivity between the app and back-end systems. At Bunnx, our developers fetch data rapidly and synchronize with third-party services. The team also provides you different payment gateways, social media platforms, and analytics tools.",
                "icon": Agile
            },
            {
                "title": "Cross-Platform App Solutions",
                "description": "Our mobile app development services involve usage of code languages like Flutter and React Native to create apps. It makes interfaces for better user experience no matter on which platform the app is being used.",
                "icon": Coding
            },
            {
                "title": "Advanced Mobile Database Management",
                "description": "The Bunnx experts have SQLite for local storage and cloud-hosted databases like Firebase Realtime Database, MongoDB Atlas, or Amazon DynamoDB. So, these solutions make high-speed query processing, offline functionality, and data syncing better.",
                "icon": RealTime
            }
        ]
    },

    "api-integration-and-development-services": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective API Solutions",
        "p": "Our API Development & Integration strategies are crafted to enhance usability, scalability, and performance. By leveraging cutting-edge technology, we empower organizations to deliver digital experiences.",
        "steps": [
            {
                "title": "API Development & Integration",
                "description": "At Bunnx, we specialize in Custom API Development & Integration Services to connect your systems with third-party platforms and streamline workflows. Our team builds secure RESTful and GraphQL APIs, ensuring smooth data exchange and integration with minimal downtime.",
                "icon": FeaturesValidation
            },
            {
                "title": "Database Optimization for APIs",
                "description": "Efficient data handling is at the core of our API Development & Integration Services. We optimize and structure relational databases (MySQL, PostgreSQL) and NoSQL solutions (MongoDB, DynamoDB) to support high-speed queries, scalable storage, and seamless API interactions.",
                "icon": Agile
            },
            {
                "title": "Cloud-Native API Solutions",
                "description": "Our API Integration Services leverage cloud platforms like AWS, Azure, and Google Cloud to deploy APIs with high availability and resilience. From designing serverless architectures to implementing disaster recovery strategies, we ensure cost-effective and robust cloud-based solutions.",
                "icon": Coding
            },
            {
                "title": "Real-Time API Development & Integration",
                "description": "We build APIs that power real-time data processing and communication. Using WebSockets, Apache Kafka, and RabbitMQ, we enable live updates, high-throughput messaging, and instant notifications across devices and platforms.",
                "icon": RealTime
            }
        ]
    },


    "agile-consulting-services-india": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Agile Consulting Solutions",
        "p": "Whether it’s refining your current processes or introducing new frameworks, we help you unlock smoother collaboration and faster project delivery. Our Agile consulting services follow the best methodology.",
        "steps": [
            {
                "title": "Let’s make Agile your superpower",
                "description": "We’ll help you bring Agile into your workflow in a way that feels natural, not forced. Whether it’s using Scrum to organize your sprints or Kanban to streamline your tasks, we’ll create an approach that works with how your team already operates.",
                "icon": FeaturesValidation
            },
            {
                "title": "Smooth processes, happy teams",
                "description": "Tired of complex workflows? We design systems that cut out the chaos and let your team focus on what they do best. With tools like Jira and automating repetitive tasks, we make teamwork feel like actual teamwork.",
                "icon": Agile
            },
            {
                "title": "Ready for growth, step by step",
                "description": "As your projects grow, your systems need to keep up. We’ll set up Agile processes that are flexible enough to scale with you, no matter how big your plans get. With a clear roadmap and tools that work behind the scenes, you’re all set to handle anything.",
                "icon": Coding
            },
            {
                "title": "Get Above Your Competitors",
                "description": "The planning for Agile consultation doesn’t stop here. We’ll help you stay on track and clear checkpoints so your projects are completed at the earliest. You’ll have everything you need to stay one step ahead.",
                "icon": RealTime
            }
        ]
    },

    "application-development-company-india": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Application Solutions",
        "p": "Creating an application requires complex problem solving and impactful solutions. But we have it all. Here’s our step-by-step approach to building applications that truly work:",
        "steps": [
            {
                "title": "Discovery and Planning",
                "description": "This is where the journey begins. We work with you to know the purpose of the application, identify the challenges it will solve, and outline a clear strategy for development. We host strategy sessions and research market trends.",
                "icon": FeaturesValidation
            },
            {
                "title": "Creating Data Models",
                "description": "Before building begins, we design the application’s structure and workflow. This phase involves creating wireframes and user flow diagrams. It's a finalized blueprint for development.",
                "icon": Agile
            },
            {
                "title": "Development in Action",
                "description": "Our developers code the application, bring every feature and interaction from the blueprint into reality. For this, we write modular code for front-end and back-end. We also integrate third-party tools and APIs.",
                "icon": Coding
            },
            {
                "title": "Rigorous Testing",
                "description": "We test every component thoroughly to identify and fix any flaws. This phase focuses on the quality and readiness of your app. Hence, we focus on running functional, performance, and security tests. Our experts also collect feedback from test users.",
                "icon": RealTime
            }
        ]
    },
    "website-development-services-india": {
        "h2": "Methodology",
        "h4": "Get the Best Interface with Effective Website Solutions",
        "p": "Our website development strategies are specifically designed to improve usability, scalability, and performance. By combining user-centric design with technological competence, we enable organisations to provide digital experiences.",
        "steps": [
            {
                "title": "Understanding Your Needs",
                "description": "At Bunnx, we help you define exactly what features and functions are needed. We work closely with you to ensure we’re on the same page from the start.",
                "icon": FeaturesValidation
            },
            {
                "title": "Designing with Purpose",
                "description": "Once we have a solid understanding of your needs, we move on to designing the user interface and experience. Our designs focus on clarity and ease of use, ensuring that users can navigate your site or app with minimal effort.",
                "icon": Agile
            },
            {
                "title": "Cloud Infrastructure and Deployment",
                "description": "Our team writes the code, integrates databases, and ensures everything works as intended. Whether it's adding complex functionalities or ensuring high-speed performance, we handle all the technical aspects to bring your application to life.",
                "icon": Coding
            },
            {
                "title": "Real-Time Data Processing",
                "description": "We rigorously test the application to identify any potential issues, from usability to functionality. Our team fixes any bugs and makes necessary improvements before launching. Once it’s live, we continue to monitor and refine it for optimal performance.",
                "icon": RealTime
            }
        ],
    },

    "cms-development-services-india": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective CMS Solutions",
        "p": "Our experts design contact tracking modules with indexed database queries so that you can pull up customer details in seconds. We build APIs that connect your CRM with ERP systems, marketing automation tools, and analytics platforms. It creates a connected ecosystem where everything talks to each other.",
        "steps": [
            {
                "title": "Conceptualization and Planning",
                "description": "Every great CMS starts with a clear vision. We take the time to understand your business, audience, and what you want to achieve. This helps us map out a strategy that turns ideas into a structured plan.",
                "icon": FeaturesValidation
            },
            {
                "title": "Design and Prototyping",
                "description": "Our design team focuses on creating layouts that feel natural to navigate and stay true to your brand. By developing wireframes and prototypes, we craft an interface that not only looks good but also makes content management effortless for your team.",
                "icon": Agile
            },
            {
                "title": "Development",
                "description": "Once the blueprint is ready, our developers get to work. We carefully construct the CMS, adding essential features and incorporating external tools where needed. The result? A strong foundation that keeps everything running without a hitch.",
                "icon": Coding
            },
            {
                "title": "Testing and Quality Assurance",
                "description": "No detail goes unchecked. Our quality assurance team runs multiple tests to catch any glitches, refines the user experience, and confirms that the CMS performs consistently across different devices and browsers.",
                "icon": RealTime
            },
            {
                "title": "Data Migration",
                "description": "Moving to a new system shouldn't feel like a disruption. We handle content migration with care, making sure nothing gets lost along the way. Plus, we guide your team step-by-step so they can confidently use the new platform.",
                "icon": Migration
            },
            {
                "title": "After Launch Support",
                "description": "Once everything is ready, we roll out your CMS in a way that minimizes interruptions. But our job doesn't end there—we stay by your side offering continuous support. Our team makes necessary improvements so your CMS keeps up with your growing business.",
                "icon": LaunchSupport
            }
        ]
    },

    "full-stack-development-services": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Full Stack Solutions",
        "p": "Our full stack development services are all about creating smart, scalable, and user-friendly applications. We blend modern technology with thoughtful design to build tools that not only work flawlessly but also feel right for your users.",
        "steps": [
            {
                "id": 1,
                "title": "API-Driven Connectivity for Superior Functionality",
                "description": "At our full stack development company, we create robust RESTful and GraphQL APIs that enable smooth communication between your front end, back end, and third-party services. We integrate with minimal downtime for your systems.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Back-End Powered by Modern Tech",
                "description": "Harness the power of cloud-native tools, serverless frameworks, and containerization technologies like Docker. Our back-end solutions offer high availability to handle increasing user demands without bottlenecks or downtime.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Front-End Frameworks for Immersive Interfaces",
                "description": "Our full stack services create visually stunning, interactive user interfaces with frameworks like React.js, Angular, and Vue.js. These technologies power modern designs, delivering responsive layouts and engaging experiences across all devices.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Real-Time Analytics",
                "description": "Integrate real-time data pipelines and advanced visualization tools directly into your application. From MongoDB to SQL-based systems, our solutions transform raw data into actionable insights.",
                "icon": RealTime
            }
        ]
    },

    "ecommerce-development-company-india": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Ecommerce Solutions",
        "p": "Our eCommerce development company in India specializes in creating user-friendly solutions designed for your organization's requirements.",
        "steps": [
            {
                "id": 1,
                "title": "Agile Development",
                "description": "Instead of building everything at once, development happens in small, manageable steps. Teams regularly test and improve the platform. It also makes room for feedback along the way. This method keeps projects from getting stuck in rigid plans and allows the final product.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Scrum Framework",
                "description": "Scrum is a focused and disciplined version of Agile. Work is divided into short cycles, where developers, testers, and stakeholders work together toward set goals. Daily check-ins help resolve issues on the go to keep progress steady. With a structured backlog of tasks, teams know exactly what to tackle next.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "DevOps Methodology",
                "description": "Bridging the gap between coding and deployment, DevOps speeds up the process of launching new features. Developers and operations teams work side by side to keep the platform running. Automated testing and continuous deployments make sure updates roll out without affecting daily operations.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Waterfall Model",
                "description": "Waterfall follows a step-by-step process, moving from planning to execution without looping back. It’s best for projects with a clear vision from the start, where major changes aren’t expected. Since each phase is well-defined, the development moves forward in a structured manner.",
                "icon": RealTime
            },
            {
                "id": 5,
                "title": "Lean Development",
                "description": "Lean strips away anything unnecessary and focuses only on what truly matters. The idea is to build the foundation fast—starting with an MVP and then modify it based on actual user feedback. This method is great for startups and businesses looking to test ideas before committing to full-scale development.",
                "icon": FeaturesValidation
            },
            {
                "id": 6,
                "title": "Microservices Architecture",
                "description": "Instead of building everything as one big block, microservices break an ecommerce platform into smaller and independent parts. Each service such as payments, product listings, or user authentication. This makes it easier to update, expand, and troubleshoot without affecting the entire system.",
                "icon": Agile
            }
        ]
    },

    "ecommerce-consulting-services": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective eCommerce Web Consulting Solutions",
        "p": "Our team is here to help you create an eCommerce website that not only works but works smarter—driving real value and connecting the dots for you and your team. Ready to take your customer relationships to the next level? Let’s get started.",
        "steps": [
            {
                "id": 1,
                "title": "Agile E-commerce Strategy",
                "description": "A flexible, iterative approach adapting to market trends and customer needs. It ensures quick implementation and continuous improvement by breaking projects into smaller sprints. Agile aligns business goals with actionable steps, fostering faster, more responsive development.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Data-Driven Decision Making",
                "description": "Using analytics to guide e-commerce strategies, it identifies customer behavior and sales trends. This optimizes marketing campaigns and product placements, ensuring decisions are backed by real-time data for informed choices. Data provides insights to optimize user experiences.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Conversion Rate Optimization (CRO)",
                "description": "Analyzing and optimizing the customer journey to maximize conversions. CRO increases sales without increasing traffic by addressing usability issues. Improve the conversion rates that will lead to better ROI and leads.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Omnichannel Integration",
                "description": "It helps create a seamless shopping experience across web, mobile, social media, and offline channels. With this, offer a consistent experience to your customers and boost their experience. Create a win-win situation for all.",
                "icon": RealTime
            },
            {
                "id": 5,
                "title": "End-to-End Platform Audits",
                "description": "Comprehensive audits of e-commerce platforms identify gaps and opportunities. This pinpoints technical and operational inefficiencies, recommending actionable improvements for performance. Ultimately platform audits can ensure a future-ready, optimized e-commerce presence.",
                "icon": FeaturesValidation
            },
            {
                "id": 6,
                "title": "Customer-Centric UX/UI Design",
                "description": "Designing intuitive and engaging interfaces tailored to your target audience. It improves navigation and usability, enhancing customer satisfaction. Great UX/UI increases conversion rates and reduces bounce rates by prioritizing user convenience and needs.",
                "icon": Agile
            }
        ]

    },


    "web-application-development-company-india": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Web App Solutions",
        "p": "Our web development strategies include user-centric design with technological competence. With advanced tools and programming practices, we create web applications that are fast and feature-packed.",

        "steps": [
            {
                "id": 1,
                "title": "Waterfall Methodology",
                "description": "The Waterfall model is a traditional and linear approach to software development. It begins with implementation, testing, and maintenance. However, each stage must be completed before moving on to the next.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Prototyping",
                "description": "Prototyping involves creating an early, simplified version of a web application to visualize its functionality before full-scale development. This allows developers to explore ideas through iterative feedback. Prototyping is particularly useful when the projects are not fully understood or are expected to evolve.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Web Application Design",
                "description": "Web application design process allows to plan the UI and know the application's structure across various screen sizes. If a design is extremely good, it improves accessibility and contributes to the application's growth.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Backend Framework",
                "description": "A backend framework is a collection of tools and libraries that provide a foundation for building the server-side components of a web application. This framework development offers pre-built modules for tasks such as database interactions, authentication, and routing.",
                "icon": RealTime
            },
            {
                "id": 5,
                "title": "Creating Wireframes",
                "description": "Wireframes are visual guides that outline the skeletal structure of a web application's interface. They serve as blueprints and illustrate the placement of elements such as navigation menus, content areas, and features.",
                "icon": FeaturesValidation
            }
        ]
    },



    "ecommerce-implementation": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with eCommerce Implementation",
        "p": "Building an online store requires making a product page and checkout button. It also needs a system that handles transactions, keeps inventory in sync, and delivers a good shopping experience. Here’s how we put that into action:",

        "steps": [
            {
                "id": 1,
                "title": "Platform-Specific Store Development",
                "description": "Choosing the right platform is the foundation of your store’s success. We develop stores on Shopify, WooCommerce, and Magento. Our team also configures tax rules, multi-currency support, and region-based pricing.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "API Development and Store Connectivity",
                "description": "An online store is a system that connects payment processors, shipping providers, and customer management tools. Hence, our team builds custom APIs to keep everything in sync. We connect third-party tools like CRM systems, analytics, and logistics providers.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Multi-Platform eCommerce Solutions",
                "description": "Customers shop on different devices, so your store should work without friction on desktops, tablets, and smartphones. We create adaptive storefronts that keep navigation and checkout better no matter the screen size.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Advanced Data Handling & Inventory Management",
                "description": "The Bunnx experts keep stock levels accurate across multiple warehouses or suppliers and require more than just a spreadsheet. We develop inventory systems that prevent overselling and automate stock updates.",
                "icon": RealTime
            },

        ]
    },


    "shopify-development-company-in-india": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective Shopify Solutions",
        "p": "Our Shopify development agency has strategies specifically designed to improve usability, scalability, and performance. By combining user-centric design with technological competence, we enable organisations to provide digital experiences.",

        "steps": [
            {
                "id": 5,
                "title": "Business-Centric Strategy Development",
                "description": "At Bunnx, the best Shopify development company in India, we create a strategy that aligns Shopify solutions with your business goals. This involves conducting an in-depth analysis of your market and competitors. We define your unique value propositions and key performance indicators (KPIs) to measure success effectively.",
                "icon": FeaturesValidation
            },
            {
                "id": 6,
                "title": "Modular and Scalable Architecture Design",
                "description": "Advanced functionalities like AI-based product recommendations are embedded into the architecture, along with third-party app and API integration to support enhanced store operations.",
                "icon": Agile
            },
            {
                "id": 7,
                "title": "Intelligent Customization and Automation",
                "description": "Intelligent automation is implemented to streamline inventory and order management processes, reducing manual workload. Personalized shopping experiences, powered by customer data insights, keep your users engaged.",
                "icon": Coding
            },
            {
                "id": 8,
                "title": "Continuous Innovation and Optimization",
                "description": "Our process doesn’t end with deployment. We monitor site performance and analyze user behavior. Regular updates are implemented to keep your store in sync with industry trends, while features like SEO optimization and speed enhancements.",
                "icon": RealTime
            },
        ]
    },


    "ecommerce-maintenance-and-support-services": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective eCommerce Maintenance and Support Solutions",
        "p": "Running an eCommerce store is about keeping it free from technical troubles. A slow checkout, a broken payment link, or stock updates that don’t sync can drive customers away in seconds. That’s where we come in. Our maintenance and support team keeps everything running properly.",

        "steps": [
            {
                "id": 9,
                "title": "CRO Audits and Stress Tests",
                "description": "Conversion Rate Optimization (CRO) audits help identify what’s working and what’s stopping potential buyers from making a purchase. By analyzing visitor behavior, testing different page elements and reviewing checkout processes. Stress tests are equally important—they simulate heavy traffic loads to check if your site can handle peak shopping seasons without crashing or slowing down.",
                "icon": FeaturesValidation
            },
            {
                "id": 10,
                "title": "Updating Product Information",
                "description": "Accurate product details are essential for gaining customer trust. Regularly updating descriptions, pricing, availability, and images keeps your catalog fresh and ensures shoppers find the latest information. Outdated listings can lead to confusion, abandoned carts, and even lost sales.",
                "icon": Agile
            },
            {
                "id": 11,
                "title": "Assessing Traffic, Leads, and Sales",
                "description": "Understanding how visitors interact with your store is key to making informed decisions. We regularly review website traffic, track lead generation, and analyze sales performance to spot patterns and uncover opportunities for growth. By diving into analytics, we can refine marketing strategies, tweak product offerings, and improve conversion paths to drive better results.",
                "icon": Coding
            },
            {
                "id": 12,
                "title": "Reviewing and Updating Plugin Files",
                "description": "E-commerce websites rely on various plugins and extensions for added functionality, from payment gateways to customer reviews. Over time, outdated or incompatible plugins can cause security risks or slow down your site.",
                "icon": RealTime
            },
            {
                "id": 13,
                "title": "Recovery Audits",
                "description": "If something goes wrong—be it a data breach, site crash, or revenue drop—a recovery audit helps pinpoint the issue and get things back on track. This process involves reviewing error logs, security patches, and backup systems to restore operations quickly.",
                "icon": FeaturesValidation
            }
        ]
    },

    "ecommerce-web-development": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective eCommerce Web Solutions",
        "p": "Our eCommerce web development services include user-centric design with technological competence. With advanced tools and programming practices, we create eCommerce applications that are feature-packed.",
        "steps": [
            {
                "id": 1,
                "title": "Online Multistore Expansion",
                "description": "Managing multiple stores shouldn’t feel like running different businesses. Our multistore framework lets you handle multiple locations, brands, or product catalogs from one place. Want region-specific pricing? No problem. We set up a system where you can tweak inventory, taxes, and shipping rules.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Online Marketplaces Built for Growth",
                "description": "A marketplace needs the right infrastructure. We develop platforms where vendors can set up shop, list products, and manage sales with ease. Customers get advanced search filters, price comparisons, and secure payment options, while sellers get an intuitive dashboard for tracking orders and analytics.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Web Portals for Retail Management",
                "description": "Retail businesses need more than a storefront; they need a system that brings everything together. Our web portals act as a control center, giving you tools to manage vendors and keep product catalogs up to date. Set up vendor processes, track sales data, and automate stock updates—all in one place.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Headless Commerce for Maximum Control",
                "description": "Want your store to look stunning on every device without rebuilding the backend? That’s where headless commerce comes in. We separate your online store’s frontend from its backend, giving you complete control over how it looks and functions.",
                "icon": RealTime
            },
            {
                "id": 5,
                "title": "PWA (Progressive Web Apps) for Instant Access",
                "description": "Forget slow load times and clunky mobile experiences. Progressive Web Apps (PWAs) give your store an app-like feel without forcing users to download anything. Our team builds PWAs that work instantly on any device, loading pages in a snap and offering offline browsing.",
                "icon": FeaturesValidation
            },
            {
                "id": 6,
                "title": "B2C & B2B eCommerce",
                "description": "Selling to businesses and individual customers requires two different approaches. We create B2C stores with fast checkouts, personalized recommendations, and product pages that drive impulse buys. For B2B, our team adds custom pricing tiers and bulk ordering options.",
                "icon": Agile
            }
        ]
    },


    "woocommerce-development-services-india": {
        "h2": "Methodology",
        "h4": "Get Smarter Applications with Effective WooCommerce Services",
        "p": "Running a WooCommerce store isn’t just about setting up products and hoping for the best. Get fast loading pages, secure transactions, and a seamless checkout experience with our team. Our WooCommerce agency handles the technical side, so you can focus on what matters.",
        "steps": [
            {
                "id": 1,
                "title": "Plugin Development & Third-Party Integrations",
                "description": "Your WooCommerce needs features that standard plugins don’t offer. That’s why we develop custom plugins and know how you want your store to work. From payment gateways to inventory syncing, we make sure every function integrates seamlessly.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "WooCommerce Performance Boosting",
                "description": "A slow WooCommerce site sends customers running. Shoppers don’t wait around for pages to load, and neither should you. Our experts modify your website’s structure so that it loads quickly and handles high traffic.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Security Enhancements for Transactions",
                "description": "When customers enter their payment details, they expect complete security. A single breach can ruin your store’s reputation. We build layers of protection so your WooCommerce store stays safe from cyber threats.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Maintenance & Support",
                "description": "WooCommerce development requires ongoing care to prevent issues before they affect sales. We provide you with regular plugin and theme updates without breaking functionality. Our team also fixes bugs and provides technical troubleshooting.",
                "icon": RealTime
            }
        ]
    },



    "it-staff-augmentation-services-india": {
        "h2": "Our Augmentation Methodology",
        "h4": "Systematic Approach to Team Integration",
        "p": "We follow a proven 4-phase methodology for seamlessly integrating augmented staff into your team. Each phase builds upon the previous one, ensuring smooth onboarding and maximum productivity.",
        "steps": [
            {
                "id": 1,
                "title": "Assessment & Planning Phase",
                "description": "We begin with a thorough analysis of your team structure, technical requirements, and project goals. This phase includes skills gap analysis, cultural fit assessment, and creation of detailed integration timelines. We establish clear KPIs and success metrics before proceeding to selection.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Selection & Validation Phase",
                "description": "Using data from the assessment phase, we implement our multi-step selection process: technical screening, practical skills assessment, team compatibility evaluation, and final validation. Each candidate goes through at least three rounds of verification before being presented to your team.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Integration & Onboarding Phase",
                "description": "Following our structured onboarding protocol, we integrate new team members through a series of steps: project documentation review, system access setup, team introduction workshops, and initial sprint participation. Each step includes specific milestones and feedback checkpoints.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Monitoring & Optimization Phase",
                "description": "We implement continuous monitoring cycles with weekly performance reviews, bi-weekly alignment checks, and monthly optimization meetings. This iterative process includes productivity tracking, communication effectiveness assessment, and regular adjustment of integration strategies.",
                "icon": RealTime
            }
        ]
    },

    "hire-software-developer-india": {
        "h2": "Developer Hiring Process",
        "h4": "Strategic Developer Selection & Onboarding",
        "p": "Our developer hiring process is designed to identify and onboard the perfect technical talent for your needs. We combine rigorous technical assessment with personality matching to ensure you get developers who not only code well but also fit seamlessly into your team culture.",
        "steps": [
            {
                "id": 1,
                "title": "Requirements & Skill Matching",
                "description": "We begin by understanding your exact technical needs, team structure, and project goals. Our talent specialists analyze your requirements to identify the ideal skill set, experience level, and cultural attributes needed for your perfect developer match.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Technical Assessment & Screening",
                "description": "Candidates undergo our comprehensive evaluation process including live coding sessions, architecture design challenges, and problem-solving tests. We assess both theoretical knowledge and practical skills in your required technology stack to ensure technical excellence.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Team Integration & Communication",
                "description": "Selected developers participate in team interaction sessions to evaluate their communication skills, collaborative approach, and cultural fit. We assess their ability to articulate technical concepts, handle feedback, and adapt to your team's working style.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Seamless Onboarding & Support",
                "description": "Once selected, developers undergo project-specific training and tools setup. We provide continuous support, regular performance reviews, and backup resources to ensure consistent productivity and long-term success of the engagement.",
                "icon": RealTime
            }
        ]
    },

    "it-outsourcing-services": {
        "h2": "IT Management Methodology",
        "h4": "Systematic IT Service Delivery Process",
        "p": "Our IT outsourcing follows a comprehensive methodology that ensures consistent service delivery, proactive management, and continuous improvement. Each phase is designed to maintain system reliability while driving technological advancement.",
        "steps": [
            {
                "id": 1,
                "title": "Infrastructure Assessment Phase",
                "description": "We implement our SCAN methodology: System audit, Current state analysis, Architecture review, and Needs assessment. This phase includes comprehensive documentation of existing systems, identification of critical components, and risk assessment using our standardized evaluation framework.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Service Implementation Phase",
                "description": "Following our transition methodology: establishing service baselines, implementing monitoring systems, deploying management tools, and setting up support channels. Each step follows our documented procedures with specific completion criteria and validation checkpoints.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Operation & Maintenance Phase",
                "description": "We apply our MAINTAIN protocol: Monitoring systems, Analyzing performance, Implementing updates, Navigating issues, Testing changes, Adjusting configurations, Initiating improvements, and Notifying stakeholders. This systematic approach ensures consistent service delivery.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Continuous Improvement Phase",
                "description": "Our improvement cycle follows the UPGRADE methodology: Understand current performance, Propose improvements, Grade impact, Review with stakeholders, Implement changes, Determine effectiveness, and Establish new baselines. This process repeats quarterly.",
                "icon": RealTime
            }
        ]
    },

    "hire-dedicated-development-team-india": {
        "h2": "Development Team Integration Methodology",
        "h4": "Systematic Approach to Building Your Extended Development Team",
        "p": "Our proven methodology ensures seamless integration of dedicated development teams through a structured four-phase process. Each phase builds upon the previous one, creating a foundation for successful long-term collaboration and consistent delivery.",
        "steps": [
            {
                "id": 1,
                "title": "Discovery and Assessment Phase",
                "description": "We begin with our CORE analysis framework: Capability mapping, Organizational fit evaluation, Resource planning, and Engagement strategy development. This systematic approach includes technical skills assessment, team structure analysis, and project requirement documentation to create a precise integration roadmap.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Team Formation and Alignment Phase",
                "description": "Following our BUILD protocol: Baseline establishment, Understanding transfer, Integration planning, Leadership alignment, and Development framework setup. This phase includes team member selection, communication channel setup, and process alignment to ensure seamless collaboration from day one.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Integration and Execution Phase",
                "description": "Implementation of our SYNC methodology: System access setup, Yield metrics establishment, Network integration, and Continuous feedback loops. This phase focuses on getting the team operational through structured onboarding, initial sprint execution, and performance baseline establishment.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Optimization and Scale Phase",
                "description": "Deployment of our GROW framework: Goal refinement, Resource optimization, Operational fine-tuning, and Workflow enhancement. This phase includes regular performance reviews, process optimization, and team scaling protocols to maintain peak efficiency as your needs evolve.",
                "icon": RealTime
            }
        ]
    },

    "offshore-dedicated-development-center-india": {
        "h2": "Offshore Development Center Methodology",
        "h4": "Structured Approach to Establishing Your Offshore Development Hub",
        "p": "Our offshore development center methodology follows a systematic four-phase approach designed to establish, integrate, and optimize your offshore operations. Each phase incorporates specific protocols and checkpoints to ensure successful implementation.",
        "steps": [
            {
                "id": 1,
                "title": "Foundation and Analysis Phase",
                "description": "Implementation of our SCAN methodology: Strategic assessment, Current state analysis, Architecture planning, and Needs documentation. This phase establishes the groundwork through comprehensive technical infrastructure analysis, team structure planning, and operational framework development.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Operational Setup Phase",
                "description": "Following our SETUP protocol: System infrastructure establishment, Environment configuration, Team structure definition, Unified communication implementation, and Process alignment. This phase creates the operational foundation for your offshore center through systematic implementation of tools, processes, and workflows.",
                "icon": Agile
            },
            {
                "id": 3,
                "title": "Integration and Development Phase",
                "description": "Application of our UNITE framework: Understanding transfer, Network establishment, Integration execution, Team alignment, and Efficiency measurement. This phase focuses on creating seamless collaboration between offshore and onshore teams through structured protocols and clear communication channels.",
                "icon": Coding
            },
            {
                "id": 4,
                "title": "Enhancement and Evolution Phase",
                "description": "Implementation of our EVOLVE system: Evaluation of metrics, Validation of processes, Optimization of workflows, Leadership development, Value enhancement. This phase ensures continuous improvement through systematic monitoring, regular assessments, and proactive optimization of all operational aspects.",
                "icon": RealTime
            }
        ]
    },

    "outsourcing-software-development-in-india": {
        "h2": "Our Outsourcing Development Methodology",
        "h4": "A Strategic, Scalable & Transparent Outsourcing Model",
        "p": "We follow a structured outsourcing methodology that ensures seamless integration, efficient collaboration, and high-quality software delivery. Our approach minimizes risks, maximizes productivity, and guarantees alignment with your business goals.",
        "steps": [
            {
                "id": 1,
                "title": "Needs Assessment & Strategy",
                "description": "We analyze your project goals, technical requirements, and business challenges to design a tailored outsourcing strategy.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Talent Acquisition & Team Formation",
                "description": "We handpick top-tier developers, designers, and project managers who align with your technical and cultural expectations.",
                "icon": Startup
            },
            {
                "id": 3,
                "title": "Agile Development & Collaboration",
                "description": "We establish seamless communication channels and follow an agile approach to ensure transparency and efficiency.",
                "icon": Agile
            },
            {
                "id": 4,
                "title": "Quality Assurance & Security Compliance",
                "description": "We implement rigorous testing, code reviews, and security measures to maintain high standards and risk-free software.",
                "icon": Coding
            },
            {
                "id": 5,
                "title": "Deployment & Ongoing Optimization",
                "description": "We ensure smooth deployment, monitor performance, and provide continuous support to help your software scale effectively.",
                "icon": RealTime
            }
        ]
    },

    "hire-dedicated-technical-team-india": {
        "h2": "Methodology",
        "h4": "Hiring Your Dream Team",
        "p": "Hiring a dedicated technical team requires more than just finding talent—it demands a strategic approach that aligns with your business goals. We help you navigate this process with precision and care.",
        "steps": [
            {
                "id": 1,
                "title": "Needs Assessment",
                "description": "We start by understanding your unique project needs, identifying the skills and expertise required to bring your vision to life.",
                "icon": FeaturesValidation
            },
            {
                "id": 2,
                "title": "Talent Acquisition",
                "description": "We curate a team of exceptional developers who not only possess the necessary skills but also share your passion and vision.",
                "icon": Startup
            },
            {
                "id": 3,
                "title": "Agile Collaboration",
                "description": "Our agile methodologies ensure seamless collaboration between your team and ours, fostering an environment of innovation and rapid problem-solving.",
                "icon": Agile
            },
            {
                "id": 4,
                "title": "Performance Optimization",
                "description": "We continuously monitor and optimize team performance, ensuring that your project stays on track and meets the highest standards of quality and efficiency.",
                "icon": Coding
            }
        ]
    }




}





export default function Methodology({ serviceDetailPageSlug }) {

    const content = contentBySlug[serviceDetailPageSlug] || contentBySlug["front-end-development-services-india"]; // Fallback to a default slug
    const { h2, h4, p, steps } = content;

    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev < 5 ? prev + 1 : prev))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isInView])






    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto max-w-screen-xl px-4 md:px-6 sm:py-10 py-5'>

                <h2 className='font-semibold text-orange-500 text-lg'>{h2}</h2>
                <h4 className='font-semibold sm:text-4xl text-2xl my-2'>{h4}</h4>
                <p className='text-md text-gray-800'>{createLinkedContent(p, keywordToSlug, serviceDetailPageSlug)}</p>

                <div ref={containerRef} className="relative mt-8 my-4">

                    <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-4">
                        {steps.map((step, index) => (


                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isInView ? 1 : 0,
                                    y: isInView ? 0 : 20,
                                }}
                                transition={{ delay: index * 0.2 }}
                            >


                                <motion.div className={`relativ flex items-start flex-col rounded-2xl p-6 bg-white border border-blue-100 hover:shadow-md cursor-pointer h-full shadow-sm`}>


                                    <motion.div
                                        className={`rounded-full p-3 transition-colors ${index <= activeIndex ? 'bg-amber-50' : 'bg-background'
                                            }`}
                                        animate={{
                                            backgroundColor: index <= activeIndex ? 'rgb(255 251 235)' : 'rgb(255 255 255)',
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >


                                        <Image src={step.icon} className='h-12 w-auto' alt={step.title} />


                                    </motion.div>

                                    <h3 className="text-lg my-4 font-semibold">{step.title}</h3>

                                    <p className="text-md text-muted-foreground">{createLinkedContent(step.description, keywordToSlug, serviceDetailPageSlug)}</p>
                                </motion.div>
                            </motion.div>


                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}