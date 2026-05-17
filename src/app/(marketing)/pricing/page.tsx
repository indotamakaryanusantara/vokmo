import { PlaceholderPage } from "@/components/shared/PlaceholderPage";
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

export default async function PricingPage() {
  const locale = await getLocale();
  const { pages, common } = getDictionary(locale);
  const page = pages.pricing;

  return (
    <PlaceholderPage
      eyebrow={common.brandEyebrow}
      title={page.title}
      description={page.description}
      body={page.body}
    />
  );
}
