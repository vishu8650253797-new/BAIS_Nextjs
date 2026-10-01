import Link from "next/link";
import {
  Building2,
  FileEdit,
  FileText,
  Globe2,
  Layers,
  Repeat,
  Search,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const services = [
  { icon: Search, title: "EB-1C Case Evaluation", href: site.bookingUrl, external: true },
  { icon: FileText, title: "EB-1C I-140 Petition", href: site.bookingUrl, external: true },
  { icon: Repeat, title: "L-1A to EB-1C Planning", href: site.bookingUrl, external: true },
  { icon: Layers, title: "Concurrent I-140 + I-485", href: site.bookingUrl, external: true },
  { icon: Globe2, title: "Consular Processing Support", href: site.bookingUrl, external: true },
  { icon: FileEdit, title: "EB-1C RFE Response", href: "/services#other-services", external: false },
  { icon: Users, title: "Family: EAD & Advance Parole", href: site.bookingUrl, external: true },
  { icon: Building2, title: "L-1A New Office", href: "/services#employment-immigration", external: false },
];

export function Eb1cServicesGrid() {
  return (
    <section className="bg-white py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Our services
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Our EB-1C Services
        </h2>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const content = (
              <>
                <span className="flex size-9 items-center justify-center rounded-lg bg-cream text-maroon">
                  <service.icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-ink">{service.title}</h3>
              </>
            );

            return (
              <FadeIn key={service.title} delay={index * 40}>
                {service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-xl hover:shadow-ink/5"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    className="block h-full rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-xl hover:shadow-ink/5"
                  >
                    {content}
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
