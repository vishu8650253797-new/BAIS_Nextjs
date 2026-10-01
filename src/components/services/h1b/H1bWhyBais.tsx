import {
  AlarmClock,
  Calendar,
  Languages,
  MapPin,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, site } from "@/data/site";

const values = [
  {
    icon: Calendar,
    title: "H-1B Is Our Core Work",
    description: `H-1B cap, transfer, extension and amendment filings have been our main practice since ${FOUNDED_YEAR}.`,
  },
  {
    icon: TrendingUp,
    title: "99% Success Rate*",
    description: "Thorough, well-documented petitions built to reduce RFEs.",
  },
  {
    icon: AlarmClock,
    title: "Deadline Tracking",
    description: "Registration windows, LCA dates and extension deadlines, tracked for your whole team.",
  },
  {
    icon: MapPin,
    title: "Local & Remote",
    description: "Visit our Fremont office or work with us fully online, across the U.S. and India.",
  },
  {
    icon: ShieldCheck,
    title: "Registered & Bonded",
    description: "California-registered immigration consultant, Bond No. 5317191.",
  },
  {
    icon: Languages,
    title: "English & Hindi",
    description: "Clear communication in the language you're most comfortable with.",
  },
];

export function H1bWhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why Bay Area Employers Trust BAIS With Their H-1B Petitions
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
            Book a Free H-1B Consultation
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
