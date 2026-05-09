type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">{eyebrow}</p>
        ) : null}
        <h1 className="text-display mt-3 max-w-4xl text-slate-900">{title}</h1>
        <p className="text-body mt-6 max-w-3xl text-slate-600">{description}</p>
      </div>
    </section>
  );
}
