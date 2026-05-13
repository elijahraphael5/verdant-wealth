import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Investment Calculator — Solynvest" },
      { name: "description", content: "Project your portfolio's growth across capital, forex, and fixed income with Solynvest's interactive investment calculator." },
      { property: "og:title", content: "Investment Calculator — Solynvest" },
      { property: "og:description", content: "Model returns with monthly contributions and compounding." },
    ],
  }),
  component: CalculatorPage,
});

const presets = [
  { id: "capital", label: "Capital", rate: 12 },
  { id: "forex", label: "Forex", rate: 18 },
  { id: "fixed", label: "Fixed Income", rate: 6.4 },
];

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

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
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-24">
        <section className="container-x text-center">
          <p className="text-[13px] text-blue tracking-wide">Investment Calculator</p>
          <h1 className="mt-3 display-lg max-w-[18ch] mx-auto">Model your compounding future.</h1>
          <p className="mt-5 text-[18px] text-muted-foreground max-w-xl mx-auto">
            Adjust your inputs. Watch the curve. Illustrative, not advice.
          </p>
        </section>

        <section className="container-x mt-16 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 surface-tile p-8 space-y-6">
            <Slider label="Initial investment" value={initial} setValue={setInitial} min={0} max={500000} step={500} format={fmt} />
            <Slider label="Monthly contribution" value={monthly} setValue={setMonthly} min={0} max={20000} step={50} format={fmt} />
            <Slider label="Time horizon" value={years} setValue={setYears} min={1} max={40} step={1} format={(v) => `${v} years`} />
            <Slider label="Annual return" value={rate} setValue={setRate} min={1} max={25} step={0.1} format={(v) => `${v.toFixed(1)}%`} />
            <div>
              <p className="text-[12px] text-muted-foreground mb-2">Quick presets</p>
              <div className="grid grid-cols-3 gap-2">
                {presets.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setRate(p.rate)}
                    className={`rounded-xl px-3 py-2.5 text-[13px] border transition ${
                      rate === p.rate
                        ? "border-foreground bg-background"
                        : "border-transparent bg-background hover:border-border"
                    }`}
                  >
                    <div className="font-medium">{p.label}</div>
                    <div className="text-muted-foreground text-[11px]">{p.rate}%</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="surface-tile p-8">
              <p className="text-[12px] text-muted-foreground">Projected balance after {years} years</p>
              <p className="display-lg mt-2">{fmt(projection.final)}</p>
              <p className="mt-2 text-[14px] text-blue">+{fmt(interest)} compounded growth</p>

              <svg viewBox="0 0 400 160" className="mt-6 w-full h-44">
                <defs>
                  <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.62 0.19 254)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="oklch(0.62 0.19 254)" stopOpacity="0" />
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
                      <path d={path} fill="none" stroke="oklch(0.62 0.19 254)" strokeWidth="1.75" />
                      <path d={cpath} fill="none" stroke="oklch(0.7 0 0)" strokeWidth="1.25" strokeDasharray="4 4" />
                    </>
                  );
                })()}
              </svg>
              <div className="flex gap-5 text-[12px] text-muted-foreground mt-2">
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-0.5 bg-blue" /> Balance</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-0.5 border-t border-dashed border-foreground/40" /> Contributions only</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Stat label="Contributions" value={fmt(projection.contributions)} />
              <Stat label="Growth" value={fmt(interest)} />
              <Stat label="Multiple" value={`${(projection.final / Math.max(projection.contributions, 1)).toFixed(2)}x`} />
            </div>
          </div>
        </section>

        <p className="container-x mt-10 text-[12px] text-muted-foreground">
          Projections assume monthly compounding at the selected annual rate and are illustrative only. Actual returns vary.
        </p>
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
        <label className="text-[12px] text-muted-foreground">{label}</label>
        <span className="text-[17px] font-medium">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-foreground"
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="surface-tile p-5">
      <div className="text-[12px] text-muted-foreground">{label}</div>
      <div className="text-[20px] font-semibold mt-1 tracking-tight">{value}</div>
    </div>
  );
}
