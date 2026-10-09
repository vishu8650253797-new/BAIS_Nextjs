import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const evidenceExamples = [
  "Joint lease or mortgage, bank accounts, insurance, taxes",
  "Photos together over time, travel records",
  "Messages and calls, letters from people who know you as a couple",
];

export function FamilyInterviews() {
  return (
    <section id="interviews" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Interviews
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The Interview: How to Prepare for a Marriage or Family Case
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <ul className="space-y-3 text-sm leading-relaxed text-body">
              <li>
                USCIS and consulates{" "}
                <strong className="text-ink">look closely</strong> at family
                cases and use interviews more often.
              </li>
              <li>
                Marriage cases often involve questions about your daily life
                together; officers may question spouses separately.
              </li>
              <li>
                <strong className="text-ink">
                  Honest, consistent answers
                </strong>{" "}
                backed by real documents matter most.
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">
              Evidence of a real marriage (examples)
            </h3>
            <ul className="mt-4 space-y-2.5">
              {evidenceExamples.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-body/60">
          Immigration benefits require a genuine relationship. Marriage
          fraud is a federal crime, and BAIS can&apos;t help with anything
          misleading.
        </p>
      </Container>
    </section>
  );
}
