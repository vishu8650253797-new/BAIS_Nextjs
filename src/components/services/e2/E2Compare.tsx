import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  { label: "For", e2: "Investors", e1: "Traders", l1a: "Transferring managers", eb5: "Green card investors" },
  { label: "Nationality", e2: "Treaty only", e1: "Treaty only", l1a: "Any", eb5: "Any" },
  { label: "Investment", e2: "No fixed minimum", e1: "Trade volume", l1a: "None", eb5: "$800K / $1.05M" },
  { label: "Status", e2: "Temporary, renewable", e1: "Temporary, renewable", l1a: "Temporary", eb5: "Permanent" },
  { label: "Green card path", e2: "Not direct", e1: "Not direct", l1a: "Yes (EB-1C)", eb5: "Yes", good: "eb5" },
];

const links = [
  { label: "L-1A", href: "/services#employment-immigration" },
  { label: "EB-5", href: "/services#business-investor" },
];

export function E2Compare() {
  return (
    <section id="compare" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Compare
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          E-2 vs E-1 vs L-1A vs EB-5
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">E-2</th>
                <th className="p-3 font-bold text-ink">E-1</th>
                <th className="p-3 font-bold text-ink">L-1A</th>
                <th className="p-3 font-bold text-ink">EB-5</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className="p-3 text-body">{row.e2}</td>
                  <td className="p-3 text-body">{row.e1}</td>
                  <td className="p-3 text-body">{row.l1a}</td>
                  <td className={`p-3 ${row.good === "eb5" ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.eb5}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm">
          {links.map((link, index) => (
            <span key={link.href} className="inline-flex items-center gap-2">
              <Link href={link.href} className="font-semibold text-maroon hover:text-maroon-dark">
                {link.label} →
              </Link>
              {index < links.length - 1 && <span className="text-body/40">·</span>}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
