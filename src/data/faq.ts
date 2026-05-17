import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locale";
import type { FaqItem } from "@/types";

export function getFaqItems(locale: Locale): FaqItem[] {
  return getDictionary(locale).home.sections.faq.items.map(({ question, answer }) => ({
    question,
    answer,
  }));
}
