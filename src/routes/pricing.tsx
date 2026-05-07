import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

const tiers = [
  {
    name: "Core", price: "0.25%", per: "/yr AUM",
    desc: "For investors getting started with diversified allocations.",
    features: ["Capital, FX & fixed income access", "Quarterly performance reports", "Email support", "$1,000 minimum"],
    cta: "Start with Core",
  },
  {
    name: "Prime", price: "0.45%", per: "/yr AUM",
    desc: "For serious investors scaling across strategies.",
    features: ["Everything in Core", "Direct co-investment access", "Dedicated advisor", "Tax-loss harvesting", "$50,000 minimum"],
    cta: "Talk to Prime team", featured: true,
  },
  {
    name: "Family Office", price: "Custom", per: "",
    desc: "Tailored mandates for family offices and institutions.",
    features: ["Bespoke portfolio construction", "Custom reporting & API access", "Multi-entity & multi-currency", "$5M+ minimum"],
    cta: "Request proposal",
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Verdant Capital" },
      { name: "description", content: "Transparent fees across Verdant Capital's Core, Prime, and Family Office tiers. No hidden spreads, no kickbacks." },
      { property: "og:title", content: "Pricing — Verdant" },
      { property: "og:description", content: "Simple, transparent investment pricing." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Pricing"
      title={<>Transparent <span className="italic text-gradient-lemon">to the basis point</span>.</>}
      lead="No hidden spreads. No revenue-share kickbacks. One AUM-based fee — billed quarterly, refundable pro-rata."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`glass rounded-3xl p-8 flex flex-col ${t.featured ? "ring-lemon" : ""}`}>
            {t.featured && <div className="text-xs rounded-full bg-lemon text-[oklch(0.18_0.05_155)] px-2 py-0.5 font-medium w-fit mb-4">Most popular</div>}
            <div className="font-display text-3xl">{t.name}</div>
            <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-5xl text-gradient-lemon">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.per}</span>
            </div>
            <ul className="mt-6 space-y-2.5 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="size-1.5 rounded-full bg-lemon mt-2 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className={`mt-8 rounded-full text-center py-3 text-sm font-medium transition ${t.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:bg-card"}`}>
              {t.cta}
            </Link>
          </div>
        ))}
      </div>
    </PageShell>
  ),
});
