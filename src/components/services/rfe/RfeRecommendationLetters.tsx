import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const ourSupport = [
  "We ask the signer the right questions",
  "We organize their facts and examples into a clear structure",
  "We help with formatting and fact-checking against your exhibits",
  "The signer reviews, edits, adopts and signs every word. Nothing is invented, and the signer is never asked to say something they don't believe.",
];

const weAvoid = [
  "Generic, copy-paste or template letters",
  "Letters that overstate or don't match the evidence",
  "Signers who haven't reviewed the final text",
];

export function RfeRecommendationLetters() {
  return (
    <section id="recommendation-letters" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Recommendation letters
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Recommendation Letters That Sound Like the Person Who Signs Them
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Our drafting support</h3>
            <ul className="mt-4 space-y-2.5">
              {ourSupport.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">What we avoid</h3>
            <ul className="mt-4 space-y-2.5">
              {weAvoid.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
