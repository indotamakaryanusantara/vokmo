"use client";

import { homeImages } from "@/config/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type HeroVisualProps = {
  alt: string;
  placeholderHint: string;
  className?: string;
};

export function HeroVisual({ alt, placeholderHint, className }: HeroVisualProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <p className={cn("text-center text-xs text-muted lg:text-left", className)}>
        {placeholderHint}{" "}
        <code className="font-mono text-foreground">public/images/home/hero-right-1.png</code>
      </p>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <Image
        src={homeImages.hero}
        alt={alt}
        width={2835}
        height={1890}
        priority
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="h-auto w-full max-w-full"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
