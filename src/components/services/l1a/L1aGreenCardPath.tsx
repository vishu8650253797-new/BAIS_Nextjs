import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const comparison = [
  {
    label: "Best for",
    l1a: "Moving a manager or executive to a related U.S. office",
    e2: "Investors putting substantial capital into a U.S. business",
    e1: "Companies with substantial U.S. trade",
  },
  {
    label: "Nationality rule",
    l1a: "Any country",
    e2: "Treaty countries only (e.g., Canada, Mexico; not India)",
    e1: "Treaty countries only",
  },
  {
    label: "Year abroad required",
    l1a: "Yes, 1 year in the last 3",
    e2: "No",
    e1: "No",
  },
  { label: "Maximum stay", l1a: "7 years", e2: "Renewable, no set limit", e1: "Renewable, no set limit" },
  { label: "Spouse can work", l1a: "Yes", e2: "Yes", e1: "Yes" },
  {
    label: "Direct green card route",
    l1a: "Yes, EB-1C",
    e2: "No direct route",
    e1: "No direct route",
  },
];

export function L1aGreenCardPath() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-4xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          From L-1A to Green Card: The EB-1C Path
        </h2>
        <FadeIn>
          <p className="mt-4 text-sm leading-relaxed text-body">
            The L-1A leads naturally to the <strong>EB-1C green card</strong>{" "}
            for multinational managers and executives. EB-1C needs no PERM
            labor certification and no job-market test. Generally, the U.S.
            company must have been <strong>doing business for at least one
            year</strong>, the manager must have worked abroad for the
            related company for <strong>one year in the three years before
            coming to the U.S.</strong>, and the U.S. role must be managerial
            or executive. Spouses and children under 21 are included.
          </p>
        </FadeIn>
        <Link
          href="/services/eb-1c"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Explore EB-1C
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>

        <h2 className="mt-14 text-2xl font-bold text-ink sm:text-3xl">
          L-1A vs E-2 vs E-1: Which Visa Fits Your Business?
        </h2>
        <FadeIn delay={80} className="mt-6 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3" />
                <th className="p-3 font-bold text-ink">L-1A</th>
                <th className="p-3 font-bold text-ink">E-2 Treaty Investor</th>
                <th className="p-3 font-bold text-ink">E-1 Treaty Trader</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.label}
                  className="border-t border-border transition-colors duration-200 hover:bg-maroon/5"
                >
                  <td className="p-3 font-semibold text-ink">{row.label}</td>
                  <td className="p-3 text-body">{row.l1a}</td>
                  <td className="p-3 text-body">{row.e2}</td>
                  <td className="p-3 text-body">{row.e1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
        <p className="mt-4 text-sm">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-maroon hover:text-maroon-dark"
          >
            Not sure which fits? Ask us free →
          </a>
        </p>
      </Container>
    </section>
  );
}
