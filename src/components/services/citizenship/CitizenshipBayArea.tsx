import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const serviceAreas = [
  "Fremont, Newark, Union City",
  "San Jose, Santa Clara, Sunnyvale, Milpitas, Cupertino",
  "Oakland, Hayward, Pleasanton, Dublin, San Ramon",
  "San Francisco and the Peninsula",
  "All of California (remote)",
];

export function CitizenshipBayArea() {
  return (
    <section id="bay-area" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Bay Area &amp; California
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Citizenship Help Across the Bay Area and California
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="flex items-start gap-2 text-sm leading-relaxed text-body">
              <MapPin className="mt-0.5 size-4 shrink-0 text-maroon" aria-hidden="true" />
              Our office: <strong className="text-ink">{site.address.full}</strong>.
              We help applicants across:
            </p>
            <ul className="mt-4 space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="text-sm leading-relaxed text-body">
              <strong className="text-ink">Local interviews:</strong> usually
              at the USCIS San Francisco or San Jose field office, by ZIP
              code.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-body">
              <strong className="text-ink">Biometrics:</strong> at a nearby
              Application Support Center.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-body">
              <strong className="text-ink">In person or online:</strong> meet
              us in Fremont or by video.
            </p>
          </FadeIn>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Visit Our Fremont Office
          </Link>
          <Link
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phone}
          </Link>
        </div>
      </Container>
    </section>
  );
}
