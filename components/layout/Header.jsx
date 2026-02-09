'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronRight, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { TbCodeDots } from "react-icons/tb";
import bunnxLogo from "@/public/logo/bunnx-logo.png";
import { useRouter } from 'next/navigation'

import { signOut } from "next-auth/react";

import { useSession } from "next-auth/react";
import ContactSidebar from './sidebar'

const menuItems = [
  { title: 'Home', slug: '/', hasSubmenu: false },
  { title: 'Service', slug: '/software-development-company-in-india', hasSubmenu: true },
  // { title: 'Hire', slug: '/hire/node-developer', hasSubmenu: true },
  { title: 'About Us', slug: '/about-us', hasSubmenu: false },
  { title: 'Contact Us', slug: '/contact-us', hasSubmenu: false },
]


// const hireData = {
//   categories: [
//     { name: 'Backend', slug: 'backend-developer' },
//     { name: 'Frontend', slug: 'frontend-developer' },
//     { name: 'Mobile', slug: 'mobile-developer' },
//     { name: 'Full Stack', slug: 'full-stack-developer' },
//     { name: 'DevOps', slug: 'devops-engineer' },
//     { name: 'CMS', slug: 'cms-developer' },
//     { name: 'eCommerce', slug: 'ecommerce-developer' },
//   ],
//   content: {
//     Backend: {
//       title: 'Backend',
//       slug: 'backend-developer',
//       description: 'Build robust backend',
//       technologies: [
//         { name: 'Php', slug: 'php-developer' },
//         { name: 'Laravel', slug: 'laravel-developer' },
//         { name: 'Node', slug: 'node-developer' },
//         { name: 'Codeigniter', slug: 'codeigniter-developer' },
//         { name: 'C#', slug: 'c-sharp-developer' },
//         { name: 'Ruby on Rails', slug: 'ruby-on-rails-developer' },
//         { name: 'Django', slug: 'django-developer' },
//         { name: 'Golang', slug: 'golang-developer' },
//         { name: 'Java', slug: 'java-developer' },
//         { name: '.Net', slug: 'dot-net-developer' },
//       ],
//       hiring: [

