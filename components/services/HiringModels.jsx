'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import lightdotnetmodalicon from '@/public/iconMethodology/light-dot-net-modal-icon.webp';
import teamAug from '@/public/iconMethodology/teamAug.webp';
import ProjectBased from '@/public/iconMethodology/ProjectBased.webp';


const serviceData = {
  'front-end-development-services-india': {
    title: 'Choose From Our Front End Development Service Models ',
    description:
      "We customize engagement strategies to match your project’s vision, scale, and complexity. Our hiring models ensure you have the right team and services at your disposal to ensure smooth services.",
    models: [
      {
        title: 'Dedicated Front End Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as product interface teams)',
        sections: [
          {
            type: 'para',
            content:
              "Our front-end development team is a highly skilled, autonomous unit composed of diverse roles, including UI/UX designers, front-end engineers, and component developers. Each role is made to deliver sleek, modern, and responsive web interfaces. Project management is collaboratively handled by a Scrum Master and the client’s product owner.",
          },
          {
            "type": "list",
            "content": [
              "Agile processes",
              "Clear and competitive pricing",
              "Simplified payment structures",
              "Scalable solutions",
              "Modern front-end technologies",
              "Suitable for startups",
              "Flexible engagement models"
            ]
          },
        ],
      },
      {
        title: 'Front End Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "Suitable for projects of any scale, our team augmentation model integrates specialized front-end developers into your existing team to bridge UI development gaps. Augmented experts collaborate as an extension of your local or distributed team, participating in daily stand-ups and reporting directly to your project leads.",
          },
          {
            "type": "list",
            "content": [
              "Scalable On-Demand Expertise",
              "Rapid Deployment & Cost Optimization",
              "Monthly Billing",
              "Eliminate Recruitment Overhead",
              "Transparent and Predictable Cost Structures"
            ]
          }
        ],
      },
      {
        title: 'Project Based',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale front end projects)',
        sections: [
          {
            type: 'para',
            content:
              "Fixed Price Model:\nIdeal for front-end projects with well-defined UI specifications, scope, deliverables, and acceptance criteria. Under this model, we provide a detailed project evaluation and a fixed cost estimate. It is suitable for small- to medium-scale front-end development projects and has comprehensive documentation and clear requirements.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nDesigned for projects with evolving requirements and complex UI/UX needs, where precise cost estimation is not feasible. This model allows front-end developers to be engaged on an hourly or resource-based billing structure.",
          },
        ],
      },
    ],
  },

  'back-end-development-services-india': {
    title: 'Choose From Back End Development Service Models',
    description:
      "Every project comes with its own set of challenges, whether it’s maintaining system reliability, integrating third-party services, or managing large datasets. Our models are designed to allow you to bring in the right expertise at each stage—whether it's a single developer for a task or a team for ongoing maintenance.",
    models: [
      {
        title: 'Dedicated Back End Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as product operations team)',
        sections: [
          {
            type: 'para',
            content:
              "A team from the top back end development company is the ideal solution for projects that require long-term collaboration. With this model, you get a fully dedicated group of back-end developers who work exclusively on your project. This team integrates with your internal processes, and maintains high-quality standards throughout the development lifecycle.",
          },
          {
            "type": "list",
            "content": [
              "Full-time, dedicated back-end developers.",
              "Integration with your existing team and workflows.",
              "Scalable team size.",
              "Complete ownership of project deadlines.",
              "Long-term collaboration.",
              "Specialized expertise in back-end technologies.",
              "Flexibility to adapt and adjust team composition."
            ]
          },
        ],
      },
      {
        title: 'Back End Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "Back-end team augmentation is a flexible solution that allows you to extend your existing team with additional specialized resources. This model is perfect when you need extra expertise for specific tasks or to scale up quickly during critical project phases. By adding expert back-end developers to your team, you can accelerate development.",
          },
          {
            "type": "list",
            "content": [
              "Ideal for scaling up development resources during peak project phases.",
              "Temporary or long-term support.",
              "Cost-effective solution for handling surges in work without hiring full-time staff.",
              "Reduces the overhead of recruitment.",
              "Facilitates knowledge transfer and skill development."
            ]
          },
        ],
      },
      {
        title: 'Project Based',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale back end projects)',
        sections: [
          {
            type: 'para',
            content:
              "Fixed Price Model:\nIt is perfect for back-end projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale back-end development, this model makes sure that both you and the development team are aligned on objectives.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nIt is designed for back-end projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs.",
          },
        ],
      },
    ],
  },

  'software-development-company-in-india': {
    title: 'Custom Engagement Models for Software Development Services',
    description:
      "We make engagement strategies as per your vision, size, and complexity. Our hiring options include the right team and services. And this is what makes us the best custom software development company.",
    models: [
      {
        title: 'Dedicated Front End Team',
        icon: lightdotnetmodalicon,
        subtitle: '(Your all-in-one solution)',
        sections: [
          {
            type: 'para',
            content:
              "Our team is a group of experts working towards your project. It consists of software developers, designers, and engineers who work together to deliver high-quality results. They are responsible for modern interfaces and backend functionality. Project management is a shared effort between our Scrum Master and your team’s product owner.",
          },
          {
            "type": "list",
            "content": [
              "Simple processes and fast delivery.",
              "Latest approaches for your future growth.",
              "Experts working with modern technologies.",
              "Engagement models for all types of clients.",
              "Affordable pricing options.",
              "Model made for startups or growing businesses."
            ]
          },
        ],
      },
      {
        title: 'Team Augmentation',
        icon: teamAug,
        subtitle: '(Expand your team when you need it)',
        sections: [
          {
            type: 'para',
            content:
              "If you already have a team but need extra help, our augmentation model is perfect. We’ll add skilled developers to your existing team to fill in any gaps. These experts will work as an extension of your team, joining your daily meetings and reporting directly to your leads.",
          },
          {
            "type": "list",
            "content": [
              "Access to skilled developers.",
              "Quick deployment and cost savings.",
              "Monthly billing with no recruitment hassle.",
              "Predictable and transparent costs."
            ]
          },
        ],
      },
      {
        title: 'Project Based Model',
        icon: ProjectBased,
        subtitle: '(For clearly defined projects)',
        sections: [
          {
            type: 'para',
            content:
              "If your project has a set scope, deliverables, and timelines, get our fixed-price model. We’ll provide a detailed cost estimate.",
          },
          {
            type: 'para',
            content:
              "For projects with evolving requirements, we offer a time-and-materials model. This allows you to pay based on the hours worked or the resources used.",
          },
          {
            "type": "list",
            "content": [
              "Fixed-price model for any project.",
              "Hourly or resource-based billing.",
              "Clear documentation and regular updates.",
              "Suitable for small to medium-sized projects."
            ]
          },
        ],
      },
    ],
  },

  'crm-software-development-company-india': {
    title: 'Choose From Our CRM Software Development Service Models',
    description:
      "Each project comes with its own complexities—be it integrating advanced tools, managing extensive datasets, or tackling these challenges. We have it all in our engagement models. If it’s a single expert for a short-term task or a team for continuous development, we’ve got the expertise to help.",
    models: [
      {
        title: 'Dedicated CRM Software Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as product interface teams)',
        sections: [
          {
            type: 'para',
            content:
              "For projects that demand consistent collaboration and deep involvement, a dedicated CRM software team is your best choice. Often referred to as product interface teams, our experts of such teams make refining strategies. With this model, you get a fully dedicated group of CRM software developers who work exclusively on your project. This team integrates with your internal processes, and maintains high-quality standards throughout the development lifecycle.",
          },
          {
            "type": "list",
            "content": [
              "Integration with your existing team and workflows Full-time.",
              "Dedicated CRM software developers & Scalable team size.",
              "Complete ownership of project deadlines.",
              "Long-term collaboration & Specialized expertise in back-end technologies.",
              "Adapt and adjust team composition."
            ]
          },
        ],
      },
      {
        title: 'Back End Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "CRM software developer team augmentation is a solution that allows you to extend your existing team with additional specialized resources. This model has been made for the companies that need extra expertise for their specific tasks or to scale up quickly during critical project phases. By adding expert CRM software developers to their team, they can accelerate development.",
          },
          {
            "type": "list",
            "content": [
              "Made to scale up development resources during peak project phases.",
              "Temporary or long-term support.",
              "Cost-effective solution for handling surges in work without hiring full-time staff.",
              "Reduces the overhead of recruitment.",
              "Facilitates knowledge transfer and skill development."
            ]
          },
        ],
      },
      {
        title: 'Project Based Model',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale back end projects)',
        sections: [
          {
            type: 'para',
            content:
              "Fixed Price Model:\nIt is perfect for back-end projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale back-end development, this model makes sure that both you and the development team are aligned on objectives.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nIt is designed for back-end projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs.",
          }
        ],
      },
    ],
  },

  'custom-software-development-services': {
    title: 'Choose From Our Custom Software Development Service Models',
    description:
      "We, at Bunnx, make your project after knowing what you really want from the software. Even though it requires our full team to be on it, we don't delay the process at any cost. But it would be best if you could choose from our service models to get what you really  need.",
    models: [
      {
        title: 'Dedicated Software Development Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as product interface teams)',
        sections: [
          {
            type: 'para',
            content:
              "If you have a project that demands a lot of focus and deep collaboration, this model is for you. Why? That's because it gives you a talented group of developers who work only for your project.",
          },
          {
            "type": "list",
            "content": [
              "Full-time experts who work with your team all the time.",
              "A team size that matches your needs.",
              "Get ownership of deadlines with a strong focus on quality.",
              "Expert problem-solving from professionals specializing in custom software.",
              "Perfect for businesses looking to build long-term services."
            ]
          },
        ],
      },
      {
        title: 'Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "If you need extra hands on deck without the overhead of permanent hires, our team augmentation model is for you. It fills the skill gap or scales your team.",
          },
          {
            "type": "list",
            "content": [
              "Collaborate with experienced developers and add them to your existing team.",
              "Made for short-term boosts or extended support.",
              "Save time and money by not recruiting and training.",
              "Bring in fresh perspectives and experienced individuals."
            ]
          },
        ],
      },
      {
        title: 'Project Based Model',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale projects)',
        sections: [
          {
            type: 'para',
            content:
              "Our project-based model, you'll get the following benefits:",
          },
          {
            type: 'para',
            content:
              "Fixed Price Model:\nIt's perfect for projects with well-defined goals and timelines. Get everything delivered on time and within budget with no surprises.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nBest for projects where requirements may evolve. Pay as you go with hourly billing, giving you the flexibility to adapt as needed.",
          }
        ],
      },
    ],
  },

  'software-consulting-services-india': {
    title: 'Choose From Our Software Consulting Service Models',
    description:
      "We understand that every project is different. If it’s a complex integration task, managing a large volume of data, or navigating a new set of challenges. But we can make it happen with our professionals. The team at Bunnx don’t just work for you—we work with you to build a plan that fits your goals, timeline, and resources.",
    models: [
      {
        title: 'Dedicated Consultancy Team',
        icon: lightdotnetmodalicon,
        subtitle: '(also known as Industry Experts)',
        sections: [
          {
            type: 'para',
            content:
              "For projects that need continuous collaboration and in-depth involvement, our team becomes an extension of your own. These product-focused teams dive deep into refining strategies, integrating with your internal processes. When you choose this model, you’re not just getting a group of developers—you’re getting a full-time, dedicated team that’s committed to the success of your project from start to finish. The team focuses on your project and maintains quality at every step.",
          },
          {
            "type": "list",
            "content": [
              "A team that can adjust when any situation is thrown.",
              "Full-time developers on your team and for your project.",
              "Long-term focus and project ownership."
            ]
          },
        ],
      },
      {
        title: 'Back End Team Augmentation',
        icon: teamAug,
        subtitle: '(also known as team extension or staff augmentation)',
        sections: [
          {
            type: 'para',
            content:
              "Sometimes, you just need an extra set of hands. Our back-end team augmentation service helps you add specialized expertise when you need it most. Whether it’s a short-term project or a longer-term phase, we’ll give you the support you need to push things forward. It’s a smart way to scale without the hassle of recruitment.",
          },
          {
            "type": "list",
            "content": [
              "Add developers to your team for a specific task or peak phase.",
              "Quick support without the need for full-time hiring.",
              "Boost your team’s capacity and skills as needed."
            ]
          }
          ,
        ],
      },
      {
        title: 'Project Based Model',
        icon: ProjectBased,
        subtitle: '(best suited for small-mid scale projects)',
        sections: [
          {
            type: 'para',
            content:
              "Our project-based model, you'll get the following benefits:",
          },
          {
            type: 'para',
            content: "Fixed Price Model:\nFor smaller or mid-sized back-end projects, our fixed-price model is perfect if you have a clear scope and well-defined requirements. You know what you need, and we get it done, ensuring both sides are aligned on the outcome. For projects with more fluid requirements, the time & material model gives you the ability to adapt and adjust as things evolve.",
          },
          {
            type: 'para',
            content:
              "Time & Material Model:\nWith our software consultants, your customer relationships are about to get a whole lot better. We bring custom software consulting services, from optimizing your database to making sure everything works smoothly when it’s deployed.",
          }
        ],
      },
    ],
  },

  'it-consulting-services-india': {
    title: 'Choose From Our IT Consulting Service Models',
    description:
      "Each project comes with its own set of challenges—whether it’s working with advanced tools, managing large datasets, or tackling specific tasks. That’s where our engagement models come in. If you need a single expert for a short-term task or a full team for ongoing development, we’ve got you covered.",
    "models": [
      {
        "title": "Dedicated Consultancy Team",
        "icon": lightdotnetmodalicon,
        "subtitle": "(also known as Industry Experts)",
        "sections": [
          {
            "type": "para",
            "content": "Do you need close collaboration and full-time focus? Choose Bunnx's dedicated IT consulting team. Think of it as having a team that’s part of your company but focused entirely on your project. They’ll work alongside your internal processes, handle deadlines, and bring in expertise to help refine your strategies. It’s a great fit for projects where long-term involvement is key."
          },
          {
            "type": "list",
            "content": [
              "Full-time CRM software developers.",
              "Works closely with your existing workflows.",
              "Team size can be adjusted as needed.",
              "Long-term collaboration with complete focus on your project."
            ]
          }
        ]
      },
      {
        "title": "Back End Team Augmentation",
        "icon": teamAug,
        "subtitle": "(also known as team extension or staff augmentation)",
        "sections": [
          {
            "type": "para",
            "content": "Need a little extra help for your team? Back-end team augmentation is like adding specialists to your workforce without the hassle of hiring full-time staff. For a short-term spike in work or a long-term task, we’ll help you fill the gaps with skilled developers who can hit the ground running."
          },
          {
            "type": "list",
            "content": [
              "Add extra resources when workload increases.",
              "Temporary or long-term support based on your needs.",
              "Cuts down recruitment time and costs.",
              "Boosts your team’s skills and speeds up development."
            ]
          }
        ]
      },
      {
        "title": "Project Based Model",
        "icon": ProjectBased,
        "subtitle": "(best suited for small-mid scale projects)",
        "sections": [
          {
            "type": "para",
            "content": "For smaller or mid-sized projects, a project-based model might be the best fit."
          },
          {
            type: 'para',
            content: "Fixed Price Model:\nPerfect when you know exactly what you want. We agree on the requirements, timeline, and costs upfront, so we’re both on the same page from day one. Great for projects with clear goals.",
          },
          {
            type: 'para',
            content: "Time & Material Model:\nIf your project needs a flexible solution, this is the way to go. If the requirements are changing or you’re figuring things out as you go, this model lets you pay based on hours worked or resources used."
          }

        ]
      }
    ]
  },


  "mobile-app-development-company-india": {
    "title": "Choose From Our Mobile App Development Service Models",
    "description": "Every project comes with its own set of challenges, whether it’s maintaining system reliability, integrating third-party services, or managing large datasets. Our models are designed to allow you to bring in the right expertise at each stage—whether it's a single developer for a task or a team for ongoing maintenance.",
    "models": [
      {
        "title": "Dedicated Mobile App Team",
        "subtitle": "(also known as mobile app teams)",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "If you're looking for a long-term collaboration on your mobile app project, partner with a top mobile app development company's team. With this approach, you’ll have a fully committed group of developers working only for your project."
          },
          {
            "type": "list",
            "content": [
              "A team of full-time mobile app developers always committed to your project.",
              "Integration with your existing processes and version control systems.",
              "Adjust team size as your app grows.",
              "Specialization in technologies like Node.js, Django, Laravel, or cloud-based solutions.",
              "Complete accountability for meeting deadlines and maintain code quality."
            ]
          }
        ]
      },
      {
        "title": "Mobile App Team Augmentation",
        "subtitle": "(also known as team extension or staff augmentation)",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "This model lets you improve your existing team with highly skilled mobile app developers. It has been made for businesses who want employees to handle specific tasks, meet tight deadlines, or manage high-demand phases of your project. It can accelerate app development, maintain high-quality standards without the overhead of hiring full-time resources."
          },
          {
            "type": "list",
            "content": [
              "Access to specialized skills in systems, API development, and database optimization.",
              "Rapid onboarding of developers to support peak workloads.",
              "Expansion of your technical team without hiring full-time staff.",
              "Support for advanced integrations, such as payment gateways, push notification systems, or third-party SDKs."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "(best suited for small-mid scale mobile app projects)",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "For smaller or mid-sized projects, a project-based model might be the best fit."
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nIt is a great fit for mobile application development projects where everything is mapped out from the beginning—features, designs, and deliverables. For example, if you're building an e-commerce app with standard features like user registration, product browsing, and payment integration, this model makes the development stay on track without unexpected costs."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nThe Time & Material Model works best for developing a social media app and wants to refine features like real-time messaging or AI-based recommendations as you go. With this model, you pay for the hours and resources used. With our mobile app development services, you'll also get new features, or pivot mid-development. This project includes innovation, experimentation, or iterative improvement."
          }
        ]
      }
    ]
  },

  "api-integration-and-development-services": {
    "title": "Choose From Our API Development & Integration Service Models",
    "description": "Every project comes with its own set of challenges, whether it’s maintaining system reliability, integrating third-party services, or managing large datasets. Our models are designed to allow you to bring in the right expertise at each stage—whether it's a single developer for a task or a team for ongoing maintenance",
    "models": [
      {
        "title": "Dedicated API Team",
        "subtitle": "(also known as product interface teams)",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "A team from the top API Development & Integration company is the ideal solution for projects that require long-term collaboration. With this model, you get a fully dedicated group of API developers who work exclusively on your project. This team integrates with your internal processes, and maintains high-quality standards throughout the development lifecycle."
          },
          {
            "type": "list",
            "content": [
              "Full-time, dedicated API developers",
              "Integration with your existing team and workflows.",
              "Scalable team size",
              "Complete ownership of project deadlines.",
              "Long-term collaboration",
              "Specialized expertise in API technologies",
              "Flexibility to adapt and adjust team composition"
            ]
          }
        ]
      },
      {
        "title": "API Team Augmentation",
        "subtitle": "(also known as team extension or staff augmentation)",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "API team augmentation is a flexible solution that allows you to extend your existing team with additional specialized resources. This model is perfect when you need extra expertise for specific tasks or to scale up quickly during critical project phases. By adding expert API developers to your team, you can accelerate development."
          },
          {
            "type": "list",
            "content": [
              "Ideal for scaling up development resources during peak project phases.",
              "Temporary or long-term support.",
              "Cost-effective solution for handling surges in work without hiring full-time staff.",
              "Reduces the overhead of recruitment.",
              "Facilitates knowledge transfer and skill development."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "(best suited for small-mid scale API projects)",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nIt is perfect for API projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale API Development & Integration, this model makes sure that both you and the development team are aligned on objectives."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIt is designed for API projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs."
          }
        ]
      }
    ]
  },

  "agile-consulting-services-india": {
    "title": "Choose From Our Agile Consulting Service Models",
    "description": "Pay as you go for flexibility as our models are ideal for projects that evolve during the process. It’s perfect for complex or shifting requirements. If you have small- to medium-sized projects, our hiring model can be the best as it includes fixed cost and clear expectations from the get-go.",
    "models": [
      {
        "title": "Dedicated Agile Team",
        "subtitle": "When you need deep, consistent collaboration, our dedicated agile team is the perfect choice.",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "This team becomes an extension of your own, offering full-time support to refine your processes and overcome challenges. Think of them as your Agile consultant services partners, focused entirely on your project."
          },
          {
            "type": "list",
            "content": [
              "Integration with your internal workflows",
              "Full-time agile experts at your disposal",
              "Scale the team as the project evolves",
              "Long-term collaboration with continuous support"
            ]
          }
        ]
      },
      {
        "title": "Back-End Team Augmentation",
        "subtitle": "Need a boost? Our team augmentation model helps you add agile experts to your existing team.",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "This is ideal for tackling specific challenges or scaling up during critical phases. You get the extra hands you need without the overhead of hiring full-time staff."
          },
          {
            "type": "list",
            "content": [
              "Add specialized skills when needed",
              "Support during peak times",
              "Cost-effective solution with easy knowledge transfer",
              "No more recruitment hassles"
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "Get these benefits with our project-based model:",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nFor projects with well-defined requirements, this model gives you a clear scope, set budget, and defined deliverables. It’s ideal for straightforward agile consulting tasks where everyone is aligned from the start."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIf your project is more dynamic with changing requirements, this model is your best option. You only pay for the hours worked, giving you flexibility to evolve as you go. It’s ideal for situations where the scope can shift over time."
          }
        ]
      },

    ]
  },

  "application-development-company-india": {
    "title": "Choose From Our Application Development Service Models",
    "description": "We understand that every project comes with its own unique hurdles when you are building for your business growth. But our service models are designed to provide exactly the kind of support you need.",
    "models": [
      {
        "title": "Dedicated Application Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "This model works best for projects that require strong teamwork and long-term focus. You’ll have a group of talented developers fully focused on your project. They will work closely with your team to give top-notch results."
          },
          {
            "type": "list",
            "content": [
              "Full-time developers for your project.",
              "Easily fit into your existing team.",
              "Adjust the team size.",
              "Take full responsibility for meeting deadlines.",
              "Expert knowledge in application development.",
              "Flexibly make changes as your project evolves."
            ]
          }
        ]
      },
      {
        "title": "Application Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Our application development services are a great option when you need extra help for a short time or a particular phase of your project. It helps in scaling up without committing to permanent hires."
          },
          {
            "type": "list",
            "content": [
              "Add skilled developers to your team.",
              "Suitable for short-term or long-term requirements.",
              "Saves costs compared to hiring full-time employees.",
              "Skip the hassle of recruiting and training new staff.",
              "Brings fresh expertise to your team."
            ]
          }
        ]
      },
      {
        "title": "Project-Based Model",
        "subtitle": "Best for small to medium application projects",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nModel for projects where the scope is clearly defined. This model should be chosen if you want everything to be delivered on time and within budget. It works best for clearly outlined timelines and has Affordable Pricing with no surprises."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nPerfect for projects where things might change along the way. This model allows developers to work on an hourly basis, which is great for projects with uncertain requirements."
          }
        ]
      }
    ]
  },

  "website-development-services-india": {
    "title": "Choose From Our Website Development Service Models",
    "description": "Choosing the right team structure is crucial when building or upgrading your website. Some projects need ongoing collaboration, while others require extra hands or short-term expertise. Our engagement models are built to match your specific needs, offering flexibility and technical expertise at every step of the development process.",
    "models": [
      {
        "title": "Dedicated Website Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "For long-term, complex projects, a dedicated website team provides consistency and focus. This team becomes an extension of your business, fully integrating with your workflows to deliver quality results. Whether building a platform from scratch or scaling an existing system, this model ensures specialized support throughout website development."
          },
          {
            "type": "list",
            "content": [
              "Full-time developers exclusively working on your project.",
              "Customized workflows that fit your internal processes.",
              "Easily adjustable team size based on project requirements.",
              "Accountability for all project deadlines and milestones.",
              "Long-term collaboration with consistent quality delivery.",
              "Expertise in advanced web development technologies."
            ]
          }
        ]
      },
      {
        "title": "Website Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "When your in-house team needs extra hands or specific expertise, team augmentation is the answer. It’s a flexible way to add skilled developers to your team for a particular task or period, helping you meet deadlines or scale faster during demanding project phases."
          },
          {
            "type": "list",
            "content": [
              "Expand your team with skilled developers without full-time commitments.",
              "Access specialized talent for specific tasks or technologies.",
              "Ideal for peak project phases or short-term requirements.",
              "Reduces recruitment and onboarding time.",
              "Cost-efficient solution for handling additional workload."
            ]
          }
        ]
      },
      {
        "title": "Project-Based Model",
        "subtitle": "Best suited for small to mid-scale website projects",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nThis model is perfect for projects with clear goals and requirements. It offers a structured approach with agreed deliverables and timelines. Best suited for straightforward website app development like informational websites or simple online stores."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nThis model works best for projects with flexible or evolving needs. Developers work on an hourly or task-based billing system, giving you the ability to adapt the scope as requirements change. Great for adding new features or custom functionalities."
          }
        ]
      }
    ]
  },

  "cms-development-services-india": {
    "title": "Choose From Our CMS Development Service Models",
    "description": "Every business operates differently, and a one-size-fits-all approach rarely works. That’s why we offer multiple collaboration models, so you can bring in expert CMS developers exactly how and when you need them—without committing to a full project if it’s not required.",
    "models": [
      {
        "title": "Exclusive CMS Development Team",
        "subtitle": "Also known as CMS developers",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "This setup gives you a team that works only on your project. They don’t juggle multiple clients, which means they follow your processes, collaborate closely with your internal team, and focus entirely on building a high-quality CMS."
          },
          {
            "type": "list",
            "content": [
              "Full-time experts dedicated to your CMS project",
              "Adapts to your existing workflow and company culture",
              "Specialists with the right mix of skills and experience",
              "Complete control over timelines and project milestones",
              "Long-term commitment with continuous enhancements"
            ]
          }
        ]
      },
      {
        "title": "CMS Development Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Already have a development team but need extra support? Whether it’s a specialist for custom integrations or additional developers to meet a deadline, this model helps you bring in the right people at the right time."
          },
          {
            "type": "list",
            "content": [
              "Best for scaling resources as project demands change",
              "Available for short-term or long-term work",
              "Skip the recruitment process—get experienced developers immediately",
              "Learn from industry professionals while strengthening your in-house team"
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "Best suited for small-mid scale CMS projects",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nNeed to set up a CMS with specific features, integrate third-party tools, or improve the admin panel? We handle it at a fixed cost, with a transparent budget and timeline. No unexpected expenses or delays."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nNeed ongoing tweaks, layout improvements, or functionality upgrades? Pay based on actual work done, either hourly or per resource. This model is best suited for projects where priorities shift frequently."
          }
        ]
      }
    ]
  },

  "full-stack-development-services": {
    "title": "Choose From Our Full Stack Development Service Models",
    "description": "Our models are designed to allow you to bring in the right expertise at each stage—whether it's a single developer for a task or a team for ongoing maintenance.",
    "models": [
      {
        "title": "Dedicated Full Stack Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "A team from the top full stack development company is the ideal solution for projects that require long-term collaboration. With this model, you get a fully dedicated group of back-end developers who work exclusively on your project. This team integrates with your internal processes, and maintains high-quality standards throughout the development lifecycle."
          },
          {
            "type": "list",
            "content": [
              "Full-time, dedicated back-end developers",
              "Integration with your existing team and workflows.",
              "Scalable team size",
              "Complete ownership of project deadlines.",
              "Long-term collaboration",
              "Specialized expertise in back-end technologies",
              "Flexibility to adapt and adjust team composition"
            ]
          }
        ]
      },
      {
        "title": "Full Stack Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Back-end team augmentation is a flexible solution that allows you to extend your existing team with additional specialized resources. This model is perfect when you need extra expertise for specific tasks or to scale up quickly during critical project phases. By adding expert back-end developers to your team, you can accelerate development."
          },
          {
            "type": "list",
            "content": [
              "Ideal for scaling up development resources during peak project phases.",
              "Temporary or long-term support.",
              "Cost-effective solution for handling surges in work without hiring full-time staff.",
              "Reduces the overhead of recruitment.",
              "Facilitates knowledge transfer and skill development."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "Best suited for small-mid scale Full Stack projects",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nIt is perfect for back-end projects with well-defined requirements, specifications, and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale back-end development, this model makes sure that both you and the development team are aligned on objectives."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIt is designed for back-end projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs."
          }
        ]
      }
    ]
  },


  "ecommerce-development-company-india": {
    "title": "Choose From Our Ecommerce Development Service Models",
    "description": "Our models are designed to bring in the right expertise at each stage—whether it's a single developer for a task or a team for ongoing maintenance.",
    "models": [
      {
        "title": "Dedicated Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "A team from the top eCommerce Development services is the ideal solution for projects that require long-term collaboration. With this model, you get a fully dedicated group of eCommerce website developers who work exclusively on your project. This team integrates with your internal processes, and maintains high-quality standards throughout the development lifecycle."
          },
          {
            "type": "list",
            "content": [
              "Full-time, dedicated eCommerce website developers",
              "Integration with your existing team and workflows.",
              "Scalable team size",
              "Complete ownership of project deadlines.",
              "Long-term collaboration",
              "Specialized expertise in eCommerce website technologies",
              "Flexibility to adapt and adjust team composition"
            ]
          }
        ]
      },
      {
        "title": "Ecommerce Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Team augmentation is a flexible solution that allows you to extend your existing team with additional specialized resources. This model is perfect when you need extra expertise for specific tasks or to scale up quickly during critical project phases. By adding expert ecommerce developers to your team, you can accelerate development."
          },
          {
            "type": "list",
            "content": [
              "Ideal for scaling up eCommerce development resources during peak project phases.",
              "Temporary or long-term support.",
              "Cost-effective solution for handling surges in work without hiring full-time staff.",
              "Reduces the overhead of recruitment.",
              "Facilitates knowledge transfer and skill development."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "Best suited for small-mid scale eCommerce projects",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nIt is perfect for eCommerce projects with well-defined specifications and deliverables. This approach works best when the scope is clear. Ideal for small- to medium-scale back-end development, this model makes sure that both you and the eCommerce development team are aligned on objectives."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIt is designed for eCommerce projects with dynamic requirements and evolving scopes. This model allows for flexible engagement, where developers work based on hourly or resource-based billing. It’s perfect for projects with uncertain or rapidly changing requirements, such as complex UI/UX needs."
          }
        ]
      }
    ]
  },


  "ecommerce-consulting-services": {
    "title": "Choose From Our Ecommerce Consulting Service Models",
    "description": "We have hiring models that are ideal for clear-cut projects. They include fixed cost and predictable timeline. Perfect for initial builds, it has a pricing as per the project. No extra or hidden costs and great for complex needs. Also, if you want ongoing improvements in your project, we have a different pricing model for it.",
    "models": [
      {
        "title": "Dedicated Ecommerce Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "When you need ongoing support, our dedicated team model is the best fit. Our team works solely on your ecommerce project and brings continuous focus to optimize your store. We streamline every process and improve your customer experience."
          },
          {
            "type": "list",
            "content": [
              "A team working exclusively on your project",
              "Full ownership of project deadlines",
              "Resources as your business grows",
              "Long-term collaboration and expertise"
            ]
          }
        ]
      },
      {
        "title": "Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "If your existing team needs a little extra help, our back-end team augmentation model is designed for you. It allows you to bring in developers without the overhead of hiring full-time staff, perfect for addressing bottlenecks or scaling during busy periods."
          },
          {
            "type": "list",
            "content": [
              "Add expertise without the hiring process",
              "Support for development phases",
              "Short-term or long-term options",
              "Cost-effective and growing projects"
            ]
          }
        ]
      },
      {
        "title": "Project-Based Model",
        "subtitle": "Best suited for small-mid scale eCommerce projects",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nFor ecommerce projects, the fixed price model should be your way to go. This approach offers you clarity on cost and deliverables from the start, perfect for small- to medium-scale projects where the scope is clear."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nWhen your ecommerce project has shifting requirements or complex needs, the time and material model gives you the flexibility to adapt as you go. You only pay for the work done, allowing for adjustments along the way."
          }
        ]
      }
    ]

  },


  "web-application-development-company-india": {
    "title": "Choose From Our Web App Development Service Models",
    "description": "Instead of normal hiring models, we provide expertise exactly when and where it's needed. If you need an entire team for a long-term project or talented developers to fill in the gaps, our models keep development predictable without unnecessary commitments.",
    "models": [
      {
        "title": "Dedicated Web App Team",
        "subtitle": "Also known as web app teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "For businesses with long-term web application development plans, having a dedicated team maintains the execution process. This model provides a full-time group of developers who work on your project."
          },
          {
            "type": "list",
            "content": [
              "A development team fully committed to your project.",
              "Collaboration with your internal tools and workflows.",
              "The ability to adjust team size as development progresses.",
              "Expertise in Node.js, Django, Laravel, and beyond.",
              "Full accountability for meeting deadlines and maintaining code standards."
            ]
          }
        ]
      },
      {
        "title": "Web App Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "When your in-house team needs extra support, this model provides skilled developers. If it's a feature, a complex integration, or a tight deadline, you can bring in experts without long-term hiring commitments."
          },
          {
            "type": "list",
            "content": [
              "Developers for API development, database structuring, and backend frameworks.",
              "Quick onboarding to meet tight delivery schedules.",
              "Expanded technical capabilities without permanent hires.",
              "Support for advanced integrations such as payment gateways, push notifications, or third-party services."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "Best suited for small-mid scale web app projects",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model:\nBest suited for projects with uncertain requirements from the start. If you're building an online store with standard features like user authentication, product browsing, and checkout, this model keeps everything predictable."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nFor applications that require continuous refinement, this model allows adjustments throughout development. If you’re building a social media platform with interactive messaging and AI-based recommendations, this model lets you experiment along the way."
          }
        ]
      }
    ]


  },


  "ecommerce-maintenance-and-support-services": {
    "title": "Choose From Our Ecommerce Website Maintenance & Support Service Models",
    "description": "Websites don’t just run themselves. From fixing bugs to integrating new features and keeping everything in top shape, maintenance is an ongoing process. That’s why we offer models that fit how you want to work—if you need a full-fledged team, a few extra experts, or a fixed project approach.",
    "models": [
      {
        "title": "Dedicated Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "If your ecommerce website is a big, ongoing project, this is your best bet. You get a dedicated team of developers who work exclusively on your store—just like an in-house team but without the hassle of hiring. They become an extension of your business, diving deep into the details, maintaining standards, and keeping everything running like a well-oiled machine."
          },
          {
            "type": "list",
            "content": [
              "A full team of ecommerce website developers working solely on your project.",
              "Works hand-in-hand with your internal team, following your workflows.",
              "Scale up or down depending on what your store needs.",
              "You call the shots on timelines and project priorities.",
              "Built for long-term engagement.",
              "Expert-level knowledge in ecommerce platforms and technologies.",
              "Adjust the team structure as your project moves forward."
            ]
          }
        ]
      },
      {
        "title": "Ecommerce Website Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Need more hands on deck? This model is for those times when your team is stretched thin. Whether you’re rolling out new features, fixing bugs, or tackling heavy updates, we’ll plug in the right experts so you don’t have to hire full-time staff. Think of it as adding reinforcements—without the overhead."
          },
          {
            "type": "list",
            "content": [
              "Get extra developers whenever your project demands it.",
              "Perfect for short bursts of work or long-term maintenance.",
              "No need to go through the long hiring process—get experts, fast.",
              "Keep your costs in check while boosting your development power.",
              "Your team stays in control, and we provide the backup.",
              "Knowledge sharing helps your in-house team stay ahead."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "Benefits you'll get with this model:",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model: Made for projects with clear-cut requirements. If you already know exactly what needs to be done—like a security patch, plugin upgrade, or minor backend revamp—this option gives you a set cost upfront. No surprises, just results."
          },
          {
            "type": "para",
            "content": "Time & Material Model: Perfect for projects with changing requirements. Need continuous improvements, complex updates, or enhancements that aren’t easy to define in advance? This model works on an hourly or resource-based approach."
          }
        ]
      }
    ]
  },

  "shopify-development-company-in-india": {
    "title": "Choose From Our Shopify Development Service Models",
    "description": "Selecting the right team structure is key when building or upgrading your website. Different projects require different levels of collaboration, expertise, and flexibility. Our service models cater to your unique needs, whether you’re seeking long-term partnership, extra resources, or specialized short-term support throughout your Shopify development journey.",
    "models": [
      {
        "title": "Dedicated Website Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "For large and long-term projects, our Shopify development agency offers deep focus and continuous support. This model works as an extension of your business, allowing seamless integration with your workflows while delivering consistent, high-quality results throughout the entire project."
          },
          {
            "type": "list",
            "content": [
              "Full-time developers working exclusively on your project.",
              "Customized workflows to align with your internal processes.",
              "Team size adjusted based on project complexity.",
              "Accountability for timelines and milestone delivery.",
              "Long-term collaboration with consistent results."
            ]
          }
        ]
      },
      {
        "title": "Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Website team augmentation provides the flexibility to scale your in-house team with skilled developers on demand. This model is ideal when your existing team needs extra support or specialized skills during a particular phase of the project."
          },
          {
            "type": "list",
            "content": [
              "Augmenting your team with experts for targeted tasks.",
              "Gaining access to niche skills without long-term commitments.",
              "Scaling your team quickly during peak project phases.",
              "Reduced onboarding time.",
              "Quick adaptation to evolving project requirements."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "subtitle": "Benefits for you:",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Fixed Price Model: This model is ideal for projects with clear specifications and timelines, offering predictability in terms of costs and deadlines. It is perfect for simple Shopify stores or informational websites that require a set structure."
          },
          {
            "type": "para",
            "content": "Time & Material Model: This model works best for more dynamic projects where scope may change. Developers work on an hourly or task-based billing system, allowing the flexibility to adjust the project as needed. This model is great for adding custom features or additional functionalities to your Shopify store."
          }
        ]
      }
    ]
  },



  "ecommerce-implementation": {
    "title": "Choose From Our Ecommerce Implementation Service Models",
    "description": "Choosing the right engagement model can make a big difference in how your project progresses. Here’s a detailed breakdown of different models given by Bunnx so that you can pick the one that aligns best with your project.",
    "models": [
      {
        "title": "Dedicated Ecommerce App Team",
        "subtitle": "Also known as mobile app teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "Are you looking for a long-term team to bring your ecommerce vision to reality? If yes, then this is the way to go. We assign a team of ecommerce specialists who work on your store. They create, improve, or maintain it. Our team is always available for updates and managing integrations."
          },
          {
            "type": "list",
            "content": [
              "A full-time team that knows your ecommerce store inside out.",
              "Direct communication and collaboration, just like an in-house team.",
              "Complete control over project timelines and updates.",
              "Experts who specialize in ecommerce platforms, payment systems, and backend automation.",
              "A long-term partnership that grows with your business."
            ]
          }
        ]
      },
      {
        "title": "Ecommerce Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Already have an in-house team but need extra hands to move things faster? This model allows you to bring in ecommerce developers, UX designers, or backend engineers as needed. If you want a big sales event, migrate to a new platform, or fix performance issues, you can scale your team without hiring full-time employees."
          },
          {
            "type": "list",
            "content": [
              "Additional resources for handling high-demand periods.",
              "Short-term or long-term engagement, whatever works best for you.",
              "A way to expand your development team without hiring full-time staff.",
              "Faster turnaround for updates, features, or troubleshooting.",
              "Knowledge-sharing and skill development for your in-house team."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Get these benefits under this model:"
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nBest for projects with a well-defined scope, where everything from features to timelines is planned in advance. This model is made for people who have small to mid-scale ecommerce stores. You have to pay a set price, regardless of how much time the developers take."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nThe time & material model is for a structured approach for fixed-scope projects. If you're experimenting with new designs or adding complex features, you only pay for the time spent. You'll get hourly or resource-based billing under this model. We increase or decrease resources as per workload."
          }
        ]
      }
    ]
  },

  "ecommerce-web-development": {
    "title": "Choose From Our eCommerce Web Development Service Models",
    "description": "Generic solutions don’t cut it when your eCommerce platform is handling real customers. We take the time to analyze your app’s structure and dependencies. Do you need a developer for a short-term fix? Our team will get it done without disrupting your workflow. You can decide the level of involvement, and we handle the execution.",
    "models": [
      {
        "title": "Dedicated eCommerce App Team",
        "subtitle": "Also known as eCommerce app teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "When you’re serious about building an eCommerce app that stands out, you need a team that treats your project as their own. With a dedicated team, you’ll have full-time developers who are completely invested in building and expanding your app. No juggling multiple projects—just a focused team committed to writing solid code and keeping development on track."
          },
          {
            "type": "list",
            "content": [
              "A team of full-time developers committed to your eCommerce project.",
              "Developers who work on your app without splitting attention across multiple projects.",
              "Works with your existing processes, tools, and version control systems for a seamless development flow.",
              "Adjust the team size as your app expands.",
              "Experts in technologies like Node.js, Django, Laravel, and more."
            ]
          }
        ]
      },
      {
        "title": "eCommerce Web Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Already have an eCommerce web development team but need extra hands to push through a major update or handle a surge in traffic? Team augmentation brings in the right specialists exactly when you need them. Developers are onboarded quickly, work directly with your existing team, and bridge the gap when tight deadlines demand extra manpower."
          },
          {
            "type": "list",
            "content": [
              "Bring in extra developers without long-term hiring commitments.",
              "Quick onboarding of experts in backend, API development, UI/UX, or database optimization.",
              "Supports short-term demands like launching a new feature, managing high-traffic seasons, or fixing bugs.",
              "Expand your technical team temporarily to meet aggressive deadlines.",
              "Helps with advanced integrations like payment gateways, push notifications, and third-party SDKs."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Best suited for small-mid scale eCommerce app projects."
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nOur model is best for projects with defined features and timelines. We also build eCommerce apps with standard functionalities such as product catalogs, shopping carts, and checkout systems. The cost is set from the beginning and prevents unexpected budget overruns."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nAt Bunnx, our experts design for projects requiring experimentation and iteration. It's also suitable for apps incorporating AI-based recommendations, chatbots, or personalized shopping experiences. You can pay based on the actual work done to modify features or pivot development mid-project."
          }
        ]
      }
    ]
  },

  "woocommerce-development-services-india": {
    "title": "Choose From Our WooCommerce Development Service Models",
    "description": "Every business has a different journey, and so does every online store. Whether you're launching a brand-new WooCommerce shop or enhancing an existing one, we offer hiring models that bring in the right talent at the right time. From full-time developers to short-term assistance, we have a structure that works for you.",
    "models": [
      {
        "title": "Dedicated WooCommerce Development Team",
        "subtitle": "Also known as WooCommerce teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "If your store is growing and you need a team that works exclusively on your platform, this model is perfect. You get a committed group of WooCommerce developers who fine-tune, upgrade, and expand your store as needed."
          },
          {
            "type": "list",
            "content": [
              "Full-time experts who understand your store inside out.",
              "Works alongside your existing business operations.",
              "Expands or contracts based on your store’s requirements.",
              "Complete control over timelines and delivery.",
              "Specialized WooCommerce skills for store optimization."
            ]
          }
        ]
      },
      {
        "title": "WooCommerce Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Need extra hands to tackle new features, integrations, or store maintenance? Our team augmentation model gives you access to a skilled WooCommerce development team who can support your team on demand. Whether it’s a temporary requirement or ongoing collaboration, this model keeps your store on track."
          },
          {
            "type": "list",
            "content": [
              "Scale up development resources during peak shopping seasons.",
              "Short-term or long-term assistance without the permanent hiring.",
              "Saves hiring costs while maintaining high-quality work.",
              "A hassle-free way to add WooCommerce expertise to your team.",
              "Helps transfer knowledge to your in-house team."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Get benefits with our model!"
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nBest for projects with clear goals, timelines, and specifications. We define the work scope upfront, so you know exactly what to expect. Ideal for small-to-medium WooCommerce improvements."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nDesigned for projects that require ongoing tweaks, evolving requirements, or advanced UI/UX work. This approach lets you pay based on actual work done."
          }
        ]
      }
    ]
  },





  "it-staff-augmentation-services-india": {
    "title": "Choose From Our Staff Augmentation Service Models",
    "description": "Your business is growing, projects are piling up, and hiring takes too long. That’s where we step in. Our staff augmentation models help you bring in skilled professionals without the hassle of recruitment, payroll, or paperwork. If you need a dedicated team, temporary support, or project-based expertise, we’ve got you covered.",
    "models": [
      {
        "title": "Dedicated Development Team",
        "subtitle": "Also known as your in-house tech expansion",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "Some projects require long-term commitment and a dedicated set of hands. With this model, you get a full-time team that works as an extension of your business, handling every technical aspect with precision."
          },
          {
            "type": "list",
            "content": [
              "Full-time professionals aligned with your workflow",
              "Direct communication and project ownership",
              "Adjust the team size based on project demands",
              "Specialization in different tech stacks for diverse requirements"
            ]
          }
        ]
      },
      {
        "title": "Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Want to add more experts to meet deadlines or tackle specific tasks? This model helps you scale up without long-term commitments. Whether it’s for a few months or ongoing assistance, you get professionals who work with your in-house staff."
          },
          {
            "type": "list",
            "content": [
              "Ideal for short-term or urgent projects",
              "No overhead costs of hiring full-time employees",
              "Access to skilled professionals without recruitment delays",
              "Helps upskill your existing team by working alongside experts"
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Check these benefits you’ll get with this model."
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nBest for projects with a clear scope and defined deliverables. You know what you’re paying for upfront, making it ideal for structured work."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nWhen project requirements shift, this approach keeps things flexible. You pay for the actual work done, making it ideal for complex or evolving projects."
          }
        ]
      }
    ]
  },

  "hire-software-developer-india": {
    "title": "Choose From Our Hire Software Developer Service Models",
    "description": "Picking an engagement model isn’t just about costs—it’s about how you want to build, collaborate, and grow your project. Some businesses prefer a well-structured plan with fixed pricing, while others need the freedom to experiment and adapt. If you want a defined roadmap from day one or prefer ongoing development with room for change, here are the options you must choose.",
    "models": [
      {
        "title": "Dedicated Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "If you're building a complex product and need a team that’s fully invested in it, this model is the best fit. We assemble a team of developers, testers, and project managers who work on your software. It is made to provide consistency, deep understanding, and long-term reliability."
          },
          {
            "type": "list",
            "content": [
              "A full-time team that works on your project.",
              "Direct collaboration and involvement in daily progress.",
              "Full control over the development process, from planning to execution.",
              "Experts across different tech stacks, from frontend to backend development.",
              "A long-term partnership that grows with your business."
            ]
          }
        ]
      },
      {
        "title": "Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Do you need more developers to meet deadlines or handle complex integrations? This model allows you to add skilled developers to your existing team without going through the hiring process. If it's frontend, backend, or DevOps expertise, we provide the right talent on demand."
          },
          {
            "type": "list",
            "content": [
              "Extra hands when deadlines are tight.",
              "Short-term or long-term engagement, depending on your workload.",
              "A budget-friendly way to scale development without hiring full-time employees.",
              "Faster feature releases and debugging.",
              "Knowledge-sharing and mentorship for your in-house team."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Here are the benefits you'll get if you hire software developers under this model:"
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nIt is perfect for projects that have long-term requirements and timelines. Your team will get a clear roadmap and a predictable budget under this model. It works well when you have a clear idea of what you want to build, how it should function, and when it should be delivered."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIf your project isn’t fully defined yet, or you want the flexibility to add new features as you go, this model is a better fit. You pay based on actual work done—either hourly or per resource—so you’re not locked into a fixed scope. With this, you can adjust priorities, features, and scope as needed."
          }
        ]
      }
    ]
  },

  "it-outsourcing-services": {
    "title": "Choose From Our IT Outsourcing Service Models",
    "description": "Building great software requires writing code and having the right people in place at the right time. If you’re launching a new project, expanding your tech team, or tackling a complex system, hiring the right developers can make all the difference.",
    "models": [
      {
        "title": "Dedicated Team",
        "subtitle": "Also known as back end teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "We don’t just provide developers but rather match you with skilled professionals. You need a team that fits into your workflow and gets things done. If your project requires ongoing development, maintenance, or scaling, a dedicated team is the way to go. These developers work exclusively on your project."
          },
          {
            "type": "list",
            "content": [
              "Handpicked developers who work only on your project",
              "Direct communication and full control over development",
              "Long-term engagement for consistent progress",
              "Expertise in back-end, front-end, database management, and integrations"
            ]
          }
        ]
      },
      {
        "title": "Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Sometimes, you don’t need a full-time team—just a few experts to speed things up. This model allows you to add skilled developers to your existing team for tasks, critical deadlines, or scaling up temporarily."
          },
          {
            "type": "list",
            "content": [
              "Get the expertise you need without permanent hires",
              "Grow your business as project demands change",
              "Avoid recruitment delay and bring in skilled developers instantly",
              "Perfect for feature upgrades, system integrations, or workload spikes"
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Benefits you'll get with this model:"
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nFor projects with deadlines and deliverables, our fixed-price model will give you exactly what you need. We don't hide costs as everything is planned upfront. This model is made for small to mid-sized projects. Our team always works towards a set timeline."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIf your projects change most times, our time-and-material model will help you pay for development based on actual work done. It is great for projects with changing priorities as you will pay without any unnecessary commitments."
          }
        ]
      }
    ]
  },

  "hire-dedicated-development-team-india": {
    "title": "Choose From Our Dedicated Development Service Models",
    "description": "Different projects come with different technical challenges. Some demand a dedicated team for an ongoing build, while others require additional hands to meet tight deadlines or handle specific tasks. No matter where you are in your development cycle, we provide structured models to match your requirements.",
    "models": [
      {
        "title": "Dedicated Development Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "For businesses that require constant technical support and structured development, this model offers a fully committed team working exclusively on your software."
          },
          {
            "type": "list",
            "content": [
              "A team that works only on your project.",
              "Developers adapt to your internal processes and reporting structures.",
              "Long-term partnership that needs continuous updates and expansion.",
              "Structured sprint planning and final deployment.",
              "Refine the team with backend architecture to API development."
            ]
          }
        ]
      },
      {
        "title": "Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "When your internal team is overloaded, or a project requires niche expertise, this model helps you expand your development capacity with skilled professionals without hiring full-time employees."
          },
          {
            "type": "list",
            "content": [
              "Quick access to experienced developers.",
              "No long-term commitments on project phases.",
              "Handle unexpected workload spikes.",
              "No need to onboard new employees when you require temporary expertise.",
              "Our developers work directly with your engineers."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "Get these benefits with this model."
          },
          {
            "type": "para",
            "content": "Fixed-Price Model:\nWorks best when project specifications are locked in, and the roadmap is clearly defined. Suitable for businesses looking for a straightforward development approach without unexpected deviations. It works well for businesses launching new applications. The pricing is agreed upon before the work starts."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nDesigned for projects that require ongoing adjustments, allowing room for changing requirements and iterations. You need to pay for actual work hours instead of committing to a fixed structure. If the software development approach changes midway, this model allows quick adaptations. When design elements and user interactions need frequent refinements."
          }
        ]
      }
    ]
  },

  "offshore-dedicated-development-center-india": {
    "title": "Choose From Our Offshore Dedicated Centre Models",
    "description": "Backend architecture and full-stack development are made by our offshore teams. It will help you get codes for system management. You can also maintain complete control over priorities while we manage the logistics, infrastructure, and operations of your remote team.",
    "models": [
      {
        "title": "Dedicated Team",
        "subtitle": "Also known as product interface teams",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "For businesses that require an exclusive offshore team, this model provides long-term collaboration with skilled professionals. The team is handpicked to give you consistent output and streamlined development. It makes your projects move forward with precision while reducing the complexities of hiring a remote workforce."
          },
          {
            "type": "list",
            "content": [
              "A fully committed team giving the best output.",
              "Operates as an extension of your in-house staff.",
              "Scales up or down.",
              "Complete control over project roadmaps and timelines.",
              "Deep technical expertise across various software stacks."
            ]
          }
        ]
      },
      {
        "title": "Offshore Team Augmentation",
        "subtitle": "Also known as team extension or staff augmentation",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Sometimes, you don’t need a full offshore setup but require skilled professionals to support your existing team. Our team augmentation model lets you bring in offshore developers with specialized expertise. If it’s cloud infrastructure or platform development, our developers accelerate project execution."
          },
          {
            "type": "list",
            "content": [
              "A quick way to expand your offshore team without long-term contracts.",
              "Works well for scaling operations during critical project phases.",
              "Reduces the challenges of hiring talent for niche technologies.",
              "Brings in expertise for software, platform, and system development.",
              "Encourages knowledge-sharing between teams."
            ]
          }
        ]
      },
      {
        "title": "Project Based",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "You'll get these benefits under a project-based model."
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nIf your offshore project has a well-defined scope with clear deliverables, this model offers a structured approach with predictable costs. Ideal for businesses looking for focused offshore development."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nFor projects requiring ongoing development and adaptability, this model allows for a flexible engagement with resource-based billing. Best suited for continuous software enhancements, infrastructure management, or backend system development."
          }
        ]
      }
    ]
  },

  "outsourcing-software-development-in-india": {
    "title": "Outsource Your Software Development with India’s Top Engineers",
    "description": "Accelerate your product development with our expert outsourcing solutions. Whether you need a full-scale development team, expert consultants, or project-based execution, we provide flexible engagement models tailored to your business needs. Scale efficiently, reduce costs, and focus on innovation while we handle the development.",
    "models": [
      {
        "title": "Dedicated Development Team",
        "subtitle": "An exclusive team aligned with your goals",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "Build a long-term, high-performance team that works as an extension of your company. Our dedicated developers integrate seamlessly with your workflows, following your processes and business culture."
          },
          {
            "type": "list",
            "content": [
              "Fully managed team committed to your projects.",
              "Seamless collaboration with your in-house staff.",
              "Scalable team structure to match project needs.",
              "Access to top-tier engineering talent.",
              "End-to-end development, from architecture to deployment."
            ]
          }
        ]
      },
      {
        "title": "IT Staff Augmentation",
        "subtitle": "Boost your team with expert engineers",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Augment your existing team with highly skilled developers, designers, or QA engineers. Whether you need short-term assistance or specialized expertise, we provide vetted professionals to accelerate your project’s success."
          },
          {
            "type": "list",
            "content": [
              "Quickly onboard experienced professionals.",
              "No long-term hiring commitments.",
              "Reduce overhead costs and HR burdens.",
              "Specialized expertise in AI, Cloud, Blockchain, and more.",
              "Work in sync with your internal teams."
            ]
          }
        ]
      },
      {
        "title": "Project-Based Outsourcing",
        "subtitle": "Turnkey software development solutions",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "From idea to deployment, our project-based outsourcing model delivers complete software solutions with fixed timelines and budgets. We ensure high-quality development while you focus on business growth."
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nBest for well-defined projects with clear objectives and deliverables. Provides cost predictability and structured execution."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIdeal for evolving projects requiring continuous development. Offers flexibility in scope, resources, and billing."
          }
        ]
      },

    ]
  },


  "hire-dedicated-technical-team-india": {
    "title": "Unlock Your Vision with Our Expert Dedicated Teams",
    "description": "Collaborate with top talent and streamline your development process. Our flexible solutions help you innovate and grow your business.",
    "models": [
      {
        "title": "Dedicated Development Team",
        "subtitle": "An exclusive team aligned with your goals",
        "icon": lightdotnetmodalicon,
        "sections": [
          {
            "type": "para",
            "content": "Build a long-term, high-performance team that works as an extension of your company. Our dedicated developers integrate seamlessly with your workflows, following your processes and business culture."
          },
          {
            "type": "list",
            "content": [
              "Fully managed team committed to your projects.",
              "Seamless collaboration with your in-house staff.",
              "Scalable team structure to match project needs.",
              "Access to top-tier engineering talent.",
              "End-to-end development, from architecture to deployment."
            ]
          }
        ]
      },
      {
        "title": "IT Staff Augmentation",
        "subtitle": "Boost your team with expert engineers",
        "icon": teamAug,
        "sections": [
          {
            "type": "para",
            "content": "Augment your existing team with highly skilled developers, designers, or QA engineers. Whether you need short-term assistance or specialized expertise, we provide vetted professionals to accelerate your project’s success."
          },
          {
            "type": "list",
            "content": [
              "Quickly onboard experienced professionals.",
              "No long-term hiring commitments.",
              "Reduce overhead costs and HR burdens.",
              "Specialized expertise in AI, Cloud, Blockchain, and more.",
              "Work in sync with your internal teams."
            ]
          }
        ]
      },
      {
        "title": "Project-Based Outsourcing",
        "subtitle": "Turnkey software development solutions",
        "icon": ProjectBased,
        "sections": [
          {
            "type": "para",
            "content": "From idea to deployment, our project-based outsourcing model delivers complete software solutions with fixed timelines and budgets. We ensure high-quality development while you focus on business growth."
          },
          {
            "type": "para",
            "content": "Fixed Price Model:\nBest for well-defined projects with clear objectives and deliverables. Provides cost predictability and structured execution."
          },
          {
            "type": "para",
            "content": "Time & Material Model:\nIdeal for evolving projects requiring continuous development. Offers flexibility in scope, resources, and billing."
          }
        ]
      },

    ]
  }

};





