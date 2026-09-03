import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { AboutSection } from "@/components/home/AboutSection";
import { VisaMarquee } from "@/components/home/VisaMarquee";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { AttorneySpotlight } from "@/components/home/AttorneySpotlight";
import { TeamSection } from "@/components/home/TeamSection";
import { ReviewsMarquee } from "@/components/home/ReviewsMarquee";
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
      <AboutSection />
      <VisaMarquee />
      <ProcessTimeline />
      <AttorneySpotlight />
      <TeamSection />
      <ReviewsMarquee />
      <FAQSection />
    </>
  );
}
