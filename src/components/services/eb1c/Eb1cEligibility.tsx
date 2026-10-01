import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const beneficiaryPoints = [
  "1 year in the last 3 with the related company abroad, as a manager or executive. If you're already in the U.S. with the same company (e.g., L-1A), the 3 years are counted back from your entry.",
  "A managerial or executive role in the U.S.",
  "Duties, not title, show you manage people or a function, or direct the company",
];

const companyPoints = [
  "A qualifying relationship: same company, affiliate or subsidiary",
  "Multinational: doing business in the U.S. and at least one other country",
  "U.S. company doing business for at least 1 year before filing",
  "Ability to pay (annual reports, tax returns or audited financials)",
  "The employer files the I-140 (no self-petition)",
];

export function Eb1cEligibility() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Eligibility
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1C Requirements: Who Qualifies?
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
              <h3 className="text-lg font-bold text-ink">
                You (the manager or executive)
              </h3>
              <ul className="mt-4 space-y-3">
                {beneficiaryPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={70}>
            <div className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
              <h3 className="text-lg font-bold text-white">
                Your company (the U.S. sponsor)
              </h3>
              <ul className="mt-4 space-y-3">
                {companyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
