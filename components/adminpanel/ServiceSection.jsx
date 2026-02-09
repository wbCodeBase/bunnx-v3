"use client"
import { useState } from "react";

import Select from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";


import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import { useCreateComponentContentMutation, useDeleteComponentContentMutation, useUpdateComponentContentMutation } from '@/store/api/myApi';


// Custom validation for ObjectId
const objectIdSchema = z.custom((value) => {
    if (value === undefined || value === null || value === "") return true; // Allow empty or omitted values
    const objectIdRegex = /^[0-9a-fA-F]{24}$/; // Regex to validate MongoDB ObjectId
    return typeof value === "string" && objectIdRegex.test(value);
}, { message: "Invalid ObjectId format" });

const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters." }),
    description: z.string(),
    ctaRedirectUrl: z.string(), // Validate as ObjectId
    fetchOnSlug: z.array(objectIdSchema).nonempty({ message: "Please select at least one slug." }),
    templateName: z.string(),
    componentName: z.string(),
});

const ServiceSection = ({ servicesSection, templateName, activeSlugData }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [componentName, setComponentName] = useState("servicesSection");

    const [createComponentContent, result] = useCreateComponentContentMutation();
    const [deleteComponentContent] = useDeleteComponentContentMutation();
    const [updateComponentContent, { data, isSuccess: updateIsSuccess, isError: updateIsError, error: updateError, isLoading: updateIsLoading, reset }] = useUpdateComponentContentMutation();


    // console.log(servicesSection);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            ctaRedirectUrl: "",
            fetchOnSlug: [],
            templateName: templateName,
            componentName: componentName,
        },
    });



    const onSubmit = async (values) => {
        try {
            if (isEditing && editId) {
                await updateComponentContent({
                    id: editId,
                    templateName,
                    componentName,
                    componentData: values,
                }).unwrap();
                alert("Component content updated successfully!");
            } else {
                await createComponentContent(values).unwrap();
                alert("Component content created successfully!");
            }
            form.reset({
                title: "",
                description: "",
                ctaRedirectUrl: "",
                fetchOnSlug: [],
                templateName: templateName,
                componentName: componentName,
            });
            setIsEditing(false);
            setEditId(null);
        } catch (error) {
            console.error("Error:", error);
            alert(error?.data?.error || error.message || "An error occurred");
        }
    };

    const handleUpdate = (id) => {
        const contentToEdit = servicesSection.find((item) => item._id === id);
        if (contentToEdit) {
            setIsEditing(true);
            setEditId(id);

            // Create a copy of the content to edit
            const editableContent = {
                ...contentToEdit,
                fetchOnSlug: contentToEdit?.fetchOnSlug?.map((slug) => slug?._id), // Update fetchOnSlug safely
                ctaRedirectUrl: contentToEdit?.ctaRedirectUrl?._id, // Update ctaRedirectUrl safely
            };


            form.reset({
                ...editableContent,
                templateName: templateName,
                componentName: contentToEdit.componentName || componentName,
            });
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteComponentContent({ id, templateName, componentName });
            alert("Component content deleted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert(error?.data?.error || error.message || "An error occurred");
        }
    };

    const slugArray = activeSlugData;


    return (
        <>
            <div className="flex py-6 border-t flex-col justify-start w-full">
                <div className="text-2xl font-semibold mt-6 mx-24">Services <span className='text-sm'>({templateName})</span> </div>

                {result.isError && <p>Error: {result.error?.data?.error || 'Something went wrong'}</p>}

                <div className="flex justify-center gap-10 flex-wrap w-full sm:w-auto p-3">

                    <ServiceSectionForm
                        form={form}
                        onSubmit={onSubmit}
                        isEditing={isEditing}
                        updateIsLoading={updateIsLoading}
                        result={result}
                        slugArray={slugArray}
                    />
                    <ServiceSectionCards
                        data={servicesSection}
                        onEdit={handleUpdate}
                        onDelete={handleDelete}
                    />

                </div>
            </div>
        </>
    )
}



const ServiceSectionForm = ({ form, onSubmit, isEditing, updateIsLoading, result, slugArray }) => (


    < Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full sm:w-1/2 border bg-white sm:p-8 p-3 rounded-lg">

            <FormFieldInput form={form} name="title" label="Title" placeholder="Title" />
            <FormFieldInput form={form} name="description" label="Description" placeholder="Enter Description" />

            <FormFieldFetchOnSlug form={form} name="fetchOnSlug" label="FetchOn Page (Multiple)" options={slugArray} placeholder="Slug where it display" />

            <FormFieldInput
                form={form}
                name="ctaRedirectUrl"
                label="Redirect URL"
                placeholder="Select a redirect URL"
                options={slugArray}
            />



            <div className="mt-4">
                <Button type="submit">{result.isLoading ? "Saving..." : updateIsLoading ? "Updating..." : isEditing ? "Update" : "Submit"}</Button>
            </div>
        </form>
    </Form >
);




