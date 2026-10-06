import Link from "next/link";
import { ArrowUpRight, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const chips = [
  "Helping Bay Area families since 2001",
  "Fremont office",
  "Bond No. 5317191",
  "A+ BBB rating",
  "English & Hindi",
];

const formFields = [
  "Name",
  "Email",
  "Phone / WhatsApp",
  "Green card since (mm/yyyy)",
  "Married to a U.S. citizen? (Yes / No)",
  "Trips over 6 months? (No / Yes / Not sure)",
  "City (Fremont / San Jose / Oakland)",
];

export function CitizenshipHero() {
  return (
    <section className="bg-gradient-to-br from-cream via-cream to-[#e9d3c0] py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-body/60">
            <Link href="/" className="hover:text-maroon">Home</Link>
            <span className="mx-1.5">›</span>
            <Link href="/services" className="hover:text-maroon">Services</Link>
            <span className="mx-1.5">›</span>
            <span className="font-semibold text-ink">U.S. Citizenship</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-maroon">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            U.S. Citizenship · Form N-400 · Fremont &amp; the Bay Area
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.15] text-ink sm:text-[2.6rem]">
            Become a U.S. Citizen,{" "}
            <span className="text-maroon">With Help You Can Trust in the Bay Area</span>
          </h1>
          <span className="mt-4 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />

          <p className="mt-6 max-w-xl text-base leading-relaxed text-body">
            You&apos;ve built your life here. Let&apos;s make it official. We
            check your eligibility, prepare your N-400 the right way, help
            you practice for the new civics test, and stay with you until
            your oath day, and after.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={site.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
              Check My Eligibility Free
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
            Updated October 7, 2026 · Includes the 2025 civics test and
            current USCIS rules
          </p>
        </div>

        <FadeIn delay={100} className="rounded-2xl bg-white p-6 shadow-xl shadow-ink/10 transition-shadow duration-300 hover:shadow-2xl sm:p-7">
          <h2 className="text-lg font-bold text-ink">2-Minute Citizenship Check</h2>
          <p className="mt-1 text-xs text-body/60">
            Answer a few questions. We&apos;ll reply within 1 business day.
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
            Check My Eligibility
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
