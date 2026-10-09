export type Service = {
  slug: string;
  name: string;
  blurb: string;
  href?: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "employment-immigration",
    title: "Employment Immigration",
    description:
      "Documentation support for the work visa categories we handle most, largely for clients in IT and healthcare.",
    services: [
      {
        slug: "h-1b",
        name: "H1B-Visa-Page",
        blurb: "Cap registration, transfers, extensions, amendments and RFE responses.",
        href: "/services/h-1b-visa",
      },
      {
        slug: "l-1",
        name: "L-1 Intracompany Transferee",
        blurb: "L-1A manager/executive and L-1B specialized-knowledge transfers.",
      },
      {
        slug: "l-1a-visa",
        name: "L1A-Visa-Page",
        blurb: "New U.S. office setup, L-1A petitions, L-2 family & the EB-1C green card path.",
        href: "/services/l-1a-visa",
      },
      {
        slug: "o-1",
        name: "O1-Visa",
        blurb: "O-1A & O-1B petitions, advisory opinions, 350+ professor expert letters and the O-3/O-2 family path.",
        href: "/services/o-1-visa",
      },
      {
        slug: "j-1",
        name: "J1-Exchange-Visitor-Page",
        blurb: "DS-7002 training plans, J-2 family visas, 212(e) waivers and extensions for students, trainees & scholars.",
        href: "/services/j-1-visa",
      },
      {
        slug: "tn",
        name: "TN Visa",
        blurb: "USMCA professional work authorization for Canadian and Mexican citizens.",
      },
      {
        slug: "employment-based-immigration",
        name: "Employment-Based Immigration",
        blurb: "An overview of employer-sponsored paths, from petitions to green cards.",
      },
    ],
  },
  {
    slug: "family-immigration",
    title: "Family Immigration",
    description:
      "Guidance for bringing family members to the United States and keeping households together.",
    services: [
      {
        slug: "family-based-immigration",
        name: "Family-Based-Immigration",
        blurb: "I-130 petitions, the Family Case Map, visa bulletin wait times, I-864 support and consular or adjustment filing.",
        href: "/services/family-based-immigration",
      },
      {
        slug: "k-1",
        name: "K1-K3-visa",
        blurb: "I-129F petitions, K-3 spouse visas, interview prep and green card filing after marriage.",
        href: "/services/k1-k3-visa",
      },
      {
        slug: "i-130",
        name: "I130-Petition",
        blurb: "Who-can-file eligibility, relationship-specific evidence, the full filing process and the Family Case Map.",
        href: "/services/i-130-petition",
      },
    ],
  },
  {
    slug: "permanent-immigration",
    title: "Permanent Immigration (Green Cards)",
    description:
      "Preparation support across the employment- and merit-based green card categories.",
    services: [
      {
        slug: "green-cards",
        name: "Green Cards Overview",
        blurb: "A guide to family-based, employment-based, and investment-based paths.",
      },
      {
        slug: "eb-1",
        name: "EB-1 Priority Workers",
        blurb: "Extraordinary ability, outstanding researchers, and multinational executives.",
      },
      {
        slug: "eb-1a",
        name: "EB1A-Green-Card",
        blurb: "Self-petition extraordinary-ability green card with independent expert opinion letters from 350+ professors.",
        href: "/services/eb-1a",
      },
      {
        slug: "eb-1b",
        name: "EB1B-Green-Card",
        blurb: "Employer-filed green card for outstanding professors and researchers — no PERM required.",
        href: "/services/eb-1b",
      },
      {
        slug: "eb-1c",
        name: "EB1C-Green-Card",
        blurb: "Green cards for multinational managers and executives — no PERM required.",
        href: "/services/eb-1c",
      },
      {
        slug: "eb-2-niw",
        name: "EB2-NIW",
        blurb: "Self-petition green card via the Dhanasar National Interest Waiver — no employer or PERM needed.",
        href: "/services/eb-2-niw",
      },
      {
        slug: "eb-3",
        name: "EB3-PERM-Green-Card",
        blurb: "Employer-sponsored PERM labor certification, ETA-9089, I-140 and the green card stage, audit-ready.",
        href: "/services/eb-3-visa",
      },
      {
        slug: "eb-5",
        name: "EB-5 Immigrant Investor",
        blurb: "Investment-based permanent residency documentation support.",
      },
      {
        slug: "green-card-lottery",
        name: "U.S. Green Card Lottery",
        blurb: "Diversity Visa program guidance and application support.",
      },
      {
        slug: "us-citizenship",
        name: "US-Citizenship",
        blurb: "N-400 prep, travel-days audit, mock civics interviews and Oath-to-Passport & OCI support.",
        href: "/services/us-citizenship",
      },
    ],
  },
  {
    slug: "business-investor",
    title: "Business & Investor Immigration",
    description:
      "Support for entrepreneurs, treaty traders and investors, and companies establishing a U.S. presence.",
    services: [
      {
        slug: "business-immigration",
        name: "Business Immigration Overview",
        blurb: "An introduction to visa options for founders and companies.",
      },
      {
        slug: "e-1",
        name: "E1-Treaty-Trader",
        blurb: "Country check, the substantial & principal trade tests and the full E-1 filing process.",
        href: "/services/e-1-treaty-trader",
      },
      {
        slug: "e-2",
        name: "E2-Treaty-Investor",
        blurb: "Country check, investment proportionality, business plan review and the full E-2 filing process.",
        href: "/services/e-2-treaty-investor",
      },
      {
        slug: "b-1",
        name: "B1-B2-Visitor-Visa",
        blurb: "Pick the right visa or ESTA, DS-160 prep, interview coaching, 2026 bond rules and extensions.",
        href: "/services/b-1-b-2-visa",
      },
      {
        slug: "accounting-solutions",
        name: "Accounting Solutions",
        blurb: "Entity formation support — C-Corp, S-Corp, LLC, and registered agent services.",
      },
    ],
  },
  {
    slug: "other-services",
    title: "Other Services",
    description:
      "Additional compliance and case-support services for individuals and employers.",
    services: [
      {
        slug: "i-9-verification",
        name: "I-9 Verification",
        blurb: "Remote I-9 completion and verification support.",
      },
      {
        slug: "e-verify",
        name: "E-Verify",
        blurb: "Electronic employment eligibility verification support for employers.",
      },
      {
        slug: "rfe-assistance",
        name: "RFE-Assistance",
        blurb: "Deadline triage, independent expert letters, academic evaluations and I-290B motion/appeal prep.",
        href: "/services/rfe-assistance",
      },
      {
        slug: "global-mobility",
        name: "Global Mobility",
        blurb: "Relocation management and cross-cultural transition support.",
      },
      {
        slug: "change-of-status",
        name: "Change-of-Status",
        blurb: "I-539 & employer I-129 filings with a written No-Gap Status Plan for every critical date.",
        href: "/services/change-of-status",
      },
      {
        slug: "oci-renunciation",
        name: "OCI-Renunciation",
        blurb: "Indian passport surrender, the OCI Document Binder, minors, 2026 e-OCI rules and fees.",
        href: "/services/oci-renunciation",
      },
    ],
  },
];

export const allServices: (Service & { categorySlug: string; categoryTitle: string })[] =
  serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      ...service,
      categorySlug: category.slug,
      categoryTitle: category.title,
    })),
  );
