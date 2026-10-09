import type { Metadata } from "next";
import { OciHero } from "@/components/services/oci/OciHero";
import { OciOverview } from "@/components/services/oci/OciOverview";
import { OciWhichPath } from "@/components/services/oci/OciWhichPath";
import { OciProcess } from "@/components/services/oci/OciProcess";
import { OciCosts } from "@/components/services/oci/OciCosts";
import { OciMinorsChecklist } from "@/components/services/oci/OciMinorsChecklist";
import { OciFaq, ociFaqs } from "@/components/services/oci/OciFaq";
import { OciUpdates } from "@/components/services/oci/OciUpdates";
import { OciWhyBais } from "@/components/services/oci/OciWhyBais";
import { OciFinalCta } from "@/components/services/oci/OciFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "OCI Card & Renunciation of Indian Citizenship Help | BAIS",
  description:
    "OCI card, Indian passport surrender and renunciation help from the U.S.: documents, fees, steps and 2026 e-OCI rules. Free review in Fremont.",
  alternates: { canonical: "/services/oci-renunciation" },
};

const pageUrl = `${site.url}/services/oci-renunciation`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OCI Card and Renunciation of Indian Citizenship Preparation",
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
      { "@type": "ListItem", position: 3, name: "OCI & Renunciation", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "OCI Card and Renunciation of Indian Citizenship: Done Right From the U.S.",
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
    mainEntity: ociFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function OciRenunciationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OciHero />
      <OciOverview />
      <OciWhichPath />
      <OciProcess />
      <OciCosts />
      <OciMinorsChecklist />
      <OciUpdates />
      <OciFaq />
      <OciWhyBais />
      <OciFinalCta />
    </>
  );
}
