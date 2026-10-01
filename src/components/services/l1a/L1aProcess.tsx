import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  { number: "01", title: "Free Eligibility Check", description: "Ownership link, year abroad and planned role reviewed.", when: "Week 1" },
  { number: "02", title: "U.S. Company Setup", description: "Entity, EIN, bank account, office lease and funding in place.", when: "Weeks 2–6" },
  { number: "03", title: "Business Plan & Org Charts", description: "One-year plan, hiring plan and duty breakdowns prepared.", when: "Weeks 3–6" },
  { number: "04", title: "Petition Filing", description: "Full I-129 L petition, with optional premium processing.", when: "Weeks 6–8" },
  { number: "05", title: "USCIS Decision", description: "Premium: typically 15 business days, plus any RFE response.", when: "Weeks 8–12+" },
  { number: "06", title: "Visa & Travel", description: "Consular interview. Canadians may apply at the border. Family applies for L-2.", when: "After approval" },
  { number: "07", title: "Year 1: Build the Office", description: "Hire staff, sign customers, keep records for the extension.", when: "Months 1–12" },
  { number: "08", title: "Extension & Green Card", description: "Extend before expiry, then plan the EB-1C green card.", when: "Months 10–12+" },
];

export function L1aProcess() {
  return (
    <section className="bg-gradient-to-br from-cream to-[#f4e9dc] py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          How it works
        </p>
        <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
          The L-1A New Office Process: Step by Step
        </h2>
        <span className="mt-4 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 50}>
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
          Start Your U.S. Expansion Plan
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="mt-4 text-xs text-body/50">
          Timelines are typical estimates, not guarantees.
        </p>
      </Container>
    </section>
  );
}
