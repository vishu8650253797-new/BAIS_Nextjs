import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const fees = [
  { service: "Surrender of Indian passport", fee: "$40 + $3 community welfare fee + service charge" },
  {
    service: "New OCI card",
    fee: "$275 + $3 community welfare fee + service charge (about $19) = roughly $297",
  },
  { service: "Renouncing OCI", fee: "about $25 + $3 + service charge" },
  { service: "Courier", fee: "Extra" },
];

export function OciCosts() {
  return (
    <section id="costs" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Costs
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          OCI and Surrender Costs From the U.S. (2026)
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Service</th>
                <th className="p-3 font-bold text-ink">Fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row, index) => (
                <tr
                  key={row.service}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.service}</td>
                  <td className="p-3 text-body">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Fees vary by mission and change.{" "}
          <strong className="text-body">
            Confirm on the Indian embassy or consulate website.
          </strong>{" "}
          BAIS fees are quoted in writing after your free review.
        </p>
      </Container>
    </section>
  );
}
