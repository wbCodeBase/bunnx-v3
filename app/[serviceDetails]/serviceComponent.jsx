
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
import PageTransition from "@/components/PageTransition";
import heroDefaultImg from "@/public/developmentServices.jpg";

function formatparameter(input) {
  return input
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function ServiceDetailsPage({ serviceDetails }) {
  // const { serviceDetails } = params;

  // Fetch slugs server-side
  const activeSlugData = await getActiveSlugs();

  const isValidSlug = activeSlugData?.some((item) => item?.slug === serviceDetails);

  if (!isValidSlug) {
    notFound(); // ✅ Triggers 404 page with correct status code
  }

  return (
    <PageTransition>
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
    </PageTransition>
  );
}



// 'use client'

// import { useParams, useRouter } from "next/navigation";

// import Services from "@/components/services/Services";
// import HeroSection from '@/components/layout/HeroSection';
// import NumericCounterInfo from "@/components/layout/NumericCounterInfo";
// import ChooseUs from "@/components/services/ChooseUs";
// import Faqs from "@/components/layout/Faqs";
// import ProcessShowcase from '@/components/services/OurProcess';
// import Methodology from '@/components/services/Methodology';
// import HiringModels from '@/components/services/HiringModels';
// import GuideTopics from '@/components/services/GuideTopics';
// import EngagementModel from '@/components/hire/EngagementModel';



// import { useGetActiveSlugQuery } from '../../store/api/myApi';
// import heroDefaultImg from "/public/developmentServices.jpg"

// import PlaneCta from '@/components/layout/PlaneCta';
// import GlassmorphismCta from "@/components/layout/GlassmorphismCta";
// import GlassmorphismCta2 from "@/components/layout/GlassmorphismCta2";


// import PageTransition from "@/components/PageTransition";
// import { AnimatePresence } from "framer-motion";


// function formatparameter(input) {
//   return input
//     .split('-') // Split the string by hyphen
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
//     .join(' '); // Join them back together without hyphens
// }



// export default function ServiceDetailsComp() {
//   const params = useParams();
//   const router = useRouter();
//   const { serviceDetails } = params;

//   const { data: activeSlugData, error: activeSlugError } = useGetActiveSlugQuery();


//   if (activeSlugError) {
//     console.log(activeSlugError);    
//     return (
//       <div className="flex flex-col items-center justify-center h-screen w-full space-y-4">
//         {activeSlugError && (
//           <p className="text-red-500 text-lg">
//             Error fetching active slug data: {activeSlugError?.data?.error || activeSlugError?.message || "Unknown error"}
//           </p>
//         )}
//       </div>
//     );
//   }




//   if (activeSlugData) {
//     const isSlugActive = activeSlugData?.some((item) => `${item?.slug}` === serviceDetails);

//     // Redirect to 404 if no matching slug is found
//     if (!isSlugActive) {
//       router.replace("/404");
//       return null
//     }
//   }



//   return (
//     <>

//       <AnimatePresence mode="wait">
//         <PageTransition key={router.route}>

//           <HeroSection heroDefaultImg={heroDefaultImg} pageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />

//           <NumericCounterInfo />

//           {/* <Services serviceSectionObj={pageContentData?.servicesSection} serviceDetailPageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} /> */}
         
//           <Services serviceDetailPageSlug={serviceDetails} extractNameFromSlug={formatparameter(serviceDetails)} />

//           <PlaneCta serviceDetailPageSlug={serviceDetails} />

//           <ProcessShowcase serviceDetailPageSlug={serviceDetails} />

//           <Methodology serviceDetailPageSlug={serviceDetails} />

//           <ChooseUs serviceDetailPageSlug={serviceDetails} />

//           <GlassmorphismCta serviceDetailPageSlug={serviceDetails} />

//           <EngagementModel serviceDetailPageSlug={serviceDetails} hiredevOf={formatparameter(serviceDetails)} />

//           <HiringModels serviceDetailPageSlug={serviceDetails} />

//           <GlassmorphismCta2 serviceDetailPageSlug={serviceDetails} />

//           <GuideTopics serviceDetailPageSlug={serviceDetails} />

//           <Faqs serviceDetailPageSlug={serviceDetails} />

//         </PageTransition>
//       </AnimatePresence>
//     </>
//   );
// }
