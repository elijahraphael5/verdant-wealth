import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Solynvest" },
      { name: "description", content: "How Solynvest collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Solynvest" },
      { property: "og:description", content: "How we collect and protect your data." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Legal · Privacy"
      title={<>Privacy <span className="italic text-gradient-lemon">policy</span>.</>}
      lead="We take privacy seriously. This policy explains what we collect, why, and your rights."
    >
      <Prose sections={[
        { h: "Information we collect", p: "We collect information you provide directly (such as name, email, government ID for KYC, and financial information), information collected automatically (device, IP address, usage data), and information from third parties (custodians, identity verification providers, and credit bureaus)." },
        { h: "How we use information", p: "We use your information to provide and improve the Services, comply with legal and regulatory obligations (including KYC and AML), prevent fraud, communicate with you, and personalise your experience. We do not sell your personal data." },
        { h: "Sharing", p: "We share information with regulated affiliates, custodians, executing brokers, service providers under contract, and authorities when required by law. All third parties are bound by confidentiality and data protection obligations." },
        { h: "Security", p: "We employ encryption in transit and at rest, hardware-backed key management, role-based access controls, and continuous monitoring. We are ISO 27001 certified and undergo annual SOC 2 Type II audits." },
        { h: "Your rights", p: "Depending on your jurisdiction, you may have rights to access, correct, delete, or port your data, and to object to or restrict processing. Contact privacy@verdant.capital to exercise these rights. We aim to respond within 30 days." },
        { h: "Contact", p: "Data Protection Officer\nSolynvest, Inc.\n48 Wall Street, 22nd Floor\nNew York, NY 10005\nprivacy@verdant.capital" },
      ]} />
    </PageShell>
  ),
});
