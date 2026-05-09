import Image from "next/image";
import { MotionSection } from "@/components/common/MotionSection";
import { PageHero } from "@/components/common/PageHero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About",
  "Learn how VOKMO partners with enterprises to ship resilient digital products.",
);

const values = [
  {
    title: "Craft with accountability",
    body: "We treat your roadmap, budget, and reputation as our own—no surprises, no black boxes.",
  },
  {
    title: "Velocity with discipline",
    body: "Fast iterations anchored in architecture reviews, testing, and clear documentation.",
  },
  {
    title: "Partnership over handoffs",
    body: "We embed with your teams so knowledge stays inside your organization for the long term.",
  },
];

const team = [
  {
    name: "Alya Prameswari",
    role: "Managing Partner",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Daniel Hartono",
    role: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mira Kusuma",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Technology partners for complex, regulated industries"
        description="VOKMO was founded to close the gap between board-level ambition and ground-level execution. We bring product, design, and platform expertise into a single accountable team."
      />

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="space-y-4">
            <h2 className="text-h3 text-slate-900">Our story</h2>
            <p className="text-body text-slate-600">
              After years leading delivery inside global enterprises, our founders saw the same
              pattern: brilliant strategy stalling at the intersection of legacy systems, unclear
              ownership, and underpowered tooling.
            </p>
            <p className="text-body text-slate-600">
              VOKMO exists to compress that gap—pairing pragmatic architecture with modern product
              craft so launches feel inevitable, not heroic.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-100 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
              alt="Team collaborating in a workshop"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-h4 text-slate-900">Vision</h2>
              <p className="text-body mt-4 text-slate-600">
                Every ambitious organization deserves technology that feels as intentional as their
                brand—secure, fast, and ready for what comes next.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-h4 text-slate-900">Mission</h2>
              <p className="text-body mt-4 text-slate-600">
                We ship platforms that earn trust on day one and stay maintainable on day one
                thousand—measured by outcomes your leadership team can defend.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-h3 text-slate-900">Values that shape delivery</h2>
            <p className="text-body mt-4 text-slate-600">
              These principles show up in how we staff teams, run ceremonies, and make trade-offs
              when timelines get tight.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm"
              >
                <h3 className="text-h5 text-slate-900">{value.title}</h3>
                <p className="text-body mt-3 text-slate-600">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">Team</p>
            <h2 className="text-h3 mt-3 text-white">Leadership you will work with directly</h2>
            <p className="text-body mt-4 text-slate-300">
              Senior practitioners across product, engineering, and design—no bait-and-switch
              staffing model.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 50vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-h6 text-white">{member.name}</h3>
                  <p className="text-sm text-indigo-100">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
