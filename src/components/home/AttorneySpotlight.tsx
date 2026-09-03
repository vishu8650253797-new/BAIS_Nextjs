import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function AttorneySpotlight() {
  return (
    <section className="bg-white py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <FadeIn className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl shadow-ink/10">
          <Image
            src="/images/founder-placeholder.jpg"
            alt="Portrait of our immigration attorney"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </FadeIn>

        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Meet Our Attorney
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Jordan Whitfield, Esq.</h2>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-body/60">
            Immigration Attorney
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
            <p>
              With years of experience guiding individuals, families, and
              employers through U.S. immigration law, Jordan brings clear,
              practical counsel to every case — from the first consultation
              to final approval.
            </p>
            <p>
              Jordan works closely with our documentation team to make sure
              every petition reflects sound legal strategy, not just
              paperwork, giving clients confidence at every stage of their
              case.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            Schedule a consultation
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
