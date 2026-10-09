import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function I130Overview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is Form I-130?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            <strong>Form I-130</strong> is the petition a{" "}
            <strong>U.S. citizen or green card holder</strong> files with
            USCIS to prove a <strong>qualifying family relationship</strong>{" "}
            with a relative who wants a green card. It&apos;s{" "}
            <strong>step one only</strong>: approval doesn&apos;t give a
            green card by itself. The fee is{" "}
            <strong>$625 online or $675 on paper</strong>, and your{" "}
            <strong>filing date becomes your priority date</strong>.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
