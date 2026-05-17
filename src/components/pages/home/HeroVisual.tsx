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
      <p className={cn("px-1 text-center text-xs leading-relaxed text-muted sm:text-sm md:text-left", className)}>
        {placeholderHint}{" "}
        <code className="font-mono text-[0.7rem] text-foreground sm:text-xs">public/images/home/hero-right-1.png</code>
      </p>
    );
  }

  return (
    <div className={cn("hero-visual", className)}>
      <div className="hero-visual__frame">
        <Image
          src={homeImages.hero}
          alt={alt}
          width={2835}
          height={1890}
          priority
          unoptimized
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="h-auto w-full max-w-full"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}
