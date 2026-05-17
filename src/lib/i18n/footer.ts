import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locale";

export function getFooterNav(locale: Locale) {
  const g = getDictionary(locale).footer.groups;

  return [
    {
      title: g.product.title,
      items: [
        { label: g.product.features, href: "/products" },
        { label: g.product.pricing, href: "/pricing" },
        { label: g.product.integrations, href: "/integrations" },
      ],
    },
    {
      title: g.developers.title,
      items: [
        { label: g.developers.apiDocs, href: "/docs/api" },
        { label: g.developers.webhooks, href: "/webhooks" },
        { label: g.developers.systemStatus, href: "/status" },
      ],
    },
    {
      title: g.company.title,
      items: [
        { label: g.company.about, href: "/about" },
        { label: g.company.contact, href: `mailto:${site.contactEmail}` },
        { label: g.company.legal, href: "/legal" },
      ],
    },
  ] as const;
}

export function getFooterSocial(locale: Locale) {
  const labels = getDictionary(locale).footer.social;

  return [
    { label: labels.twitter, href: site.social.twitter, icon: "twitter" as const },
    { label: labels.linkedin, href: site.social.linkedin, icon: "linkedin" as const },
    { label: labels.github, href: site.social.github, icon: "github" as const },
  ] as const;
}
