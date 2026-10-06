import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const steps = [
  { title: "Free Evaluation", description: "Your record mapped to the 10 criteria and final merits.", when: "Week 1" },
  { title: "Evidence Strategy", description: "The 3–5 strongest criteria; gaps to close.", when: "Weeks 1–2" },
  {
    title: "Expert Letters",
    description: "Independent expert opinion letters (350+ professors & industry experts) plus collaborator letters.",
    when: "Weeks 2–6",
  },
  { title: "Petition Letter", description: "Criteria-by-criteria argument plus final merits.", when: "Weeks 4–8" },
  { title: "I-140 Filing", description: "Self-filed; premium processing in 15 business days.", when: "Weeks 8–9" },
  {
    title: "Green Card Stage",
    description: "I-485 or consular processing; EAD and travel permission for the family.",
    when: "When your date allows",
  },
];

export function Eb1aProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          How it works
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The EB-1A Process: Step by Step
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="font-serif text-2xl font-bold text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
                <span className="mt-3 inline-block rounded-full bg-cream px-3 py-1 text-xs font-semibold text-body/60">
                  {step.when}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-body/60">
          Timelines are estimates. Premium processing guarantees USCIS
          action, not approval.
        </p>
      </Container>
    </section>
  );
}
