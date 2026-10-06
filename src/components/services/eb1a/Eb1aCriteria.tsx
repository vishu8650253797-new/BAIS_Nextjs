import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const criteria = [
  { title: "Recognized prizes or awards", description: "Industry and research awards, competition wins, best-paper awards" },
  { title: "Elite memberships", description: "Fellowships and invitation-only bodies judged by experts" },
  { title: "Published material about you", description: "Major media or trade articles about you and your work" },
  { title: "Judging others' work", description: "Peer review, program committees, juries, grant panels" },
  { title: "Major original contributions", description: "Widely adopted research, patents in use, measurable impact" },
  { title: "Scholarly articles", description: "Peer-reviewed papers, conference papers, trade articles" },
  { title: "Exhibitions or showcases", description: "Gallery exhibitions, juried showcases (mainly artists)" },
  { title: "Leading or critical role", description: "Leadership at well-known companies, labs, startups, universities" },
  { title: "High salary", description: "Pay clearly above peers, backed by wage data" },
  { title: "Commercial success (performing arts)", description: "Box office, sales, streaming, chart results" },
];

export function Eb1aCriteria() {
  return (
    <section id="criteria" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          The criteria
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The 10 EB-1A Criteria: You Need at Least 3
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          You qualify with <strong className="text-ink">a one-time major,
          internationally recognized award</strong> (for example a Nobel
          Prize, Oscar or Olympic medal), <strong className="text-ink">or</strong>{" "}
          by meeting <strong className="text-ink">at least three of these ten
          criteria</strong>:
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {criteria.map((item, index) => (
            <FadeIn key={item.title} delay={index * 30}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-8 items-center justify-center rounded-full bg-cream text-sm font-bold text-maroon">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-body">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <FadeIn className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">Comparable evidence</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              If a criterion doesn&apos;t readily fit your occupation, you
              may submit comparable evidence, with an explanation of why it
              fits.
            </p>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-ink p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">Step two: final merits review</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              USCIS then weighs all evidence together: are you among the
              small percentage at the very top, with sustained acclaim?
              Most denials happen here. Our petitions are built around it
              from day one.
            </p>
          </FadeIn>
          <FadeIn delay={140} className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">You must also show</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              That you&apos;ll continue working in your field in the U.S.
              No job offer is needed: contracts, letters or a detailed plan
              work.
            </p>
          </FadeIn>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-body/60">
          Meeting three criteria does not guarantee approval. USCIS
          evaluates the totality of the evidence.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Score My Profile Against the 10 Criteria
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
