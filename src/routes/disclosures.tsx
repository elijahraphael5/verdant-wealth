import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Prose } from "@/components/site/PageShell";

export const Route = createFileRoute("/disclosures")({
  head: () => ({
    meta: [
      { title: "Disclosures — Solynvest" },
      { name: "description", content: "Regulatory disclosures, risk warnings, and conflict-of-interest policies for Solynvest." },
      { property: "og:title", content: "Disclosures — Solynvest" },
      { property: "og:description", content: "Regulatory & risk disclosures." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Legal · Disclosures"
      title={<>Regulatory <span className="italic text-gradient-lemon">disclosures</span>.</>}
      lead="Last updated: May 2026."
    >
      <Prose sections={[
        { h: "General risk warning", p: "All investments involve risk, including the possible loss of principal. Past performance is not indicative of future results. The value of investments can go down as well as up. You should carefully consider whether any product or strategy is appropriate for your individual circumstances." },
        { h: "Forex risk", p: "Trading foreign exchange and CFDs carries a high level of risk and may not be suitable for all investors. Leverage can work against you as well as for you. Before deciding to trade FX, you should carefully consider your investment objectives, level of experience, and risk appetite." },
        { h: "Fixed income risk", p: "Bond prices are subject to interest rate risk, credit risk, and liquidity risk. Yields shown are indicative and subject to change. Investment-grade ratings reflect the opinion of credit rating agencies and are not guarantees." },
        { h: "Conflicts of interest", p: "Solynvest and its affiliates may, from time to time, have positions in instruments mentioned. We maintain written policies to identify, manage, and disclose conflicts of interest. A full copy of our conflicts policy is available on request." },
        { h: "Regulation", p: "Solynvest, Inc. is registered with the U.S. Securities and Exchange Commission (SEC) and is a member of FINRA and SIPC. Solynvest UK Ltd is authorised and regulated by the Financial Conduct Authority (FCA). Solynvest EU is regulated by BaFin." },
      ]} />
    </PageShell>
  ),
});
