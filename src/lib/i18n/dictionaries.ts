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
      "solution-overview": { ariaLabel: "Solution overview" },
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
      "infrastructure-specs": { ariaLabel: "Infrastructure specifications" },
      "developer-edge-api": { ariaLabel: "Developer edge API" },
      "platform-personas": { ariaLabel: "Platform personas" },
      "services-matrix": { ariaLabel: "Services matrix" },
      "pricing-teaser": { ariaLabel: "Pricing teaser" },
      "deliverability-proof": { ariaLabel: "Deliverability proof" },
      workflow: { ariaLabel: "Workflow" },
      faq: { ariaLabel: "Frequently asked questions" },
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
      description: "Profile and focus of VOKMO enterprise email infrastructure services.",
      body: "Page content will be added in upcoming iterations.",
    },
    pricing: {
      title: "Pricing",
      description: "Monthly tiers and PAYG API for VOKMO email infrastructure.",
      body: "Monthly tiers and PAYG API — pricing content will be added in upcoming iterations.",
    },
    deliverability: {
      title: "Deliverability",
      description: "SPF, DKIM, DMARC, BIMI, PTR audits and inbox placement playbooks from VOKMO.",
      body: "Deliverability audit service page — content will be added in upcoming iterations.",
    },
    products: {
      title: "Products",
      description: "VOKMO email infrastructure products: SMTP relay, list hygiene, and managed delivery.",
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
      description: "Connect VOKMO with your ESP, CRM, and data stack.",
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
      description: "Terms, privacy, and anti-spam policy for VOKMO services.",
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
      "solution-overview": { ariaLabel: "Ringkasan solusi" },
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
      "infrastructure-specs": { ariaLabel: "Spesifikasi infrastruktur" },
      "developer-edge-api": { ariaLabel: "Developer edge API" },
      "platform-personas": { ariaLabel: "Persona platform" },
      "services-matrix": { ariaLabel: "Matriks layanan" },
      "pricing-teaser": { ariaLabel: "Cuplikan pricing" },
      "deliverability-proof": { ariaLabel: "Bukti deliverability" },
      workflow: { ariaLabel: "Alur kerja" },
      faq: { ariaLabel: "Pertanyaan umum" },
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
      description: "Profil dan fokus layanan infrastruktur email enterprise VOKMO.",
      body: "Konten halaman ini akan ditambahkan bertahap.",
    },
    pricing: {
      title: "Pricing",
      description: "Paket bulanan tier dan PAYG API untuk infrastruktur email VOKMO.",
      body: "Tier bulanan dan PAYG API — konten pricing akan ditambahkan bertahap.",
    },
    deliverability: {
      title: "Deliverability",
      description: "Audit SPF, DKIM, DMARC, BIMI, PTR, dan playbook inbox placement VOKMO.",
      body: "Halaman layanan audit deliverability — konten akan ditambahkan bertahap.",
    },
    products: {
      title: "Produk",
      description:
        "Produk infrastruktur email VOKMO: SMTP relay, hygiene list 4-langkah, dan pengiriman terkelola.",
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
      description: "Hubungkan VOKMO dengan ESP, CRM, dan stack data Anda.",
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
      description: "Ketentuan, privasi, dan kebijakan anti-spam layanan VOKMO.",
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
