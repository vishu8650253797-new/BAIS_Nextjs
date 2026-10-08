import type { Metadata } from "next";
import { RfeHero } from "@/components/services/rfe/RfeHero";
import { RfeOverview } from "@/components/services/rfe/RfeOverview";
import { RfeDeadlines } from "@/components/services/rfe/RfeDeadlines";
import { RfeNoticeTypes } from "@/components/services/rfe/RfeNoticeTypes";
import { RfeWhatWeProvide } from "@/components/services/rfe/RfeWhatWeProvide";
import { RfeWhoWeHelp } from "@/components/services/rfe/RfeWhoWeHelp";
import { RfeByVisaType } from "@/components/services/rfe/RfeByVisaType";
import { RfeProcess } from "@/components/services/rfe/RfeProcess";
import { RfeExpertLetters } from "@/components/services/rfe/RfeExpertLetters";
import { RfeEvaluations } from "@/components/services/rfe/RfeEvaluations";
import { RfeRecommendationLetters } from "@/components/services/rfe/RfeRecommendationLetters";
import { RfeDenials } from "@/components/services/rfe/RfeDenials";
import { RfeUpdates } from "@/components/services/rfe/RfeUpdates";
import { RfePackages } from "@/components/services/rfe/RfePackages";
import { RfeWhyBais } from "@/components/services/rfe/RfeWhyBais";
import { RfeReviews } from "@/components/services/rfe/RfeReviews";
import { RfeFaq, rfeFaqs } from "@/components/services/rfe/RfeFaq";
import { RfeGuides } from "@/components/services/rfe/RfeGuides";
import { RfeFinalCta } from "@/components/services/rfe/RfeFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "RFE Assistance: Expert Letters, Evaluations & MTR Help | BAIS",
  description:
    "Got an RFE, NOID or denial? Deadline triage, independent expert letters, academic evaluations, response packages & I-290B motions. Free case review.",
  alternates: { canonical: "/services/rfe-assistance" },
};

const pageUrl = `${site.url}/services/rfe-assistance`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "RFE, NOID & Denial Response Assistance",
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
      { "@type": "ListItem", position: 3, name: "RFE Assistance", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "RFE, NOID & Denial Help: Evidence, Expert Letters and Motions, Ready Before Your Deadline",
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
    mainEntity: rfeFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function RfeAssistancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RfeHero />
      <RfeOverview />
      <RfeDeadlines />
      <RfeNoticeTypes />
      <RfeWhatWeProvide />
      <RfeWhoWeHelp />
      <RfeByVisaType />
      <RfeProcess />
      <RfeExpertLetters />
      <RfeEvaluations />
      <RfeRecommendationLetters />
      <RfeDenials />
      <RfeUpdates />
      <RfePackages />
      <RfeWhyBais />
      <RfeReviews />
      <RfeFaq />
      <RfeGuides />
      <RfeFinalCta />
    </>
  );
}
