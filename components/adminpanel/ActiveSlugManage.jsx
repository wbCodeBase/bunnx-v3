"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { MdDelete, MdEdit } from "react-icons/md";
import {
    useGetActiveSlugQuery,
    useCreateActiveSlugMutation,
    useUpdateActiveSlugMutation,
    useDeleteActiveSlugMutation,
} from "@/store/api/myApi";

import Lottie from "lottie-react";
import loaderJson from "@/public/pageAnimations/loader.json";


const ActiveSlugManage = () => {
    const [editMode, setEditMode] = useState(false); // Track edit mode
    const [editId, setEditId] = useState(null); // Track ID of the slug being edited

    const { data: activeSlugData, isLoading, isError, error } = useGetActiveSlugQuery();
    const [createActiveSlug, result] = useCreateActiveSlugMutation();
    const [updateActiveSlug, { data, isSuccess: updateIsSuccess, isError: updateIsError, error: updateError, isLoading: updateIsLoading, reset }] = useUpdateActiveSlugMutation();
    const [deleteActiveSlug] = useDeleteActiveSlugMutation(); 

    const [formState, setFormState] = useState({
        label: "",
        slug: "",
        isActive: "",
    });

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                // Update existing slug
                await updateActiveSlug({ id: editId, slugData: formState }).unwrap();
                alert("Slug updated successfully!");
            } else {
                // Create new slug
                await createActiveSlug(formState).unwrap();
                alert("Slug created successfully!");
            }
            resetForm();
        } catch (err) {
            console.error("Error:", err);
            alert(err.data.error);
        }
    };

    const resetForm = () => {
        setFormState({ label: "", slug: "", isActive: "" });
        setEditMode(false);
        setEditId(null);
    };

    const handleEdit = (slug) => {
        setFormState({ label: slug.label, slug: slug.slug, isActive: slug.isActive });
        setEditId(slug._id);
        setEditMode(true);
    };


    const handleDelete = async (id) => {
        try {
            await deleteActiveSlug({ id }).unwrap();
            alert("Slug deleted successfully!");
        } catch (err) {
            console.error("Error deleting slug:", err);
            alert("Failed to delete slug.");
        }
    };

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
        <div className="sm:p-6 p-4 bg-gray-50">
            <h2 className="text-2xl font-semibold sm:mt-6 sm:mx-24 mb-2 text-center sm:text-left">Manage Slugs</h2>

            <div className="flex justify-center items-start gap-10 flex-wrap w-full sm:w-auto p3">


                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full sm:w-1/2 border bg-white sm:p-8 p-3 rounded-lg">
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Label</label>
                        <Input
                            name="label"
                            placeholder="Enter label"
                            value={formState.label}
                            required
                            onChange={handleInputChange}
                            className="bg-gray-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Slug</label>
                        <Input
                            name="slug"
                            placeholder="Enter slug"
                            value={formState.slug}
                            required
                            onChange={handleInputChange}
                            className="bg-gray-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Status</label>
                        <select
                            name="isActive"
                            value={formState.isActive}
                            required
                            onChange={handleInputChange}
                            className="bg-gray-50 w-full border rounded-md p-2"
                        >
                            <option value="" disabled>
                                Select status
                            </option>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>
                    <div>
                        {/* <Button type="submit">{editMode ? "Update" : "Create"}</Button> */}
                        <Button className="bg-black text-white cursor-pointer" type="submit">{result.isLoading ? "Saving..." : updateIsLoading ? "Updating..." : editMode ? "Update" : "Submit"}</Button>
                    </div>
                </form>


                <SlugCards
                    data={activeSlugData}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />


            </div>



        </div>
    );
};


const SlugCards = ({ data, handleDelete, handleEdit }) => (
    <div className="bg-white border p-3 rounded-lg w-full sm:w-1/3">
        <div className="font-semibold mb-2 text-center">Active Slug Cards</div>
        <div className="overflow-y-auto max-h-[33rem] scrollbar-design">
            {data && data.map((slugCard, i) => (
                <SlugCard key={i} i={i} handleEdit={handleEdit} handleDelete={handleDelete} slugCard={slugCard} />
            ))}
        </div>
    </div>
);


const SlugCard = ({ slugCard, i, handleEdit, handleDelete }) => (
    <div className="relative bg-gray-50 flex flex-col rounded-lg p-4 my-4 text-sm shadow-md group transition">
        {/* Card Index Badge */}
        <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full text-white bg-gray-400">
            {i + 1}
        </span>

        {/* Card Content */}
        <CardItem label="Label" content={slugCard?.label} />
        <CardItem label="Slug" content={slugCard?.slug} />
        <CardItem label="Status" content={slugCard?.isActive ? "Active" : "InActive"} />

        {/* Action Buttons (Visible on Hover) */}
        <div className="absolute top-2 right-12 flex gap-2 opacity0 grouphover:opacity-100 transition-opacity duration-300">
            {/* Edit Button */}
            <button
                onClick={() => handleEdit(slugCard)}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-600 border-gray-500 border hover:border-blue-600 rounded-md bg-white hover:bg-blue-600 hover:text-white transition"
            >
                <MdEdit />
            </button>

            {/* Delete Button */}
            <button
                onClick={() => handleDelete(slugCard._id)}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium border border-red-500 rounded-md bg-white hover:text-white hover:bg-red-500 text-red-500 transition"
            >
                <MdDelete />
            </button>
        </div>
    </div>
);

const CardItem = ({ label, content }) => (
    <div className="flex gap-2">
        <span className="font-medium text-gray-600">{label}:</span>
        <span className="text-gray-600">{content}</span>
    </div>
);


export default ActiveSlugManage;
