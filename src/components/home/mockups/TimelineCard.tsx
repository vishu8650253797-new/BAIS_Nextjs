import { Check } from "lucide-react";

const steps = [
  { label: "Initial consultation", day: "Day 1", done: true },
  { label: "Documentation prepared", day: "Day 12", done: true },
  { label: "Petition filed", day: "Day 24", done: false },
];

export function TimelineCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
      <p className="text-xs font-bold uppercase tracking-wide text-body/60">
        Case timeline · Sample case
      </p>

      <ul className="mt-5 space-y-4">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-3">
            <span
              className={
                step.done
                  ? "flex size-6 shrink-0 items-center justify-center rounded-full bg-maroon text-white"
                  : "flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-border"
              }
            >
              {step.done && <Check className="size-3.5" aria-hidden="true" />}
            </span>
            <span className="flex flex-1 items-center justify-between rounded-lg border border-border px-4 py-3 text-sm transition-colors duration-200 hover:bg-cream/50 hover:border-maroon/20">
              <span className="text-ink">{step.label}</span>
              <span className="text-xs text-body/60">{step.day}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[11px] text-body/50">Illustrative example, not a specific client case.</p>
    </div>
  );
}
