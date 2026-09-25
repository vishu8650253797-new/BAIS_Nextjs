import { BadgeCheck, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

const googleReviewUrl = `https://www.google.com/search?q=${encodeURIComponent(
  `${site.name} ${site.address.city} ${site.address.state} reviews`,
)}`;

const avatarColors = [
  "bg-emerald-600",
  "bg-orange-500",
  "bg-blue-600",
  "bg-purple-600",
];

const reviews = [
  {
    name: "Rahul Patil",
    daysAgo: "3 days ago",
    quote:
      "Akash and the team were extremely helpful with my H1B situation. They listened closely...",
  },
  {
    name: "Lukasz Kruk",
    daysAgo: "7 days ago",
    quote:
      "Kritagya was an informative with all the law guidance in order for for me to get the...",
  },
  {
    name: "Parag Kulkarni",
    daysAgo: "7 days ago",
    quote:
      "Bay Area Immigration Services Inc. are truely the best consultants that one can com...",
  },
  {
    name: "Abrar Ali Anika",
    daysAgo: "17 days ago",
    quote:
      "I'm very grateful to Bay Area Immigration Services for helping me throughout the...",
  },
];

function GoogleLogo() {
  return (
    <span className="text-2xl font-bold tracking-tight">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-flex size-4">
            <Star className="absolute inset-0 size-4 text-border" aria-hidden="true" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function initials(name: string) {
  return name.charAt(0).toUpperCase();
}

export function ReviewsMarquee() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-24">
      <Container>
        <div className="rounded-2xl bg-cream p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <GoogleLogo />
                <span className="text-2xl font-bold text-ink">Reviews</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-2xl font-bold text-ink">4.4</span>
                <StarRating value={4.4} />
                <span className="text-sm text-body/60">(212)</span>
              </div>
            </div>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-maroon-dark"
            >
              Review us on Google
            </a>
          </div>
        </div>

        <div className="relative mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="rounded-2xl bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColors[index % avatarColors.length]}`}
                  >
                    {initials(review.name)}
                  </span>
                  <div>
                    <span className="flex items-center gap-1 text-sm font-bold text-ink">
                      {review.name}
                      <BadgeCheck className="size-3.5 text-maroon" aria-hidden="true" />
                    </span>
                    <p className="text-xs text-body/50">{review.daysAgo}</p>
                  </div>
                </div>

                <div className="mt-3">
                  <StarRating value={5} />
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-body">
                  {review.quote}
                </p>
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-maroon hover:text-maroon-dark"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>

          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See more reviews on Google"
            className="absolute -right-4 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg transition-colors duration-200 hover:bg-ink lg:flex"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-ink" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
        </div>
      </Container>
    </section>
  );
}
