import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const cards = [
  {
    title: "Spouse and children",
    description: "Spouse is generally authorized to work; children under 21 may study.",
  },
  {
    title: "Employees",
    description: "Same nationality; executive, supervisory or essential-skills roles at a qualifying business.",
  },
  {
    title: "Duration",
    description: "Set by your country's reciprocity (often up to 5 years); renews while the trade continues.",
  },
];

const rows = [
  { label: "For", e1: "Existing U.S.–treaty trade", e2: "Investing in and running a U.S. business", l1a: "Managers transferring from a related foreign company" },
  { label: "Nationality", e1: "Treaty countries only", e2: "Treaty countries only", l1a: "Any" },
  { label: "Money test", e1: ">50% trade with the U.S.", e2: "Substantial investment", l1a: "None (qualifying relationship)", good: "e1" },
  { label: "Startup?", e1: "No", e2: "Yes", l1a: "Yes (new-office rules)" },
  { label: "Green card path", e1: "Not direct", e2: "Not direct", l1a: "Yes (EB-1C)", good: "l1a" },
];

const links = [
  { label: "E-2", href: "/services/e-2-treaty-investor" },
  { label: "L-1A", href: "/services#employment-immigration" },
  { label: "EB-1C", href: "/services/eb-1c" },
];

export function E1FamilyCompare() {
  return (
    <section id="family-compare" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Family, employees, compare
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Family, Employees and E-1 vs E-2 vs L-1A
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 60}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100} className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">E-1</th>
                <th className="p-3 font-bold text-ink">E-2</th>
                <th className="p-3 font-bold text-ink">L-1A</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className={`p-3 ${row.good === "e1" ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.e1}
                  </td>
                  <td className="p-3 text-body">{row.e2}</td>
                  <td className={`p-3 ${row.good === "l1a" ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.l1a}
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
