import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const prongs = [
  {
    title: "Substantial merit & national importance",
    description:
      "A specific proposed endeavor (not just your job title) with broad impact: economic, health, security, technology, education.",
    evidence: "Evidence: endeavor statement, industry and government reports, user letters",
  },
  {
    title: "Well positioned to advance it",
    description:
      "Your education, skills, track record, progress so far, plans and resources.",
    evidence: "Evidence: publications, citations, patents, funding, contracts, expert letters",
  },
  {
    title: "On balance, the waiver benefits the U.S.",
    description:
      "Why the U.S. gains by letting you proceed without an employer sponsor or PERM.",
    evidence: "Evidence: urgency, impracticality of PERM, startup or self-employment, STEM priority",
  },
];

export function NiwDhanasar() {
  return (
    <section id="dhanasar" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Dhanasar
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Step 2: The Three Dhanasar Prongs
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {prongs.map((prong, index) => (
            <FadeIn key={prong.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-9 items-center justify-center rounded-full bg-maroon text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{prong.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{prong.description}</p>
                <span className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {prong.evidence}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-white">
              The #1 reason NIW petitions fail: a vague endeavor
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              &quot;I&apos;m a software engineer&quot; is an occupation, not
              an endeavor. A strong endeavor says{" "}
              <strong className="text-white">what</strong> you&apos;ll do,{" "}
              <strong className="text-white">where</strong> and{" "}
              <strong className="text-white">why it matters nationally</strong>.
              For example: &quot;develop machine-learning tools that cut
              diagnostic imaging errors in rural U.S. hospitals.&quot;
            </p>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">STEM and entrepreneurs</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              USCIS guidance recognizes STEM fields and entrepreneurs, and
              considers advanced STEM degrees and government-entity letters
              relevant. Since the January 2025 Policy Manual update,
              specific, documented impact matters more than broad claims.
            </p>
          </FadeIn>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-body/60">
          Meeting the EB-2 threshold and addressing all three prongs does
          not guarantee approval. The waiver is discretionary.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Get Help Defining Your Proposed Endeavor
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
