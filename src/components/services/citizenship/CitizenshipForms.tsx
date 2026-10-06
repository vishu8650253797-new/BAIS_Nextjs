import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const forms = [
  { form: "N-400", purpose: "Application for Naturalization", who: "Green card holders becoming citizens" },
  { form: "I-912", purpose: "Request for Fee Waiver", who: "Low-income applicants (income or benefits)" },
  {
    form: "N-648",
    purpose: "Medical certification for a disability exception",
    who: "Those unable to meet English or civics because of a disability",
  },
  {
    form: "N-470",
    purpose: "Preserve residence while working abroad",
    who: "Certain employees of U.S. organizations abroad",
  },
  {
    form: "N-600",
    purpose: "Certificate of Citizenship",
    who: "People who became citizens through a U.S. citizen parent",
  },
  { form: "N-600K", purpose: "Citizenship for children living abroad", who: "Children of U.S. citizens residing outside the U.S." },
  { form: "N-565", purpose: "Replace a certificate", who: "Lost, damaged or name-changed certificates" },
  { form: "N-336", purpose: "Hearing on a denied N-400", who: "Applicants appealing a denial" },
  { form: "I-751", purpose: "Remove conditions on a 2-year green card", who: "Handled before or alongside naturalization" },
  { form: "AR-11", purpose: "Change of address", who: "Anyone who moves while the case is pending" },
];

export function CitizenshipForms() {
  return (
    <section id="forms" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Forms
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          U.S. Citizenship Forms: Which One Do You Need?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Form</th>
                <th className="p-3 font-bold text-ink">What it&apos;s for</th>
                <th className="p-3 font-bold text-ink">Who uses it</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((row, index) => (
                <tr
                  key={row.form}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.form}</td>
                  <td className="p-3 text-body">{row.purpose}</td>
                  <td className="p-3 text-body">{row.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <FadeIn delay={120} className="mt-6 rounded-2xl bg-cream p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <h3 className="text-base font-bold text-ink">N-400 fees (check before filing)</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            <strong className="text-ink">$760</strong> on paper or{" "}
            <strong className="text-ink">$710</strong> online ·{" "}
            <strong className="text-ink">Reduced fee</strong> for many
            households earning up to 400% of the federal poverty guidelines
            · <strong className="text-ink">Fee waiver</strong> (Form I-912)
            for lower incomes or means-tested benefits. USCIS payments are
            now made electronically for most filings.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
