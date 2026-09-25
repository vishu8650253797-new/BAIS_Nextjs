import {
  ArrowUpRight,
  Clock,
  FileCheck,
  Globe2,
  Lock,
  Phone,
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
    title: "Registered & Bonded",
    description: "California Bond No. 5317191",
  },
  {
    icon: Target,
    title: "99% Success Rate*",
    description: "On petitions prepared by BAIS",
  },
  {
    icon: FileCheck,
    title: "End-to-End Support",
    description: "From free consultation to filing",
  },
];

const bottomStats = [
  {
    icon: Globe2,
    title: "Free Consultation",
    description: "An honest case review at no charge",
  },
  {
    icon: Sparkles,
    title: "350+ Expert Network",
    description: "Professors for expert opinion letters",
  },
  {
    icon: Clock,
    title: "English & Hindi",
    description: "Speak with us in your language",
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    description: "Your documents and data are protected",
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
            Registered &amp; Bonded Immigration Consultant
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.12] sm:text-5xl">
            <span className="block text-ink">Immigration Document Preparation</span>
            <span className="block text-maroon">in Fremont &amp; the Bay Area.</span>
          </h1>
          <span className="mt-4 block h-1 w-14 rounded-full bg-maroon" aria-hidden="true" />

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
            Since {FOUNDED_YEAR}, Bay Area Immigration Services has helped
            professionals, employers and families across the Bay Area prepare
            strong, well-organized H-1B, O-1, L-1A, PERM, EB-1A and EB-2 NIW
            petitions. Visit our Fremont office or work with us remotely, in
            English or Hindi.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Book a Free Consultation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={site.phoneHref} variant="inverse" size="lg">
              Call {site.phone}
              <Phone className="size-4" aria-hidden="true" />
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
