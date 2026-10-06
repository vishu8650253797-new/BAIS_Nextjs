import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const stages = [
  { stage: "Preparation with BAIS", timing: "1–3 weeks" },
  { stage: "Filing → receipt notice", timing: "1–2 weeks" },
  { stage: "Biometrics appointment", timing: "A few weeks after filing (USCIS may reuse prior fingerprints)" },
  { stage: "Interview", timing: "Usually several months after filing; depends on your field office" },
  { stage: "Oath ceremony", timing: "Sometimes the same day; often within weeks after approval" },
];

export function CitizenshipTimeline() {
  return (
    <section id="timeline" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Timeline
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          How Long Does U.S. Citizenship Take?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
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
          *Times vary by USCIS field office and change often. Bay Area
          applicants are usually interviewed at the{" "}
          <strong className="text-body">
            USCIS San Francisco or San Jose field office
          </strong>
          , based on ZIP code. Check egov.uscis.gov/processing-times.
        </p>
      </Container>
    </section>
  );
}
