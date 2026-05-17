import { site } from "@/config/site";
import { FooterSocial } from "@/components/layout/FooterSocial";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getFooterNav } from "@/lib/i18n/footer";
import { getLocale } from "@/lib/i18n/server";
import { Container } from "@/components/shared/Container";
import Link from "next/link";

export async function Footer() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const footerNav = getFooterNav(locale);

  return (
    <footer className="border-t border-border bg-background-muted text-foreground">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {footerNav.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-slate-700 transition-colors hover:text-nav-hover"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <p className="font-heading text-lg font-semibold text-slate-900">{site.name}</p>
            <FooterSocial />
          </div>
          <p className="text-center text-xs text-muted sm:text-right">
            Â© {new Date().getFullYear()} {site.legalName}. {dict.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
