import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, FeatureGrid } from "@/components/site/PageShell";

export const Route = createFileRoute("/fixed-income")({
  head: () => ({
    meta: [
      { title: "Fixed Income — Verdant Capital" },
      { name: "description", content: "Investment-grade bonds, sovereign treasuries, and structured notes — laddered for liquidity and duration-matched to your horizon." },
      { property: "og:title", content: "Fixed Income — Verdant" },
      { property: "og:description", content: "Predictable yield. Engineered ladders." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="03 — Fixed Income"
      title={<>Predictable yield. <span className="italic text-gradient-lemon">Engineered ladders</span>.</>}
      lead="Investment-grade bonds, sovereign treasuries, and structured notes — laddered for liquidity and duration-matched to your horizon."
    >
      <FeatureGrid items={[
        { t: "Treasuries", d: "Direct access to T-bills, notes, and bonds with auctions and secondary fills." },
        { t: "Corporate bonds", d: "Curated investment-grade and select high-yield issues from 800+ issuers." },
        { t: "Municipals", d: "Tax-advantaged munis screened for credit quality and duration suitability." },
        { t: "Auto-ladder", d: "Set your duration band — we ladder, reinvest, and rebalance automatically." },
        { t: "Yields up to 6.4%", d: "Top-tier APY with full transparency on credit rating and duration." },
        { t: "Daily liquidity", d: "Most positions liquid same-day; ladders structured for predictable cash flow." },
      ]} />
      <div className="mt-16">
        <Link to="/contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">Build a ladder →</Link>
      </div>
    </PageShell>
  ),
});
