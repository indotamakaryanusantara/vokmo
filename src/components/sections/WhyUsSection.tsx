import { CheckCircle2 } from "lucide-react";
import { MotionSection } from "@/components/common/MotionSection";

const reasons = [
  "Senior-led teams across product, design, and platform engineering.",
  "Transparent delivery with weekly demos and shared dashboards.",
  "Performance budgets enforced from day one—not as an afterthought.",
  "Security and compliance considered early, not bolted on at launch.",
];

export function WhyUsSection() {
  return (
    <MotionSection className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Why VOKMO
          </p>
          <h2 className="text-h2 mt-3 text-slate-900">Built for leaders who care about craft</h2>
          <p className="text-body mt-4 text-slate-600">
            We operate as an extension of your leadership team—clear communication, sharp execution,
            and a bias toward measurable outcomes.
          </p>
        </div>
        <ul className="space-y-4">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden />
              <p className="text-body text-slate-700">{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}
