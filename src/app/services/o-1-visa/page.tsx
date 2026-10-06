import type { Metadata } from "next";
import { O1Hero } from "@/components/services/o1/O1Hero";
import { O1Overview } from "@/components/services/o1/O1Overview";
import { O1A } from "@/components/services/o1/O1A";
import { O1Petitioner } from "@/components/services/o1/O1Petitioner";
import { O1B } from "@/components/services/o1/O1B";
import { O1VsH1b } from "@/components/services/o1/O1VsH1b";
import { O1Family } from "@/components/services/o1/O1Family";
import { O1Process } from "@/components/services/o1/O1Process";
import { O1GreenCard } from "@/components/services/o1/O1GreenCard";
import { O1Updates } from "@/components/services/o1/O1Updates";
import { O1WhyBais } from "@/components/services/o1/O1WhyBais";
import { O1Reviews } from "@/components/services/o1/O1Reviews";
import { O1Faq, o1Faqs } from "@/components/services/o1/O1Faq";
import { O1Guides } from "@/components/services/o1/O1Guides";
import { O1FinalCta } from "@/components/services/o1/O1FinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "O-1 Visa Services: O-1A & O-1B Extraordinary Ability | Fremont | BAIS",
  description:
    "O-1A & O-1B petitions for founders, researchers, artists & athletes. Criteria review, evidence, advisory letters, O-3 family & green card path. Free case review.",
  alternates: { canonical: "/services/o-1-visa" },
};

const pageUrl = `${site.url}/services/o-1-visa`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "O-1 Extraordinary Ability Visa Preparation",
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
        name: "Work Visas",
        item: `${site.url}/services#employment-immigration`,
      },
      { "@type": "ListItem", position: 4, name: "O-1 Visa", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "O-1 Visa for Extraordinary Talent: O-1A & O-1B Petitions",
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
    mainEntity: o1Faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function O1VisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <O1Hero />
      <O1Overview />
      <O1A />
      <O1Petitioner />
      <O1B />
      <O1VsH1b />
      <O1Family />
      <O1Process />
      <O1GreenCard />
      <O1Updates />
      <O1WhyBais />
      <O1Reviews />
      <O1Faq />
      <O1Guides />
      <O1FinalCta />
    </>
  );
}
