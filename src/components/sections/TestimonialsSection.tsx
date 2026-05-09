import { Quote } from "lucide-react";
import { MotionSection } from "@/components/common/MotionSection";
import { testimonials } from "@/constants/site";

export function TestimonialsSection() {
  return (
    <MotionSection className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Testimonials
          </p>
          <h2 className="text-h2 mt-3 text-slate-900">Trusted by operators who ship</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.author}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-indigo-500" aria-hidden />
              <blockquote className="text-body mt-6 flex-1 text-slate-700">{item.quote}</blockquote>
              <figcaption className="mt-8 border-t border-slate-100 pt-6">
                <p className="font-heading text-base font-semibold text-slate-900">{item.author}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
