import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "Eligibility check",
    what: "Experience, offer type, your best 2-of-6 criteria",
    bais: "Free EB-1B Evidence Map",
  },
  {
    step: "Employer commitment",
    what: "A permanent or tenure-track offer and an employer letter",
    bais: "Employer packet for HR / department",
  },
  {
    step: "Evidence map",
    what: "Exhibits matched to each criterion",
    bais: "Indexed exhibit plan",
  },
  {
    step: "Independent expert letters",
    what: "Recognized experts attest to your standing",
    bais: "Matching from our 350+ network; signer-reviewed letters",
  },
  {
    step: "File the I-140",
    what: "The employer is the petitioner; optional premium processing",
    bais: "I-140 preparation",
  },
  {
    step: "Decision or RFE",
    what: "USCIS approves, or asks for more",
    bais: "Targeted RFE response",
  },
  {
    step: "Green card step",
    what: "Form I-485 (or consular) when your date is current, with I-765 and I-131. J-1 holders: check the 2-year rule (212(e))",
    bais: "Adjustment package",
  },
  {
    step: "Green card",
    what: "Permanent residence",
    bais: "Next steps, including citizenship planning",
  },
];

export function Eb1bProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The EB-1B Process: Step by Step
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
          Start My Free Evidence Map
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
