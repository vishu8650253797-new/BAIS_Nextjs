import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const rows = [
  {
    category: "F1",
    who: "Unmarried adult children of U.S. citizens",
    most: "Jan 22, 2020",
    india: "Jan 22, 2020",
    mexico: "Sep 8, 2008",
    philippines: "Nov 1, 2013",
  },
  {
    category: "F2A",
    who: "Spouses & minor children of green card holders",
    most: "Sep 22, 2026",
    india: "Sep 22, 2026",
    mexico: "Mar 22, 2026",
    philippines: "Sep 22, 2026",
  },
  {
    category: "F2B",
    who: "Unmarried adult children of green card holders",
    most: "Aug 22, 2019",
    india: "Aug 22, 2019",
    mexico: "May 15, 2010",
    philippines: "Oct 1, 2013",
  },
  {
    category: "F3",
    who: "Married children of U.S. citizens",
    most: "Oct 22, 2014",
    india: "Oct 22, 2014",
    mexico: "Jul 1, 2001",
    philippines: "Jul 22, 2006",
  },
  {
    category: "F4",
    who: "Brothers & sisters of U.S. citizens",
    most: "Oct 22, 2011",
    india: "Dec 15, 2006",
    mexico: "Apr 22, 2001",
    philippines: "May 15, 2008",
  },
];

export function FamilyWaitTimes() {
  return (
    <section id="wait-times" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Wait times
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          How Long Is the Wait? October 2026 Visa Bulletin (Family)
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-body">
          <strong className="text-ink">Final Action Dates</strong>: your
          priority date must be <strong className="text-ink">before</strong>{" "}
          the date shown.
        </p>

        <FadeIn delay={80} className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-white text-left">
                <th className="p-3 font-bold text-ink">Cat.</th>
                <th className="p-3 font-bold text-ink">Who</th>
                <th className="p-3 font-bold text-ink">Most countries (and China)</th>
                <th className="p-3 font-bold text-ink">India</th>
                <th className="p-3 font-bold text-ink">Mexico</th>
                <th className="p-3 font-bold text-ink">Philippines</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.category}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-cream/40" : "bg-white"}`}
                >
                  <td className="p-3 font-bold text-maroon">{row.category}</td>
                  <td className="p-3 text-body">{row.who}</td>
                  <td className="p-3 text-body">{row.most}</td>
                  <td className="p-3 text-body">{row.india}</td>
                  <td className="p-3 text-body">{row.mexico}</td>
                  <td className="p-3 text-body">{row.philippines}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-sm leading-relaxed text-body">
          <strong className="text-ink">Dates for Filing</strong> (used by
          USCIS for green card applications in October 2026): F2A is{" "}
          <strong className="text-ink">current</strong> for all countries ·
          F1 Feb 1, 2020 · F2B Sep 1, 2019 · F3 Nov 1, 2014 · F4 Nov 1, 2011
          (India Feb 1, 2007). Mexico and the Philippines have earlier dates
          in several categories.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-body">
          <strong className="text-ink">Plain-English note:</strong> your{" "}
          <strong className="text-ink">priority date</strong> is the day
          your I-130 was filed. If it&apos;s earlier than the date in the
          chart, your category is moving for you.
        </p>
        <p className="mt-3 text-xs leading-relaxed text-body/60">
          Dates change monthly and can retrogress. For October 2026, USCIS
          is using the Dates for Filing chart for family-sponsored
          categories. Check travel.state.gov and uscis.gov.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Find My Priority Date and Wait: Free
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
