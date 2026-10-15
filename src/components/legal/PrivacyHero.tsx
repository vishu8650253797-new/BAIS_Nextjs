import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const quickPoints = [
  "We collect what you give us (contact details, immigration details and documents) and basic website data.",
  "We use it to answer you, prepare the documents you ask for, and run our business.",
  "We never sell your personal information, and we never share your phone number or text opt-in with anyone for marketing.",
  "We share information only with service providers who help us, and with government agencies only when you ask us to submit your case.",
  "You can ask to see, correct or delete your information, and you can stop texts anytime (reply STOP).",
  "Questions? Call (510) 770-8700 or email the address in Section 14.",
];

export function PrivacyHero() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-body/60">
          <Link href="/" className="hover:text-maroon">Home</Link>
          <span className="mx-1.5">›</span>
          <span className="font-semibold text-ink">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-ink sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-xs text-body/60">
          Effective date: October 8, 2026 · Last updated: October 8, 2026
        </p>

        <FadeIn className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden="true" />
          <p className="text-sm font-semibold leading-relaxed text-ink">
            Draft pending legal review. This page is not legal advice and
            has not yet been approved by counsel. Several items (retention
            periods, whether the CCPA applies to BAIS, and whether our
            advertising tools count as "sharing" data) are placeholders
            pending confirmation — marked inline below.
          </p>
        </FadeIn>

        <FadeIn delay={70} className="mt-6 rounded-2xl border-l-4 border-maroon bg-white px-6 py-5">
          <p className="text-sm font-bold uppercase tracking-wide text-maroon">
            Privacy in 60 seconds
          </p>
          <ul className="mt-3 space-y-2">
            {quickPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-body">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
