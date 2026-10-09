import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const packages = [
  { name: "Free Family Path Review", includes: "Eligibility check, category, expected wait, written Family Case Map" },
  { name: "I-130 Package", includes: "Petition, I-130A if needed, relationship evidence, filing" },
  {
    name: "Marriage Green Card (I-130 + I-485)",
    includes: "Full package, work and travel permits, medical, interview preparation",
  },
  {
    name: "Consular Processing Support",
    includes: "NVC steps, DS-260, I-864, documents, interview preparation",
  },
  { name: "I-864 Support Planner", includes: "Income check, joint sponsor documents" },
  { name: "Removal of Conditions (I-751)", includes: "Evidence and filing in the 90-day window" },
  { name: "Citizenship Next Step", includes: "N-400 planning for family sponsors" },
];

export function FamilyPackages() {
  return (
    <section id="packages" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Service options
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Family Immigration Service Options
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Package</th>
                <th className="p-3 font-bold text-ink">Includes</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((row, index) => (
                <tr
                  key={row.name}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.name}</td>
                  <td className="p-3 text-body">{row.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Written scope and fee after your free review.
        </p>
      </Container>
    </section>
  );
}
