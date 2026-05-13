import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-rise", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="pt-36 pb-28 sm:pt-44 sm:pb-36 text-center">
      <div className="container-x">
        <p className="hero-rise text-[13px] text-muted-foreground tracking-wide">New · Solynvest 2026</p>
        <h1 className="hero-rise display-xl mt-5 mx-auto max-w-[18ch]">
          Investing,
          <br />
          made remarkably simple.
        </h1>
        <p className="hero-rise mt-6 mx-auto max-w-[52ch] text-[19px] sm:text-[21px] text-muted-foreground leading-snug">
          Capital, forex, and fixed income in one quietly powerful platform.
          Designed for clarity. Engineered for performance.
        </p>

        <div className="hero-rise mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[15px]">
          <Link
            to="/calculator"
            className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 font-medium hover:opacity-90 transition"
          >
            Try the calculator
          </Link>
          <Link to="/about" className="pill-link">
            Learn more <span aria-hidden>›</span>
          </Link>
        </div>

        <div className="hero-rise mt-20">
          <HeroDevice />
        </div>
      </div>
    </section>
  );
}

function HeroDevice() {
  return (
    <div className="mx-auto max-w-[920px] surface-tile p-6 sm:p-10">
      <div className="rounded-2xl bg-background border border-border/70 overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-1.5 px-4 h-9 border-b border-border/60">
          <span className="size-2.5 rounded-full bg-[oklch(0.92_0_0)]" />
          <span className="size-2.5 rounded-full bg-[oklch(0.92_0_0)]" />
          <span className="size-2.5 rounded-full bg-[oklch(0.92_0_0)]" />
        </div>
        <div className="p-6 sm:p-10 grid sm:grid-cols-3 gap-6 text-left">
          <div className="sm:col-span-2">
            <p className="text-[13px] text-muted-foreground">Portfolio</p>
            <p className="display-md mt-1">$284,512.94</p>
            <p className="text-[13px] text-blue mt-1">+18.42% YTD</p>
            <svg viewBox="0 0 400 120" className="mt-6 w-full">
              <defs>
                <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.62 0.19 254)" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="oklch(0.62 0.19 254)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 90 C 50 80, 80 100, 120 70 S 200 50, 240 60 S 320 20, 380 30 L 400 25 L 400 120 L 0 120 Z" fill="url(#hg)" />
              <path d="M0 90 C 50 80, 80 100, 120 70 S 200 50, 240 60 S 320 20, 380 30 L 400 25" fill="none" stroke="oklch(0.62 0.19 254)" strokeWidth="1.75" />
            </svg>
          </div>
          <div className="space-y-3">
            {[
              { l: "Capital", v: "62%" },
              { l: "Forex", v: "23%" },
              { l: "Fixed Income", v: "15%" },
            ].map((a) => (
              <div key={a.l} className="rounded-xl bg-subtle px-4 py-3">
                <p className="text-[12px] text-muted-foreground">{a.l}</p>
                <p className="text-lg font-medium mt-0.5">{a.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
