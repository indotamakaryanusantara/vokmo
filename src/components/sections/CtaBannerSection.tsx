import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/common/MotionSection";

export function CtaBannerSection() {
  return (
    <MotionSection className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 px-8 py-12 text-white shadow-xl sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 translate-x-1/3 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-h3 text-white">Ready to design your next chapter?</h2>
              <p className="text-body text-indigo-50">
                Tell us about your goals—we will respond with a concise plan, timeline, and the
                right team shape for your initiative.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-50 lg:self-center"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
