import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const steps = [
  { title: "Prevailing wage", description: "ETA-9141", when: "~3–4 months" },
  { title: "Recruitment", description: "+ 30-day quiet period", when: "~2–3 months" },
  { title: "PERM review", description: "ETA-9089 (audits add months)", when: "~11–12 months" },
  { title: "I-140", description: "Premium or regular", when: "15 days–months" },
  { title: "Green card", description: "I-485 or consular", when: "When current" },
];

export function Eb3Timeline() {
  return (
    <section id="timeline" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Timeline
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-3 Timeline in 2026
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="font-serif text-xl font-bold text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-body">{step.description}</p>
                <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-body/60">
                  {step.when}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold text-ink">
          Total before the green card stage: roughly 18–24 months without an
          audit.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-body/60">
          DOL and USCIS times change monthly. Check flag.dol.gov/processingtimes
          and egov.uscis.gov/processing-times.
        </p>
      </Container>
    </section>
  );
}
