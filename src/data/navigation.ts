export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Layanan", href: "/services/smtp-server" },
  { label: "Deliverability", href: "/services/deliverability" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Layanan",
    items: [
      { label: "SMTP & Infrastruktur", href: "/services/smtp-server" },
      { label: "Audit Deliverability", href: "/services/deliverability" },
    ],
  },
  {
    title: "Perusahaan",
    items: [
      { label: "Tentang VOKMO", href: "/about" },
      { label: "Kontak", href: "/#kontak" },
    ],
  },
];
