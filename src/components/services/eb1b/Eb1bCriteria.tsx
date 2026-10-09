import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const criteria = [
  { criterion: "Major prizes or awards", examples: "Research awards, fellowships, named prizes" },
  { criterion: "Membership in selective associations", examples: "Societies that require outstanding achievement" },
  { criterion: "Published material about your work", examples: "Citations and reviews by others, media or commentary" },
  { criterion: "Judging the work of others", examples: "Peer reviewer, grant panelist, thesis committee, editorial board" },
  { criterion: "Original scholarly contributions", examples: "Discoveries, methods, tools, patents that others use" },
  { criterion: "Scholarly books or articles", examples: "Papers in journals with international circulation" },
];

export function Eb1bCriteria() {
  return (
    <section id="criteria" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          The 6 criteria (meet at least 2)
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Evidence Proves &quot;Outstanding&quot;?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Criterion</th>
                <th className="p-3 font-bold text-ink">Examples</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, index) => (
                <tr
                  key={row.criterion}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.criterion}</td>
                  <td className="p-3 text-body">{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Doctoral-program experience counts toward the 3 years if you
          already hold the degree, had full responsibility for a class you
          taught, or your research was recognized as outstanding.
        </p>
      </Container>
    </section>
  );
}
