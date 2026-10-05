import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const waiverOptions = [
  {
    basis: "No Objection Statement",
    notes: "From your home government. Not available to physicians who came for medical training",
  },
  {
    basis: "Interested Government Agency (IGA)",
    notes: "A U.S. federal agency supports your work",
  },
  {
    basis: "Conrad 30",
    notes: "Physicians sponsored by a state health department for underserved areas",
  },
  {
    basis: "Persecution",
    notes: "A fear of persecution in your home country (I-612)",
  },
  {
    basis: "Exceptional hardship",
    notes: "Hardship to a U.S. citizen or green card holder spouse or child (I-612)",
  },
];

export function J1WaiverProcess() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">What 212(e) blocks</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Until you complete two years at home or get a waiver: no
              H-1B, L or K status and no green card, and no change of
              status inside the U.S. to most categories.{" "}
              <strong className="text-ink">O-1 is not barred</strong>, but
              you&apos;d apply abroad.
            </p>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-ink">The waiver process</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              1. Online <strong className="text-ink">DS-3035</strong> with
              the State Department fee ($120 at present; confirm) → 2.
              supporting documents for your basis → 3. Waiver Review
              Division recommendation → 4. USCIS final decision. Hardship
              and persecution cases also require{" "}
              <strong className="text-ink">Form I-612</strong>.
            </p>
          </FadeIn>
        </div>

        <h3 className="mt-10 text-lg font-bold text-ink">Waiver options</h3>
        <FadeIn delay={100} className="mt-5 overflow-x-auto rounded-2xl border border-border transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-cream text-left">
                <th className="p-3 font-bold text-ink">Basis</th>
                <th className="p-3 font-bold text-ink">Notes</th>
              </tr>
            </thead>
            <tbody>
              {waiverOptions.map((row, index) => (
                <tr
                  key={row.basis}
                  className={`border-t border-border transition-colors duration-200 hover:bg-maroon/5 ${index % 2 === 0 ? "bg-white" : "bg-cream/40"}`}
                >
                  <td className="p-3 font-semibold text-ink">{row.basis}</td>
                  <td className="p-3 text-body">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <p className="mt-5 text-sm leading-relaxed text-body">
          <strong className="text-ink">How BAIS helps:</strong> an
          advisory-opinion request to confirm whether you&apos;re subject ·
          waiver strategy · DS-3035 preparation · no-objection letter
          coordination · hardship and persecution packages · planning for
          the next visa.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-body/60">
          Waivers are discretionary. A favorable recommendation or approval
          is not guaranteed.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Check If You&apos;re Subject to 212(e): Free
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            Start Your J-1 Waiver
          </Link>
        </div>
      </Container>
    </section>
  );
}
