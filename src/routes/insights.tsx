import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const items = [
  { tag: "Macro", title: "Why the dollar's reign is entering a new chapter", read: "8 min read", date: "May 2026" },
  { tag: "Fixed Income", title: "Building bond ladders in a flattening curve environment", read: "6 min read", date: "Apr 2026" },
  { tag: "FX Strategy", title: "Carry trades return: opportunities in EM currencies", read: "5 min read", date: "Apr 2026" },
  { tag: "Capital", title: "Private credit in a higher-for-longer regime", read: "9 min read", date: "Mar 2026" },
  { tag: "Macro", title: "Reading the yield curve: signal vs. noise in 2026", read: "7 min read", date: "Mar 2026" },
  { tag: "FX Strategy", title: "JPY intervention playbook: what changed", read: "4 min read", date: "Feb 2026" },
];

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Verdant Capital research desk" },
      { name: "description", content: "Macro, FX strategy, fixed income and capital markets analysis from Verdant Capital's research desk." },
      { property: "og:title", content: "Insights — Verdant" },
      { property: "og:description", content: "From the Verdant Capital research desk." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Insights"
      title={<>From the <span className="italic text-gradient-lemon">research desk</span>.</>}
      lead="Macro, FX, fixed income and capital markets — written by our investment team for serious investors."
    >
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
    </PageShell>
  ),
});
