import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import type { ReactNode } from "react";

export function PageShell({ eyebrow, title, lead, children }: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-lemon">{eyebrow}</div>
          <h1 className="mt-4 text-5xl sm:text-7xl leading-[1.05] max-w-4xl">{title}</h1>
          {lead && <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{lead}</p>}
          <div className="mt-16">{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function FeatureGrid({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.t} className="glass rounded-2xl p-7">
          <div className="font-display text-2xl text-gradient-lemon">{it.t}</div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
        </div>
      ))}
    </div>
  );
}

export function Prose({ sections }: { sections: { h: string; p: string }[] }) {
  return (
    <div className="glass rounded-3xl p-10 sm:p-14 space-y-10 max-w-4xl">
      {sections.map((s) => (
        <div key={s.h}>
          <h2 className="font-display text-3xl text-gradient-lemon">{s.h}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">{s.p}</p>
        </div>
      ))}
    </div>
  );
}
