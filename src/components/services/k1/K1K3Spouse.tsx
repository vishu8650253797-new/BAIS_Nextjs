import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function K1K3Spouse() {
  return (
    <section id="k-3" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">K-3</p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          K-3 Spouse Visa: What It Is and Whether It Still Makes Sense
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">How it works</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              For the <strong>foreign spouse of a U.S. citizen</strong>,
              letting them enter while the I-130 is pending. The citizen
              files the I-130, then the I-129F (no fee for spouses).
              Children may qualify for <strong>K-4</strong>.
            </p>
          </FadeIn>
          <FadeIn delay={80} className="rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">The reality today</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              If the I-130 is approved first, which is common, the National
              Visa Center generally closes the K-3 and continues as an{" "}
              <strong className="text-white">
                immigrant spouse visa (CR-1/IR-1)
              </strong>
              . Few couples end up using K-3.
            </p>
          </FadeIn>
        </div>

        <Link
          href="/services#family-immigration"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Already Married? Explore Spouse Visas (CR-1/IR-1) →
        </Link>
      </Container>
    </section>
  );
}
