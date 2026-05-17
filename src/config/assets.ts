/** Static assets under /public — replace files in place, keep paths stable. */
export const homeImages = {
  /** Hero visual: public/images/home/hero-right-1.png */
  hero: "/images/home/hero-right-1.png",
} as const;

/** Matches Navbar height: h-16 / lg:h-[4.25rem] */
export const siteHeader = {
  height: "4rem",
  heightLg: "4.25rem",
} as const;
