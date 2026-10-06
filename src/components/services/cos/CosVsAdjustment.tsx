import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  {
    label: "What it does",
    cos: "Switches you to a different nonimmigrant category",
    eos: "Gives more time in your current category",
    aos: "Makes you a permanent resident (green card)",
  },
  {
    label: "Main form",
    cos: "I-539 (applicant) or I-129 (employer)",
    eos: "I-539 or I-129",
    aos: "I-485",
  },
  {
    label: "Example",
    cos: "B-2 → F-1; F-1 → H-1B",
    eos: "B-2 visitor needs 3 more months",
    aos: "H-1B holder with an approved I-140 and a current date",
  },
  {
    label: "Result",
    cos: "New I-94 in the new status",
    eos: "New I-94 end date",
    aos: "Green card",
  },
];

export function CosVsAdjustment() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Know the difference
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Change of Status vs Extension of Stay vs Adjustment of Status
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">Change of Status</th>
                <th className="p-3 font-bold text-ink">Extension of Stay</th>
                <th className="p-3 font-bold text-ink">Adjustment of Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className="p-3 text-body">{row.cos}</td>
                  <td className="p-3 text-body">{row.eos}</td>
                  <td className="p-3 text-body">{row.aos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <Link
          href="/services#permanent-immigration"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:text-maroon-dark"
        >
          Looking for a green card instead? See EB-1A, NIW and family options →
        </Link>
      </Container>
    </section>
  );
}
