import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, FeatureGrid } from "@/components/site/PageShell";

export const Route = createFileRoute("/forex")({
  head: () => ({
    meta: [
      { title: "Forex Trading — Solynvest" },
      { name: "description", content: "Institutional FX execution with tier-1 liquidity, sub-millisecond fills, transparent spreads, and 70+ currency pairs." },
      { property: "og:title", content: "Forex Trading — Solynvest" },
      { property: "og:description", content: "Institutional FX execution. Retail simplicity." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="02 — Forex Trading"
      title={<>Institutional FX. <span className="italic text-gradient-lemon">Retail simplicity</span>.</>}
      lead="Tier-1 liquidity aggregation across 70+ currency pairs. Sub-millisecond execution, transparent spreads, and deep analytics — without the desk."
    >
      <FeatureGrid items={[
        { t: "Spreads from 0.0 pips", d: "Aggregated tier-1 liquidity passed through with no markup on raw spread accounts." },
        { t: "Sub-ms execution", d: "Co-located matching engines in NY4, LD4, and TY3 for global low-latency fills." },
        { t: "70+ pairs", d: "Majors, minors, exotics, and CFDs on metals and indices — all in one account." },
        { t: "Algorithmic ready", d: "FIX 4.4, REST and WebSocket APIs with full market depth and historical tick data." },
        { t: "Risk controls", d: "Negative balance protection, configurable max drawdown, and auto-flatten triggers." },
        { t: "Pro analytics", d: "Slippage reports, fill quality, and execution benchmarking on every trade." },
      ]} />
      <div className="mt-16">
        <Link to="/contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">Open an FX account →</Link>
      </div>
    </PageShell>
  ),
});
