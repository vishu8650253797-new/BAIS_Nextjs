import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function FamilyOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is Family-Based Immigration?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            <strong>Family-based immigration</strong> lets{" "}
            <strong>U.S. citizens and green card holders</strong> sponsor
            close relatives for a green card. The sponsor files{" "}
            <strong>Form I-130</strong>.{" "}
            <strong>
              Spouses, parents and unmarried children under 21 of U.S.
              citizens
            </strong>{" "}
            have <strong>no visa wait</strong>. Other relatives wait in{" "}
            <strong>preference categories (F1–F4)</strong>, which can take{" "}
            <strong>years</strong>.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
