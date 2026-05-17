export const LOCALE_COOKIE = "vokmo_locale";

export type Locale = "en" | "id";

export const locales: Locale[] = ["en", "id"];

export const defaultLocale: Locale = "id";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeToHtmlLang(locale: Locale): string {
  return locale === "id" ? "id" : "en";
}
