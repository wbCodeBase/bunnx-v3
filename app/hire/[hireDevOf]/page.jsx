import HireDetailsComponent from "./hireComponent"

import { notFound } from "next/navigation";
import metaData from "@/staticDb/hiremeta.json";


export async function generateMetadata({ params }) {
  // read route params
  const currentSlug = params.hireDevOf
  // console.log("Slug service page", currentSlug);

  // fetch data
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/metadata/${currentSlug}`);
  // if (!response.ok) {
  //   console.log(`Failed to fetch metadata: ${response.statusText}`);
  //   return null
  // }

  // const jsonData = await response.json(); // Parse JSON once
  // console.log("Response JSON:", jsonData);
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  const meta = metaData[currentSlug] || {};

  return {
    title: meta.title,
    description: meta.description,
    robots: "noindex",
    // robots: meta.robots,  
    alternates: {
      canonical: `hire/${currentSlug}`,
    },
  }
}




export default function HireDevOf() {



  notFound();


  return (
    <>
      <HireDetailsComponent />
    </>
  );
}

