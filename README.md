# Bay Area Immigration Services (BAIS) — Website

A Next.js marketing site for Bay Area Immigration Services, a Fremont, CA–based immigration consulting and document-preparation firm. This README documents what has been built so far so any contributor (human or AI) can pick up where things left off.

> Also read [AGENTS.md](./AGENTS.md) before writing code — this project pins a specific Next.js version with breaking changes from the version most tools and training data assume.

## Tech stack

- **Next.js** (App Router, `src/app/...`), React Server Components by default
- **Tailwind CSS v4** — token-based theme in `src/app/globals.css` (`--color-ink`, `--color-maroon`, `--color-cream`, `--color-accent`, etc.), fonts: Mulish (`--font-sans`) and Playfair Display (`--font-serif`, used for premium numbered-step sections)
- **lucide-react** — the only icon system used anywhere in the UI (no emoji, except literal country flags where no sensible icon substitute exists)
- TypeScript throughout

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Note: multiple Next.js dev servers for *different* client projects may run on this machine — confirm you're looking at the right port by checking the rendered page says "Bay Area Immigration Services."

Verification commands used throughout development:

```bash
npx tsc --noEmit -p .   # type-check
npx next build          # full production build — all routes must compile as static ○
```

## Project structure (high level)

```
src/
  app/
    page.tsx                 # homepage
    services/
      page.tsx                # /services listing (category + card grid, mega menu source)
      <slug>/page.tsx          # one route per service landing page (see table below)
    about/, contact/, blog/    # other site pages
    layout.tsx                 # root layout: TopBar, Header, Footer
  components/
    home/                      # homepage-only sections
    layout/                    # Header, Footer, TopBar, Logo, FooterWordmark, MegaMenuPanel
    services/<slug-group>/     # one folder per service landing page's section components
    shared/                    # FadeIn (scroll-reveal), Accordion
    ui/                        # Container, Button, SectionHeading
  data/
    site.ts                    # single source of truth: name, phone, address, hours, bookingUrl, disclaimers, FOUNDED_YEAR
    services.ts                # serviceCategories[] — drives /services page + header mega menu
    faq.ts, team.ts             # homepage content
```

## Homepage (`src/app/page.tsx`)

Current section order:

1. `Hero` — headline, CTAs (Book a Free Consultation / Call), trust bullets, stats bar, "Find Your Path" card
2. `MarqueeStrip` — scrolling list of 16 Bay Area cities served
3. `AboutSection` — "A Fremont Immigration Consultant Trusted Since {FOUNDED_YEAR}"
4. `VisaMarquee` — 11 scrolling service cards (H-1B, O-1, L-1A, PERM & I-140, EB-1A, EB-2 NIW, H-2A, H-2B, RFE Response, Expert Opinion Letters, OCI & Renunciation)
5. `CountriesMarquee` — real flag images (flagcdn.com), countries served
6. `ProcessTimeline` — "How It Works," 4-step serif/photo-collage design
7. `WhyBais` — 6 numbered cards (25+ Years, 99% Success Rate*, 350+ Professor Network, Registered & Bonded, A+ BBB Rating, EN·HI) + trust banner
8. `TeamSection` — "A Team Built Across Two Continents," avatar-initials stack
9. `ReviewsMarquee` — real Google rating (4.4 · 212 reviews) + 4 named reviewer cards
10. `FAQSection` — 7 Q&As
11. `FinalCta` — gradient banner, no map (removed per explicit instruction)

A `TopBar` (maroon marquee of service categories + phone/email) sits above the `Header` in `layout.tsx`, reproduced from a sibling deployment of this same codebase.

Several older homepage components (`TwoPathSection`, `Testimonials`, `TrustStats`, `CoverageSection`, `ProcessBlocks`, `BlogPreview`, `AttorneySpotlight`) still exist on disk but are **not imported** — removed from the page on request, left in place rather than deleted.

## Service landing pages

Each page below was built from a client-supplied HTML content/SEO spec (title, meta, JSON-LD guidance, disclaimer requirements) and follows one consistent pattern: hero with a static-preview lead form + one real booking-link CTA, FadeIn scroll-reveal and hover states on every section, lucide icons only, full JSON-LD (`Service` + `BreadcrumbList` + `WebPage` + `FAQPage`), and **no Google Maps embed** anywhere (explicitly removed once, never re-added).

