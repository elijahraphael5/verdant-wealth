import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all ${scrolled ? "glass rounded-full px-5 py-2.5" : ""}`}
           style={scrolled ? { width: "min(72rem, calc(100% - 3rem))" } : undefined}>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-7 rounded-md bg-gradient-to-br from-[oklch(0.92_0.22_125)] to-[oklch(0.7_0.2_140)] grid place-items-center">
            <svg viewBox="0 0 24 24" className="size-4 text-[oklch(0.18_0.05_155)]" fill="currentColor"><path d="M3 20 L12 4 L21 20 L12 14 Z"/></svg>
          </div>
          <span className="font-display text-xl tracking-tight">Verdant<span className="text-lemon">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#capital" className="hover:text-foreground transition">Capital</a>
          <a href="#forex" className="hover:text-foreground transition">Forex</a>
          <a href="#fixed" className="hover:text-foreground transition">Fixed Income</a>
          <a href="#insights" className="hover:text-foreground transition">Insights</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground px-3 py-2">Sign in</a>
          <a href="#cta" className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:opacity-90 transition">
            Open account →
          </a>
        </div>
      </div>
    </header>
  );
}
