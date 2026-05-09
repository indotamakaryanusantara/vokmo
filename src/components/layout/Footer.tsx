import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { mainNav, siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <p className="font-heading text-xl font-bold tracking-tight">{siteConfig.name}</p>
          <p className="max-w-sm text-sm leading-relaxed text-slate-300">{siteConfig.tagline}</p>
          <div className="flex gap-3">
            <a
              href={siteConfig.social.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              LinkedIn
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={siteConfig.social.github}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              GitHub
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Explore</p>
          <ul className="mt-4 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-200 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>
              <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
