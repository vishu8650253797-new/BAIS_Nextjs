import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const reasons = [
  {
    title: "You control the case",
    description:
      "Self-petition: no employer, sponsor or job offer. Change jobs freely while the case is pending.",
    note: "No sponsor dependency",
  },
  {
    title: "No PERM, no backlog for most countries",
    description:
      "Skips labor certification. EB-1 is current for every country except China and India (October 2026).",
    note: "Canada, Mexico, Brazil, Europe: current",
  },
  {
    title: "15-day premium processing",
    description:
      "USCIS acts on EB-1A I-140s within 15 business days with premium processing ($2,965).",
    note: "Fastest I-140 track",
  },
];

export function Eb1aOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the EB-1A Green Card?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>EB-1A</strong> is a first-preference U.S. green card
            for people with <strong>extraordinary ability</strong> in the
            sciences, arts, education, business or athletics. You can{" "}
            <strong>self-petition</strong>: no employer, job offer or PERM
            is needed. You must show a major international award{" "}
            <strong>or</strong> meet <strong>3 of 10 criteria</strong>, then
            prove <strong>sustained acclaim</strong> at the very top of your
            field.
          </div>
        </FadeIn>

        <h2 className="mt-12 text-2xl font-bold text-ink sm:text-3xl">
          Why EB-1A Is the Most Direct Green Card for Top Talent
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 70}>
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-9 items-center justify-center rounded-full bg-white text-sm font-bold text-maroon">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{reason.description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="size-3.5" aria-hidden="true" />
                  {reason.note}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-body/60">
          &quot;Direct&quot; refers to process steps and visa availability,
          not approval odds. Every case is decided by USCIS on its own
          merits.
        </p>
      </Container>
    </section>
  );
}
