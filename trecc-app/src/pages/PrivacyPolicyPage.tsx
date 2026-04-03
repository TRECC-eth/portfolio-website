import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const LAST_UPDATED = "April 3, 2025";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `TRECC Labs, Inc. ("TRECC", "we", "our", or "us") operates a non-custodial, decentralised lending protocol that enables autonomous AI agents to access undercollateralised USDC credit lines against on-chain reputation and operator-posted ETH bonds. This Privacy Policy explains what information we collect when you visit trecc.finance, use the TRECC web application, or interact with our smart contracts, and how we use, share, and protect that information.

By accessing the TRECC protocol or website you agree to the practices described below. If you do not agree, please discontinue use.`,
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    subsections: [
      {
        label: "On-chain data",
        text: "The TRECC protocol is built on public blockchains (Ethereum Sepolia and Base Sepolia). All interactions — vault deposits, bond stakes, loan issuances, repayments, and liquidations — are recorded on-chain and are publicly visible by design. We do not control and cannot delete this data.",
      },
      {
        label: "Wallet addresses",
        text: "When you connect a wallet to the TRECC application, we read your public wallet address to display balances, identity NFTs, and credit scores. We do not receive your private keys at any point.",
      },
      {
        label: "ENS subnames",
        text: "If you register a .trecc.eth subname, the chosen label and linked address are stored in the ENS NameWrapper contract on Ethereum. This data is public.",
      },
      {
        label: "Usage analytics",
        text: "We may collect anonymised, aggregated metrics (page views, feature usage, session duration) using privacy-first analytics tools. No personally identifiable information is attached to these events.",
      },
      {
        label: "Contact form submissions",
        text: "If you submit our contact form, we receive your name, email address, and message via EmailJS. This data is used solely to respond to your inquiry and is not sold or shared with third parties.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
    items: [
      "Operate and improve the TRECC protocol and web application.",
      "Verify agent identity, reputation score, and EIP-712 KYC signatures required for loan issuance.",
      "Detect and prevent fraud, abuse, or protocol misuse.",
      "Respond to support requests and contact form inquiries.",
      "Comply with applicable legal obligations.",
      "Produce anonymised usage reports to guide product development.",
    ],
  },
  {
    id: "smart-contracts",
    title: "Smart Contracts & On-Chain Activity",
    content: `TRECC is a protocol, not a bank. The core credit logic runs inside audited smart contracts deployed on Ethereum Sepolia (identity, reputation, and KYC registries) and Base Sepolia (TRECVault lending pool). Interactions with these contracts are irreversible once confirmed and permanently visible on their respective chains.

Soulbound NFTs (ERC-8004 / ERC-721 with transfer disabled) issued by TRECIdentityRegistry are tied to an operator address and cannot be transferred. Credit scores stored in TRECReputationRegistry increase by +1 per successful repayment and decrease by −50 per liquidation event.

We have no ability to reverse on-chain transactions, delete soulbound NFTs, or alter credit scores without an on-chain governance action.`,
  },
  {
    id: "sharing",
    title: "Information Sharing",
    content: `We do not sell, rent, or trade your personal information. We may share data only in the following limited circumstances:`,
    items: [
      "Service providers — infrastructure, hosting, and analytics vendors acting under confidentiality agreements.",
      "Legal compliance — if required by a court order, subpoena, or applicable law.",
      "Protocol security — aggregated, anonymised threat intelligence shared with blockchain security researchers to protect the ecosystem.",
      "Business transfers — in the event of a merger or acquisition, user data may transfer to the successor entity under the same privacy protections.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Local Storage",
    content: `We use minimal browser storage to remember UI preferences (e.g. wallet connection state, theme). We do not use third-party advertising cookies or cross-site tracking technologies. You can clear this data at any time through your browser settings without affecting your on-chain assets.`,
  },
  {
    id: "security",
    title: "Security",
    content: `We apply industry-standard security practices including HTTPS, smart contract audits, and EIP-712 typed-data signing for off-chain KYC verification. However, no system is perfectly secure. Blockchain-based systems carry inherent risks including smart contract bugs, key compromise, and network-level attacks. You are responsible for safeguarding your private keys and wallet credentials.`,
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: `The TRECC application integrates with the following third-party services, each governed by their own privacy policies:`,
    items: [
      "Reown / WalletConnect — wallet connection infrastructure.",
      "Coinbase (CDP) — agent execution wallets and vault infrastructure.",
      "ENS (Ethereum Name Service) — subname registration.",
      "EmailJS — contact form message delivery.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `Depending on your jurisdiction you may have rights to access, correct, or delete personal data we hold about you. Because most protocol-critical data lives on public blockchains, we cannot modify or erase it. For off-chain data (contact form submissions, analytics), you may contact us at trecclabs@gmail.com to exercise these rights.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Material changes will be announced via our official channels (X / Twitter @trecc_eth, Telegram, and this page). Continued use of the protocol after an update constitutes acceptance of the revised policy. The "Last updated" date at the top of this page always reflects the most recent revision.`,
  },
  {
    id: "contact",
    title: "Contact",
    content: `For privacy-related questions or data requests, reach us at trecclabs@gmail.com or through the contact form at trecc.finance/contact.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-[#030303] text-white font-sans relative overflow-x-hidden">
      <Navbar isLightMode={false} />

      <main className="relative z-10 min-h-screen px-6 pt-32 pb-24">
        <div className="w-full max-w-3xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <div className="inline-block px-3 py-1 mb-5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#8A8D93] uppercase tracking-widest">
              Legal
            </div>
            <h1 className="text-chrome font-medium tracking-tight leading-tight mb-4 text-4xl sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-[#8A8D93] text-sm font-mono">
              Last updated: {LAST_UPDATED}
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hyper-card p-6 mb-10"
          >
            <p className="text-xs text-[#8A8D93] font-semibold uppercase tracking-widest mb-4">Contents</p>
            <ol className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-center gap-3 text-sm text-[#606468] hover:text-[#d7d7b6] transition-colors duration-200 group"
                  >
                    <span className="font-mono text-[10px] text-white/20 group-hover:text-[#d7d7b6]/40 w-4 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="hyper-card p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-mono text-[10px] text-white/20 mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-white font-semibold text-base tracking-tight">{s.title}</h2>
                </div>

                <div className="pl-8 space-y-4">
                  {s.content && (
                    <p className="text-[#8A8D93] text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
                  )}

                  {s.subsections && (
                    <div className="space-y-3">
                      {s.subsections.map((sub) => (
                        <div key={sub.label} className="border-l border-white/[0.06] pl-4">
                          <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-1">{sub.label}</p>
                          <p className="text-[#8A8D93] text-sm leading-relaxed">{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.items && (
                    <ul className="space-y-2">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-[#8A8D93] leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-[#606468] hover:text-white transition-colors duration-200 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </Link>
          </motion.div>
        </div>
      </main>

      <div className="relative z-10 border-t border-white/5 py-5 px-6 text-center">
        <p className="text-xs text-[#50545a]">© {new Date().getFullYear()} TRECC Labs, Inc.</p>
      </div>
    </div>
  );
}
