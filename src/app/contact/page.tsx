import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { MotionSection } from "@/components/common/MotionSection";
import { PageHero } from "@/components/common/PageHero";
import { siteConfig } from "@/constants/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  "Reach the VOKMO team to discuss your next platform initiative.",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building next"
        description="Share a few details about timelines, stakeholders, and success metrics. We typically respond within two business days with next steps."
      />

      <MotionSection className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-h5 text-slate-900">Company</h2>
              <ul className="mt-4 space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden />
                  <a className="hover:text-slate-900" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden />
                  <a className="hover:text-slate-900" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Map placeholder</p>
              <p className="mt-2">
                Embed your Google Maps iframe or Mapbox component here. Coordinates and API keys
                should load from environment variables.
              </p>
              <div
                className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-white text-xs font-medium text-slate-400"
                role="img"
                aria-label="Map placeholder"
              >
                Map area reserved
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </MotionSection>
    </>
  );
}
