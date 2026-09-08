import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FOUNDED_YEAR, yearsInBusiness } from "@/data/site";

const highlights = [
  "Immigrant & nonimmigrant visa documentation",
  "Work visas: H-1B, L-1A, L-1B, O-1, J-1, TN & E-3",
  "Green cards & employment-based petitions",
  "Family-based immigration & fiancé visas",
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
            About Bay Area Immigration Services
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
            <p>
              Founded in {FOUNDED_YEAR}, Bay Area Immigration Services has
              been offering immigration assistance to individuals worldwide
              for over {yearsInBusiness()} years. We started by helping
              people immigrate to the U.S. and Canada, and gradually
              expanded our scope to many other countries — including
              Australia, New Zealand, Ireland, Singapore, France, and
              Germany.
            </p>
            <p>
              Our expertise lies in immigrant and nonimmigrant visa
              documentation. We&apos;ve earned particular depth in U.S. work
              visas — H-1B, L-1A, L-1B, O-1, J-1, TN, and E-3 — primarily
              for clients in the IT and healthcare fields. Beyond work
              visas and green cards, we also file applications for
              nonimmigrant categories such as E-1, E-2, B-1, B-2, and K-1.
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
            More about our firm
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
