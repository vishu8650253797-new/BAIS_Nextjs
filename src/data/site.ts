export const FOUNDED_YEAR = 2001;

export const site = {
  name: "Bay Area Immigration Services",
  shortName: "BAIS",
  tagline: "Immigration Consultants Serving the Bay Area Since 2001",
  description:
    "Bay Area Immigration Services is a California-based immigration consultancy helping individuals, families, and employers navigate U.S. work visas, green cards, and family-based immigration with clear, personalized guidance.",
  url: "https://www.bayareaimmigrationservices.com",
  phone: "(510) 770-8700",
  phoneHref: "tel:+15107708700",
  email: "info@bayareaimmigrationservices.com",
  emailHref: "mailto:info@bayareaimmigrationservices.com",
  address: {
    line1: "39159 Paseo Padre Pkwy, STE 115",
    city: "Fremont",
    state: "CA",
    zip: "94538",
    country: "United States",
    full: "39159 Paseo Padre Pkwy, STE 115, Fremont, CA 94538",
  },
  consultationFee:
    "We offer a detailed consultation for $100, which is applied toward your overall service cost if you choose to move forward with us.",
  social: {
    facebook: "https://www.facebook.com/bayareaimmi/",
    twitter: "https://twitter.com/bayareaimmig",
    linkedin: "https://www.linkedin.com/company/bay-area",
  },
  bookingUrl:
    "https://api.leadconnectorhq.com/widget/booking/64pvwZ4FA6lybcW548cF",
  disclaimer:
    "Bay Area Immigration Services is a private immigration consulting and document-preparation firm. We are not a law firm, do not employ attorneys, and do not provide legal advice or legal representation. Our services are limited to informational, educational, and immigration document-preparation support. We are not affiliated with USCIS or any U.S. government agency. For legal advice or legal representation, please consult a licensed U.S. immigration attorney.",
  missionQuote:
    "We do not claim to have legal knowledge, but we keep ourselves updated with the daily developments on the immigration front — so our clients always have current, reliable guidance for their case.",
} as const;

export function yearsInBusiness(currentYear: number = new Date().getFullYear()) {
  return currentYear - FOUNDED_YEAR;
}
