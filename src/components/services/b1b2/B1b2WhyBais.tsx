import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function B1b2WhyBais() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The BAIS Visit-Purpose Fit Check
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          We test your purpose, itinerary, documents and ties{" "}
          <strong className="text-ink">before you apply</strong>, then
          prepare you for the interview. Plus an invitation or employer
          letter, extension planning, and a plan if your real goal is work
          or a green card.
        </p>

        <FadeIn delay={80} className="mt-6 max-w-3xl rounded-2xl bg-cream p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <p className="text-sm leading-relaxed text-body">
            <strong className="text-ink">Bay Area:</strong> office at{" "}
            {site.address.full}; we serve visitors, businesses and families
            across California in English and Hindi.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
