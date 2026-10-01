import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const cards = [
  {
    title: "Derivative green cards",
    description:
      "Your spouse and unmarried children under 21 receive green cards with you. No separate petition is needed.",
  },
  {
    title: "Work & travel while pending",
    description:
      "When filing in the U.S., family members can apply for work permits (EAD) and travel permission (advance parole) while the case is pending.",
  },
  {
    title: "Children near 21",
    description:
      "The Child Status Protection Act may protect a child who turns 21 during the process. We check this for every family. Families abroad complete consular processing together.",
  },
];

export function Eb1cFamily() {
  return (
    <section className="bg-cream py-20">
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
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Plan Your Family&apos;s Green Card
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
