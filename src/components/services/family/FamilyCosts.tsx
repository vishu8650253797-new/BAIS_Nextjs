import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const fees = [
  { stage: "Petition", item: "I-130", fee: "$625 online · $675 paper" },
  { stage: "Consular", item: "NVC immigrant visa application processing", fee: "$325" },
  { stage: "Consular", item: "NVC affidavit of support review", fee: "$120" },
  { stage: "Consular", item: "Medical exam, civil documents, travel", fee: "Varies" },
  { stage: "In the U.S.", item: "I-485", fee: "$1,440" },
  { stage: "In the U.S.", item: "I-765 work permit (with a pending I-485)", fee: "$260" },
  { stage: "In the U.S.", item: "I-131 travel document", fee: "$630" },
];

export function FamilyCosts() {
  return (
    <section id="costs" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Costs
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Does a Family Green Card Cost? (Government Fees)
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Stage</th>
                <th className="p-3 font-bold text-ink">Item</th>
                <th className="p-3 font-bold text-ink">Fee</th>
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

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          <strong className="text-body">BAIS document preparation fees</strong>{" "}
          are quoted in writing after your free review. Government fees
          change; confirm before paying. A USCIS immigrant fee is also paid
          after an immigrant visa is approved; confirm the current amount.
        </p>
      </Container>
    </section>
  );
}
