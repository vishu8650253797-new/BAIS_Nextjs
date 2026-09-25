import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileBadge,
  Languages,
  Scale,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";
import { FOUNDED_YEAR, yearsInBusiness } from "@/data/site";

const cards = [
  {
    number: "01",
    icon: Users,
    title: `${yearsInBusiness()}+ Years in Fremont`,
    description: `Serving the Bay Area's professionals, employers and families since ${FOUNDED_YEAR}.`,
    cta: "Our Experience",
    href: "/about",
    dark: true,
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "99% Success Rate",
    description: "A track record built on thorough, well-documented petitions.",
    cta: "Our Results",
    href: "/about",
  },
  {
    number: "03",
    icon: FileBadge,
    title: "350+ Professor Network",
    description: "Credible expert opinion letters for EB-1A, NIW and O-1 cases.",
    cta: "Learn More",
    href: "/services#other-services",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Registered & Bonded",
    description:
      "A California-registered immigration consultant, Bond No. 5317191.",
    cta: "Verify Credentials",
    href: "/about",
  },
  {
    number: "05",
    icon: Star,
    title: "A+ BBB Rating",
    description: "Rated A+ by the Better Business Bureau.",
    cta: "See Our Reviews",
    href: "/#reviews",
  },
  {
    number: "06",
    icon: Languages,
    title: "EN · HI",
    description:
      "Clear communication in the language you're most comfortable with.",
    cta: "Get in Touch",
    href: "/contact",
  },
];

export function WhyBais() {
  return (
    <section className="bg-white py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-4 bg-accent/50" aria-hidden="true" />
            Why BAIS
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Why Bay Area Professionals
            <br />
            and Employers Choose <span className="text-maroon">BAIS</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-body">
            With years of experience and a client-first approach, we provide
            trusted immigration solutions for individuals, families and
            businesses across the Bay Area and beyond.
          </p>
        </div>

        <div className="relative mx-auto hidden aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl shadow-ink/20 lg:block">
          <Image
            src="/images/hero-bayarea.jpg"
            alt="Golden Gate Bridge and San Francisco skyline at sunset"
            fill
            sizes="(min-width: 1024px) 35vw, 90vw"
            className="object-cover"
          />
          <p
            aria-hidden="true"
            className="absolute -left-1 top-6 -rotate-6 select-none font-serif text-lg italic leading-snug text-white drop-shadow-md"
          >
            Your Immigration
            <br />
            Partner for a Brighter Future
          </p>
        </div>
      </Container>

      <Container className="mt-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 60}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1",
                  card.dark
                    ? "bg-ink text-white hover:shadow-xl hover:shadow-ink/30"
                    : "border border-border bg-white text-ink hover:shadow-xl hover:shadow-ink/5",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-11 shrink-0 items-center justify-center rounded-full",
                      card.dark ? "bg-white/10 text-white" : "bg-cream text-maroon",
                    )}
                  >
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-2 font-serif text-lg text-maroon">
                    {card.number}
                    <span
                      className={cn("h-px w-8", card.dark ? "bg-white/20" : "bg-border")}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <h3
                  className={cn(
                    "mt-6 text-xl font-bold",
                    card.dark ? "text-white" : "text-ink",
                  )}
                >
                  {card.title}
                </h3>
                <p
                  className={cn(
                    "mt-2.5 flex-1 text-sm leading-relaxed",
                    card.dark ? "text-white/70" : "text-body",
                  )}
                >
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className={cn(
                    "mt-6 inline-flex w-fit items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
                    card.dark
                      ? "bg-white text-maroon hover:bg-cream"
                      : "bg-cream text-ink hover:bg-maroon hover:text-white",
                  )}
                >
                  {card.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 flex flex-col items-start gap-6 rounded-2xl bg-ink px-8 py-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
              <Scale className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-serif text-lg italic text-white">
                Trusted. Experienced. On Your Side.
              </p>
              <p className="mt-1 text-sm text-white/60">
                Let our team help you navigate your immigration journey with
                confidence.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-cream"
          >
            Schedule a Consultation
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
