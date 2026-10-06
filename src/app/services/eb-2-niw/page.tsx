import type { Metadata } from "next";
import { NiwHero } from "@/components/services/niw/NiwHero";
import { NiwOverview } from "@/components/services/niw/NiwOverview";
import { NiwDhanasar } from "@/components/services/niw/NiwDhanasar";
import { NiwApprovalRates } from "@/components/services/niw/NiwApprovalRates";
import { NiwWhoWeHelp } from "@/components/services/niw/NiwWhoWeHelp";
import { NiwWaitTimes } from "@/components/services/niw/NiwWaitTimes";
import { NiwProcess } from "@/components/services/niw/NiwProcess";
import { NiwFamily } from "@/components/services/niw/NiwFamily";
import { NiwCompare } from "@/components/services/niw/NiwCompare";
import { NiwUpdates } from "@/components/services/niw/NiwUpdates";
import { NiwWhyBais } from "@/components/services/niw/NiwWhyBais";
import { NiwReviews } from "@/components/services/niw/NiwReviews";
import { NiwFaq, niwFaqs } from "@/components/services/niw/NiwFaq";
import { NiwGuides } from "@/components/services/niw/NiwGuides";
import { NiwFinalCta } from "@/components/services/niw/NiwFinalCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "EB-2 NIW Green Card: National Interest Waiver Self-Petition | BAIS",
  description:
    "EB-2 NIW self-petition green card for STEM professionals, researchers, doctors & founders. No employer or PERM. Dhanasar strategy, family included. Free review.",
  alternates: { canonical: "/services/eb-2-niw" },
};

const pageUrl = `${site.url}/services/eb-2-niw`;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EB-2 National Interest Waiver Green Card",
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
      { "@type": "ListItem", position: 4, name: "EB-2 NIW", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EB-2 NIW Green Card: Self-Petition Through the National Interest Waiver",
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
    mainEntity: niwFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Eb2NiwPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NiwHero />
      <NiwOverview />
      <NiwDhanasar />
      <NiwApprovalRates />
      <NiwWhoWeHelp />
      <NiwWaitTimes />
      <NiwProcess />
      <NiwFamily />
      <NiwCompare />
      <NiwUpdates />
      <NiwWhyBais />
      <NiwReviews />
      <NiwFaq />
      <NiwGuides />
      <NiwFinalCta />
    </>
  );
}
