import { PricingPage } from "@/components/pages/pricing/PricingPage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const page = getDictionary(locale).pages.pricing;

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function PricingRoute() {
  const locale = await getLocale();
  const copy = getDictionary(locale).pages.pricing;

  return <PricingPage copy={copy} />;
}
