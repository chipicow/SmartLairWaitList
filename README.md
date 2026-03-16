# SmartLair Waitlist

A waitlist landing page with Ember the dragon mascot, smooth scroll, and Supabase integration.

## Features

- **Smooth scroll** from hero CTA to email form
- **Supabase** integration — emails saved to `waitlist` table
- **Ember the dragon** mascot with states: idle (curled), typing (peeking), success (fire sparks)
- **Tailwind CSS** with SmartLair theme colors
- **Validation & error handling** — email format, duplicates, network errors

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. In SQL Editor, run:

```sql
create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamptz default now()
);

alter table waitlist enable row level security;
create policy "Allow anonymous inserts" on waitlist
  for insert to anon with check (true);

-- Function for waitlist count (exposes count only, not emails)
create or replace function get_waitlist_count()
returns bigint
language sql
security definer
stable
as $$
  select count(*)::bigint from waitlist;
$$;
grant execute on function get_waitlist_count() to anon;
```

3. Copy your project URL and anon key from **Settings → API**

### 3. Environment variables

Create `.env` from `.env.example` and fill in:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run

```bash
npm run dev
```

## Build

```bash
npm run build
```
