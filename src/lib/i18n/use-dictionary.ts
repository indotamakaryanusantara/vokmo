"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { useMemo } from "react";

export function useDictionary() {
  const { locale } = useLocale();
  return useMemo(() => getDictionary(locale), [locale]);
}
