import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/common/MotionSection";
import { projects } from "@/constants/site";

export function FeaturedProjectsSection() {
  return (
    <MotionSection className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">
              Portfolio
            </p>
            <h2 className="text-h2 mt-3 text-white">Selected engagements</h2>
            <p className="text-body mt-4 text-slate-300">
              A snapshot of platforms we have architected, launched, and scaled alongside ambitious
              teams.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex w-fit rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                  {project.category}
                </p>
                <h3 className="text-h5 text-white">{project.title}</h3>
                <p className="text-sm text-slate-300">
                  Strategy, UX, engineering, and launch support delivered as one cohesive squad.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
