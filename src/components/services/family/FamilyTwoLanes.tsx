import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  {
    label: "Who",
    ir: "Spouses, unmarried children under 21 and parents of U.S. citizens",
    pref: "Other relatives (see above)",
  },
  { label: "Visa wait", ir: "None. No annual cap.", pref: "Yes, set by your priority date", good: "ir" },
  {
    label: "Steps",
    ir: "I-130 → processing → green card",
    pref: "I-130 → wait for your date → processing → green card",
  },
  {
    label: "Green card application inside the U.S.?",
    ir: "Often yes, if the relative was lawfully admitted",
    pref: "Only when the date is current and other rules are met",
  },
];

export function FamilyTwoLanes() {
  return (
    <section id="two-lanes" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Two lanes
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Immediate Relatives vs Family Preference Categories
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">Immediate relatives (IR)</th>
                <th className="p-3 font-bold text-ink">Family preference (F1–F4)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className={`p-3 ${row.good === "ir" ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.ir}
                  </td>
                  <td className="p-3 text-body">{row.pref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
