import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, FeatureGrid } from "@/components/site/PageShell";

export const Route = createFileRoute("/capital")({
  head: () => ({
    meta: [
      { title: "Capital Investment — Verdant Capital" },
      { name: "description", content: "Diversified equity, venture, and private market exposure curated by senior portfolio managers — built to compound across decades." },
      { property: "og:title", content: "Capital Investment — Verdant" },
      { property: "og:description", content: "Allocate capital with conviction." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="01 — Capital Investment"
      title={<>Allocate capital with <span className="italic text-gradient-lemon">conviction</span>.</>}
      lead="Diversified equity, venture, and private market exposure curated by senior portfolio managers. Built to compound across decades, not headlines."
    >
      <FeatureGrid items={[
        { t: "Multi-asset", d: "Public equities, private credit, venture co-invests and real assets — under one mandate." },
        { t: "Direct co-investment", d: "Selected access to off-market deals usually reserved for institutions." },
        { t: "Risk-adjusted", d: "Targeting 12–15% IRR with disciplined drawdown control across cycles." },
        { t: "Quarterly reporting", d: "Transparent performance, attribution, and fee disclosure delivered every quarter." },
        { t: "Senior PMs", d: "Allocations led by managers with 15+ years across Bridgewater, Citadel, and KKR." },
        { t: "Tax-aware", d: "Loss harvesting and account location optimisation built into every allocation." },
      ]} />
      <div className="mt-16">
        <Link to="/contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">Talk to an advisor →</Link>
      </div>
    </PageShell>
  ),
});
