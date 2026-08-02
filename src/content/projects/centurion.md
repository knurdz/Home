---
title: "Centurion"
banner: "/images/projects/centurion/mission-log.jpg"
description: "Transparent, auditable platform for allocating industry-sponsored software projects to student teams through structured voting and server-side spin-draw events. Built for FIT Semester Project allocation at University of Moratuwa."
tags: ["Web App", "Education", "Event Platform"]
branch: "main"
commit: "c2d57cb"
---

## Links

- [Live Site](https://centurion.knurdz.org/)
- [GitHub Repository](https://github.com/knurdz/sp-vote-system)

## Overview

**Centurion** (open source as **ProjAlloc** in [knurdz/sp-vote-system](https://github.com/knurdz/sp-vote-system)) is a transparent, fair, and auditable platform for allocating real-world industry software projects to student teams. It replaces spreadsheet-and-email matching with a structured digital workflow: admins publish sponsored projects, team leaders vote, and winners are chosen in live **spin-draw** events with results locked atomically in the database.

The system was built for **AI Batch 24** at the **Faculty of Information Technology, University of Moratuwa**, as part of the Semester Project (SP) module where companies sponsor real software problems and university teams compete to win them.

![Centurion Mission Log — project browse and voting dashboard](/images/projects/centurion/mission-log.jpg)

## The Problem

Every semester, FIT coordinates industry-sponsored projects where student teams apply to work on a company's software problem. Historically, allocation relied on spreadsheets, email threads, and manual matching—opaque, slow, and dispute-prone. Centurion gives every team the same information, timestamped votes, unpredictable server-side winner selection, and a permanent audit trail.

## How It Works

1. **Admins publish projects** with descriptions, tech stacks, team size, and voting deadlines.
2. **Team leaders browse and vote** for at most one project each (withdraw and recast allowed before the deadline).
3. **Voting closes** automatically via `pg_cron` when deadlines pass (with client-side effective-status fallback).
4. **Live spin-draw** — on a Zoom call, admins review candidates and trigger a spin; the animated wheel is visual only.
5. **Results archive** — `lock_spin_result()` picks the winner in PostgreSQL, writes immutable `spin_logs`, assigns the project, and exposes outcomes to everyone.

```text
┌─────────────────────────────┐
│   Admin: projects & teams   │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│   Voting phase (leaders)    │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│   Spin draw (server-side)   │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│   Results archive (public)  │
└─────────────────────────────┘
```

## Key Features

- **Structured voting** with one vote per team, enforced by database constraints and RLS while projects are in `voting` status.
- **Live spin events** with Framer Motion wheel UI; winner selection runs in `lock_spin_result()` using `ORDER BY gen_random_uuid()` inside a single transaction.
- **Immutable audit log** — `spin_logs` stores all candidates (JSONB) and the winner with no UPDATE/DELETE policies.
- **Role-based access** — `admin`, `leader`, and `viewer` assigned on first Google sign-in via a database trigger (never set from the frontend).
- **Admin panel** — project and team CRUD, CSV team import, dashboard stats, and spin trigger pages.
- **Public transparency** — anonymous users can browse projects and archived results; vote counts exposed via secured RPC where configured.
- **Leader workspace** — personal view for assigned project context after allocation.

## Fairness Guarantees

| Property | Mechanism |
|---|---|
| Randomness | Postgres `gen_random_uuid()` ordering for winner selection |
| Atomicity | Full spin outcome in one SQL transaction |
| Idempotency | Second spin attempt raises “result already recorded” |
| No client tampering | Winner chosen in the database, not in JavaScript |
| Race safety | `FOR UPDATE` locks on project and spin event rows |
| Timely close | `pg_cron` closes voting when deadlines pass |

## Security Model

Row Level Security is enabled on every table with deny-by-default policies. Admins are seeded via `admin_emails`; leaders match `teams.leader_email`. Only `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` reach the browser—the anon key is constrained entirely by RLS. Admin routes re-fetch profile role from Supabase on navigation rather than trusting cached client state.

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, TypeScript |
| Styling | Tailwind CSS, custom design tokens |
| Animation | Framer Motion (spin wheel) |
| Backend | Supabase (PostgreSQL 15) |
| Auth | Supabase Auth — Google OAuth 2.0 |
| State | Zustand (auth) |
| Hosting | Vercel (frontend) + Supabase Cloud |
| Updates | 15-second polling (no WebSocket subscriptions) |

## Status

Live at [centurion.knurdz.org](https://centurion.knurdz.org/). Source on [GitHub](https://github.com/knurdz/sp-vote-system) at commit `c2d57cb` on `main`. The repository includes full Supabase migrations, RLS policies, cron jobs, and setup documentation for other departments or batches.

---
