import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

const avatarSeeds = [12, 47, 5, 65, 33, 8];

function ReviewCard({
  quote,
  attribution,
  avatarSeed,
}: {
  quote: string;
  attribution: string;
  avatarSeed: number;
}) {
  const [name, sourceRaw] = attribution.split("·").map((part) => part.trim());
  const source = sourceRaw?.replace("via ", "");

  return (
    <div className="flex h-full w-[320px] shrink-0 flex-col rounded-2xl border border-border bg-white p-7 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 sm:w-[360px]">
      <div className="flex items-center gap-3">
        <img
          src={`https://i.pravatar.cc/96?img=${avatarSeed}`}
          alt={`${name} portrait`}
          className="size-12 shrink-0 rounded-full border-2 border-cream object-cover"
        />
        <div>
          <p className="text-sm font-bold text-ink">{name}</p>
          {source && <p className="text-xs text-body/60">via {source}</p>}
        </div>
      </div>

      <div className="mt-4 flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
        ))}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

export function ReviewsMarquee() {
  const reviews = testimonials.slice(0, 6);
  const track = [...reviews, ...reviews];

  return (
    <section className="bg-cream py-24">
      <Container className="max-w-2xl text-center">
        <p className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Client Reviews
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">What Our Clients Say</h2>
        <p className="mt-4 text-lg leading-relaxed text-body">
          Real feedback from clients we&apos;ve helped with work visas, green
          cards, and family-based immigration.
        </p>
      </Container>

      <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max animate-marquee-slow gap-6 [animation-direction:reverse] group-hover:[animation-play-state:paused]">
          {track.map((review, index) => (
            <ReviewCard
              key={`${review.attribution}-${index}`}
              quote={review.quote}
              attribution={review.attribution}
              avatarSeed={avatarSeeds[index % avatarSeeds.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
