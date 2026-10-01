import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const countries = [
  {
    icon: Globe2,
    title: "Most countries: Current",
    description:
      "Canada · Mexico · Brazil · Philippines · Latin America · Middle East · Europe · Africa · the rest of Asia. That's every country except China and India.",
    yes: "No visa backlog",
    showCheck: true,
    note: "Once your I-140 is approved, you can typically move straight to the green card stage.",
    accent: "border-emerald-600",
  },
  {
    title: "🇮🇳 India",
    description: (
      <>
        EB-1 final action date: <strong>February 1, 2023</strong> (advanced
        3½ months in October 2026).
        <br />
        Dates for filing: <strong>July 1, 2024</strong>.
      </>
    ),
    yes: "EB-2 India: Nov 1, 2013",
    yesClass: "bg-amber-50 text-amber-700",
    note: "EB-1 is roughly a decade ahead of EB-2 for India.",
    accent: "border-maroon",
  },
  {
    title: "🇨🇳 China (mainland-born)",
    description: (
      <>
        EB-1 final action date: <strong>July 1, 2023</strong>.
        <br />
        Dates for filing: <strong>July 1, 2024</strong>.
      </>
    ),
    yes: "EB-2 China: Oct 1, 2021",
    yesClass: "bg-amber-50 text-amber-700",
    note: "EB-1 remains ahead of EB-2 for China.",
    accent: "border-maroon",
  },
];

const table = [
  {
    country: "Most countries (incl. Canada, Mexico, Brazil)",
    eb1: "Current",
    eb2: "No longer current (retrogressed in October 2026)",
  },
  { country: "India", eb1: "February 1, 2023", eb2: "November 1, 2013" },
  { country: "China (mainland-born)", eb1: "July 1, 2023", eb2: "October 1, 2021" },
];

export function Eb1cWaitTimes() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Wait time by country
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          How Long Is the EB-1C Wait From Your Country?
        </h2>
        <span className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-body">
          Based on the October 2026 Visa Bulletin · Last reviewed September
          30, 2026
        </span>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {countries.map((item, index) => (
            <FadeIn key={item.title} delay={index * 70}>
              <div
                className={`h-full rounded-2xl border-t-4 ${item.accent} bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10`}
              >
                <h3 className="flex items-center gap-2 text-base font-bold text-ink">
                  {item.icon && (
                    <item.icon className="size-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  )}
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
                <span
                  className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                    item.yesClass ?? "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  {item.showCheck && (
                    <CheckCircle2 className="size-3.5 shrink-0" aria-hidden="true" />
                  )}
                  {item.yes}
                </span>
                <p className="mt-3 text-xs leading-relaxed text-body/60">{item.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={90} className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Country of birth</th>
                <th className="p-3 font-bold text-ink">EB-1 (incl. EB-1C)</th>
                <th className="p-3 font-bold text-ink">EB-2</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row) => (
                <tr
                  key={row.country}
                  className="border-t border-border transition-colors duration-200 hover:bg-maroon/5"
                >
                  <td className="p-3 text-body">{row.country}</td>
                  <td className="p-3 font-semibold text-emerald-700">{row.eb1}</td>
                  <td className="p-3 text-body">{row.eb2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <FadeIn className="rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-sm font-bold text-ink">
              Country of birth, not citizenship
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Your wait depends on where you were born. A Canadian citizen
              born in India is charged to India.
            </p>
          </FadeIn>
          <FadeIn delay={70} className="rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-sm font-bold text-ink">Cross-chargeability</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              If your spouse was born in a different country, you may be able
              to use your spouse&apos;s country of birth for the visa wait.
            </p>
          </FadeIn>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-body/60">
          Visa Bulletin dates change monthly and can move backward
          (retrogress). Dates shown are from the October 2026 Visa Bulletin.
          Always check travel.state.gov for the current bulletin. Your
          priority date is the date USCIS receives your EB-1C I-140.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Check Your Wait Time With Us
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
