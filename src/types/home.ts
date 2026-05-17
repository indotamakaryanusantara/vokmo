import type { HomeSectionId } from "@/lib/i18n/dictionaries";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export type { HomeSectionId };

export type HomeSectionCopyMap = Dictionary["home"]["sections"];

export type HomeSectionCopy = HomeSectionCopyMap[HomeSectionId];

export type HomeSectionProps<K extends HomeSectionId = HomeSectionId> = {
  copy: HomeSectionCopyMap[K];
};
