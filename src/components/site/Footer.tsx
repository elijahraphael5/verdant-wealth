import { Link } from "@tanstack/react-router";

const columns = [
  { t: "Products", l: [
    { label: "Capital", to: "/capital" },
    { label: "Forex", to: "/forex" },
    { label: "Fixed Income", to: "/fixed-income" },
    { label: "Pricing", to: "/pricing" },
  ] },
  { t: "Company", l: [
    { label: "About", to: "/about" },
    { label: "Insights", to: "/insights" },
    { label: "Careers", to: "/careers" },
    { label: "Press", to: "/press" },
  ] },
  { t: "Legal", l: [
    { label: "Disclosures", to: "/disclosures" },
    { label: "Terms", to: "/terms" },
    { label: "Privacy", to: "/privacy" },
    { label: "Compliance", to: "/compliance" },
  ] },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-md bg-gradient-to-br from-[oklch(0.92_0.22_125)] to-[oklch(0.7_0.2_140)] grid place-items-center">
                <svg viewBox="0 0 24 24" className="size-4 text-[oklch(0.18_0.05_155)]" fill="currentColor"><path d="M3 20 L12 4 L21 20 L12 14 Z"/></svg>
              </div>
              <span className="font-display text-xl">Verdant<span className="text-lemon">.</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Modern investment infrastructure for capital, FX, and fixed income. Built by operators, regulated globally.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.t}>
              <div className="text-sm font-medium">{c.t}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.l.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to} className="hover:text-foreground transition">{i.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <div>© 2026 Verdant Capital, Inc. All rights reserved.</div>
          <div>Investments involve risk including loss of principal. Past performance is not indicative of future results.</div>
        </div>
      </div>
    </footer>
  );
}
