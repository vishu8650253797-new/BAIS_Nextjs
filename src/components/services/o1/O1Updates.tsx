import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const updates = [
  {
    title: "1. Premium processing now costs $2,965",
    description:
      "The premium processing fee for O-1 and other Form I-129 petitions rose to $2,965 for requests postmarked on or after March 1, 2026.",
  },
  {
    title: "2. O-1 is outside the H-1B fee changes",
    description:
      "The $100,000 H-1B proclamation fee and the proposed $103,265 H-1B cap-subject fee apply only to H-1B petitions, not to O-1. That makes O-1 a strong alternative for qualified professionals.",
  },
  {
    title: "3. Evidence quality is under closer review",
    description:
      "Generic recommendation letters and loosely documented media or awards draw RFEs. Specific, verifiable and well-explained evidence remains the deciding factor.",
  },
];

export function O1Updates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          O-1 Visa Updates for 2026
        </h2>
        <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed September 30, 2026
        </span>

        <div className="mt-8 space-y-4">
          {updates.map((update, index) => (
            <FadeIn key={update.title} delay={index * 70}>
              <div className="rounded-2xl border border-border bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/5">
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
          Check What This Means for You
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
