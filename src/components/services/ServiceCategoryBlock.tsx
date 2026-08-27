import type { ServiceCategory } from "@/data/services";
import { FadeIn } from "@/components/shared/FadeIn";
import { ServiceLinkCard } from "@/components/services/ServiceLinkCard";

export function ServiceCategoryBlock({ category }: { category: ServiceCategory }) {
  return (
    <div id={category.slug} className="scroll-mt-28 border-t border-border py-14 first:border-t-0 first:pt-0">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{category.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-body">{category.description}</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.services.map((service, index) => (
          <FadeIn key={service.slug} delay={index * 40}>
            <ServiceLinkCard service={service} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
