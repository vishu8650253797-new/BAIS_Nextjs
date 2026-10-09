import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const requirements = [
  "Treaty nationality and at least 50% treaty ownership of the business",
  "A real, operating business (idle land or stocks don't qualify)",
  "Substantial investment, at risk and committed, from lawful funds",
  "Not marginal: more than a minimal living, or real economic impact (jobs)",
  "You develop and direct it (own 50%+ or hold operational control)",
  "Intent to leave when E-2 status ends",
];

export function E2Requirements() {
  return (
    <section id="requirements" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Requirements
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          E-2 Requirements in Plain English
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <ul className="space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">
              How much do you need to invest?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              <strong className="text-white">
                There&apos;s no fixed minimum.
              </strong>{" "}
              The test is <strong className="text-white">proportionality</strong>:
              lower-cost businesses (such as consulting) generally need a
              high share of their cost invested; higher-cost businesses
              (such as restaurants) can succeed with a smaller share, but
              the amount must still be significant.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
