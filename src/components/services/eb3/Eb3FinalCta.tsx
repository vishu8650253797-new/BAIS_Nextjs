import { Phone, Users, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function Eb3FinalCta() {
  return (
    <section className="bg-cream py-16">
      <Container>
        <FadeIn className="flex flex-col gap-8 rounded-[2rem] bg-maroon px-8 py-12 shadow-2xl shadow-maroon/20 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Sponsor Your Best People, or Secure Your Own Green Card
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
              Book a free strategy call. We&apos;ll map the full
              PERM-to-green-card plan, with dates, costs and who does what.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-maroon shadow-lg shadow-ink/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream sm:w-auto"
            >
              <Users className="size-4" aria-hidden="true" />
              Employers: Plan a PERM Case
            </a>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto"
            >
              <UserCheck className="size-4" aria-hidden="true" />
              Employees: Check My Path
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-white"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
