import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const table = [
  { country: "Most countries, Mexico, Philippines", finalAction: "January 1, 2025", filing: "March 15, 2026" },
  { country: "China (mainland-born)", finalAction: "October 1, 2021", filing: "January 1, 2023" },
  { country: "India", finalAction: "November 1, 2013", filing: "January 15, 2015" },
];

export function NiwWaitTimes() {
  return (
    <section id="wait-times" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Wait time by country
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          EB-2 NIW Wait Time by Country (October 2026 Visa Bulletin)
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Country of birth</th>
                <th className="p-3 font-bold text-ink">EB-2 Final Action Date</th>
                <th className="p-3 font-bold text-ink">EB-2 Dates for Filing</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, index) => (
                <tr
                  key={row.country}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 text-body">{row.country}</td>
                  <td className="p-3 font-semibold text-ink">{row.finalAction}</td>
                  <td className="p-3 text-body">{row.filing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <FadeIn className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-sm font-bold text-ink">Most countries</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              EB-2 moved from Current to January 1, 2025 in October 2026.
              USCIS is accepting filings under the Dates for Filing chart,
              so priority dates before March 15, 2026 may file an I-485,
              with work and travel permits, before final approval.
            </p>
          </FadeIn>
          <FadeIn delay={70} className="h-full rounded-2xl bg-ink p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-sm font-bold text-white">India</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              The EB-2 wait is very long. With a strong record,{" "}
              <strong className="text-white">EB-1A</strong> (India: February
              1, 2023) may be dramatically faster. Consider filing both.
            </p>
          </FadeIn>
          <FadeIn delay={140} className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-sm font-bold text-ink">Good to know</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Your priority date is the date USCIS receives your NIW I-140.
              The wait depends on country of birth, and cross-chargeability
              through a spouse may help.
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
          Check Your NIW Timeline With Us
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
