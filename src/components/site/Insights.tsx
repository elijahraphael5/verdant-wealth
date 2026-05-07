const items = [
  { tag: "Macro", title: "Why the dollar's reign is entering a new chapter", read: "8 min read", date: "May 2026" },
  { tag: "Fixed Income", title: "Building bond ladders in a flattening curve environment", read: "6 min read", date: "Apr 2026" },
  { tag: "FX Strategy", title: "Carry trades return: opportunities in EM currencies", read: "5 min read", date: "Apr 2026" },
];

export function Insights() {
  return (
    <section id="insights" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-lemon">Insights</div>
            <h2 className="mt-3 text-4xl sm:text-5xl">From the <span className="italic">research desk</span>.</h2>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground">View all →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.title} className="group glass rounded-2xl p-6 hover:ring-lemon transition">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[oklch(0.32_0.09_150)] to-[oklch(0.18_0.05_155)] mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute bottom-3 left-3 text-xs rounded-full bg-lemon text-[oklch(0.18_0.05_155)] px-2 py-0.5 font-medium">{it.tag}</div>
              </div>
              <h3 className="font-display text-2xl leading-snug group-hover:text-lemon transition">{it.title}</h3>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{it.date}</span><span>{it.read}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
