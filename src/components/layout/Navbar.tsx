import { site } from "@/config/site";
import { mainNav } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="/#kontak" variant="primary" className="hidden sm:inline-flex">
            Konsultasi
          </ButtonLink>
          <ButtonLink href="/#kontak" variant="primary" className="sm:hidden">
            Hubungi
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
