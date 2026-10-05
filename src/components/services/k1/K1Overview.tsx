import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function K1Overview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is a K-1 Fiancé(e) Visa?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>K-1 visa</strong> lets a <strong>U.S. citizen</strong>{" "}
            bring a foreign <strong>fiancé(e)</strong> to the United States
            to <strong>marry within 90 days</strong> of arrival. After the
            wedding, the fiancé(e) applies for a <strong>green card</strong>{" "}
            without leaving the U.S. The couple must be legally free to
            marry and must generally have{" "}
            <strong>met in person within the past two years</strong>.
          </div>
        </FadeIn>

        <FadeIn delay={70} className="mt-5 rounded-2xl bg-ink/5 px-6 py-4 text-sm leading-relaxed text-body">
          Don&apos;t worry about marital history, criminal history or other
          sensitive details up front &mdash; we collect those privately
          during your consultation, not on a public form.
        </FadeIn>
      </Container>
    </section>
  );
}
