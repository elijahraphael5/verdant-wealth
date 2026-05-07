import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Investment Calculator — Verdant Capital" },
      { name: "description", content: "Project your portfolio's growth across capital, forex, and fixed income with Verdant's interactive investment calculator." },
      { property: "og:title", content: "Investment Calculator — Verdant Capital" },
      { property: "og:description", content: "Model returns with monthly contributions and compounding." },
    ],
  }),
  component: CalculatorPage,
});

const presets = [
  { id: "capital", label: "Capital Investment", rate: 12, desc: "Diversified equity & private capital" },
  { id: "forex", label: "Forex Trading", rate: 18, desc: "Higher risk, higher target return" },
  { id: "fixed", label: "Fixed Income", rate: 6.4, desc: "Bond ladders & treasuries" },
];

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function CalculatorPage() {
  const [initial, setInitial] = useState(25000);
  const [monthly, setMonthly] = useState(1000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const projection = useMemo(() => {
    const months = years * 12;
    const r = rate / 100 / 12;
    const points: { year: number; balance: number; contributions: number }[] = [];
    let balance = initial;
    let contributions = initial;
    for (let m = 1; m <= months; m++) {
      balance = balance * (1 + r) + monthly;
      contributions += monthly;
      if (m % 12 === 0) points.push({ year: m / 12, balance, contributions });
    }
    return { points, final: balance, contributions };
  }, [initial, monthly, years, rate]);

  const interest = projection.final - projection.contributions;
  const max = projection.points.at(-1)?.balance ?? 1;

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-lemon">Investment Calculator</div>
          <h1 className="mt-4 text-5xl sm:text-7xl leading-[1.05]">
            Model your <span className="italic text-gradient-lemon">compounding</span> future.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Adjust your initial deposit, monthly contributions, time horizon, and target return.
            Built on standard monthly compounding — illustrative, not advice.
          </p>

          <div className="mt-14 grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 glass rounded-3xl p-8 space-y-7">
              <Slider label="Initial investment" value={initial} setValue={setInitial} min={0} max={500000} step={500} format={fmt} />
              <Slider label="Monthly contribution" value={monthly} setValue={setMonthly} min={0} max={20000} step={50} format={fmt} />
              <Slider label="Time horizon" value={years} setValue={setYears} min={1} max={40} step={1} format={(v) => `${v} years`} />
              <Slider label="Target annual return" value={rate} setValue={setRate} min={1} max={25} step={0.1} format={(v) => `${v.toFixed(1)}%`} />

              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Quick presets</div>
                <div className="grid grid-cols-3 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setRate(p.rate)}
                      className={`text-left rounded-xl p-3 border transition text-xs ${rate === p.rate ? "border-lemon bg-[oklch(0.92_0.22_125)/0.1]" : "border-border bg-card/40 hover:bg-card/70"}`}
                    >
                      <div className="font-medium">{p.label}</div>
                      <div className="text-muted-foreground mt-0.5">{p.rate}%</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="glass rounded-3xl p-8 ring-lemon">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Projected balance after {years} years</div>
                <div className="font-display text-6xl sm:text-7xl text-gradient-lemon mt-2">{fmt(projection.final)}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs rounded-full bg-[oklch(0.92_0.22_125)/0.15] text-lemon px-3 py-1">
                  +{fmt(interest)} in compounded growth
                </div>

                <div className="mt-8">
                  <svg viewBox="0 0 400 160" className="w-full h-44">
                    <defs>
                      <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.92 0.22 125)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="oklch(0.92 0.22 125)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {(() => {
                      const pts = projection.points;
                      if (!pts.length) return null;
                      const w = 400, h = 150;
                      const path = pts.map((p, i) => {
                        const x = (i / (pts.length - 1 || 1)) * w;
                        const y = h - (p.balance / max) * (h - 10);
                        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                      }).join(" ");
                      const cpath = pts.map((p, i) => {
                        const x = (i / (pts.length - 1 || 1)) * w;
                        const y = h - (p.contributions / max) * (h - 10);
                        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                      }).join(" ");
                      return (
                        <>
                          <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#cg)" />
                          <path d={path} fill="none" stroke="oklch(0.92 0.22 125)" strokeWidth="2" />
                          <path d={cpath} fill="none" stroke="oklch(0.5 0.1 155)" strokeWidth="1.5" strokeDasharray="4 4" />
                        </>
                      );
                    })()}
                  </svg>
                  <div className="flex gap-5 text-xs text-muted-foreground mt-2">
                    <span className="inline-flex items-center gap-1.5"><span className="w-3 h-0.5 bg-lemon" /> Balance</span>
                    <span className="inline-flex items-center gap-1.5"><span className="w-3 h-0.5 border-t border-dashed border-[oklch(0.5_0.1_155)]" /> Contributions only</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Stat label="Total contributions" value={fmt(projection.contributions)} />
                <Stat label="Compounded growth" value={fmt(interest)} />
                <Stat label="Effective multiple" value={`${(projection.final / Math.max(projection.contributions, 1)).toFixed(2)}x`} />
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-muted-foreground max-w-3xl">
            Projections assume monthly compounding at the selected annual rate and are for illustrative purposes only.
            Actual returns will vary and are not guaranteed. Past performance is not indicative of future results.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Slider({ label, value, setValue, min, max, step, format }: {
  label: string; value: number; setValue: (v: number) => void; min: number; max: number; step: number; format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
        <span className="font-display text-xl">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-[oklch(0.92_0.22_125)]"
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-display text-2xl mt-1">{value}</div>
    </div>
  );
}
