import { AboutPage } from "@/components/pages/about/AboutPage";
import { site } from "@/config/site";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const page = getDictionary(locale).pages.about;

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function AboutRoute() {
  const locale = await getLocale();
  const copy = getDictionary(locale).pages.about;

  return <AboutPage copy={copy} contactHref={`mailto:${site.contactEmail}`} />;
}
