import {
  ArrowUpRight,
  Clock,
  FileCheck,
  Globe2,
  Headset,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/home/HeroBackground";
import { VisaPathCard } from "@/components/home/mockups/VisaPathCard";
import { FOUNDED_YEAR, site, yearsInBusiness } from "@/data/site";

const trustBullets = [
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    description: "Experienced immigration consultants",
  },
  {
    icon: Target,
    title: "Personalized Strategy",
    description: "Tailored to your specific goals",
  },
  {
    icon: FileCheck,
    title: "End-to-End Support",
    description: "From consultation to filing",
  },
];

const bottomStats = [
  {
    icon: Globe2,
    title: "International Reach",
    description: "Serving clients across multiple countries",
  },
  {
    icon: Sparkles,
    title: "Detailed Case Review",
    description: "A $100 consultation for every case",
  },
  {
    icon: Clock,
    title: "Timely & Affordable",
    description: "Efficient service from consultation to filing",
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    description: "Your privacy and information are protected",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/55 via-40% to-transparent to-72%" />

      <Container className="relative grid gap-12 pb-14 pt-20 sm:pt-24 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-maroon backdrop-blur-sm">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            USA Visa Consultants
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.12] sm:text-5xl">
            <span className="block text-ink">Global mobility advisory for U.S. relocation.</span>
            <span className="block text-maroon">Services in California.</span>
          </h1>
          <span className="mt-4 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
            Our immigration consultants in California offer personalized
            guidance for all U.S. visa types, including work, family, and
            business visas. Let us help you navigate the process with ease.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Contact Us
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              size="lg"
            >
              Book a Consultation
              <Headset className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {trustBullets.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-maroon backdrop-blur-sm">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-bold text-ink">{title}</dt>
                  <dd className="text-xs leading-snug text-body">{description}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-white/80 py-2 pl-2 pr-5 backdrop-blur-sm">
            <span className="flex size-8 items-center justify-center rounded-full bg-maroon text-xs font-bold text-white">
              {FOUNDED_YEAR}
            </span>
            <span className="text-sm text-body">
              <span className="font-bold text-ink">{yearsInBusiness()}+ years</span> serving
              clients across the Bay Area
            </span>
          </div>
        </div>

        <VisaPathCard />
      </Container>

      <div className="relative border-t border-white/10 bg-ink/95">
        <Container>
          <div className="grid grid-cols-2 gap-6 py-6 sm:grid-cols-4">
            {bottomStats.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="text-xs leading-snug text-white/60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
