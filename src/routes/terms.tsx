import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Solynvest" },
      { name: "description", content: "Terms of service governing your use of Solynvest's website, platform, and investment services." },
      { property: "og:title", content: "Terms of Service — Solynvest" },
      { property: "og:description", content: "The terms governing use of Solynvest." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Legal · Terms"
      title={<>Terms of <span className="italic text-gradient-lemon">service</span>.</>}
      lead="Effective May 1, 2026."
    >
      <Prose sections={[
        { h: "1. Acceptance of terms", p: "By accessing or using the Solynvest website, mobile application, or any of our services (collectively, the 'Services'), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Services." },
        { h: "2. Eligibility", p: "You must be at least 18 years of age and legally capable of entering binding contracts in your jurisdiction to use the Services. Certain Services may have additional eligibility requirements, including jurisdictional restrictions and accredited investor status." },
        { h: "3. Account registration", p: "You agree to provide accurate, current, and complete information during registration and to keep that information up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account." },
        { h: "4. Investment services", p: "Investment Services are provided by Solynvest, Inc. and its regulated affiliates. All investments are subject to the applicable account agreement, disclosures, and risk warnings, which form part of these Terms." },
        { h: "5. Limitation of liability", p: "To the fullest extent permitted by law, Solynvest shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the Services. Nothing in these Terms excludes liability that cannot lawfully be excluded." },
        { h: "6. Governing law", p: "These Terms are governed by the laws of the State of New York, without regard to conflict-of-law principles. Disputes will be resolved exclusively in the state and federal courts of New York County, New York." },
      ]} />
    </PageShell>
  ),
});
