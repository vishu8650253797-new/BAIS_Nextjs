import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "Rapid triage",
    what: "You send the notice; we confirm the printed deadline and what's being asked",
    when: "Within 1 business day of receipt*",
  },
  {
    step: "Deadline calendar",
    what: "A backward-planned schedule: collection, letters, review, shipping",
    when: "Day 1–2",
  },
  {
    step: "Gap analysis",
    what: "Each point matched to existing and missing proof",
    when: "Day 2–4",
  },
  {
    step: "Evidence plan",
    what: "What to gather, who provides it, who signs it",
    when: "Day 3–5",
  },
  {
    step: "Letters & evaluations (in parallel)",
    what: "Expert matching and review, credential and expertise evaluations, signer-reviewed letters",
    when: "Weeks 1–4",
  },
  {
    step: "Response package build",
    what: "Cover letter and indexed exhibits mapped point by point",
    when: "Weeks 3–6",
  },
  {
    step: "Quality review",
    what: "Every point answered; names and dates consistent; translations certified",
    when: "2–3 days before filing",
  },
  {
    step: "Sign-off",
    what: "You (or your attorney) review and sign",
    when: "Before shipping",
  },
  {
    step: "One-package filing",
    what: "Original notice on top; tracked delivery; proof saved",
    when: "By the printed date, with buffer",
  },
  {
    step: "After filing",
    what: "Track the decision; next steps, or a denial review",
    when: "Weeks to months",
  },
];

export function RfeProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The RFE Process: Step by Step
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">#</th>
                <th className="p-3 font-bold text-ink">Step</th>
                <th className="p-3 font-bold text-ink">What happens</th>
                <th className="p-3 font-bold text-ink">Typical timing</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((item, index) => (
                <tr
                  key={item.step}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-bold text-maroon">{index + 1}</td>
                  <td className="p-3 font-semibold text-ink">{item.step}</td>
                  <td className="p-3 text-body">{item.what}</td>
                  <td className="p-3 text-body/70">{item.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          *A service goal, not a guarantee; depends on capacity.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Start Triage: Upload My Notice
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
