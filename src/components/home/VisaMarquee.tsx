import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cards = [
  {
    badge: "Work Visa",
    title: "H-1B Visa",
    description:
      "Cap petitions, transfers, extensions and amendments for Bay Area employers and professionals.",
    image: "/images/hero-bayarea.jpg",
    alt: "San Francisco Bay Area skyline, representing H-1B employers across the region.",
    href: "/services#employment-immigration",
  },
  {
    badge: "Work Visa",
    title: "O-1 Visa",
    description:
      "Extraordinary ability petitions for researchers, founders, engineers and artists.",
    image: "/images/hero-bayarea.jpg",
    alt: "San Francisco Bay Area skyline, representing O-1 extraordinary ability petitions.",
    href: "/services#employment-immigration",
  },
  {
    badge: "Work Visa",
    title: "L-1A Visa",
    description:
      "Intracompany transfers for managers and executives expanding to the U.S.",
    image: "/images/hero-bayarea.jpg",
    alt: "San Francisco Bay Area skyline, representing L-1A intracompany transfers.",
    href: "/services#employment-immigration",
  },
  {
    badge: "Green Card",
    title: "PERM & I-140",
    description:
      "Labor certification and immigrant petitions for employer-sponsored green cards.",
    image: "/images/about-story.jpg",
    alt: "Airplane wing above the clouds, representing PERM and I-140 green card petitions.",
    href: "/services#permanent-immigration",
  },
  {
    badge: "Green Card",
    title: "EB-1A Green Card",
    description:
      "Self-petition green cards built on your achievements. No employer needed.",
    image: "/images/about-story.jpg",
    alt: "Airplane wing above the clouds, representing EB-1A self-petition green cards.",
    href: "/services#permanent-immigration",
  },
  {
    badge: "Green Card",
    title: "EB-2 NIW",
    description:
      "National Interest Waiver petitions for professionals whose work benefits the U.S.",
    image: "/images/about-story.jpg",
    alt: "Airplane wing above the clouds, representing EB-2 National Interest Waiver petitions.",
    href: "/services#permanent-immigration",
  },
  {
    badge: "Employer",
    title: "H-2A Visa",
    description:
      "Seasonal agricultural worker petitions for U.S. farms and growers.",
    image: "/images/family-immigration.jpg",
    alt: "Sunset sky, representing H-2A seasonal agricultural worker petitions.",
    href: "/services#employment-immigration",
  },
  {
    badge: "Employer",
    title: "H-2B Visa",
    description:
      "Temporary non-agricultural worker petitions for seasonal and peak-load needs.",
    image: "/images/family-immigration.jpg",
    alt: "Sunset sky, representing H-2B temporary non-agricultural worker petitions.",
    href: "/services#employment-immigration",
  },
  {
    badge: "Case Support",
    title: "RFE Response",
    description:
      "Structured, evidence-backed responses to USCIS Requests for Evidence.",
    image: "/images/blog-workspace.jpg",
    alt: "Desk workspace, representing structured RFE response preparation.",
    href: "/services#other-services",
  },
  {
    badge: "Case Support",
    title: "Expert Opinion Letters",
    description:
      "Letters from our network of 350+ professors for EB-1A, NIW and O-1 cases.",
    image: "/images/blog-workspace.jpg",
    alt: "Desk workspace, representing expert opinion letter preparation.",
    href: "/services#other-services",
  },
  {
    badge: "Services",
    title: "OCI & Renunciation",
    description:
      "OCI cards and Indian passport renunciation for families across the Bay Area.",
    image: "/images/hero-liberty.jpg",
    alt: "Statue of Liberty, representing OCI and renunciation services.",
    href: "/services#other-services",
  },
];

function VisaCard({ card }: { card: (typeof cards)[number] }) {
  return (
    <div className="group flex h-[420px] w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/10 sm:h-[450px] sm:w-[380px]">
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
          <h3 className="line-clamp-1 text-xl font-bold text-ink">{card.title}</h3>
          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-body">
            {card.description}
          </p>
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
