import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function Eb1bWhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The BAIS EB-1B Evidence Map
        </h2>
        <FadeIn delay={80} className="mt-5 max-w-3xl rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <p className="text-sm leading-relaxed text-body">
            We match your record to the 6 criteria, arrange{" "}
            <strong className="text-ink">independent expert letters</strong>{" "}
            from our network of{" "}
            <strong className="text-ink">
              350+ professors and industry experts
            </strong>
            , and give your department or HR a simple employer packet.
            Experts give their own opinions; USCIS decides the weight; no
            guarantee.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
