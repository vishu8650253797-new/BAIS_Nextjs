import {
  ArrowRight,
  Calendar,
  ClipboardList,
  Globe2,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, site, yearsInBusiness } from "@/data/site";

const values = [
  {
    icon: Calendar,
    title: `${yearsInBusiness()}+ Years in Fremont`,
    description: `Employment green card petitions since ${FOUNDED_YEAR}.`,
  },
  {
    icon: TrendingUp,
    title: "99% Success Rate*",
    description: "Complete, well-documented petitions built to reduce RFEs.",
  },
  {
    icon: ClipboardList,
    title: "Org-Chart & Duty Specialists",
    description: "The evidence that makes or breaks a managerial case.",
  },
  {
    icon: ArrowRight,
    title: "One Team: L-1A → EB-1C",
    description: "New office, extension and green card, with one team and one file.",
  },
  {
    icon: Globe2,
    title: "Global Video Consultations",
    description: "Work with us from any country, in English or Hindi.",
  },
  {
    icon: ShieldCheck,
    title: "Registered & Bonded",
    description: "California-registered immigration consultant, Bond No. 5317191.",
  },
];

export function Eb1cWhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why Managers and Executives Choose BAIS for EB-1C
        </h2>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Book a Free EB-1C Consultation
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            Call {site.phone}
            <Phone className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
