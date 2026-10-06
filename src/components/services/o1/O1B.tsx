import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const standards = [
  {
    title: "O-1B (Arts): \"distinction\"",
    description:
      "Fine, visual and performing arts, music, culinary arts, design, fashion and photography.",
  },
  {
    title: "O-1B (Film & TV): \"extraordinary achievement\"",
    description: "A higher standard for actors, directors, producers, cinematographers and editors.",
  },
];

const criteria = [
  {
    title: "Lead or starring roles",
    description: "Headlining performances, lead roles, solo exhibitions; past or upcoming",
  },
  {
    title: "National or international recognition",
    description: "Critical reviews, features and interviews in major publications",
  },
  {
    title: "Critical role for distinguished organizations",
    description: "Principal dancer, head chef, creative director at a renowned venue or brand",
  },
  {
    title: "Commercial or critical success",
    description: "Box office, charts, streaming numbers, sold-out shows, ratings",
  },
  {
    title: "Expert recognition",
    description: "Letters from recognized critics, industry leaders, government arts bodies",
  },
  {
    title: "High salary",
    description: "Contracts and fees well above others in the field",
  },
];

export function O1B() {
  return (
    <section id="o-1b" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          O-1B
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          O-1B Visa: Extraordinary Ability in the Arts, Film &amp; Television
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {standards.map((item, index) => (
            <FadeIn key={item.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-body">
          You qualify with{" "}
          <strong className="text-ink">
            a significant national or international award or nomination
          </strong>{" "}
          (for example an Academy Award, Emmy, Grammy or Directors Guild
          Award), <strong className="text-ink">or</strong> at least{" "}
          <strong className="text-ink">three of these six criteria</strong>:
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item, index) => (
            <FadeIn key={item.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-9 items-center justify-center rounded-full bg-cream text-sm font-bold text-maroon">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-body">
          <strong className="text-ink">Comparable evidence:</strong> allowed
          for O-1B Arts, not for film and TV.{" "}
          <strong className="text-ink">Multiple engagements:</strong>{" "}
          performers usually file through a U.S. agent with an itinerary and
          contracts.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-body/60">
          Meeting three criteria does not guarantee approval. USCIS
          evaluates the totality of the evidence.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Review My O-1B Portfolio Free
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/blog" className="text-sm font-semibold text-body/60 hover:text-maroon">
            O-1 for artists &amp; entertainers guide →
          </Link>
        </div>
      </Container>
    </section>
  );
}
