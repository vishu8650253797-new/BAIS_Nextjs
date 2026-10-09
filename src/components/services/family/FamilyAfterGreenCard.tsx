import { Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  {
    label: "I-751",
    title: "Conditional card",
    description: "Married under 2 years at approval? The card lasts 2 years. File I-751 in the 90 days before it expires.",
  },
  {
    label: "3 yrs",
    title: "Citizenship",
    description: "Spouses of U.S. citizens may apply after 3 years (otherwise 5).",
  },
  {
    icon: Users,
    title: "Sponsor more",
    description: "After naturalizing, you can sponsor parents and siblings.",
  },
  {
    label: "OCI",
    title: "Indian-born citizens",
    description: "Renunciation and OCI, in one place.",
  },
];

export function FamilyAfterGreenCard() {
  return (
    <section id="after-green-card" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          After the green card
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          After You Get the Green Card
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 60}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-sm font-bold text-maroon">
                  {card.icon ? <card.icon className="size-5" aria-hidden="true" /> : card.label}
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
