import Link from "next/link";
import {
  Award,
  Brain,
  Building2,
  Clock,
  FileText,
  Globe2,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const services = [
  {
    icon: Building2,
    title: "New Office L-1A",
    description: "Structure review, business plan guidance and full petition for companies opening a U.S. office.",
    cta: "Get started",
    href: site.bookingUrl,
    external: true,
  },
  {
    icon: RefreshCw,
    title: "L-1A Transfer (Established Office)",
    description: "Move a manager or executive to your existing U.S. operation.",
    cta: "Get started",
    href: site.bookingUrl,
    external: true,
  },
  {
    icon: TrendingUp,
    title: "New Office Extension (Year 1)",
    description: "Show USCIS your office is operating, staffed and growing.",
    cta: "Get started",
    href: site.bookingUrl,
    external: true,
  },
  {
    icon: Clock,
    title: "L-1A Extensions",
    description: "Two-year extensions up to the 7-year maximum.",
    cta: "Get started",
    href: site.bookingUrl,
    external: true,
  },
  {
    icon: Globe2,
    title: "Blanket L Petitions",
    description: "One approval covering many transfers for larger multinationals.",
    cta: "Get started",
    href: site.bookingUrl,
    external: true,
  },
  {
    icon: Brain,
    title: "L-1B Specialized Knowledge",
    description: "Transfer employees with specialized company knowledge.",
    cta: "Learn more",
    href: "/services#employment-immigration",
    external: false,
  },
  {
    icon: Users,
    title: "L-2 Spouse & Children",
    description: "Visas, extensions and work authorization for your family.",
    cta: "Learn more",
    href: "/services#family-immigration",
    external: false,
  },
  {
    icon: FileText,
    title: "L-1 RFE Response",
    description: "Organized, evidence-backed responses to USCIS Requests for Evidence.",
    cta: "Learn more",
    href: "/services#other-services",
    external: false,
  },
  {
    icon: Award,
    title: "EB-1C Green Card",
    description: "Permanent residency for multinational managers and executives.",
    cta: "Learn more",
    href: "/services/eb-1c",
    external: false,
  },
];

export function L1aServicesGrid() {
  return (
    <section className="bg-white py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Our services
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Our L-1A &amp; L-1 Services
        </h2>

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
