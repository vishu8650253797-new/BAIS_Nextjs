import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    what: "Path check: surrender, declaration, minor or fresh OCI",
    bais: "Free OCI Path Check",
  },
  {
    what: "Gather documents: U.S. passport or naturalization certificate, original Indian passport, proof of Indian origin, photos",
    bais: "Document checklist",
  },
  {
    what: "Surrender the Indian passport through the mission's service provider (VFS Global in the U.S.); the mission cancels it and issues the Surrender Certificate",
    bais: "Surrender application prepared for your review",
  },
  {
    what: "OCI application online at the Government of India OCI portal: photo and signature upload",
    bais: "Form and photo/signature spec check",
  },
  { what: "Pay and submit (fee, service charge, courier)", bais: "Submission guidance" },
  { what: "Track and respond to any query", bais: "Case tracking" },
  { what: "Approval: physical OCI card or electronic e-OCI", bais: "Next-step plan" },
  {
    what: "Travel and keep records current: OCI + U.S. passport; update your record when you get a new passport",
    bais: "Reminders",
  },
];

export function OciProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The OCI Process From the U.S.: Step by Step
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">#</th>
                <th className="p-3 font-bold text-ink">What happens</th>
                <th className="p-3 font-bold text-ink">What BAIS does</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((item, index) => (
                <tr
                  key={item.bais}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-bold text-maroon">{index + 1}</td>
                  <td className="p-3 text-body">{item.what}</td>
                  <td className="p-3 text-body/70">{item.bais}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Start My Free OCI Path Check
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
