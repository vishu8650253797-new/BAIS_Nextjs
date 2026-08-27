import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { testimonials } from "@/data/testimonials";

const cardStyles = [
  "bg-white border border-border",
  "bg-cream",
  "bg-maroon text-white",
];

function initials(attribution: string) {
  return attribution.startsWith("via") ? "★" : attribution.slice(0, 1);
}

export function Testimonials() {
  const featured = testimonials.slice(0, 6);

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Client Experiences"
          title="What Our Clients Say"
          description="We value our clients' feedback. Read testimonials from our valued customers to see how our services have helped them succeed. Your satisfaction is our priority."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial, index) => {
            const style = cardStyles[index % cardStyles.length];
            const isDark = style.includes("text-white");
            return (
              <FadeIn key={testimonial.quote} delay={(index % 3) * 70}>
                <div
                  className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark ? "hover:shadow-maroon/20" : "hover:shadow-ink/10"} ${style}`}
                >
                  <Quote
                    className={isDark ? "size-6 text-white/40" : "size-6 text-maroon/30"}
                    aria-hidden="true"
                  />
                  <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-white/90" : "text-ink"}`}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-current/10 pt-4">
                    <span
                      className={
                        isDark
                          ? "flex size-8 items-center justify-center rounded-full bg-white/15 text-xs font-bold"
                          : "flex size-8 items-center justify-center rounded-full bg-maroon/10 text-xs font-bold text-maroon"
                      }
                    >
                      {initials(testimonial.attribution)}
                    </span>
                    <p className={`text-xs font-semibold ${isDark ? "text-white/70" : "text-body"}`}>
                      {testimonial.attribution}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
