import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/shared/SocialIcons";

const items = [
  {
    icon: Phone,
    label: "Call Us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: site.address.full,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`,
  },
];

export function ContactInfo() {
  return (
    <div className="rounded-2xl border border-border bg-cream p-8">
      <h2 className="text-xl font-bold text-ink">Contact Information</h2>
      <p className="mt-2 text-sm leading-relaxed text-body">
        Our contact information is provided below for your convenience.
        Alternatively, use the form to send us a direct message — we strive
        to respond to all queries promptly.
      </p>

      <ul className="mt-6 space-y-5">
        {items.map(({ icon: Icon, label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={label === "Visit Us" ? "_blank" : undefined}
              rel={label === "Visit Us" ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-3"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-maroon transition-colors duration-200 group-hover:bg-maroon group-hover:text-white">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-body/60">
                  {label}
                </span>
                <span className="block text-sm font-semibold text-ink">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex gap-3 border-t border-border pt-6">
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bay Area Immigration Services on Facebook"
          className="rounded-full border border-border p-2.5 text-ink transition-colors duration-200 hover:border-maroon hover:text-maroon"
        >
          <FacebookIcon className="size-4" />
        </a>
        <a
          href={site.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bay Area Immigration Services on X"
          className="rounded-full border border-border p-2.5 text-ink transition-colors duration-200 hover:border-maroon hover:text-maroon"
        >
          <XIcon className="size-4" />
        </a>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bay Area Immigration Services on LinkedIn"
          className="rounded-full border border-border p-2.5 text-ink transition-colors duration-200 hover:border-maroon hover:text-maroon"
        >
          <LinkedInIcon className="size-4" />
        </a>
      </div>
    </div>
  );
}
