-- Run this in the Supabase SQL Editor to create the waitlist table.
create table if not exists public.waitlist_signups (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null unique,
  agreed_to_updates boolean not null default false,
  source text not null check (source in ('footer', 'modal')),
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

-- Visitors can only add themselves; they cannot read or change existing signups.
grant insert on public.waitlist_signups to anon;

drop policy if exists "Allow public waitlist inserts" on public.waitlist_signups;
create policy "Allow public waitlist inserts"
on public.waitlist_signups
for insert
to anon
with check (true);
