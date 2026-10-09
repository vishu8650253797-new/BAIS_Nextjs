import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function OciWhyBais() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Why BAIS
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The Citizenship-to-OCI Path Check
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          We confirm your path, assemble the{" "}
          <strong className="text-ink">OCI Document Binder</strong>, check{" "}
          <strong className="text-ink">photo and signature specs</strong> (a
          top cause of rejection), and prepare family packets together
          (parents and children).
        </p>

        <FadeIn delay={80} className="mt-6 max-w-3xl rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <p className="text-sm leading-relaxed text-body">
            <strong className="text-ink">Local:</strong> Fremont office at{" "}
            {site.address.full}, serving the Bay Area and California in
            English and Hindi. The Consulate General of India in San
            Francisco serves Northern California; BAIS is not affiliated
            with it.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
