import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  { label: "+1 yr", title: "1-year extensions", description: "PERM or I-140 filed 365+ days before reaching 6 years." },
  { label: "+3 yrs", title: "3-year extensions", description: "Approved I-140 + a backlogged priority date." },
  { label: "H-4", title: "Spouse EAD", description: "May qualify once the I-140 is approved." },
  { label: "Yr 3–4", title: "Start early", description: "PERM alone takes ~18–24 months; earlier for India-born workers." },
];

export function Eb3H1bProtection() {
  return (
    <section id="h-1b" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          H-1B workers
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          On H-1B? How EB-3 Protects You Beyond the 6-Year Limit
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 60}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-sm font-bold text-maroon">
                  {card.label}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
