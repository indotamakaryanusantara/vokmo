import { brandImages } from "@/config/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BrandLogoProps = {
  alt: string;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ alt, className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src={brandImages.logo}
      alt={alt}
      width={brandImages.logoWidth}
      height={brandImages.logoHeight}
      priority={priority}
      className={cn("h-8 w-auto lg:h-9", className)}
    />
  );
}
