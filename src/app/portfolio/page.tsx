import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/common/MotionSection";
import { PageHero } from "@/components/common/PageHero";
import { projects } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Portfolio",
  "Selected case studies and product launches delivered by VOKMO.",
);

const extended = [
  ...projects,
  {
    title: "Lumen Analytics Suite",
    category: "AI & Data",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    alt: "Team discussing charts on a display",
  },
  {
    title: "Pulse Health Portal",
    category: "Web & UX",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthcare professional using a tablet",
  },
  {
    title: "Vertex Security Console",
    category: "Cloud",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer workstation with code on screen",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that holds up in boardrooms and production"
        description="A curated set of engagements spanning regulated industries, high-traffic consumer experiences, and internal platforms powering thousands of users."
      />

      <MotionSection className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {extended.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {project.category}
                  </p>
                  <h2 className="text-h4 text-slate-900">{project.title}</h2>
                  <p className="text-body flex-1 text-slate-600">
                    End-to-end product delivery with measurable KPI improvements across adoption,
                    performance, and reliability.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Discuss a similar build
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
