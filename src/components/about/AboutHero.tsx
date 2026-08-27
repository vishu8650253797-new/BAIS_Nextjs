import { Container } from "@/components/ui/Container";
import { yearsInBusiness } from "@/data/site";

export function AboutHero() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container className="max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          About Bay Area Immigration Services
        </p>
        <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {yearsInBusiness()} Years of Immigration Documentation, One Case at a Time
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-body">
          Founded in 2001, Bay Area Immigration Services has grown from helping
          individuals immigrate to the U.S. and Canada into a full-service
          immigration consultancy supporting clients across work, family, and
          investor immigration categories.
        </p>
      </Container>
    </section>
  );
}
