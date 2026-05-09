import { Cable, Cloud, Globe, Palette, Rocket, Sparkles } from "lucide-react";
import { MotionSection } from "@/components/common/MotionSection";
import { PageHero } from "@/components/common/PageHero";
import { services } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Services",
  "Explore VOKMO capabilities across web, cloud, AI, design, and integration.",
);

const icons = [Globe, Cloud, Sparkles, Rocket, Palette, Cable];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capability depth without the agency bloat"
        description="Each engagement is assembled around your outcomes—whether you need a focused squad for a launch or a platform team for multi-year modernization."
      />

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = icons[index] ?? Globe;
              return (
                <article
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-8 shadow-sm transition hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="text-h4 mt-6 text-slate-900">{service.title}</h2>
                  <p className="text-body mt-4 text-slate-600">{service.description}</p>
                  <ul className="text-body mt-6 space-y-2 text-slate-600">
                    <li>Discovery workshop and technical assessment</li>
                    <li>Architecture blueprint with risk register</li>
                    <li>Milestone-based delivery with shared reporting</li>
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
