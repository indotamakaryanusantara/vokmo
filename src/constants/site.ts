export const siteConfig = {
  name: "VOKMO",
  tagline: "Digital transformation for ambitious enterprises.",
  description:
    "VOKMO delivers web, cloud, AI automation, and integration services that help organizations scale with confidence.",
  url: "https://vokmo.example.com",
  email: "hello@vokmo.example.com",
  phone: "+62 000 0000 0000",
  address: "Jakarta & Surabaya, Indonesia",
  social: {
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    title: "Web Development",
    description:
      "High-performance web platforms with modern stacks, accessibility, and SEO baked in.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Resilient architectures on leading clouds—secure, observable, and cost-aware.",
  },
  {
    title: "AI Automation",
    description:
      "Practical AI workflows that remove repetitive work and accelerate decisions.",
  },
  {
    title: "Digital Transformation",
    description:
      "Roadmaps, governance, and delivery that align technology with business outcomes.",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-led interfaces that feel premium, clear, and effortless to use.",
  },
  {
    title: "System Integration",
    description:
      "Connect CRM, ERP, and custom systems with reliable APIs and monitoring.",
  },
] as const;

export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "48", label: "Enterprise clients" },
  { value: "12", label: "Countries served" },
  { value: "99.9%", label: "Uptime targets met" },
] as const;

export const projects = [
  {
    title: "Atlas Finance Platform",
    category: "Web & Cloud",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard on a laptop screen",
  },
  {
    title: "Northwind Logistics Hub",
    category: "Integration",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Warehouse operations and logistics",
  },
  {
    title: "Helios Customer Portal",
    category: "UI/UX & Web",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Business team reviewing metrics",
  },
] as const;

export const testimonials = [
  {
    quote:
      "VOKMO shipped a complex integration on time with exceptional clarity. Our teams finally operate from one source of truth.",
    author: "Elena Park",
    role: "CTO, Meridian Retail Group",
  },
  {
    quote:
      "The attention to performance and design polish is rare. Lighthouse scores went up and bounce rate went down within weeks.",
    author: "Marcus Reid",
    role: "VP Marketing, NovaLabs",
  },
] as const;

export const workflowSteps = [
  {
    title: "Discover",
    description: "Goals, constraints, stakeholders, and success metrics aligned in week one.",
  },
  {
    title: "Design",
    description: "Architecture, UX flows, and delivery plan with measurable milestones.",
  },
  {
    title: "Build",
    description: "Iterative releases with QA, observability, and documentation from day one.",
  },
  {
    title: "Scale",
    description: "Hardening, optimization, and enablement so your teams can own the roadmap.",
  },
] as const;
