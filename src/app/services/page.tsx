import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ServiceCategoryBlock } from "@/components/services/ServiceCategoryBlock";
import { CTASection } from "@/components/shared/CTASection";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Bay Area Immigration Services' documentation and case-support services across employment, family, permanent residency, business, and investor immigration.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/services-hero.jpg"
          alt="Organized planning notebook and documents on a desk"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />

        <Container className="relative py-20 sm:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
            What We Do
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Immigration Services Designed Around Your Journey
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            From your first work visa to permanent residency and citizenship,
            explore the categories we prepare documentation for below.
          </p>
        </Container>
      </section>

      <section className="border-b border-border bg-cream py-6">
        <Container>
          <nav aria-label="Service categories" className="flex flex-wrap gap-x-6 gap-y-2">
            {serviceCategories.map((category) => (
              <Link
                key={category.slug}
                href={`#${category.slug}`}
                className="text-sm font-semibold text-body transition-colors hover:text-maroon"
              >
                {category.title}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <Container>
        {serviceCategories.map((category) => (
          <ServiceCategoryBlock key={category.slug} category={category} />
        ))}
      </Container>

      <CTASection
        title="Not Sure Which Category Fits Your Case?"
        description="A consultation with our team can help you identify the right path before you begin documentation."
      />
    </>
  );
}
