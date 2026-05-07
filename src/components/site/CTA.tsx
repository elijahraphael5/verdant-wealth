export function CTA() {
  return (
    <section id="cta" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-[2rem] overflow-hidden p-12 sm:p-20 text-center"
             style={{ background: "linear-gradient(135deg, oklch(0.92 0.22 125), oklch(0.75 0.18 145))" }}>
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="text-4xl sm:text-6xl text-[oklch(0.18_0.05_155)] leading-tight">
              Your capital deserves <span className="italic">better infrastructure.</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-[oklch(0.18_0.05_155)/0.8]">
              Open an account in under 4 minutes. No minimums to start. Institutional pricing once you scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#" className="rounded-full bg-[oklch(0.18_0.05_155)] text-foreground px-6 py-3 font-medium hover:opacity-90 transition">
                Open an account →
              </a>
              <a href="#" className="rounded-full border border-[oklch(0.18_0.05_155)/0.3] text-[oklch(0.18_0.05_155)] px-6 py-3 font-medium hover:bg-[oklch(0.18_0.05_155)/0.08] transition">
                Talk to an advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