//         {
//           title: 'Staff Augmentation',
//           slug: 'staff-augmentation',
//           description: 'Access top technical resources on-demand',
//         },
//         {
//           title: 'Hire Software Developer',
//           slug: 'hire-software-developer-india',
//           description: 'Work with skilled & dedicated developers',
//         },
//         {
//           title: 'Dedicated Software Teams',
//           slug: 'dedicated-software-teams',
//           description: 'Hire Dedicated Developers',
//         },
//       ],
//     },
//     Frontend: {
//       title: 'Frontend',
//       slug: 'frontend',
//       description: 'Create stunning user interfaces',
//       technologies: [
//         { name: 'ReactJs', slug: 'reactJs-developer' },
//         { name: 'Angular', slug: 'angularJs-developer' },
//         { name: 'VueJs', slug: 'vueJs-developer' },
//       ],
//       hiring: [
//         {
//           title: 'Hire Frontend Developers',
//           slug: 'hire-frontend-developer',
//           description: 'Expert UI/UX implementers',
//         },
//         {
//           title: 'Frontend Team Augmentation',
//           slug: 'frontend-team-augmentation',
//           description: 'Boost your frontend capabilities',
//         },
//         {
//           title: 'Dedicated Frontend Teams',
//           slug: 'dedicated-frontend-teams',
//           description: 'Full-service frontend development',
//         },
//       ],
//     },
//     CMS: {
//       title: 'CMS',
//       slug: 'content-management-system',
//       description: 'Create stunning user interfaces',
//       technologies: [
//         { name: 'Wordpress', slug: 'wordpress-developer' },
//         { name: 'Drupal', slug: 'drupal-developer' },
//         { name: 'Sitecore', slug: 'sitecore-developer' },
//         { name: 'Magento', slug: 'magento-developer' },
//       ],
//       hiring: [
//         {
//           title: 'Hire Frontend Developers',
//           slug: 'hire-frontend-developer',
//           description: 'Expert UI/UX implementers',
//         },
//         {
//           title: 'Frontend Team Augmentation',
//           slug: 'frontend-team-augmentation',
//           description: 'Boost your frontend capabilities',
//         },
//         {
//           title: 'Dedicated Frontend Teams',
//           slug: 'dedicated-frontend-teams',
//           description: 'Full-service frontend development',
//         },
//       ],
//     },
//     eCommerce: {
//       title: 'eCommerce',
//       slug: 'eCommerce-developer',
//       description: 'Create stunning user interfaces',
//       technologies: [
//         { name: 'Shopify', slug: 'shopify-developer' },
//         { name: 'Magento', slug: 'magento-developer' },
//         { name: 'Squarespace', slug: 'squarespace-developer' },
//       ],
//       hiring: [
//         {
//           title: 'Hire Frontend Developers',
//           slug: 'hire-frontend-developer',
//           description: 'Expert UI/UX implementers',
//         },
//         {
//           title: 'Frontend Team Augmentation',
//           slug: 'frontend-team-augmentation',
//           description: 'Boost your frontend capabilities',
//         },
//         {
//           title: 'Dedicated Frontend Teams',
//           slug: 'dedicated-frontend-teams',
//           description: 'Full-service frontend development',
//         },
//       ],
//     },
//     Mobile: {
//       title: 'Mobile',
//       slug: 'mobile-developer',
//       description: 'Create stunning user interfaces',
//       technologies: [
//         { name: 'Android', slug: 'android-developer' },
//         { name: 'Flutter', slug: 'flutter-developer' },
//         { name: 'Ios', slug: 'ios-developer' },
//         { name: 'Swift', slug: 'swift-developer' },
//         { name: 'Iconic', slug: 'iconic-developer' },
//         { name: 'React Native', slug: 'react-native-developer' },
//       ],
//       hiring: [
//         {
//           title: 'Hire Frontend Developers',
//           slug: 'hire-frontend-developer',
//           description: 'Expert UI/UX implementers',
//         },
//         {
//           title: 'Frontend Team Augmentation',
//           slug: 'frontend-team-augmentation',
//           description: 'Boost your frontend capabilities',
//         },
//         {
//           title: 'Dedicated Frontend Teams',
//           slug: 'dedicated-frontend-teams',
//           description: 'Full-service frontend development',
//         },
//       ],
//     },
//     "Full Stack": {
//       title: 'Full Stack Developer',
//       slug: 'full-stack-developer',
//       description: 'Create stunning user interfaces',
//       technologies: [
//         { name: 'NextJs', slug: 'nextJs-developer' },
//         { name: 'MEAN', slug: 'mean-developer' },
//         { name: 'MERN', slug: 'mern-developer' },
//       ],
//       hiring: [
//         {
//           title: 'Hire Frontend Developers',
//           slug: 'hire-frontend-developer',
//           description: 'Expert UI/UX implementers',
//         },
//         {
//           title: 'Frontend Team Augmentation',
//           slug: 'frontend-team-augmentation',
//           description: 'Boost your frontend capabilities',
//         },
//         {
//           title: 'Dedicated Frontend Teams',
//           slug: 'dedicated-frontend-teams',
//           description: 'Full-service frontend development',
//         },
//       ],
//     },
//     "DevOps": {
//       title: 'DevOps',
//       slug: 'devops',
//       description: 'Create stunning user interfaces',
//       technologies: [
//         { name: 'Azure', slug: 'azure-developer' },
//         { name: 'AWS', slug: 'aws-developer' },
//         { name: 'Digital Ocean', slug: 'digital-ocean-developer' },
//       ],
//       hiring: [
//         {
//           title: 'Hire Frontend Developers',
//           slug: 'hire-frontend-developer',
//           description: 'Expert UI/UX implementers',
//         },
//         {
//           title: 'Frontend Team Augmentation',
//           slug: 'frontend-team-augmentation',
//           description: 'Boost your frontend capabilities',
//         },
//         {
//           title: 'Dedicated Frontend Teams',
//           slug: 'dedicated-frontend-teams',
//           description: 'Full-service frontend development',
//         },
//       ],
//     },
//   },


// }


