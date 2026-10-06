import { Baby, Briefcase, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  {
    icon: Users,
    title: "Derivative green cards",
    description: "Spouse and unmarried children under 21.",
  },
  {
    icon: Briefcase,
    title: "Work & travel while pending",
    description: "EAD and advance parole once an I-485 is filed.",
  },
  {
    icon: Baby,
    title: "Children near 21",
    description:
      "The Child Status Protection Act may help. This is critical for long EB-2 India waits.",
  },
];

export function NiwFamily() {
  return (
    <section id="family" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Your family
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Green Cards for Your Spouse and Children
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-maroon">
                  <card.icon className="size-5" aria-hidden="true" />
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
