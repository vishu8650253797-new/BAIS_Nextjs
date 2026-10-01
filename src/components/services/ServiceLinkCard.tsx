import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceLinkCard({ service }: { service: Service }) {
  const content = (
    <>
      <h4 className="flex items-center gap-1.5 font-bold text-ink">
        {service.name}
        {service.href && (
          <ArrowRight
            className="size-3.5 shrink-0 text-maroon opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            aria-hidden="true"
          />
        )}
      </h4>
      <p className="mt-1.5 text-sm leading-relaxed text-body">{service.blurb}</p>
    </>
  );

  if (service.href) {
    return (
      <Link
        href={service.href}
        className="group block rounded-lg border border-border p-5 transition-colors duration-200 hover:border-maroon/30"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="rounded-lg border border-border p-5 transition-colors duration-200 hover:border-maroon/30">
      {content}
    </div>
  );
}
