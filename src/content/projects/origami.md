---
title: "Origami"
description: "Upload a PDF, scan a repo, or paste text — Origami streams an interactive explanation and generates a v0-powered MVP in seconds."
tags: ["Web App", "AI", "Developer Tool"]
branch: "main"
commit: "c4e8a1f"
---

- **Live Demo**: [https://origami.knurdz.org](https://origami.knurdz.org)

## Overview

Origami is the universal interactive engine. Upload a PDF, scan a repository, or paste raw text — Origami breaks it down, streams an interactive explanation, and generates a **v0-powered MVP route** in seconds.

From flat source material to a dimensional, interactive workspace: Origami transforms documents, codebases, and unstructured text into something you can explore, understand, and ship from.

## The Problem

Developers and teams constantly ingest dense documents, sprawling repos, and operational playbooks — but understanding them takes hours of manual reading, diagramming, and prototyping. Origami collapses that workflow into a single pipeline: source in, interactive workspace out.

## Key Features

- **Universal source intake** — Supports PDF, raw text, and public GitHub repositories with automatic discovery of markdown and manifest files across the default branch.
- **GitHub integration** — Paste a public GitHub URL and Origami crawls READMEs, CONTRIBUTING guides, and package manifests without cloning or setup.
- **Streaming interactive canvas** — AI dynamically streams the best component for your source: architecture graphs, package dashboards, scenario simulators, and data flow maps.
- **Generative UI** — Real-time, AI-selected components purpose-built for your exact source type, with full-screen expandable modals for deep dives.
- **v0 MVP Builder** — Reads your source, understands the domain, and produces a fully self-contained, responsive single-page web app with a shareable `/mvp/[id]` link.
- **Workspace discovery** — Browse interactive canvases generated automatically from source documents.

## Technical Architecture

Origami uses a pipeline engine that extracts source payloads, analyzes domain context with AI, and streams interactive components in real time.

```text
┌──────────────────────────────┐
│     Source Intake Layer      │
│  PDF · Text · GitHub Crawl   │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│      AI Analysis Engine      │
│  Per-file analysis + context │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│   Interactive Canvas Stream  │
│ Graph · Dashboard · Simulator│
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│      v0 MVP Generator        │
│  HTML/CSS/JS at /mvp/[id]    │
└──────────────────────────────┘
```

## Stack

| Layer | Technology |
|---|---|
| Frontend | v0 |
| AI | Vercel AI SDK, OpenAI GPT-5.5 |
| Visualization | React Flow |
| Styling | Tailwind CSS |
| Language | TypeScript |

## Status

Origami is live at [origami.knurdz.org](https://origami.knurdz.org). Workspace v2 features tabbed sidebar, drawer UI, and Q&A functionality.

---
