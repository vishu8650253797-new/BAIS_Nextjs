import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "Eligibility review",
    what: "Country, ownership, budget",
    bais: "E-2 Readiness Review (free)",
  },
  {
    step: "Plan the business",
    what: "Type, location, structure, business plan",
    bais: "Review the plan against E-2 standards",
  },
  {
    step: "Set up and commit",
    what: "Form the company, EIN, bank account, lease or franchise agreement; spend or irrevocably commit funds",
    bais: "Sequencing checklist; source and path-of-funds binder",
  },
  {
    step: "Build the evidence",
    what: "Ownership, investment, lawful funds, your role, hiring plan",
    bais: "Indexed evidence package",
  },
  {
    step: "File",
    what: "Abroad: DS-160 + DS-156E at a consulate. In the U.S.: Form I-129 + E-1/E-2 supplement (change of status)",
    bais: "Application preparation",
  },
  {
    step: "Interview",
    what: "Most applicants attend in person",
    bais: "Interview preparation",
  },
  {
    step: "Decision and entry",
    what: "Visa issued, or USCIS approval",
    bais: "Next-step plan",
  },
  {
    step: "Run, extend, renew",
    what: "Operate, hire, keep records; renew before status ends",
    bais: "Compliance and renewal calendar",
  },
];

export function E2Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The E-2 Process: Step by Step
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

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Applying inside the U.S. gives a change of status, not a visa;
          you&apos;d still need a visa stamp at a consulate to re-enter
          after travel.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Start My Free E-2 Readiness Review
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
