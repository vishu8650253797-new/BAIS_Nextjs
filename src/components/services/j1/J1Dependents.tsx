import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const cards = [
  {
    icon: Users,
    title: "Who & study",
    description:
      "Spouse and unmarried children under 21, each with their own DS-2019. J-2 family members may study.",
  },
  {
    icon: FileText,
    title: "Work permit (I-765)",
    description:
      "A J-2 may apply to USCIS for work authorization if the income isn't needed to support the J-1. Work starts only after approval.",
  },
  {
    icon: ShieldCheck,
    title: "Status & 212(e)",
    description:
      "Follows the J-1's dates and the 2026 fixed admission period. If the J-1 is subject to 212(e), J-2 family members are too.",
  },
];

export function J1Dependents() {
  return (
    <section id="j-2" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          J-2 dependents
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          J-2 Visa for Spouses and Children
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

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Need a J-2 Work Permit? We Prepare the I-765
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
