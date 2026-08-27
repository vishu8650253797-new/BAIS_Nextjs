import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection({
  title,
  description,
  primaryLabel = "Schedule a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-maroon py-20">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
          {description}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href={primaryHref} size="lg" variant="inverse">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="ghost" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
