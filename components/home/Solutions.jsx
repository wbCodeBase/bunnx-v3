import Image from 'next/image';
import cloudMigration from "@/public/cloud-migration.png";
import crm from "@/public/industry/crm.jpg";
import HRMan from "@/public/industry/HRMan.jpeg";
import FleetManagement from "@/public/industry/FleetManagement.jpg";
import workForceM from "@/public/industry/workForceM.jpg";
import scm from "@/public/industry/scm.jpg";
import operationManagement from "@/public/industry/operationManagement.jpg";
import assetManagement from "@/public/industry/assetManagement.webp";

const solutions = [
    {
        id: 1,
        image: crm,
        title: "CRM Solutions",
        description: "Streamline customer interactions, manage leads, and boost sales with robust Customer Relationship Management."
    },
    {
        id: 2,
        image: HRMan,
        title: "HR Management",
        description: "Simplify HR operations with solutions for recruitment, payroll, and employee management, tailored to your business."
    },
    {
        id: 3,
        image: scm,
        title: "Supply Chain Management",
        description: "Optimize your supply chain processes with intelligent tools for inventory, logistics, and procurement management."
    },
    {
        id: 4,
        image: operationManagement,
        title: "Operation Management",
        description: "Enhance operational efficiency with data-driven solutions for resource planning, production, and workflow automation."
    },
    {
        id: 5,
        image: cloudMigration,
        title: "Invoice Billing Solutions",
        description: "Automate invoicing and billing processes with secure, accurate, and customizable billing systems."
    },
    {
        "id": 6,
        "image": assetManagement,
        "title": "Asset Management",
        "description": "Maximize your investments with smart, tailored asset management solutions."
    },
    {
        "id": 7,
        "image": workForceM,
        "title": "Workforce Management",
        "description": "Empower your team with efficient workforce management for optimal productivity."
    },
    {
        "id": 8,
        "image": FleetManagement,
        "title": "Fleet Management",
        "description": "Streamline operations and reduce costs with effective fleet management strategies."
    }

];

const Solutions = () => {
    return (
        <section className="border-t bg-[#00214E] px-4 md:px-6 py-6">
            <div className='container mx-auto max-w-screen-lg xl:max-w-screen-xl px-0 md:px-6 md:py-8'>

                <span className='font-semibold text-orange-500 text-lg'>Solutions We Deliver</span>
                <h2 className='text-white font-semibold text-3xl my-2'>Solutions Crafted Just for Your Industry</h2>
                <p className='text-white text-md'>
                    Our expertise spans various business domains, delivering solutions that enhance efficiency and foster innovation for your organization.
                </p>

                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 md:mt-12'>
                    {solutions.map((solution) => (
                        <div
                            key={solution.id}
                            className="cursor-pointer flex items-center flex-col bg-white hover:shadow-orange-500 shadow-lg transition-all duration-300 ease-in-out"
                        >
                            <Image className='h-full' src={solution.image} alt={solution.title} />
                            <div className='p-4'>
                                <h3 className='font-semibold my-3 text-lg'>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Solutions;
