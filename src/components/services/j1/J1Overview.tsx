import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function J1Overview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the J-1 Exchange Visitor Visa?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>J-1 visa</strong> is a U.S. nonimmigrant visa for
            people taking part in{" "}
            <strong>Department of State–approved exchange programs</strong>:
            students, interns, trainees, professors, research scholars,
            teachers and others. A <strong>designated sponsor</strong> issues{" "}
            <strong>Form DS-2019</strong>. Spouses and children use{" "}
            <strong>J-2</strong>. Some J-1s must spend{" "}
            <strong>two years in their home country</strong> afterward
            (INA 212(e)).
          </div>
        </FadeIn>

        <FadeIn delay={70} className="mt-5 rounded-2xl bg-ink/5 px-6 py-4 text-sm leading-relaxed text-body">
          BAIS prepares documentation <strong>around</strong> the J-1. We are
          not a sponsor, and we don&apos;t issue the DS-2019.
        </FadeIn>
      </Container>
    </section>
  );
}
