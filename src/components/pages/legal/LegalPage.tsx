import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type LegalPageCopy = Dictionary["pages"]["legal"];

type LegalPageProps = {
  copy: LegalPageCopy;
  contactEmail: string;
};

export function LegalPage({ copy, contactEmail }: LegalPageProps) {
  return (
    <section aria-label={copy.ariaLabel} className="bg-background page-section-top pb-16 sm:pb-20 md:pb-28">
      <Container>
        <div className="mx-auto max-w-3xl min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-nav-hover sm:text-sm">{copy.eyebrow}</p>
          <h1
            className={cn(
              "mt-3 font-heading text-balance text-4xl font-bold tracking-tight text-slate-900",
              "md:text-[3.25rem] md:leading-[1.08]",
              "lg:text-6xl lg:leading-[1.05]",
            )}
          >
            {copy.headline}
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted md:mt-6 md:text-lg">{copy.body}</p>
          <p className="mt-3 text-sm text-slate-500">
            {copy.updatedLabel}: {copy.updatedDate}
          </p>

          <div className="mt-12 space-y-12 sm:mt-16" aria-label={copy.sectionsAriaLabel}>
            {copy.sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-pretty text-base leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.id === "contact" ? (
                  <p className="mt-4 text-base text-slate-800">
                    <span className="text-muted">{copy.contactLead} </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="font-medium text-nav-hover underline-offset-4 hover:underline"
                    >
                      {contactEmail}
                    </a>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
