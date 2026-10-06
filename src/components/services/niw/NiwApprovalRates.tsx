import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const stats = [
  { value: "42.6%", label: "FY 2026 Q1 (Oct–Dec 2025)" },
  { value: "48.1%", label: "FY 2026 Q2 (Jan–Mar 2026)" },
  { value: "55.3%", label: "FY 2026 Q3 (Apr–Jun 2026)" },
];

export function NiwApprovalRates() {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Honest numbers
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-2 NIW Approval Rates in 2026: What the USCIS Data Shows
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <p className="text-3xl font-bold text-maroon">{stat.value}</p>
                <p className="mt-2 text-xs text-body/60">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-body">
          <strong className="text-ink">Takeaway:</strong> approval rates are
          recovering, but roughly half of NIW petitions are still denied.
          These are averages across all filers, including weak and
          self-prepared cases.{" "}
          <strong className="text-ink">
            The quality of the endeavor and the evidence is what separates
            approvals from denials.
          </strong>
        </p>
        <p className="mt-2 text-xs leading-relaxed text-body/60">
          Source: USCIS I-140 data by quarter. Aggregate rates are not a
          prediction for any individual case.
        </p>

        <Link
          href="/blog"
          className="mt-3 inline-block text-sm font-semibold text-maroon hover:text-maroon-dark"
        >
          Read our full 2026 NIW approval-rate analysis →
        </Link>
      </Container>
    </section>
  );
}
