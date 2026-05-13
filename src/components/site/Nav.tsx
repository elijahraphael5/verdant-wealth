import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/capital", label: "Capital" },
  { to: "/forex", label: "Forex" },
  { to: "/fixed-income", label: "Fixed Income" },
  { to: "/calculator", label: "Calculator" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 nav-blur border-b border-border/60">
      <div className="mx-auto max-w-[1100px] px-6 h-12 flex items-center justify-between text-[13px]">
        <Link to="/" className="flex items-center gap-1.5 font-display font-semibold tracking-tight text-[15px]">
          <span className="inline-block size-[18px] rounded-[5px] bg-foreground" />
          Solynvest
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-foreground/80">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col gap-1 p-2 -mr-2"
        >
          <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[1px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="px-6 py-6 flex flex-col gap-5 text-lg">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={"exact" in l && l.exact ? { exact: true } : undefined}
                activeProps={{ className: "text-foreground" }}
                className="text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
