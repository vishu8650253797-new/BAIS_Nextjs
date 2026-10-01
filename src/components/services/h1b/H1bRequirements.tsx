import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const employeePoints = [
  "A job offer from a U.S. employer in a specialty occupation",
  "A U.S. bachelor's degree or foreign equivalent in a related field (or equivalent experience)",
  "Any state license required for the role",
];

const employerPoints = [
  "A real employer-employee relationship and a genuine job opening",
  "A certified Labor Condition Application (LCA)",
  "Payment of the higher of the prevailing or actual wage",
  "Ability to pay, with applicable USCIS fees",
];

const docs = [
  "Passport",
  "Degree certificates & transcripts",
  "Credential evaluation",
  "Experience letters",
  "Résumé",
  "Offer letter & job description",
  "Employer financials",
  "LCA",
  "Prior I-797s & I-94",
  "Recent pay stubs (transfers)",
];

export function H1bRequirements() {
  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          H-1B Visa Requirements
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
              <h3 className="text-lg font-bold text-ink">Employee requirements</h3>
              <ul className="mt-4 space-y-3">
                {employeePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={70}>
            <div className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
              <h3 className="text-lg font-bold text-ink">Employer requirements</h3>
              <ul className="mt-4 space-y-3">
                {employerPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <h3 className="mt-10 text-lg font-bold text-ink">
          Documents we&apos;ll help you organize
        </h3>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {docs.map((doc) => (
            <span
              key={doc}
              className="rounded-full border border-border bg-cream px-4 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-maroon/40 hover:text-maroon"
            >
              {doc}
            </span>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Get the H-1B Document Checklist (Free)
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
