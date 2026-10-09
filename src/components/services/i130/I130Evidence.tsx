import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  {
    relationship: "Spouse",
    evidence:
      "Marriage certificate · proof all prior marriages ended · Form I-130A · photos · evidence the marriage is genuine (joint lease, accounts, insurance, photos over time, messages)",
  },
  {
    relationship: "Child",
    evidence:
      "Birth certificate naming the parent · stepchild: marriage certificate before the child's 18th birthday · adopted: adoption decree (generally before age 16)",
  },
  {
    relationship: "Parent",
    evidence: "Your birth certificate naming the parent (petitioner must be 21+)",
  },
  {
    relationship: "Brother or sister",
    evidence: "Both birth certificates showing at least one common parent (petitioner must be 21+)",
  },
  {
    relationship: "Everyone",
    evidence:
      "Proof of your status (U.S. passport, naturalization certificate or green card) · name-change documents · certified translations · consistent names and dates",
  },
];

export function I130Evidence() {
  return (
    <section id="evidence" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Evidence
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Proves Each Relationship?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Relationship</th>
                <th className="p-3 font-bold text-ink">Key evidence</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.relationship}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.relationship}</td>
                  <td className="p-3 text-body">{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
