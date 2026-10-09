import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function E1WhyBais() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The BAIS E-1 Trade-Share Test
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          We calculate your U.S.–treaty-country trade share and test
          &quot;substantial&quot; and &quot;principal&quot;{" "}
          <strong className="text-ink">before you file</strong>, so you know
          where you stand. Plus a trade-evidence binder, role documents,
          interview preparation and a renewal calendar.
        </p>

        <FadeIn delay={80} className="mt-6 max-w-3xl rounded-2xl bg-cream p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <p className="text-sm leading-relaxed text-body">
            <strong className="text-ink">Bay Area:</strong> office at{" "}
            {site.address.full}; we help traders across California in
            English and Hindi.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
