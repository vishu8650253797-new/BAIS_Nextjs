const options = [
  { code: "H-1B", label: "Specialty Occupation" },
  { code: "O-1", label: "Extraordinary Ability" },
];

export function PathwayCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-cream p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-body/60">
          Pathway analysis · Sample case
        </p>
        <div className="mt-4 space-y-3">
          {options.map((option) => (
            <div
              key={option.code}
              className="flex items-center gap-3 rounded-lg bg-white px-4 py-3.5 shadow-sm shadow-ink/[0.02] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-ink/5"
            >
              <span className="rounded-md bg-maroon/10 px-2.5 py-1 text-xs font-bold text-maroon">
                {option.code}
              </span>
              <span className="text-sm text-ink">{option.label}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-[11px] text-body/50">Illustrative example, not a specific client case.</p>
    </div>
  );
}
