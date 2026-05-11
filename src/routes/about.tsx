import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Solynvest — Our story & philosophy" },
      { name: "description", content: "Solynvest is a modern investment firm uniting capital allocation, FX execution, and fixed income strategy under one transparent platform." },
      { property: "og:title", content: "About Solynvest" },
      { property: "og:description", content: "Built by operators. Trusted by investors. Discover our philosophy, our team, and our approach." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Elena Marsh", role: "Chief Investment Officer", bio: "16 years across Bridgewater & Citadel macro." },
  { name: "Jonas Vega", role: "Head of FX Strategy", bio: "Former Goldman Sachs G10 desk lead." },
  { name: "Priya Anand", role: "Head of Fixed Income", bio: "Built laddered bond products at PIMCO." },
  { name: "Marcus Olin", role: "Chief Technology Officer", bio: "Scaled execution infra at Two Sigma." },
];

const values = [
  { t: "Transparency", d: "Every basis point of cost shown upfront. No hidden spreads, no kickbacks." },
  { t: "Discipline", d: "Process over prediction. Risk-adjusted returns over headline numbers." },
  { t: "Stewardship", d: "We treat your capital as carefully as our own — because much of it is." },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-32">
        <section className="mx-auto max-w-5xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-lemon">About Solynvest</div>
          <h1 className="mt-4 text-5xl sm:text-7xl leading-[1.05]">
            We build investment <span className="italic text-gradient-lemon">infrastructure</span>, not products.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Solynvest was founded in 2019 by a team of former buy-side operators
            who believed sophisticated investing was trapped behind closed doors. We
            unbundled it — capital allocation, institutional FX execution, and laddered
            fixed income — and rebuilt it on transparent, modern rails.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 mt-24">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="glass rounded-2xl p-8">
                <div className="font-display text-3xl text-gradient-lemon">{v.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 mt-32">
          <div className="grid md:grid-cols-4 gap-6 glass rounded-3xl p-10">
            {[
              { v: "$4.2B", l: "Assets allocated" },
              { v: "11.8%", l: "Avg. annual return" },
              { v: "12,400+", l: "Investors served" },
              { v: "27", l: "Countries served" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-gradient-lemon">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 mt-32">
          <div className="text-xs uppercase tracking-[0.2em] text-lemon">Leadership</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">Operators, not <span className="italic">marketers</span>.</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="glass rounded-2xl p-6">
                <div className="aspect-square rounded-xl mb-5 bg-gradient-to-br from-[oklch(0.32_0.09_150)] to-[oklch(0.92_0.22_125)/0.4]" />
                <div className="font-display text-2xl">{m.name}</div>
                <div className="text-xs text-lemon mt-1">{m.role}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 mt-32 mb-24">
          <div className="glass rounded-3xl p-10 sm:p-16">
            <h2 className="text-3xl sm:text-4xl">Our story.</h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>What started as a frustration — that institutional-grade tools were locked behind seven-figure minimums — became a thesis: investors at every scale deserve the same quality of execution, research, and access.</p>
              <p>Today, Solynvest serves family offices, RIAs, and individual investors across 27 countries. Our team has executed over $4.2B in client capital, with a single guiding principle: align our incentives with yours, every time.</p>
              <p>We are regulated in the United States, the United Kingdom, and the European Union, and we publish our execution quality reports quarterly.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
