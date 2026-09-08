import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const countries = [
  { name: "United States", code: "us" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "New Zealand", code: "nz" },
  { name: "Ireland", code: "ie" },
  { name: "Singapore", code: "sg" },
  { name: "France", code: "fr" },
  { name: "Germany", code: "de" },
  { name: "United Kingdom", code: "gb" },
  { name: "India", code: "in" },
];

export function CountriesMarquee() {
  const track = [...countries, ...countries];

  return (
    <section className="bg-white py-24">
      <Container className="max-w-2xl text-center">
        <p className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Countries We Serve
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Select the country of your choice
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-body">
          We prepare immigration documentation for clients relocating to the
          U.S. and a growing list of other countries worldwide.
        </p>
      </Container>

      <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max animate-marquee-slow gap-6 [animation-direction:reverse] group-hover:[animation-play-state:paused]">
          {track.map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              className="flex h-full w-[260px] shrink-0 flex-col items-center rounded-2xl border border-border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
            >
              <img
                src={`https://flagcdn.com/w160/${country.code}.png`}
                alt={`${country.name} flag`}
                className="size-20 rounded-full border border-border object-cover"
              />
              <h3 className="mt-5 text-xl font-bold text-ink">{country.name}</h3>
              <p className="mt-2 text-sm text-body">Visa &amp; documentation support</p>
              <Link
                href="/contact"
                className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-maroon transition-colors duration-200 hover:text-maroon-dark"
              >
                Apply Now
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
