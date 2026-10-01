import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const googleReviewUrl = `https://www.google.com/search?q=${encodeURIComponent(
  `${site.name} ${site.address.city} ${site.address.state} reviews`,
)}`;

const reviews = [
  {
    initials: "KR",
    name: "Krathik Rodriguez",
    label: "Work authorization",
    quote:
      "I had the opportunity to work with Bay Area Immigration Services this year related to my work authorization and they were able to help me succeed in it.",
  },
  {
    initials: "CS",
    name: "Chattrue Sath",
    label: "via Google",
    quote:
      "Got my work done in a timely manner. Very professional. Asked for only required docs. Friendly staff. Would recommend this place.",
  },
  {
    initials: "SZ",
    name: "Selim Zaman",
    label: "Client review",
    quote:
      "Excellent service and professional, friendly staff. They are experienced and knowledgeable on various visa categories.",
  },
];

export function H1bReviews() {
  return (
    <section className="bg-white py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Client reviews
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          What H-1B Clients Say About BAIS
        </h2>

        <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-cream px-5 py-2.5 text-sm">
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
              <div className="h-full rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
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

        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Read All Reviews on Google →
        </a>
      </Container>
    </section>
  );
}
