import { site } from "@/config/site";
import { footerNav } from "@/data/navigation";
import { Container } from "@/components/shared/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-200">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-heading text-xl font-semibold text-white">
            {site.name}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">{site.description}</p>
        </div>
        {footerNav.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{group.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-300 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.legalName}. Hak cipta dilindungi.
      </div>
    </footer>
  );
}
