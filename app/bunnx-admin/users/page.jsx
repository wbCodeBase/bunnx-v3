"use client";

import "../template.css";

import AdminpanelLayout from "@/components/adminpanel/AdminpanelLayout";
import { useGetUsersQuery } from "@/store/api/myApi"

import Lottie from "lottie-react";
import loaderJson from "@/public/pageAnimations/loader.json";


const User = () => {

    const { data: usersData, isLoading, isError, error } = useGetUsersQuery();

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

            <section className="bg-gray-50 h-full sm:p-10 p-6">

                <h2 className="text-2xl font-semibold my-6 sm:mx-20 text-center sm:text-left">
                    All Users
                </h2>

                <div className="container mx-auto grid gap-6 sm:w-11/12 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {usersData && usersData.map((user, i) => (
                        <div key={i} className="border rounded-xl p-5 bg-white text-gray-600 shadow-sm hover:shadow-lg transition-shadow">
                            <div><span className="text-sm font-semibold">Name:</span> {user.name}</div>
                            {/* <div><span className="text-sm font-semibold">Phone:</span> {user.phone}</div> */}
                            <div><span className="text-sm font-semibold">Email:</span> {user.email}</div>
                            <div><span className="text-sm font-semibold">Role:</span> {user.role}</div>
                            <div><span className="text-sm font-semibold">Verified:</span> {user.isVerified ? "Yes" : "No"}</div>
                            <div><span className="text-sm font-semibold">Registered at:</span> {' '}
                            {new Date(user.createdAt).toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </AdminpanelLayout>

    )
}

export default User