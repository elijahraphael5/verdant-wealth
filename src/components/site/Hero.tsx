import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".hero-line", { y: 60, opacity: 0, duration: 1, stagger: 0.12, ease: "power4.out", delay: 0.1 });
      gsap.from(".hero-sub", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.5 });
      gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.7 });
      gsap.from(".hero-stat", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.9 });
      gsap.from(".hero-card", { y: 60, opacity: 0, scale: 0.95, duration: 1.2, ease: "power3.out", delay: 0.4 });

      // ticker animation
      gsap.to(".ticker-track", { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-[oklch(0.92_0.22_125)/0.08] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-lemon animate-pulse" />
              Markets open · S&P futures +0.42%
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
              <span className="hero-line block">Capital that</span>
              <span className="hero-line block text-gradient-lemon italic">compounds quietly.</span>
              <span className="hero-line block">Built for serious investors.</span>
            </h1>
            <p className="hero-sub mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Solynvest unifies private capital allocation, institutional-grade FX execution,
              and laddered fixed income — under one transparent platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="hero-cta inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-medium px-6 py-3 hover:opacity-90 transition shadow-[var(--shadow-glow)]">
                Open an account
                <span>→</span>
              </a>
              <a href="#capital" className="hero-cta inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-card transition">
                Explore strategies
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "$4.2B", l: "Assets allocated" },
                { v: "11.8%", l: "Avg. annual return" },
                { v: "98 bps", l: "Avg. spread cost" },
              ].map((s) => (
                <div key={s.l} className="hero-stat">
                  <div className="text-2xl font-display text-gradient-lemon">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 hero-card">
            <PortfolioCard />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative mt-24 border-y border-border py-4 overflow-hidden">
        <div className="ticker-track flex gap-12 whitespace-nowrap text-sm text-muted-foreground">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {[
                ["EUR/USD", "1.0842", "+0.31%"],
                ["GBP/JPY", "192.41", "-0.18%"],
                ["US10Y", "4.21%", "+2bps"],
                ["BTC/USD", "67,420", "+1.24%"],
                ["XAU/USD", "2,341", "+0.62%"],
                ["S&P 500", "5,287", "+0.42%"],
                ["USD/JPY", "156.20", "+0.09%"],
                ["DE Bund 10Y", "2.51%", "-1bps"],
              ].map(([s, p, c]) => (
                <span key={s + i} className="inline-flex items-center gap-3">
                  <span className="font-medium text-foreground">{s}</span>
                  <span>{p}</span>
                  <span className={c.startsWith("+") ? "text-lemon" : "text-destructive"}>{c}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard() {
  return (
    <div className="glass rounded-3xl p-6 ring-lemon">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground">Portfolio · YTD</div>
          <div className="font-display text-3xl mt-1">$284,512.<span className="text-muted-foreground text-2xl">94</span></div>
        </div>
        <span className="text-xs rounded-full bg-[oklch(0.92_0.22_125)/0.15] text-lemon px-2 py-1">+18.42%</span>
      </div>

      <svg viewBox="0 0 400 140" className="mt-6 w-full">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.92 0.22 125)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.92 0.22 125)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 100 C 40 90, 60 110, 100 80 S 180 60, 220 70 S 300 30, 360 40 L 400 35 L 400 140 L 0 140 Z" fill="url(#g)" />
        <path d="M0 100 C 40 90, 60 110, 100 80 S 180 60, 220 70 S 300 30, 360 40 L 400 35" fill="none" stroke="oklch(0.92 0.22 125)" strokeWidth="2" />
      </svg>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {[
          { l: "Capital", v: "62%", c: "bg-lemon" },
          { l: "Forex", v: "23%", c: "bg-[oklch(0.7_0.18_150)]" },
          { l: "Fixed", v: "15%", c: "bg-[oklch(0.5_0.1_155)]" },
        ].map((a) => (
          <div key={a.l} className="rounded-xl bg-card/60 border border-border p-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className={`size-2 rounded-full ${a.c}`} />{a.l}</div>
            <div className="font-display text-xl mt-1">{a.v}</div>
          </div>
        ))}
      </div>

      <button className="mt-5 w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-medium hover:opacity-90 transition">
        Rebalance portfolio
      </button>
    </div>
  );
}
