import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const forms = [
  { form: "I-130", filedWith: "USCIS", purpose: "Petition for Alien Relative: proves the relationship" },
  { form: "I-130A", filedWith: "USCIS", purpose: "Supplemental information for a spouse" },
  { form: "DS-260", filedWith: "State Department (NVC)", purpose: "Immigrant visa application (consular processing)" },
  { form: "I-864", filedWith: "USCIS or NVC", purpose: "Affidavit of Support: the sponsor's financial promise" },
  { form: "I-485", filedWith: "USCIS", purpose: "Application to adjust status (green card)" },
  { form: "I-693", filedWith: "USCIS", purpose: "Medical exam" },
  { form: "I-765 / I-131", filedWith: "USCIS", purpose: "Work permit / travel document while the I-485 is pending" },
  { form: "I-751", filedWith: "USCIS", purpose: "Remove conditions on a 2-year green card" },
  { form: "I-129F", filedWith: "USCIS", purpose: "Fiancé(e) petition (K-1)" },
  { form: "N-400", filedWith: "USCIS", purpose: "Citizenship, later" },
];

export function FamilyForms() {
  return (
    <section id="forms" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Forms
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Every Form in a Family Case
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
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

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Check the current edition of every form before filing. USCIS
          published a new Form I-864 edition (08/24/26) on August 31, 2026,
          with only a short grace period for the older edition.
        </p>
      </Container>
    </section>
  );
}
