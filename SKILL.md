# TRECC Messaging Skill

## Purpose

Use this file as context when asking an AI model to write about TRECC.

This skill teaches the model:

- what TRECC is
- what problem it solves
- how the protocol works at a high level
- who it is for
- what language to use when writing outreach, partnership, investor, or DevRel messages
- how to ask someone for a call in a clear, credible, non-spammy way

If any repo details and this file ever conflict, treat the project README as the source of truth.

---

## Project Summary

TRECC is building the credit layer for machine economies.

More specifically, TRECC is a decentralized lending and liquidity protocol designed for autonomous AI agents and other machine-driven systems. It aims to connect capital providers with verified AI borrowers using on-chain identity, reputation, compliance verification, and controlled execution environments.

The core idea is that autonomous systems will need access to capital to transact, operate, trade, and execute economic tasks on-chain. Existing DeFi lending models are mostly overcollateralized and not designed for machine participants. TRECC is building infrastructure that lets capital flow toward verified and reputation-aware autonomous actors with stronger guardrails.

---

## One-Line Positioning

TRECC is the credit and liquidity layer for autonomous AI agents.

## Short Elevator Pitch

TRECC is a DeFi credit protocol for the machine economy. It helps verified AI agents and autonomous systems access liquidity through on-chain identity, reputation, verification, and programmable risk controls, instead of relying only on overcollateralization.

## Slightly Longer Pitch

TRECC is building trustless credit infrastructure for autonomous systems. The protocol connects lenders with verified AI agents through a combination of soulbound identity, on-chain credit scoring, cryptographic KYC, and execution containment. The goal is to make machine-native lending safer, more transparent, and more programmable than traditional lending models or generic DeFi credit rails.

---

## The Problem TRECC Solves

TRECC exists because machine participants are emerging, but the capital layer for them does not yet exist in a strong form.

Key problems:

- autonomous AI agents need capital to do useful work on-chain
- traditional credit systems are not built for machine actors
- most DeFi lending depends on overcollateralization rather than behavior or verified reputation
- there is no strong trust layer connecting capital providers to autonomous borrowers
- lenders need guardrails, visibility, and accountability before funding machine-driven activity

---

## The TRECC Solution

TRECC combines four major elements into one protocol:

1. Identity
   Agents receive an on-chain identity, including a soulbound NFT-based registry entry and a human-readable ENS-linked presence.

2. Verification
   Agents can be cryptographically verified through an EIP-712 signature-based validation flow tied to KYC or compliance checks.

3. Reputation
   Agents build a protocol-native credit history based on borrowing, repayment, and liquidation events.

4. Liquidity
   Capital providers deposit USDC into the protocol, and TRECC provisions liquidity to eligible verified agents under protocol rules.

Together, these components create a machine-native credit system with more accountability than anonymous lending and more capital efficiency potential than pure overcollateralization.

---

## How TRECC Works

High-level flow:

1. A capital provider deposits USDC into the TRECC vault.
2. An app user or operator registers and manages an autonomous agent.
3. The agent gets an identity and reputation profile.
4. The agent or operator completes validation / KYC verification.
5. The user initializes a contained execution environment.
6. TRECC provisions liquidity to the verified agent under protocol rules.
7. The agent uses the capital inside a controlled environment.
8. The agent repays principal and yield.
9. Repayment improves its on-chain reputation; liquidation hurts it.

---

## Core Product Concepts

### 1. AI Agent Lending

TRECC is built around the idea that AI agents can become borrowers if they are verifiable, accountable, and monitored through deterministic or constrained execution paths.

### 2. Soulbound Identity

TRECC uses non-transferable identity primitives for agents. This matters because reputation should stay attached to the original agent identity instead of being tradable.

### 3. On-Chain Credit Scoring

TRECC tracks repayment behavior and liquidation history to create a machine-native reputation layer. In the provided architecture:

- repayment increases score
- liquidation sharply decreases score

This gives the protocol a basis for reputation-aware credit decisions.

### 4. Cryptographic Verification

TRECC uses EIP-712 typed data signatures to support verification and compliance workflows. This enables off-chain checks with on-chain attestability.

### 5. Execution Containment

Capital is not meant to be handed to agents blindly. TRECC emphasizes secure or monitored execution environments so lenders have stronger protection and the protocol has enforceable guardrails around agent behavior.

### 6. Intent-Based UX

TRECC envisions a natural-language interface layer where users interact with an AI copilot and the system translates intent into protocol actions.

---

## Target Users

TRECC is relevant to:

- capital providers seeking yield opportunities tied to the machine economy
- operators of autonomous agents
- AI agent infrastructure teams
- DeFi users interested in reputation-based lending models
- ecosystems exploring agent commerce and machine-to-machine finance
- investors and partners tracking infrastructure for autonomous economic actors

---

## Why TRECC Matters

TRECC matters because it is trying to build foundational financial infrastructure for a new class of participant: autonomous systems.

The project’s thesis is that agents will need:

- wallets
- execution
- identity
- reputation
- credit access
- liquidity coordination

TRECC is focused on the credit and liquidity part of that stack.

---

## Architecture Snapshot

From the README, the protocol architecture includes:

- `TRECVault`
  Main lending pool and liquidity management contract

- `TRECIdentityRegistry`
  Soulbound identity registry for agents

- `TRECReputationRegistry`
  Reputation / credit score tracking

- `TRECValidationRegistry`
  Signature-based compliance / KYC verification

- `MockUSDC`
  ERC-20 stablecoin used in testing and protocol flows

