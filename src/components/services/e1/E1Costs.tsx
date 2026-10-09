import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const fees = [
  { route: "Consular (abroad)", fee: "$315 per applicant + a reciprocity fee for some nationalities" },
  {
    route: "USCIS I-129 (in the U.S.)",
    fee: "$1,015 paper · $965 online · $510 small employer / nonprofit, plus Asylum Program Fee $600 ($300 small, $0 nonprofit)",
  },
  { route: "Premium processing (optional)", fee: "$2,965, decision in 15 business days" },
  { route: "Spouse and children inside the U.S. (I-539)", fee: "$470 by mail · $420 online (confirm)" },
];

export function E1Costs() {
  return (
    <section id="costs" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Costs
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          E-1 Costs (Government Fees)
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Route</th>
                <th className="p-3 font-bold text-ink">Fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row, index) => (
                <tr
                  key={row.route}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.route}</td>
                  <td className="p-3 text-body">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          <strong className="text-body">No minimum investment.</strong> Not
          included: legal, evidence, setup and trade costs. BAIS fees are
          quoted in writing after your free review. Fees change; confirm
          before paying.
        </p>
      </Container>
    </section>
  );
}
