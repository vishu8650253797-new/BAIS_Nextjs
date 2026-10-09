import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "Visa or ESTA?",
    what: "Check if your country is in the Visa Waiver Program",
    bais: "Free Visit-Purpose Fit Check",
  },
  {
    step: "Define your purpose",
    what: "B-1, B-2 or both; dates and itinerary",
    bais: "Purpose and itinerary review",
  },
  {
    step: "Gather documents",
    what: "Passport, trip plan, invitation or employer letter, proof of ties and funds",
    bais: "Document checklist",
  },
  {
    step: "DS-160",
    what: "The online application (the applicant signs and answers truthfully)",
    bais: "DS-160 information prepared for your review",
  },
  {
    step: "Pay fees",
    what: "Visa fee, and a bond if your nationality is designated",
    bais: "Fee and bond guidance",
  },
  {
    step: "Book the interview",
    what: "Through the State Department's system",
    bais: "Guidance (BAIS doesn't sell appointments)",
  },
  {
    step: "Interview",
    what: "Clear purpose, honest answers, consistent documents",
    bais: "Interview preparation",
  },
  {
    step: "Decision, travel, I-94",
    what: "CBP inspection; follow your conditions; extend (I-539) or leave on time",
    bais: "Extension and change-of-status planning",
  },
];

export function B1b2Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The B-1/B-2 Process: Step by Step
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
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
                  key={item.step}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-bold text-maroon">{index + 1}</td>
                  <td className="p-3 font-semibold text-ink">{item.step}</td>
                  <td className="p-3 text-body">{item.what}</td>
                  <td className="p-3 text-body/70">{item.bais}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Start My Free Fit Check
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