The broader system spans frontend app flows, identity registration, compliance verification, liquidity provision, and agent repayment.

---

## Key Messaging Angles

When writing about TRECC, emphasize these themes:

- credit infrastructure for AI agents
- the capital layer for machine economies
- verified autonomous systems, not anonymous bots
- on-chain reputation as a lending primitive
- programmable risk controls for machine borrowers
- institutional-grade or structured access to machine economy exposure
- secure execution and accountability, not blind capital allocation

Good framing words:

- credit layer
- liquidity infrastructure
- verified agents
- reputation-aware lending
- machine economy
- programmable guardrails
- on-chain accountability
- autonomous economic actors

Avoid overclaiming with phrases like:

- guaranteed safe
- risk-free
- fully solved credit for AI
- replacing all banks
- autonomous agents can borrow without constraints

Prefer credible language over hype.

---

## Tone Guide For Outreach

Use a tone that is:

- sharp
- founder-level
- thoughtful
- technically credible
- concise
- curious rather than pushy

Do not sound:

- spammy
- overhyped
- vague
- like a mass cold DM bot

The best outreach messages should sound like:

- "we are building something specific and early"
- "this overlaps with your work or interests"
- "would love to compare notes"

not:

- "please jump on a call ASAP"
- "we are revolutionizing everything"
- "can you give us your time because we are amazing"

---

## How To Ask For A Call

When writing a message that asks for a call, the structure should be:

1. Open with a real reason for reaching out
2. Mention the overlap between TRECC and the recipient’s domain
3. Explain TRECC in one or two clear sentences
4. State why the conversation would be useful
5. Ask for a short call with a low-friction CTA

Best practices:

- ask for 15 to 20 minutes, not a vague "call sometime"
- make the ask easy to decline
- make the message useful even if they do not reply
- show you understand their area
- keep the focus on shared context, not just your pitch

Example call asks:

- "Would you be open to a 15-minute call next week to compare notes?"
- "If this is relevant to what you're exploring, I'd love to grab 20 minutes and share what we're building."
- "Happy to send more context here, but if easier, would you be open to a short call next week?"

---

## DevRel Message Writing Rules

If the user asks for a DevRel-style message, write as someone who:

- understands developer ecosystems
- can explain a technical product simply
- is trying to start a relationship, not force a conversion
- respects the recipient’s time

Message goals can include:

- booking a call
- starting a partnership conversation
- getting feedback from ecosystem teams
- opening investor or ecosystem intros
- inviting someone to try the product

A good DevRel-style message should usually include:

- a personalized opening
- one-line context on TRECC
- one strong reason the recipient should care
- a soft CTA for a call or reply

---

## Prompt Template For ChatGPT

Use this template when you want another AI model to write a message using this skill:

```text
You are helping me write outreach for TRECC.

Use the following project context as source material:
[Paste this SKILL.md here]

Task:
Write a [DM/email/LinkedIn message/Twitter DM] to [who the person is].

Goal:
[book a 15-minute call / introduce TRECC / ask for partnership interest / ask for feedback]

About the recipient:
[what they do, why they are relevant, any recent context]

Tone:
[founder-like / DevRel / warm / concise / technical / investor-facing]

Constraints:
- Keep it under [X] words
- Do not sound spammy
- Make the ask feel natural
- Include a clear reason for the call
```

---

## Example Prompt For Booking A Call

```text
Use the TRECC skill context below to write a concise DevRel-style outreach message.

TRECC is building the credit layer for machine economies: a DeFi protocol that helps verified AI agents access liquidity using on-chain identity, reputation, compliance verification, and programmable risk controls.

Write a short message to a DevRel lead at an AI agent infrastructure company.

Goal: ask for a 15-minute call next week.

Requirements:
- Keep it under 120 words
- Sound thoughtful and credible
- Do not use hype
- Make clear why TRECC is relevant to them
- End with a soft CTA
```

---

## Example Output Style

Here is the style the model should aim for:

```text
Hey [Name], I’ve been following your work around agent infrastructure and wanted to reach out because we’re building something adjacent at TRECC.

We’re building the credit layer for machine economies: infrastructure that helps verified AI agents access liquidity through on-chain identity, reputation, and programmable risk controls.

Feels like there’s a real overlap with the kinds of agent workflows your team is enabling, and I’d love to compare notes on where capital access for agents could go next.

Would you be open to a quick 15-minute call next week?
```

---

## What The Model Should Understand About TRECC

If a model reads this skill correctly, it should understand that TRECC is not just:

- a generic DeFi lending app
- a simple wallet product
- an AI chatbot
- a random agent tool

It is specifically:

- a credit and liquidity protocol
- designed for autonomous AI agents and machine actors
- built around verification, identity, and reputation
- trying to make agent finance safer and more capital-efficient
- positioned as foundational infrastructure for the machine economy

---

## Safe Assumptions For The Model

The model may safely assume:

- TRECC is early-stage but serious infrastructure
- the project sits at the intersection of DeFi, agentic systems, and identity / reputation
- the right messaging should balance vision with technical credibility
- outreach should optimize for curiosity and relevance, not aggressive selling

The model should not assume:

- that every feature is live in production
- that all networks or deployments are final
- that TRECC guarantees lender safety
- that the recipient already understands agent finance

---

## If Asked To Write About TRECC, Default To This Framing

"TRECC is building the credit layer for machine economies by combining identity, verification, reputation, and liquidity infrastructure for autonomous AI agents."

That sentence is the safest default summary.
