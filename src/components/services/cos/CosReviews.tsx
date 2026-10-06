import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { site } from "@/data/site";

const googleReviewUrl = `https://www.google.com/search?q=${encodeURIComponent(
  `${site.name} ${site.address.city} ${site.address.state} reviews`,
)}`;

export function CosReviews() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Client stories
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          Real Status Changes, Real People
        </h2>

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
          <FadeIn>
            <div className="h-full rounded-2xl border-2 border-maroon bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-sm font-bold text-maroon">
                  KR
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Krathik Rodriguez</p>
                  <p className="text-xs text-body/50">via Facebook · work authorization</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-body">
                &ldquo;I had the opportunity to work with Bay Area
                Immigration Services this year related to my work
                authorization and they were able to help me succeed in
                it.&rdquo;
              </p>
            </div>
          </FadeIn>

          {[
            { initials: "F1", label: "B-2 → F-1 client" },
            { initials: "H1", label: "F-1 → H-1B or post-layoff client" },
          ].map((slot, index) => (
            <FadeIn key={slot.label} delay={(index + 1) * 70}>
              <div className="h-full rounded-2xl border-2 border-dashed border-maroon/25 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/40 hover:shadow-xl hover:shadow-ink/5">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-sm font-bold text-maroon">
                    {slot.initials}
                  </span>
                  <p className="text-xs font-semibold text-body/60">{slot.label}</p>
                </div>
                <div className="mt-3 flex gap-0.5 text-amber-400/50">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-sm italic leading-relaxed text-body/50">
                  Reserved for a real client testimonial, shared with
                  written permission.
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-body/60">
          Testimonials are from real clients, shared with permission. They
          reflect individual experiences; results vary.
        </p>

        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white"
        >
          Read All Reviews on Google →
        </a>
      </Container>
    </section>
  );
}
