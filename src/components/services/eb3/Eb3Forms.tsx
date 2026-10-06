import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const forms = [
  { form: "ETA-9141", filedWith: "DOL (FLAG)", purpose: "Prevailing wage determination" },
  { form: "ETA-9089 (+ Appendix A as applicable)", filedWith: "DOL (FLAG)", purpose: "PERM labor certification application" },
  { form: "Recruitment report & Notice of Filing", filedWith: "Employer file", purpose: "Audit documentation (kept 5 years)" },
  { form: "I-140", filedWith: "USCIS", purpose: "Immigrant petition for alien workers" },
  { form: "I-907", filedWith: "USCIS", purpose: "Premium processing request" },
  { form: "I-485", filedWith: "USCIS", purpose: "Adjustment of status" },
  { form: "I-485 Supplement J", filedWith: "USCIS", purpose: "Job offer confirmation and portability" },
  { form: "I-765 / I-131", filedWith: "USCIS", purpose: "Work permit / travel document" },
  { form: "I-693", filedWith: "USCIS", purpose: "Medical exam" },
  { form: "DS-260", filedWith: "Department of State", purpose: "Immigrant visa (consular processing)" },
  { form: "I-129", filedWith: "USCIS", purpose: "H-1B extensions beyond 6 years (AC21)" },
];

export function Eb3Forms() {
  return (
    <section id="forms" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Forms
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Every Form in the EB-3 Process
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Form</th>
                <th className="p-3 font-bold text-ink">Filed with</th>
                <th className="p-3 font-bold text-ink">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((row, index) => (
                <tr
                  key={row.form}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.form}</td>
                  <td className="p-3 text-body">{row.filedWith}</td>
                  <td className="p-3 text-body">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