const FormFieldInput = ({ form, name, label, placeholder, options }) => (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    {name === "description" ?
                        <Textarea className="bg-gray-50" placeholder={placeholder} {...field} /> :


                        name === "ctaRedirectUrl" && options.length > 0 ? (
                            <Select
                                className="bg-gray-50 rounded-md"
                                placeholder={placeholder || "Select an option"}
                                options={options.map((option) => ({
                                    value: option._id,
                                    label: `${option.label} | ${option.slug}`,
                                }))}
                                value={options.find((option) => option._id === field.value) || null}
                                onChange={(selectedOption) => field.onChange(selectedOption ? selectedOption.value : "")}
                                isClearable
                                isSearchable
                            />


                        ) :

                            <Input className="bg-gray-50" placeholder={placeholder} {...field} />

                    }
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);



const FormFieldFetchOnSlug = ({ form, name, label, options }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter options based on the search query
    const filteredOptions = options.filter((option) =>
        option?.label?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <>
                            {/* Search Bar */}
                            <div className="mb-2">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search slugs..."
                                    className="w-full border rounded-md p-2 bg-gray-50"
                                />
                            </div>

                            {/* Scrollable Tabs Container */}
                            <div className="flex gap-2 overflow-y-auto flex-wrap border rounded-md p-2 bg-gray-50 max-h-40">
                                {filteredOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${field.value.includes(option._id)
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                            }`}
                                        onClick={() => {
                                            // Toggle option in array
                                            const newValue = field.value.includes(option._id)
                                                ? field.value.filter((val) => val !== option._id)
                                                : [...field.value, option._id];
                                            field.onChange(newValue);
                                        }}
                                    >
                                        {option.label}
                                    </div>
                                ))}

                                {filteredOptions.length === 0 && (
                                    <div className="text-gray-500">No results found</div>
                                )}
                            </div>
                        </>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};



const ServiceSectionCards = ({ data, onEdit, onDelete }) => (
    <div className="bg-white border p-3 rounded-lg w-full sm:w-1/3">
        <div className="font-semibold mb-2 text-center">Services Cards</div>
        <div className="overflow-y-auto max-h-[40rem] scrollbar-design">
            {data && data.map((heroSecCard, i) => (
                <ServiceCard key={i} i={i} serviceSecCard={heroSecCard} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    </div>
);

const ServiceCard = ({ serviceSecCard, i, onEdit, onDelete }) => (
    <div className="relative bg-gray-50 flex gap-2 flex-col rounded-lg p-3 my-2 text-sm">

        <span className='absolute top-1 right-1 text-xs px-1 rounded-full text-white bg-gray-400'>{i + 1}</span>
        <CardItem label="Title" content={serviceSecCard?.title} />
        <CardItem label="Desc" content={serviceSecCard?.description} />
        <CardItem label="Fetch on" content={serviceSecCard?.fetchOnSlug?.map((slug) => slug?.slug).join(", ")} />
        <CardItem label="Redirect URL" content={serviceSecCard?.ctaRedirectUrl?.slug || "CTA not display in this card"} />


        {/* Action Buttons (Visible on Hover) */}
        <div className="absolute top-2 right-12 flex gap-2 opacity0 grouphover:opacity-100 transition-opacity duration-300">
            {/* Edit Button */}
            <button
                onClick={() => onEdit(serviceSecCard._id)}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-600 border-gray-500 border hover:border-blue-600 rounded-md bg-white hover:bg-blue-600 hover:text-white transition"
            >
                <MdEdit />
            </button>

            {/* Delete Button */}
            <button
                onClick={() => onDelete(serviceSecCard._id)}
                className="flex items-center gap-1 px-2 py-1 text-sm font-medium border border-red-500 rounded-md bg-white hover:text-white hover:bg-red-500 text-red-500 transition"
            >
                <MdDelete />
            </button>
        </div>

    </div>
);

const CardItem = ({ label, content }) => (
    <div className="flex gap-2">
        <span className="font-medium text-nowrap">{label}:</span>
        <span className="text-gray-600">{content}</span>
    </div>
);



export default ServiceSection