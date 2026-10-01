import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. October 2026 Visa Bulletin: EB-1 India advances",
    description:
      "EB-1 India moved forward about 3½ months to February 1, 2023. China stayed at July 1, 2023. EB-1 remains current for all other countries. USCIS is accepting employment-based adjustment filings under the Dates for Filing chart in October 2026 (EB-1 India and China: July 1, 2024).",
  },
  {
    title: "2. EB-2 retrogressed for the rest of the world",
    description:
      "In October 2026, EB-2 final action dates moved back for most countries. That makes EB-1C, which stays current, even more valuable for qualifying managers.",
  },
  {
    title: "3. Premium processing fee: $2,965",
    description:
      "The I-140 premium processing fee rose to $2,965 for requests postmarked on or after March 1, 2026. EB-1C premium cases are acted on within 45 business days.",
  },
];

export function Eb1cUpdates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1C Updates for 2026
        </h2>
        <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed September 30, 2026
        </span>

        <div className="mt-8 space-y-4">
          {updates.map((update, index) => (
            <FadeIn key={update.title} delay={index * 70}>
              <div className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{update.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{update.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Check How This Affects Your Timeline
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