const servicesData = {
  categories: [
    { name: 'Software Development', slug: 'software-development-company-in-india' },
    { name: 'Application Development', slug: 'application-development-company-india' },
    { name: 'Ecommerce Development', slug: 'ecommerce-development-company-india' },
    { name: 'Dedicated Technical Team', slug: 'hire-dedicated-technical-team-india' },
    // { name: 'QA & Testing', slug: 'qa-testing' },
    // { name: 'Cloud Services', slug: 'cloud-services' },

  ],
  content: {
    "Software Development": {
      title: 'Software Development',
      slug: 'software-development-company-in-india',
      description: 'Develop robust software',
      technologies: [
        { name: 'Custom Software Development', slug: 'custom-software-development-services' },
        { name: 'CMS Development', slug: 'cms-development-services-india' },
        { name: 'CRM Software Development', slug: 'crm-software-development-company-india' },
        { name: 'Software Consulting', slug: 'software-consulting-services-india' },
        { name: 'IT Consulting', slug: 'it-consulting-services-india' },
        { name: 'Agile Consulting', slug: 'agile-consulting-services-india' },
        // { name: 'Application Maintenance', slug: 'application-maintenance' },
        // { name: 'Application Upgradation', slug: 'application-upgradation' },
      ],
      hiring: [

        {
          title: 'Staff Augmentation',
          slug: 'it-staff-augmentation-services-india',
          description: 'Access top technical resources on-demand',
        },
        {
          title: 'Hire Software Developer',
          slug: 'hire-software-developer-india',
          description: 'Work with skilled & dedicated developers',
        },
        {
          title: 'Dedicated Software Teams',
          slug: 'dedicated-software-teams',
          description: 'Hire Dedicated Developers',
        },
      ],
    },
    "Application Development": {
      title: 'Application Development',
      slug: 'application-development-company-india',
      description: 'Create your dream app',
      technologies: [
        { name: 'Web App Development', slug: 'web-application-development-company-india' },
        { name: 'Mobile App Development', slug: 'mobile-app-development-company-india' },
        { name: 'Front End Development', slug: 'front-end-development-services-india' },
        { name: 'Back End Development', slug: 'back-end-development-services-india' },
        { name: 'API Development & Integration', slug: 'api-integration-and-development-services' },
        { name: 'Full Stack Development', slug: 'full-stack-development-services' },
        { name: 'Website Development', slug: 'website-development-services-india' },
      ],
      hiring: [
        {
          title: 'Hire Frontend Developers',
          slug: 'hire-frontend-developer',
          description: 'Expert UI/UX implementers',
        },
        {
          title: 'Frontend Team Augmentation',
          slug: 'frontend-team-augmentation',
          description: 'Boost your frontend capabilities',
        },
        {
          title: 'Dedicated Frontend Teams',
          slug: 'dedicated-frontend-teams',
          description: 'Full-service frontend development',
        },
      ],
    },
    "Ecommerce Development": {
      title: 'Ecommerce Development',
      slug: 'ecommerce-development-company-india',
      description: 'Create your dream app',
      technologies: [
        { name: 'Ecommerce Web Development', slug: 'ecommerce-web-development' },
        { name: 'Ecommerce Web Consulting', slug: 'ecommerce-consulting-services' },
        { name: 'Ecommerce Implementation', slug: 'ecommerce-implementation' },
        { name: 'Ecommerce Maintenance & Support', slug: 'ecommerce-maintenance-and-support-services' },
        { name: 'Shopify', slug: 'shopify-development-company-in-india' },
        { name: 'WooCommerce', slug: 'woocommerce-development-services-india' },
      ],
      hiring: [
        {
          title: 'Hire Frontend Developers',
          slug: 'hire-frontend-developer',
          description: 'Expert UI/UX implementers',
        },
        {
          title: 'Frontend Team Augmentation',
          slug: 'frontend-team-augmentation',
          description: 'Boost your frontend capabilities',
        },
        {
          title: 'Dedicated Frontend Teams',
          slug: 'dedicated-frontend-teams',
          description: 'Full-service frontend development',
        },
      ],
    },
    "Dedicated Technical Team": {
      title: 'Dedicated Technical Team',
      slug: 'hire-dedicated-technical-team-india',
      description: 'Hire team for your next project',
      technologies: [
        { name: 'Staff Augmentation', slug: 'it-staff-augmentation-services-india' },
        { name: 'Hire Software Developer', slug: 'hire-software-developer-india' },
        { name: 'IT Outsourcing', slug: 'it-outsourcing-services' },
        { name: 'Dedicated Development Team', slug: 'hire-dedicated-development-team-india' },
        { name: 'Offshore Dedicated Centre', slug: 'offshore-dedicated-development-center-india' },
        { name: 'Outsource Software Development', slug: 'outsourcing-software-development-in-india' },
      ],
      hiring: [
        {
          title: 'Hire Frontend Developers',
          slug: 'hire-frontend-developer',
          description: 'Expert UI/UX implementers',
        },
        {
          title: 'Frontend Team Augmentation',
          slug: 'frontend-team-augmentation',
          description: 'Boost your frontend capabilities',
        },
        {
          title: 'Dedicated Frontend Teams',
          slug: 'dedicated-frontend-teams',
          description: 'Full-service frontend development',
        },
      ],
    },
    // "QA & Testing": {
    //   title: 'QA & Testing',
    //   slug: 'qa-testing',
    //   description: 'Testing desc',
    //   technologies: [
    //     { name: 'QA Consulting', slug: 'qa-consulting' },
    //     { name: 'Software Testing', slug: 'software-testing' },
    //     { name: 'Mobile App Testing', slug: 'mobile-app-testing' },
    //     { name: 'Web App Testing', slug: 'web-app-testing' },
    //     { name: 'QA Outsourcing', slug: 'qa-outsourcing' },
    //   ],
    //   hiring: [
    //     {
    //       title: 'Hire Frontend Developers',
    //       slug: 'hire-frontend-developer',
    //       description: 'Expert UI/UX implementers',
    //     },
    //     {
    //       title: 'Frontend Team Augmentation',
    //       slug: 'frontend-team-augmentation',
    //       description: 'Boost your frontend capabilities',
    //     },
    //     {
    //       title: 'Dedicated Frontend Teams',
    //       slug: 'dedicated-frontend-teams',
    //       description: 'Full-service frontend development',
    //     },
    //   ],
    // },
    // "Cloud Services": {
    //   title: 'Cloud Services',
    //   slug: 'cloud-services',
    //   description: 'Cloud service',
    //   technologies: [
    //     { name: 'Cloud Application Development', slug: 'cloud-application-development' },
    //     { name: 'Cloud Strategy & Consulting', slug: 'cloud-strategy-consulting' },
    //     { name: 'Cloud Migration', slug: 'cloud-migration' },
    //     { name: 'Devops & CI/CD Pipelines', slug: 'devops-and-ci-cd-pipelines' },
    //   ],
    //   hiring: [
    //     {
    //       title: 'Hire Frontend Developers',
    //       slug: 'hire-frontend-developer',
    //       description: 'Expert UI/UX implementers',
    //     },
    //     {
    //       title: 'Frontend Team Augmentation',
    //       slug: 'frontend-team-augmentation',
    //       description: 'Boost your frontend capabilities',
    //     },
    //     {
    //       title: 'Dedicated Frontend Teams',
    //       slug: 'dedicated-frontend-teams',
    //       description: 'Full-service frontend development',
    //     },
    //   ],
    // },
  },


}


