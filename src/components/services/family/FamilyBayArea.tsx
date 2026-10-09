import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function FamilyBayArea() {
  return (
    <section id="bay-area" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Bay Area &amp; California
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Family Immigration Help in Fremont, the Bay Area and California
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          Our office is at <strong className="text-ink">{site.address.full}</strong>.
          The Bay Area is home to large Indian, Chinese, Filipino, Mexican
          and Latin American communities, where long preference-category
          waits are common, so planning early matters. We help families
          across <strong className="text-ink">
            Fremont, San Jose, Santa Clara, Sunnyvale, Milpitas, Oakland, San
            Francisco, the Peninsula and all of California
          </strong>, in English and Hindi, in person or by video.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="text-sm leading-relaxed text-body">
              <strong className="text-ink">Green card interviews inside the U.S.</strong>{" "}
              are usually held at your local USCIS field office (San
              Francisco or San Jose, by ZIP code).
            </p>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="text-sm leading-relaxed text-body">
              <strong className="text-ink">Consular interviews</strong> are
              held at the embassy or consulate in your relative&apos;s home
              country.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
