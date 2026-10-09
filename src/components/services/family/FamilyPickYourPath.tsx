import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  {
    situation: "Married to a U.S. citizen",
    path: "Spouse green card (immediate relative): consular processing or adjustment",
    href: "/services#family-immigration",
    label: "Spouse visas",
  },
  {
    situation: "Engaged to a foreign partner (U.S. citizen)",
    path: "K-1 visa, marry within 90 days, then green card",
    href: "/services/k1-k3-visa",
    label: "K-1 visa",
  },
  {
    situation: "Married to a green card holder",
    path: "F2A: wait for your date, then green card",
    href: "#wait-times",
    label: "Wait times",
  },
  {
    situation: "Parent or child under 21 of a U.S. citizen",
    path: "Immediate relative (no wait)",
    href: "#process",
    label: "Process",
  },
  {
    situation: "Adult son or daughter",
    path: "F1, F2B or F3 (wait)",
    href: "#wait-times",
    label: "Wait times",
  },
  {
    situation: "Brother or sister of a U.S. citizen",
    path: "F4: long wait",
    href: "#wait-times",
    label: "Wait times",
  },
  {
    situation: "Spouse of an H-1B, L-1 or J-1 worker",
    path: "H-4, L-2 or J-2 dependent status",
    href: "#work-visa-families",
    label: "Work-visa families",
  },
  {
    situation: "Married less than 2 years at approval",
    path: "Conditional green card, then I-751",
    href: "#after-green-card",
    label: "After the green card",
  },
];

export function FamilyPickYourPath() {
  return (
    <section id="pick-your-path" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Pick your path
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Which Path Fits Your Family?
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Your situation</th>
                <th className="p-3 font-bold text-ink">Likely path</th>
                <th className="p-3 font-bold text-ink">Learn more</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.situation}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.situation}</td>
                  <td className="p-3 text-body">{row.path}</td>
                  <td className="p-3">
                    <Link href={row.href} className="font-semibold text-maroon hover:text-maroon-dark">
                      {row.label} →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </Container>
    </section>
  );
}
