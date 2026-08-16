import type { Locale } from "@/lib/i18n/locale";

const en = {
  site: {
    description:
      "Enterprise email infrastructure: managed PowerMTA, dedicated SMTP relay, 4-step list hygiene, and SPF/DKIM/DMARC deliverability audits.",
    defaultTitle: "Enterprise Email Infrastructure",
  },
  a11y: {
    mainNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    localeToggle: "Choose language",
    logoHome: "VOKMO home",
  },
  nav: {
    products: "Products",
    apiDocs: "API Docs",
    deliverability: "Deliverability",
    pricing: "Pricing",
    login: "Login",
    startForFree: "Start for Free",
  },
  footer: {
    groups: {
      product: {
        title: "Product",
        features: "Features",
        pricing: "Pricing",
        integrations: "Integrations",
      },
      developers: {
        title: "Developers",
        apiDocs: "API Docs",
        webhooks: "Webhooks",
        systemStatus: "System Status",
      },
      company: {
        title: "Company",
        about: "About",
        contact: "Contact",
        legal: "Legal / Anti-Spam",
      },
    },
    social: {
      twitter: "VOKMO on X (Twitter)",
      linkedin: "VOKMO on LinkedIn",
      github: "VOKMO on GitHub",
    },
    copyright: "All rights reserved.",
  },
  common: {
    comingSoon: "This page is being prepared. Full content will be added in upcoming iterations.",
    brandEyebrow: "VOKMO",
  },
  home: {
    meta: {
      title: "Enterprise Email Infrastructure",
      description:
        "VOKMO — managed PowerMTA, dedicated SMTP relay, 4-step list hygiene, and deliverability audits for high-volume sending.",
    },
    emptyState: {
      message: "Homepage sections will be built step by step.",
      hint: "Enable a section in src/data/homepage-content.ts and add copy under home.sections in dictionaries.",
    },
    sections: {
      hero: {
        ariaLabel: "Hero",
        headlineBefore: "Turn Every Email Into ",
        headlineHighlight: "Revenue",
        headlineAfter: ".",
        subheadline:
          "High-volume email sending engine engineered for scale. Maximize open rate, clean your contact lists, and reach your customers' Inbox instantly.",
        imageAlt: "VOKMO high-volume email infrastructure dashboard and delivery metrics",
        imagePlaceholderHint: "Add your hero image at public/images/home/hero-right-1.png",
      },
      "trust-bar": {
        ariaLabel: "Trusted by teams worldwide",
        tagline: "Infrastructure of choice for developers and global growth teams.",
      },
      "problem-statement": {
        ariaLabel: "Problem and solution",
        problemHeadline:
          "Frustrated when campaigns stop because of poor IP reputation and spam traps?",
        solutionHeadline: "Vokmo secures your sending reputation.",
        solutionBody:
          "With smart routing and automated DNS monitoring, your emails get priority delivery to the primary Inbox.",
      },
      "scale-and-hygiene": {
        ariaLabel: "Massive scale and list hygiene",
        eyebrow: "4-Step List Hygiene",
        headline: "Massive Scale & Automated List Hygiene",
        subheadline:
          "Upload lists with hundreds of thousands of contacts. VOKMO runs a four-stage hygiene pipeline before a single message leaves your SMTP relay.",
        lottieAriaLabel: "Animation simulating CSV upload of four hundred thousand contacts",
        contactCountLabel: "Simulating upload · 400,000 contacts",
        stepsAriaLabel: "Automated list hygiene steps",
        steps: [
          { id: "syntax", label: "Syntax Check" },
          { id: "bounce", label: "Hard Bounce Removal" },
          { id: "spam-trap", label: "Spam Trap Detection" },
          { id: "domain", label: "Domain Validation" },
        ],
      },
      "solution-overview": {
        ariaLabel: "Advanced automation and segmentation",
        eyebrow: "Advanced Automation & Segmentation",
        headline: "Behavior-Based Automation",
        body: "Don't just send blasts. Build personal customer journeys based on actions, clicks, and interaction history in real time.",
        canvasAriaLabel: "Automation workflow: email opened, wait two days, send special offer",
        nodes: [
          { id: "trigger", tag: "Trigger", label: "Email Opened" },
          { id: "wait", tag: "Wait", label: "2 Days" },
          { id: "action", tag: "Send", label: "Special Offer" },
        ],
      },
      "infrastructure-specs": {
        ariaLabel: "Global edge infrastructure",
        eyebrow: "Global Edge Infrastructure",
        headline: "Global Scale, Local Latency",
        body: "Powered by high-tier cloud routing, Vokmo separates your promotional and transactional queue paths so both stay instant—even when you are sending millions of newsletters.",
        globeAriaLabel:
          "Flat vector world map showing edge server nodes in Singapore, Jakarta, US East, and Europe with pulsing network links",
        nodes: [
          { id: "singapore", label: "Singapore", code: "SIN" },
          { id: "jakarta", label: "Jakarta", code: "CGK" },
          { id: "us-east", label: "US East", code: "IAD" },
          { id: "europe", label: "Europe", code: "FRA" },
        ],
      },
      "developer-edge-api": { ariaLabel: "Developer edge API" },
      "platform-personas": { ariaLabel: "Platform personas" },
      "services-matrix": { ariaLabel: "Services matrix" },
      "pricing-teaser": { ariaLabel: "Pricing teaser" },
      "deliverability-proof": {
        ariaLabel: "Deliverability suite",
        eyebrow: "Deliverability Suite",
        headline: "Automatic Reputation Protection",
        body: "We eliminate the complexity of authentication configuration. Our system guides your DNS setup to ensure full compliance with Google and Microsoft strict standards.",
        shieldLabel: "DNS authentication secured",
        checklistTitle: "DNS indicators",
        dnsRecords: [
          { id: "spf", name: "SPF", status: "Valid" },
          { id: "dkim", name: "DKIM", status: "Valid" },
          { id: "dmarc", name: "DMARC", status: "Enforced" },
        ],
      },
      "analytics-reporting": {
        ariaLabel: "Real-time analytics and reporting",
        eyebrow: "Real-time Analytics & Reporting",
        headline: "Granular-Level Analytics",
        body: "Understand exactly who opens your emails, which links drive the highest conversions, and which devices they use. The data you need to optimize your next move.",
        dashboardAriaLabel:
          "Analytics dashboard preview: opens by day, device breakdown, and email click heatmap",
        barChartTitle: "Opens by day",
        pieChartTitle: "Device breakdown",
        heatmapTitle: "Click heatmap",
        heatmapHint: "Hover zones on the email preview to see click concentration.",
        clicksLabel: "clicks",
        metrics: [
          { id: "open-rate", label: "Open rate", value: "42.8%" },
          { id: "click-rate", label: "Click rate", value: "12.4%" },
          { id: "unique-opens", label: "Unique opens", value: "18,402" },
        ],
        barData: [
          { id: "mon", label: "Mon", value: 1240 },
          { id: "tue", label: "Tue", value: 1580 },
          { id: "wed", label: "Wed", value: 1420 },
          { id: "thu", label: "Thu", value: 2100 },
          { id: "fri", label: "Fri", value: 1890 },
          { id: "sat", label: "Sat", value: 980 },
          { id: "sun", label: "Sun", value: 1120 },
        ],
        pieData: [
          { id: "mobile", label: "Mobile", value: 58 },
          { id: "desktop", label: "Desktop", value: 32 },
          { id: "tablet", label: "Tablet", value: 10 },
        ],
        heatmapZones: [
          { id: "logo", label: "Header logo", clicks: 420, intensity: 0.25 },
          { id: "hero", label: "Hero banner", clicks: 1840, intensity: 0.65 },
          { id: "body", label: "In-body link", clicks: 960, intensity: 0.45 },
          { id: "cta", label: "Primary CTA", clicks: 3920, intensity: 1 },
          { id: "footer", label: "Footer", clicks: 310, intensity: 0.2 },
        ],
      },
      workflow: { ariaLabel: "Workflow" },
      faq: {
        ariaLabel: "Frequently asked questions",
        eyebrow: "FAQ",
        headline: "Frequently Asked Questions",
        body: "Straight answers on billing, Dedicated IP, bounce handling, and separating transactional from marketing traffic.",
        items: [
          {
            id: "volume-billing",
            question: "How does volume-based billing work?",
            answer:
              "Vokmo uses a hybrid model. You choose a monthly plan aligned with your average volume target. If sends exceed your quota, the system never stops your campaigns. Overage is billed automatically via Pay-As-You-Go per 1,000 emails sent.",
          },
          {
            id: "dedicated-ip",
            question: "Do I get a Dedicated IP?",
            answer:
              "Yes, for high-volume senders. Scale plans (1M+ emails/month) automatically include a Dedicated IP with managed IP Warmup protocol. Lower tiers use our strictly monitored Shared IP pools.",
          },
          {
            id: "bounces-spam",
            question: "How does Vokmo handle hard bounces and spam complaints?",
            answer:
              "Fully automated. Connected to global Feedback Loops, every hard bounce or spam complaint is pulled into the Global Suppression List. The system refuses future sends to those addresses to protect your domain score.",
          },
          {
            id: "transactional-marketing",
            question: "Can I separate transactional and marketing sends?",
            answer:
              "Absolutely. Separate traffic using different Sub-accounts or API Keys. We isolate server queues so millions of marketing blasts never slow sub-second critical sends (such as OTP).",
          },
        ],
      },
      "final-cta": {
        ariaLabel: "Final call to action",
        headline: "Ready to scale your sending to the next level? Start building with Vokmo today.",
        cta: "Create Free Account",
        disclaimer: "No credit card required. Instant API access.",
      },
    },
  },
  pages: {
    about: {
      title: "About VOKMO",
      description:
        "VOKMO builds high-volume email infrastructure: managed SMTP Relay, 4-step list hygiene, and deliverability operations.",
      ariaLabel: "About VOKMO",
      eyebrow: "Company",
      headline: "Infrastructure for sending that has to land",
      body: "VOKMO is a digital infrastructure partner for marketers and developers who send at scale. We run SMTP Relay, list hygiene, DNS authentication, and deliverability ops—so campaigns and transactional mail share one stack without sharing one queue.",
      pillarsAriaLabel: "What we operate",
      pillars: [
        {
          id: "smtp",
          name: "SMTP Relay",
          summary: "Shared IP on Launch and Growth. Dedicated IP on Scale. Volume plans with Pay-As-You-Go overage so campaigns never pause.",
        },
        {
          id: "hygiene",
          name: "4-Step List Hygiene",
          summary: "Syntax, domain, mailbox, and risk checks before you burn IP reputation on dead or toxic addresses.",
        },
        {
          id: "deliverability",
          name: "Deliverability",
          summary: "SPF, DKIM, DMARC, PTR, BIMI guidance, warmup, bounce processing, and queue isolation for marketing vs OTP.",
        },
        {
          id: "api",
          name: "Developer API",
          summary: "REST API, API Keys, Sub-accounts, and webhooks for delivery and bounce events—built for edge-ready apps.",
        },
      ],
      principlesAriaLabel: "How we work",
      principlesTitle: "How we work",
      principles: [
        {
          id: "permission",
          name: "Permission-based sending",
          summary: "We design for opted-in lists. Purchased or scraped addresses are out of scope and against policy.",
        },
        {
          id: "ops",
          name: "Ops over slogans",
          summary: "Inbox placement comes from IP reputation, DNS, bounce handling, and list quality—not from vague claims.",
        },
        {
          id: "region",
          name: "Built for Indonesia, sent globally",
          summary: "Operations and support are Indonesia-first. Mailbox targets include Gmail, Microsoft, Yahoo, and regional ISPs.",
        },
      ],
      ctaHeadline: "Talk to the team that runs the pipes.",
      ctaPrimary: "Start for Free",
      ctaSecondary: "Contact",
      ctaDisclaimer: "No credit card required. Instant API access.",
    },
    pricing: {
      title: "Pricing",
      description:
        "Monthly volume plans plus Pay-As-You-Go overage. Campaigns never stop when you exceed quota.",
      ariaLabel: "VOKMO pricing",
      eyebrow: "Pricing",
      headline: "Volume plans that never pause a campaign",
      body: "Pick a monthly plan for your average volume. If you send more, overage is billed Pay-As-You-Go per 1,000 emails sent—the system never stops your campaigns.",
      plansAriaLabel: "Monthly plans",
      quotaSuffix: "emails / month",
      featuredBadge: "Most chosen for volume",
      ctaPrimary: "Start for Free",
      ctaSecondary: "Talk to sales",
      plans: [
        {
          id: "launch",
          name: "Launch",
          quota: "100,000",
          ipPath: "Shared IP",
          summary: "Start sending on a monitored Shared IP pool with list hygiene and DNS authentication included.",
          featured: false,
          cta: "Start for Free",
          href: "/signup",
          features: [
            "SMTP Relay on Shared IP",
            "4-Step List Hygiene",
            "SPF, DKIM, DMARC setup guidance",
            "Transactional vs marketing queue isolation",
            "Pay-As-You-Go overage per 1,000 emails",
          ],
        },
        {
          id: "growth",
          name: "Growth",
          quota: "500,000",
          ipPath: "Shared IP",
          summary: "Higher monthly quota on the same strictly monitored Shared IP path—built for scaling campaigns.",
          featured: false,
          cta: "Start for Free",
          href: "/signup",
          features: [
            "Higher monthly volume on Shared IP",
            "4-Step List Hygiene at import scale",
            "Real-time Analytics dashboard",
            "API Keys and webhooks",
            "Pay-As-You-Go overage per 1,000 emails",
          ],
        },
        {
          id: "scale",
          name: "Scale",
          quota: "1,000,000+",
          ipPath: "Dedicated IP",
          summary: "Dedicated IP with managed IP Warmup. Built for 1 million+ emails per month.",
          featured: true,
          cta: "Start for Free",
          href: "/signup",
          features: [
            "Dedicated IP with managed IP Warmup",
            "Isolated promotional and transactional queues",
            "Global Suppression List and Feedback Loops",
            "Edge API for sub-second transactional sends",
            "Pay-As-You-Go overage per 1,000 emails",
          ],
        },
      ],
      paygEyebrow: "Pay-As-You-Go",
      paygHeadline: "Overage never stops the send",
      paygBody:
        "Exceeding monthly quota does not pause campaigns. Extra volume is billed automatically Pay-As-You-Go per 1,000 emails sent—on top of your monthly plan.",
      notesTitle: "How billing works",
      notes: [
        "Monthly plan matches your average volume target.",
        "Scale (1M+ emails/month) includes Dedicated IP and IP Warmup.",
        "Launch and Growth send on monitored Shared IP pools.",
        "Separate Sub-accounts or API Keys for transactional vs marketing traffic.",
      ],
      ctaHeadline: "Start on a volume plan. Scale without stopping campaigns.",
      ctaDisclaimer: "No credit card required. Instant API access.",
    },
    deliverability: {
      title: "Deliverability",
      description:
        "SPF, DKIM, DMARC, BIMI, PTR, IP Warmup, and automated bounce handling for Inbox placement at volume.",
      ariaLabel: "VOKMO Deliverability",
      eyebrow: "Deliverability Suite",
      headline: "Inbox placement is an infrastructure problem",
      body: "VOKMO guides DNS authentication, warms Dedicated IP, and suppresses hard bounces and spam complaints automatically—so volume does not burn your domain score.",
      ctaPrimary: "Start for Free",
      ctaSecondary: "View Pricing",
      shieldLabel: "DNS authentication secured",
      checklistTitle: "DNS indicators",
      checklistAriaLabel: "Authentication status",
      dnsRecords: [
        { id: "spf", name: "SPF", status: "Valid" },
        { id: "dkim", name: "DKIM", status: "Valid" },
        { id: "dmarc", name: "DMARC", status: "Enforced" },
        { id: "bimi", name: "BIMI", status: "Ready" },
        { id: "ptr", name: "PTR", status: "Aligned" },
      ],
      practicesAriaLabel: "Deliverability practices",
      practices: [
        {
          id: "dns-auth",
          name: "SPF, DKIM, DMARC",
          summary:
            "Guided DNS setup to Google and Microsoft standards. No guesswork on record syntax or policy.",
        },
        {
          id: "ip-warmup",
          name: "IP Warmup",
          summary:
            "Scale plans include Dedicated IP with a managed Warmup protocol before you push full volume.",
        },
        {
          id: "bounce-fbl",
          name: "Bounce & Feedback Loop",
          summary:
            "Hard bounces and spam complaints go to the Global Suppression List. Future sends to those addresses are refused.",
        },
        {
          id: "list-hygiene",
          name: "4-Step List Hygiene",
          summary:
            "Syntax check, hard bounce removal, spam trap detection, and domain validation before the first send.",
        },
        {
          id: "ptr-bimi",
          name: "PTR & BIMI",
          summary:
            "Reverse DNS alignment and BIMI readiness so mailbox providers can trust the sending identity.",
        },
        {
          id: "queue-isolation",
          name: "Queue isolation",
          summary:
            "Promotional blasts never delay transactional mail. Separate Sub-accounts or API Keys keep OTP sub-second.",
        },
      ],
      ctaHeadline: "Protect domain score before you scale volume.",
      ctaDisclaimer: "No credit card required. Instant API access.",
    },
    products: {
      title: "Products",
      description:
        "Managed SMTP Relay, 4-step list hygiene, Deliverability Suite, and Edge API for high-volume sending.",
      ariaLabel: "VOKMO products",
      eyebrow: "Infrastructure stack",
      headline: "Email infrastructure built for volume and inbox placement",
      body: "VOKMO combines managed SMTP Relay, automated list hygiene, DNS authentication, and Edge API so campaigns stay in the Inbox—even at millions of sends per month.",
      ctaPrimary: "Start for Free",
      ctaSecondary: "View Pricing",
      catalogAriaLabel: "Product catalog",
      items: [
        {
          id: "smtp-relay",
          name: "Managed SMTP Relay",
          summary: "High-volume sending with Dedicated IP, IP Warmup, and isolated promotional vs transactional queues.",
          points: [
            "Managed PowerMTA and SMTP Relay with IP Rotation",
            "Dedicated IP on Scale plans, with Shared IP pools on lower tiers",
            "Queue isolation so marketing blasts never delay OTP or transactional mail",
          ],
        },
        {
          id: "list-hygiene",
          name: "4-Step List Hygiene",
          summary: "Clean lists before a single message leaves your relay. Protect domain score from the first campaign.",
          points: [
            "Syntax check, hard bounce removal, spam trap detection, domain validation",
            "Built for large imports—hundreds of thousands of contacts per upload",
            "Hard bounces and spam complaints feed a Global Suppression List automatically",
          ],
        },
        {
          id: "deliverability",
          name: "Deliverability Suite",
          summary: "SPF, DKIM, and DMARC setup guided to Google and Microsoft standards—without DNS guesswork.",
          points: [
            "Authentication checklist: SPF Valid, DKIM Valid, DMARC Enforced",
            "Feedback Loop processing and automated bounce handling",
            "Reputation monitoring on Shared IP and Dedicated IP paths",
          ],
        },
        {
          id: "analytics",
          name: "Real-time Analytics",
          summary: "Granular opens, clicks, device mix, and click heatmap so the next send is based on data—not guesswork.",
          points: [
            "Open rate, click rate, and unique opens in one dashboard",
            "Device breakdown and click heatmap on email layouts",
            "Signals you can use to optimize cadence and creative",
          ],
        },
        {
          id: "developer-api",
          name: "Developer Edge API",
          summary: "Sub-second transactional sends via REST API, API Keys, and webhooks—ready for modern edge stacks.",
          points: [
            "Separate Sub-accounts or API Keys for marketing vs transactional traffic",
            "Webhooks for delivery, bounce, and compliance events",
            "Documentation aimed at production integration, not demos",
          ],
        },
        {
          id: "automation",
          name: "Automation & Segmentation",
          summary: "Behavior-based journeys: trigger on opens and clicks, wait, then send—without blocking the sending engine.",
          points: [
            "Workflow nodes for trigger, wait, and send",
            "Segmentation from real-time interaction history",
            "Runs on the same infrastructure that handles bulk newsletter volume",
          ],
        },
      ],
      ctaHeadline: "Ready to run volume on infrastructure built for the Inbox?",
      ctaDisclaimer: "No credit card required. Instant API access.",
    },
    apiDocs: {
      title: "API Docs",
      description: "Developer API reference for VOKMO edge endpoints, authentication, and webhooks.",
    },
    login: {
      title: "Login",
      description: "Sign in to the VOKMO dashboard for marketers and developers.",
    },
    signup: {
      title: "Start for Free",
      description: "Create your VOKMO account and onboard SMTP infrastructure or marketer workflows.",
    },
    integrations: {
      title: "Integrations",
      description: "Connect VOKMO to your cloud, ESP, CRM, and mailbox stack via SMTP Relay, API, and webhooks.",
      ariaLabel: "VOKMO integrations",
      eyebrow: "Integrations",
      headline: "Plug volume into the stack you already run",
      body: "VOKMO connects through SMTP Relay, REST API, and webhooks. Use it beside AWS, Cloudflare, mailbox providers, ESPs, and CRMs—without ripping out your current tools.",
      ctaPrimary: "Start for Free",
      ctaSecondary: "API Docs",
      methodsAriaLabel: "Connection methods",
      methods: [
        {
          id: "smtp",
          name: "SMTP Relay",
          summary: "Point your ESP or app at VOKMO SMTP. Dedicated IP on Scale; Shared IP on Launch and Growth.",
        },
        {
          id: "api",
          name: "REST API",
          summary: "Send transactional mail with API Keys. Separate Sub-accounts for marketing vs OTP traffic.",
        },
        {
          id: "webhooks",
          name: "Webhooks",
          summary: "Receive delivery, bounce, and compliance events in real time for your CRM or data stack.",
        },
      ],
      catalogAriaLabel: "Compatible platforms",
      groups: [
        {
          id: "cloud",
          title: "Cloud & edge",
          partnerIds: ["aws", "cloudflare"],
        },
        {
          id: "mailbox",
          title: "Mailbox providers",
          partnerIds: ["google", "gmail", "microsoft", "meta"],
        },
        {
          id: "esp",
          title: "ESP & SMTP",
          partnerIds: ["sendgrid", "mailgun", "sparkpost", "brevo", "mailchimp"],
        },
        {
          id: "crm",
          title: "CRM & support",
          partnerIds: ["salesforce", "hubspot", "zendesk"],
        },
      ],
      ctaHeadline: "Connect SMTP or API in one session.",
      ctaDisclaimer: "No credit card required. Instant API access.",
    },
    webhooks: {
      title: "Webhooks",
      description: "Real-time event webhooks for delivery, bounces, and compliance signals.",
    },
    status: {
      title: "System Status",
      description: "Live status for VOKMO edge API and SMTP infrastructure.",
    },
    legal: {
      title: "Legal & Anti-Spam",
      description: "Terms of use, privacy, and anti-spam policy for VOKMO SMTP, API, and related services.",
      ariaLabel: "Legal and anti-spam policy",
      eyebrow: "Legal",
      headline: "Terms, privacy, and anti-spam",
      body: "These policies apply to vokmo.com and to SMTP, API, and related services operated under the VOKMO name. They are written for operators, not for theatre.",
      updatedLabel: "Last updated",
      updatedDate: "16 August 2026",
      contactLead: "Questions about these policies:",
      sectionsAriaLabel: "Legal sections",
      sections: [
        {
          id: "terms",
          title: "Terms of use",
          paragraphs: [
            "VOKMO provides email infrastructure: SMTP Relay, REST API, list hygiene tooling, and deliverability guidance. Access requires an account. You are responsible for credentials, Sub-accounts, and traffic sent through your keys or SMTP logins.",
            "Plans are volume-based (Launch 100K, Growth 500K, Scale 1M+ emails per month). Overage is billed Pay-As-You-Go per 1,000 emails sent. We may suspend sending that threatens IP reputation, mailbox-provider standing, or other customers on Shared IP.",
            "We do not guarantee inbox placement. Deliverability depends on your content, list source, DNS, and recipient engagement. Service descriptions on this site are operational, not a warranty of a specific inbox rate.",
          ],
        },
        {
          id: "anti-spam",
          title: "Anti-spam & acceptable use",
          paragraphs: [
            "Sending through VOKMO must be permission-based. Recipients must have opted in to your mail, or have a legitimate transactional relationship with you (receipts, password reset, OTP).",
            "Prohibited: harvested or scraped addresses; purchased or rented lists of unknown origin; spoofing From domains you do not control; phishing; malware; snowshoeing across IPs to evade filters; forging bounce or unsubscribe handling.",
            "Every marketing campaign must include a working unsubscribe path. You must process unsubscribes and hard bounces promptly. We may require proof of consent and may terminate accounts that ignore complaints, trap hits, or mailbox-provider blocks.",
            "Shared IP traffic is pooled. One abusive sender can damage neighbours. Dedicated IP on Scale isolates reputation but does not license spam. Abuse reports are investigated; include account, sending domain, and Message-IDs.",
          ],
        },
        {
          id: "privacy",
          title: "Privacy",
          paragraphs: [
            "Account data (name, email, billing identity) is used to operate the service, authenticate API access, and communicate about incidents or policy. We do not sell subscriber lists.",
            "Message metadata (timestamps, SMTP response codes, bounce categories, webhook payloads) is processed to deliver mail, protect IP reputation, and show analytics. Message content may transit our relays; treat it as operational traffic, not a private archive.",
            "If you upload lists for hygiene, those addresses are processed to return quality signals. Do not upload data you are not allowed to process. Retention of hygiene files and logs is limited to what operations and abuse review require.",
          ],
        },
        {
          id: "contact",
          title: "Legal contact",
          paragraphs: [
            "For terms, privacy, or abuse reports, use the address below. Identify the account, sending domain, and relevant Message-IDs so we can act on the correct stream.",
          ],
        },
      ],
    },
  },
} as const;

