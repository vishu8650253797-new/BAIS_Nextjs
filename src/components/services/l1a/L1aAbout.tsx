import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const reasons = [
  "Serve U.S. customers in their time zone",
  "Sign contracts & invoice as a U.S. company",
  "Build a local sales & support team",
  "A base for growth, and U.S. residency for the founder's family",
];

export function L1aAbout() {
  return (
    <section className="bg-cream py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
            For exporters &amp; international businesses
          </p>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Already Selling to the U.S.? Put Your Own Team on the Ground.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body">
            If your company already exports to U.S. buyers, you have what
            many L-1A applicants lack: <strong>real U.S. business
            activity</strong>. U.S. customers, purchase orders, invoices and
            shipping records help show that your new U.S. office has a
            genuine reason to exist and a plan to grow.
          </p>

          <h3 className="mt-6 text-sm font-bold text-ink">
            Why exporters open a U.S. office
          </h3>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-2.5 text-sm text-body transition-colors duration-200 hover:text-ink"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-bold text-ink">Who we typically help</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Manufacturers, food and agricultural exporters, IT and software
            service companies, textile and apparel firms, auto-parts
            suppliers, and family-owned trading businesses from Canada,
            Mexico, India, Brazil, Latin America, the Middle East and Asia.
          </p>

          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Talk to Us About Your U.S. Expansion
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <FadeIn className="group relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-ink/10">
            <Image
              src="/images/hero-bayarea.jpg"
              alt="San Francisco Bay Area skyline, representing a new U.S. office for exporters"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg shadow-ink/10">
            <p className="text-sm font-bold text-maroon">No lottery</p>
            <p className="text-xs text-body/60">File any time of year</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
