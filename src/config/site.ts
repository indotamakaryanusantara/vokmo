export const site = {
  name: "VOKMO",
  legalName: "VOKMO",
  url: "https://vokmo.com",
  description:
    "Infrastruktur email enterprise: PowerMTA terkelola, SMTP relay dedicated, audit deliverability SPF/DKIM/DMARC, dan optimasi MailWizz untuk pengiriman skala besar.",
  locale: "id_ID",
  contactEmail: "hello@vokmo.com",
  phone: "+62-000-000-0000",
  social: {
    linkedin: "https://www.linkedin.com/company/vokmo",
  },
} as const;

export type SiteConfig = typeof site;
