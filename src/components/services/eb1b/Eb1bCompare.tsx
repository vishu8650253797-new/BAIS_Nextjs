import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const rows = [
  {
    label: "Who files",
    eb1b: "Employer",
    eb1a: "You (self) or employer",
    niw: "You (self)",
    eb2perm: "Employer, after PERM",
    good: "eb1b",
  },
  { label: "PERM", eb1b: "No", eb1a: "No", niw: "No", eb2perm: "Yes", good: "eb1b" },
  {
    label: "For",
    eb1b: "Professors and researchers (3+ years)",
    eb1a: "Extraordinary ability, any field",
    niw: "Work of national importance",
    eb2perm: "Advanced-degree workers",
  },
  {
    label: "Evidence bar",
    eb1b: "2 of 6 criteria + permanent offer",
    eb1a: "3 of 10 criteria + final merits",
    niw: "Dhanasar 3 prongs",
    eb2perm: "Job requirements + PERM",
  },
];

const links = [
  { label: "EB-1A", href: "/services/eb-1a" },
  { label: "EB-2 NIW", href: "/services/eb-2-niw" },
  { label: "EB-3 / PERM", href: "/services/eb-3-visa" },
];

export function Eb1bCompare() {
  return (
    <section id="compare" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Compare
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1B vs EB-1A vs NIW vs EB-2 (PERM)
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-cream transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">EB-1B</th>
                <th className="p-3 font-bold text-ink">EB-1A</th>
                <th className="p-3 font-bold text-ink">EB-2 NIW</th>
                <th className="p-3 font-bold text-ink">EB-2 (PERM)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className={`p-3 ${row.good === "eb1b" ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.eb1b}
                  </td>
                  <td className="p-3 text-body">{row.eb1a}</td>
                  <td className="p-3 text-body">{row.niw}</td>
                  <td className="p-3 text-body">{row.eb2perm}</td>
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
