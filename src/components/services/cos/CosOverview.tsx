import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function CosOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is a Change of Status?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            A <strong>change of status</strong> lets someone already in the
            U.S. in one nonimmigrant category, such as B-2 visitor or F-1
            student, switch to another, such as F-1 or H-1B,{" "}
            <strong>without leaving the country</strong>. Most people file{" "}
            <strong>Form I-539</strong>; work categories are requested by
            the <strong>employer on Form I-129</strong>. It&apos;s different
            from <strong>adjustment of status</strong>, which is applying
            for a <strong>green card</strong>.
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
