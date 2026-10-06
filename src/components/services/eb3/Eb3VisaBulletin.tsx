import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const table = [
  { country: "Most countries & Mexico", finalAction: "May 15, 2024", filing: "August 1, 2024", otherWorkers: "January 1, 2022" },
  { country: "China (mainland-born)", finalAction: "January 8, 2022", filing: "April 1, 2024", otherWorkers: "October 1, 2019" },
  { country: "India", finalAction: "January 1, 2014", filing: "January 15, 2015", otherWorkers: "January 1, 2014" },
  { country: "Philippines", finalAction: "August 15, 2023", filing: "January 1, 2024", otherWorkers: "January 1, 2022" },
];

export function Eb3VisaBulletin() {
  return (
    <section id="visa-bulletin" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Visa Bulletin
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-3 Wait Time by Country (October 2026 Visa Bulletin)
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Country of birth</th>
                <th className="p-3 font-bold text-ink">EB-3 Final Action</th>
                <th className="p-3 font-bold text-ink">EB-3 Dates for Filing</th>
                <th className="p-3 font-bold text-ink">Other Workers Final Action</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, index) => (
                <tr
                  key={row.country}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 text-body">{row.country}</td>
                  <td className="p-3 font-semibold text-ink">{row.finalAction}</td>
                  <td className="p-3 text-body">{row.filing}</td>
                  <td className="p-3 text-body">{row.otherWorkers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="text-sm leading-relaxed text-body">
              USCIS is accepting adjustment filings under{" "}
              <strong className="text-ink">Dates for Filing</strong> in
              October 2026.
            </p>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="text-sm leading-relaxed text-body">
              <strong className="text-ink">EB-2 vs EB-3:</strong> EB-2 is
              ahead for most countries (January 1, 2025); EB-3 India
              (January 1, 2014) is slightly ahead of EB-2 India (November 1,
              2013). A second I-140 in EB-3 (&quot;downgrade&quot;) can keep
              the priority date.
            </p>
          </FadeIn>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Visa Bulletin dates change monthly and can retrogress. Check
          travel.state.gov.
        </p>
      </Container>
    </section>
  );
}
