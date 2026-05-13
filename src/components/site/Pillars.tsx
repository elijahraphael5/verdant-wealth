import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: "capital",
    eyebrow: "Capital",
    title: "Allocate with conviction.",
    body: "Diversified equity, venture, and private markets — curated by senior portfolio managers and built to compound across decades.",
    to: "/capital",
    visual: "capital",
  },
  {
    id: "forex",
    eyebrow: "Forex",
    title: "Institutional execution.",
    body: "Tier-1 liquidity across 70+ currency pairs. Sub-millisecond execution and transparent spreads — without the desk.",
    to: "/forex",
    visual: "forex",
  },
  {
    id: "fixed",
    eyebrow: "Fixed Income",
    title: "Predictable yield.",
    body: "Investment-grade bonds, sovereigns, and structured notes — laddered for liquidity and matched to your horizon.",
    to: "/fixed-income",
    visual: "fixed",
  },
] as const;

export function Pillars() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".tile").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 sm:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="display-lg">Three engines. One platform.</h2>
          <p className="mt-4 text-[18px] text-muted-foreground">
            Each strategy stands on its own. Together, they work in concert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <article key={p.id} className="tile surface-tile p-8 flex flex-col">
              <PillarVisual kind={p.visual} />
              <p className="mt-8 text-[13px] tracking-wide text-muted-foreground uppercase">{p.eyebrow}</p>
              <h3 className="mt-2 text-[28px] font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed flex-1">{p.body}</p>
              <Link to={p.to} className="pill-link mt-6">
                Explore <span aria-hidden>›</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarVisual({ kind }: { kind: string }) {
  if (kind === "capital") {
    return (
      <div className="aspect-[4/3] rounded-2xl bg-background border border-border/60 grid place-items-center p-6">
        <div className="grid grid-cols-7 gap-1.5 w-full items-end h-28">
          {[40, 55, 48, 70, 60, 82, 95].map((h, i) => (
            <div
              key={i}
              className="rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 6 ? "var(--blue)" : "oklch(0.88 0 0)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  if (kind === "forex") {
    return (
      <div className="aspect-[4/3] rounded-2xl bg-background border border-border/60 p-6 flex items-center">
        <svg viewBox="0 0 200 80" className="w-full">
          <path d="M0 60 L 30 40 L 60 50 L 90 20 L 120 35 L 150 15 L 200 25" fill="none" stroke="var(--blue)" strokeWidth="1.75" />
          <path d="M0 50 L 30 55 L 60 35 L 90 45 L 120 30 L 150 40 L 200 38" fill="none" stroke="oklch(0.78 0 0)" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      </div>
    );
  }
  return (
    <div className="aspect-[4/3] rounded-2xl bg-background border border-border/60 p-6 flex flex-col justify-center gap-2.5">
      {[88, 70, 54, 38].map((w, i) => (
        <div key={i} className="flex items-center gap-3 text-[12px] text-muted-foreground">
          <div className="h-1.5 rounded-full bg-blue/80" style={{ width: `${w}%` }} />
          <span>{7 - i}Y</span>
        </div>
      ))}
    </div>
  );
}
