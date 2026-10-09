import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  { label: "For", b1: "Business visits", b2: "Tourism, family, medical", esta: "Both, for eligible countries" },
  { label: "Who", b1: "Most nationalities", b2: "Most nationalities", esta: "Citizens of Visa Waiver countries" },
  {
    label: "Stay",
    b1: "Up to 6 months (extendable)",
    b2: "Up to 6 months (extendable)",
    esta: "Up to 90 days, no extension",
  },
  { label: "Interview", b1: "Usually yes", b2: "Usually yes", esta: "No" },
  { label: "Official site", b1: "travel.state.gov", b2: "travel.state.gov", esta: "esta.cbp.dhs.gov" },
];

export function B1b2CompareOptions() {
  return (
    <section id="which-option" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Which option fits your trip?
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          B-1 vs B-2 vs ESTA
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">B-1</th>
                <th className="p-3 font-bold text-ink">B-2</th>
                <th className="p-3 font-bold text-ink">ESTA (Visa Waiver)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className="p-3 text-body">{row.b1}</td>
                  <td className="p-3 text-body">{row.b2}</td>
                  <td className="p-3 text-body">{row.esta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Apply for ESTA only on the official CBP site. BAIS doesn&apos;t
          sell ESTA.
        </p>
      </Container>
    </section>
  );
}
