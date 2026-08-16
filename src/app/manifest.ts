import { site } from "@/config/site";
import { getServerDictionary } from "@/lib/i18n/server";
import type { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const dict = await getServerDictionary();

  return {
    name: site.name,
    short_name: site.name,
    description: dict.site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff00ff",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
