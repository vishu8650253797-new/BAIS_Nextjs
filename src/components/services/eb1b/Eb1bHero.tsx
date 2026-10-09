import Link from "next/link";
import { ArrowUpRight, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const chips = [
  "350+ professors & industry experts",
  "Since 2001",
  "Bond No. 5317191",
  "English & Hindi",
];

const formFields = [
  "Name",
  "Email",
  "Phone / WhatsApp",
  "I am a… (Professor / Postdoc / Researcher / Employer)",
  "Employer type (University / Institute / Private R&D)",
  "Years of research / teaching (3 / 5 / 10+)",
  "Current status (H-1B / J-1 / O-1 / F-1 / Other)",
  "Country of birth",
];

export function Eb1bHero() {
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
            <span className="font-semibold text-ink">EB-1B Outstanding Professors &amp; Researchers</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-maroon">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            EB-1B · Outstanding Professors &amp; Researchers · Employer-Filed · No PERM
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.15] text-ink sm:text-[2.6rem]">
            EB-1B Green Card for{" "}
            <span className="text-maroon">Outstanding Professors and Researchers</span>
          </h1>
          <span className="mt-4 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />

          <p className="mt-6 max-w-xl text-base leading-relaxed text-body">
            A first-preference green card with{" "}
            <strong>no PERM labor certification</strong>. If you&apos;re a
            professor, postdoc or researcher with international recognition
            and a permanent offer, we map your evidence, arrange independent
            expert letters, and prepare the I-140 with your employer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
              Check My EB-1B Eligibility: Free
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={site.phoneHref} variant="inverse" size="lg">
              Call {site.phone}
              <Phone className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:text-maroon-dark"
          >
            Employers: Plan an EB-1B Petition →
          </Link>

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
            Updated October 8, 2026 · Reflects the October 2026 Visa Bulletin
            and 2026 USCIS fees
          </p>
        </div>

        <FadeIn delay={100} className="rounded-2xl bg-white p-6 shadow-xl shadow-ink/10 transition-shadow duration-300 hover:shadow-2xl sm:p-7">
          <h2 className="text-lg font-bold text-ink">Free EB-1B Evidence Map</h2>
          <p className="mt-1 text-xs text-body/60">
            Tell us about your research. We&apos;ll reply within 1 business
            day.
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

          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink"
          >
            Get My Free EB-1B Map
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
