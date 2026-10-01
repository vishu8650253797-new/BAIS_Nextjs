import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const reviews = [
  {
    initials: "DS",
    name: "Dennis Sharma",
    label: "Green card",
    quote:
      "We acquired their service to apply for green card… and they delivered it in specified period. We are very happy with their service.",
  },
  {
    initials: "SZ",
    name: "Selim Zaman",
    label: "Client review",
    quote:
      "Excellent service and professional, friendly staff. They are experienced and knowledgeable on various visa categories.",
  },
  {
    initials: "PL",
    name: "Pedro Ivan Lopez",
    label: "Client review",
    quote:
      "I am very grateful and satisfied with the professionalism and effectiveness of Bay Area Immigration Services Inc.",
  },
];

export function Eb1cReviews() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Client reviews
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">What Our Clients Say</h2>

        <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-sm">
          <span className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" aria-hidden="true" />
            ))}
          </span>
          <span className="font-bold text-ink">4.4 on Google</span>
          <span className="text-body/60">· 212 reviews</span>
        </div>

        <div className="mt-8 grid gap-5 text-left sm:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 70}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-sm font-bold text-maroon">
                    {review.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{review.name}</p>
                    <p className="text-xs text-body/50">{review.label}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-xs text-body/50">
          Reviews reflect individual experiences. Results vary based on the
          facts of each case.
        </p>
      </Container>
    </section>
  );
}
