import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-indigo-500/15 to-transparent blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
            Enterprise digital studio
          </p>
          <div className="space-y-6">
            <h1 className="text-display text-white">
              Build products that <span className="gradient-text">move markets</span>
            </h1>
            <p className="text-body max-w-xl text-slate-200">{siteConfig.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              View work
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Delivery</dt>
              <dd className="mt-1 font-heading text-2xl font-semibold">Global</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-400">Focus</dt>
              <dd className="mt-1 font-heading text-2xl font-semibold">Outcome-led</dd>
            </div>
          </dl>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-indigo-900/40 lg:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Modern open office with natural light"
            fill
            priority
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-indigo-500/20" />
        </div>
      </div>
    </section>
  );
}
