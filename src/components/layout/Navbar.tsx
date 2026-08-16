"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Container } from "@/components/shared/Container";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { getHeaderAuth, getHeaderNav } from "@/lib/i18n/navigation";
import { useDictionary } from "@/lib/i18n/use-dictionary";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const SCROLL_SOLID_THRESHOLD = 8;

const navLinkClass =
  "text-sm font-medium text-slate-900 transition-colors duration-200 hover:text-nav-hover";

export function Navbar() {
  const { locale, setLocale, isPending } = useLocale();
  const dict = useDictionary();
  const headerNav = useMemo(() => getHeaderNav(locale), [locale]);
  const headerAuth = useMemo(() => getHeaderAuth(locale), [locale]);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isSolid = scrolled || mobileOpen;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_SOLID_THRESHOLD);

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        isSolid
          ? "border-b border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
          : "border-b border-transparent bg-transparent shadow-none",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
        >
          <BrandLogo alt={dict.a11y.logoHome} priority />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
          aria-label={dict.a11y.mainNav}
        >
          {headerNav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <LocaleToggle
            value={locale}
            onChange={setLocale}
            ariaLabel={dict.a11y.localeToggle}
            disabled={isPending}
            className="hidden sm:inline-flex"
          />

          <Link
            href={headerAuth.login.href}
            className="hidden text-sm font-medium text-slate-800 transition-colors hover:text-nav-hover sm:inline"
          >
            {headerAuth.login.label}
          </Link>

          <Link
            href={headerAuth.cta.href}
            className={cn(
              "hidden rounded-[6px] bg-primary px-4 py-2 text-sm font-semibold text-white transition-[box-shadow,transform] duration-200 sm:inline-flex",
              "hover:shadow-[0_0_22px_rgba(255,0,255,0.45)] active:scale-[0.98]",
            )}
          >
            {headerAuth.cta.label}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? dict.a11y.closeMenu : dict.a11y.openMenu}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn("border-t border-slate-200/80 bg-white lg:hidden", mobileOpen ? "block" : "hidden")}
        aria-hidden={!mobileOpen}
      >
        <Container className="flex flex-col gap-1 py-4">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 hover:text-nav-hover"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
            <LocaleToggle
              value={locale}
              onChange={setLocale}
              ariaLabel={dict.a11y.localeToggle}
              disabled={isPending}
              className="w-fit"
            />
            <Link
              href={headerAuth.login.href}
              className="text-sm font-medium text-slate-800 hover:text-nav-hover"
              onClick={() => setMobileOpen(false)}
            >
              {headerAuth.login.label}
            </Link>
            <Link
              href={headerAuth.cta.href}
              className="inline-flex justify-center rounded-[6px] bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:shadow-[0_0_22px_rgba(255,0,255,0.45)]"
              onClick={() => setMobileOpen(false)}
            >
              {headerAuth.cta.label}
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
