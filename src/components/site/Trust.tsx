export function Trust() {
  return (
    <section className="py-16 border-t border-border/60">
      <div className="container-x">
        <p className="text-center text-[13px] text-muted-foreground">
          Trusted by family offices, RIAs, and sophisticated investors worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {["MERIDIAN", "ARCADIA", "NORTHSTAR", "OAKWOOD", "BLACKPINE", "VANGUARD·X"].map((b) => (
            <div
              key={b}
              className="text-center text-[13px] tracking-[0.18em] font-medium text-muted-foreground/80"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
