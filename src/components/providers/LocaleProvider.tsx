"use client";

import { setLocale } from "@/features/i18n/actions/setLocale";
import type { Locale } from "@/lib/i18n/locale";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
  type PropsWithChildren,
} from "react";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = PropsWithChildren<{
  initialLocale: Locale;
}>;

export function LocaleProvider({ initialLocale, children }: LocaleProviderProps) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setLocaleState(initialLocale);
  }, [initialLocale]);

  const changeLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;

      startTransition(async () => {
        const result = await setLocale(next);
        if (result.ok) {
          setLocaleState(next);
          router.refresh();
        }
      });
    },
    [locale, router],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale: changeLocale,
      isPending,
    }),
    [locale, changeLocale, isPending],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
