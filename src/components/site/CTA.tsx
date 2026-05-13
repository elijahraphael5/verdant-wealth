import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="surface-tile px-6 py-20 sm:py-28 text-center">
          <h2 className="display-lg max-w-[20ch] mx-auto">
            Your capital deserves better infrastructure.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-[17px] text-muted-foreground">
            Model your returns or speak with an advisor. No pressure, no jargon.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[15px]">
            <Link
              to="/calculator"
              className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 font-medium hover:opacity-90 transition"
            >
              Try the calculator
            </Link>
            <Link to="/contact" className="pill-link">
              Talk to an advisor <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
