import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const press = [
  { src: "Bloomberg", date: "Apr 2026", title: "Solynvest surpasses $4B in client assets, expands to Frankfurt" },
  { src: "Financial Times", date: "Mar 2026", title: "How Solynvest is unbundling the family office for a new generation" },
  { src: "Reuters", date: "Jan 2026", title: "Solynvest reports record 2025, posts 14.2% net return" },
  { src: "TechCrunch", date: "Nov 2025", title: "Solynvest raises $80M Series C to scale execution infrastructure" },
  { src: "WSJ", date: "Sep 2025", title: "Inside the rise of transparent-fee investment platforms" },
];

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Solynvest" },
      { name: "description", content: "Press coverage, news releases, and media resources from Solynvest." },
      { property: "og:title", content: "Press — Solynvest" },
      { property: "og:description", content: "News & media coverage." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Press"
      title={<>News & <span className="italic text-gradient-lemon">media coverage</span>.</>}
      lead="For media inquiries, contact press@verdant.capital. Brand assets and executive bios available on request."
    >
      <div className="glass rounded-3xl divide-y divide-border overflow-hidden">
        {press.map((p) => (
          <a href="#" key={p.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 hover:bg-card/40 transition">
            <div>
              <div className="text-xs uppercase tracking-widest text-lemon">{p.src} · {p.date}</div>
              <div className="font-display text-xl mt-1">{p.title}</div>
            </div>
            <span className="text-sm text-muted-foreground">Read →</span>
          </a>
        ))}
      </div>
    </PageShell>
  ),
});
