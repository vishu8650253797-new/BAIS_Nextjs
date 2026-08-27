import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function TwoPathSection({ withIntro = true }: { withIntro?: boolean }) {
  return (
    <section className="bg-white py-24">
      <Container>
        {withIntro && (
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Built for Individuals &amp; Employers
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              The right path for your situation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Whether you&apos;re sponsoring talent or applying for your own
              visa, we handle every step of your case.
            </p>
          </div>
        )}

        <div className={withIntro ? "mt-12 grid gap-6 sm:grid-cols-2" : "grid gap-6 sm:grid-cols-2"}>
          <FadeIn>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/why-bais.jpg"
                  alt="Business handshake over a desk, representing employer sponsorship"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-maroon">
                  For Employers
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <h3 className="text-2xl font-bold text-ink">Hiring immigrant talent?</h3>
                  <p className="mt-3 text-base leading-relaxed text-body">
                    We handle documentation end-to-end, from H-1B and L-1
                    sponsorship to I-9 and E-Verify compliance.
                  </p>
                </div>
                <Link
                  href="/services#employment-immigration"
                  className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-maroon hover:text-white"
                >
                  Learn more
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-maroon/20 hover:shadow-xl hover:shadow-ink/10">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/about-story.jpg"
                  alt="Airplane wing above the clouds, representing an individual's immigration journey"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-maroon">
                  For Individuals &amp; Families
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <h3 className="text-2xl font-bold text-ink">Applying for a visa?</h3>
                  <p className="mt-3 text-base leading-relaxed text-body">
                    From work visas to green cards and family petitions, we
                    guide you to the strongest path forward.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-maroon hover:text-white"
                >
                  Explore services
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
