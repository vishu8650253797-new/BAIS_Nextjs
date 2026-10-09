import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  { item: "I-130 filing fee", value: "$625 online · $675 paper" },
  { item: "I-130A (spouse)", value: "Filed with the I-130; no separate fee (confirm)" },
  {
    item: "Later steps",
    value: "NVC fees (consular), or I-485 $1,440 with I-765 $260 and I-131 $630 (in the U.S.)",
  },
  {
    item: "Processing",
    value:
      "National median for immediate-relative petitions about 12.9 months in FY2026 (up from 10.2 in FY2021); USCIS's \"80% of cases\" figures run much longer and vary by office; green card holders' petitions generally take longer. Check USCIS Case Processing Times.",
  },
  { item: "Premium processing", value: "Not offered for the I-130 (confirm)" },
];

export function I130Costs() {
  return (
    <section id="costs" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Costs and timing
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          I-130 Costs and Timing
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Item</th>
                <th className="p-3 font-bold text-ink">Amount or timing</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.item}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.item}</td>
                  <td className="p-3 text-body">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
