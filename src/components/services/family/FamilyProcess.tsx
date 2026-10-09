import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "1",
    title: "Free family review",
    what: "We confirm who can sponsor whom, your category and your best path",
    bais: "A clear plan",
  },
  {
    step: "2",
    title: "Family Case Map",
    what: "One page: category, priority date, expected wait, steps, costs",
    bais: "Your written map (our USP)",
  },
  {
    step: "3",
    title: "File Form I-130",
    what: "The sponsor proves the relationship and status (plus I-130A for a spouse)",
    bais: "I-130 package and evidence",
  },
  {
    step: "4",
    title: "USCIS decides the I-130",
    what: "Receipt, then approval (or an RFE)",
    bais: "Tracking and RFE help",
  },
  {
    step: "5a",
    title: "Consular: National Visa Center",
    what: "Fees, DS-260, documents and the I-864",
    bais: "NVC and document checklist",
  },
  {
    step: "5b",
    title: "In the U.S.: Form I-485",
    what: "File with the I-130 (immediate relatives) or when the date is current; add I-765, I-131, I-693",
    bais: "Green card package",
  },
  {
    step: "6",
    title: "Interview",
    what: "Consulate abroad, or USCIS in the U.S.",
    bais: "Interview preparation",
  },
  {
    step: "7",
    title: "Decision and green card",
    what: "Immigrant visa and entry, or green card approval",
    bais: "Next-step plan",
  },
  {
    step: "8",
    title: "After the green card",
    what: "Conditions (I-751) if applicable; citizenship later",
    bais: "Reminders and citizenship planning",
  },
];

export function FamilyProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The Family Green Card Process: Step by Step
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-body">
          Two ways to finish: <strong className="text-ink">consular
          processing</strong> (an interview abroad) or{" "}
          <strong className="text-ink">adjustment of status</strong> (inside
          the U.S.).
        </p>

        <FadeIn delay={80} className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">#</th>
                <th className="p-3 font-bold text-ink">Step</th>
                <th className="p-3 font-bold text-ink">What happens</th>
                <th className="p-3 font-bold text-ink">What BAIS does</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((item, index) => (
                <tr
                  key={item.title}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-bold text-maroon">{item.step}</td>
                  <td className="p-3 font-semibold text-ink">{item.title}</td>
                  <td className="p-3 text-body">{item.what}</td>
                  <td className="p-3 text-body/70">{item.bais}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Consulate interviews are currently affected by the State
          Department&apos;s worldwide immigrant visa pause (see 2026
          updates).
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Start My Family Case Map
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
