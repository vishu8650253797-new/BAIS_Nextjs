import { ArrowLeftRight, Globe2, ShieldCheck, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site, yearsInBusiness } from "@/data/site";

const values = [
  {
    label: "2001",
    title: `${yearsInBusiness()}+ Years Since 2001`,
    description: "Employment green card petitions from Fremont.",
  },
  {
    icon: Target,
    title: "Endeavor-First Strategy",
    description: "We define what you'll do before building evidence.",
  },
  {
    label: "350+",
    title: "Professor Network",
    description: "Independent, specific expert letters.",
  },
  {
    icon: ArrowLeftRight,
    title: "NIW + EB-1A Planning",
    description: "The right category, or both, for your record.",
  },
  {
    icon: Globe2,
    title: "Global Video Consultations",
    description: "From any country, in English or Hindi.",
  },
  {
    icon: ShieldCheck,
    title: "Registered & Bonded",
    description: "Bond No. 5317191.",
  },
];

export function NiwWhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why Professionals Choose BAIS for EB-2 NIW
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
            Book a Free NIW Review
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
