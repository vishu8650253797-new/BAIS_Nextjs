import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

export function PrivacyFinalCta() {
  return (
    <section className="bg-white py-16">
      <Container>
        <FadeIn className="flex flex-col gap-6 rounded-[2rem] bg-maroon px-8 py-10 shadow-2xl shadow-maroon/20 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Questions About This Page?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
              Call {site.phone} or email {site.email}.{" "}
              {site.hours.weekdays} (Pacific).
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row lg:items-center">
            <Button href="/contact" variant="inverse" size="lg">
              Contact Us
            </Button>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:text-white"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:text-white"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email Us
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
