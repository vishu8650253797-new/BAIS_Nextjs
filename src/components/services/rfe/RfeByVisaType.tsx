import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  {
    case: "H-1B",
    topics: "Specialty occupation; employer-employee relationship; third-party worksite and itinerary; wage level; degree",
    evidence: "Detailed duties letter, client letters, contracts, org charts, degree equivalency evaluation, expert opinion on the occupation",
  },
  {
    case: "L-1A / L-1B",
    topics: "Qualifying relationship; managerial or executive role; specialized knowledge; new-office funding and plans",
    evidence: "Org charts, ownership documents, role descriptions, staffing and payroll, business plan, expert letters",
  },
  {
    case: "O-1",
    topics: "Criteria not met; advisory opinion; itinerary and events",
    evidence: "Criteria-mapped exhibits, expert opinion letters, media and awards, contracts",
  },
  {
    case: "EB-1A",
    topics: "A criterion not met; final merits (sustained acclaim)",
    evidence: "Independent expert letters, citation and impact evidence, comparative data",
  },
  {
    case: "EB-2 NIW",
    topics: "Dhanasar prongs (merit and national importance; well positioned; balance)",
    evidence: "A specific proposed endeavor, independent expert letters, impact evidence, support letters",
  },
  {
    case: "EB-3 / I-140",
    topics: "Ability to pay; qualifications; job requirements",
    evidence: "Tax returns, annual reports or audited financials; experience letters; credential evaluation",
  },
  {
    case: "I-485",
    topics: "Medical, public charge (new standard from September 18, 2026), affidavit of support",
    evidence: "Financial evidence, I-864 support, medical forms",
  },
  {
    case: "I-539 / change of status",
    topics: "Intent, maintenance of status, finances",
    evidence: "I-94, maintenance proof, timeline letter",
  },
  {
    case: "Marriage / family",
    topics: "Bona fide relationship",
    evidence: "Joint documents, photos, affidavits from first-hand witnesses",
  },
  {
    case: "N-400",
    topics: "Good moral character, continuous residence",
    evidence: "Tax transcripts, travel records, court records",
  },
];

export function RfeByVisaType() {
  return (
    <section id="by-visa" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          By visa type
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Common RFE Reasons by Visa Type, and the Evidence That Answers Them
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Case</th>
                <th className="p-3 font-bold text-ink">Typical RFE topics</th>
                <th className="p-3 font-bold text-ink">Evidence we help organize</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.case}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.case}</td>
                  <td className="p-3 text-body">{row.topics}</td>
                  <td className="p-3 text-body">{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Each topic list is general. Your notice controls what USCIS asked.
        </p>
      </Container>
    </section>
  );
}
