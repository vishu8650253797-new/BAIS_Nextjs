const sampleCases = [
  { name: "J. Patel", detail: "H-1B transfer", status: "In Progress", milestone: "RFE response filed" },
  { name: "M. Rivera", detail: "Green card (EB-2)", status: "In Progress", milestone: "Documentation review" },
  { name: "S. Chen", detail: "TN renewal", status: "Approved", milestone: "Case closed" },
  { name: "A. Okafor", detail: "Family I-130", status: "In Progress", milestone: "Petition filed" },
];

function StatusPill({ status }: { status: string }) {
  const isApproved = status === "Approved";
  return (
    <span
      className={
        isApproved
          ? "rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white"
          : "rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-dark"
      }
    >
      {status}
    </span>
  );
}

export function CaseStatusCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-xl shadow-ink/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-ink/15">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold text-ink">Active cases</p>
        <div className="flex w-fit gap-1 rounded-full bg-cream p-1 text-xs font-semibold text-body">
          <span className="rounded-full bg-white px-2.5 py-1 text-ink shadow-sm">All</span>
          <span className="hidden rounded-full px-2.5 py-1 transition-colors duration-200 hover:bg-white/60 sm:inline">In progress</span>
          <span className="hidden rounded-full px-2.5 py-1 transition-colors duration-200 hover:bg-white/60 sm:inline">Approved</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[1.2fr_0.8fr_1fr] gap-2 border-b border-border pb-2 text-xs font-semibold uppercase tracking-wide text-body/60">
        <span>Name</span>
        <span>Status</span>
        <span>Milestone</span>
      </div>

      <ul>
        {sampleCases.map((c) => (
          <li
            key={c.name}
            className="-mx-2 grid grid-cols-[1.2fr_0.8fr_1fr] items-center gap-2 rounded-lg border-b border-border px-2 py-3.5 transition-colors duration-200 last:border-0 hover:bg-cream/60"
          >
            <span>
              <span className="block text-sm font-bold text-ink">{c.name}</span>
              <span className="block text-xs text-body/70">{c.detail}</span>
            </span>
            <StatusPill status={c.status} />
            <span className="truncate rounded-full border border-border px-2.5 py-1 text-xs text-body">
              {c.milestone}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[11px] text-body/50">Illustrative example of a client case view.</p>
    </div>
  );
}
