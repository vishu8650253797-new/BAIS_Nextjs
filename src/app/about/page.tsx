import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { MissionSection } from "@/components/about/MissionSection";
import { TeamGrid } from "@/components/about/TeamGrid";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2001, Bay Area Immigration Services is a California-based immigration consultancy with deep experience in work visa, green card, and family-based documentation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionSection />
      <TeamGrid />
      <CTASection
        title="Have Questions About Your Immigration Path?"
        description="Schedule a consultation with our team and get a clear read on the categories and documentation that apply to your situation."
      />
    </>
  );
}
