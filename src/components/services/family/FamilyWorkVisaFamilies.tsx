import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  { visa: "H-1B", status: "H-4", canWork: "Only with an H-4 EAD, available in certain cases (such as an approved I-140)" },
  { visa: "L-1", status: "L-2", canWork: "Yes, L-2 spouses are authorized to work", good: true },
  { visa: "J-1", status: "J-2", canWork: "Yes, with a work permit (Form I-765)", good: true },
  { visa: "O-1", status: "O-3", canWork: "No" },
];

const links = [
  { label: "H-1B", href: "/services/h-1b-visa" },
  { label: "L-1", href: "/services#employment-immigration" },
  { label: "J-1", href: "/services/j-1-visa" },
  { label: "O-1", href: "/services/o-1-visa" },
  { label: "Change of status", href: "/services/change-of-status" },
];

export function FamilyWorkVisaFamilies() {
  return (
    <section id="work-visa-families" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Work-visa families
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Spouses and Children of H-1B, L-1, J-1 and O-1 Workers
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Visa</th>
                <th className="p-3 font-bold text-ink">Family status</th>
                <th className="p-3 font-bold text-ink">Can the spouse work?</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.visa}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.visa}</td>
                  <td className="p-3 text-body">{row.status}</td>
                  <td className={`p-3 ${row.good ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.canWork}
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
