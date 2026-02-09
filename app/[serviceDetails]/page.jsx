
// import ServiceDetailsPage from "./serviceComponent";
import metaData from "@/staticDb/meta.json";

import { notFound } from "next/navigation";
import { getActiveSlugs } from "@/lib/api"; // <-- you'll create this server-side fetch
import Services from "@/components/services/Services";
import HeroSection from "@/components/layout/HeroSection";
import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
import ChooseUs from "@/components/services/ChooseUs";
import Faqs from "@/components/layout/Faqs";
import ProcessShowcase from "@/components/services/OurProcess";
import Methodology from "@/components/services/Methodology";
import HiringModels from "@/components/services/HiringModels";
import GuideTopics from "@/components/services/GuideTopics";
import EngagementModel from "@/components/hire/EngagementModel";
import PlaneCta from "@/components/layout/PlaneCta";
import GlassmorphismCta from "@/components/layout/GlassmorphismCta";
import GlassmorphismCta2 from "@/components/layout/GlassmorphismCta2";
import heroDefaultImg from "@/public/developmentServices.jpg";

function formatparameter(input) {
  return input
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


// Company information - centralized for consistency
const companyInfo = {
  telephone: "+91-9971544661",
  address: {
    streetAddress: "H-160, 203A BSI Business Park, Sector-63",
    addressLocality: "Noida",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    latitude: 28.625605488625713,
    longitude: 77.37881815528482,
  },
  openingHours: {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.facebook.com/Bunnx.official/",
    "https://www.instagram.com/bunn_x.official/",
    "https://www.linkedin.com/company/bunnx/",
  ],
}

export async function generateMetadata({ params }) {
  // read route params
  const resolvedParams = await params;
  const currentSlug = resolvedParams.serviceDetails
  const meta = metaData[currentSlug] || null;

  if (!meta) {
    // Optional: allow fallback SEO for invalid slugs
    return {
      title: "404 - Page Not Found | BunnX",
      description: "This page does not exist. Please check the URL or return to the homepage.",
      robots: "noindex, nofollow"
    };
  }

  return {
    title: meta?.title || "404 - Page Not Found | BunnX",
    description: meta?.description || "This page does not exist. Please check the URL or return to the homepage.",
    robots: meta?.robots || "noindex, nofollow",
    alternates: {
      canonical: currentSlug,
    },
  }
}


const ServiceDetails = async ({ params }) => {

  const { serviceDetails } = await params;

  // Fetch slugs server-side
  const activeSlugData = await getActiveSlugs();

  const isValidSlug = activeSlugData?.some((item) => item?.slug === serviceDetails);
  

  if (!isValidSlug) {
    notFound(); // ✅ Triggers 404 page with correct status code
  }


  // Generate dynamic JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: metaData[serviceDetails]?.title,
    description: metaData[serviceDetails]?.description,
    image: `https://www.bunnx.com/logo/bunnx-logo.png`,
    "@id": "https://www.bunnx.com",
    url: serviceDetails,
    "telephone": "+91-9971544661",
    "priceRange": "$$",

    "provider": {
      "@type": "Organization",
      "name": "BunnX"
    },

    address: {
      "@type": "PostalAddress",
      "hasMap": "https://maps.app.goo.gl/8VmvbyhhHqqgmVNU8",
      streetAddress: companyInfo.address.streetAddress,
      addressLocality: companyInfo.address.addressLocality,
      postalCode: companyInfo.address.postalCode,
      addressRegion: "Delhi-NCR",
      addressCountry: companyInfo.address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      "telephone": "+91-9971544661",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    }

  }

  const fullTitle = metaData[serviceDetails]?.title;

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: fullTitle.split(" ").slice(0, 3).join(" "),
    description: metaData[serviceDetails].description,


    "brand": {
      "@type": "Brand",
      "name": "BunnX"
    },

    aggregateRating: {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "957"
    }




  }


  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdProduct).replace(/</g, "\\u003c"),
        }}
      />

      {/* <PageTransition> */}
      <HeroSection heroDefaultImg={heroDefaultImg} pageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />
      <NumericCounterInfo />
      <Services serviceDetailPageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />
      <PlaneCta serviceDetailPageSlug={serviceDetails} />
      <ProcessShowcase serviceDetailPageSlug={serviceDetails} />
      <Methodology serviceDetailPageSlug={serviceDetails} />
      <ChooseUs serviceDetailPageSlug={serviceDetails} />
      <GlassmorphismCta serviceDetailPageSlug={serviceDetails} />
      <EngagementModel serviceDetailPageSlug={serviceDetails} hiredevOf={formatparameter(serviceDetails)} />
      <HiringModels serviceDetailPageSlug={serviceDetails} />
      <GlassmorphismCta2 serviceDetailPageSlug={serviceDetails} />
      <GuideTopics serviceDetailPageSlug={serviceDetails} />
      <Faqs serviceDetailPageSlug={serviceDetails} />
      {/* </PageTransition> */}


    </>
  )
}

export default ServiceDetails