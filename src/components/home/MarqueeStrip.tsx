import { MapPin } from "lucide-react";

const cities = [
  "Fremont", "Newark", "Union City", "Milpitas", "San Jose",
  "Santa Clara", "Sunnyvale", "Cupertino", "Mountain View", "Palo Alto",
  "Hayward", "Pleasanton", "Dublin", "San Ramon", "Oakland", "San Francisco",
];

export function MarqueeStrip() {
  const track = [...cities, ...cities];

  return (
    <section className="border-y border-border bg-white py-8">
      <p className="flex items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-accent">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        Popular Cities in the Bay Area
      </p>

      <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
          {track.map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-lg font-semibold tracking-tight text-ink/70 transition-colors duration-200 hover:text-maroon"
            >
              <MapPin className="size-4 text-maroon/50" aria-hidden="true" />
              {city}
              <span className="text-accent/40" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
