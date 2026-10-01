import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const steps = [
  { number: "01", title: "Free Case Review", description: "Relationship, 1-year rules and role confirmed." },
  { number: "02", title: "Evidence & Org Charts", description: "Duty breakdown, charts, records and support letter." },
  { number: "03", title: "I-140 Filing", description: "Premium optional: 45 business days." },
  { number: "04", title: "Priority Date Check", description: "Most countries move straight to the green card stage." },
  { number: "05", title: "I-485 or Consular", description: "Filed together with the I-140 when current, or a consulate interview." },
  { number: "06", title: "Green Card", description: "Approval for you and your family." },
];

export function Eb1cProcess() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The EB-1C Process: Step by Step
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 60}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <p className="font-serif text-3xl text-maroon">{step.number}</p>
                <h3 className="mt-2 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-body">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-xs text-body/50">
          Processing times are estimates based on published USCIS information
          and can change. Premium processing guarantees USCIS action, not
          approval.
        </p>
      </Container>
    </section>
  );
}
