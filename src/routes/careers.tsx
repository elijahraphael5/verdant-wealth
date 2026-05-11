import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const roles = [
  { team: "Investment", title: "Senior Portfolio Manager — Credit", loc: "New York · On-site" },
  { team: "Engineering", title: "Staff Engineer — Execution Systems", loc: "Remote (Americas)" },
  { team: "Engineering", title: "Senior Frontend Engineer", loc: "Remote (Global)" },
  { team: "Research", title: "FX Strategist", loc: "London · Hybrid" },
  { team: "Operations", title: "Compliance Manager (Series 7/24)", loc: "New York · Hybrid" },
  { team: "Design", title: "Product Designer — Client Platform", loc: "Remote (Global)" },
];

const perks = [
  { t: "Equity & profit share", d: "Every employee owns a slice of Solynvest — and shares in performance." },
  { t: "Remote-friendly", d: "Hubs in NYC and London. Most engineering and research roles fully remote." },
  { t: "Learning stipend", d: "$5,000/yr for books, courses, conferences, and certifications." },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Solynvest" },
      { name: "description", content: "Join Solynvest. Open roles across investment, engineering, research, design, and compliance." },
      { property: "og:title", content: "Careers at Solynvest" },
      { property: "og:description", content: "Build the next generation of investment infrastructure." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Careers"
      title={<>Build the next generation of <span className="italic text-gradient-lemon">investment infrastructure</span>.</>}
      lead="We're a small, senior team. Every hire shapes the product, the culture, and the long-term direction of the firm."
    >
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {perks.map((p) => (
          <div key={p.t} className="glass rounded-2xl p-7">
            <div className="font-display text-2xl text-gradient-lemon">{p.t}</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl mb-6">Open roles</h2>
      <div className="glass rounded-3xl divide-y divide-border overflow-hidden">
        {roles.map((r) => (
          <div key={r.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 hover:bg-card/40 transition">
            <div>
              <div className="text-xs uppercase tracking-widest text-lemon">{r.team}</div>
              <div className="font-display text-xl mt-1">{r.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{r.loc}</div>
            </div>
            <Link to="/contact" className="text-sm rounded-full border border-border px-4 py-2 hover:bg-card transition self-start sm:self-auto">Apply →</Link>
          </div>
        ))}
      </div>
    </PageShell>
  ),
});
