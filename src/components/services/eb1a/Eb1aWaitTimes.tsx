import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const table = [
  {
    country: "Most countries (incl. Canada, Mexico, Brazil, Philippines, UK, Europe)",
    finalAction: "Current",
    filing: "Current",
    good: true,
  },
  { country: "India", finalAction: "February 1, 2023", filing: "July 1, 2024" },
  { country: "China (mainland-born)", finalAction: "July 1, 2023", filing: "July 1, 2024" },
];

export function Eb1aWaitTimes() {
  return (
    <section id="wait-times" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Wait time by country
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-1A Wait Time by Country (October 2026 Visa Bulletin)
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Country of birth</th>
                <th className="p-3 font-bold text-ink">EB-1 Final Action Date</th>
                <th className="p-3 font-bold text-ink">EB-1 Dates for Filing</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, index) => (
                <tr
                  key={row.country}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 text-body">{row.country}</td>
                  <td className={`p-3 font-semibold ${row.good ? "text-emerald-700" : "text-ink"}`}>
                    {row.finalAction}
                  </td>
                  <td className={`p-3 ${row.good ? "font-semibold text-emerald-700" : "text-body"}`}>
                    {row.filing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <FadeIn className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="text-sm leading-relaxed text-body">
              USCIS is accepting employment-based adjustment filings under
              the <strong className="text-ink">Dates for Filing</strong>{" "}
              chart in October 2026.
            </p>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="text-sm leading-relaxed text-body">
              Your <strong className="text-ink">priority date</strong> is
              the date USCIS receives your EB-1A I-140.
            </p>
          </FadeIn>
          <FadeIn delay={140} className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <p className="text-sm leading-relaxed text-body">
              The wait depends on{" "}
              <strong className="text-ink">country of birth, not citizenship</strong>.
              Cross-chargeability through a spouse may help.
            </p>
          </FadeIn>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          Visa Bulletin dates change monthly and can retrogress. Check
          travel.state.gov for the current bulletin.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Check Your EB-1A Timeline With Us
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
