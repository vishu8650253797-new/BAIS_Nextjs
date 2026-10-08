import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const packages = [
  {
    name: "RFE Triage",
    includes: "Notice review, deadline calendar, gap analysis, written plan",
    bestFor: "Anyone with a notice; the starting point",
  },
  {
    name: "Full RFE / NOID Response",
    includes: "Triage + evidence plan + response package + quality review",
    bestFor: "Most RFE and NOID cases",
  },
  {
    name: "Expert Letters Add-On",
    includes: "Expert match, review, signed independent opinion letters",
    bestFor: "Cases that turn on judgment (O-1, EB-1A, NIW, H-1B)",
  },
  {
    name: "Academic Evaluation Add-On",
    includes: "Credential, expertise or occupation evaluation",
    bestFor: "Degree or experience questions",
  },
  {
    name: "Letter Drafting Support",
    includes: "Questions, structure and fact-checking for letters the signer reviews and signs",
    bestFor: "Collaborator and supervisor letters",
  },
  {
    name: "Denial Review",
    includes: "Reasons explained, options compared, written summary",
    bestFor: "Any denial",
  },
  {
    name: "Motion / Appeal Package",
    includes: "I-290B data, evidence plan, exhibits, new letters and evaluations",
    bestFor: "Cases with grounds for a motion or appeal",
  },
  {
    name: "Law-Firm Back-Office",
    includes: "Evidence, letter coordination, indexing and tracking under attorney direction",
    bestFor: "Attorneys managing RFE volume",
  },
];

export function RfePackages() {
  return (
    <section id="packages" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Service options
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          RFE Service Options
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Package</th>
                <th className="p-3 font-bold text-ink">Includes</th>
                <th className="p-3 font-bold text-ink">Best for</th>
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
                  <td className="p-3 text-body">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Written scope and fee are provided after triage, before work
          starts.
        </p>
      </Container>
    </section>
  );
}