export default function HiringModels({ serviceDetailPageSlug }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev < 4 ? prev + 1 : prev));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isInView]);


  const service = serviceData[serviceDetailPageSlug] || serviceData['software-development-company-in-india'];

  if (!service) {
    return <p>Hiring models content not found for the provided slug.</p>;
  }

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 sm:py-10 py-5">
        <h2 className="font-semibold text-orange-500 text-lg">Engagement Models</h2>
        <h4 className="font-semibold text-3xl my-2">{service.title}</h4>
        <p className="text-md text-gray-800">{service.description}</p>

        <div ref={containerRef} className="relative mt-8 my-4">
          <div className="grid gap-5 grid-col-1 sm:grid-cols-3">
            {service.models.map((step, index) => (
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
                <motion.div
                  className={`relativ flex items-start flex-col rounded-2xl p-6 bg-white border border-blue-100 hover:shadow-md cursor-pointer h-full shadow-sm`}
                >
                  <motion.div
                    className={`rounded-full p-3 transition-colors ${index <= activeIndex ? 'bg-amber-50' : 'bg-background'
                      }`}
                    animate={{
                      backgroundColor: index <= activeIndex ? 'rgb(255 251 235)' : 'rgb(255 255 255)',
                    }}
                    transition={{ duration: 0.3 }}
                  >


                    <Image src={step.icon} className='h-14 w-auto' alt={step.title} />



                  </motion.div>

                  <h3 className="text-xl my-4 font-semibold">{step.title}</h3>

                  <p className="text-gray-600 mb-6 text-sm">
                    {step.subtitle}
                  </p>

                  {step.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6 last:mb-0">
                      {section.type === "para" ? (
                        <p className="text-gray-700 leading-relaxed">
                          {section.content.split('\n').map((paragraph, i) => (
                            <span key={i} className={`block mb-4 last:mb-0`}>
                              {paragraph}
                            </span>
                          ))}
                        </p>
                      ) : (
                        <ul className="space-y-3">
                          {section.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1.5 flex-shrink-0">
                                <svg
                                  className="w-4 h-4 text-amber-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <span className="text-gray-700">{item.trim()}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* <p className="text-md text-muted-foreground">{step.description}</p> */}
                </motion.div>
              </motion.div>


            ))}
          </div>

        </div>

      </div>
    </section>
  )
}