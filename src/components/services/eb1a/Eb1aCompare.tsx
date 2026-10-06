import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  { label: "Type", eb1a: "Green card", niw: "Green card", o1: "Temporary work visa" },
  {
    label: "Employer needed",
    eb1a: "No (self-petition)",
    niw: "No (self-petition)",
    o1: "Yes (employer or agent)",
    good: ["eb1a", "niw"],
  },
  {
    label: "Standard",
    eb1a: "Top of the field, sustained acclaim",
    niw: "Advanced degree or exceptional ability + Dhanasar",
    o1: "Extraordinary ability or distinction",
  },
  {
    label: "Criteria",
    eb1a: "3 of 10 + final merits",
    niw: "3 Dhanasar prongs",
    o1: "3 of 8 (A) · 3 of 6 (B)",
  },
  {
    label: "Visa wait: most countries",
    eb1a: "Current",
    niw: "January 1, 2025",
    o1: "No visa backlog",
    good: ["eb1a"],
  },
  { label: "Visa wait: India", eb1a: "February 1, 2023", niw: "November 1, 2013", o1: "No visa backlog" },
  { label: "Premium processing", eb1a: "15 business days", niw: "45 business days", o1: "15 business days" },
];

export function Eb1aCompare() {
  return (
    <section id="compare" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Compare
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1A vs EB-2 NIW vs O-1: Which Is Right for You?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">EB-1A</th>
                <th className="p-3 font-bold text-ink">EB-2 NIW</th>
                <th className="p-3 font-bold text-ink">O-1</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className={`p-3 ${row.good?.includes("eb1a") ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.eb1a}
                  </td>
                  <td className={`p-3 ${row.good?.includes("niw") ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.niw}
                  </td>
                  <td className="p-3 text-body">{row.o1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <FadeIn delay={120} className="mt-6 rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <h3 className="text-base font-bold text-ink">Strategy: filing both</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Many professionals file <strong className="text-ink">EB-1A and
            EB-2 NIW together</strong>, or NIW first and EB-1A later. If
            both are approved, the earliest priority date can generally be
            used. We&apos;ll tell you honestly which fits your record.
          </p>
        </FadeIn>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href="/services/eb-2-niw" className="font-semibold text-maroon hover:text-maroon-dark">
            See the EB-2 NIW page →
          </Link>
          <Link href="/services/o-1-visa" className="font-semibold text-maroon hover:text-maroon-dark">
            See the O-1 page →
          </Link>
        </div>
      </Container>
    </section>
  );
}
