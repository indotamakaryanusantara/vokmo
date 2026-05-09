import { MotionSection } from "@/components/common/MotionSection";
import { stats } from "@/constants/site";

export function StatsSection() {
  return (
    <MotionSection className="border-y border-slate-200 bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm"
          >
            <p className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
