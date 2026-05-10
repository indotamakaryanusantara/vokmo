import { site } from "@/config/site";

export function getOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.contactEmail,
    telephone: site.phone,
    areaServed: "ID",
    serviceType: [
      "Email infrastructure",
      "SMTP relay management",
      "Email deliverability consulting",
    ],
  };
}
