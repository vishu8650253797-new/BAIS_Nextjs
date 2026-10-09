import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const fees = [
  { item: "Visa application fee (MRV)", amount: "$185" },
  {
    item: "Visa Integrity Fee",
    amount: "$250, authorized by the 2025 budget law; refundable if you comply. (Confirm whether your consulate is collecting it yet.)",
  },
  {
    item: "Visa bond (designated nationalities, about 50 countries)",
    amount: "$10,000, $15,000 or $20,000, refundable if you comply; no waiver process",
  },
  { item: "Extension (Form I-539)", amount: "$470 by mail · $420 online (confirm)" },
  { item: "ESTA", amount: "$40 (confirm on esta.cbp.dhs.gov)" },
];

export function B1b2Costs() {
  return (
    <section id="costs" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Costs (October 2026)
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          B-1/B-2 Costs
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Item</th>
                <th className="p-3 font-bold text-ink">Amount</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row, index) => (
                <tr
                  key={row.item}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.item}</td>
                  <td className="p-3 text-body">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
