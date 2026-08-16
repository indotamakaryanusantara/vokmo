import { DeliverabilityPage } from "@/components/pages/deliverability/DeliverabilityPage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const page = getDictionary(locale).pages.deliverability;

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function DeliverabilityRoute() {
  const locale = await getLocale();
  const copy = getDictionary(locale).pages.deliverability;

  return <DeliverabilityPage copy={copy} />;
}
