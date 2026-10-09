import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "Eligibility and category",
    what: "Who can file, which category",
    bais: "Free I-130 Evidence Map",
  },
  {
    step: "Gather evidence",
    what: "For your exact relationship",
    bais: "Relationship-specific checklist",
  },
  {
    step: "Prepare the I-130",
    what: "And the I-130A for a spouse",
    bais: "Form preparation for your review; name and date consistency check",
  },
  {
    step: "File",
    what: "Online or by mail, with the fee",
    bais: "Filing review",
  },
  {
    step: "Receipt notice",
    what: "Your priority date and case number",
    bais: "Case tracking",
  },
  {
    step: "USCIS review",
    what: "Possible RFE or interview",
    bais: "RFE support",
  },
  {
    step: "Approval",
    what: "Abroad → National Visa Center; in the U.S. and eligible → I-485 (sometimes filed with the I-130)",
    bais: "Next-step plan",
  },
  {
    step: "Green card path",
    what: "Consular processing or adjustment",
    bais: "See the Family hub",
  },
];

export function I130Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The I-130 Process: Step by Step
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
          Start My Free I-130 Evidence Map
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
