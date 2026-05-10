import { getOrganizationJsonLd } from "@/config/seo/organization";
import { site } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Infrastruktur Email Enterprise`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — Infrastruktur Email Enterprise`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Infrastruktur Email Enterprise`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <JsonLd data={getOrganizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
