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
    <footer className="border-t border-border/60 py-14 text-[13px]">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-1.5 font-display font-semibold text-[15px]">
              <span className="inline-block size-[18px] rounded-[5px] bg-foreground" />
              Solynvest
            </Link>
            <p className="mt-3 text-muted-foreground max-w-xs leading-relaxed">
              Modern investment infrastructure. Built by operators, regulated globally.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.t}>
              <div className="font-medium">{c.t}</div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {c.l.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to} className="hover:text-foreground transition-colors">{i.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3 justify-between text-muted-foreground">
          <div>© 2026 Solynvest, Inc.</div>
          <div className="max-w-xl">Investments involve risk including loss of principal. Past performance is not indicative of future results.</div>
        </div>
      </div>
    </footer>
  );
}
