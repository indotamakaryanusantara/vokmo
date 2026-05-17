import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locale";

export function getHeaderNav(locale: Locale) {
  const t = getDictionary(locale).nav;

  return [
    { label: t.products, href: "/products" },
    { label: t.apiDocs, href: "/docs/api" },
    { label: t.deliverability, href: "/deliverability" },
    { label: t.pricing, href: "/pricing" },
  ] as const;
}

export function getHeaderAuth(locale: Locale) {
  const t = getDictionary(locale).nav;

  return {
    login: { label: t.login, href: "/login" },
    cta: { label: t.startForFree, href: "/signup" },
  } as const;
}
