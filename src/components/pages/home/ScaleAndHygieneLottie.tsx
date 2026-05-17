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
        "relative mx-auto w-full min-w-0 max-w-md overflow-hidden rounded-lg border border-border bg-background-muted",
        "md:max-w-lg lg:max-w-none",
        className,
      )}
      aria-label={ariaLabel}
    >
      <ListHygieneUploadSimulation className="aspect-[5/4] w-full sm:aspect-[4/3]" />
      <figcaption
        className={cn(
          "border-t border-border bg-white px-3 py-2.5 text-center text-xs font-medium leading-snug text-slate-700",
          "sm:px-4 sm:py-3 sm:text-sm",
        )}
      >
        {contactCountLabel}
      </figcaption>
    </figure>
  );
}
