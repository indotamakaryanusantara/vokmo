import { IntegrationsPage } from "@/components/pages/integrations/IntegrationsPage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const page = getDictionary(locale).pages.integrations;

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function IntegrationsRoute() {
  const locale = await getLocale();
  const copy = getDictionary(locale).pages.integrations;

  return <IntegrationsPage copy={copy} />;
}
