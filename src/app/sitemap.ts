import { site } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date();

  const paths = [
    "",
    "/about",
    "/products",
    "/integrations",
    "/docs/api",
    "/webhooks",
    "/status",
    "/deliverability",
    "/pricing",
    "/login",
    "/signup",
    "/legal",
  ];

  return paths.map((path, index) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/pricing" || path === "/products" ? 0.8 : 0.6,
  }));
}
