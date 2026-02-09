"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"

import { useSession } from "next-auth/react";


const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const router = useRouter();


    const { data: session, status } = useSession();

    console.log("SignUp", session?.user?.name);

    if (session?.user?.role === "admin" && status === "authenticated") {
        router.push("/bunnx-admin");
    } else if (session?.user?.role === "user" && status === "authenticated") {
        router.push("/");
    } 


    const handleChange = (e) => {
        const { id, value } = e.target;

        // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
        if (id === 'phone') {
            if (!/^\d*$/.test(value)) return; // Prevent non-digit input
            if (value.length > 10) return; // Limit to 10 digits
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };


    const handleSubmit = async () => {
        const toastId = toast.loading("Signing up...");

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Sign up Successfull', { id: toastId });
                setFormData({ name: '', email: '', password: '' });

                router.push("/login");

            } else {
                toast.error(data.message || 'Sign up failed!', { id: toastId });
            }
        } catch (error) {
            toast.error('An error occurred while signing up', { id: toastId });
            console.error(error);
        }
    };



    return (<>
        <div className='flex flex-col justify-center items-center'>

            <h2 className='my-4 font-semibold text-3xl'>SignUp</h2>

            <div className="flex gap-4 flex-col border sm:p-10 p-4 rounded-xl bg-gray-50">

                <form action={handleSubmit} className="flex gap-4 flex-col border sm:p-10 p-6 rounded-xl bg-gray-50">

                    {['name', 'email', 'password'].map((field) => (
                        <div key={field}>

                            <label className="" htmlFor={field}>
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>

                            <input
                                id={field} 
                                type="text"
                                required
                                placeholder={`Enter your ${field}`}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full rounded-lg p-2.5 mt-1 border"
                            />

                        </div>
                    ))}

                    <button type="submit" className='mt-4 rounded-lg bg-gray-400 py-2 text-white'>SignUp</button>

                </form>

                <div className='text-center'>
                    <span>Or</span>
                </div>

                <form action="">
                    <button type='submit' className='bg-white rounded-lg py-2 text-center w-full'>Login With Google</button>
                </form>

                <div className='text-center mt-2'>
                    Already have an account? <Link href={"/login"} type='submit' className='bg-white rounded-lg py-2 text-center w-full font-semibold'>Login</Link>
                </div>

            </div>


        </div>
    </>
    )
}

export default SignUp