import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cards = [
  {
    badge: "Nonimmigrant Visa",
    title: "Work Visa",
    description:
      "For people who want to get started on working in the U.S. in a variety of available fields & professions.",
    image: "/images/why-bais.jpg",
    alt: "Business handshake over a desk, representing starting work in the U.S.",
    href: "/services#employment-immigration",
  },
  {
    badge: "Immigrant Visa",
    title: "Permanent Visa",
    description:
      "For people to settle down in the United States by obtaining a legal permanent residency status.",
    image: "/images/about-story.jpg",
    alt: "Airplane wing above the clouds, representing settling permanently in the U.S.",
    href: "/services#permanent-immigration",
  },
  {
    badge: "Nonimmigrant Visa",
    title: "Business Visa",
    description:
      "For people who want to visit the U.S. for a short duration for business related reasons like conferences.",
    image: "/images/contact-office.jpg",
    alt: "Modern office building exterior, representing business visits to the U.S.",
    href: "/services#business-investor",
  },
  {
    badge: "Family Immigration",
    title: "Family Immigration",
    description:
      "Guidance for bringing family members to the United States and keeping households together.",
    image: "/images/family-immigration.jpg",
    alt: "Family walking together on the beach at sunset, representing family reunification.",
    href: "/services#family-immigration",
  },
  {
    badge: "U.S. Citizenship",
    title: "U.S. Citizenship",
    description: "Naturalization (Form N-400) preparation support.",
    image: "/images/services-hero.jpg",
    alt: "Organized planning notebook and documents on a desk, representing citizenship paperwork.",
    href: "/services#permanent-immigration",
  },
  {
    badge: "Other Services",
    title: "Other Services",
    description:
      "I-9 Verification, E-Verify, RFE assistance, and Global Mobility support for individuals and employers.",
    image: "/images/hero-bayarea.jpg",
    alt: "San Francisco Bay Area skyline, representing employer compliance services across the region.",
    href: "/services#other-services",
  },
];

function VisaCard({ card }: { card: (typeof cards)[number] }) {
  return (
    <div className="group flex h-full w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/10 sm:w-[380px]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="380px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-maroon">
          {card.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-7">
        <div>
          <h3 className="text-xl font-bold text-ink">{card.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-body">{card.description}</p>
        </div>
        <Link
          href={card.href}
          className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Explore services
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function VisaMarquee() {
  const track = [...cards, ...cards];

  return (
    <section className="bg-white py-24">
      <Container className="max-w-2xl text-center">
        <p className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Visa Categories
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          The right path for your situation
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-body">
          Whether you&apos;re sponsoring talent, reuniting with family, or
          applying for your own visa, we handle every step of your case.
        </p>
      </Container>

      <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max animate-marquee-slow gap-6 group-hover:[animation-play-state:paused]">
          {track.map((card, i) => (
            <VisaCard key={`${card.title}-${i}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
