import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. Premium processing now costs $2,965",
    description:
      "USCIS raised the premium processing fee from $2,805 to $2,965 for requests postmarked on or after March 1, 2026.",
  },
  {
    title: "2. The 9-11 Biometric Fee now applies to extensions for large L-1/H-1B employers",
    description:
      "A DHS final rule effective September 9, 2026 requires “covered employers” to pay the fee on L-1 and H-1B petitions, including extensions. Covered employers have 50+ U.S. employees, with more than half in H-1B or L-1 status. Most exporters opening a new office are not covered employers.",
  },
  {
    title: "3. Budget for new consular fees",
    description:
      "New per-visa charges have been introduced for many nonimmigrant visas, including a $250 Visa Integrity Fee. Confirm current amounts with the U.S. embassy before your interview.",
  },
  {
    title: "4. New office cases remain under close review",
    description:
      "USCIS continues to closely check new office cases for real premises, adequate funding and a credible staffing plan, especially at the one-year extension.",
  },
];

export function L1aUpdates() {
  return (
    <section className="bg-cream py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">L-1 Visa Changes in 2026</h2>
        <span className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-body">
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
          Check How These Changes Affect Your Plan
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
