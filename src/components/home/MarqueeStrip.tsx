const cities = [
  "San Francisco", "San Jose", "Oakland", "Fremont", "Palo Alto",
  "Berkeley", "Mountain View", "Sunnyvale", "Santa Clara", "Redwood City",
  "San Mateo", "Walnut Creek", "Santa Rosa", "Cupertino", "Milpitas",
];

export function MarqueeStrip() {
  const track = [...cities, ...cities];

  return (
    <section className="border-y border-border bg-white py-8">
      <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-body/60">
        Popular Cities in the Bay Area
      </p>

      <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
          {track.map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="flex items-center gap-10 text-lg font-semibold text-body/50"
            >
              {city}
              <span className="text-border" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
