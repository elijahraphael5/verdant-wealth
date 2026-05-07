export function Trust() {
  return (
    <section className="py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by family offices, RIAs & sophisticated investors worldwide
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
          {["MERIDIAN", "ARCADIA", "NORTHSTAR", "OAKWOOD", "BLACKPINE", "VANGUARD·X"].map((b) => (
            <div key={b} className="text-center font-display text-xl tracking-widest text-muted-foreground hover:text-foreground transition">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
