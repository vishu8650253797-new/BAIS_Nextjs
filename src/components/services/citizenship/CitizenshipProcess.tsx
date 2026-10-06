import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  { title: "Free Eligibility Check", description: "Green card date, trips and history.", when: "BAIS: a clear yes, wait, or fix-first" },
  {
    title: "Travel & Residence Audit",
    description: "Every trip counted against the 30/18-month and 6-month rules.",
    when: "BAIS: Travel-Days Report",
  },
  { title: "N-400 Preparation", description: "Application and documents.", when: "BAIS: error-checked N-400" },
  { title: "File With USCIS", description: "Online or by mail, with the fee.", when: "BAIS: receipt tracking" },
  { title: "Biometrics", description: "Fingerprints and photo at a local center.", when: "BAIS: reminders" },
  { title: "Interview & Tests", description: "English and the 2025 civics test.", when: "BAIS: mock interviews" },
  { title: "Decision", description: "Often given the same day (N-652).", when: "BAIS: next-step plan" },
  { title: "Oath Ceremony", description: "The oath and your Certificate of Naturalization.", when: "BAIS: Oath-to-Passport" },
];

export function CitizenshipProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          End-to-end process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The U.S. Citizenship Process: 8 Simple Steps
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 40}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="font-serif text-2xl font-bold text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
                <span className="mt-3 inline-block rounded-full bg-cream px-3 py-1 text-xs font-semibold text-body/60">
                  {step.when}
                </span>
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
          Start My Citizenship Application
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