| Route | Listing name | Components folder |
|---|---|---|
| `/services/h-1b-visa` | H1B-Visa-Page | `components/services/h1b/` |
| `/services/l-1a-visa` | L1A-Visa-Page | `components/services/l1a/` |
| `/services/o-1-visa` | O1-Visa | `components/services/o1/` |
| `/services/j-1-visa` | J1-Exchange-Visitor-Page | `components/services/j1/` |
| `/services/eb-1a` | EB1A-Green-Card | `components/services/eb1a/` |
| `/services/eb-1b` | EB1B-Green-Card | `components/services/eb1b/` |
| `/services/eb-1c` | EB1C-Green-Card | `components/services/eb1c/` |
| `/services/eb-2-niw` | EB2-NIW | `components/services/niw/` |
| `/services/eb-3-visa` | EB3-PERM-Green-Card | `components/services/eb3/` |
| `/services/e-1-treaty-trader` | E1-Treaty-Trader | `components/services/e1/` |
| `/services/e-2-treaty-investor` | E2-Treaty-Investor | `components/services/e2/` |
| `/services/b-1-b-2-visa` | B1-B2-Visitor-Visa | `components/services/b1b2/` |
| `/services/k1-k3-visa` | K1-K3-visa | `components/services/k1/` |
| `/services/family-based-immigration` | Family-Based-Immigration | `components/services/family/` |
| `/services/i-130-petition` | I130-Petition | `components/services/i130/` |
| `/services/us-citizenship` | US-Citizenship | `components/services/citizenship/` |
| `/services/change-of-status` | Change-of-Status | `components/services/cos/` |
| `/services/oci-renunciation` | OCI-Renunciation | `components/services/oci/` |
| `/services/rfe-assistance` | RFE-Assistance | `components/services/rfe/` |

All 19 are registered in `src/data/services.ts` (each with an `href`, which `ServiceLinkCard` and the header mega menu read to link out instead of falling back to a category anchor).

### Recurring content/compliance conventions carried across every page

- **No attorney claims** — BAIS is a registered & bonded immigration *consultant*, not a law firm; every FAQ includes an "Is BAIS a law firm?" answer saying so.
- **Bond No. 5317191** and the **99% success rate\*** claim appear site-wide, except where the source spec explicitly said to omit a success-rate figure as implausible (EB-2 NIW, EB-1A, RFE Assistance — these show honest USCIS data or omit the stat entirely instead).
- **Recommendation/expert letters** are always framed as "drafting support for letters the signer reviews and signs" — never "we write your letters." Expert opinion letters come from an independent 350+ professor/industry-expert network; experts give their own opinion, USCIS decides the weight, no guarantee of approval.
- **Lead forms in every hero are static visual previews** (field-label placeholders, no real inputs) with exactly one functional element: a link to `site.bookingUrl`. There is no backend wired to accept the custom multi-field data.
- **No Google Maps embeds.** Where a mockup calls for a map, pages instead link out to a Google Maps search URL as a plain "Visit Our Fremont Office" anchor.
- Real, reused facts: Google rating 4.4★ / 212 reviews; named reviewers (Dennis Sharma, Selim Zaman, Pedro Ivan Lopez, Krathik Rodriguez, Chattrue Sath, and others); office address, hours, phone, email from `data/site.ts`.
- Dated 2026 policy content (Visa Bulletin figures, USCIS policy alerts like PA-2026-05 "deny without an RFE," the worldwide immigrant-visa-interview pause, public charge framework changes, India's Citizenship (Amendment) Rules 2026) is carried verbatim from each source spec and timestamped "Last reviewed."

## Shared design-system components

- `Container` — page-width wrapper
- `Button` — variants: primary / secondary / ghost / inverse; sizes md / lg
- `SectionHeading` — eyebrow + title, optional center alignment
- `FadeIn` (`components/shared/FadeIn.tsx`) — IntersectionObserver scroll-reveal, accepts `delay`, `as`, `className`
- `Accordion` (`components/shared/Accordion.tsx`) — generic FAQ accordion, takes `items: {question, answer}[]`

## Data files

- `src/data/site.ts` — name, legal name, phone, email, address, hours, languages, `bookingUrl`, `disclaimer`, `successRateDisclaimer`, `consultationFee`, `FOUNDED_YEAR` / `yearsInBusiness()`
- `src/data/services.ts` — `serviceCategories[]` (5 categories × services), each service optionally carries `href` to its dedicated landing page
- `src/data/faq.ts`, `src/data/team.ts` — homepage content

## Known open items

- The homepage FAQ states the first consultation is "free," while several service pages reference a **$100 consultation fee, applied toward your service** (`site.consultationFee`). This inconsistency has been flagged but not resolved — check with the client before changing either.
- `TwoPathSection`, `Testimonials`, `TrustStats`, `CoverageSection`, `ProcessBlocks`, `BlogPreview`, `AttorneySpotlight` components exist on disk unused — safe to delete if confirmed permanently out, otherwise left as-is pending a decision.

## Learn more about Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
