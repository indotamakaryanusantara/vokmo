import { ProductsPage } from "@/components/pages/products/ProductsPage";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const page = getDictionary(locale).pages.products;

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function ProductsRoute() {
  const locale = await getLocale();
  const copy = getDictionary(locale).pages.products;

  return <ProductsPage copy={copy} />;
}
