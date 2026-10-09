import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function Eb1bOverview() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What Is the EB-1B Green Card?
        </h2>
        <FadeIn>
          <div className="mt-5 rounded-r-2xl border-l-4 border-maroon bg-cream px-6 py-5 text-base leading-relaxed text-ink transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
            The <strong>EB-1B</strong> is a first-preference green card for{" "}
            <strong>outstanding professors and researchers</strong>. You
            need <strong>international recognition</strong>, at least{" "}
            <strong>3 years of teaching or research</strong>, and a{" "}
            <strong>permanent job offer</strong>. Your{" "}
            <strong>employer files Form I-140</strong>, and{" "}
            <strong>no PERM labor certification</strong> is required.
          </div>
        </FadeIn>

        <FadeIn delay={80} className="mt-5 rounded-2xl bg-ink p-6 text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/30">
          <h3 className="text-base font-bold text-white">
            Can I self-petition for EB-1B?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            <strong className="text-white">
              No. EB-1B must be filed by an employer.
            </strong>{" "}
            No sponsoring employer?{" "}
            <strong className="text-white">EB-1A</strong> allows
            self-petition, and so does the{" "}
            <strong className="text-white">EB-2 NIW</strong>.
          </p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/services/eb-1a" className="font-semibold text-accent hover:text-accent-dark">
              See EB-1A →
            </Link>
            <Link href="/services/eb-2-niw" className="font-semibold text-accent hover:text-accent-dark">
              See NIW →
            </Link>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
