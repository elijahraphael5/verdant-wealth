import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { Trust } from "@/components/site/Trust";
import { Insights } from "@/components/site/Insights";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Pillars />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
