import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function I130WhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The BAIS I-130 Evidence Map
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          A relationship-specific checklist, a name-and-date consistency
          check across every document, and a filing review, plus the
          one-page <strong className="text-ink">Family Case Map</strong>{" "}
          (category, priority date, expected wait, next steps).
        </p>

        <FadeIn delay={80} className="mt-6 max-w-3xl rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <p className="text-sm leading-relaxed text-body">
            <strong className="text-ink">Bay Area:</strong> office at{" "}
            {site.address.full}; English and Hindi.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
