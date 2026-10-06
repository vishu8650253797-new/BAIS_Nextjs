import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const steps = [
  { title: "Free Review", description: "EB-2 threshold and an early read on the Dhanasar prongs.", when: "Week 1" },
  { title: "Proposed Endeavor", description: "A specific, nationally important endeavor.", when: "Weeks 1–2" },
  { title: "Evidence & Letters", description: "Independent letters (350+ professor network).", when: "Weeks 2–6" },
  { title: "Petition Letter", description: "Prong-by-prong argument, plus a plan where useful.", when: "Weeks 4–8" },
  { title: "I-140 Filing", description: "Self-filed; premium processing in 45 business days.", when: "Weeks 8–9" },
  { title: "Green Card Stage", description: "I-485 or consular processing when your date allows.", when: "Per the Visa Bulletin" },
];

export function NiwProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          How it works
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The EB-2 NIW Process: Step by Step
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
