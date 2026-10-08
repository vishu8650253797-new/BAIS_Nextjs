import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const notices = [
  {
    notice: "RFE",
    meaning: "USCIS needs more evidence before deciding",
    weDo: "Gap analysis, evidence plan, one complete response package",
  },
  {
    notice: "NOID",
    meaning: "USCIS intends to deny and explains why; you can rebut",
    weDo: "A focused rebuttal package built around each stated reason",
  },
  {
    notice: "NOIR",
    meaning: "USCIS intends to revoke an approval",
    weDo: "Rebuttal and evidence package",
  },
  {
    notice: "Denial",
    meaning: "The case was refused",
    weDo: "Review the reasons, then options: refile, motion, appeal",
  },
  {
    notice: "Revocation",
    meaning: "An approval was revoked",
    weDo: "Review and options (short deadlines)",
  },
  {
    notice: "Denial without an RFE (possible since August 5, 2026)",
    meaning: "USCIS denied without a second chance",
    weDo: "Same as denial; see 2026 updates",
  },
];

export function RfeNoticeTypes() {
  return (
    <section id="notices" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Notice types
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          RFE, NOID, NOIR or Denial: What Each Notice Means
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Notice</th>
                <th className="p-3 font-bold text-ink">Plain-English meaning</th>
                <th className="p-3 font-bold text-ink">What we do</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((row, index) => (
                <tr
                  key={row.notice}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.notice}</td>
                  <td className="p-3 text-body">{row.meaning}</td>
                  <td className="p-3 text-body">{row.weDo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
