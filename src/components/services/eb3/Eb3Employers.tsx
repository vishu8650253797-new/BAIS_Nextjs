import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  { label: "1", title: "Job description review", description: "Reflects the real job; avoids denial traps." },
  { label: "2", title: "Wage strategy", description: "Correct SOC code, wage level, worksite." },
  { label: "3", title: "Recruitment calendar", description: "Every ad, posting and quiet period scheduled." },
  { label: "4", title: "Proof capture", description: "Tear sheets, screenshots, confirmations, dated." },
  { label: "5", title: "Applicant review", description: "A structured recruitment report." },
  { label: "6", title: "Audit binder", description: "Ready in minutes; kept 5 years." },
  { label: "7", title: "H-1B cliff tracker", description: "Flags employees approaching year 4." },
  { label: "+", title: "For HR teams", description: "One contact, written scope and fees, portfolio reporting." },
];

export function Eb3Employers() {
  return (
    <section id="employers" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          For employers · our USP
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          For Employers: PERM Without the Compliance Headaches
        </h2>
        <h3 className="mt-6 text-lg font-bold text-ink">Our Audit-Ready PERM System</h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 40}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-9 items-center justify-center rounded-full bg-cream text-sm font-bold text-maroon">
                  {step.label}
                </span>
                <h4 className="mt-3 text-sm font-bold text-ink">{step.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-body">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Book an Employer PERM Strategy Call
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            Download the PERM Employer Checklist
          </Link>
        </div>
      </Container>
    </section>
  );
}
