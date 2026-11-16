import { COMPANY } from "@/data/company";
import { ALL_SERVICES } from "@/data/services";

export function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${COMPANY.website}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    alternateName: "Brahmora Motions Studio",
    url: COMPANY.website,
    logo: `${COMPANY.website}/logo.svg`,
    image: `${COMPANY.website}/logo.svg`,
    description: COMPANY.description,
    telephone: `+91-${COMPANY.phone}`,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5355",
      longitude: "77.3910",
    },
    priceRange: "₹₹ - ₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      COMPANY.instagramHref,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brahmora Motions Creative & Tech Services",
      itemListElement: ALL_SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BRAHMORA MOTIONS",
    url: COMPANY.website,
    potentialAction: {
      "@type": "SearchAction",
      target: `${COMPANY.website}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return { organizationSchema, websiteSchema };
}
