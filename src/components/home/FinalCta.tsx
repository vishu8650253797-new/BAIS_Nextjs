import { CalendarCheck, CheckCircle2, MapPin, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, site, yearsInBusiness } from "@/data/site";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.full,
)}`;

const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.full,
)}&output=embed`;

const trustPoints = [
  `${yearsInBusiness()}+ years, since ${FOUNDED_YEAR}`,
  "Registered & Bonded",
  "English & Hindi",
];

export function FinalCta() {
  return (
    <section className="bg-white py-16">
      <Container>
        <FadeIn className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-maroon via-maroon to-maroon-dark px-8 py-12 shadow-2xl shadow-maroon/20 sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <svg
            className="pointer-events-none absolute inset-0 size-full text-white/10"
            viewBox="0 0 800 300"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M-20 250 Q 200 100 420 160 T 820 60"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 7"
            />
          </svg>

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white/80">
                <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                Now accepting new clients
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to Start Your Case?
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
                Talk to our Fremont team today. Your first consultation is
                free.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-1.5 text-xs font-medium text-white/70"
                  >
                    <CheckCircle2 className="size-3.5 text-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-3 lg:items-end">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-maroon shadow-lg shadow-ink/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream sm:w-auto"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book a Free Consultation
              </a>
              <a
                href={site.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call {site.phone}
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-white"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-6 overflow-hidden rounded-3xl border border-border shadow-lg shadow-ink/5">
          <div className="flex flex-col items-start justify-between gap-3 bg-white px-6 py-4 sm:flex-row sm:items-center">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
              <MapPin className="size-4 shrink-0 text-maroon" aria-hidden="true" />
              {site.address.full}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-maroon transition-colors duration-200 hover:text-maroon-dark"
            >
              Open in Google Maps →
            </a>
          </div>
          <iframe
            src={mapsEmbedUrl}
            title="Bay Area Immigration Services office location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 grayscale-[15%]"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
