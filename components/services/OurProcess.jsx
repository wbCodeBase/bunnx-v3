'use client'

import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { createLinkedContent } from '@/utils/LinkBuilder';

import "./service.css";

const keywordToSlug = {
    'front end development company in India': 'front-end-development-services-india',
    'software development company in India': 'software-development-company-in-india',
    'custom software development company': 'custom-software-development-services',
    'CRM software solutions': 'crm-software-development-company-india',
    'CRM software development company': 'crm-software-development-company-india',
    'CRM software solution': 'crm-software-development-company-india',
    'mobile app development company': 'mobile-app-development-company-india',
    'API Development & Integration Services': 'api-integration-and-development-services',
};


const contentBySlug = {
    "back-end-development-services-india": {
        h2: "Our Process",
        h4: "Our Process for Back End Development",
        p: "Our back-end development process is not too complex and begins with an analysis of your system requirements. Based on this, we provide you with your server architectures and execute RESTful or GraphQL APIs. Our company also makes database structures using relational or NoSQL technologies. We even use advanced caching strategies, CI/CD pipelines, and QA testing.",
        processSections: [
            {
                id: 1,
                title: "Engineering & System Analysis",
                description: "We start our process by knowing how your business works and identifying how your customer's will connect with your system. This forms the basis of building a solution for your backend.",
                activities: [
                    "Breaking down your business processes",
                    "Mapping out how your data flows",
                    "Writing clear instructions for APIs",
                    "Choosing the right tools and tech"
                ],
                deliverables: [
                    "A document outlining the system features",
                    "A diagram showing how the system will be structured",
                    "A list of tools and platforms to be used"
                ]
            },
            {
                id: 2,
                title: "Architecture & Development Plan",
                description: "Our back end development company designs a scalable, modular back-end architecture for a better data flow, security, and performance. The development strategy is outlined for agile execution.",
                activities: [
                    "Microservices or Monolithic Structures",
                    "Database Schema Design",
                    "Defining API Endpoints and Data Flows",
                    "Task Breakdown and Sprint Planning"
                ],
                deliverables: [
                    "Back-End Architecture Blueprint",
                    "Development Roadmap with Milestones",
                    "API Documentation"
                ]
            },
            {
                id: 3,
                title: "Back-End Coding & Integration",
                description: "Our developers build and integrate core functionalities, focusing on efficient server-side, secure APIs, and third-party service integrations.",
                activities: [
                    "Server-Side Coding (Node.js, Python, Java, etc.)",
                    "Implementing Authentication & Authorization (JWT, OAuth 2.0)",
                    "API Development (RESTful/GraphQL)",
                    "Third-Party Service and Cloud Integration",
                ],
                deliverables: [
                    "Secure Codebase",
                    "Functional API Interfaces",
                    "Integrated Cloud and Third-Party Services"
                ]
            },
            {
                id: 4,
                title: "Quality Assurance & Stress Testing",
                description: "Get code reliability, performance optimization, and scalability through automated and manual testing under real-world conditions.",
                activities: [
                    "Unit, Integration, and Regression Testing",
                    "Load Testing and Scalability Assessment",
                    "Vulnerability Scanning and Security Testing",
                    "Performance Monitoring (APM tools)"
                ],
                deliverables: [
                    "Comprehensive Test Reports",
                    "Debugged Code",
                    "Performance Certification"
                ]
            },
            {
                id: 5,
                title: "Continuous Support",
                description: "The finalized solution is deployed to production, followed by continuous monitoring and iterative updates to maintain peak performance.",
                activities: [
                    "Deployment on Cloud Platforms (AWS, Azure, GCP)",
                    "Setting Up Monitoring Tools (New Relic, ELK Stack)",
                    "Regular Updates and Patch Management",
                    "Providing Client Training and Knowledge Transfer"
                ],
                deliverables: [
                    "Fully Deployed Solution",
                    "Monitoring and Performance Dashboards",
                    "Maintenance Logs and Support SLA Documentation"
                ]
            }
        ]
    },
    "front-end-development-services-india": {
        h2: "Our Process",
        h4: "Our Process for Frontend Development",
        p: "As an experienced front end development company in India, we create visually appealing and dynamic user interfaces. To boost your digital presence, we combine innovative layouts with modern technologies and interactive features that help your website stand out. We follow a series of well-planned and strategic steps to craft the website that counts.",
        processSections: [
            {
                id: 1,
                title: "Understanding Your Vision",
                description: "We start by analyzing your goals, user needs, and market dynamics to deliver tailored front-end solutions that align with your brand identity and objectives.",
                activities: [
                    "Client Requirement Analysis",
                    "Gathering UX/UI preferences",
                    "Research on design trends",
                    "Platform and framework assessment"
                ],
                deliverables: [
                    "Requirement Analysis Report",
                    "UX/UI Trends Report",
                    "Technology Stack Recommendation"
                ]
            },
            {
                id: 2,
                title: "Agreement and Planning",
                description: "Our front end development company establishes a secure framework for collaboration by finalizing the project scope, workflows, and timelines for a seamless development experience.",
                activities: [
                    "Defining scope and deliverables",
                    "Establishing communication protocols",
                    "Creating resource allocation and timeline plans"
                ],
                deliverables: [
                    "Project Scope Documentation",
                    "Communication and Workflow Plan",
                    "front end Development Timeline"
                ]
            },
            {
                id: 3,
                title: "Design & Implementation",
                description: "Our team creates responsive, accessible, and scalable designs, ensuring seamless user experiences across all devices and browsers.",
                activities: [
                    "Wireframe and prototype creation",
                    "HTML/CSS/JavaScript development",
                    "Component integration and state management"
                ],
                deliverables: [
                    "Interactive Prototypes and Mockups",
                    "Responsive UI Implementation",
                    "Functional Component Library"
                ]
            },
            {
                id: 4,
                title: "Testing & Optimization",
                description: "Through rigorous testing, we ensure high performance, cross-browser compatibility, and optimal responsiveness for your front-end application.",
                activities: [
                    "Cross-Browser and Device Testing",
                    "Code Validation and Performance Optimization",
                    "Automated Testing for Components"
                ],
                deliverables: [
                    "Testing and Compatibility Reports",
                    "Optimized front end Codebase",
                    "Bug-Free and Validated Application"
                ]
            },
            {
                id: 5,
                title: "Deployment & Maintenance",
                description: "We deliver your project ready for production and provide consistent support to ensure smooth functionality and updates as required.",
                activities: [
                    "Deployment to hosting platforms",
                    "Knowledge transfer and documentation",
                    "Ongoing monitoring and updates"
                ],
                deliverables: [
                    "Deployed front end Application",
                    "User Training and Support Documentation",
                    "Maintenance Logs and Updates"
                ]
            }
        ]
    },

    "software-development-company-in-india": {
        h2: "Our Process",
        h4: "Our Process for Software Development",
        p: "As a leading software development company in India, we deliver solutions that are visually striking and technically advanced. Our services combine innovative design with advance development techniques to empower your brand.",
        processSections: [
            {
                id: 1,
                title: "Gathering Your Requirements",
                description: "We begin by thoroughly understanding your vision, diving into your business objectives, market trends, and target audience to create a customized strategy designed for success.",
                "activities": [
                    "Client Need Analysis",
                    "Gathering all basic information",
                    "Marketing and competition research",
                    "Tech Stack Assessment"
                ],
                "deliverables": [
                    "Requirement Gathering Report",
                    "Competition Analysis Report",
                    "Tech Stack Report"
                ]
            },
            {
                id: 2,
                title: "Service Agreement",
                description: "We create a strong base of trust and collaboration by agreeing on the project scope, methodologies, and deliverables, ensuring a transparent and productive partnership.",
                "activities": [
                    "Scope definition and agreement",
                    "Setting up communication channels",
                    "Resource and timelines planning"
                ],
                "deliverables": [
                    "Project Scope Document",
                    "Communication Plan",
                    "Detailed Project Schedule"
                ]
            },
            {
                id: 3,
                title: "Design & Development",
                description: "Our team works closely together to develop highly responsive and user-friendly softwares. We ensure that our solutions align with your vision and meet all necessary requirements.",
                "activities": [
                    "UX/UI design and prototyping",
                    "Frontend and backend development",
                    "API Development and Integration"
                ],
                "deliverables": [
                    "Design Wireframes and Prototype",
                    "Web Application up and running",
                    "Integrated System Interfaces"
                ]
            },
            {
                id: 4,
                title: "Testing & Quality Assurance",
                description: "Ensuring top performance and security, our thorough testing protocols make sure your web app is reliable, secure, and prepared to handle user demands.",
                "activities": [
                    "Integration & Functional Testing",
                    "Security and load testing",
                    "Test Automation"
                ],
                "deliverables": [
                    "Test Execution Report",
                    "Security and Performance Reports",
                    "Optimized, Bug-Free Code"
                ]
            },
            {
                "id": 5,
                "title": "Delivery & Support",
                "description": "Rolling out your software with assurance and ongoing support. We guarantee a seamless launch and offer continuous maintenance to keep your application current and effective.",
                "activities": [
                    "Deployment to production servers",
                    "User training and documentation",
                    "Ongoing maintenance and updates"
                ],
                "deliverables": [
                    "Deployed Web Application",
                    "Training Materials and Guides",
                    "Regular Update and Support Logs"
                ]
            }

        ]
    },

    "crm-software-development-company-india": {
        h2: "Our Process",
        h4: "Our Process for CRM Software Development",
        p: "Our CRM development process begins by understanding how your business operations take place and about your customer management. Hence, we develop CRM software solutions that help in customer data management and integrate with your existing tools. We also implement proven development methods and quality testing.",
        processSections: [
            {
                id: 1,
                title: "Analysis of Your System",
                description: "At Bunnx, we analyze your customer relationship. The team also manages the analysed data to create a CRM system that works best for your business.",
                "activities": [
                    "Sales process analysis",
                    "Planning of your business data",
                    "Mapping customer journey",
                    "Platform compatibility assessment"
                ],
                "deliverables": [
                    "Technology implementation plan",
                    "Detailed CRM requirement document",
                    "System flow diagrams"
                ]
            },
            {
                id: 2,
                title: "Design & Development Strategy",
                description: "Our CRM software development company not only creates a structured CRM architecture but also checks your user access levels, data organization, and automation in various operations. We even plan development phases to get to the final execution of our plan.",
                "activities": [
                    "Making user role hierarchies",
                    "Workflow automation planning",
                    "Sprint and timeline organization",
                    "Customer data schema design"
                ],
                "deliverables": [
                    "CRM System architecture",
                    "Development schedule",
                    "Feature documentation"
                ]
            },
            {
                id: 3,
                title: "CRM Development & Integration",
                description: "Our team takes full responsibility for the core CRM functionalities, implements data handling, and connects with the latest business tools and services.",
                "activities": [
                    "Core CRM Module Development",
                    "User Authentication Systems",
                    "Customer Data API Creation",
                    "Business Tool Integration"
                ],
                "deliverables": [
                    "CRM System that always works",
                    "Connected APIs",
                    "Integrated Business Tools"
                ]
            },
            {
                id: 4,
                title: "Quality & Performance Testing",
                description: "Our professionals are talented enough to assure quality work. So, you can rely on us and get data accuracy through testing procedures.",
                "activities": [
                    "Feature and Integration Testing",
                    "Data Management Verification",
                    "Security Protocol Testing",
                    "Speed and Response Monitoring"
                ],
                "deliverables": [
                    "Quality Test Documentation",
                    "Verified System",
                    "Performance Reports"
                ]
            },
            {
                "id": 5,
                "title": "Ongoing Support",
                "description": "We deploy the CRM software solution and provide continuous assistance to maintain functionality of your apps or websites.",
                "activities": [
                    "Implementation of all strategies",
                    "Track your setup working",
                    "Maintaining updated versions of the system"
                ],
                "deliverables": [
                    "Live CRM system with optimized performance.",
                    "Performance dashboards and monitoring configurations.",
                    "Training materials and user guides."
                ]
            }
        ]
    },
    "custom-software-development-services": {
        h2: "Our Process",
        h4: "Our Process for Custom Software Development",
        p: "Our custom software development company follows a structured process while following this to give you a functional product. Here’s our approach:",
        processSections: [
            {
                id: 1,
                title: "Know Your Software Needs",
                description: "What problem are we solving? Who will use it? What’s your long term goal with the software? These questions drive discussions to shape a technical path forward.",
                "activities": [
                    "Host collaborative sessions.",
                    "Map out your  success metrics.",
                    "Manage document workflows.",
                    "Sketch user scenarios.",
                ],
                "deliverables": [
                    "A crystal-clear roadmap.",
                    "A deep understanding of the project scope",
                    "Defined milestones and outcomes."
                ]
            },
            {
                id: 2,
                title: "Designing With Purpose",
                description: "Good softwares is more than being helpful to your customers as they also make it enjoyable during usage. We understand this and bring a lot of ideas to life through thoughtful design.",
                "activities": [
                    "Outline app structure with wireframes.",
                    "Focus on layout in mockups.",
                    "Build prototypes for pre-launch testing.",
                    "Experience app with clickable prototypes."
                ],
                "deliverables": [
                    "A blueprint of your software.",
                    "A design that balances form.",
                    "Feedback-driven prototypes."
                ]
            },
            {
                "id": 3,
                "title": "Building and Integrating Your CRM",
                "description": "Once the design is approved, we build a CRM system that works with your existing tools and processes. Whether it’s core functionalities or third-party integrations, we make sure your system is ready for action.",
                "activities": [
                    "Implement user authentication systems for controlled access.",
                    "Develop features such as contact and lead management.",
                    "Build APIs to share data across platforms.",
                    "Integrate third-party tools like marketing or analytics software."
                ],
                "deliverables": [
                    "A fully functional software for your business.",
                    "Integrated tools that work in harmony with your workflows.",
                    "APIs built to handle your data."
                ]
            }
            ,
            {
                "id": 4,
                "title": "Testing and Refining for Perfection",
                "description": "Before any software consulting services goes live, it undergoes rigorous testing. Before launch, we make all features work as intended, security measures are in place, and every security protocol is airtight.",
                "activities": [
                    "Test each feature and tool integration for accuracy.",
                    "Verify data accuracy across the system.",
                    "Conduct security checks for sensitive information.",
                    "Monitor system speed and responsiveness."
                ],
                "deliverables": [
                    "A thoroughly tested CRM system for use.",
                    "Test reports to back every feature.",
                    "A high-performing solution you can count on."
                ]
            }
            ,
            {
                "id": 5,
                "title": "Ongoing Support and Optimization",
                "description": "A great software evolves alongside your business. We stick around to ensure your CRM remains an asset for years to come. From updates to user training, we help you make the most of your investment.",
                "activities": [
                    "Providing regular updates and enhancements.",
                    "Offering user training and support resources.",
                    "Deployment of your fully developed CRM system.",
                    "Monitoring system performance."
                ],
                "deliverables": [
                    "A live CRM system optimized for your business.",
                    "Dashboards to track performance and system health.",
                    "Training materials and resources for easy onboarding."
                ]
            }

        ]
    },

    "software-consulting-services-india": {
        h2: "Our Process",
        h4: "Our Process as Software Development Consultants",
        p: "Our process? To help you not just solve problems but transform how your business operates. Let’s build software that doesn’t just support your goals but drives them forward.",
        processSections: [
            {
                "id": 1,
                "title": "Analyzing Your Current System",
                "description": "We thoroughly examine your existing workflows and customer interaction processes. From evaluating sales processes to understanding how data flows through your organization, we check for inefficiencies and missed opportunities. Our team identifies inefficiencies and uncovers opportunities to optimize how your business operates.",
                "activities": [
                    "Breaking down your sales process for inefficiencies",
                    "Organize and structure your data for better usability",
                    "Map customer journey to identify critical touchpoints",
                    "Assess how well your current platforms are"
                ],
                "deliverables": [
                    "A step-by-step implementation plan for your solution",
                    "A detailed requirements document for your business",
                    "Visual system diagrams for better visualization"
                ]
            }
            ,
            {
                "id": 2,
                "title": "Designing Architecture",
                "description": "The architecture of your software should enhance your business, not complicate it. We create a robust architecture that scales with your business, improves data organization, and introduces smart automation where it matters most.",
                "activities": [
                    "Break development into manageable sprints.",
                    "Design an intuitive and efficient customer data model.",
                    "Plan automation for repetitive tasks to save time.",
                    "Define user roles and access levels."
                ],
                "deliverables": [
                    "Documentation for every planned functionality.",
                    "A CRM architecture that scales with your business.",
                    "A clear roadmap for development and execution."
                ]
            },

            {
                id: 3,
                title: "Making Codes",
                description: "Once the designs are locked, it’s time to build them. Our professionals use the programming languages. It helps us develop software that not only looks amazing but has real function.",
                "activities": [
                    "Code the front end.",
                    "Build a back end to maintain large data.",
                    "Test module to catch issues.",
                ],
                "deliverables": [
                    "A working product with core features.",
                    "Infrastructure ready to handle real-world use. ",
                    "Updates on development progress."
                ]
            },
            {
                id: 4,
                title: "Testing, Refining & Perfecting",
                description: "No software is perfect but we can achieve it. That’s why we rigorously test it—breaking it down, pushing it to its limits.",
                "activities": [
                    "Perform functional tests to make every feature work as intended.",
                    "Test performance under real-world conditions to check speed.",
                    "Refine the app based on user feedback from beta testing.",
                ],
                "deliverables": [
                    "Bug-free, production-ready software.",
                    "Performance reports and testing insights.",
                    "Final adjustments to fine-tune the experience."
                ]
            },
            {
                "id": 5,
                "title": "Launch and Beyond",
                "description": "The big moment has arrived. We don’t just hand over your software and disappear—we deploy it, monitor it, and stand by your side.",
                "activities": [
                    "Launch the software.",
                    "Check performance metrics.",
                    "Updates, upgrades, or new features."
                ],
                "deliverables": [
                    "A successful launch.",
                    "Insights into software.",
                    "Support for software future-proof."
                ]
            }
        ]
    },

    "it-consulting-services-india": {
        h2: "Our Process",
        h4: "Our Process for IT Consulting",
        p: "With expertly crafted IT consulting services from Bunnx, a top-tier consulting company, you can completely transform how your business operates. Here’s our strategy.",
        processSections: [
            {
                "id": 1,
                "title": "Know Your Target Set",
                "description": "We begin our process by getting insights of your workflows and customer management approach. It helps us understand the current IT system you are using for various processes and to improve connection with customers.",
                "activities": [
                    "Sales funnel in-depth analysis.",
                    "Mapping out customer journeys.",
                    "Creating data flow diagrams."
                ],
                "deliverables": [
                    "Technical documentation.",
                    "Clear document outlining for system.",
                    "Technology stack defining.",
                    "Proper implementation strategy."
                ]
            },
            {
                "id": 2,
                "title": "Building the Framework",
                "description": "We don’t just build a system; our team rather creates a well-thought-out structure that organizes your data and adds automation where it matters.",
                "activities": [
                    "Design a structured hierarchy.",
                    "Automate data schema.",
                    "Improve task automation.",
                    "Organize customer data."
                ],
                "deliverables": [
                    "Structured blueprint with data models.",
                    "Timeline for development.",
                    "Document on technical specifications."
                ]
            },
            {
                "id": 3,
                "title": "Development and Integration",
                "description": "This is where the experts of Bunnx create software that’s not difficult to use and still connects with the tools you already use.",
                "activities": [
                    "Build the software features.",
                    "Add secure login.",
                    "Create APIs for tasks.",
                    "Integrate external services."
                ],
                "deliverables": [
                    "A fully functional system.",
                    "Tools and systems sync.",
                    "Modern architecture for upgrades."
                ]
            },
            {
                "id": 4,
                "title": "Testing for Performance",
                "description": "No system goes live without passing our testing services. We check every function of your app, verify data accuracy and test how the system handles its usage.",
                "activities": [
                    "Proper case validation.",
                    "Data handling to prevent errors.",
                    "Conduct tests for encryption.",
                    "System speed and performance under load."
                ],
                "deliverables": [
                    "Reports documenting test results.",
                    "A system handling your daily operations.",
                    "Insights on performance.",
                    "Define future improvements."
                ]
            },
            {
                "id": 5,
                "title": "Deployment and Ongoing Support",
                "description": "When the software is ready, we deploy it and stay by your side to help you adapt. From updates to training, our experts make sure everything works as it should.",
                "activities": [
                    "Deploy the system on cloud.",
                    "Provide updates.",
                    "Configure dashboards.",
                    "Train your team on IT services."
                ],
                "deliverables": [
                    "Live system for your team.",
                    "Real-time tracking.",
                    "Performance dashboards.",
                    "Easy-to-follow training guides."
                ]
            }
        ]
    },

    "mobile-app-development-company-india": {
        h2: "Our Process",
        h4: "Our Process for Mobile App Development",
        p: "We are always providing mobile applications through a technology-driven approach. Here’s how our mobile app development company build apps to exceed expectations:",
        processSections: [
            {
                "id": 1,
                "title": "Analysis & Technical Scoping",
                "description": "Our team begins with knowing what your app requires to make a clear development roadmap.",
                "activities": [
                    "Detailed charts for navigation.",
                    "Use codes for cross-platform.",
                    "Check database schemas for sync."
                ],
                "deliverables": [
                    "System Requirement Specification (SRS).",
                    "Detailed stack documentation.",
                    "Wireframes diagrams."
                ]
            },
            {
                "id": 2,
                "title": "UI/UX Design Analysis",
                "description": "Our design team uses the following tasks to create interfaces particularly focused for your visitors.",
                "activities": [
                    "Make designs through Figma.",
                    "Go for motion studies.",
                    "Adaptive layouts for resolutions."
                ],
                "deliverables": [
                    "Get UI/UX design mockups.",
                    "Clickable prototypes with effects.",
                    "Complete design handoff package."
                ]
            },
            {
                "id": 3,
                "title": "Custom Full Stack Development",
                "description": "We use the latest technologies that will work on your app's performance, no matter how complex the features are.",
                "activities": [
                    "Make interfaces.",
                    "Develop microservices.",
                    "Use MySQL or NoSQL databases.",
                    "Execute WebSockets."
                ],
                "deliverables": [
                    "Fully functional application code",
                    "Make GraphQL APIs",
                    "Integrate backend for synchronization"
                ]
            },
            {
                "id": 4,
                "title": "Testing and Benchmarking",
                "description": "Our mobile app development company writes unit tests for key components using JUnit, XCTest, or Mocha/Chai. The teams, at Bunnx, often use end-to-end testings for payments flows. Our team also implements integration tests to validate the interaction between UI, backend services, and APIs.",
                "activities": [
                    "Test multiple device types.",
                    "Set up CI/CD pipelines.",
                    "Profile using Xcode."
                ],
                "deliverables": [
                    "Performance benchmarks",
                    "Provide debugging documentation",
                    "Get coverage reports"
                ]
            },
            {
                "id": 5,
                "title": "Final Phase and Support",
                "description": "We configure production environments with infrastructure such as AWS EC2, Kubernetes and automate deployment workflows for zero-downtime rollouts.",
                "activities": [
                    "Compliance with Google Store guidelines.",
                    "Set up tools like New Relic.",
                    "Roll out regular updates."
                ],
                "deliverables": [
                    "Deployed applications with store links",
                    "Monitor dashboards",
                    "Get release notes."
                ]
            }
        ]
    },

    "api-integration-and-development-services": {
        h2: "Our Process",
        h4: "Our Process for API Development & Integration",
        p: "Our API Development & Integration Services follow a structured, detail-oriented approach to deliver secure, scalable, and high-performing APIs. Here's how we transform your requirements into robust API solutions:",
        processSections: [
            {
                "id": 1,
                "title": "Requirement Analysis & Planning",
                "description": "We start by thoroughly analyzing your system requirements, workflows, and integration needs to design APIs that align with your business goals.",
                "activities": [
                    "Identifying Data Exchange",
                    "API Use Case Definition",
                    "Selection of API Standards",
                    "Technology and Framework Evaluation"
                ],
                "deliverables": [
                    "API Specification Document",
                    "Proposed API Diagram",
                    "Technology Stack Recommendation"
                ]
            },
            {
                "id": 2,
                "title": "Architecture & Development",
                "description": "We design a scalable API architecture with security, performance, and modularity in mind, ensuring seamless integration with your existing systems.",
                "activities": [
                    "Defining API Endpoints",
                    "Designing Secure Authentication Mechanisms",
                    "Database Schema Design",
                    "Development Roadmap with Sprints"
                ],
                "deliverables": [
                    "API Architecture Blueprint",
                    "Endpoint Documentation",
                    "Development Milestones and Sprint Plan"
                ]
            },
            {
                "id": 3,
                "title": "Development & Integration",
                "description": "Our developers build APIs with optimized server-side logic and integrate third-party services for enhanced functionality.",
                "activities": [
                    "Developing RESTful or GraphQL APIs",
                    "Implementing Authentication Mechanisms",
                    "Integrating External APIs",
                    "Optimizing API Performance with Caching"
                ],
                "deliverables": [
                    "Secure and Scalable API Codebase",
                    "Functional API Endpoints",
                    "Integrated Cloud Service"
                ]
            },
            {
                "id": 4,
                "title": "Testing & Optimization",
                "description": "We rigorously test APIs to ensure reliability, scalability, and security under real-world conditions.",
                "activities": [
                    "Unit and Integration Testing",
                    "Load and Stress Testing",
                    "Security Testing",
                    "Monitoring with APM Tools"
                ],
                "deliverables": [
                    "Comprehensive API Test Reports",
                    "Debugged API Code",
                    "Performance Certification"
                ]
            },
            {
                "id": 5,
                "title": "Deployment & Continuous Support",
                "description": "Once tested, the APIs are deployed to production, with continuous monitoring and iterative updates to ensure peak performance and reliability.",
                "activities": [
                    "Deployment to Cloud Platforms",
                    "Monitoring with ELK Stack",
                    "Patch Management",
                    "Client Training"
                ],
                "deliverables": [
                    "Fully Deployed API Solution",
                    "Real-Time Monitoring Dashboards",
                    "Maintenance Logs and Support SLA"
                ]
            }
        ]

    },


    "agile-consulting-services-india": {
        h2: "Our Process",
        h4: "Our Process for Agile Consulting",
        p: "Our process isn’t about just applying a set of methods—it’s about working alongside you, step by step. From getting to know your team to fine-tuning the approach, we ensure every move we make brings you closer to success.",
        "processSections": [
            {
                "id": 1,
                "title": "Finding Your Agile Sweet Spot",
                "description": "Not every Agile framework is a perfect fit for every team. We analyze your current processes and understand how your teams work to identify the best approach.",
                "activities": [
                    "Break down your processes",
                    "Identifying suitable Agile tools",
                    "Build a clear plan",
                    "Easy transition"
                ],
                "deliverables": [
                    "An Agile game plan",
                    "Insightful reports of your processes",
                    "Team alignment strategy"
                ]
            },
            {
                "id": 2,
                "title": "Designing Processes That Get Results",
                "description": "We design workflows that help your teams deliver with confidence, from automating repetitive tasks to enhancing collaboration.",
                "activities": [
                    "Workflow planning",
                    "Sprint planning",
                    "Introduce smart automation",
                    "Agile coaching for your teams"
                ],
                "deliverables": [
                    "An Agile process",
                    "Crystal-clear sprint plans",
                    "Training modules for implementation"
                ]
            },
            {
                "id": 3,
                "title": "Agile in Action",
                "description": "We put the plan into action, ensuring seamless project management, product development, and quality checks.",
                "activities": [
                    "Agile project execution",
                    "Get teams working together",
                    "Project tracking",
                    "Agile setup"
                ],
                "deliverables": [
                    "A fully functioning app",
                    "Tools for collaboration",
                    "Clear project dashboards"
                ]
            },
            {
                "id": 4,
                "title": "Keep Getting Better",
                "description": "We fine-tune your processes and adapt to new challenges, ensuring continuous improvement and growth.",
                "activities": [
                    "Keep an eye on Agile system",
                    "Provide continuous coaching",
                    "Retrospectives to find opportunities",
                    "Look for improvement areas"
                ],
                "deliverables": [
                    "Team performance insights",
                    "Actionable improvement strategies",
                    "A future-ready Agile strategy"
                ]
            },
            {
                "id": 5,
                "title": "Support You Can Count On",
                "description": "We provide ongoing support post-launch, ensuring your platform runs smoothly and continues to grow.",
                "activities": [
                    "Monitor performance post-launch",
                    "Keep everything updated",
                    "Train your team",
                    "Conducting operations"
                ],
                "deliverables": [
                    "A live platform for success",
                    "Easy-to-use dashboards",
                    "Support to grow your business"
                ]
            }
        ]

    },

    "application-development-company-india": {
        h2: "Our Process",
        h4: "Our Process for Application Development",
        p: "Building an application is challenging but solves complex problems for its users. We follow a structured process while following this to give you a functional product.",
        "processSections": [
            {
                "id": 1,
                "title": "Know Your Vision and Mission",
                "description": "Some of the best experts engage in in-depth discussions to understand the project before our team initiates development. We check your functional requirements and anticipated outcomes. This discovery phase is helpful in defining the technical roadmap.",
                "activities": [
                    "Conducting a gathering session.",
                    "Performing daily updates",
                    "User persona analysis.",
                    "Documenting technical specifications."
                ],
                "deliverables": [
                    "A detailed project document.",
                    "Well-defined user stories.",
                    "Measurable outcomes."
                ]
            },
            {
                "id": 2,
                "title": "Designing Your App",
                "description": "In this phase, we provide you with tangible and intuitive designs of your apps. With the use of user experience (UX) principles and user interface (UI) methodologies, we create aesthetically appealing designs that prioritize usability.",
                "activities": [
                    "Developing wireframes and high-fidelity mockups.",
                    "Using UI components",
                    "Checking color schemes and typography.",
                    "Creating interactive prototypes."
                ],
                "deliverables": [
                    "Wireframes outlining application architecture.",
                    "Clickable prototypes for iterative feedback.",
                    "Finalized UI/UX design specifications."
                ]
            },
            {
                "id": 3,
                "title": "Executing the Plan",
                "description": "With designs approved, we move towards the development phase. Our team uses modern frameworks and programming languages to make maintainable applications while adhering to industry best practices.",
                "activities": [
                    "Using interfaces and back-end logic.",
                    "Configuring databases",
                    "Integrating APIs.",
                    "Conducting unit testing."
                ],
                "deliverables": [
                    "Application with core modules.",
                    "Optimized back-end infrastructure.",
                    "Progress report & test results."
                ]
            },
            {
                "id": 4,
                "title": "Perfecting App Through Testing",
                "description": "This stage involves extensive quality assurance (QA) to understand its functionality, performance, and security. We simulate real-world scenarios to identify and resolve any issues so that it becomes deployment-ready.",
                "activities": [
                    "Conducting security testing.",
                    "Debugging application features.",
                    "Collecting feedback",
                    "Controlled testing environments."
                ],
                "deliverables": [
                    "A production-ready application.",
                    "A resolved issue log",
                    "A user feedback summary."
                ]
            },
            {
                "id": 5,
                "title": "Launching and Supporting",
                "description": "The application is deployed and made available to end-users. Post-launch, we keep it in the monitoring phase where our experts provide technical support to address any issues or implement iterative improvements.",
                "activities": [
                    "Deploying the application",
                    "Production environments or app stores.",
                    "Monitoring application metrics",
                    "Feature enhancements."
                ],
                "deliverables": [
                    "A deployed application.",
                    "Performance metrics and insights.",
                    "A roadmap for updates."
                ]
            }
        ]

    },

    "website-development-services-india": {
        h2: "Our Process",
        h4: "Our Process for Website Development",
        p: "We take a simple, clear approach to website development that focuses on your needs and goals. From the start, we listen to you and work together to create a plan. Each step is about building a website that fits your business and serves your users well, from design to launch.",
        "processSections": [
            {
                "id": 1,
                "title": "Discovery & Planning",
                "description": "This is where we start by understanding what you want to achieve. We talk about your business and what your website needs to do. This stage helps us get a clear picture of your goals, and we also look at your competitors.",
                "activities": [
                    "Discussing project goals",
                    "Researching competitors",
                    "Identifying what success is",
                    "Defining the website"
                ],
                "deliverables": [
                    "A clear project timeline",
                    "A well-defined set of goals",
                    "A list of functional requirements"
                ]
            },
            {
                "id": 2,
                "title": "Design & Wireframing",
                "description": "Our website development services include creating wireframes and prototypes to map out how the website will look and feel. We focus on the layout, how users will move through the site, and how to best present your content.",
                "activities": [
                    "Creating basic wireframes",
                    "Designing navigation and page layouts",
                    "Getting feedback on designs",
                    "Finalizing overall style"
                ],
                "deliverables": [
                    "A clear web page layout",
                    "Visual designs",
                    "A user-friendly interface plan"
                ]
            },
            {
                "id": 3,
                "title": "Front-End Development",
                "description": "A stunning design is just the beginning. Our front-end developers bring it to life, transforming static wireframes into an interactive, user-friendly experience. Every click, scroll, and animation is crafted to make navigation smooth and engagement natural.",
                "activities": [
                    "Writing the code",
                    "Design with animations",
                    "Runs on desktops and tablets",
                    "Connecting with back-end systems"
                ],
                "deliverables": [
                    "Visually appealing website",
                    "Design for any screen size",
                    "An interactive experience"
                ]
            },
            {
                "id": 4,
                "title": "Testing & Quality Assurance",
                "description": "Before launching, we test everything. We check that all features work as expected and function properly on different browsers and devices. If any issues come up with website development, we fix them right away to make sure everything works as it should.",
                "activities": [
                    "Testing the website",
                    "Checking interactive features",
                    "Running tests for site loads",
                    "Checking for any security risks"
                ],
                "deliverables": [
                    "A website that functions correctly",
                    "A website that loads quickly",
                    "A website that is safe to use"
                ]
            },
            {
                "id": 5,
                "title": "Continuous Support",
                "description": "We monitor it right after launch to make sure everything is working well. Once live, we’re here for any updates or changes you need, whether it’s adding new content, fixing bugs, or adding new features over time.",
                "activities": [
                    "Launching on the production server",
                    "Monitoring performance",
                    "Update your website’s content",
                    "Regular checks and backups"
                ],
                "deliverables": [
                    "A live website ready for users",
                    "Ongoing support for fixes",
                    "Continuous improvements"
                ]
            }
        ]

    },

    "cms-development-services-india": {
        h2: "Our Process",
        h4: "Our Process for CMS Development",
        p: "A strong CMS isn’t just about what users see—it’s about what’s happening behind the scenes. We build a powerful backend using technologies like Node.js, PHP (Laravel), and Python (Django), so your website processes requests in a flash.",
        "processSections": [
            {
                "id": 1,
                "title": "Understanding Website’s Structure",
                "description": "Before jumping into development, you must know how everything is going. We can help you with this in mapping out how your content flows and how different sections interact.",
                "activities": [
                    "Organize content types",
                    "Structure the database",
                    "Plan connection with tools",
                    "Selecting the right tech"
                ],
                "deliverables": [
                    "A clear website blueprint",
                    "A content management plan",
                    "Tech stack for development"
                ]
            },
            {
                "id": 2,
                "title": "Building a Strong Foundation",
                "description": "A CMS won’t hold up when traffic increases or new features get added. At this stage, we handle growth, security, and day-to-day updates, and work well with any external tools you may need.",
                "activities": [
                    "Developing a strong backend",
                    "Set up a database",
                    "Plan out API connections",
                    "Break development into steps"
                ],
                "deliverables": [
                    "A planned-out backend design",
                    "Guides the development process",
                    "Initial API documentation"
                ]
            },
            {
                "id": 3,
                "title": "Back-End Development & Integration",
                "description": "We write code that makes managing your website easy. It gives you an easy way to manage content and upload images without dealing with technical headaches.",
                "activities": [
                    "Develop servers with Node.js",
                    "Set up authentication",
                    "APIs to connect with the website",
                    "Integrate third-party tools"
                ],
                "deliverables": [
                    "A fully developed backend",
                    "Login and role-based access",
                    "Integrated external services"
                ]
            },
            {
                "id": 4,
                "title": "Quality Assurance & Testing",
                "description": "Before launch, we put your CMS through rigorous testing to catch problems before they reach your users. Every element is checked to avoid problems after launch.",
                "activities": [
                    "Test every feature",
                    "Run security scans",
                    "Simulate high traffic loads",
                    "Track response times"
                ],
                "deliverables": [
                    "Debugged code",
                    "Security certifications",
                    "A fully tested CMS"
                ]
            },
            {
                "id": 5,
                "title": "Deployment and Continuous Support",
                "description": "After testing, your CMS is set up on a live server. But we don’t just disappear after launch—we stick around to handle updates, fix any unexpected issues, and train your team.",
                "activities": [
                    "Deploy your CMS",
                    "Set up monitoring tools",
                    "Release regular updates",
                    "Train your team"
                ],
                "deliverables": [
                    "A live and functional CMS",
                    "Performance tracking dashboards",
                    "Support documents & assistance"
                ]
            }
        ]
    },

    "full-stack-development-services": {
        h2: "Our Process",
        h4: "Our Process for Full Stack Development",
        p: "At our full stack development company, we follow a structured approach to deliver high-performing applications. From in-depth requirement analysis to deployment, our process ensures every element application is optimized.",
        "processSections": [
            {
                "id": 1,
                "title": "Need & System Analysis",
                "description": "Our process begins with a rough analysis of your business needs, workflows, and technical requirements. This phase lays the foundation for a seamless and future-ready solution.",
                "activities": [
                    "Understanding Business Logic",
                    "ER Diagram Design",
                    "API Requirement Specification",
                    "Choosing the Right Technology"
                ],
                "deliverables": [
                    "Detailed System Requirement Specification",
                    "Proposed Data Flow Diagrams",
                    "Technology Stack Blueprint"
                ]
            },
            {
                "id": 2,
                "title": "Design & Development Strategy",
                "description": "We create a scalable and modular architecture to ensure your solution delivers high performance, security, and flexibility. Our development strategy is tailored to your goals.",
                "activities": [
                    "Designing Scalable Architectures",
                    "Crafting Database Schemas",
                    "Defining API Endpoints",
                    "Sprint Planning for Development"
                ],
                "deliverables": [
                    "Comprehensive Architecture Blueprint",
                    "Agile Development Roadmap",
                    "API Documentation for Integration"
                ]
            },
            {
                "id": 3,
                "title": "Full Stack Coding & Integration",
                "description": "Our team develops and integrates front-end and back-end functionalities to create a cohesive, user-friendly application. We focus on secure server-side coding, robust APIs, and seamless third-party integrations.",
                "activities": [
                    "Developing Front-End Interfaces",
                    "Implementing Authentication & Authorization",
                    "Building APIs",
                    "Integrating Cloud Platforms"
                ],
                "deliverables": [
                    "End-to-End Functional Codebase",
                    "Secure API Interfaces",
                    "Fully Integrated Service Solutions"
                ]
            },
            {
                "id": 4,
                "title": "Quality Assurance & Stress Testing",
                "description": "We perform rigorous testing to ensure reliability, scalability, and performance under real-world conditions. Both manual and automated techniques are employed.",
                "activities": [
                    "Integration and End-to-End Testing",
                    "Load and Scalability Testing",
                    "Assessments and Vulnerability Scans",
                    "Monitoring with APM Tools"
                ],
                "deliverables": [
                    "Comprehensive Test Reports",
                    "Debugged and Optimized Code",
                    "Performance Certification"
                ]
            },
            {
                "id": 5,
                "title": "Deployment & Continuous Support",
                "description": "The final solution is deployed on production servers, followed by continuous monitoring and updates to ensure optimal performance over time.",
                "activities": [
                    "Deployment on Cloud Platforms",
                    "Setting Up Monitoring Tools",
                    "Patch Management and Client Training",
                    "Providing Support and Maintenance"
                ],
                "deliverables": [
                    "Fully Deployed and Functional Application",
                    "Monitoring Dashboards",
                    "Support SLA Documentation"
                ]
            }
        ]
    },
    "ecommerce-development-company-india": {
        h2: "Our Process",
        h4: "Our Process for Ecommerce Development",
        p: "A systematic approach and dedication to particulars are necessary for creating a successful eCommerce platform. We make sure every stage, from system analysis to ongoing support, is in line with your company's objectives.",
        "processSections": [
            {
                "id": 1,
                "title": "Requirement Engineering & Analysis",
                "description": "We kick off with a thorough analysis of your business processes, system requirements, and integration needs to set a strong foundation for your eCommerce platform.",
                "activities": [
                    "Business Logic Mapping",
                    "ER Diagram Creation",
                    "API Requirement Definition",
                    "Technology Selection"
                ],
                "deliverables": [
                    "Comprehensive System Requirement Document (SRD)",
                    "Proposed Architecture Diagram",
                    "Finalized Technology Stack"
                ]
            },
            {
                "id": 2,
                "title": "Architecture Design & Development",
                "description": "Our team creates a scalable, modular back-end architecture for optimized data flow, high security, and superior performance, along with a clear roadmap for execution.",
                "activities": [
                    "Designing Monolithic Structures",
                    "Database Schema Design",
                    "API Endpoint Mapping",
                    "Sprint Planning and Allocation"
                ],
                "deliverables": [
                    "Back-End Architecture Design",
                    "Development Plan with Milestones",
                    "Initial API Documentation"
                ]
            },
            {
                "id": 3,
                "title": "Development & Integration",
                "description": "We implement core features, secure APIs, and third-party integrations, ensuring the back end operates without any errors with the front end and external services.",
                "activities": [
                    "Server-Side Programming",
                    "User and Role-Based Authorization",
                    "API Development",
                    "Integration Other APIs"
                ],
                "deliverables": [
                    "Functional Back-End Codebase",
                    "Documented API Interfaces",
                    "Integrated Third-Party Services"
                ]
            },
            {
                "id": 4,
                "title": "Quality Assurance & Testing",
                "description": "To ensure reliability and scalability, we perform extensive testing under replicated real-world conditions to deliver a smooth eCommerce experience.",
                "activities": [
                    "Unit and Integration Testing",
                    "Load Testing",
                    "Security Assessments",
                    "Performance Monitoring with APM"
                ],
                "deliverables": [
                    "Comprehensive Testing Reports",
                    "Optimized and Debugged Code",
                    "Security Certifications"
                ]
            },
            {
                "id": 5,
                "title": "Deployment and Support",
                "description": "Once tested and approved, your eCommerce platform is deployed to production, followed by ongoing monitoring and updates to maintain peak performance.",
                "activities": [
                    "Cloud Deployment on AWS",
                    "Configuring Monitoring Tools",
                    "Regular Security Patches",
                    "Knowledge Transfer for Client"
                ],
                "deliverables": [
                    "Deployed ECommerce Solution",
                    "Real-Time Monitoring Dashboards",
                    "Logs and Support Documentation"
                ]
            }
        ]
    },
    "ecommerce-consulting-services": {
        h2: "Our Process",
        h4: "Our Process for Ecommerce Web Consulting",
        p: "A business cannot thrive on a rigid plan in a market that shifts daily. Crafting an e-commerce strategy that adapts on the go allows businesses to fine-tune their approach and experiment with new ideas.",
        "processSections": [
            {
                "id": 1,
                "title": "Adaptive Strategy Development",
                "description": "We adjust your methods based on actual customer behavior. This approach prevents companies from getting stuck with outdated tactics and keeps them ahead of the competition.",
                "activities": [
                    "Monitor behavior patterns",
                    "Test new pricing models",
                    "Break goals into smaller actions",
                    "Strategies as per market trends"
                ],
                "deliverables": [
                    "Roadmap with steps",
                    "Adapt to market shifts",
                    "Higher engagement"
                ]
            },
            {
                "id": 2,
                "title": "Data-Powered Business Moves",
                "description": "Numbers tell a story, and businesses that pay attention to data can predict what customers want before they even ask. By analyzing trends, businesses can create highly marketing campaigns and introduce new products at the right time.",
                "activities": [
                    "Track website interactions",
                    "Use analytics tools",
                    "Adjust marketing strategies",
                    "Eliminate weak points"
                ],
                "deliverables": [
                    "Targeting and personalization",
                    "Use of marketing budgets",
                    "Increased revenue"
                ]
            },
            {
                "id": 3,
                "title": "Turning Visitors into Buyers",
                "description": "Bringing traffic to a website is one thing, but making sure those visitors turn into paying customers is another challenge. Every step in the buying process should feel effortless—product pages should answer all questions. Checkout should be quick and distractions should be minimal.",
                "activities": [
                    "A/B test different layouts",
                    "Simplify checkout",
                    "Use persuasive elements",
                    "Optimize website speed"
                ],
                "deliverables": [
                    "Higher sales",
                    "Reduced abandonment rates",
                    "More satisfied customers"
                ]
            },
            {
                "id": 4,
                "title": "Shopping Without Boundaries",
                "description": "Customers no longer shop in just one place—they might browse on social media, compare prices on a website, and buy from an app. A business that connects all these channels makes shopping effortless and increases the chances of repeat purchases.",
                "activities": [
                    "Synchronize inventory",
                    "Link customer accounts",
                    "Personalized recommendations",
                    "Streamline checkout"
                ],
                "deliverables": [
                    "Increased sales",
                    "Stronger brand recognition",
                    "Higher customer retention"
                ]
            },
            {
                "id": 5,
                "title": "E-commerce Platform Review",
                "description": "A successful e-commerce business isn't just about flashy designs—it needs a solid foundation. Regularly auditing the entire system helps identify slow-loading pages, outdated payment gateways, and weak security points. Fixing these issues before they become major problems leads to a more shopping experience.",
                "activities": [
                    "Review site performance",
                    "Assess backend processes",
                    "Identify gaps in security",
                    "Conduct load testing"
                ],
                "deliverables": [
                    "Faster loading times",
                    "Reduced technical errors",
                    "Future-proofed platform"
                ]
            }
        ]
    },



    "web-application-development-company-india": {
        h2: "Our Process",
        h4: "Our Process for Web App Development",
        p: "We are always providing web applications through a technology-driven approach. Here’s how our web development company build apps to exceed expectations:",
        "processSections": [
            {
                "id": 1,
                "title": "Planning & Technical Breakdown",
                "description": "Before we touch a single line of code, we break everything down to make sure nothing is left to chance. This phase sets the foundation for what’s ahead. A web app is only as good as its blueprint, and we take our time ensuring the roadmap is airtight.",
                "activities": [
                    "Create detailed flowcharts",
                    "Define the right technology",
                    "Outline backend & frontend",
                    "Set up database schemas"
                ],
                "deliverables": [
                    "A development roadmap",
                    "Wireframes and prototypes",
                    "A solid tech stack plan"
                ]
            },
            {
                "id": 2,
                "title": "Designing Interfaces",
                "description": "Looks matter, but usability matters more. Our design team builds layouts that feel natural and work across devices. A great web app isn’t just visually appealing, it should be easy to navigate and functional across different screen sizes.",
                "activities": [
                    "Use Figma for UI mockups",
                    "Conduct motion studies",
                    "Design adaptive layouts",
                    "Build a design system"
                ],
                "deliverables": [
                    "Interactive prototypes",
                    "A complete design package",
                    "A layout for navigation"
                ]
            },
            {
                "id": 3,
                "title": "Full Stack Development",
                "description": "This is where the magic happens. A web development process is key to keeping the application bug-free and easy to scale in the future. We use the latest technologies for interactions, rapid data processing, and a backend that can handle heavy traffic.",
                "activities": [
                    "Develop responsive interfaces",
                    "Implement API connections",
                    "Structure NoSQL databases",
                    "Optimize fast-loading pages"
                ],
                "deliverables": [
                    "A functional web app",
                    "API for communication",
                    "A backend without delays"
                ]
            },
            {
                "id": 4,
                "title": "Testing",
                "description": "Before launch, we put the app through rigorous testing to catch any weak spots. No web app is complete without debugging and testing to iron out flaws before it goes live. Our web application development services run various tests on different devices and browsers to check for inconsistencies.",
                "activities": [
                    "Run cross-browser testing",
                    "Simulate high-traffic scenarios",
                    "Conduct security audits",
                    "Perform automated testing"
                ],
                "deliverables": [
                    "Fast loading web app",
                    "Detailed test reports",
                    "Polished product"
                ]
            },
            {
                "id": 5,
                "title": "Maintenance and Support",
                "description": "Even after deployment, our work isn’t done. We make sure the transition from development to a live environment happens without any interruptions. We configure production environments and fix any post-launch issues that arise.",
                "activities": [
                    "Set up production environments",
                    "Monitor application health",
                    "Regular feature enhancements",
                    "Post-launch support"
                ],
                "deliverables": [
                    "Application with store links",
                    "Continuous performance tracking",
                    "Team ready to support"
                ]
            }
        ]
    },


    "ecommerce-implementation": {
        h2: "Our Process",
        h4: "Our Process for eCommerce Implementation",
        p: "Building a high-functioning online store isn’t just about adding products and hitting publish. Design, backend, payment processing, and performance must work together to create a shopping experience that drives conversions. Here’s how we make that happen:",
        "processSections": [
            {
                "id": 1,
                "title": "Requirements & Technical Planning",
                "description": "Before writing a single line of code, we map out the entire structure of your eCommerce store, covering everything from product management to checkout flows.",
                "activities": [
                    "Define product catalog structure",
                    "Plan database models",
                    "Set up API connections",
                    "Payment providers"
                ],
                "deliverables": [
                    "Technical architecture diagrams",
                    "Store requirement documentation (SRD)",
                    "Data flowcharts for transactions"
                ]
            },
            {
                "id": 2,
                "title": "Design & Storefront Development",
                "description": "Your store should be more than just visually appealing—it should be easy to navigate and built for conversions. Our design team crafts intuitive layouts that make buying effortless.",
                "activities": [
                    "Wireframing with Figma",
                    "Develop interactive prototypes",
                    "Design checkout processes",
                    "Minimal friction"
                ],
                "deliverables": [
                    "UI/UX mockups",
                    "Clickable demos for testing",
                    "Design assets for developers"
                ]
            },
            {
                "id": 3,
                "title": "Backend Development & Integration",
                "description": "A great storefront is nothing without a rock-solid backend. We develop a fast, structured system to manage products, users, orders, and third-party integrations.",
                "activities": [
                    "Build REST or GraphQL APIs",
                    "Implement caching with Redis",
                    "Set up cron jobs",
                    "Develop microservices for cart"
                ],
                "deliverables": [
                    "Functional backend with API",
                    "Connected payment gateways",
                    "Order processing"
                ]
            },
            {
                "id": 4,
                "title": "Testing & Performance Benchmarking",
                "description": "Bugs and slow load times kill conversions. Before launch, we stress-test everything to make sure your store runs at top speed.",
                "activities": [
                    "Run load tests",
                    "Validate checkout flows",
                    "Test integrations",
                    "Tax calculation services"
                ],
                "deliverables": [
                    "Performance benchmark reports",
                    "Detailed bug reports",
                    "Automated test scripts"
                ]
            },
            {
                "id": 5,
                "title": "Deployment & Ongoing Maintenance",
                "description": "Once everything is running, we don’t just disappear. We deploy updates, monitor store activity, and keep your platform in sync with evolving customer expectations. It's the final step of our eCommerce platform implementation services.",
                "activities": [
                    "Deploy to AWS",
                    "Set up monitoring tools",
                    "Implement automated backups",
                    "Rollback strategies"
                ],
                "deliverables": [
                    "Live store with public URLs",
                    "Admin dashboard with analytics",
                    "Scheduled updates"
                ]
            }
        ]
    },

    "shopify-development-company-in-india": {
        h2: "Our Process",
        h4: "Our Process for Shopify Development",
        p: "Our Shopify development process is designed to deliver exceptional results by combining creativity, technical expertise, and a strategic approach.",
        "processSections": [
            {
                "id": 1,
                "title": "Requirement Analysis",
                "description": "Our Shopify development company in India begin by understanding your business goals, target audience, and functional requirements to create a roadmap for development.",
                "activities": [
                    "Conduct detailed sessions",
                    "Analyze competitor stores",
                    "Document required features",
                    "Define deliverables for the project"
                ],
                "deliverables": [
                    "Clear project scope",
                    "Comprehensive feature list",
                    "Wireframes or sketches outlining"
                ]
            },
            {
                "id": 2,
                "title": "Design & Prototyping",
                "description": "Our Shopify web development services India include crafting a visually engaging, brand-centric design that enhances user experience.",
                "activities": [
                    "Develop custom Shopify themes",
                    "Design responsive layouts",
                    "Create prototypes for user flow",
                    "Gather client feedback"
                ],
                "deliverables": [
                    "Approved design mockups",
                    "Responsive prototypes for review",
                    "Defined color typography"
                ]
            },
            {
                "id": 3,
                "title": "Development & Integration",
                "description": "We build your Shopify store using clean code and integrate required functionalities to ensure a robust eCommerce platform.",
                "activities": [
                    "Code and implement custom themes",
                    "Integrate APIs and payment gateways",
                    "Optimize for performance and scalability",
                    "Ensure cross-browser compatibility"
                ],
                "deliverables": [
                    "Fully functional Shopify store",
                    "Seamless third-party integrations",
                    "Optimized frontend systems"
                ]
            },
            {
                "id": 4,
                "title": "Quality Assurance & Testing",
                "description": "Before launching, we test everything. We rigorously test your store to identify and resolve issues, ensuring it runs smoothly across all devices and platforms.",
                "activities": [
                    "Conduct performance testing",
                    "Test payment gateways",
                    "Check mobile responsiveness",
                    "Optimize user experience"
                ],
                "deliverables": [
                    "Bug-free, stable Shopify store",
                    "Validated payment and shipping workflows",
                    "Ready-to-launch eCommerce platform"
                ]
            },
            {
                "id": 5,
                "title": "Launch & Post-Launch Support",
                "description": "We deploy your Shopify store and provide ongoing support to maintain performance and implement updates as needed.",
                "activities": [
                    "Configure DNS settings",
                    "Monitor site performance",
                    "Provide training on store managing",
                    "Maintenance and updates"
                ],
                "deliverables": [
                    "Live Shopify store",
                    "Training documentation or sessions",
                    "Post-launch support plan"
                ]
            }
        ]
    },


    "ecommerce-maintenance-and-support-services": {
        h2: "Our Process",
        h4: "Our Process for Ecommerce Maintenance & Support",
        p: "Building an eCommerce platform is just the beginning. It’s about constant care, tightening security, and fine-tuning everything. Our maintenance and support services take the hassle out of managing your online store, so you can concentrate on selling. From setup to ongoing support, we handle every detail to make your eCommerce maintenance and support experience worry-free.",
        "processSections": [
            {
                "id": 1,
                "title": "Know Your Store Inside Out",
                "description": "Our team at Bunnx kick things off by diving into how your store operates. We map out key processes, identify any weak points, and create a blueprint for efficient management and support.",
                "activities": [
                    "Charting out product listings",
                    "Structuring the database",
                    "Setting up API links",
                    "Choosing the right tech stack"
                ],
                "deliverables": [
                    "Overview of store’s technical structure",
                    "Visual plan to connect everything",
                    "Actionable plan for support"
                ]
            },
            {
                "id": 2,
                "title": "Strong Digital Foundation",
                "description": "We craft a solid, adaptable back-end setup that keeps your store fast and ready to handle whatever comes its way. Every step is mapped out to prevent slowdowns.",
                "activities": [
                    "Make a modular structure",
                    "Create a database layout",
                    "Map out API connections",
                    "Outline a step-by-step plan"
                ],
                "deliverables": [
                    "A dependable back-end design",
                    "Support plan to track progress",
                    "Initial API Documentation"
                ]
            },
            {
                "id": 3,
                "title": "Add Essential Features",
                "description": "Our experts put the pieces together, from rock-solid security measures to essential third-party connections. It will keep your store and systems in sync.",
                "activities": [
                    "Writing back-end code",
                    "Set up user authentication",
                    "APIs to check payments",
                    "Connect with payment gateways"
                ],
                "deliverables": [
                    "A solid back-end system",
                    "Documented API Interfaces",
                    "Integration with payment systems"
                ]
            },
            {
                "id": 4,
                "title": "Testing and Perfecting",
                "description": "Before we go live, we run comprehensive tests to catch bugs, improve load times, and prepare your store for high traffic.",
                "activities": [
                    "Testing every feature",
                    "Simulating high-traffic scenarios",
                    "Running security checks",
                    "Catch and fix issues"
                ],
                "deliverables": [
                    "Bug-free platform",
                    "Fast-loading pages",
                    "Advanced security protocols"
                ]
            },
            {
                "id": 5,
                "title": "Deployment and Continuous Support",
                "description": "Once everything checks out, we launch your store and continue to provide support. From software updates to security patches, we’ve got it covered so you can focus on growing your business.",
                "activities": [
                    "Launching the store",
                    "Set up tracking tools",
                    "Security fixes regularly",
                    "Training your team"
                ],
                "deliverables": [
                    "Active monitoring",
                    "A fully launched store",
                    "Maintenance logs and a plan"
                ]
            }
        ]
    },


    "ecommerce-web-development": {
        "h2": "Our Process",
        "h4": "Our Process for eCommerce Web Development",
        "p": "Our experts are always providing eCommerce applications through a technology-driven approach. Here’s how our eCommerce web development company builds apps to exceed expectations:",
        "processSections": [
            {
                "id": 1,
                "title": "Blueprint & Structural Planning",
                "description": "A solid foundation sets the stage for a website that works under any load. We break down the technical framework before a single line of code is written. This means designing a layout that flows naturally, setting up a data structure that keeps transactions fast, and choosing the right tools to balance speed.",
                "activities": [
                    "Define structured navigation",
                    "Fast content rendering",
                    "Set up database schemas",
                    "High-speed queries"
                ],
                "deliverables": [
                    "Detailed system architecture",
                    "Support high-traffic operations",
                    "Wireframes capturing elements"
                ]
            },
            {
                "id": 2,
                "title": "Precision-Driven UI/UX Engineering",
                "description": "Our designers don’t just draw; they engineer layouts that guide users from product discovery to checkout. Interactive elements are built with precision, colors and fonts are chosen with intent. Every click should feel intuitive, and every transition should serve a purpose.",
                "activities": [
                    "Craft interfaces using Figma",
                    "Implement micro-interactions",
                    "Develop adaptable layouts",
                    "Make interfaces for all screens"
                ],
                "deliverables": [
                    "UI prototypes with animations",
                    "Design system with components",
                    "High-fidelity mockups"
                ]
            },
            {
                "id": 3,
                "title": "Full-Stack Engineering & Feature Deployment",
                "description": "We use the latest technologies that will work on your app's performance, no matter how complex the features are.",
                "activities": [
                    "Develop custom components",
                    "Implement APIs",
                    "Use database queries",
                    "Maintain fast response times"
                ],
                "deliverables": [
                    "A functional eCommerce platform",
                    "Backend synchronization",
                    "API-driven architecture"
                ]
            },
            {
                "id": 4,
                "title": "Testing & Performance Stress Checks",
                "description": "No launch happens without rigorous testing. Every feature is put through a stress test—can the checkout page handle thousands of simultaneous orders? Will the images load just as fast on a slow connection? From manual testing to automated scripts, we prevent them before they reach the final stage.",
                "activities": [
                    "Simulate high-traffic scenarios",
                    "Run automated tests",
                    "Profile the resource consumption",
                    "Eliminate unnecessary lags"
                ],
                "deliverables": [
                    "Performance benchmarks tracking",
                    "Fixing errors before deployment",
                    "Security compliance checks"
                ]
            },
            {
                "id": 5,
                "title": "Deployment and Post-Launch Monitoring",
                "description": "A website launch is just the beginning. We deploy in a way that eliminates downtime. Once live, monitoring tools track everything from response rates to user engagement. It allows instant fixes if anything isn’t working as intended. With structured deployment pipelines, every future update rolls out without interfering with existing operations.",
                "activities": [
                    "Deploy servers with infrastructure",
                    "Implement monitoring tools",
                    "Schedule feature rollouts",
                    "Tracking page load speeds"
                ],
                "deliverables": [
                    "A fully deployed eCommerce site",
                    "Live dashboards monitoring",
                    "Detailed documentation"
                ]
            }
        ]
    },


    "woocommerce-development-services-india": {
        "h2": "Our Process",
        "h4": "Our Process for WooCommerce",
        "p": "A WooCommerce store isn’t just about listing products and waiting for sales to roll in. It takes a well-thought structure and a solid back-end. We take care of every detail—so you don’t have to think for slow checkouts, broken pages, or security issues.",
        "processSections": [
            {
                "id": 1,
                "title": "Understanding Your Store",
                "description": "No two businesses are the same, and neither should their WooCommerce stores be. Our team at Bunnx start by knowing about what should be your product range, customer flow, and must-have features. We offer these in our WooCommerce services.",
                "activities": [
                    "Outline product category",
                    "Handle orders and payments",
                    "Identify must-have integrations",
                    "Choose the right tech stack"
                ],
                "deliverables": [
                    "A WooCommerce blueprint that works for your business",
                    "A well-planned architecture",
                    "The right technology choices"
                ]
            },
            {
                "id": 2,
                "title": "Structuring the Store",
                "description": "We lay the technical foundation, define how different sections of your store interact, set up security protocols, and plan the development roadmap.",
                "activities": [
                    "Structure the database",
                    "Database Schema Design",
                    "Map out your store",
                    "Clear development roadmap"
                ],
                "deliverables": [
                    "A store structure",
                    "Step-by-Step Development Plan",
                    "Documented workflow"
                ]
            },
            {
                "id": 3,
                "title": "Back-End Development & Integration",
                "description": "From back-end to front-end design, we create a WooCommerce store that’s fast and built to handle shopping experiences.",
                "activities": [
                    "Develop the back-end",
                    "Implement a checkout system",
                    "Fraud prevention measures",
                    "Connect third-party tools"
                ],
                "deliverables": [
                    "Functional WooCommerce store",
                    "A checkout process",
                    "Secure integrations for payment"
                ]
            },
            {
                "id": 4,
                "title": "Testing & Eliminating Weak Spots",
                "description": "An online store isn’t useful if it breaks under pressure. So, we test every feature and transaction to make sure everything works.",
                "activities": [
                    "Stress test the site",
                    "Fix security vulnerabilities",
                    "Run transaction tests",
                    "Exceptional loading speeds"
                ],
                "deliverables": [
                    "A store that won’t crash",
                    "A bug-free shopping experience",
                    "Fraud prevention measures"
                ]
            },
            {
                "id": 5,
                "title": "Launching",
                "description": "The launch is just the beginning. We keep an eye on how your store runs, apply regular updates, and provide ongoing support so that nothing slows down your sales.",
                "activities": [
                    "Deploy your store",
                    "Set up monitoring tools",
                    "Regular updates",
                    "Offer training and documentation"
                ],
                "deliverables": [
                    "Store ready to start selling",
                    "Monitoring dashboards",
                    "A dedicated support team"
                ]
            }
        ]
    },

    "it-staff-augmentation-services-india": {
        "h2": "Our Process",
        "h4": "Our Process for Staff Augmentation",
        "p": "Building the right team is about finding people who bring real value and drive projects forward without delays. Traditional hiring can be slow, expensive, and full of uncertainty. That's why we connect you with skilled professionals who integrate into your team.",
        "processSections": [
            {
                "id": 1,
                "title": "Understanding Your Business",
                "description": "Before bringing in new talent, we figure out what your team needs. Maybe you're missing a developer or your project demands an extra pair of hands. Whatever the case, we help you bridge the gap.",
                "activities": [
                    "Assess your current workforce",
                    "Define roles and responsibilities",
                    "Project-based staffing",
                    "Outline an onboarding plan"
                ],
                "deliverables": [
                    "A hiring roadmap",
                    "A team to boost productivity",
                    "Plan that integrates new talent"
                ]
            },
            {
                "id": 2,
                "title": "Finding the Right People",
                "description": "Resumes don't tell the full story, and the wrong hire can slow everything down. That's why we don't just hand over a stack of CVs.",
                "activities": [
                    "Conduct skill-based screenings",
                    "Match candidates",
                    "Offer experts in development",
                    "Provide different professionals"
                ],
                "deliverables": [
                    "Skilled professionals",
                    "Hiring without compromising quality",
                    "The right talent"
                ]
            },
            {
                "id": 3,
                "title": "Onboarding & Integration",
                "description": "Hiring someone is one thing—getting them to work efficiently is another. We make sure your new team members hit the ground running without wasting time.",
                "activities": [
                    "Set up onboarding sessions",
                    "Provide training resources",
                    "Establish communication channels",
                    "Define reporting structures"
                ],
                "deliverables": [
                    "Transition with minimal disruption",
                    "Clear roles and responsibilities",
                    "A well-integrated team"
                ]
            },
            {
                "id": 4,
                "title": "Support & Performance Tracking",
                "description": "We don't just drop people into your team and disappear. We stay involved, making sure everything runs smoothly and stepping in when adjustments are needed.",
                "activities": [
                    "Monitor work progress",
                    "Offer ongoing training",
                    "Provide backup candidates",
                    "Adjust staffing levels"
                ],
                "deliverables": [
                    "A workforce",
                    "A team that learns",
                    "Support always available"
                ]
            },
            {
                "id": 5,
                "title": "Scaling & Workforce Planning",
                "description": "Business needs change, and your workforce should be able to keep up. If you need to expand your team, restructure departments, or transition temporary hires into permanent roles, we help you build for the future.",
                "activities": [
                    "Evaluate hiring strategies",
                    "Adjust staffing levels",
                    "Provide leadership training",
                    "Assist in transitioning hires"
                ],
                "deliverables": [
                    "A workforce that grows",
                    "Adjust staffing without the hassle",
                    "Approach to build success"
                ]
            }
        ]
    },

    "hire-software-developer-india": {
        "h2": "Our Process",
        "h4": "How We Help You Hire the Right Software Developer",
        "p": "Hiring the right software developer isn’t just about scanning resumes. It’s about finding someone who understands your project, aligns with your vision, and delivers results. We simplify the hiring process so you get skilled developers without the hassle.",
        "processSections": [
            {
                "id": 1,
                "title": "Understanding Your Requirements",
                "description": "Every project is unique. We start by understanding your business needs, project scope, and tech stack preferences to find the right developer for your team.",
                "activities": [
                    "Define project scope and goals",
                    "Identify required technical skills",
                    "Understand preferred collaboration model",
                    "Set hiring timeline and budget"
                ],
                "deliverables": [
                    "A detailed hiring plan",
                    "A list of required skill sets",
                    "Timeline for onboarding"
                ]
            },
            {
                "id": 2,
                "title": "Candidate Shortlisting & Screening",
                "description": "We filter through a vast pool of skilled developers, ensuring only the best candidates align with your technical and cultural requirements.",
                "activities": [
                    "Screen candidates based on expertise",
                    "Assess previous work and projects",
                    "Match candidates with project needs",
                    "Conduct initial interviews"
                ],
                "deliverables": [
                    "A shortlist of qualified developers",
                    "Candidate profiles and past project insights",
                    "Initial screening reports"
                ]
            },
            {
                "id": 3,
                "title": "Technical Evaluation & Interviews",
                "description": "We conduct technical assessments and in-depth interviews to ensure the candidate’s skills match your project’s demands.",
                "activities": [
                    "Live coding challenges",
                    "Problem-solving assessments",
                    "Technical and behavioral interviews",
                    "Assess soft skills and communication"
                ],
                "deliverables": [
                    "Tested and verified skill assessments",
                    "Technical interview reports",
                    "Recommendations for final selection"
                ]
            },
            {
                "id": 4,
                "title": "Onboarding & Integration",
                "description": "Once the right developer is selected, we ensure a seamless onboarding process to integrate them into your team without delays.",
                "activities": [
                    "Set up project access and tools",
                    "Define clear roles and responsibilities",
                    "Establish communication channels",
                    "Kickoff meeting with the team"
                ],
                "deliverables": [
                    "Fully onboarded developer",
                    "Access to necessary tools and documentation",
                    "Clear workflow and reporting structure"
                ]
            },
            {
                "id": 5,
                "title": "Support & Performance Monitoring",
                "description": "Hiring doesn’t stop at onboarding. We continuously track performance and provide support to ensure long-term success.",
                "activities": [
                    "Regular performance reviews",
                    "Feedback collection",
                    "Address technical and workflow challenges",
                    "Continuous upskilling opportunities"
                ],
                "deliverables": [
                    "A high-performing developer aligned with your needs",
                    "Regular progress updates",
                    "Long-term collaboration roadmap"
                ]
            }
        ]
    },

    "it-outsourcing-services": {
        "h2": "Our Process",
        "h4": "Our Process for IT Outsourcing Services",
        "p": "Outsourcing IT services isn’t just about cutting costs—it’s about gaining access to top-tier expertise, faster development cycles, and seamless execution. We simplify the process so that you get highly skilled developers and IT professionals without the headaches of recruitment and onboarding.",
        "processSections": [
            {
                "id": 1,
                "title": "Understanding Your Needs",
                "description": "Every business has unique IT requirements. We start by understanding your challenges, goals, and the kind of technical expertise you need to move forward.",
                "activities": [
                    "Analyze project requirements",
                    "Identify skill sets needed",
                    "Define project scope and timelines",
                    "Select the best outsourcing model"
                ],
                "deliverables": [
                    "A tailored IT outsourcing strategy",
                    "Defined project milestones",
                    "A clear roadmap for execution"
                ]
            },
            {
                "id": 2,
                "title": "Building Your Team",
                "description": "We connect you with highly skilled IT professionals who match your technical and business needs. Whether it’s developers, testers, or project managers, we bring the right people to your team.",
                "activities": [
                    "Shortlist and vet top talent",
                    "Align team structure with project goals",
                    "Ensure cultural and workflow compatibility",
                    "Set up seamless communication channels"
                ],
                "deliverables": [
                    "A dedicated team ready to start work",
                    "Defined roles and responsibilities",
                    "Effective collaboration setup"
                ]
            },
            {
                "id": 3,
                "title": "Development & Execution",
                "description": "With the right team in place, we get to work. Our experts follow agile methodologies to ensure continuous progress and iterative improvements.",
                "activities": [
                    "Kickstart development with agile sprints",
                    "Integrate latest technologies and best practices",
                    "Optimize performance and security",
                    "Maintain transparent reporting and feedback loops"
                ],
                "deliverables": [
                    "A fully functional IT solution",
                    "Optimized performance and security",
                    "Regular progress reports and updates"
                ]
            },
            {
                "id": 4,
                "title": "Testing & Quality Assurance",
                "description": "We leave no room for errors. Our QA experts rigorously test every component to ensure your IT solution is secure, efficient, and user-friendly.",
                "activities": [
                    "Conduct manual and automated testing",
                    "Fix vulnerabilities and optimize performance",
                    "Ensure compliance with industry standards",
                    "Simulate real-world scenarios for stress testing"
                ],
                "deliverables": [
                    "Bug-free, high-performing software",
                    "Comprehensive test reports",
                    "100% compliance with security and industry standards"
                ]
            },
            {
                "id": 5,
                "title": "Deployment & Ongoing Support",
                "description": "We don’t just build and walk away. Our team ensures a smooth deployment and stays available for ongoing maintenance, updates, and support.",
                "activities": [
                    "Deploy software or IT infrastructure",
                    "Monitor performance post-launch",
                    "Provide ongoing support and enhancements",
                    "Scale resources as per business growth"
                ],
                "deliverables": [
                    "Seamless deployment with zero downtime",
                    "24/7 monitoring and support",
                    "Scalable solutions for long-term success"
                ]
            }
        ]
    },

    "hire-dedicated-development-team-india": {
        "h2": "Our Process",
        "h4": "How We Build Your Dedicated Development Team",
        "p": "Hiring a dedicated development team isn't just about filling positions—it's about finding experts who align with your goals and deliver results. We take care of every step, from understanding your needs to assembling a team that works as an extension of your business.",
        "processSections": [
            {
                "id": 1,
                "title": "Understanding Your Requirements",
                "description": "Every business has unique software needs. We start by learning about your project, goals, and the kind of developers you require. Whether it’s frontend, backend, or full-stack, we map out a strategy to find the right fit for you.",
                "activities": [
                    "Define project scope and technical requirements",
                    "Identify required skills and expertise",
                    "Understand your workflow and team culture",
                    "Determine project timeline and budget"
                ],
                "deliverables": [
                    "A clear project roadmap",
                    "A skillset blueprint tailored to your needs",
                    "Defined expectations for collaboration"
                ]
            },
            {
                "id": 2,
                "title": "Assembling the Right Team",
                "description": "We carefully handpick developers, designers, and project managers who match your project’s demands. Our selection process ensures that every team member is not just skilled but also the right cultural fit.",
                "activities": [
                    "Shortlist and interview candidates",
                    "Assess technical skills and problem-solving abilities",
                    "Evaluate cultural fit and communication skills",
                    "Provide onboarding and integration support"
                ],
                "deliverables": [
                    "A team tailored to your business needs",
                    "Fully vetted and experienced developers",
                    "Smooth onboarding and transition process"
                ]
            },
            {
                "id": 3,
                "title": "Development & Collaboration",
                "description": "Once the team is in place, they seamlessly integrate into your existing workflow. We ensure transparent communication, regular updates, and agile project execution to keep things running smoothly.",
                "activities": [
                    "Set up project management tools",
                    "Define milestones and sprint planning",
                    "Ensure real-time collaboration and reporting",
                    "Facilitate regular progress reviews"
                ],
                "deliverables": [
                    "An agile and productive development process",
                    "Seamless collaboration with your in-house team",
                    "Timely progress reports and milestone tracking"
                ]
            },
            {
                "id": 4,
                "title": "Quality Assurance & Testing",
                "description": "No software should go live without rigorous testing. We conduct multiple rounds of QA to ensure your product meets performance, security, and usability standards.",
                "activities": [
                    "Run automated and manual tests",
                    "Fix bugs and optimize performance",
                    "Conduct security and compliance checks",
                    "Gather user feedback and make improvements"
                ],
                "deliverables": [
                    "A bug-free and high-performance product",
                    "Security-tested and compliant software",
                    "An optimized user experience"
                ]
            },
            {
                "id": 5,
                "title": "Ongoing Support & Scaling",
                "description": "Your development needs may evolve over time. We offer continued support, maintenance, and the flexibility to scale your team as your business grows.",
                "activities": [
                    "Provide long-term maintenance and updates",
                    "Scale the team up or down as required",
                    "Ensure continuous monitoring and optimization",
                    "Offer training and documentation support"
                ],
                "deliverables": [
                    "A fully supported and scalable development team",
                    "Regular updates and system optimizations",
                    "A long-term partnership focused on growth"
                ]
            }
        ]
    },

    "offshore-dedicated-development-center-india": {
        "h2": "Our Process",
        "h4": "How We Build Your Offshore Software Development Center",
        "p": "Setting up an offshore development center shouldn’t be complex. We streamline the process, ensuring your remote team operates seamlessly as an extension of your business. From talent acquisition to infrastructure setup, we handle everything so you can focus on growth.",
        "processSections": [
            {
                "id": 1,
                "title": "Understanding Your Business Needs",
                "description": "Every business has unique goals, and a one-size-fits-all approach won’t work. We begin by understanding your technical requirements, project scope, and long-term vision to build a team that fits your needs.",
                "activities": [
                    "Define project goals and expectations",
                    "Analyze required tech stack and expertise",
                    "Identify key roles and team structure",
                    "Align development strategy with business objectives"
                ],
                "deliverables": [
                    "A detailed roadmap for your offshore team",
                    "Role-based hiring strategy",
                    "Custom team structure to match your project"
                ]
            },
            {
                "id": 2,
                "title": "Talent Acquisition & Team Formation",
                "description": "We carefully select top-tier engineers, designers, and project managers who fit your work culture and technical needs. Our recruitment process ensures you get highly skilled professionals without the hassle of hiring.",
                "activities": [
                    "Source and screen candidates",
                    "Conduct technical and cultural assessments",
                    "Onboard team members with seamless integration",
                    "Set up communication workflows"
                ],
                "deliverables": [
                    "A dedicated offshore team",
                    "Expert developers ready to start work",
                    "A structured onboarding process"
                ]
            },
            {
                "id": 3,
                "title": "Infrastructure & Development Setup",
                "description": "A strong foundation is key to productivity. We establish the required IT infrastructure, security protocols, and project management tools to keep everything running smoothly.",
                "activities": [
                    "Set up cloud-based or on-premise infrastructure",
                    "Implement security and compliance measures",
                    "Configure development and testing environments",
                    "Define agile workflows for collaboration"
                ],
                "deliverables": [
                    "A fully operational offshore workspace",
                    "Secure and scalable infrastructure",
                    "Optimized development workflows"
                ]
            },
            {
                "id": 4,
                "title": "Seamless Collaboration & Execution",
                "description": "We ensure that your offshore team works as a natural extension of your in-house team. With clear communication and agile methodologies, your project progresses without disruptions.",
                "activities": [
                    "Daily stand-ups and progress tracking",
                    "Real-time collaboration with your team",
                    "Continuous code review and quality assurance",
                    "Adapting to project changes with agility"
                ],
                "deliverables": [
                    "A fully integrated offshore development team",
                    "Clear communication channels",
                    "Faster project execution with agile methodologies"
                ]
            },
            {
                "id": 5,
                "title": "Ongoing Support & Scaling",
                "description": "Growth doesn’t stop after setup. We provide continuous support, performance monitoring, and scalability options to ensure long-term success.",
                "activities": [
                    "Regular performance assessments",
                    "Scaling the team as per business needs",
                    "Providing technical support and maintenance",
                    "Optimizing processes for better efficiency"
                ],
                "deliverables": [
                    "Long-term offshore partnership",
                    "Flexible team expansion options",
                    "Consistent support and optimization"
                ]
            }
        ]
    },

    "outsourcing-software-development-in-india": {
        "h2": "Our Process",
        "h4": "How We Deliver High-Impact Software Solutions",
        "p": "We simplify software development with a seamless, agile-driven process. From strategy to deployment, we ensure fast execution, top-tier quality, and lasting success.",
        "processSections": [
            {
                "id": 1,
                "title": "Defining Your Vision & Goals",
                "description": "Every great software solution starts with clarity. We dive deep into your business needs, industry challenges, and user expectations to craft a tailored development roadmap.",
                "activities": [
                    "Define project scope & objectives",
                    "Select the best tech stack",
                    "Align strategy with business goals"
                ],
                "deliverables": [
                    "Comprehensive project plan",
                    "Clear technical requirements"
                ]
            },
            {
                "id": 2,
                "title": "Building Development Team",
                "description": "We handpick top-tier engineers, designers, and strategists to bring your project to life. Our experts integrate seamlessly into your workflow, ensuring fast and efficient development.",
                "activities": [
                    "Source & vet top talent",
                    "Onboard team for quick integration",
                    "Set up collaboration channels"
                ],
                "deliverables": [
                    "Dedicated, skilled team",
                    "Seamless workflow integration"
                ]
            },
            {
                "id": 3,
                "title": "Agile Development Execution",
                "description": "Using agile methodologies, we break projects into manageable sprints, ensuring continuous progress, faster feedback cycles, and adaptable development.",
                "activities": [
                    "Sprint-based development",
                    "Regular testing & code reviews",
                    "Feature refinements based on feedback"
                ],
                "deliverables": [
                    "Early working prototype",
                    "Efficient progress tracking"
                ]
            },
            {
                "id": 4,
                "title": "User-Centric Design & Testing",
                "description": "Your users deserve an intuitive, seamless experience. We rigorously test every feature to ensure reliability, security, and exceptional usability across all devices.",
                "activities": [
                    "Usability & A/B testing",
                    "Cross-platform compatibility",
                    "Automated & manual QA"
                ],
                "deliverables": [
                    "Bug-free, high-performance product",
                    "Optimized user experience"
                ]
            },
            {
                "id": 5,
                "title": "Deployment, Launch & Scaling",
                "description": "We don’t just launch your software – we ensure it thrives. With scalable architecture and ongoing support, we help you adapt, grow, and stay ahead of the competition.",
                "activities": [
                    "Zero-downtime deployment",
                    "Performance & security optimization",
                    "Continuous support & updates"
                ],
                "deliverables": [
                    "Seamless product launch",
                    "Scalable architecture & ongoing support"
                ]
            }
        ]
    },

    "hire-dedicated-technical-team-india": {
        "h2": "Our Process",
        "h4": "Transforming Dreams into Digital Masterpieces",
        "p": "We're not just building software; we're crafting digital experiences that turn your boldest ideas into reality. Our process is your passport to technological breakthrough.",
        "processSections": [
            {
                "id": 1,
                "title": "Spark Your Vision",
                "description": "We become your tech dream interpreters. Our team dives deep into your world, transforming abstract ideas into a crystal-clear technological roadmap that feels like pure magic.",
                "activities": [
                    "Decode your business DNA",
                    "Architect breakthrough strategies",
                    "Align tech with your wildest dreams"
                ],
                "deliverables": [
                    "Innovation blueprint",
                    "Strategic technology narrative"
                ]
            },
            {
                "id": 2,
                "title": "Curate Your Tech Dream Team",
                "description": "We handpick tech wizards who are more than just developers—they're innovation alchemists passionate about turning your vision into digital gold.",
                "activities": [
                    "Hunt global tech superstars",
                    "Create collaboration magic",
                    "Build your perfect tech squad"
                ],
                "deliverables": [
                    "Elite innovation team",
                    "Seamless collaborative ecosystem"
                ]
            },
            {
                "id": 3,
                "title": "Innovation Sprint",
                "description": "Our agile approach is like a high-performance engine. We break down complex challenges into rapid, precision-driven sprints that keep innovation constantly flowing.",
                "activities": [
                    "Rapid iterative development",
                    "Dynamic feedback loops",
                    "Continuous refinement"
                ],
                "deliverables": [
                    "Living, breathing prototype",
                    "Real-time progress tracking"
                ]
            },
            {
                "id": 4,
                "title": "Experience Engineering",
                "description": "We obsess over user experience. Every pixel, interaction, and moment is meticulously crafted to create digital experiences that feel magical and intuitive.",
                "activities": [
                    "Immersive user journey mapping",
                    "Rigorous experience testing",
                    "Multi-dimensional quality assurance"
                ],
                "deliverables": [
                    "Frictionless digital experience",
                    "Intuitive, powerful solution"
                ]
            },
            {
                "id": 5,
                "title": "Launch & Evolve",
                "description": "Your product isn't just launched—it's unleashed. We provide a launchpad that propels your solution, ensuring it grows, adapts, and stays ahead of the curve.",
                "activities": [
                    "Zero-friction deployment",
                    "Intelligent performance tuning",
                    "Continuous innovation support"
                ],
                "deliverables": [
                    "Breakthrough product launch",
                    "Adaptive, future-proof architecture"
                ]
            }
        ]
    }

};


