---
title: "The Defense Panel"
banner: "/images/projects/defense-panel/banner.png"
description: "Live AI panel simulation with document-aware follow-ups, pressure-testing for startup pitches, academic vivas, and technical interviews."
tags: ["Web App", "AI", "Education"]
branch: "main"
commit: "e9a2b14"
---

## Links

- [Live Demo](https://defense-panel-two.vercel.app/)

## Overview

The Defense Panel is an AI-powered simulation platform for high-stakes presentations. Practice defending your startup pitch, academic thesis, or technical interview answers against a live panel of AI panelists that ask sharp follow-ups, interrupt unclear answers, and keep the pressure on, like a real panel.

## The Problem

Presenting to investors, examiners, or interview panels is high-stakes and hard to rehearse. Friends and colleagues rarely push back hard enough. The Defense Panel provides realistic, document-grounded pressure testing with actionable feedback before the real meeting.

## Key Features

- **Live AI panelists**: Beyond Presence avatars ask sharp follow-ups, interrupt unclear answers, and maintain panel pressure throughout the session.
- **Document-aware**: Upload your deck, thesis, or CV so the simulation is grounded in your actual materials, not generic prompts.
- **Instant debrief**: Scores, filler word analysis, and constructive feedback you can use before the real meeting.

## Simulation Modes

| Mode | Description |
|---|---|
| Startup Pitch | Upload your deck and defend it against a skeptical investor panel. |
| Academic Viva | Walk through your thesis with examiner-style follow-ups and scoring. |
| Technical Interview | Whiteboard-style depth checks for staff-level and senior IC roles. |

## Technical Architecture

The Defense Panel combines a web client with AI orchestration and avatar-driven panel interactions. Uploaded documents are parsed and injected into session context so panelists reference your real materials.

```text
┌──────────────────────────────┐
│      Web Client (Vercel)     │
│  Upload · Session · Debrief  │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│     AI Panel Orchestration   │
│  Context · Follow-ups · Score│
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│   Beyond Presence Avatars    │
│   Live panelist interaction  │
└──────────────────────────────┘
```

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js / React |
| Deployment | Vercel |
| AI | LLM-powered panel logic |
| Avatars | Beyond Presence |
| Documents | Deck, thesis, CV ingestion |

## Status

Live demo deployed on Vercel at [defense-panel-two.vercel.app](https://defense-panel-two.vercel.app/).

---
