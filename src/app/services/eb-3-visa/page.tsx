import type { Metadata } from "next";
import { Eb3Hero } from "@/components/services/eb3/Eb3Hero";
import { Eb3Overview } from "@/components/services/eb3/Eb3Overview";
import { Eb3Categories } from "@/components/services/eb3/Eb3Categories";
import { Eb3PrevailingWage } from "@/components/services/eb3/Eb3PrevailingWage";
import { Eb3Recruitment } from "@/components/services/eb3/Eb3Recruitment";
import { Eb3Eta9089I140 } from "@/components/services/eb3/Eb3Eta9089I140";
import { Eb3GreenCardStage } from "@/components/services/eb3/Eb3GreenCardStage";
import { Eb3Timeline } from "@/components/services/eb3/Eb3Timeline";
import { Eb3VisaBulletin } from "@/components/services/eb3/Eb3VisaBulletin";
import { Eb3H1bProtection } from "@/components/services/eb3/Eb3H1bProtection";
import { Eb3Forms } from "@/components/services/eb3/Eb3Forms";
import { Eb3BayArea } from "@/components/services/eb3/Eb3BayArea";
import { Eb3Employers } from "@/components/services/eb3/Eb3Employers";
import { Eb3WhyBais } from "@/components/services/eb3/Eb3WhyBais";
import { Eb3Faq, eb3Faqs } from "@/components/services/eb3/Eb3Faq";
import { Eb3Guides } from "@/components/services/eb3/Eb3Guides";
import { Eb3FinalCta } from "@/components/services/eb3/Eb3FinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "EB-3 Green Card & PERM Labor Certification | Bay Area Employers | BAIS",
  description:
    "Employer-sponsored EB-3 green cards for skilled workers & professionals: prevailing wage, PERM recruitment, ETA-9089, I-140 & I-485. Fremont since 2001.",
  alternates: { canonical: "/services/eb-3-visa" },
};

const pageUrl = `${site.url}/services/eb-3-visa`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EB-3 Green Card & PERM Labor Certification",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Green Cards",
        item: `${site.url}/services#permanent-immigration`,
      },
      { "@type": "ListItem", position: 4, name: "EB-3 Visa", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EB-3 Green Card Through PERM: From Prevailing Wage to Permanent Residence",
    url: pageUrl,
    dateModified: "2026-10-07",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eb3Faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Eb3PermGreenCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Eb3Hero />
      <Eb3Overview />
      <Eb3Categories />
      <Eb3PrevailingWage />
      <Eb3Recruitment />
      <Eb3Eta9089I140 />
      <Eb3GreenCardStage />
      <Eb3Timeline />
      <Eb3VisaBulletin />
      <Eb3H1bProtection />
      <Eb3Forms />
      <Eb3BayArea />
      <Eb3Employers />
      <Eb3WhyBais />
      <Eb3Faq />
      <Eb3Guides />
      <Eb3FinalCta />
    </>
  );
}
