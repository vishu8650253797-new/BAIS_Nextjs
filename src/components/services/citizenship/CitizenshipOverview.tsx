import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function CitizenshipOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <FadeIn className="flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-6 py-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-amber-900/5">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink">
            <strong>We are not USCIS.</strong> {site.name} is a private,
            registered and bonded firm that helps you prepare your
            application. You can also file directly with USCIS at{" "}
            <a
              href="https://www.uscis.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-maroon underline hover:text-maroon-dark"
            >
              uscis.gov
            </a>
            .
          </p>
        </FadeIn>

        <h2 className="mt-12 text-2xl font-bold text-ink sm:text-3xl">
          How Do I Become a U.S. Citizen?
        </h2>
        <FadeIn delay={70}>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            Most green card holders become U.S. citizens through{" "}
            <strong>naturalization</strong>: you file{" "}
            <strong>Form N-400</strong> with USCIS after{" "}
            <strong>5 years</strong> as a permanent resident, or{" "}
            <strong>3 years</strong> if married to and living with a U.S.
            citizen. You give fingerprints, pass an{" "}
            <strong>English and civics test</strong> at your interview, and
            take the <strong>Oath of Allegiance</strong>.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
