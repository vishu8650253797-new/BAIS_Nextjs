import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const updates = [
  {
    title: "USCIS can deny without an RFE",
    description:
      "Policy Alert PA-2026-05 (August 5, 2026): file complete evidence the first time. Also expect closer review of family cases and more interviews.",
  },
  {
    title: "After approval: interviews abroad are paused",
    description:
      "Immigrant visa interviews at embassies and consulates have been paused worldwide since August 25, 2026, with no restart date announced. People adjusting inside the U.S. aren't affected.",
  },
  {
    title: "Public charge and the I-864",
    description:
      "A new public charge framework applies to I-485 applications filed on or after September 18, 2026, and USCIS published a new I-864 edition (08/24/26).",
  },
];

export function I130Updates() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          What&apos;s changed
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          I-130 Updates for 2026
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
