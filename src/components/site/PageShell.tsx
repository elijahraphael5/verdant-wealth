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
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-24">
        <section className="container-x">
          <p className="text-[13px] text-blue tracking-wide">{eyebrow}</p>
          <h1 className="mt-3 display-lg max-w-3xl">{title}</h1>
          {lead && <p className="mt-5 text-[19px] text-muted-foreground max-w-2xl leading-snug">{lead}</p>}
          <div className="mt-14">{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function FeatureGrid({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.t} className="surface-tile p-7">
          <div className="text-[20px] font-semibold tracking-tight">{it.t}</div>
          <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{it.d}</p>
        </div>
      ))}
    </div>
  );
}

export function Prose({ sections }: { sections: { h: string; p: string }[] }) {
  return (
    <div className="space-y-12 max-w-3xl">
      {sections.map((s) => (
        <div key={s.h}>
          <h2 className="text-[28px] font-semibold tracking-tight">{s.h}</h2>
          <p className="mt-3 text-[16px] text-muted-foreground leading-relaxed whitespace-pre-line">{s.p}</p>
        </div>
      ))}
    </div>
  );
}
