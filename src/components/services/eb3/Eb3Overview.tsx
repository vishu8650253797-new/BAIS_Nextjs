import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function Eb3Overview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the EB-3 Green Card?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>EB-3</strong> is an employer-sponsored green card for{" "}
            <strong>skilled workers</strong> (2+ years of training or
            experience), <strong>professionals</strong> (a U.S.
            bachelor&apos;s degree or equivalent) and{" "}
            <strong>other workers</strong>. Most cases need{" "}
            <strong>PERM labor certification</strong> from the Department of
            Labor first. The employer then files <strong>Form I-140</strong>,
            and the worker applies for the green card when their priority
            date is current.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
