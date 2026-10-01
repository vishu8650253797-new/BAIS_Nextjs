import Link from "next/link";
import {
  Award,
  Calendar,
  FileEdit,
  FileText,
  GraduationCap,
  Plus,
  RefreshCw,
  Repeat,
  Timer,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const services = [
  { icon: Calendar, title: "Cap Registration & Petition", description: "Wage-level strategy, electronic registration and complete I-129 petitions.", cta: "Get started", href: site.bookingUrl, external: true },
  { icon: RefreshCw, title: "H-1B Transfer", description: "Change employers smoothly. Start work once the new petition is filed.", cta: "Get started", href: site.bookingUrl, external: true },
  { icon: Timer, title: "H-1B Extension", description: "Extend beyond 3 years, or past 6 with a pending green card.", cta: "Learn more", href: "/services#employment-immigration", external: false },
  { icon: FileEdit, title: "H-1B Amendment", description: "Worksite moves, remote work or job changes needing a new LCA.", cta: "Learn more", href: "/services#employment-immigration", external: false },
  { icon: Plus, title: "Concurrent H-1B", description: "Work for a second employer part-time while keeping your current H-1B.", cta: "Learn more", href: "/services#employment-immigration", external: false },
  { icon: GraduationCap, title: "Cap-Exempt H-1B", description: "Universities and research nonprofits: file year-round, no lottery.", cta: "Get started", href: site.bookingUrl, external: true },
  { icon: Repeat, title: "F-1 / OPT to H-1B", description: "Change of status inside the U.S., including cap-gap coverage.", cta: "Learn more", href: "/services#other-services", external: false },
  { icon: FileText, title: "H-1B RFE Response", description: "Organized, evidence-backed responses to USCIS Requests for Evidence.", cta: "Learn more", href: "/services#other-services", external: false },
  { icon: Users, title: "H-4 & H-4 EAD", description: "Dependent visas and work permits for spouses and children.", cta: "Get started", href: site.bookingUrl, external: true },
  { icon: Award, title: "H-1B to Green Card", description: "PERM labor certification, I-140 and adjustment of status.", cta: "Learn more", href: "/services#permanent-immigration", external: false },
];

export function H1bServicesGrid() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Our services
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Our H-1B Visa Services</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-body/70">
          Every stage of the H-1B lifecycle, prepared and filed on time.
        </p>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const inner = (
              <>
                <span className="flex size-10 items-center justify-center rounded-lg bg-cream text-maroon">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
                <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-ink">
                  {service.cta} →
                </span>
              </>
            );

            return (
              <FadeIn key={service.title} delay={index * 40}>
                {service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-xl hover:shadow-ink/5"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    className="block h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-xl hover:shadow-ink/5"
                  >
                    {inner}
                  </Link>
                )}
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
