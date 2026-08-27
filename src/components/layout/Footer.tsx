import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { serviceCategories } from "@/data/services";
import { site } from "@/data/site";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/shared/SocialIcons";
import { Logo } from "@/components/layout/Logo";

const linkColumns = [
  {
    title: "Services",
    links: serviceCategories.map((category) => ({
      label: category.title,
      href: `/services#${category.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/#faq" },
      { label: "Schedule a Consultation", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

const footerLinkClass =
  "text-sm text-white/55 transition-colors duration-200 hover:text-white";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:gap-8">
          <div>
            <h2 className="max-w-xs text-2xl font-bold leading-snug text-white">
              Guidance for every step of your immigration journey.
            </h2>

            <div className="mt-8 space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
              <p className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.address.full}
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bay Area Immigration Services on Facebook"
                className="rounded-full border border-white/15 p-2.5 text-white/70 transition-colors duration-200 hover:border-white hover:text-white"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bay Area Immigration Services on X"
                className="rounded-full border border-white/15 p-2.5 text-white/70 transition-colors duration-200 hover:border-white hover:text-white"
              >
                <XIcon className="size-4" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bay Area Immigration Services on LinkedIn"
                className="rounded-full border border-white/15 p-2.5 text-white/70 transition-colors duration-200 hover:border-white hover:text-white"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </div>
          </div>

          {linkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-cream">{column.title}</h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={footerLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo inverse />
          </div>
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <p className="text-xs leading-relaxed text-white/40">{site.disclaimer}</p>
        </Container>
      </div>
    </footer>
  );
}
