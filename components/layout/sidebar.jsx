"use client"

import { useState } from "react"
import { X, Mail } from "lucide-react"
import { FaSkype } from "react-icons/fa";
import Image from "next/image"
import indiaFlag from "@/public/indiaFlag.webp"
import { useSubmitContactFormMutation } from "@/store/api/myApi";
import Link from "next/link";
import { toast } from "sonner"

// This would be your actual API hook in your application


export default function ContactSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        activeLead: true,
    })

    const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation()

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const handleChange = (e) => {
        const { id, value } = e.target

        // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
        if (id === "phone") {
            if (!/^\d*$/.test(value)) return // Prevent non-digit input
            if (value.length > 10) return // Limit to 10 digits
        }

        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


        // Additional validation to ensure phone number has exactly 10 digits
        if (formData.phone.length !== 10) {
            alert("Please enter a valid 10-digit phone number.")
            return
        }

        try {
            await submitContactForm(formData).unwrap()
            alert("Form submitted successfully!")
            setFormData({ name: "", phone: "", email: "", message: "", activeLead: true })
            window.location.href = "/thank-you"
        } catch (err) {
            console.log(err)
            toast.error(err?.data?.error || 'Something went wrong');
            // alert("Error submitting form: " + (err?.data?.error || "Something went wrong"))
        }
    }

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed right-0 top-1/2 -translate-y-1/2 bg[#4169e1] bg-[#00214E] text-white py-3 px-2 rounded-l-lg shadow-lg z-50 transform transition-transform duration-300"
                aria-label="Open contact form"
            >
                <div className="flex flex-col items-center">
                    <Mail className="w-5 h-5 mb-2" />
                    <span className="text-sm writing-mode-vertical transform rotate-180" style={{ writingMode: "vertical-rl" }}>
                        Let&apos;s Talk
                    </span>
                </div>
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-black w-80 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6">
                    <h2 className="text-white text-lg font-medium">Let&apos;s Talk</h2>
                    <button onClick={toggleSidebar} className="text-white hover:text-gray-300" aria-label="Close sidebar">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Contact Icons */}
                <div className="flex justify-center gap-6 py-4">
                    <Link href="mailto:whitebunniewebleads@gmail.com" aria-label="Email us">
                        <Mail className="w-6 h-6 text-white" />
                    </Link>
                    <Link href="https://join.skype.com/invite/w10jZZvDTv9W" aria-label="Call us on Skype">
                        <FaSkype className="w-6 h-6 text-white" />
                    </Link>
                </div>

                {/* Phone Numbers */}
                <div className="px-4 py-2 flex justify-center items-center">

                    <div className="bg-white rounded-lg py-3 px-6 flex justify-center gap-3 items-center">
                        <Image
                            src={indiaFlag}
                            alt="India Flag"
                            width={30}
                            height={20}
                            className="object-cover rounded h-auto w-6"
                        />
                        <span className="text-sm">+91-9971544661</span>
                    </div>

                </div>

                {/* Form Description */}
                <div className="px-4 py-2 text-center mt-6 mb-4">
                    <p className="text-white text-sm">
                        Fill in the Form below for a no-string attached free technical discussion.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="px-4 py-2">
                    <form onSubmit={handleSubmit} className="flex gap-3 flex-col">
                        {[
                            { id: "name", label: "Name", type: "text" },
                            { id: "phone", label: "Phone", type: "text" },
                            { id: "email", label: "Email Address", type: "text" },
                            { id: "message", label: "Your Message", type: "textarea" },
                        ].map((field) => (
                            <div key={field.id}>
                                {field.type === "textarea" ? (
                                    <textarea
                                        id={field.id}
                                        placeholder={field.label}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                        className="w-full rounded-lg p-2.5 px-4 text-sm"
                                        rows={4}
                                    />
                                ) : (
                                    <input
                                        id={field.id}
                                        type="text"
                                        placeholder={field.label}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                        className="w-full rounded-lg p-2.5 px-4 text-sm"
                                    />
                                )}
                            </div>
                        ))}

                        <div className="flex justify-center flex-col">
                            {isSuccess && <p className="text-white text-sm">Form submitted successfully!</p>}
                            {/* {isError && <p className="text-white text-sm">Error: {error?.data?.error || "Something went wrong"}</p>} */}

                            <button
                                type="submit"
                                className="bg-orange-500 text-white py-2 px-4 rounded-lg w-full font-medium mt-2"
                                disabled={isLoading}
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} aria-hidden="true" />
            )}


            {/* {isError && isOpen &&
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-red-500 text-md">Error: {error?.data?.error || "Something went wrong"}</p>
                    </div>
                </div>} */}


        </>
    )
}

