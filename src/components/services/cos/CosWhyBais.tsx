import { Calendar, ArrowLeftRight, PenLine, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site, yearsInBusiness } from "@/data/site";

const values = [
  {
    icon: Calendar,
    title: "No-Gap Status Plan",
    description: "Your written timeline of every critical date.",
  },
  {
    icon: ArrowLeftRight,
    title: "I-539 & I-129 Under One Roof",
    description: "Applicant and employer paths.",
  },
  {
    icon: PenLine,
    title: "Intent Documentation",
    description: "Clear cover letters that explain your timeline.",
  },
  {
    icon: null,
    label: "2001",
    title: `${yearsInBusiness()}+ Years Since 2001`,
    description: "From Fremont, CA.",
  },
  {
    icon: null,
    label: "EN·HI",
    title: "English & Hindi",
    description: "For applicants and families.",
  },
  {
    icon: ShieldCheck,
    title: "Registered & Bonded",
    description: "Bond No. 5317191.",
  },
];

export function CosWhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Our USP
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why BAIS for Change of Status: The No-Gap Status Plan
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          Most status problems aren&apos;t about eligibility. They&apos;re
          about <strong className="text-ink">timing</strong>: an I-94
          expiring before a program starts, a grace period running out, or
          travel that abandons a pending case. Every BAIS change-of-status
          client receives a{" "}
          <strong className="text-ink">written No-Gap Status Plan</strong>,
          with every critical date on one page so nothing slips.
        </p>

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

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Book a Free Change of Status Review
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            Call {site.phone}
          </Button>
        </div>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-body/60">
          The No-Gap Status Plan is a planning tool to help you track filing
          and status dates. It is not a guarantee of USCIS processing time
          or case outcome.
        </p>
      </Container>
    </section>
  );
}
