import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const updates = [
  {
    title: "1. EB-2 retrogressed for most countries",
    description:
      "In the October 2026 Visa Bulletin, EB-2 final action dates moved from Current to January 1, 2025 for most countries, Mexico and the Philippines. Dates for filing moved to March 15, 2026.",
  },
  {
    title: "2. EB-2 India is available again",
    description:
      "After being unavailable at the end of FY 2026, EB-2 India returned with a November 1, 2013 final action date.",
  },
  {
    title: "3. Approval rates recovering",
    description:
      "USCIS data shows NIW approvals rising from 42.6% (Q1) to 48.1% (Q2) and 55.3% (Q3) in FY 2026.",
  },
  {
    title: "4. Premium processing: $2,965",
    description: "The fee rose on March 1, 2026. NIW stays on the 45-business-day track.",
  },
];

export function NiwUpdates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-2 NIW Updates for 2026
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
      </Container>
    </section>
  );
}
