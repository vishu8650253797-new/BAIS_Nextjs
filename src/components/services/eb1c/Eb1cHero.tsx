import Link from "next/link";
import { ArrowUpRight, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const chips = [
  "25+ years since 2001",
  "99% success rate*",
  "Bond No. 5317191",
  "Video consults worldwide",
  "English & Hindi",
];

const formFields = [
  "Full name",
  "Business email",
  "Phone / WhatsApp",
  "Country of birth",
  "Current status (L-1A, other U.S. visa, or abroad)",
  "U.S. company operating (<1 yr, 1–2 yrs, 2+ yrs)",
  "Your role (owner, executive, or manager)",
];

export function Eb1cHero() {
  return (
    <section className="bg-gradient-to-br from-cream via-cream to-[#e9d3c0] py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-body/60">
            <Link href="/" className="hover:text-maroon">Home</Link>
            <span className="mx-1.5">›</span>
            <Link href="/services" className="hover:text-maroon">Services</Link>
            <span className="mx-1.5">›</span>
            <Link href="/services#permanent-immigration" className="hover:text-maroon">
              Green Cards
            </Link>
            <span className="mx-1.5">›</span>
            <span className="font-semibold text-ink">EB-1C</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-maroon">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            First-Preference Green Card · Multinational Managers &amp; Executives
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.15] text-ink sm:text-[2.6rem]">
            EB-1C Green Card: A Direct Route for{" "}
            <span className="text-maroon">Multinational Managers &amp; Executives</span>
          </h1>
          <span className="mt-4 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />

          <p className="mt-6 max-w-xl text-base leading-relaxed text-body">
            No PERM labor certification. No job-market test. No visa backlog
            for most countries. If you manage or lead a company with offices
            in the U.S. and abroad, EB-1C can take you, and your family, from
            L-1A to a U.S. green card.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
              Get a Free EB-1C Case Review
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={site.phoneHref} variant="inverse" size="lg">
              Call {site.phone}
              <Phone className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-ink transition-colors duration-200 hover:bg-maroon hover:text-white"
              >
                {chip}
              </span>
            ))}
          </div>

          <p className="mt-5 text-xs text-body/60">
            Updated September 30, 2026 · Visa Bulletin dates reflect the
            October 2026 bulletin
          </p>
        </div>

        <FadeIn delay={100} className="rounded-2xl bg-white p-6 shadow-xl shadow-ink/10 transition-shadow duration-300 hover:shadow-2xl sm:p-7">
          <h2 className="text-lg font-bold text-ink">Free EB-1C Case Review</h2>
          <p className="mt-1 text-xs text-body/60">
            Two minutes. We&apos;ll reply within 1 business day.
          </p>

          <ul className="mt-4 space-y-2">
            {formFields.map((field) => (
              <li
                key={field}
                className="rounded-lg border border-border px-3.5 py-2.5 text-xs text-body/70 transition-colors duration-200 hover:border-maroon/30 hover:bg-cream/60"
              >
                {field}
              </li>
            ))}
          </ul>

          <p className="mt-3 text-[10.5px] leading-relaxed text-body/60">
            By continuing, you agree that Bay Area Immigration Services may
            contact you by phone, text, or email about your inquiry. Message
            and data rates may apply. Consent is not a condition of any
            service. See our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>

          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink"
          >
            Check My EB-1C Eligibility
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <p className="mt-2 text-center text-[10.5px] text-body/50">
            No cost, no obligation. Submitting this form does not create a
            client relationship.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
