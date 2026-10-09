import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const stages = [
  { stage: "I-130 filed by a U.S. citizen", timing: "Roughly 1+ year (recent USCIS medians around 14 months)" },
  { stage: "I-130 filed by a green card holder", timing: "Often 3 years or more (recent medians around 35 months)" },
  {
    stage: "Visa wait (preference categories)",
    timing: "From months (F2A) to years or decades (F3, F4, Mexico, Philippines, India)",
  },
  {
    stage: "NVC and interview (consular)",
    timing: "Months after approval and a current date. Currently disrupted by the worldwide interview pause.",
  },
  { stage: "I-485 (inside the U.S.)", timing: "Many months; interviews are common" },
];

export function FamilyTimeline() {
  return (
    <section id="timeline" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Timeline
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          How Long Does a Family Green Card Take?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Stage</th>
                <th className="p-3 font-bold text-ink">Typical timing*</th>
              </tr>
            </thead>
            <tbody>
              {stages.map((row, index) => (
                <tr
                  key={row.stage}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.stage}</td>
                  <td className="p-3 text-body">{row.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          *Estimates only. Check USCIS Case Processing Times and
          travel.state.gov.
        </p>
      </Container>
    </section>
  );
}
