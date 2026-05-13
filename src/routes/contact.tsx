import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Solynvest — Talk to an advisor" },
      { name: "description", content: "Reach the Solynvest team. Schedule a call with an advisor or send us a message about capital allocation, FX, or fixed income strategies." },
      { property: "og:title", content: "Contact Solynvest" },
      { property: "og:description", content: "Talk to our investment advisors today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent. We'll respond within 1 business day.");
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Toaster />
      <main className="flex-1 pt-32 pb-24">
        <section className="container-x text-center">
          <p className="text-[13px] text-blue tracking-wide">Contact</p>
          <h1 className="mt-3 display-lg max-w-[20ch] mx-auto">Let's talk about your capital.</h1>
          <p className="mt-5 text-[18px] text-muted-foreground max-w-xl mx-auto">
            From a first $25k to an eight-figure portfolio — our advisors respond within one business day.
          </p>
        </section>

        <section className="container-x mt-16 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 surface-tile p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name" name="first" required />
                <Field label="Last name" name="last" required />
              </div>
              <Field type="email" label="Work email" name="email" required />
              <Field label="Company (optional)" name="company" />
              <div>
                <label className="text-[12px] text-muted-foreground">I'm interested in</label>
                <select required name="interest" className="mt-1.5 w-full bg-background border border-border rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue">
                  <option>Capital investment</option>
                  <option>Forex trading</option>
                  <option>Fixed income</option>
                  <option>All of the above</option>
                </select>
              </div>
              <div>
                <label className="text-[12px] text-muted-foreground">Message</label>
                <textarea required name="message" rows={5} className="mt-1.5 w-full bg-background border border-border rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue resize-none" placeholder="Tell us about your goals…" />
              </div>
              <button disabled={sending} className="w-full rounded-full bg-foreground text-background py-3 text-[15px] font-medium hover:opacity-90 transition disabled:opacity-60">
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-3">
            <InfoCard title="Email" lines={["advisors@solynvest.com", "Reply within 1 business day"]} />
            <InfoCard title="Phone" lines={["+1 (212) 555-0142", "Mon–Fri · 8am–7pm ET"]} />
            <InfoCard title="Headquarters" lines={["48 Wall Street, 22nd Floor", "New York, NY 10005"]} />
            <InfoCard title="Regulatory" lines={["SEC · FINRA · FCA · BaFin", "Member SIPC · ISO 27001"]} />
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, type = "text", name, required }: { label: string; type?: string; name: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[12px] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full bg-background border border-border rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue"
      />
    </div>
  );
}

function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="surface-tile p-6">
      <div className="text-[12px] text-blue">{title}</div>
      <div className="mt-1.5 space-y-0.5">
        {lines.map((l, i) => (
          <div key={i} className={i === 0 ? "text-[17px] font-medium tracking-tight" : "text-[13px] text-muted-foreground"}>{l}</div>
        ))}
      </div>
    </div>
  );
}
