/**
 * Reusable JSON-LD Schema component
 * @param {Object} props
 * @param {Object} props.serviceData - Service information
 * @param {Object} props.companyInfo - Company information
 */
export function JsonLdSchema({ serviceData, companyInfo }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: serviceData.name,
    description: serviceData.description,
    image: serviceData.image,
    "@id": "https://www.bunnx.com",
    url: serviceData.url,
    telephone: companyInfo.telephone,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: companyInfo.aggregateRating.ratingValue,
      reviewCount: companyInfo.aggregateRating.reviewCount,
      bestRating: companyInfo.aggregateRating.bestRating,
      worstRating: companyInfo.aggregateRating.worstRating,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.streetAddress,
      addressLocality: companyInfo.address.addressLocality,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: companyInfo.geo.latitude,
      longitude: companyInfo.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: companyInfo.openingHours.dayOfWeek,
      opens: companyInfo.openingHours.opens,
      closes: companyInfo.openingHours.closes,
    },
    sameAs: companyInfo.sameAs,
    // Service-specific additions
    ...(serviceData.priceRange && {
      priceRange: serviceData.priceRange,
    }),
    ...(serviceData.areaServed && {
      areaServed: serviceData.areaServed,
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceData.serviceType} Services`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceData.serviceType,
            description: serviceData.description,
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}
