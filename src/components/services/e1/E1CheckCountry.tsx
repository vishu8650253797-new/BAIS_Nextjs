import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function E1CheckCountry() {
  return (
    <section id="check-your-country" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Check your country
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Is Your Country an E-1 Treaty Country?
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-emerald-700">Eligible (examples)</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Canada, Mexico, United Kingdom, Germany, France, Italy, Spain,
              Japan, South Korea, Taiwan, Australia, New Zealand,
              Netherlands, Philippines, Singapore, Thailand, Turkey,
              Argentina, Chile, Colombia, Pakistan and more.{" "}
              <strong className="text-ink">54 countries</strong> on the
              State Department table (August 2026).
            </p>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-accent">Not on the list</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              <strong className="text-white">
                India, mainland China, Brazil, Russia.
              </strong>{" "}
              Some countries are{" "}
              <strong className="text-white">E-2 only</strong> (for example
              Bangladesh, Egypt, Morocco, Jamaica, Ukraine). Not eligible?
              See <strong className="text-white">E-2</strong>,{" "}
              <strong className="text-white">L-1A → EB-1C</strong>,{" "}
              <strong className="text-white">EB-5</strong> or{" "}
              <strong className="text-white">O-1</strong>.
            </p>
          </FadeIn>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href="/services/e-2-treaty-investor" className="font-semibold text-maroon hover:text-maroon-dark">
            E-2 →
          </Link>
          <Link href="/services/eb-1c" className="font-semibold text-maroon hover:text-maroon-dark">
            EB-1C →
          </Link>
          <Link href="/services/o-1-visa" className="font-semibold text-maroon hover:text-maroon-dark">
            O-1 →
          </Link>
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Not Sure? Free Country and Eligibility Check
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