export default function ProcessShowcase({ serviceDetailPageSlug }) {
    const content = contentBySlug[serviceDetailPageSlug] || contentBySlug["software-development-company-in-india"]; // Fallback to a default slug
    const { h2, h4, p, processSections } = content;
    const [activeSection, setActiveSection] = useState(1);

    return (
        <>
            <div className="max-w-screen-xl container mx-auto p-4 md:p-8">
                <h2 className='font-semibold text-orange-500 text-lg'>{h2}</h2>
                <h4 className='font-semibold text-3xl my-2'>{h4}</h4>
                <p className='text-md text-gray-800'>{createLinkedContent(p, keywordToSlug, serviceDetailPageSlug)}</p>



                <div className='text-white md:my-10 my-6'>
                    {/* Mobile View */}
                    <div className="lg:hidden grid grid-cols-1 relative sm:grid-cols-2 gap-4 fle items-star justify-cente lg:space-y-8">
                        {processSections.map((section) => (
                            <div key={section.id} className="space-y-4 bg-[#1a1a1a] p-6 rounded-lg">
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                                <p className="text-gray-300">{createLinkedContent(section.description, keywordToSlug, serviceDetailPageSlug)}</p>
                                <div className="grid gap-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Task Involved</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                            {section.activities.map((activity, index) => (
                                                <li key={index}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">deliverables</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                                            {section.deliverables.map((deliverable, index) => (
                                                <li key={index}>{deliverable}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View */}
                    <LayoutGroup>
                        <div className="hidden lg:flex gap-4 h-[400px] hauto">
                            {processSections.map((section) => (
                                <motion.div
                                    layout
                                    key={section.id}
                                    className={`relative bg-[#1a1a1a] rounded-lg cursor-pointer overflow-hidden pb-8 transition-colors
                ${activeSection === section.id ? 'flex-1' : 'flex-none w-[100px]'}`}
                                    onHoverStart={() => setActiveSection(section.id)}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >


                                    {/* Background Pattern */}
                                    <div className={`absolute inset-0 opacity-10 pointer-events-none`}>
                                        <div className="absolute inset-0"
                                            style={{
                                                backgroundImage: `linear-gradient(60deg, #fff 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a),
                                  linear-gradient(60deg, #fff 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a)`,
                                                backgroundSize: '400px 400px',
                                                backgroundPosition: '0 0, 20px 20px',
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                        />
                                    </div>

                                    <motion.div
                                        layout
                                        className={`relative h-full flex flex-col ${activeSection === section.id ? 'p-6' : 'p-2'
                                            }`}
                                    >
                                        <motion.div
                                            layout
                                            className={`${activeSection === section.id
                                                ? ''
                                                : 'h-full flex flex-col items-center justify-end'
                                                }`}
                                        >
                                            {activeSection !== section.id && (
                                                <div className="absolute top-6 left-0 right-0 flex justify-center animate-pulse">
                                                    <ChevronLeft className="w-6 h-6 verticalBounceLeft" />
                                                    <ChevronRight className="w-6 h-6 verticalBounceRight" />
                                                </div>
                                            )}



                                            <motion.h2
                                                layout="position"
                                                className={`text-2xl font-bold whitespace-nowrap ${activeSection === section.id
                                                    ? 'mb-4'
                                                    : 'writing-mode-vertica text-[18px]'
                                                    }`}
                                                style={{
                                                    writingMode: activeSection === section.id ? 'horizontal-tb' : 'vertical-rl',
                                                    transform: activeSection === section.id ? 'none' : 'rotate(180deg)',
                                                }}
                                            >
                                                {section.title}
                                            </motion.h2>



                                        </motion.div>

                                        <AnimatePresence>
                                            {activeSection === section.id && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="space-y-6"
                                                >
                                                    <p className="text-gray-300 textsm max-w-2xl">{createLinkedContent(section.description, keywordToSlug, serviceDetailPageSlug)}</p>

                                                    <div className="grid md:grid-cols-2 gap-5">
                                                        <div>
                                                            <h3 className="text-xl font-semibold mb-4">Task Involved</h3>
                                                            <ul className="list-disc list-inside space-y-2 textsm text-gray-300">
                                                                {section.activities.map((activity, index) => (
                                                                    <li key={index}>{activity}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <h3 className="text-xl font-semibold mb-4">deliverables</h3>
                                                            <ul className="list-disc list-inside space-y-2 textsm text-gray-300">
                                                                {section.deliverables.map((deliverable, index) => (
                                                                    <li key={index}>{deliverable}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </LayoutGroup>
                </div>




            </div>
        </>
    );
}








