import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const updates = [
  {
    title: "1. October 2026 Visa Bulletin",
    description:
      "EB-1 India advanced about 3½ months to February 1, 2023. China stayed at July 1, 2023. EB-1 remains current for all other countries. USCIS is accepting filings under the Dates for Filing chart (EB-1 India and China: July 1, 2024).",
  },
  {
    title: "2. EB-2 retrogressed; EB-1 did not",
    description:
      "EB-2 for most countries moved from Current to January 1, 2025 in October 2026. That makes EB-1A especially valuable for professionals who meet its higher standard.",
  },
  {
    title: "3. Premium processing: $2,965",
    description: "The I-140 premium fee rose on March 1, 2026. EB-1A stays on the 15-business-day track.",
  },
  {
    title: "4. The final merits review is the battleground",
    description:
      "Adjudication trends show closer scrutiny of whether the overall record shows sustained acclaim, not just three criteria. Specific, independent and verifiable evidence matters most.",
  },
];

export function Eb1aUpdates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1A Updates for 2026
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
