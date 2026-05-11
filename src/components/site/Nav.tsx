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
          <span className="font-display text-xl tracking-tight">Solynvest<span className="text-lemon">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Home</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">About</Link>
          <Link to="/calculator" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Calculator</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:opacity-90 transition">
            Get in touch →
          </Link>
        </div>
      </div>
    </header>
  );
}
