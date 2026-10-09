import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function B1b2Overview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the B-1/B-2 Visa?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>B-1/B-2</strong> is a{" "}
            <strong>temporary visitor visa</strong>.{" "}
            <strong>B-1</strong> covers <strong>business visits</strong>{" "}
            (meetings, conferences, negotiating contracts).{" "}
            <strong>B-2</strong> covers{" "}
            <strong>tourism, family visits and medical care</strong>. You{" "}
            <strong>can&apos;t work</strong> for a U.S. employer or be paid
            from a U.S. source. Your <strong>I-94</strong> sets how long you
            can stay, usually <strong>up to 6 months</strong>.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