const id = {
  site: {
    description:
      "Infrastruktur email enterprise: PowerMTA terkelola, SMTP relay dedicated, hygiene list 4-langkah, dan audit deliverability SPF/DKIM/DMARC.",
    defaultTitle: "Infrastruktur Email Enterprise",
  },
  a11y: {
    mainNav: "Navigasi utama",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    localeToggle: "Pilih bahasa",
    logoHome: "Beranda VOKMO",
  },
  nav: {
    products: "Produk",
    apiDocs: "Dokumentasi API",
    deliverability: "Deliverability",
    pricing: "Pricing",
    login: "Masuk",
    startForFree: "Mulai Gratis",
  },
  footer: {
    groups: {
      product: {
        title: "Produk",
        features: "Fitur",
        pricing: "Pricing",
        integrations: "Integrasi",
      },
      developers: {
        title: "Developer",
        apiDocs: "Dokumentasi API",
        webhooks: "Webhooks",
        systemStatus: "Status Sistem",
      },
      company: {
        title: "Perusahaan",
        about: "Tentang",
        contact: "Kontak",
        legal: "Legal / Anti-Spam",
      },
    },
    social: {
      twitter: "VOKMO di X (Twitter)",
      linkedin: "VOKMO di LinkedIn",
      github: "VOKMO di GitHub",
    },
    copyright: "Hak cipta dilindungi.",
  },
  common: {
    comingSoon: "Halaman ini sedang disiapkan. Konten lengkap akan ditambahkan pada iterasi berikutnya.",
    brandEyebrow: "VOKMO",
  },
  home: {
    meta: {
      title: "Infrastruktur Email Enterprise",
      description:
        "VOKMO — PowerMTA terkelola, SMTP relay dedicated, hygiene list 4-langkah, dan audit deliverability untuk pengiriman skala besar.",
    },
    emptyState: {
      message: "Section homepage akan dibangun bertahap.",
      hint: "Aktifkan section di src/data/homepage-content.ts dan tambahkan copy di home.sections pada dictionaries.",
    },
    sections: {
      hero: {
        ariaLabel: "Hero",
        headlineBefore: "Ubah Setiap Email Menjadi ",
        headlineHighlight: "Pendapatan",
        headlineAfter: ".",
        subheadline:
          "Mesin pengirim email bervolume tinggi yang direkayasa untuk skala besar. Maksimalkan open rate, bersihkan daftar kontak, dan capai Inbox pelanggan Anda secara instan.",
        imageAlt: "Dashboard infrastruktur email volume tinggi VOKMO dan metrik pengiriman",
        imagePlaceholderHint: "Letakkan gambar hero di public/images/home/hero-right-1.png",
      },
      "trust-bar": {
        ariaLabel: "Dipercaya tim global",
        tagline: "Infrastruktur pilihan bagi developer dan tim growth global.",
      },
      "problem-statement": {
        ariaLabel: "Masalah dan solusi",
        problemHeadline:
          "Kecewa karena kampanye terhenti akibat reputasi IP yang buruk dan spam trap?",
        solutionHeadline: "Vokmo mengamankan reputasi pengiriman Anda.",
        solutionBody:
          "Dengan perutean pintar dan pemantauan DNS otomatis, email Anda mendapat prioritas masuk ke Inbox utama.",
      },
      "scale-and-hygiene": {
        ariaLabel: "Skala besar dan hygiene list",
        eyebrow: "Hygiene List 4 Langkah",
        headline: "Skala Besar & Hygiene List Otomatis",
        subheadline:
          "Unggah list hingga ratusan ribu kontak. VOKMO menjalankan pipeline hygiene empat tahap sebelum satu pun email dikirim lewat SMTP relay Anda.",
        lottieAriaLabel: "Animasi simulasi unggah CSV berisi empat ratus ribu kontak",
        contactCountLabel: "Simulasi unggah · 400.000 kontak",
        stepsAriaLabel: "Tahapan hygiene list otomatis",
        steps: [
          { id: "syntax", label: "Syntax Check" },
          { id: "bounce", label: "Hard Bounce Removal" },
          { id: "spam-trap", label: "Spam Trap Detection" },
          { id: "domain", label: "Domain Validation" },
        ],
      },
      "solution-overview": {
        ariaLabel: "Otomatisasi lanjutan dan segmentasi",
        eyebrow: "Advanced Automation & Segmentation",
        headline: "Otomatisasi Berbasis Perilaku",
        body: "Jangan sekadar mengirim blast. Buat perjalanan pelanggan yang personal berdasarkan aksi, klik, dan histori interaksi mereka secara real-time.",
        canvasAriaLabel:
          "Alur otomatisasi: email dibuka, tunggu dua hari, kirim penawaran spesial",
        nodes: [
          { id: "trigger", tag: "Trigger", label: "Email Dibuka" },
          { id: "wait", tag: "Tunggu", label: "2 Hari" },
          { id: "action", tag: "Kirim", label: "Penawaran Spesial" },
        ],
      },
      "infrastructure-specs": {
        ariaLabel: "Infrastruktur edge global",
        eyebrow: "Global Edge Infrastructure",
        headline: "Infrastruktur Skala Global, Latensi Lokal",
        body: "Didukung oleh perutean cloud tingkat tinggi, Vokmo memisahkan jalur antrean promosi dan transaksional Anda tetap instan meskipun Anda sedang mengirim jutaan newsletter.",
        globeAriaLabel:
          "Peta dunia datar vektor dengan node server edge di Singapura, Jakarta, US East, dan Eropa serta garis koneksi berdenyut",
        nodes: [
          { id: "singapore", label: "Singapura", code: "SIN" },
          { id: "jakarta", label: "Jakarta", code: "CGK" },
          { id: "us-east", label: "US East", code: "IAD" },
          { id: "europe", label: "Eropa", code: "FRA" },
        ],
      },
      "developer-edge-api": { ariaLabel: "Developer edge API" },
      "platform-personas": { ariaLabel: "Persona platform" },
      "services-matrix": { ariaLabel: "Matriks layanan" },
      "pricing-teaser": { ariaLabel: "Cuplikan pricing" },
      "deliverability-proof": {
        ariaLabel: "Deliverability suite",
        eyebrow: "Deliverability Suite",
        headline: "Proteksi Reputasi Otomatis",
        body: "Kami menghilangkan kerumitan konfigurasi otentikasi. Sistem kami memandu penyiapan DNS Anda untuk memastikan kepatuhan penuh terhadap standar ketat Google dan Microsoft.",
        shieldLabel: "Otentikasi DNS terlindungi",
        checklistTitle: "Indikator DNS",
        dnsRecords: [
          { id: "spf", name: "SPF", status: "Valid" },
          { id: "dkim", name: "DKIM", status: "Valid" },
          { id: "dmarc", name: "DMARC", status: "Enforced" },
        ],
      },
      "analytics-reporting": {
        ariaLabel: "Analitik dan pelaporan real-time",
        eyebrow: "Real-time Analytics & Reporting",
        headline: "Analitik di Tingkat Granular",
        body: "Pahami secara pasti siapa yang membuka email Anda, tautan mana yang memicu konversi tertinggi, dan perangkat apa yang mereka gunakan. Data yang Anda butuhkan untuk mengoptimalkan langkah selanjutnya.",
        dashboardAriaLabel:
          "Pratinjau dashboard analitik: grafik open harian, breakdown perangkat, dan heatmap klik email",
        barChartTitle: "Open per hari",
        pieChartTitle: "Breakdown perangkat",
        heatmapTitle: "Heatmap klik",
        heatmapHint: "Arahkan kursor ke zona pada pratinjau email untuk melihat konsentrasi klik.",
        clicksLabel: "klik",
        metrics: [
          { id: "open-rate", label: "Open rate", value: "42,8%" },
          { id: "click-rate", label: "Click rate", value: "12,4%" },
          { id: "unique-opens", label: "Unique opens", value: "18.402" },
        ],
        barData: [
          { id: "mon", label: "Sen", value: 1240 },
          { id: "tue", label: "Sel", value: 1580 },
          { id: "wed", label: "Rab", value: 1420 },
          { id: "thu", label: "Kam", value: 2100 },
          { id: "fri", label: "Jum", value: 1890 },
          { id: "sat", label: "Sab", value: 980 },
          { id: "sun", label: "Min", value: 1120 },
        ],
        pieData: [
          { id: "mobile", label: "Mobile", value: 58 },
          { id: "desktop", label: "Desktop", value: 32 },
          { id: "tablet", label: "Tablet", value: 10 },
        ],
        heatmapZones: [
          { id: "logo", label: "Logo header", clicks: 420, intensity: 0.25 },
          { id: "hero", label: "Banner hero", clicks: 1840, intensity: 0.65 },
          { id: "body", label: "Tautan di body", clicks: 960, intensity: 0.45 },
          { id: "cta", label: "CTA utama", clicks: 3920, intensity: 1 },
          { id: "footer", label: "Footer", clicks: 310, intensity: 0.2 },
        ],
      },
      workflow: { ariaLabel: "Alur kerja" },
      faq: {
        ariaLabel: "Pertanyaan umum",
        eyebrow: "FAQ",
        headline: "Pertanyaan yang Sering Diajukan",
        body: "Jawaban langsung tentang penagihan, Dedicated IP, penanganan bounce, dan pemisahan lalu lintas transaksional vs marketing.",
        items: [
          {
            id: "volume-billing",
            question: "Bagaimana struktur penagihan berbasis volume bekerja?",
            answer:
              "Vokmo menggunakan model hibrida. Anda memilih paket bulanan sesuai target volume rata-rata. Jika pengiriman melampaui kuota, sistem tidak akan pernah menghentikan kampanye Anda. Kelebihan volume otomatis ditagihkan lewat skema Pay-As-You-Go per 1.000 email terkirim.",
          },
          {
            id: "dedicated-ip",
            question: "Apakah saya mendapatkan Dedicated IP?",
            answer:
              "Ya, untuk pengirim bervolume tinggi. Paket Scale (1 Juta+ email/bulan) secara otomatis mendapatkan Dedicated IP lengkap dengan protokol IP Warmup terkelola. Untuk paket di bawahnya, pengiriman menggunakan jalur Shared IP kami yang reputasinya dipantau secara ketat.",
          },
          {
            id: "bounces-spam",
            question: "Bagaimana cara Vokmo menangani hard bounce dan keluhan spam?",
            answer:
              "Proses ini 100% otomatis. Terhubung dengan Feedback Loop global, setiap email hard bounce atau keluhan spam langsung ditarik ke Global Suppression List. Sistem akan menolak pengiriman ke alamat tersebut di masa depan untuk mengamankan skor domain Anda.",
          },
          {
            id: "transactional-marketing",
            question: "Bisakah saya memisahkan pengiriman transaksional dan marketing?",
            answer:
              "Sangat bisa. Anda dapat memisahkan lalu lintas pengiriman menggunakan Sub-account atau API Key yang berbeda. Kami mengisolasi antrean server, sehingga jutaan email blast marketing Anda tidak akan pernah menghambat pengiriman email kritis (seperti OTP) yang butuh latensi sub-detik.",
          },
        ],
      },
      "final-cta": {
        ariaLabel: "Ajakan aksi akhir",
        headline:
          "Siap menskalakan pengiriman Anda ke level berikutnya? Mulai bangun dengan Vokmo hari ini.",
        cta: "Buat Akun Gratis",
        disclaimer: "Tidak perlu kartu kredit. Akses API instan.",
      },
    },
  },
  pages: {
    about: {
      title: "Tentang VOKMO",
      description:
        "VOKMO membangun infrastruktur email volume tinggi: SMTP Relay terkelola, list hygiene 4-langkah, dan operasi deliverability.",
      ariaLabel: "Tentang VOKMO",
      eyebrow: "Company",
      headline: "Infrastruktur untuk pengiriman yang harus sampai",
      body: "VOKMO adalah mitra infrastruktur digital untuk marketer dan developer yang mengirim dalam skala besar. Kami menjalankan SMTP Relay, list hygiene, otentikasi DNS, dan operasi deliverability—agar kampanye dan email transaksional memakai satu stack tanpa berbagi satu antrean.",
      pillarsAriaLabel: "Yang kami operasikan",
      pillars: [
        {
          id: "smtp",
          name: "SMTP Relay",
          summary: "Shared IP di Launch dan Growth. Dedicated IP di Scale. Paket volume dengan overage Pay-As-You-Go agar kampanye tidak pernah berhenti.",
        },
        {
          id: "hygiene",
          name: "4-Step List Hygiene",
          summary: "Pemeriksaan syntax, domain, mailbox, dan risiko sebelum reputasi IP terbakar oleh alamat mati atau toksik.",
        },
        {
          id: "deliverability",
          name: "Deliverability",
          summary: "Panduan SPF, DKIM, DMARC, PTR, BIMI, warmup, pemrosesan bounce, dan isolasi antrean marketing vs OTP.",
        },
        {
          id: "api",
          name: "Developer API",
          summary: "REST API, API Key, Sub-account, dan webhook untuk event delivery dan bounce—siap untuk aplikasi di edge.",
        },
      ],
      principlesAriaLabel: "Cara kami bekerja",
      principlesTitle: "Cara kami bekerja",
      principles: [
        {
          id: "permission",
          name: "Permission-based sending",
          summary: "Kami merancang untuk list yang opted-in. Alamat beli atau hasil scrape di luar cakupan dan melanggar kebijakan.",
        },
        {
          id: "ops",
          name: "Operasi, bukan slogan",
          summary: "Inbox placement datang dari reputasi IP, DNS, penanganan bounce, dan kualitas list—bukan dari klaim kosong.",
        },
        {
          id: "region",
          name: "Dibangun untuk Indonesia, dikirim secara global",
          summary: "Operasi dan dukungan berpusat di Indonesia. Target mailbox mencakup Gmail, Microsoft, Yahoo, dan ISP regional.",
        },
      ],
      ctaHeadline: "Bicara dengan tim yang menjalankan pipanya.",
      ctaPrimary: "Mulai Gratis",
      ctaSecondary: "Kontak",
      ctaDisclaimer: "Tidak perlu kartu kredit. Akses API instan.",
    },
    pricing: {
      title: "Pricing",
      description:
        "Paket volume bulanan plus overage Pay-As-You-Go. Kampanye tidak pernah dihentikan saat kuota terlampaui.",
      ariaLabel: "Pricing VOKMO",
      eyebrow: "Pricing",
      headline: "Paket volume yang tidak pernah menghentikan kampanye",
      body: "Pilih paket bulanan sesuai target volume rata-rata. Jika pengiriman melebihi kuota, kelebihan ditagih Pay-As-You-Go per 1.000 email terkirim—sistem tidak pernah menghentikan kampanye.",
      plansAriaLabel: "Paket bulanan",
      quotaSuffix: "email / bulan",
      featuredBadge: "Paling dipilih untuk volume tinggi",
      ctaPrimary: "Mulai Gratis",
      ctaSecondary: "Hubungi sales",
      plans: [
        {
          id: "launch",
          name: "Launch",
          quota: "100.000",
          ipPath: "Shared IP",
          summary: "Mulai kirim di Shared IP yang dipantau, dengan list hygiene dan otentikasi DNS termasuk.",
          featured: false,
          cta: "Mulai Gratis",
          href: "/signup",
          features: [
            "SMTP Relay di Shared IP",
            "4-Step List Hygiene",
            "Panduan penyiapan SPF, DKIM, DMARC",
            "Isolasi antrean transaksional vs marketing",
            "Overage Pay-As-You-Go per 1.000 email",
          ],
        },
        {
          id: "growth",
          name: "Growth",
          quota: "500.000",
          ipPath: "Shared IP",
          summary: "Kuota bulanan lebih tinggi di jalur Shared IP yang dipantau ketat—untuk kampanye yang sedang naik skala.",
          featured: false,
          cta: "Mulai Gratis",
          href: "/signup",
          features: [
            "Volume bulanan lebih tinggi di Shared IP",
            "4-Step List Hygiene untuk import besar",
            "Dashboard Real-time Analytics",
            "API Key dan webhook",
            "Overage Pay-As-You-Go per 1.000 email",
          ],
        },
        {
          id: "scale",
          name: "Scale",
          quota: "1.000.000+",
          ipPath: "Dedicated IP",
          summary: "Dedicated IP dengan IP Warmup terkelola. Dirancang untuk 1 juta+ email per bulan.",
          featured: true,
          cta: "Mulai Gratis",
          href: "/signup",
          features: [
            "Dedicated IP dengan IP Warmup terkelola",
            "Antrean promosi dan transaksional terisolasi",
            "Global Suppression List dan Feedback Loop",
            "Edge API untuk pengiriman transaksional sub-detik",
            "Overage Pay-As-You-Go per 1.000 email",
          ],
        },
      ],
      paygEyebrow: "Pay-As-You-Go",
      paygHeadline: "Overage tidak pernah menghentikan pengiriman",
      paygBody:
        "Melampaui kuota bulanan tidak menjeda kampanye. Volume tambahan ditagih otomatis Pay-As-You-Go per 1.000 email terkirim—di atas paket bulanan Anda.",
      notesTitle: "Cara penagihan bekerja",
      notes: [
        "Paket bulanan mengikuti target volume rata-rata Anda.",
        "Scale (1 juta+ email/bulan) termasuk Dedicated IP dan IP Warmup.",
        "Launch dan Growth mengirim di Shared IP yang dipantau.",
        "Pisahkan Sub-account atau API Key untuk traffic transaksional vs marketing.",
      ],
      ctaHeadline: "Mulai dengan paket volume. Naikkan skala tanpa menghentikan kampanye.",
      ctaDisclaimer: "Tidak perlu kartu kredit. Akses API instan.",
    },
    deliverability: {
      title: "Deliverability",
      description:
        "SPF, DKIM, DMARC, BIMI, PTR, IP Warmup, dan penanganan bounce otomatis untuk Inbox placement di volume tinggi.",
      ariaLabel: "Deliverability VOKMO",
      eyebrow: "Deliverability Suite",
      headline: "Inbox placement adalah masalah infrastruktur",
      body: "VOKMO memandu otentikasi DNS, melakukan Warmup Dedicated IP, dan menekan hard bounce serta keluhan spam secara otomatis—agar volume tidak membakar skor domain Anda.",
      ctaPrimary: "Mulai Gratis",
      ctaSecondary: "Lihat Pricing",
      shieldLabel: "Otentikasi DNS terlindungi",
      checklistTitle: "Indikator DNS",
      checklistAriaLabel: "Status otentikasi",
      dnsRecords: [
        { id: "spf", name: "SPF", status: "Valid" },
        { id: "dkim", name: "DKIM", status: "Valid" },
        { id: "dmarc", name: "DMARC", status: "Enforced" },
        { id: "bimi", name: "BIMI", status: "Ready" },
        { id: "ptr", name: "PTR", status: "Aligned" },
      ],
      practicesAriaLabel: "Praktik Deliverability",
      practices: [
        {
          id: "dns-auth",
          name: "SPF, DKIM, DMARC",
          summary:
            "Penyiapan DNS terpandu sesuai standar Google dan Microsoft. Tanpa tebak-tebakan sintaks record atau kebijakan.",
        },
        {
          id: "ip-warmup",
          name: "IP Warmup",
          summary:
            "Paket Scale termasuk Dedicated IP dengan protokol Warmup terkelola sebelum volume penuh.",
        },
        {
          id: "bounce-fbl",
          name: "Bounce & Feedback Loop",
          summary:
            "Hard bounce dan keluhan spam masuk Global Suppression List. Pengiriman ke alamat itu ditolak ke depannya.",
        },
        {
          id: "list-hygiene",
          name: "4-Step List Hygiene",
          summary:
            "Syntax check, hard bounce removal, spam trap detection, dan domain validation sebelum pengiriman pertama.",
        },
        {
          id: "ptr-bimi",
          name: "PTR & BIMI",
          summary:
            "Penyelarasan reverse DNS dan kesiapan BIMI agar mailbox provider mempercayai identitas pengirim.",
        },
        {
          id: "queue-isolation",
          name: "Isolasi antrean",
          summary:
            "Blast marketing tidak menunda email transaksional. Sub-account atau API Key terpisah menjaga OTP sub-detik.",
        },
      ],
      ctaHeadline: "Lindungi skor domain sebelum menaikkan volume.",
      ctaDisclaimer: "Tidak perlu kartu kredit. Akses API instan.",
    },
    products: {
      title: "Produk",
      description:
        "SMTP Relay terkelola, hygiene list 4-langkah, Deliverability Suite, dan Edge API untuk pengiriman bervolume tinggi.",
      ariaLabel: "Produk VOKMO",
      eyebrow: "Infrastructure stack",
      headline: "Infrastruktur email untuk volume tinggi dan inbox placement",
      body: "VOKMO menggabungkan SMTP Relay terkelola, hygiene list otomatis, otentikasi DNS, dan Edge API agar kampanye tetap masuk Inbox—meski volume mencapai jutaan email per bulan.",
      ctaPrimary: "Mulai Gratis",
      ctaSecondary: "Lihat Pricing",
      catalogAriaLabel: "Katalog produk",
      items: [
        {
          id: "smtp-relay",
          name: "Managed SMTP Relay",
          summary:
            "Pengiriman bervolume tinggi dengan Dedicated IP, IP Warmup, dan antrean promosi vs transaksional yang terisolasi.",
          points: [
            "PowerMTA dan SMTP Relay terkelola dengan IP Rotation",
            "Dedicated IP pada paket Scale; Shared IP pada paket di bawahnya",
            "Isolasi antrean agar blast marketing tidak menunda OTP atau email transaksional",
          ],
        },
        {
          id: "list-hygiene",
          name: "4-Step List Hygiene",
          summary:
            "Bersihkan list sebelum satu pesan pun meninggalkan relay. Lindungi skor domain sejak kampanye pertama.",
          points: [
            "Syntax check, hard bounce removal, spam trap detection, domain validation",
            "Siap import besar—ratusan ribu kontak per unggahan",
            "Hard bounce dan keluhan spam masuk Global Suppression List secara otomatis",
          ],
        },
        {
          id: "deliverability",
          name: "Deliverability Suite",
          summary:
            "Penyiapan SPF, DKIM, dan DMARC sesuai standar Google dan Microsoft—tanpa tebak-tebakan DNS.",
          points: [
            "Checklist otentikasi: SPF Valid, DKIM Valid, DMARC Enforced",
            "Pemrosesan Feedback Loop dan penanganan bounce otomatis",
            "Pemantauan reputasi pada jalur Shared IP dan Dedicated IP",
          ],
        },
        {
          id: "analytics",
          name: "Real-time Analytics",
          summary:
            "Open, klik, perangkat, dan heatmap klik yang granular agar pengiriman berikutnya berbasis data.",
          points: [
            "Open rate, click rate, dan unique opens dalam satu dashboard",
            "Breakdown perangkat dan heatmap klik pada layout email",
            "Sinyal untuk mengoptimalkan cadence dan creative",
          ],
        },
        {
          id: "developer-api",
          name: "Developer Edge API",
          summary:
            "Pengiriman transaksional sub-detik lewat REST API, API Key, dan webhook—siap untuk stack edge modern.",
          points: [
            "Sub-account atau API Key terpisah untuk traffic marketing vs transaksional",
            "Webhook untuk event delivery, bounce, dan compliance",
            "Dokumentasi untuk integrasi produksi, bukan demo",
          ],
        },
        {
          id: "automation",
          name: "Automation & Segmentation",
          summary:
            "Journey berbasis perilaku: trigger dari open dan klik, tunggu, lalu kirim—tanpa menghambat mesin pengiriman.",
          points: [
            "Node workflow untuk trigger, wait, dan send",
            "Segmentasi dari histori interaksi real-time",
            "Berjalan di infrastruktur yang sama untuk volume newsletter besar",
          ],
        },
      ],
      ctaHeadline: "Siap menjalankan volume di infrastruktur yang dibangun untuk Inbox?",
      ctaDisclaimer: "Tidak perlu kartu kredit. Akses API instan.",
    },
    apiDocs: {
      title: "Dokumentasi API",
      description:
        "Referensi API developer untuk endpoint edge VOKMO, autentikasi, dan webhook.",
    },
    login: {
      title: "Masuk",
      description: "Masuk ke dashboard VOKMO untuk tim marketer dan developer.",
    },
    signup: {
      title: "Mulai Gratis",
      description:
        "Buat akun VOKMO dan mulai onboarding infrastruktur SMTP atau alur marketer.",
    },
    integrations: {
      title: "Integrasi",
      description:
        "Hubungkan VOKMO ke cloud, ESP, CRM, dan mailbox stack lewat SMTP Relay, API, dan webhook.",
      ariaLabel: "Integrasi VOKMO",
      eyebrow: "Integrations",
      headline: "Masukkan volume ke stack yang sudah Anda jalankan",
      body: "VOKMO terhubung lewat SMTP Relay, REST API, dan webhook. Dipakai berdampingan dengan AWS, Cloudflare, mailbox provider, ESP, dan CRM—tanpa membongkar tool yang ada.",
      ctaPrimary: "Mulai Gratis",
      ctaSecondary: "API Docs",
      methodsAriaLabel: "Metode koneksi",
      methods: [
        {
          id: "smtp",
          name: "SMTP Relay",
          summary: "Arahkan ESP atau aplikasi ke SMTP VOKMO. Dedicated IP di Scale; Shared IP di Launch dan Growth.",
        },
        {
          id: "api",
          name: "REST API",
          summary: "Kirim email transaksional dengan API Key. Pisahkan Sub-account untuk traffic marketing vs OTP.",
        },
        {
          id: "webhooks",
          name: "Webhooks",
          summary: "Terima event delivery, bounce, dan compliance secara real-time ke CRM atau stack data Anda.",
        },
      ],
      catalogAriaLabel: "Platform yang kompatibel",
      groups: [
        {
          id: "cloud",
          title: "Cloud & edge",
          partnerIds: ["aws", "cloudflare"],
        },
        {
          id: "mailbox",
          title: "Mailbox provider",
          partnerIds: ["google", "gmail", "microsoft", "meta"],
        },
        {
          id: "esp",
          title: "ESP & SMTP",
          partnerIds: ["sendgrid", "mailgun", "sparkpost", "brevo", "mailchimp"],
        },
        {
          id: "crm",
          title: "CRM & support",
          partnerIds: ["salesforce", "hubspot", "zendesk"],
        },
      ],
      ctaHeadline: "Hubungkan SMTP atau API dalam satu sesi.",
      ctaDisclaimer: "Tidak perlu kartu kredit. Akses API instan.",
    },
    webhooks: {
      title: "Webhooks",
      description: "Webhook event real-time untuk delivery, bounce, dan sinyal compliance.",
    },
    status: {
      title: "Status Sistem",
      description: "Status live untuk API edge VOKMO dan infrastruktur SMTP.",
    },
    legal: {
      title: "Legal & Anti-Spam",
      description: "Ketentuan penggunaan, privasi, dan kebijakan anti-spam untuk SMTP, API, dan layanan terkait VOKMO.",
      ariaLabel: "Kebijakan legal dan anti-spam",
      eyebrow: "Legal",
      headline: "Ketentuan, privasi, dan anti-spam",
      body: "Kebijakan ini berlaku untuk vokmo.com serta SMTP, API, dan layanan terkait yang dioperasikan atas nama VOKMO. Ditulis untuk operator, bukan untuk teater.",
      updatedLabel: "Terakhir diperbarui",
      updatedDate: "16 Agustus 2026",
      contactLead: "Pertanyaan tentang kebijakan ini:",
      sectionsAriaLabel: "Bagian legal",
      sections: [
        {
          id: "terms",
          title: "Ketentuan penggunaan",
          paragraphs: [
            "VOKMO menyediakan infrastruktur email: SMTP Relay, REST API, perangkat list hygiene, dan panduan deliverability. Akses memerlukan akun. Anda bertanggung jawab atas kredensial, Sub-account, dan traffic yang dikirim lewat API Key atau login SMTP Anda.",
            "Paket berbasis volume (Launch 100K, Growth 500K, Scale 1M+ email per bulan). Overage ditagih Pay-As-You-Go per 1.000 email terkirim. Kami dapat menangguhkan pengiriman yang mengancam reputasi IP, standing di mailbox provider, atau pelanggan lain di Shared IP.",
            "Kami tidak menjamin inbox placement. Deliverability bergantung pada konten, sumber list, DNS, dan engagement penerima. Deskripsi layanan di situs ini bersifat operasional, bukan garansi persentase inbox tertentu.",
          ],
        },
        {
          id: "anti-spam",
          title: "Anti-spam & acceptable use",
          paragraphs: [
            "Pengiriman lewat VOKMO harus permission-based. Penerima harus opted-in ke mail Anda, atau memiliki hubungan transaksional yang sah (struk, reset password, OTP).",
            "Dilarang: alamat hasil harvest atau scrape; list beli atau sewa yang asal-usulnya tidak jelas; spoofing domain From yang tidak Anda kendalikan; phishing; malware; snowshoeing antar IP untuk menghindari filter; memalsukan penanganan bounce atau unsubscribe.",
            "Setiap kampanye marketing harus menyertakan jalur unsubscribe yang berfungsi. Unsubscribe dan hard bounce harus diproses segera. Kami dapat meminta bukti consent dan menutup akun yang mengabaikan komplain, trap hit, atau blokir mailbox provider.",
            "Traffic Shared IP bersifat pooled. Satu pengirim abusif merusak tetangga. Dedicated IP di Scale mengisolasi reputasi tetapi tidak memberi izin spam. Laporan abuse akan diselidiki; sertakan akun, sending domain, dan Message-ID.",
          ],
        },
        {
          id: "privacy",
          title: "Privasi",
          paragraphs: [
            "Data akun (nama, email, identitas penagihan) dipakai untuk mengoperasikan layanan, mengautentikasi akses API, dan berkomunikasi soal insiden atau kebijakan. Kami tidak menjual subscriber list.",
            "Metadata pesan (timestamp, kode respons SMTP, kategori bounce, payload webhook) diproses untuk mengirim mail, melindungi reputasi IP, dan menampilkan analytics. Konten pesan dapat melewati relay kami; perlakukan sebagai traffic operasional, bukan arsip pribadi.",
            "Jika Anda mengunggah list untuk hygiene, alamat itu diproses untuk menghasilkan sinyal kualitas. Jangan unggah data yang tidak berhak Anda proses. Retensi file hygiene dan log dibatasi pada kebutuhan operasi dan tinjauan abuse.",
          ],
        },
        {
          id: "contact",
          title: "Kontak legal",
          paragraphs: [
            "Untuk ketentuan, privasi, atau laporan abuse, gunakan alamat di bawah. Identifikasi akun, sending domain, dan Message-ID yang relevan agar kami menindak stream yang benar.",
          ],
        },
      ],
    },
  },
} as const;

export const dictionaries = { en, id } as const;

export type Dictionary = (typeof dictionaries)[Locale];

export type HomeSectionId = keyof Dictionary["home"]["sections"];

export type HomeSectionCopy = Dictionary["home"]["sections"][HomeSectionId];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
