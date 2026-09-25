import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, yearsInBusiness } from "@/data/site";

const highlights = [
  "H-1B, O-1, L-1A & TN work visa petitions",
  "EB-1A, EB-2 NIW, PERM & I-140 green cards",
  "H-2A & H-2B seasonal worker petitions",
  "RFE responses, expert letters & OCI",
];

export function AboutSection() {
  return (
    <section className="bg-cream py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            About Us
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            A Fremont Immigration Consultant Trusted Since {FOUNDED_YEAR}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
            <p>
              Bay Area Immigration Services (BAIS) has prepared immigration
              petitions from our office on Paseo Padre Parkway in Fremont for
              more than {yearsInBusiness()} years. We&apos;ve grown alongside
              the Bay Area&apos;s technology, research and healthcare
              workforce. We know the cases this community files most: H-1B
              petitions for growing companies, O-1 and L-1A visas for
              founders and leaders, PERM labor certifications, and
              self-petitioned green cards such as EB-1A and EB-2 NIW.
            </p>
            <p>
              Our focus is documentation, done thoroughly. We review your
              eligibility, organize your evidence, prepare every form and
              support letter, and assemble a complete, filing-ready petition.
              We keep you updated at every step, in English or Hindi.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm font-medium text-ink"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-maroon" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-10 inline-flex w-fit items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink"
          >
            More About Our Firm
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <FadeIn>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl shadow-ink/10">
            <Image
              src="/images/office-storefront.jpg"
              alt="Bay Area Immigration Services storefront and office entrance"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
