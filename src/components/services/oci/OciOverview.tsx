import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function OciOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Are OCI and Renunciation?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            <strong>India doesn&apos;t allow dual citizenship.</strong>{" "}
            After you become a U.S. citizen, you must{" "}
            <strong>surrender your Indian passport</strong> and get a{" "}
            <strong>Surrender (Renunciation) Certificate</strong>. Then you
            can apply for an <strong>OCI card</strong>, a lifelong
            multiple-entry status for people of Indian origin.{" "}
            <strong>OCI is not Indian citizenship.</strong> Since{" "}
            <strong>May 2026</strong>, OCI services are filed fully online.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
