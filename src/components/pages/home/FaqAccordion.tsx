"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useId, useState } from "react";

type FaqAccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqAccordionItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <article
            key={item.id}
            className={cn("faq-accordion__item", isOpen && "faq-accordion__item--open")}
          >
            <h3 className="faq-accordion__heading">
              <button
                type="button"
                id={buttonId}
                className="faq-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="faq-accordion__question">{item.question}</span>
                <span className={cn("faq-accordion__toggle", isOpen && "faq-accordion__toggle--open")} aria-hidden>
                  <Plus className="faq-accordion__toggle-icon" strokeWidth={2.25} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("faq-accordion__panel", isOpen && "faq-accordion__panel--open")}
              inert={!isOpen}
            >
              <div className="faq-accordion__panel-inner">
                <p className="faq-accordion__answer">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
