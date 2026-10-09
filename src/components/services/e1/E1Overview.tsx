import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function E1Overview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the E-1 Treaty Trader Visa?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>E-1 visa</strong> lets{" "}
            <strong>nationals of treaty countries</strong> enter the U.S. to
            run a business that carries on{" "}
            <strong>substantial trade</strong>,{" "}
            <strong>principally between the U.S. and their country</strong>.
            More than <strong>50%</strong> of your international trade must
            be with the U.S., and the business must be{" "}
            <strong>at least 50% owned</strong> by treaty nationals.
            There&apos;s <strong>no minimum investment</strong>, and
            it&apos;s <strong>renewable</strong>.
          </div>
        </FadeIn>

        <FadeIn delay={80} className="mt-5 rounded-2xl bg-ink p-6 text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/30">
          <h3 className="text-base font-bold text-white">
            Looking for an &quot;E-1 executive visa&quot;?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            <strong className="text-white">
              The E-1 isn&apos;t an executive visa.
            </strong>{" "}
            It&apos;s for traders. For a manager or executive visa, see{" "}
            <Link href="/services#employment-immigration" className="font-semibold text-accent hover:text-accent-dark">
              L-1A
            </Link>{" "}
            and{" "}
            <Link href="/services/eb-1c" className="font-semibold text-accent hover:text-accent-dark">
              EB-1C
            </Link>
            .
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
