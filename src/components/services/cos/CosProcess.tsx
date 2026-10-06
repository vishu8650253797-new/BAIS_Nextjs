import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "Free case review",
    what: "Current status, I-94 date, goal, intent timeline, risks",
    deliverable: "A clear yes, no or \"depends\"",
  },
  {
    step: "Strategy",
    what: "Change of status in the U.S. vs consular processing; I-539 vs employer I-129",
    deliverable: "A written recommendation",
  },
  {
    step: "No-Gap Status Plan",
    what: "I-94 expiry, filing date, start date, grace periods, travel limits",
    deliverable: "Your written timeline (our USP)",
  },
  {
    step: "Documents",
    what: "A tailored checklist; collection and review",
    deliverable: "An organized, indexed package",
  },
  {
    step: "Forms & statements",
    what: "I-539 (and dependents) or I-129 support; an intent cover letter",
    deliverable: "A file-ready application",
  },
  {
    step: "Filing",
    what: "Online or paper; receipt notice; biometrics if requested",
    deliverable: "Confirmation and tracking",
  },
  {
    step: "While pending",
    what: "Maintain status; no new activity; travel guidance",
    deliverable: "Check-ins at key dates",
  },
  {
    step: "RFE",
    what: "A focused response if USCIS requests more",
    deliverable: "An RFE response package",
  },
  {
    step: "Decision",
    what: "New I-94 on approval; if denied: departure, a consular visa or a motion",
    deliverable: "A next-step plan",
  },
];

export function CosProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The Change of Status Process: Step by Step, With BAIS
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">#</th>
                <th className="p-3 font-bold text-ink">Step</th>
                <th className="p-3 font-bold text-ink">What happens</th>
                <th className="p-3 font-bold text-ink">BAIS deliverable</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((item, index) => (
                <tr
                  key={item.step}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-bold text-maroon">{index + 1}</td>
                  <td className="p-3 font-semibold text-ink">{item.step}</td>
                  <td className="p-3 text-body">{item.what}</td>
                  <td className="p-3 text-body/70">{item.deliverable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Processing times vary by form and service center. Filing
          doesn&apos;t authorize starting the new activity.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Get Your Free No-Gap Status Plan
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
