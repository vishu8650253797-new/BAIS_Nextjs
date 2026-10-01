import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. The lottery is now wage-weighted",
    description:
      "Starting with the FY 2027 cap season, USCIS replaced the purely random lottery with a weighted selection based on the OEWS wage level of the offered salary. Level IV roles get the most entries. Registrations fell 38.5% to about 211,600, and only 17.7% of selections were at the lowest wage level. Petitions must now include evidence supporting the wage level chosen at registration.",
  },
  {
    title: "2. The $100,000 H-1B fee: blocked for now, extended on paper",
    description:
      "A September 2025 proclamation added a $100,000 payment for certain new H-1B petitions for workers outside the U.S. A federal court vacated the policy in June 2026, and the appeals court declined to pause that ruling in July 2026. A new proclamation on September 18, 2026 extended the policy through September 21, 2027, but the fee remains blocked by court order. It has never applied to extensions, amendments or in-U.S. changes of status, such as F-1 to H-1B.",
  },
  {
    title: "3. More scrutiny and a proposed new fee",
    description:
      "A September 2026 executive order directs closer review of H-1B filings. DHS has also proposed a separate $103,265 fee on cap-subject petitions (the comment period closed September 24, 2026). It is a proposal, not yet final.",
  },
];

export function H1bUpdates() {
  return (
    <section className="bg-cream py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          H-1B Changes in 2026: What Employers and Workers Need to Know
        </h2>
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
          Check How These Changes Affect Your Case
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
