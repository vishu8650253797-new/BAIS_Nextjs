import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CaseStatusCard } from "@/components/home/mockups/CaseStatusCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Image
        src="/images/hero-bayarea.jpg"
        alt="San Francisco Bay Area skyline and Golden Gate Bridge at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream from-25% via-cream/85 via-55% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream/50 via-transparent to-transparent" />

      <Container className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <h1 className="text-4xl font-bold leading-[1.12] sm:text-5xl">
            <span className="block text-ink">Navigate your immigration case.</span>
            <span className="block text-maroon">We&apos;ll handle the paperwork.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
            Bay Area Immigration Services is an immigration consultancy for
            individuals, families, and employers. Our team leads every case,
            and you have complete visibility from consultation to filing.
          </p>

          <div className="mt-9">
            <Button href="/contact" size="lg">
              Get Started
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <CaseStatusCard />
      </Container>
    </section>
  );
}
