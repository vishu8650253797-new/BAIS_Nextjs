import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const criteria = [
  {
    title: "Recognized awards",
    description: "Industry awards, research prizes, startup competition wins, national championships",
  },
  {
    title: "Elite memberships",
    description: "Fellowships and invitation-only bodies judged by experts, not paid memberships",
  },
  {
    title: "Published material about you",
    description: "Major media, trade or professional publications discussing you and your work",
  },
  {
    title: "Major original contributions",
    description: "Patents in use, widely adopted research, products with measurable impact",
  },
  {
    title: "Scholarly articles",
    description: "Peer-reviewed papers, conference papers, articles in major trade media",
  },
  {
    title: "Judging others' work",
    description: "Peer review, hackathon or award juries, grant panels",
  },
  {
    title: "Critical role",
    description: "A leading role at a well-known company, lab, startup or university",
  },
  {
    title: "High salary",
    description: "Compensation clearly above others in your field, backed by wage data",
  },
];

export function O1A() {
  return (
    <section id="o-1a" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          O-1A
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          O-1A Visa: Extraordinary Ability in Science, Education, Business &amp; Athletics
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          You qualify with <strong className="text-ink">a one-time major,
          internationally recognized award</strong>, such as a Nobel Prize,{" "}
          <strong className="text-ink">or</strong> by meeting{" "}
          <strong className="text-ink">at least three of these eight
          criteria</strong>:
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item, index) => (
            <FadeIn key={item.title} delay={index * 40}>
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

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Comparable evidence</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              If a criterion doesn&apos;t readily fit your occupation, USCIS
              allows comparable evidence, such as venture funding for
              founders or citation metrics for researchers, with an
              explanation of why it fits.
            </p>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Three criteria is step one</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              USCIS then reviews the evidence as a whole to confirm
              sustained acclaim. Strong, well-explained evidence matters
              more than the number of documents.
            </p>
          </FadeIn>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-body">
          <strong className="text-ink">Who we often help with O-1A:</strong>{" "}
          AI and ML engineers · startup founders and CTOs · scientists and
          postdocs · product leaders · professors · professional athletes
          and coaches
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Score My O-1A Profile Free
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
