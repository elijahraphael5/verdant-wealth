import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance — Verdant Capital" },
      { name: "description", content: "Verdant Capital's regulatory licences, compliance programme, and AML/KYC policies." },
      { property: "og:title", content: "Compliance — Verdant" },
      { property: "og:description", content: "Our regulatory and compliance posture." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Legal · Compliance"
      title={<>Compliance & <span className="italic text-gradient-lemon">regulation</span>.</>}
      lead="Verdant Capital operates under regulated entities in the United States, United Kingdom, and European Union."
    >
      <Prose sections={[
        { h: "Licences & registrations", p: "Verdant Capital, Inc. — SEC Registered Investment Adviser (CRD #312478), FINRA member, SIPC member.\nVerdant Capital UK Ltd — Authorised and regulated by the Financial Conduct Authority (FRN 924818).\nVerdant Capital EU GmbH — Regulated by BaFin (Reg. 154-789-22)." },
        { h: "Anti-Money Laundering (AML)", p: "We maintain a comprehensive AML programme that includes customer identification (KYC), enhanced due diligence for high-risk clients, ongoing transaction monitoring, sanctions screening (OFAC, UN, EU, HMT), and prompt filing of suspicious activity reports as required by law." },
        { h: "Best execution", p: "We are committed to obtaining the best possible result for our clients, taking into account price, costs, speed, likelihood of execution, and settlement. We publish quarterly execution quality reports in line with regulatory requirements." },
        { h: "Client asset protection", p: "Client funds are held with regulated custodian banks, segregated from Verdant's own assets. U.S. brokerage accounts are protected by SIPC up to $500,000 (including $250,000 cash). Additional excess-of-SIPC coverage is provided through Lloyd's of London." },
        { h: "Whistleblower & ethics", p: "We maintain confidential reporting channels for staff and clients to report suspected misconduct. Reports may be made via ethics@verdant.capital and are reviewed by an independent committee." },
      ]} />
    </PageShell>
  ),
});
