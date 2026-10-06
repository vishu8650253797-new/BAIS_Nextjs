import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  { label: "Lottery / annual cap", o1: "None. File any time.", h1b: "Yes: 85,000 cap, weighted lottery each March", good: "o1" },
  {
    label: "$100,000 proclamation fee",
    o1: "Does not apply",
    h1b: "Certain new petitions for workers abroad (currently blocked by court order)",
    good: "o1",
  },
  { label: "Degree required", o1: "No. Based on achievement.", h1b: "Yes, a bachelor's degree or equivalent" },
  { label: "Initial approval", o1: "Up to 3 years", h1b: "Up to 3 years" },
  { label: "Maximum stay", o1: "No limit, with 1-year extensions", h1b: "6 years (longer with a green card process)" },
  { label: "Spouse can work", o1: "No (O-3)", h1b: "Only with H-4 EAD eligibility" },
  { label: "Green card path", o1: "Yes, often EB-1A or EB-2 NIW", h1b: "Yes, usually PERM, EB-2 NIW or EB-1" },
  { label: "Premium processing", o1: "15 business days ($2,965)", h1b: "15 business days ($2,965)" },
];

export function O1VsH1b() {
  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          O-1 vs H-1B in 2026: Why More Professionals Are Choosing O-1
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">O-1</th>
                <th className="p-3 font-bold text-ink">H-1B</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className={`p-3 ${row.good === "o1" ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.o1}
                  </td>
                  <td className="p-3 text-body">{row.h1b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          H-1B fee rules are under active litigation and may change. Status
          as of September 30, 2026.
        </p>

        <Link
          href="/blog"
          className="mt-2 inline-block text-sm font-semibold text-maroon hover:text-maroon-dark"
        >
          Read the full O-1 vs H-1B guide →
        </Link>
      </Container>
    </section>
  );
}
