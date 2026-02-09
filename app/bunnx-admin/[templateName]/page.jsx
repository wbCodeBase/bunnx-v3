"use client";

import Lottie from "lottie-react"; 
import loaderJson from "@/public/pageAnimations/loader.json";

import "../template.css"

import AdminpanelLayout from '@/components/adminpanel/AdminpanelLayout';

import { useGetTemplateQuery, useGetActiveSlugQuery } from '@/store/api/myApi';
import { useParams, useRouter } from "next/navigation";

import HeroSection from '@/components/adminpanel/HeroSection';
import CreateCta from '@/components/adminpanel/CreateCta';
import ServiceSection from '@/components/adminpanel/ServiceSection';


const Template = () => {

    const { templateName } = useParams()
    const router = useRouter();

    const { data: activeSlugData, isLoading: activeSlugIsLoading, isError: activeSlugIsError, error: activeSlugError } = useGetActiveSlugQuery();
    const { data, isError, error, isLoading } = useGetTemplateQuery();

    if (isLoading || activeSlugIsLoading) return <div className='flex items-center justify-center h-screen w-full'><Lottie animationData={loaderJson} loop={true} /></div>;

    if (isError || activeSlugIsError) {
        console.error('Error fetching data:', error);
        return <div className="h-screen flex justify-center items-center">Error: {error?.data?.error || activeSlugError?.data?.error || 'An error occurred'}</div>;
    }

    const serviceTemplate = data?.find((templateData) => templateData.templateName === templateName)

    // Redirect to 404 if the template is not found
    if (!serviceTemplate) {
        router.replace('/404'); // Redirect to the custom 404 page
        return null; // Prevent rendering
    }

    // console.log(serviceTemplate);
     

    return (
        <AdminpanelLayout>
            <HeroSection {...serviceTemplate} activeSlugData={activeSlugData} />
            <ServiceSection {...serviceTemplate} activeSlugData={activeSlugData} />
            <CreateCta {...serviceTemplate} activeSlugData={activeSlugData} />
        </AdminpanelLayout>
    );
};


export default Template;














