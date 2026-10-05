import type { Metadata } from "next";
import { J1Hero } from "@/components/services/j1/J1Hero";
import { J1Overview } from "@/components/services/j1/J1Overview";
import { J1Categories } from "@/components/services/j1/J1Categories";
import { J1StudentsTrainees } from "@/components/services/j1/J1StudentsTrainees";
import { J1Scholars } from "@/components/services/j1/J1Scholars";
import { J1Process } from "@/components/services/j1/J1Process";
import { J1Documents } from "@/components/services/j1/J1Documents";
import { J1Dependents } from "@/components/services/j1/J1Dependents";
import { J1TwoYearRule } from "@/components/services/j1/J1TwoYearRule";
import { J1WaiverProcess } from "@/components/services/j1/J1WaiverProcess";
import { J1HowWeHelp } from "@/components/services/j1/J1HowWeHelp";
import { J1Updates } from "@/components/services/j1/J1Updates";
import { J1Compare } from "@/components/services/j1/J1Compare";
import { J1Faq, j1Faqs } from "@/components/services/j1/J1Faq";
import { J1Guides } from "@/components/services/j1/J1Guides";
import { J1FinalCta } from "@/components/services/j1/J1FinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "J-1 Visa Help: Students, Trainees, Scholars & Researchers | 212(e) Waivers | BAIS",
  description:
    "J-1 exchange visitor document help for students, interns, trainees, professors & research scholars. DS-7002, J-2 EAD, 212(e) waivers & extensions. Free consultation.",
  alternates: { canonical: "/services/j-1-visa" },
};

const pageUrl = `${site.url}/services/j-1-visa`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "J-1 Exchange Visitor Documentation",
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
        name: "Exchange Visitors",
        item: `${site.url}/services#employment-immigration`,
      },
      { "@type": "ListItem", position: 4, name: "J-1 Visa", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "J-1 Exchange Visitor Visa Help: Students, Trainees, Scholars & Researchers",
    url: pageUrl,
    dateModified: "2026-09-30",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: j1Faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function J1VisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <J1Hero />
      <J1Overview />
      <J1Categories />
      <J1StudentsTrainees />
      <J1Scholars />
      <J1Process />
      <J1Documents />
      <J1Dependents />
      <J1TwoYearRule />
      <J1WaiverProcess />
      <J1HowWeHelp />
      <J1Updates />
      <J1Compare />
      <J1Faq />
      <J1Guides />
      <J1FinalCta />
    </>
  );
}
