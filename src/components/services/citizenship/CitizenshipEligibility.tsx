import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const requirements = [
  { label: "Age", value: "You're 18 or older" },
  {
    label: "Green card time",
    value:
      "5 years as a permanent resident, or 3 years if married to and living with a U.S. citizen spouse (a citizen for those 3 years)",
  },
  { label: "Early filing", value: "You can file up to 90 days before your 5- or 3-year date" },
  {
    label: "Continuous residence",
    value:
      "No long breaks abroad. Trips over 6 months raise questions; 1 year or more usually breaks residence",
  },
  {
    label: "Physical presence",
    value: "At least half the time in the U.S.: 30 months (5-year rule) or 18 months (3-year rule)",
  },
  { label: "Local residence", value: "3 months in the state or USCIS district where you apply" },
  { label: "English", value: "Read, write and speak basic English (some older applicants are exempt)" },
  { label: "Civics", value: "Know basic U.S. history and government" },
  {
    label: "Good moral character",
    value: "An honest, law-abiding record, paid taxes and positive community ties (2025 standard)",
  },
  { label: "Loyalty", value: "Willing to take the Oath of Allegiance" },
];

export function CitizenshipEligibility() {
  return (
    <section id="eligibility" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Eligibility
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Can I Apply for U.S. Citizenship? A Simple Checklist
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Requirement</th>
                <th className="p-3 font-bold text-ink">In plain words</th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className="p-3 text-body">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-sm leading-relaxed text-body">
          <strong className="text-ink">Special paths:</strong> military
          members and veterans (special rules), and children who may already
          be citizens through their parents (Form N-600).
        </p>
        <p className="mt-2 text-xs leading-relaxed text-body/60">
          General information. Each case depends on its facts; we confirm
          your eligibility in a free review.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Check My Dates Free
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
