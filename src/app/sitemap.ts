import { site } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/deliverability`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/smtp-server`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
