import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function CompanyStory() {
  return (
    <section className="py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <FadeIn className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/about-story.jpg"
            alt="Airplane wing above the clouds, evoking international travel and relocation"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </FadeIn>

        <div>
          <SectionHeading eyebrow="Our Story" title="Built From Real Immigration Journeys" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
            <p>
              Bay Area Immigration Services was founded in 2001 to help
              individuals immigrate to the U.S. and Canada. Over time, our
              scope expanded to support clients pursuing opportunities in
              Australia, New Zealand, Ireland, Singapore, France, Germany,
              and beyond.
            </p>
            <p>
              Our expertise lies in immigrant and nonimmigrant visa
              documentation. We&apos;ve built particular depth in U.S. work
              visas — H-1B, L-1A, L-1B, O-1, J-1, TN, and E-3 — largely for
              clients in the IT and healthcare industries. Alongside work
              visas and green cards, we also prepare applications for
              nonimmigrant categories including E-1, E-2, B-1, B-2, and K-1.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
