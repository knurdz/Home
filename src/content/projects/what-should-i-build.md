---
title: "What Should I Build"
banner: "/images/projects/what-should-i-build/banner-dark-v2.png"
bannerLight: "/images/projects/what-should-i-build/banner-light-v2.png"
description: "AI project idea generator that turns your skills, GitHub, time, and goals into ranked ideas with roadmap, stack, and build-ready artifacts."
tags: ["Web App", "AI", "Developer Tool"]
branch: "main"
commit: "b7d3f92"
---

## Links

- [Live Demo](https://whatshouldibuild.knurdz.org)

## Overview

What Should I Build is an AI project idea generator. Tell it your skills, GitHub profile, available time, and career goals, or drop any context like a hackathon theme, and get a roadmap, stack recommendation, MVP scope, monetization paths, and an interactive workspace to ship from.

Not just a list of ideas: a full workspace with architecture, agent instructions, MVP previews, and chat.

## The Problem

Developers get stuck choosing what to build. Generic idea lists don't account for your skills, timeline, or goals. What Should I Build bridges the gap from "I want to build something" to "here's exactly what to build and how to ship it."

## Key Features

- **Tailored idea generation**: 3 ideas from profile or context; add a seed or uploads for 5.
- **Seed idea + file uploads**: Anchor with a concept or attach images, PDFs, and docs.
- **Agentic & AI toggles**: Build with coding agents or AI inside the product.
- **Live generation logs**: Phased SSE logs with no black box.
- **Interactive workspace**: Ranked projects, attachments, and status tracking.
- **Architecture canvas**: React Flow diagrams with validation.
- **AGENTS.md generation**: Agent instructions for Cursor and other coding agents.
- **v0 MVP preview**: Live UI preview before you write code.
- **Per-project chat**: Streaming chat with full project context.

## How It Works

1. **Describe your context**: Share skills, GitHub, time available, career goals, or freeform context like a hackathon theme.
2. **Generate tailored ideas**: Get 3 or 5 project ideas with pitch, stack rationale, MVP scope, and phased roadmap.
3. **Explore your workspace**: Each session becomes a workspace. Browse ranked projects and pick the idea worth building.
4. **Ship with Agent, Canvas & MVP**: Generate AGENTS.md, edit the architecture canvas, preview the MVP, and refine via chat.

## Use Cases

| Scenario | Context |
|---|---|
| Weekend MVP | React and Node skills, one weekend, portfolio piece for Monday demo |
| Hackathon | 48-hour hackathon with AI + health theme, AI features in the product |
| Agentic build | Build with Cursor agents over 2 weeks, any stack, skills optional |

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, React |
| Backend | Supabase |
| AI | Streaming generation with SSE |
| Visualization | React Flow |
| MVP Preview | v0 |

## Status

Live at [whatshouldibuild.knurdz.org](https://whatshouldibuild.knurdz.org). Sign in to create your first idea and access your workspace, canvas, and agent instructions.

---
