import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function E2Overview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the E-2 Treaty Investor Visa?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>E-2 visa</strong> lets{" "}
            <strong>nationals of treaty countries</strong> enter the U.S. to{" "}
            <strong>develop and direct a business</strong> they have
            invested in. The investment must be <strong>substantial</strong>,
            at risk, and in a <strong>real, operating business</strong> that
            is more than marginal. There&apos;s{" "}
            <strong>no fixed minimum</strong>. It&apos;s{" "}
            <strong>renewable</strong>, and{" "}
            <strong>spouses and children</strong> can come too.
          </div>
        </FadeIn>
        <p className="mt-4 text-xs leading-relaxed text-body/60">
          If your country isn&apos;t a treaty country, see the alternatives
          below. BAIS does not sell or broker businesses.
        </p>
      </Container>
    </section>
  );
}
