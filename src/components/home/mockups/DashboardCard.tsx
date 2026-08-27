const items = [
  { name: "J. Patel", detail: "H-1B", status: "Approved" },
  { name: "M. Rivera", detail: "EB-2 NIW", status: "In review" },
  { name: "S. Chen", detail: "TN renewal", status: "Filing" },
];

function Pill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Approved: "bg-accent text-white",
    "In review": "bg-white/15 text-white",
    Filing: "bg-white/15 text-white",
  };
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}

export function DashboardCard() {
  return (
    <div className="rounded-2xl bg-ink p-6 text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/20">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">Your case portal</p>
        <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-accent">
          <span className="size-1.5 rounded-full bg-accent" />
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/5 p-4 transition-colors duration-200 hover:bg-white/10">
          <p className="text-2xl font-bold text-accent">6</p>
          <p className="mt-1 text-xs text-white/60">Documents on file</p>
        </div>
        <div className="rounded-xl bg-white/5 p-4 transition-colors duration-200 hover:bg-white/10">
          <p className="text-2xl font-bold text-accent">3</p>
          <p className="mt-1 text-xs text-white/60">New case alerts</p>
        </div>
      </div>

      <ul className="mt-5 space-y-2.5">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between rounded-lg bg-white/5 px-3.5 py-2.5 transition-colors duration-200 hover:bg-white/10"
          >
            <span>
              <span className="block text-sm font-semibold">{item.name}</span>
              <span className="block text-xs text-white/50">{item.detail}</span>
            </span>
            <Pill status={item.status} />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[11px] text-white/40">Illustrative example of a client portal view.</p>
    </div>
  );
}
