import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const updates = [
  {
    title: "October 2026 Visa Bulletin and premium processing",
    description:
      "EB-1 is current for most countries; India's final action date advanced to Feb 1, 2023. USCIS is using Dates for Filing for employment-based cases. The I-140 premium fee is $2,965 (since March 1, 2026).",
  },
  {
    title: "USCIS can deny without an RFE",
    description: "Policy Alert PA-2026-05 (August 5, 2026): file a complete petition. See the RFE page.",
  },
  {
    title: "J-1 researchers",
    description:
      "The 2024 Skills List update means many J-1 holders are no longer subject to the 2-year rule. Check yours on the J-1 page.",
  },
];

export function Eb1bUpdates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1B Updates for 2026
        </h2>
        <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-body">
          Last reviewed October 8, 2026
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
