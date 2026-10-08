import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  { title: "Concern map", description: "Each RFE point the letter must address." },
  { title: "Expert match", description: "Credentials and independence." },
  { title: "Expert review", description: "The expert studies your record." },
  { title: "Opinion & signature", description: "Their own opinion, on letterhead, with a CV." },
  { title: "Cross-reference", description: "Every claim linked to an exhibit." },
];

const persuasivePoints = [
  "The expert's credentials and why they can judge this field",
  "The relationship, or lack of one, stated clearly",
  "Specific facts tied to evidence, not generic praise",
  "Comparison to the field and the legal standard the officer is applying",
];

export function RfeExpertLetters() {
  return (
    <section id="expert-letters" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Expert letters
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Expert Opinion Letters for Your RFE: From 350+ Professors and
          Industry Experts
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
          In an RFE, a letter works best when it answers the{" "}
          <strong className="text-ink">officer&apos;s exact concern</strong>.
          Independent experts, who have no working relationship with you,
          generally carry the most weight.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="font-serif text-xl font-bold text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-body">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">What makes a letter persuasive</h3>
            <ul className="mt-4 space-y-2.5">
              {persuasivePoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <p className="text-sm leading-relaxed text-white/75">
              Experts give their own independent opinions based on your
              evidence and aren&apos;t asked to state anything they
              don&apos;t believe. USCIS decides the weight. Letters
              don&apos;t replace primary evidence and don&apos;t guarantee
              approval. Availability depends on field.
            </p>
            <Link
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Get Matched With an Independent Expert →
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
