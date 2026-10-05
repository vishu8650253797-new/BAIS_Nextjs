import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const studentPoints = [
  "Sponsor: usually your U.S. university or an exchange organization (issues the DS-2019).",
  "Funding: substantial funding from a source other than personal funds, which is the key difference from F-1.",
  "Academic Training: authorized by your sponsor, generally up to 18 months (36 months total for postdocs).",
  "J-2 family may apply for work authorization.",
];

const internTrainee = [
  {
    label: "Eligibility",
    intern: "Enrolled in, or graduated within 12 months from, a foreign post-secondary institution",
    trainee: "Foreign degree + 1 year of experience abroad, or 5 years of experience abroad",
  },
  { label: "Maximum", intern: "12 months", trainee: "18 months (12 hospitality)" },
  { label: "Plan", intern: "DS-7002", trainee: "DS-7002" },
];

export function J1StudentsTrainees() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent" id="students">
              Students
            </p>
            <h2 className="scroll-mt-24 text-2xl font-bold text-ink sm:text-3xl">
              J-1 for Students
            </h2>
            <ul className="mt-5 space-y-3">
              {studentPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-maroon" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={80}>
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent" id="trainees">
              Trainees &amp; interns
            </p>
            <h2 className="scroll-mt-24 text-2xl font-bold text-ink sm:text-3xl">
              J-1 Interns &amp; Trainees
            </h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cream text-left">
                    <th className="p-3 font-bold text-ink"></th>
                    <th className="p-3 font-bold text-ink">Intern</th>
                    <th className="p-3 font-bold text-ink">Trainee</th>
                  </tr>
                </thead>
                <tbody>
                  {internTrainee.map((row, index) => (
                    <tr
                      key={row.label}
                      className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                    >
                      <td className="p-3 font-semibold text-ink">{row.label}</td>
                      <td className="p-3 text-body">{row.intern}</td>
                      <td className="p-3 text-body">{row.trainee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={120} className="mt-8 rounded-2xl bg-cream p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <h3 className="text-base font-bold text-ink">
            For host companies: what the DS-7002 training plan must show
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            A structured plan with phases, goals and supervision · skills
            and how they&apos;re evaluated · supervisor qualifications ·
            hours and stipend · <strong>training, not ordinary employment</strong>,
            and no displacement of U.S. workers.{" "}
            <strong>BAIS helps:</strong> drafting DS-7002 content, preparing
            the supporting documents sponsors request, and helping you meet
            evaluation and site requirements.
          </p>
        </FadeIn>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Hosting a J-1 Trainee or Intern? Get Training-Plan Help
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
