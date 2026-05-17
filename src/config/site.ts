import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locale";

export const site = {
  name: "VOKMO",
  legalName: "VOKMO",
  url: "https://vokmo.com",
  locale: "id_ID",
  contactEmail: "hello@vokmo.com",
  social: {
    twitter: "https://x.com/vokmo",
    linkedin: "https://www.linkedin.com/company/vokmo",
    github: "https://github.com/indotamakaryanusantara",
  },
} as const;

export function getOrganizationJsonLd(locale: Locale): Record<string, unknown> {
  const dict = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: dict.site.description,
    email: site.contactEmail,
    areaServed: "ID",
  };
}
