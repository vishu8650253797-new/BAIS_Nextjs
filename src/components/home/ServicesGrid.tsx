import Link from "next/link";
import { ArrowUpRight, Briefcase, Building2, Home, LayoutGrid, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { serviceCategories } from "@/data/services";

const categoryIcons = [Briefcase, Users, Home, Building2, LayoutGrid];

export function ServicesGrid() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Immigration Services Built Around Your Path"
          description="From your first work visa to permanent residency, our team prepares the documentation your case needs, category by category."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <FadeIn key={category.slug} delay={index * 60}>
                <Link
                  href={`/services#${category.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-lg hover:shadow-ink/5"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg bg-cream text-maroon">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{category.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                    {category.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon">
                    Explore services
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
