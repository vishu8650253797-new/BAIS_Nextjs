import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "Eligibility review",
    what: "Country, ownership, trade type",
    bais: "Free Trade-Share Test",
  },
  {
    step: "Trade analysis",
    what: "Compute your U.S.–treaty-country share (12–24 months of trade)",
    bais: "Trade-share calculation and gap review",
  },
  {
    step: "Set up the U.S. side",
    what: "A U.S. office, branch or subsidiary, with staffing and a lease",
    bais: "Sequencing checklist",
  },
  {
    step: "Build the evidence",
    what: "Invoices, contracts, bills of lading, customs and bank records, financials",
    bais: "Indexed trade-evidence binder",
  },
  {
    step: "Define roles",
    what: "Owner or executive, and any employees (same nationality; executive or essential skills)",
    bais: "Role and org-chart documents",
  },
  {
    step: "File",
    what: "Abroad: DS-160 + DS-156E at a consulate. In the U.S.: Form I-129 + E-1/E-2 supplement",
    bais: "Application preparation",
  },
  {
    step: "Interview and decision",
    what: "Most applicants attend in person",
    bais: "Interview preparation",
  },
  {
    step: "Run the trade, then renew",
    what: "Keep records and trade volume steady; renew before status ends",
    bais: "Renewal calendar",
  },
];

export function E1Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The E-1 Process: Step by Step
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
          Start My Free Trade-Share Test
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
