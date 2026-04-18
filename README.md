# TRECC

<p>
  <a href="https://trecc.finance/" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#000000;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;">
    Visit TRECC
  </a>
</p>

## The Idea

TRECC is an institutional grade DeFi credit and liquidity protocol built for the machine economy.

It helps capital providers deploy liquidity to verified autonomous systems through programmable risk controls, reputation, and on-chain accountability.

## The Problem

As AI agents become more capable, they will need capital to transact, operate, trade, and execute economic tasks on-chain.

Today, that capital layer is missing.

- Traditional credit infrastructure is not designed for autonomous agents.
- Most DeFi lending is overcollateralized and does not reflect agent reputation or operating history.
- There is no strong trust layer connecting capital with verified machine participants.

## The Solution

TRECC creates the credit layer for autonomous systems.

It combines identity, verification, reputation, and liquidity into one protocol so capital can move toward reliable machine actors with clearer guardrails.

## How TRECC Works

1. An operator onboards and registers a verified autonomous system.
2. The system builds an on-chain identity and reputation profile.
3. Liquidity providers deposit capital into the protocol.
4. TRECC uses programmable rules and risk parameters to connect capital with eligible borrowers.
5. Repayment behavior strengthens reputation and improves future access to credit.

## Why It Matters

- Unlocks a native credit market for AI agents and autonomous systems.
- Gives capital providers structured exposure to the machine economy.
- Brings transparent, programmable risk management to agent finance.
- Creates a bridge between institutional-grade capital formation and on-chain execution.

## Core Differentiators

- Verified participant onboarding
- Reputation-aware credit infrastructure
- Programmable risk guardrails
- DeFi-native liquidity coordination
- Built for the emerging machine economy from day one

## Who It Serves

- Capital providers looking for new on-chain yield and credit markets
- Protocols and ecosystems enabling autonomous agents
- Operators running verified AI or machine-driven systems
- Investors tracking foundational infrastructure for agentic commerce

## Vision

TRECC aims to become the financial coordination layer for autonomous economic actors.

Just as fintech modernized access to human financial services, TRECC is designed to power capital access for machine participants in a transparent, programmable, and scalable way.

## Why Now

The rise of autonomous agents, on-chain automation, and machine-to-machine commerce is creating a new class of economic participant.

Those participants will need more than wallets and execution. They will need credit, liquidity, and reputation infrastructure.

TRECC is building that layer.

## Website

Explore the product at [trecc.finance](https://trecc.finance/).

## Waitlist Data Setup

The waitlist form now collects both `name` and `email`, saves each signup to Supabase, and still sends the EmailJS welcome email.

Add these environment variables in `trecc-app/.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_WAITLIST_TEMPLATE_ID=your_waitlist_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Create this table in Supabase SQL Editor:

```sql
create table if not exists public.waitlist_signups (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null unique,
  agreed_to_updates boolean not null default false,
  source text not null check (source in ('footer', 'modal')),
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

create policy "Allow public waitlist inserts"
on public.waitlist_signups
for insert
to anon
with check (true);

create policy "Allow public waitlist updates by email"
on public.waitlist_signups
for update
to anon
using (true)
with check (true);
```

The frontend writes to `public.waitlist_signups` through the Supabase REST API, so you can view all registered names and emails directly in your Supabase dashboard.
