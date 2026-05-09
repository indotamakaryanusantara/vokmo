import { MotionSection } from "@/components/common/MotionSection";
import { workflowSteps } from "@/constants/site";

export function WorkflowSection() {
  return (
    <MotionSection className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Process</p>
          <h2 className="text-h2 mt-3 text-slate-900">A workflow designed for clarity</h2>
          <p className="text-body mt-4 text-slate-600">
            Predictable rituals, visible progress, and decisions documented where your teams already
            work.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm"
            >
              <span className="font-heading text-sm font-bold text-indigo-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h6 mt-4 text-slate-900">{step.title}</h3>
              <p className="text-body mt-3 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </MotionSection>
  );
}
