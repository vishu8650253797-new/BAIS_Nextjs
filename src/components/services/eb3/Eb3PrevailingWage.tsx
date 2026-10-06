import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const points = [
  "The employer describes the job (duties, requirements, worksite) and files ETA-9141 in DOL's FLAG system.",
  "DOL sets the minimum wage for the job and area. In the Bay Area, wages usually follow the San Jose–Sunnyvale–Santa Clara or San Francisco–Oakland–Hayward metro areas.",
  "The offered wage must meet or exceed the determination, and recruitment and filing must fall within its validity period.",
];

const stats = [
  { value: "May 2026", label: "PERM wage requests DOL was processing (September 2026 update)" },
  { value: "~3–4 months", label: "Typical prevailing wage wait" },
  { value: "No premium", label: "DOL has no premium processing" },
];

export function Eb3PrevailingWage() {
  return (
    <section id="perm" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          PERM step 1
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          PERM Step 1: The Prevailing Wage Determination (Form ETA-9141)
        </h2>

        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-maroon" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <p className="text-xl font-bold text-maroon">{stat.value}</p>
                <p className="mt-2 text-xs text-body/60">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
