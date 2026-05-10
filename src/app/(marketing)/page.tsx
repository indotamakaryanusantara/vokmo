import { HeroSection } from "@/components/pages/home/HeroSection";
import { HomeFaq } from "@/components/pages/home/HomeFaq";
import { InfrastructureSpecs } from "@/components/pages/home/InfrastructureSpecs";
import { LeadCTA } from "@/components/pages/home/LeadCTA";
import { ServicesGrid } from "@/components/pages/home/ServicesGrid";

type HomePageProps = {
  searchParams: Promise<{ terkirim?: string; kontak?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const sp = await searchParams;

  return (
    <>
      {sp.terkirim === "1" ? (
        <div className="border-b border-accent/40 bg-accent/10 py-3 text-center text-sm text-foreground">
          Terima kasih—permintaan konsultasi telah masuk antrian internal kami. Engineer akan menghubungi melalui email kerja
          Anda.
        </div>
      ) : null}
      {sp.kontak === "gagal" ? (
        <div className="border-b border-amber-400/40 bg-amber-50 py-3 text-center text-sm text-amber-950">
          Mohon lengkapi semua field formulir sebelum mengirim.
        </div>
      ) : null}
      <HeroSection />
      <ServicesGrid />
      <InfrastructureSpecs />
      <HomeFaq />
      <LeadCTA />
    </>
  );
}
