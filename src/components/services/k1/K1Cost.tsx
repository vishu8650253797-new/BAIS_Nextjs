import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const fees = [
  { stage: "Petition", item: "Form I-129F", fee: "$675" },
  { stage: "Visa", item: "DS-160 / K visa application", fee: "$265" },
  { stage: "Visa", item: "Medical exam (panel physician)", fee: "Varies by country" },
  { stage: "Green card", item: "Form I-485", fee: "$1,440" },
  { stage: "Green card", item: "Form I-765 work permit (with pending I-485)", fee: "$260" },
  { stage: "Green card", item: "Form I-131 travel document", fee: "$630" },
  { stage: "Conditions", item: "Form I-751 (later)", fee: "Check current fee" },
];

export function K1Cost() {
  return (
    <section className="bg-cream py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          How Much Does a K-1 Visa Cost in 2026?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Stage</th>
                <th className="p-3 font-bold text-ink">Item</th>
                <th className="p-3 font-bold text-ink">Government fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row, index) => (
                <tr
                  key={row.item}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.stage}</td>
                  <td className="p-3 text-body">{row.item}</td>
                  <td className="p-3 font-semibold text-maroon">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-sm leading-relaxed text-body">
          <strong className="text-ink">BAIS document preparation fees</strong>{" "}
          are quoted in writing after your free consultation.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-body/60">
          Government fees are set by USCIS and the Department of State and
          change periodically.
        </p>
      </Container>
    </section>
  );
}
