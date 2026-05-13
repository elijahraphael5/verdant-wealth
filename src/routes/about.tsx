import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Solynvest — Our story & philosophy" },
      { name: "description", content: "Solynvest is a modern investment firm uniting capital allocation, FX execution, and fixed income strategy under one transparent platform." },
      { property: "og:title", content: "About Solynvest" },
      { property: "og:description", content: "Built by operators. Trusted by investors." },
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
  { t: "Transparency", d: "Every basis point of cost shown upfront. No hidden spreads." },
  { t: "Discipline", d: "Process over prediction. Risk-adjusted returns over headlines." },
  { t: "Stewardship", d: "We treat your capital as carefully as our own — because much of it is." },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-32">
        <section className="container-x text-center">
          <p className="text-[13px] text-blue tracking-wide">About Solynvest</p>
          <h1 className="mt-3 display-xl max-w-[20ch] mx-auto">
            Investment infrastructure, not products.
          </h1>
          <p className="mt-6 text-[19px] text-muted-foreground max-w-2xl mx-auto leading-snug">
            Founded in 2019 by buy-side operators who believed sophisticated investing
            was trapped behind closed doors. We unbundled it — and rebuilt it on transparent, modern rails.
          </p>
        </section>

        <section className="container-x mt-24 grid md:grid-cols-3 gap-4">
          {values.map((v) => (
            <div key={v.t} className="surface-tile p-8">
              <div className="text-[22px] font-semibold tracking-tight">{v.t}</div>
              <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </section>

        <section className="container-x mt-24">
          <div className="surface-tile p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "$4.2B", l: "Assets allocated" },
              { v: "11.8%", l: "Avg. annual return" },
              { v: "12,400+", l: "Investors served" },
              { v: "27", l: "Countries served" },
            ].map((s) => (
              <div key={s.l}>
                <div className="display-md">{s.v}</div>
                <div className="mt-2 text-[13px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-x mt-32">
          <h2 className="display-md text-center">Operators, not marketers.</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((m) => (
              <div key={m.name} className="surface-tile p-6">
                <div className="aspect-square rounded-xl mb-5 bg-background border border-border/60" />
                <div className="text-[18px] font-semibold tracking-tight">{m.name}</div>
                <div className="text-[12px] text-blue mt-0.5">{m.role}</div>
                <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-x mt-32 mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="display-md">Our story.</h2>
            <div className="mt-8 space-y-5 text-[16px] text-muted-foreground leading-relaxed text-left">
              <p>What started as a frustration — that institutional-grade tools were locked behind seven-figure minimums — became a thesis: investors at every scale deserve the same quality of execution, research, and access.</p>
              <p>Today, Solynvest serves family offices, RIAs, and individual investors across 27 countries. Our team has executed over $4.2B in client capital, with a single guiding principle: align our incentives with yours.</p>
              <p>We are regulated in the United States, the United Kingdom, and the European Union, and we publish our execution quality reports quarterly.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
