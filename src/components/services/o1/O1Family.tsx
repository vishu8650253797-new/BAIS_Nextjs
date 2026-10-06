import Link from "next/link";
import { ArrowRight, GraduationCap, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function O1Family() {
  return (
    <section id="family" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Your family &amp; team
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Bringing Your Family and Team: O-3 and O-2
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-3 text-base font-bold text-ink">O-3 for spouse &amp; children</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Your spouse and unmarried children under 21 join you for the
              same period as your O-1.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-body">
              <li>
                <strong className="text-ink">Study:</strong> school or university allowed
              </li>
              <li>
                <strong className="text-ink">Work:</strong> not allowed on O-3. A spouse needs
                their own work visa (H-1B, L-1 or their own O-1).
              </li>
              <li>
                <strong className="text-ink">How:</strong> consular O-3 visas, or Form I-539 in
                the U.S. File extensions together.
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={80} className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <div id="o-2" className="scroll-mt-24">
              <span className="flex size-11 items-center justify-center rounded-full bg-cream text-maroon">
                <Users className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-base font-bold text-ink">O-2 for essential support personnel</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                O-1A <strong className="text-ink">athletes</strong> and O-1B{" "}
                <strong className="text-ink">artists and entertainers</strong>{" "}
                can bring essential team members, such as a coach,
                accompanist, stage manager or camera operator, with critical
                skills and experience. O-2 workers must keep a residence
                abroad. <strong className="text-ink">Not available</strong>{" "}
                for O-1A in science, education or business. O-2 families use
                O-3.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            Plan Your Family&apos;s or Team&apos;s Move
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/blog" className="text-sm font-semibold text-body/60 hover:text-maroon">
            O-2 visa details →
          </Link>
        </div>
      </Container>
    </section>
  );
}
