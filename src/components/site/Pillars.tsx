import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: "capital",
    eyebrow: "01 — Capital Investment",
    title: "Allocate capital with conviction.",
    body: "Diversified equity, venture, and private market exposure curated by senior portfolio managers. Built to compound across decades, not headlines.",
    bullets: ["Multi-asset diversification", "Direct co-investment access", "Risk-adjusted target: 12–15% IRR"],
    metric: { v: "$4.2B+", l: "Assets under allocation" },
  },
  {
    id: "forex",
    eyebrow: "02 — Forex Trading",
    title: "Institutional FX execution. Retail simplicity.",
    body: "Tier-1 liquidity aggregation across 70+ currency pairs. Sub-millisecond execution, transparent spreads, and deep analytics — without the desk.",
    bullets: ["Spreads from 0.0 pips", "Sub-ms aggregated execution", "Algorithmic & manual strategies"],
    metric: { v: "70+", l: "Currency pairs" },
  },
  {
    id: "fixed",
    eyebrow: "03 — Fixed Income",
    title: "Predictable yield. Engineered ladders.",
    body: "Investment-grade bonds, sovereign treasuries, and structured notes — laddered for liquidity and duration-matched to your horizon.",
    bullets: ["Treasuries, corporates & munis", "Auto-ladder & auto-reinvest", "Yields up to 6.4% APY"],
    metric: { v: "6.4%", l: "Top tier APY" },
  },
];

export function Pillars() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".pillar").forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-lemon">Three pillars</div>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            One platform. <span className="italic text-gradient-lemon">Three engines</span> of growth.
          </h2>
        </div>

        <div className="space-y-10">
          {pillars.map((p, i) => (
            <article key={p.id} id={p.id} className="pillar glass rounded-3xl p-8 sm:p-12 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.eyebrow}</div>
                <h3 className="mt-3 text-3xl sm:text-4xl">{p.title}</h3>
                <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">{p.body}</p>
                <ul className="mt-6 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <span className="size-1.5 rounded-full bg-lemon" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <div className="rounded-2xl bg-card/60 border border-border p-6 h-full flex flex-col justify-between">
                  <div className="text-xs text-muted-foreground">{p.metric.l}</div>
                  <div className="font-display text-6xl text-gradient-lemon">{p.metric.v}</div>
                  <div className="mt-4">
                    <PillarVisual idx={i} />
                  </div>
                </div>
                <a href="#cta" className="inline-flex items-center justify-between rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-card transition">
                  Learn more <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarVisual({ idx }: { idx: number }) {
  if (idx === 0) {
    return (
      <div className="grid grid-cols-6 gap-1 h-20 items-end">
        {[40, 65, 50, 80, 70, 95].map((h, i) => (
          <div key={i} className="rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "oklch(0.92 0.22 125)" : "oklch(0.4 0.08 150)" }} />
        ))}
      </div>
    );
  }
  if (idx === 1) {
    return (
      <svg viewBox="0 0 200 80" className="w-full h-20">
        <path d="M0 60 L 30 40 L 60 50 L 90 20 L 120 35 L 150 15 L 200 25" fill="none" stroke="oklch(0.92 0.22 125)" strokeWidth="2" />
        <path d="M0 50 L 30 55 L 60 35 L 90 45 L 120 30 L 150 40 L 200 38" fill="none" stroke="oklch(0.5 0.1 155)" strokeWidth="2" strokeDasharray="3 3" />
      </svg>
    );
  }
  return (
    <div className="space-y-1.5">
      {[80, 65, 50, 35].map((w, i) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <div className="h-2 rounded-full" style={{ width: `${w}%`, background: "oklch(0.92 0.22 125)" }} />
          <span className="text-muted-foreground">{(7 - i)}Y</span>
        </div>
      ))}
    </div>
  );
}
