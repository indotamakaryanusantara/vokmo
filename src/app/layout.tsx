import { site, getOrganizationJsonLd } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { SameRouteClickHandler } from "@/components/providers/SameRouteClickHandler";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import { localeToHtmlLang } from "@/lib/i18n/locale";
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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${dict.site.defaultTitle}`,
      template: `%s | ${site.name}`,
    },
    description: dict.site.description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: `${site.name} — ${dict.site.defaultTitle}`,
      description: dict.site.description,
      url: site.url,
      siteName: site.name,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={localeToHtmlLang(locale)} className={`${montserrat.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <JsonLd data={getOrganizationJsonLd(locale)} />
        <LocaleProvider initialLocale={locale}>
          <SameRouteClickHandler />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
