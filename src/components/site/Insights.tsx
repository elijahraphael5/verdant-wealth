import { Link } from "@tanstack/react-router";

const items = [
  { tag: "Macro", title: "Why the dollar's reign is entering a new chapter", read: "8 min read", date: "May 2026" },
  { tag: "Fixed Income", title: "Building bond ladders in a flattening curve environment", read: "6 min read", date: "Apr 2026" },
  { tag: "FX Strategy", title: "Carry trades return: opportunities in EM currencies", read: "5 min read", date: "Apr 2026" },
];

export function Insights() {
  return (
    <section className="py-24 sm:py-32 border-t border-border/60">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12 gap-6">
          <h2 className="display-md">From the research desk.</h2>
          <Link to="/insights" className="pill-link hidden sm:inline-flex">
            View all <span aria-hidden>›</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.title} className="group">
              <div className="aspect-[4/3] rounded-2xl bg-subtle relative overflow-hidden">
                <div className="absolute bottom-3 left-3 text-[11px] rounded-full bg-background px-2.5 py-1 font-medium">
                  {it.tag}
                </div>
              </div>
              <h3 className="mt-5 text-[20px] font-semibold leading-snug group-hover:text-blue transition-colors">
                {it.title}
              </h3>
              <div className="mt-3 flex items-center justify-between text-[12px] text-muted-foreground">
                <span>{it.date}</span>
                <span>{it.read}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
