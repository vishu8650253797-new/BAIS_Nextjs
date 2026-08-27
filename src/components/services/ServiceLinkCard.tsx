import type { Service } from "@/data/services";

export function ServiceLinkCard({ service }: { service: Service }) {
  return (
    <div className="rounded-lg border border-border p-5 transition-colors duration-200 hover:border-maroon/30">
      <h4 className="font-bold text-ink">{service.name}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-body">{service.blurb}</p>
    </div>
  );
}
