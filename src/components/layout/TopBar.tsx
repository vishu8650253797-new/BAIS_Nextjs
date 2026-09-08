import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { serviceCategories } from "@/data/services";
import { site } from "@/data/site";

export function TopBar() {
  const track = [...serviceCategories, ...serviceCategories];

  return (
    <div className="border-b border-white/10 bg-maroon text-white">
      <Container className="flex h-10 items-center gap-6">
        <div className="group relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-wide group-hover:[animation-play-state:paused]">
            {track.map((category, index) => (
              <span
                key={`${category.slug}-${index}`}
                className="flex shrink-0 items-center gap-3"
              >
                {category.title}
                <span className="text-white/40" aria-hidden="true">
                  •
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-5 sm:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/85 transition-colors hover:text-white"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden="true" />
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/85 transition-colors hover:text-white"
          >
            <Mail className="size-3.5 shrink-0" aria-hidden="true" />
            {site.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
