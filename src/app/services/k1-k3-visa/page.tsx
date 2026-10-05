import type { Metadata } from "next";
import { K1Hero } from "@/components/services/k1/K1Hero";
import { K1Overview } from "@/components/services/k1/K1Overview";
import { K1Eligibility } from "@/components/services/k1/K1Eligibility";
import { K1Process } from "@/components/services/k1/K1Process";
import { K1HowWeHelp } from "@/components/services/k1/K1HowWeHelp";
import { K1Documents } from "@/components/services/k1/K1Documents";
import { K1AfterArrival } from "@/components/services/k1/K1AfterArrival";
import { K1K3Spouse } from "@/components/services/k1/K1K3Spouse";
import { K1VsCr1 } from "@/components/services/k1/K1VsCr1";
import { K1Updates } from "@/components/services/k1/K1Updates";
import { K1Cost } from "@/components/services/k1/K1Cost";
import { K1Reviews } from "@/components/services/k1/K1Reviews";
import { K1WhyBais } from "@/components/services/k1/K1WhyBais";
import { K1Faq, k1Faqs } from "@/components/services/k1/K1Faq";
import { K1Guides } from "@/components/services/k1/K1Guides";
import { K1FinalCta } from "@/components/services/k1/K1FinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "K-1 Fiancé Visa & K-3 Spouse Visa Services | Process, Documents | BAIS",
  description:
    "Bring your fiancé(e) or spouse to the U.S. K-1 & K-3 visa help: I-129F, interview prep, marriage & green card after arrival. Fremont since 2001. Free consultation.",
  alternates: { canonical: "/services/k1-k3-visa" },
};

const pageUrl = `${site.url}/services/k1-k3-visa`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "K-1 Fiancé(e) & K-3 Spouse Visa Preparation",
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
        name: "Family Immigration",
        item: `${site.url}/services#family-immigration`,
      },
      { "@type": "ListItem", position: 4, name: "K-1 Fiancé(e) Visa", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "K-1 Fiancé(e) Visa Services: Bring Your Partner to the U.S.",
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
    mainEntity: k1Faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function K1K3VisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <K1Hero />
      <K1Overview />
      <K1Eligibility />
      <K1Process />
      <K1HowWeHelp />
      <K1Documents />
      <K1AfterArrival />
      <K1K3Spouse />
      <K1VsCr1 />
      <K1Updates />
      <K1Cost />
      <K1Reviews />
      <K1WhyBais />
      <K1Faq />
      <K1Guides />
      <K1FinalCta />
    </>
  );
}
