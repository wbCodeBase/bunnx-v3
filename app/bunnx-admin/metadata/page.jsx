"use client";

import Lottie from "lottie-react";
import loaderJson from "@/public/pageAnimations/loader.json";

import "../template.css";

import AdminpanelLayout from '@/components/adminpanel/AdminpanelLayout';

import { useGetAllMetadataQuery, useGetActiveSlugQuery } from '@/store/api/myApi';

// import { useParams, useRouter } from "next/navigation";

import MetadataComponent from '@/components/adminpanel/MetaData';

const Metadata = () => {

    const { data: activeSlugData, isLoading: activeSlugIsLoading, isError: activeSlugIsError, error: activeSlugError } = useGetActiveSlugQuery();
    const { data: metaData, isError, error, isLoading } = useGetAllMetadataQuery();


    if (isLoading || activeSlugIsLoading) return <div className='flex items-center justify-center h-screen w-full'><Lottie animationData={loaderJson} loop={true} /></div>;

    if (isError || activeSlugIsError) {
        console.error('Error fetching data:', error);
        return <div className="h-screen flex justify-center items-center">Error: {error?.data?.error || activeSlugError?.data?.error || 'An error occurred'}</div>;
    }

    return (<>
        <AdminpanelLayout>
            <MetadataComponent activeSlugData={activeSlugData} metaData={metaData} />
        </AdminpanelLayout>
    </>)
}

export default Metadata