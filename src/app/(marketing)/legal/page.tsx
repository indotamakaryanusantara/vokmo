import { LegalPage } from "@/components/pages/legal/LegalPage";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const page = getDictionary(locale).pages.legal;

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function LegalRoute() {
  const locale = await getLocale();
  const copy = getDictionary(locale).pages.legal;

  return <LegalPage copy={copy} contactEmail={site.contactEmail} />;
}
