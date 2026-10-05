import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const rows = [
  {
    label: "Activities",
    scholar: "Teaching, lecturing, observing, consulting, research",
    shortTerm: "Lecturing, observing, consulting, training, collaborating",
  },
  { label: "Maximum", scholar: "5 years", shortTerm: "6 months" },
  {
    label: "Repeat bars",
    scholar:
      "24-month bar on repeating the category after completing it · 12-month bar if you held J status in the prior 12 months (exceptions apply)",
    shortTerm: "No 12- or 24-month bars",
  },
  {
    label: "Typical hosts",
    scholar: "Universities, national labs, research institutes, hospitals",
    shortTerm: "Universities, institutions",
  },
];

export function J1Scholars() {
  return (
    <section id="scholars" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Scholars &amp; researchers
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          J-1 Professors, Research Scholars and Short-Term Scholars
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink"></th>
                <th className="p-3 font-bold text-ink">Professor &amp; Research Scholar</th>
                <th className="p-3 font-bold text-ink">Short-Term Scholar</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.label}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className="p-3 text-body">{row.scholar}</td>
                  <td className="p-3 text-body">{row.shortTerm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <FadeIn delay={120} className="mt-6 rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <h3 className="text-base font-bold text-ink">
            Postdocs and visiting researchers
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Plan early for cap-exempt H-1B at universities, O-1, or a green
            card (EB-1A, EB-1B, NIW) to avoid gaps when the program ends.
          </p>
        </FadeIn>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            Plan Your Next Step After J-1
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/services#permanent-immigration"
            className="text-sm font-semibold text-body/60 hover:text-maroon"
          >
            EB-1A · EB-2 NIW · O-1 Visa →
          </Link>
        </div>
      </Container>
    </section>
  );
}
