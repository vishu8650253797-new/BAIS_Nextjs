import { Briefcase, GraduationCap, RefreshCw, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  { icon: Briefcase, title: "Spouse", description: "Generally authorized to work in the U.S." },
  { icon: GraduationCap, title: "Children under 21", description: "May study; can't work." },
  { icon: Users, title: "Employees", description: "Same nationality; executive, supervisory or essential-skills roles." },
  { icon: RefreshCw, title: "Renewable", description: "Up to 5 years at a time (by country), while the business operates." },
];

export function E2Family() {
  return (
    <section id="family" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Family, employees and status
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Your Spouse, Children and Employees
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

        <p className="mt-6 text-sm leading-relaxed text-body">
          <strong className="text-ink">Stay compliant:</strong> operate and
          grow, keep records, don&apos;t work outside the business, extend
          on time. <strong className="text-ink">Green card?</strong> Not
          directly. Options: EB-5, EB-1C, EB-2 NIW or employer sponsorship.
        </p>
      </Container>
    </section>
  );
}
