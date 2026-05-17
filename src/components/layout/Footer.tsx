import { site } from "@/config/site";
import { FooterSocial } from "@/components/layout/FooterSocial";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getFooterNav } from "@/lib/i18n/footer";
import { getLocale } from "@/lib/i18n/server";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import Link from "next/link";

export async function Footer() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const footerNav = getFooterNav(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-muted text-foreground">
      <Container className="py-10 sm:py-12 md:py-16">
        <div className="grid min-w-0 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {footerNav.map((group) => (
            <div key={group.title} className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{group.title}</p>
              <ul className="mt-3 space-y-1 sm:mt-4 sm:space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-block py-1 text-sm font-medium text-slate-700 transition-colors hover:text-nav-hover",
                        "focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nav-hover",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="font-heading text-lg font-semibold tracking-tight text-slate-900">{site.name}</p>
            <FooterSocial />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-pretty text-muted">{`© ${year} ${site.legalName}. ${dict.footer.copyright}`}</p>
        </div>
      </Container>
    </footer>
  );
}
