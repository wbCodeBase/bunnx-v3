"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';

import { toast } from "sonner"
import credentialsLogin from "@/actions/loginFunction";
import { useSession } from "next-auth/react";

const Login = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const router = useRouter(); 


    const { data: session, status } = useSession();

    // console.log("status", status);

    // if (status === "loading") return <div className="h-screen flex justify-center items-center"> <p className="text-2xl">Checking Authenticity...</p> </div>;

    console.log("Login", session?.user?.name);

    if (session?.user?.role === "admin" && status === "authenticated") {
        router.push("/bunnx-admin");
    } else if (session?.user?.role === "user" && status === "authenticated") {
        router.push("/");
    } 

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!email || !password) {
            setError("Please provide both email and password.");
            return toast.error("Please provide all fields")
        }

        const toastId = toast.loading("Logging in...")

        const result = await credentialsLogin(formData);

        console.log(result);

        if (result?.success) {
            toast.success("Login Successfull", {
                id: toastId,
            })

            // router.replace('/');
            router.replace(result?.url || '/bunnx-admin');

            console.log("Redirected to", result?.url);

        } else {
            toast.error(String(result?.error), {
                id: toastId
            })

            // Handle error
            console.error(result?.error);
        }

    };


    return (<>

        <div className="flex flex-col justify-center items-center">
            <h2 className="my-6 font-semibold text-3xl">Login</h2>
            <form onSubmit={handleSubmit} className="flex gap-4 flex-col border p-10 rounded-xl bg-gray-50">
                {["email", "password"].map((field) => (
                    <div key={field}>
                        <label htmlFor={field}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            id={field}
                            type={field === "password" ? "password" : "text"}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg p-2.5 mt-1 border"
                            placeholder={`Enter your ${field}`}
                        />
                    </div>
                ))}
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="mt-4 rounded-lg bg-gray-400 py-2 text-white">
                    Login
                </button>
                <div className="text-center">
                    <span>Or</span>
                </div>



                <button
                    type="submit"
                    className="bg-white rounded-lg py-2 text-center w-full"
                >
                    Login With Google
                </button>


                <div className="text-center mt-2">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-semibold">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    </>
    );
};

export default Login;
