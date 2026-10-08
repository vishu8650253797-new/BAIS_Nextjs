import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const options = [
  {
    option: "Refile",
    what: "A new petition or application with a stronger record",
    when: "The reason is fixable and the timeline allows it",
  },
  {
    option: "Motion to reopen",
    what: "Asks the same office to reopen, based on new facts and evidence",
    when: "You have new, relevant evidence",
  },
  {
    option: "Motion to reconsider",
    what: "Asks the same office to reconsider because it applied the law or policy incorrectly on the record",
    when: "The decision looks wrong on the existing record",
  },
  {
    option: "Appeal to the AAO",
    what: "Asks the Administrative Appeals Office to review",
    when: "Your notice says an appeal is allowed",
  },
  {
    option: "Other routes",
    what: "Consular options, other categories or federal court",
    when: "Case-specific; may need an attorney",
  },
];

const notes = [
  "Form I-290B: one form for an appeal, a motion to reopen, a motion to reconsider, or a combined motion. Fee $800 (2026; confirm). Fee waivers exist in limited cases; fees aren't refunded.",
  "Deadline: generally 30 days (33 if mailed). Some revocation appeals: 15 days (18 if mailed). Your notice states whether you can appeal, file a motion, or both.",
  "Status risk: a motion or appeal doesn't automatically protect your status. After a denial you may lose status or work authorization, and unlawful presence can begin to accrue. Get case-specific advice quickly.",
];

export function RfeDenials() {
  return (
    <section id="denials" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Denials &amp; motions
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Case Denied? Your Options: Refile, Motion or Appeal
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Option</th>
                <th className="p-3 font-bold text-ink">What it is</th>
                <th className="p-3 font-bold text-ink">When it fits</th>
              </tr>
            </thead>
            <tbody>
              {options.map((row, index) => (
                <tr
                  key={row.option}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.option}</td>
                  <td className="p-3 text-body">{row.what}</td>
                  <td className="p-3 text-body">{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {notes.map((note, index) => (
            <FadeIn key={note} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <p className="text-sm leading-relaxed text-body">{note}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-body">
          <strong className="text-ink">How BAIS helps:</strong> plain-English
          denial review · options comparison · I-290B data, evidence and
          exhibits · new expert letters and evaluations that answer the
          stated reasons.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Get a Denial Review
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
