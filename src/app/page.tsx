import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { TwoPathSection } from "@/components/home/TwoPathSection";
import { VisaMarquee } from "@/components/home/VisaMarquee";
import { ProcessBlocks } from "@/components/home/ProcessBlocks";
import { CoverageSection } from "@/components/home/CoverageSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustStats } from "@/components/home/TrustStats";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQSection } from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Immigration Consultants in California",
  description:
    "Bay Area Immigration Services helps individuals, families, and employers navigate U.S. work visas, green cards, and family-based immigration since 2001.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <TwoPathSection />
      <ProcessBlocks />
      <CoverageSection />
      <Testimonials />
      <TrustStats />
      <BlogPreview />
      <FAQSection />
      <VisaMarquee />
    </>
  );
}
