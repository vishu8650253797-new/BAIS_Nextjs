import { Lock, Stethoscope, Star, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const googleReviewUrl = `https://www.google.com/search?q=${encodeURIComponent(
  `${site.name} ${site.address.city} ${site.address.state} reviews`,
)}`;

const slots = [
  { initials: "S", label: "NIW STEM professional · [Field] · [year]" },
  { initials: "H", label: "NIW healthcare · [Role] · [year]" },
  { initials: "F", label: "NIW founder · [Venture] · [year]" },
];

const caseStudies = [
  {
    icon: Lock,
    title: "[Cybersecurity engineer]",
    endeavor: "[one line]",
    evidence: "[deployments, reviews, letters]",
    outcome: "[Approved, year]",
  },
  {
    icon: Stethoscope,
    title: "[Physician]",
    endeavor: "[one line]",
    evidence: "[underserved area, research]",
    outcome: "[Approved, year]",
  },
  {
    icon: Zap,
    title: "[Clean-energy researcher]",
    endeavor: "[one line]",
    evidence: "[citations, funding, patents]",
    outcome: "[Approved, year]",
  },
];

export function NiwReviews() {
  return (
    <section className="bg-white py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Client stories
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Real Professionals, Real Green Cards
        </h2>

        <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-cream px-5 py-2.5 text-sm">
          <span className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" aria-hidden="true" />
            ))}
          </span>
          <span className="font-bold text-ink">4.4 on Google</span>
          <span className="text-body/60">· 212 reviews</span>
        </div>

        <div className="mt-8 grid gap-5 text-left sm:grid-cols-3">
          {slots.map((slot, index) => (
            <FadeIn key={slot.label} delay={index * 70}>
              <div className="h-full rounded-2xl border-2 border-dashed border-maroon/25 bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/40 hover:shadow-xl hover:shadow-ink/5">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-sm font-bold text-maroon">
                    {slot.initials}
                  </span>
                  <p className="text-xs font-semibold text-body/60">{slot.label}</p>
                </div>
                <div className="mt-3 flex gap-0.5 text-amber-400/50">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-sm italic leading-relaxed text-body/50">
                  Reserved for a real testimonial, shared with written
                  permission.
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <h3 className="mt-14 text-base font-bold text-ink">Case studies (anonymized)</h3>
        <div className="mt-6 grid gap-5 text-left sm:grid-cols-3">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 70}>
              <div className="h-full rounded-2xl border-2 border-dashed border-border bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-xl hover:shadow-ink/5">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-maroon">
                  <study.icon className="size-5" aria-hidden="true" />
                </span>
                <h4 className="mt-3 text-sm font-bold text-body/70">{study.title}</h4>
                <p className="mt-3 text-xs leading-relaxed text-body/60">
                  <strong className="text-body">Endeavor:</strong> {study.endeavor}
                  <br />
                  <strong className="text-body">Key evidence:</strong> {study.evidence}
                  <br />
                  <strong className="text-body">Outcome:</strong> {study.outcome}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-body/60">
          Testimonials and case studies are from real clients, shared with
          permission. They reflect individual experiences; results vary
          based on the facts of each case.
        </p>

        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Read All Reviews on Google →
        </a>
      </Container>
    </section>
  );
}
