"use client";

import { ListHygieneUploadSimulation } from "@/components/pages/home/ListHygieneUploadSimulation";
import { cn } from "@/lib/utils";

type ScaleAndHygieneVisualProps = {
  ariaLabel: string;
  contactCountLabel: string;
  className?: string;
};

export function ScaleAndHygieneLottie({
  ariaLabel,
  contactCountLabel,
  className,
}: ScaleAndHygieneVisualProps) {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-lg overflow-hidden rounded-lg border border-border bg-background-muted",
        className,
      )}
      aria-label={ariaLabel}
    >
      <ListHygieneUploadSimulation className="aspect-[4/3] w-full" />
      <figcaption className="border-t border-border bg-white px-4 py-3 text-center text-sm font-medium text-slate-700">
        {contactCountLabel}
      </figcaption>
    </figure>
  );
}
