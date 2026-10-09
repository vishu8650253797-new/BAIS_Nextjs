import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function E2WhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Our USP
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Why Investors Choose BAIS: The E-2 Readiness Review
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          We check country, ownership, investment size and viability{" "}
          <strong className="text-ink">before you spend</strong>. Plus a
          proportionality check, an investment evidence binder, interview
          preparation, a renewal calendar and green card planning.
        </p>

        <FadeIn delay={80} className="mt-6 max-w-3xl rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <p className="text-sm leading-relaxed text-body">
            <strong className="text-ink">Bay Area &amp; California:</strong>{" "}
            office at {site.address.full}; we help investors across the Bay
            Area and California, in English and Hindi, in person or by
            video. California setup steps (LLC or corporation, seller&apos;s
            permit, city license, state tax registration) are sequenced
            around your evidence.
          </p>
        </FadeIn>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Check My E-2 Eligibility: Free
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
