import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const waitTimes = [
  { country: "Most countries", finalAction: "Current", filing: "Current", good: true },
  { country: "India", finalAction: "Feb 1, 2023", filing: "Jul 1, 2024" },
  { country: "China", finalAction: "Jul 1, 2023", filing: "Jul 1, 2024" },
];

const fees = [
  { item: "I-140", amount: "$715" },
  { item: "Asylum Program Fee", amount: "$600 · $300 small employer · $0 nonprofit (including universities)" },
  { item: "Premium processing (optional)", amount: "$2,965, decision in 15 business days" },
  { item: "I-485 / I-765 / I-131", amount: "$1,440 / $260 / $630" },
];

export function Eb1bWaitTimesCosts() {
  return (
    <section id="wait-times" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Wait times and costs
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1B Wait Times and Costs (October 2026)
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">EB-1 (includes EB-1B)</th>
                <th className="p-3 font-bold text-ink">Final Action Date</th>
                <th className="p-3 font-bold text-ink">Dates for Filing</th>
              </tr>
            </thead>
            <tbody>
              {waitTimes.map((row, index) => (
                <tr
                  key={row.country}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.country}</td>
                  <td className={`p-3 ${row.good ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.finalAction}
                  </td>
                  <td className={`p-3 ${row.good ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.filing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-sm leading-relaxed text-body">
          USCIS is using the <strong className="text-ink">Dates for Filing</strong>{" "}
          chart for employment-based adjustment filings in October 2026. For
          comparison, EB-2 India is November 1, 2013, so EB-1B is a major
          time-saver for India-born researchers. Dates change monthly and
          can retrogress.
        </p>

        <FadeIn delay={120} className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Government fee</th>
                <th className="p-3 font-bold text-ink">Amount</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row, index) => (
                <tr
                  key={row.item}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.item}</td>
                  <td className="p-3 text-body">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Who pays which fees is arranged between employer and employee;
          confirm before filing. BAIS fees are quoted in writing after your
          free review. Fees change.
        </p>
      </Container>
    </section>
  );
}
