export type ServiceSummary = {
  slug: string;
  title: string;
  excerpt: string;
  highlights: string[];
};

export const services: ServiceSummary[] = [
  {
    slug: "smtp-server",
    title: "SMTP Dedicated & Infrastruktur Mail",
    excerpt:
      "Relay SMTP terkelola, rotasi IP, tuning PowerMTA, dan arsitektur HA untuk throughput broadcast stabil.",
    highlights: [
      "Dedicated IP & warmup protocol",
      "PowerMTA / relay policy tuning",
      "Integrasi AWS SES & hybrid routing",
    ],
  },
  {
    slug: "deliverability",
    title: "Deliverability & Compliance DNS",
    excerpt:
      "Audit end-to-end SPF, DKIM, DMARC, BIMI, PTR, serta playbook inbox placement untuk domain korporat.",
    highlights: [
      "Alignment SPF/DKIM strict mode",
      "DMARC reporting & policy rollout",
      "Blacklist remediation & reputation monitoring",
    ],
  },
];
