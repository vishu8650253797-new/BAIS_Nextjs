import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const types = [
  {
    type: "Foreign-degree (credential) evaluation",
    when: "USCIS questions whether a foreign degree equals a U.S. degree (H-1B, EB-2, EB-3)",
    what: "A written U.S.-equivalency evaluation by a qualified evaluator",
  },
  {
    type: "Expertise / work-experience evaluation",
    when: "Experience stands in for a degree, or the case relies on specialized knowledge",
    what: "A qualified academic's written opinion on training and expertise",
  },
  {
    type: "Occupation / specialty-occupation evaluation",
    when: "USCIS questions whether the job needs a specific degree",
    what: "An expert's analysis of the role and the knowledge it requires",
  },
  {
    type: "Course-by-course analysis",
    when: "Degree equivalency is close or disputed",
    what: "A detailed review of the transcript and coursework",
  },
];

export function RfeEvaluations() {
  return (
    <section id="evaluations" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Academic evaluations
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Academic Evaluations: Proving the Degree and the Expertise
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Type</th>
                <th className="p-3 font-bold text-ink">When it helps</th>
                <th className="p-3 font-bold text-ink">What it is</th>
              </tr>
            </thead>
            <tbody>
              {types.map((row, index) => (
                <tr
                  key={row.type}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.type}</td>
                  <td className="p-3 text-body">{row.when}</td>
                  <td className="p-3 text-body">{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          An evaluation is an opinion. USCIS isn&apos;t bound by it and may
          give it little weight if it lacks a clear basis. It supports, and
          doesn&apos;t replace, primary documents. We don&apos;t promise a
          particular conclusion.
        </p>
      </Container>
    </section>
  );
}
