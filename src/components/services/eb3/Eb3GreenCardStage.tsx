import { ArrowLeftRight, Globe2, Landmark, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  {
    icon: Landmark,
    title: "In the U.S.",
    description: "I-485 when the date is current (or filed together with the I-140), plus I-765, I-131 and I-693.",
  },
  {
    icon: Globe2,
    title: "Abroad",
    description: "Consular processing through NVC (DS-260) and an interview.",
  },
  {
    icon: ArrowLeftRight,
    title: "AC21 portability",
    description: "I-485 pending 180 days → a same or similar job with Supplement J.",
  },
  {
    icon: Users,
    title: "Family",
    description: "Spouse and unmarried children under 21 as derivatives.",
  },
];

export function Eb3GreenCardStage() {
  return (
    <section id="green-card" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Step 4
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Step 4: Getting the Green Card (I-485 or Consular Processing)
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 60}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
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
