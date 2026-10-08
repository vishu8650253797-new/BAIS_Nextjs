import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const table = [
  {
    notice: "RFE",
    time: "Up to 12 weeks. USCIS may set a shorter date.",
    important: "The date printed on your notice controls. Don't assume 12 weeks.",
  },
  { notice: "NOID", time: "30 days", important: "No extensions" },
  {
    notice: "Notice of Intent to Revoke (NOIR)",
    time: "Stated on the notice (generally 30 days)",
    important: "Read the notice",
  },
  {
    notice: "Denial: motion or appeal (I-290B)",
    time: "30 calendar days from the decision (33 if mailed)",
    important: "Some revocation appeals: 15 days (18 if mailed). Late filings are rarely accepted.",
  },
];

const rules = [
  { title: "No extensions", description: "USCIS can't grant more time than the rules allow." },
  {
    title: "One complete package",
    description: "Any response, even partial, may be treated as a request for a decision on the record. Never send installments.",
  },
  { title: "Calendar it today", description: "Count backward: collect, review, print, ship." },
  { title: "Answer every point", description: "An unanswered request can be the reason for a denial." },
  { title: "Keep proof", description: "Tracked delivery and a saved copy." },
];

export function RfeDeadlines() {
  return (
    <section id="deadlines" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          The clock
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Your Deadline Is Fixed: What the Clock Looks Like
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Notice</th>
                <th className="p-3 font-bold text-ink">Maximum response time</th>
                <th className="p-3 font-bold text-ink">Important</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, index) => (
                <tr
                  key={row.notice}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.notice}</td>
                  <td className="p-3 text-body">{row.time}</td>
                  <td className="p-3 font-semibold text-maroon">{row.important}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {rules.map((rule, index) => (
            <FadeIn key={rule.title} delay={index * 50}>
              <div className="h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-8 items-center justify-center rounded-full bg-cream text-sm font-bold text-maroon">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-sm font-bold text-ink">{rule.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-body">{rule.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Send Us Your Notice Today
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
