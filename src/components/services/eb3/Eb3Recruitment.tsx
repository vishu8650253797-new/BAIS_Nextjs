import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "State Workforce Agency job order (CalJOBS in California), 30 days",
    professional: true,
    nonProfessional: true,
  },
  {
    step: "Two Sunday newspaper ads in a newspaper of general circulation",
    professional: true,
    nonProfessional: true,
  },
  {
    step: "Notice of Filing posted 10 consecutive business days + in-house media",
    professional: true,
    nonProfessional: true,
  },
  {
    step: "3 additional steps (employer website, job search website, job fair, campus recruiting, trade organization, private recruiter, employee referral, campus placement, local or ethnic paper, radio or TV)",
    professional: true,
    nonProfessional: false,
  },
];

const notes = [
  { label: "Timing", text: "recruitment generally starts no more than 180 days before filing, with a 30-day quiet period before the ETA-9089." },
  { label: "Who pays", text: "DOL rules require the employer to pay PERM costs; they can't be passed to the employee." },
  { label: "Audits", text: "DOL can audit any case. Tear sheets, dated proof and the recruitment report are your best defense. Keep the file 5 years." },
];

export function Eb3Recruitment() {
  return (
    <section id="recruitment" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          PERM step 2
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          PERM Step 2: Recruitment, Testing the U.S. Labor Market
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Recruitment step</th>
                <th className="p-3 font-bold text-ink">Professional jobs</th>
                <th className="p-3 font-bold text-ink">Non-professional</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((row, index) => (
                <tr
                  key={row.step}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 text-body">{row.step}</td>
                  <td className="p-3 text-center">
                    {row.professional ? (
                      <Check className="mx-auto size-4 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <span className="text-body/40">—</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {row.nonProfessional ? (
                      <Check className="mx-auto size-4 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <span className="text-body/40">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {notes.map((note, index) => (
            <FadeIn key={note.label} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <p className="text-sm leading-relaxed text-body">
                  <strong className="text-ink">{note.label}:</strong> {note.text}
                </p>
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
          Get an Audit-Ready PERM Recruitment Plan
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
