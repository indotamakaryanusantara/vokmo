import { HomepageSections } from "@/components/pages/home/HomepageSections";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getDictionary(locale).home.meta;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function HomePage() {
  return <HomepageSections />;
}
