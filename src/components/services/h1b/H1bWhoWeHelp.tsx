import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const employerPoints = [
  "Cap registration with wage-level strategy",
  "LCA preparation & public access file support",
  "Extensions, amendments & remote-work compliance",
  "H-1B to green card (PERM & I-140)",
];

const workerPoints = [
  "F-1 / OPT → H-1B change of status",
  "H-1B transfer to a new employer",
  "Concurrent H-1B (second employer)",
  "H-4 & H-4 EAD for your family",
];

export function H1bWhoWeHelp() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
            Who we help
          </p>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            H-1B Support for Employers and Professionals
          </h2>
          <p className="mt-3 text-sm text-body/70">
            Two audiences, two clear paths, each with its own call to action.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-lg font-bold text-ink">For Employers &amp; HR Teams</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Sponsor and retain skilled talent without the paperwork
              burden. We prepare cap registrations, LCAs and I-129
              petitions, and we track every H-1B deadline across your
              workforce: extensions, amendments, worksite changes and green
              card sponsorship.
            </p>
            <ul className="mt-4 space-y-2.5">
              {employerPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-body">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
            >
              Talk to Our Employer Team →
            </Link>
          </FadeIn>

          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-lg font-bold text-white">For H-1B Workers &amp; Students</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Changing jobs, extending your stay, or moving from F-1 OPT to
              H-1B? We organize your degree evaluation, experience letters
              and supporting documents so your employer&apos;s petition is
              complete from day one.
            </p>
            <ul className="mt-4 space-y-2.5">
              {workerPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white/75">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-cream"
            >
              Book My Free Consultation →
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
