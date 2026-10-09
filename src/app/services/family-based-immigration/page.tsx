import type { Metadata } from "next";
import { FamilyHero } from "@/components/services/family/FamilyHero";
import { FamilyOverview } from "@/components/services/family/FamilyOverview";
import { FamilyWhoCanSponsor } from "@/components/services/family/FamilyWhoCanSponsor";
import { FamilyTwoLanes } from "@/components/services/family/FamilyTwoLanes";
import { FamilyWaitTimes } from "@/components/services/family/FamilyWaitTimes";
import { FamilyPickYourPath } from "@/components/services/family/FamilyPickYourPath";
import { FamilyProcess } from "@/components/services/family/FamilyProcess";
import { FamilyForms } from "@/components/services/family/FamilyForms";
import { FamilyCosts } from "@/components/services/family/FamilyCosts";
import { FamilyTimeline } from "@/components/services/family/FamilyTimeline";
import { FamilyPublicCharge } from "@/components/services/family/FamilyPublicCharge";
import { FamilyInterviews } from "@/components/services/family/FamilyInterviews";
import { FamilyWorkVisaFamilies } from "@/components/services/family/FamilyWorkVisaFamilies";
import { FamilyAfterGreenCard } from "@/components/services/family/FamilyAfterGreenCard";
import { FamilyUpdates } from "@/components/services/family/FamilyUpdates";
import { FamilyBayArea } from "@/components/services/family/FamilyBayArea";
import { FamilyWhyBais } from "@/components/services/family/FamilyWhyBais";
import { FamilyPackages } from "@/components/services/family/FamilyPackages";
import { FamilyReviews } from "@/components/services/family/FamilyReviews";
import { FamilyFaq, familyFaqs } from "@/components/services/family/FamilyFaq";
import { FamilyGuides } from "@/components/services/family/FamilyGuides";
import { FamilyFinalCta } from "@/components/services/family/FamilyFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Family-Based Immigration & Green Cards: I-130 Help | BAIS",
  description:
    "Sponsor your spouse, parent, child or sibling for a U.S. green card. I-130, NVC, I-485 & I-864 help, wait times and 2026 updates. Free family case review.",
  alternates: { canonical: "/services/family-based-immigration" },
};

const pageUrl = `${site.url}/services/family-based-immigration`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Family-Based Immigration",
    serviceType: "Immigration document preparation",
    provider: {
      "@type": "LegalService",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: "US",
    url: pageUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: "Family-Based Immigration", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Family-Based Immigration: Bring Your Loved Ones to the U.S., Step by Step",
    url: pageUrl,
    dateModified: "2026-10-08",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: familyFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function FamilyBasedImmigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FamilyHero />
      <FamilyOverview />
      <FamilyWhoCanSponsor />
      <FamilyTwoLanes />
      <FamilyWaitTimes />
      <FamilyPickYourPath />
      <FamilyProcess />
      <FamilyForms />
      <FamilyCosts />
      <FamilyTimeline />
      <FamilyPublicCharge />
      <FamilyInterviews />
      <FamilyWorkVisaFamilies />
      <FamilyAfterGreenCard />
      <FamilyUpdates />
      <FamilyBayArea />
      <FamilyWhyBais />
      <FamilyPackages />
      <FamilyReviews />
      <FamilyFaq />
      <FamilyGuides />
      <FamilyFinalCta />
    </>
  );
}
