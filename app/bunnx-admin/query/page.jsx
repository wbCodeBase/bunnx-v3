"use client";

import "../template.css";

import AdminpanelLayout from "@/components/adminpanel/AdminpanelLayout";
import { useGetUserQueriesQuery } from "@/store/api/myApi"

import Lottie from "lottie-react";
import loaderJson from "@/public/pageAnimations/loader.json";


const Query = () => {

    const { data: userQuery, isLoading, isError, error } = useGetUserQueriesQuery();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <Lottie animationData={loaderJson} loop={true} />
            </div>
        );
    }

    if (isError) {
        console.error("Error fetching data:", error);
        return (
            <div className="h-screen flex justify-center items-center">
                Error: {error?.data?.error || "An error occurred"}
            </div>
        );
    }


    return (

        <AdminpanelLayout>

            <section className="bg-gray-50">

                <h2 className="text-2xl font-semibold my-6 sm:mx-20 text-left">
                    User Queries
                </h2>

                <div className="container mx-auto grid gap-6 sm:w-11/12 w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {userQuery && userQuery.map((query, i) => (
                        <div key={i} className="border border-gray-300 rounded-xl p-5 bg-white text-gray-600 shadow-sm hover:shadow-lg transition-shadow">
                            <div><span className="text-sm font-semibold">Name:</span> {query.name}</div>
                            <div><span className="text-sm font-semibold">Phone:</span> {query.phone}</div>
                            <div><span className="text-sm font-semibold">Email:</span> {query.email}</div>
                            <div><span className="text-sm font-semibold">Message:</span> {query.message}</div>
                        </div>
                    ))}
                </div>
            </section>


        </AdminpanelLayout>

    )
}

export default Query