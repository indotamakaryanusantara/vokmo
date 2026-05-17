import { trustLogos } from "@/data/trust-logos";
import { cn } from "@/lib/utils";

type TrustBarMarqueeProps = {
  className?: string;
};

type TrustMarqueeGroupProps = {
  duplicate?: boolean;
};

function TrustMarqueeGroup({ duplicate }: TrustMarqueeGroupProps) {
  return (
    <ul
      className="trust-marquee-group"
      aria-hidden={duplicate ? true : undefined}
      role={duplicate ? undefined : "list"}
    >
      {trustLogos.map((logo) => (
        <li key={`${duplicate ? "dup-" : ""}${logo.id}`} className="trust-marquee-item group/logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={duplicate ? "" : logo.name}
            width={logo.width}
            height={59}
            loading="lazy"
            decoding="async"
            className="trust-marquee-logo"
            draggable={false}
          />
        </li>
      ))}
    </ul>
  );
}

export function TrustBarMarquee({ className }: TrustBarMarqueeProps) {
  return (
    <div className={cn("trust-marquee", className)}>
      <div className="trust-marquee-track">
        <TrustMarqueeGroup />
        <TrustMarqueeGroup duplicate />
      </div>
    </div>
  );
}
