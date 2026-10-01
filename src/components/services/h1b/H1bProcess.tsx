import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  { number: "01", title: "Free Case Review", description: "Specialty occupation, degree match and wage level confirmed.", when: "Now – Feb 2027" },
  { number: "02", title: "Registration", description: "The employer registers the beneficiary in the USCIS portal.", when: "March 2027" },
  { number: "03", title: "Selection", description: "USCIS runs the weighted selection and notifies registrants.", when: "Late Mar 2027" },
  { number: "04", title: "LCA & Petition", description: "We prepare the LCA and the full I-129 package.", when: "Apr 1 – Jun 30" },
  { number: "05", title: "USCIS Decision", description: "Regular or premium processing, plus any RFE response.", when: "Spring – Summer" },
  { number: "06", title: "Start Work", description: "Change of status or visa stamping, then the job begins.", when: "From Oct 1, 2027" },
];

export function H1bProcess() {
  return (
    <section className="bg-gradient-to-br from-cream to-[#f4e9dc] py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          How it works
        </p>
        <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
          How the H-1B Process Works: Step by Step
        </h2>
        <span className="mt-4 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-body">
          Here&apos;s the timeline for the next cap season (FY 2028), and
          what we handle at each step.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 60}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <p className="font-serif text-3xl text-maroon">{step.number}</p>
                <h3 className="mt-2 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-body">{step.description}</p>
                <span className="mt-3 inline-block rounded-full bg-cream px-3 py-1 text-[11px] font-semibold text-maroon">
                  {step.when}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Start Preparing for the March 2027 Registration
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
