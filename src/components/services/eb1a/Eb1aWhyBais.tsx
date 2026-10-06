import { Scale, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site, yearsInBusiness } from "@/data/site";

const values = [
  {
    label: "2001",
    title: `${yearsInBusiness()}+ Years Since 2001`,
    description: "Extraordinary-ability petitions from Fremont.",
  },
  {
    label: "350+",
    title: "Professors & Industry Experts",
    description: "Independent expert opinion letters, matched to your field.",
  },
  {
    icon: Scale,
    title: "Final-Merits Strategy",
    description: "Built for step two, where most cases are decided.",
  },
  {
    label: "3–5",
    title: "Criteria Mapping",
    description: "Built around your strongest criteria, not a checklist.",
  },
  {
    label: "O→A",
    title: "O-1 → EB-1A Continuity",
    description: "Your O-1 evidence becomes your green card case.",
  },
  {
    icon: ShieldCheck,
    title: "Registered & Bonded",
    description: "Bond No. 5317191.",
  },
];

export function Eb1aWhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why Top Talent Chooses BAIS for EB-1A
        </h2>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-sm font-bold text-maroon">
                  {value.icon ? (
                    <value.icon className="size-5" aria-hidden="true" />
                  ) : (
                    value.label
                  )}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Book a Free EB-1A Evaluation
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
