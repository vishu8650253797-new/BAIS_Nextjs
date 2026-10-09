import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const alternatives = [
  { label: "L-1A", title: "Then EB-1C", description: "Owners and managers with a foreign company.", href: "/services#employment-immigration" },
  { label: "EB-5", title: "Investor green card", description: "Any nationality.", href: "/services#business-investor" },
  { label: "O-1", title: "Extraordinary ability", description: "O-1 or EB-1A.", href: "/services/o-1-visa" },
  { label: "H-1B", title: "With a U.S. employer", description: "Specialty occupations.", href: "/services/h-1b-visa" },
];

export function E2CheckCountry() {
  return (
    <section id="check-your-country" className="scroll-mt-24 bg-cream py-20">
      <Container>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
          Check your country
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Is Your Country an E-2 Treaty Country?
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn className="h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
            <h3 className="text-base font-bold text-emerald-700">Eligible (examples)</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Canada, Mexico, United Kingdom, Germany, France, Italy, Spain,
              Portugal, Japan, South Korea, Taiwan, Philippines, Pakistan,
              Bangladesh, Australia, New Zealand, Argentina, Colombia and
              about 60 more. <strong className="text-ink">81 countries</strong>{" "}
              on the State Department table (August–September 2026).
            </p>
          </FadeIn>
          <FadeIn delay={80} className="h-full rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/30">
            <h3 className="text-base font-bold text-accent">Not on the list</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              <strong className="text-white">
                India, mainland China, Brazil, Russia
              </strong>
              , Saudi Arabia, UAE, Vietnam, South Africa. Bolivia and Ecuador
              are limited to existing investments; Greece and Brunei are E-1
              only. Two passports? A treaty-country passport can qualify
              you.
            </p>
          </FadeIn>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {alternatives.map((item, index) => (
            <FadeIn key={item.title} delay={index * 50}>
              <Link
                href={item.href}
                className="block h-full rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-cream text-xs font-bold text-maroon">
                  {item.label}
                </span>
                <h3 className="mt-3 text-sm font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-body">{item.description}</p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <Link
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
        >
          Not Sure? Free Country and Eligibility Check
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
