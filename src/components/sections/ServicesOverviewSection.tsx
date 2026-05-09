import { Cable, Cloud, Globe, Palette, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { MotionSection } from "@/components/common/MotionSection";
import { services } from "@/constants/site";

const icons = [Globe, Cloud, Sparkles, Rocket, Palette, Cable];

export function ServicesOverviewSection() {
  return (
    <MotionSection id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Capabilities
          </p>
          <h2 className="text-h2 mt-3 text-slate-900">Everything you need to ship with confidence</h2>
          <p className="text-body mt-4 text-slate-600">
            From first prototype to global scale, we pair strategy with engineering discipline so
            your roadmap stays predictable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Globe;
            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-h5 mt-5 text-slate-900">{service.title}</h3>
                <p className="text-body mt-3 flex-1 text-slate-600">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex text-sm font-semibold text-indigo-600 transition group-hover:gap-2"
                >
                  Learn more
                  <span className="ml-1 transition group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
