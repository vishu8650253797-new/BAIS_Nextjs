import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  { label: "Employer needed", niw: "No", eb1a: "No", perm: "Yes", good: ["niw", "eb1a"] },
  {
    label: "Labor certification",
    niw: "Waived",
    eb1a: "Not required",
    perm: "Required (often 1+ year)",
  },
  {
    label: "Standard",
    niw: "Advanced degree or exceptional ability + Dhanasar",
    eb1a: "Top of the field + final merits",
    perm: "Job offer + qualifying degree or experience",
  },
  {
    label: "Visa wait: most countries",
    niw: "January 1, 2025",
    eb1a: "Current",
    perm: "EB-2: January 1, 2025 · EB-3: August 1, 2024 (dates for filing)",
    good: ["eb1a"],
  },
  { label: "Visa wait: India", niw: "November 1, 2013", eb1a: "February 1, 2023", perm: "Long backlog" },
  { label: "Premium processing", niw: "45 business days", eb1a: "15 business days", perm: "Available after PERM" },
];

export function NiwCompare() {
  return (
    <section id="compare" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Compare
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-2 NIW vs EB-1A vs PERM: Which Green Card Path Fits?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">EB-2 NIW</th>
                <th className="p-3 font-bold text-ink">EB-1A</th>
                <th className="p-3 font-bold text-ink">EB-2/EB-3 PERM</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className={`p-3 ${row.good?.includes("niw") ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.niw}
                  </td>
                  <td className={`p-3 ${row.good?.includes("eb1a") ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.eb1a}
                  </td>
                  <td className="p-3 text-body">{row.perm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <FadeIn delay={120} className="mt-6 rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <h3 className="text-base font-bold text-ink">Strategy: NIW + EB-1A dual filing</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            If your record is borderline for EB-1A, NIW is a strong first
            filing. If it&apos;s strong, filing <strong className="text-ink">both</strong> can
            secure an earlier, faster category without giving up the safer
            one.
          </p>
        </FadeIn>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href="/services#permanent-immigration" className="font-semibold text-maroon hover:text-maroon-dark">
            See the EB-1A page →
          </Link>
          <Link href="/services#permanent-immigration" className="font-semibold text-maroon hover:text-maroon-dark">
            Employer-sponsored EB-2 (PERM) →
          </Link>
        </div>
      </Container>
    </section>
  );
}
