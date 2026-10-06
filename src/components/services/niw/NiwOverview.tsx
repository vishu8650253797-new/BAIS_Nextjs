import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const exceptionalAbilityCriteria = [
  "An academic record in the field",
  "10 years of full-time experience",
  "A professional license",
  "A salary showing exceptional ability",
  "Professional association membership",
  "Recognition from peers, government or organizations",
];

export function NiwOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the EB-2 National Interest Waiver?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>EB-2 NIW</strong> is a U.S. green card for
            professionals with an <strong>advanced degree</strong> or{" "}
            <strong>exceptional ability</strong> whose work benefits the
            nation. The &quot;waiver&quot; removes the usual{" "}
            <strong>job offer and PERM labor certification</strong>, so you
            can <strong>self-petition</strong>. USCIS decides using the
            three-prong <strong>Dhanasar</strong> test.
          </div>
        </FadeIn>

        <p id="eligibility" className="mb-3 mt-12 scroll-mt-24 text-xs font-bold uppercase tracking-wide text-accent">
          Eligibility
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Step 1: Do You Qualify for EB-2?
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Advanced degree</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-body">
              <li>
                A U.S. master&apos;s degree or higher (or foreign
                equivalent), <strong className="text-ink">or</strong>
              </li>
              <li>
                A U.S. bachelor&apos;s degree (or equivalent){" "}
                <strong className="text-ink">
                  plus 5 years of progressive experience
                </strong>{" "}
                in the field
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Exceptional ability: at least 3 of 6</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              {exceptionalAbilityCriteria.join(" · ")}. Comparable evidence
              is allowed.
            </p>
          </FadeIn>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          USCIS checks the EB-2 threshold first. A strong national-interest
          argument can&apos;t make up for a degree or experience gap.
        </p>
      </Container>
    </section>
  );
}
