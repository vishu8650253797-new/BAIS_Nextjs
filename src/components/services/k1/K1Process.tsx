import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const steps = [
  {
    step: "File Form I-129F",
    who: "U.S. citizen",
    what: "The petition with proof of citizenship, the meeting, intent to marry and the relationship goes to USCIS ($675).",
    timing: "Day 1",
  },
  {
    step: "USCIS review",
    who: "USCIS",
    what: "Receipt notice, then approval or an RFE.",
    timing: "Several months; check USCIS times",
  },
  {
    step: "National Visa Center",
    who: "NVC",
    what: "Forwarded to the embassy or consulate.",
    timing: "About 4–8 weeks",
  },
  {
    step: "DS-160, medical & documents",
    who: "Fiancé(e)",
    what: "Visa application ($265), panel physician exam, police certificates, I-134.",
    timing: "Varies by country",
  },
  {
    step: "Consular interview",
    who: "Fiancé(e)",
    what: "Relationship, eligibility and finances; visa valid up to 6 months for entry.",
    timing: "Varies by consulate",
  },
  {
    step: "Travel & 90-day marriage",
    who: "Couple",
    what: "Enter the U.S. and marry each other within 90 days. A K-1 can't be extended.",
    timing: "Within 90 days",
  },
  {
    step: "Green card filing",
    who: "Couple",
    what: "I-485 + I-864, optional I-765 work permit and I-131 travel document.",
    timing: "After the marriage",
  },
  {
    step: "Green card & conditions",
    who: "Spouse",
    what: "Interview and approval. A 2-year conditional card if married less than 2 years; then file the I-751.",
    timing: "Months; varies",
  },
];

export function K1Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          The complete process
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          The K-1 Visa Process: Step by Step, From Petition to Green Card
        </h2>

        <FadeIn delay={80} className="mt-8 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">#</th>
                <th className="p-3 font-bold text-ink">Step</th>
                <th className="p-3 font-bold text-ink">Who</th>
                <th className="p-3 font-bold text-ink">What happens</th>
                <th className="p-3 font-bold text-ink">Typical timing*</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((item, index) => (
                <tr
                  key={item.step}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-bold text-maroon">{index + 1}</td>
                  <td className="p-3 font-semibold text-ink">{item.step}</td>
                  <td className="p-3 text-body">{item.who}</td>
                  <td className="p-3 text-body">{item.what}</td>
                  <td className="p-3 text-body/70">{item.timing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          *Typical ranges are estimates and change often. Check USCIS and
          State Department processing times for your case.
        </p>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Get Your Personalized K-1 Timeline
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
