import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export function pageMetadata(title: string, description?: string): Metadata {
  const desc = description ?? siteConfig.description;
  return {
    title,
    description: desc,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: desc,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description: desc,
    },
  };
}
