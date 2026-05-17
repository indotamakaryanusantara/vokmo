import { cn } from "@/lib/utils";

export type HygieneStep = {
  id: string;
  label: string;
};

type HygieneStepChipsProps = {
  steps: readonly HygieneStep[];
  stepsAriaLabel: string;
  className?: string;
};

export function HygieneStepChips({ steps, stepsAriaLabel, className }: HygieneStepChipsProps) {
  return (
    <ol className={cn("hygiene-steps", className)} aria-label={stepsAriaLabel}>
      {steps.map((step, index) => (
        <li
          key={step.id}
          className={cn("hygiene-step-chip", `hygiene-step-chip--${index + 1}`)}
        >
          <span className="hygiene-step-chip__index" aria-hidden>
            {index + 1}
          </span>
          <span className="hygiene-step-chip__label">{step.label}</span>
        </li>
      ))}
    </ol>
  );
}
