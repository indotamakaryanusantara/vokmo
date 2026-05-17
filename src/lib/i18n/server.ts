import { getDictionary } from "@/lib/i18n/dictionaries";
import { cookies } from "next/headers";
import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from "@/lib/i18n/locale";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;

  if (value && isLocale(value)) {
    return value;
  }

  return defaultLocale;
}

export async function getServerDictionary() {
  return getDictionary(await getLocale());
}
