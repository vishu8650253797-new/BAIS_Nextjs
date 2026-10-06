import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function O1GreenCard() {
  return (
    <section className="bg-cream py-20">
      <Container>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          From O-1 to Green Card
        </h2>
        <FadeIn>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body">
            Many O-1 holders move on to a green card through{" "}
            <strong className="text-ink">EB-1A</strong> (extraordinary
            ability, a self-petition with no employer needed) or{" "}
            <strong className="text-ink">EB-2 NIW</strong> (national
            interest waiver). The evidence you build for the O-1 often
            becomes the foundation for EB-1A. O-1 status has no
            foreign-residence requirement, so you can generally pursue a
            green card while on O-1.
          </p>
        </FadeIn>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Link
            href="/services#permanent-immigration"
            className="inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
          >
            Explore EB-1A
          </Link>
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-body/60 hover:text-maroon"
          >
            Talk to us about your green card path →
          </Link>
        </div>
      </Container>
    </section>
  );
}