const logOut = async () => {
  try {
    // Sign out the user
    await signOut({ callbackUrl: '/' }); // Redirect to home page after sign-out
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

















export default function Header() {


  const { data: session, status } = useSession();
  // if (session?.user?.role === "admin" && status === "authenticated") {
  //   console.log("Header admin", session?.user?.name);
  // } else if (session?.user?.role === "user" && status === "authenticated") {
  //   console.log("Header user", session?.user?.name);
  // }

  const router = useRouter()

  const [activeMenu, setActiveMenu] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  const [isScrolled, setIsScrolled] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMenuHover = (menu) => {
    setActiveMenu(menu)
    setActiveCategory(menu === 'Service' ? 'Software Development' : 'Backend')
  }

  const handleCategoryHover = (category) => {
    setActiveCategory(category)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const clickEventForPhoneViewMenu = (hasSubmenu, slug) => {
    if (!hasSubmenu) {
      router.push(slug);
      toggleMobileMenu()
      setActiveMenu('')
    }
  };




  const renderHireDropdown = (currentActiveMenu) => (
    <div onMouseEnter={() => setActiveMenu(currentActiveMenu)}
      onMouseLeave={() => setActiveMenu('')}

      className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/4 border-r p-4 hidden md:block">
          {hireData.categories.map((category, i) => (
            <Link href={`/hire/${category.slug}`} key={i} onClick={() => { setActiveMenu(''); setActiveCategory('') }}>
              <div
                key={category.name}
                className={`py-2.5 px-4 cursor-pointer rounded-md transition-colors font-medium duration-200 ${activeCategory === category.name ? 'bg-amber-50 text-amber-600' : ''
                  }`}
                onMouseEnter={() => handleCategoryHover(category.name)}
              >
                {category.name}
                <ChevronRight className="float-right h-5 w-5" />
              </div>
            </Link>
          ))}
        </div>


        {hireData.content[activeCategory] && (
          <>
            <div className='flex w-full flex-col lg:flex-row h-screen sm:h-auto overflow-auto'>

              <div className="w-full lg:w-8/12 p-6">

                <div className="mb-4 py-4 flex items-center border-b">
                  <span onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="bg-amber-500 p-2 rounded-full mr-3">

                    <TbCodeDots className='text-white font-semibold text-2xl' />
                  </span>
                  <span>
                    <h2 className='text-xl font-bold'> {hireData.content[activeCategory].title} </h2>
                    <p className="text-gray-600">{hireData.content[activeCategory].description}</p>
                  </span>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hireData.content[activeCategory].technologies.map((tech, index) => (
                    <Link href={`/hire/${tech.slug}`} key={index} onClick={() => { setActiveMenu(''); setActiveCategory(''); setIsMobileMenuOpen(false) }} className="p-2 rounded-md transition-colors duration-200 font-medium cursor-pointer hover:bg-amber-50">
                      {tech.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-4/12 px-5 py-5 bg-gray-50 mb-6 sm:mb-0">

                <div className="mb-4 border-b border-gray-300 py-5">
                  <h3 className="font-semibold text-lg">Hire Dedicated Developers</h3>
                  <p className="text-sm text-gray-600">Build faster with on-demand team</p>
                </div>

                {hireData.content[activeCategory].hiring.map((item, index) => (
                  <Link href={`/hire/${item.slug}`} key={index}>
                    <div className="mb-4 hover:border hover:bg-amber-50 rounded-lg p-3 cursor-pointer">
                      <h3 className="font-medium text-lg mb-2 flex items-center">
                        <span className="bg-amber-500 p-1 rounded-full mr-2">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </span>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                ))}
                <Link href="#" className="text-amber-600 transition-colors duration-200">
                  View More <ChevronRight className="inline h-4 w-4" />
                </Link>
              </div>

            </div>

          </>
        )}
      </div>
    </div>
  )

  const renderServicesDropdown = (currentActiveMenu) => (
    <div onMouseEnter={() => setActiveMenu(currentActiveMenu)}
      onMouseLeave={() => setActiveMenu('')}
      className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/4 border-r border-gray-300 p-4 hidden md:block">
          {servicesData.categories.map((category, i) => (
            <Link href={`/${category.slug}`} key={i} onClick={() => { setActiveMenu(''); setActiveCategory('') }}>
              <div
                key={category.name}
                className={`py-2.5 px-4 cursor-pointer flex flex-nowrap justify-between items-center my-4 rounded-md transition-colors font-medium duration-200 ${activeCategory === category.name ? 'bg-amber-50 text-amber-600' : ''
                  }`}
                onMouseEnter={() => handleCategoryHover(category.name)}
              >
                <span> {category.name} </span>
                <ChevronRight className="float-right h-5 w-5" />
              </div>
            </Link>
          ))}
        </div>

        {/* border border-red-500 */}
        {servicesData.content[activeCategory] && (
          <>
            <div className='flex w-full flex-col lg:flex-row hscreen sm:min-h-96 sm:h-auto overflow-auto'>

              <div className="w-full p-6">
                <div className="mb-4 py-4 flex items-center border-b border-gray-300">
                  <span onClick={() => { setActiveMenu(''); setActiveCategory('') }} className="bg-amber-500 p-2 rounded-full mr-3">
                    <TbCodeDots className='text-white font-semibold text-2xl' />
                  </span>
                  <span>
                    <h2 className='text-xl font-bold'> {servicesData.content[activeCategory].title} </h2>
                    <p className="text-gray-600">{servicesData.content[activeCategory].description}</p>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 sm:mt-8 gap-2 sm:gap-6">
                  {servicesData.content[activeCategory].technologies.map((tech, index) => (
                    <Link className="transition-colors duration-200 font-medium cursor-pointer group" href={`/${tech.slug}`} key={index} onClick={() => { setActiveMenu(''); setActiveCategory(''); setIsMobileMenuOpen(false) }}>

                      <div className='group-hover:bg-amber-50 py-2 px-4 rounded-md'> {tech.name}
                        {/* <p className="text-sm text-gray-600">Lorem ipsum dolor sit.</p> */}
                      </div>

                    </Link>
                  ))}
                </div>
              </div>


            </div>
          </>
        )}
      </div>
    </div>
  )

  return (
    <header className={`${isScrolled ? "bg-[#00214E]" : "bg-black"} shadow-md sm:sticky sm:top-0 left-0 w-full z-40`} ref={dropdownRef}>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:px-10">
          <Link href="/" className="flex items-center py-2">
            <Image
              className=""
              src={bunnxLogo}
              alt="Bunnx logo"
              width={125}
              priority
            />
          </Link>
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.hasSubmenu && handleMenuHover(item.title)}
                onMouseLeave={() => setActiveMenu('')}
              >
                <Link href={item.slug} onClick={() => setActiveMenu('')}
                  className={`text-white hover:text-orange-500 px-3 py-8 rounded-md text-sm font-medium transition-colors duration-200 ${activeMenu === item.title ? 'text-orange-500' : ''
                    }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>



          <div className="hidden lg:flex items-center space-x-4">

            {session?.user?.role === "admin" && status === "authenticated" ?
              <Link href="/bunnx-admin" className="text-orange-500 bg-white px-3 py-1 rounded-xl text-md font-medium hover:bg-orange-500 hover:text-white transition-colors duration-300">
                AdminPanel
              </Link>
              : session?.user?.role === "user" && status === "authenticated" ?
                <div onClick={() => logOut()} className="text-red-600 cursor-pointer bg-white px-3 py-1 rounded-xl text-md font-medium hover:bg-red-500 hover:text-white transition-colors duration-300">
                  Logout
                </div> : null}

            <Link href="contact-us" className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-full text-md font-medium hover:bg-orange-600 transition-colors duration-300">
              Get in Touch
            </Link>
          </div>

          <div className="lg:hidden flex items-center justify-center">
            <button onClick={() => {
              toggleMobileMenu();
              setActiveMenu("");
            }}
              className="text-white transition-colors duration-200">
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {activeMenu && (
        <div className="absolute lg:flex hidden left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
          {activeMenu === 'Service' ? renderServicesDropdown(activeMenu) : renderHireDropdown(activeMenu)}
        </div>
      )}

      {isMobileMenuOpen && (
        <>
          <div className="lg:hidden h-screen sm:h-auto overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button
                    className="w-full block text-left text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    onClick={() => { item.hasSubmenu && setActiveMenu(activeMenu === item.title ? '' : item.title), clickEventForPhoneViewMenu(item?.hasSubmenu, item?.slug) }}
                  >

                    {item.title}

                    {item.hasSubmenu && (
                      <ChevronDown className={`float-right h-5 w-5 transform transition-transform duration-200 ${activeMenu === item.title ? 'rotate-180' : ''}`} />
                    )}

                  </button>

                  {item.hasSubmenu && activeMenu === item.title && (
                    <div className="pl-4 mt-2 space-y-2">
                      {(item.title === 'Service' ? servicesData.categories : hireData.categories).map((category) => (
                        <button
                          key={category.name}
                          className="w-full text-left font-medium text-gray-200 hover:text-orange-500 block px-3 py-2 text-sm transition-colors duration-200"
                          onClick={() => activeCategory === category.name ? handleCategoryHover("") : handleCategoryHover(category.name)}
                        >
                          {category.name}

                          <ChevronDown className={`float-right h-5 w-5 transform transition-transform duration-200 ${activeCategory === category.name ? 'rotate-180' : ''}`} />

                        </button>

                      ))}

                      {activeMenu && (
                        <div className="absolute left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
                          {activeMenu === 'Service' ? renderServicesDropdown(activeMenu) : renderHireDropdown(activeMenu)}
                        </div>
                      )}

                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-4 py-3 flex items-center justify-center">

              <Link href="contact-us"
                onClick={() => {
                  toggleMobileMenu();
                  setActiveMenu("");
                }} className="bg-orange-500 text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors duration-300">
                Get in Touch
              </Link>

            </div>
          </div>

        </>


      )}

      <ContactSidebar />

    </header>
  )
}














// import { SearchConsole } from "../search-console"

// export default function Page() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-4">
//         <h1 className="text-2xl font-bold text-center">Search Console</h1>
//         <p className="text-center text-muted-foreground">
//           Press <kbd className="px-1 py-0.5 text-xs border rounded-md">⌘K</kbd> to open the search console
//         </p>
//         <div className="flex justify-center">
//           <SearchConsole />
//         </div>
//       </div>
//     </div>
//   )
// }















