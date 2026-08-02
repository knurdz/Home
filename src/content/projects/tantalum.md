---
title: "Tantalum"
banner: "/images/projects/tantalum/banner.png"
description: "Local-first Electron Arduino IDE with board detection, built-in Git, OTA deployment, snapshot recovery, cloud sync, and an agentic AI assistant—plus Web admin and Android field provisioning."
tags: ["Desktop App", "IoT", "AI", "Developer Tool"]
branch: "main"
commit: "a7f937a"
license: "MIT"
---

## Links

- [Tantalum IDE on GitHub](https://github.com/rkvishwa/Tantalum-IDE)
- [Tantalum Mobile on GitHub](https://github.com/rkvishwa/Tantalum-Mobile)
- [Documentation](https://rkvishwa.github.io/Tantalum-IDE)
- [Tantalum Web](https://tantalum.knurdz.org)

## Overview

Tantalum is a distributed hardware development and deployment ecosystem. **Tantalum IDE** keeps day-to-day editing, Git source control, and firmware compilation local on your machine, connecting to the cloud only when a project needs secure authentication, board management, OTA delivery, workspace backup, live telemetry, or AI model access.

Together with **Tantalum Web** (cloud portal and admin) and **Tantalum Mobile** (Android field provisioning), Tantalum covers the full path from sketch to deployed, recoverable firmware on physical boards.

![Tantalum IDE workspace and Monaco editor](/images/projects/tantalum/banner.png)

## The Problem

Arduino and ESP developers juggle separate tools for editing, serial monitoring, Git, OTA updates, WiFi provisioning, and source recovery after a flash. Cloud-backed IoT platforms often force WiFi credentials or source code through servers you do not control. Tantalum unifies the desktop workflow while keeping sensitive data local and offering optional self-hosted cloud infrastructure.

## The Tantalum Ecosystem

| Component | Role |
|---|---|
| **Tantalum IDE** | Electron desktop app: Monaco editor, Arduino CLI builds, board detection, built-in Git, OTA orchestration, runtime injection, View Code snapshot recovery, project cloud sync, and an agentic AI assistant. |
| **Tantalum Web** | Cloud portal for authentication, board administration, firmware history, agent settings, entitlements, and administrative operations. |
| **Tantalum Mobile** | Android companion for secure WiFi provisioning to boards in the field via Espressif BLE or SoftAP, linked to your cloud account without exposing WiFi secrets to the server. |

## Key Features (IDE)

- **Arduino sketch editing** powered by Monaco Editor, tuned for C/C++.
- **Auto board detection** combining Arduino CLI metadata, USB serial data, ESP chip probing, and optional AI-assisted FQBN suggestions.
- **Local board profiles** with stable hardware fingerprints, ports, FQBNs, cloud links, OTA mode, and source visibility preferences.
- **Built-in Git source control** on the active Project Space: status, diffs, stage/commit, fetch/pull/push, branches, history, init, and publish to GitHub or GitLab.
- **Tantalum runtime injection** for cloud-connected builds: heartbeat, OTA polling, MQTT commands, TLS, provisioning, and telemetry via `TantalumCloudRuntime.h`.
- **OTA firmware delivery** with polling, MQTT, or both; HMAC-signed commands and device-gateway telemetry.
- **View Code / snapshot recovery** restores exact source from embedded firmware markers and cloud source snapshots (current and previous retention).
- **Project cloud sync** via a shadow Git repository and Gitea remote without mutating the user's active Git history.
- **Runtime provisioning** over USB serial, BLE, or SoftAP without storing WiFi passwords in the cloud.
- **Serial monitor and plotter** with blocker detection before uploads or firmware readback.
- **Agentic AI assistant** routed through the Tantalum agent runtime and Appwrite gateway with workspace-bound tools and restore points.

![Tantalum IDE AI assistant](/images/projects/tantalum/ai-assistant.jpeg)

![Tantalum IDE firmware OTA](/images/projects/tantalum/ota-updates.jpeg)

## Tantalum Mobile

Tantalum Mobile is a Flutter Android app for field deployments where USB provisioning is impractical. After OAuth through Tantalum Web and Appwrite, users view registered boards, request a temporary provisioning window through `board-admin`, and send WiFi credentials directly to the board over a local BLE or SoftAP connection using Espressif's native provisioning libraries.

![Tantalum Mobile boards and provisioning](/images/projects/tantalum/mobile-1.jpeg)

![Tantalum Mobile WiFi provisioning flow](/images/projects/tantalum/mobile-2.jpeg)

> **Privacy first:** WiFi credentials are sent directly to the board over a local connection. They are **never** uploaded to Tantalum Cloud and are **never** stored by the mobile application.

## Technical Architecture

Tantalum keeps privileged operations in the Electron main process, exposes a narrow IPC surface through preload, and lets the React renderer focus on UI.

```text
┌──────────────────────────────┐
│   React Renderer (Vite UI)   │
│  Monaco, dashboards, Git UI  │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│   IPC Preload Bridge         │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│   Electron Main Process      │
│ Arduino CLI, Git, serial, AI │
└──────────────┬───────────────┘
               │
     ┌─────────┴─────────┐
     │                   │
┌────▼────┐       ┌──────▼──────┐
│  Local  │       │ Cloud Layer │
│ USB/Git │       │ Appwrite,   │
│ Arduino │       │ Gitea, MQTT │
└────┬────┘       └──────┬──────┘
     │                   │
     └─────────┬─────────┘
               │
┌──────────────▼───────────────┐
│  IoT Boards (Tantalum RT)    │
└──────────────────────────────┘
```

## Common Workflows

1. **Detect and save a board** — Auto-detect fills FQBN and port details; save a profile keyed by hardware identity.
2. **Enable cloud runtime** — `board-admin` creates a cloud board and returns one-time secrets; the IDE injects them into runtime firmware and flashes over USB.
3. **Provision WiFi** — USB signed serial commands, or BLE/SoftAP from Tantalum Mobile using proof-of-possession.
4. **Create an OTA release** — Compile locally, embed a source marker, upload the artifact, and queue deployment.
5. **Restore source with View Code** — Read firmware from the board, match the embedded marker, and restore from cloud snapshots.
6. **Commit through built-in Git** — Stage, commit, and push from the active Project Space repository.
7. **Sync the workspace** — Cloud sync pushes a shadow repo to Gitea and applies remote changes back into the workspace.

## Security Model

- **Board credentials:** Cloud stores token hashes and encrypted command secrets; raw API tokens and command secrets are returned only at creation or rotation.
- **WiFi credentials:** Never uploaded to Appwrite; provisioning stays on USB, BLE, or SoftAP paths.
- **AI provider keys:** Managed and custom keys use KEK-encrypted envelopes; the desktop can route through the agent gateway without holding raw developer keys.
- **Source snapshots:** Private by default; optional public code visibility for authenticated ecosystem users.
- **Git provider tokens:** Stored in the desktop secret store; publishing uses temporary auth headers, not tokens in remote URLs.
- **MQTT commands:** HMAC-signed with action, deployment ID, nonce, and timestamp; boards reject stale or invalid commands.

## Self-Hosting

The default self-hosted stack runs **Appwrite** (auth, database, storage, functions, hosting), **Mosquitto** for MQTT board commands, and **Gitea** for workspace cloud sync. The Tantalum-IDE repository includes Azure VM runbooks, `appwrite push` workflows for tables/buckets/functions, and smoke scripts for auth, OTA, and cloud sync.

For step-by-step deployment, see the [self-hosting guide](https://rkvishwa.github.io/Tantalum-IDE) and the Azure runbook in the [Tantalum-IDE repository](https://github.com/rkvishwa/Tantalum-IDE).

## Stack

| Layer | Technology |
|---|---|
| Desktop shell | Electron |
| IDE UI | React, TypeScript, Vite, Monaco Editor |
| Toolchain | Arduino CLI, esptool / avrdude |
| Cloud backend | Appwrite (DB, Storage, Functions) |
| Workspace sync | Gitea (shadow Git repositories) |
| Device commands | Mosquitto MQTT (TLS) |
| Mobile | Flutter (Android 8.0+) |
| AI | Tantalum agent runtime, OpenCode SDK, Appwrite agent-gateway |
| Provisioning | Espressif esp-idf-provisioning-android (Mobile) |

## Getting Started (IDE)

```bash
git clone https://github.com/rkvishwa/Tantalum-IDE.git
cd Tantalum-IDE
npm install
npm run dev
```

Requires Node.js 18+, npm 9+, Git, and Arduino CLI on PATH (or bundled under `resources/`). Full cloud feature testing needs an Appwrite project configured per the repository README.

## Status

Tantalum is **open source** under the MIT License. Tantalum IDE targets macOS, Windows, and Linux; Tantalum Mobile targets Android 8.0 (API 26) and above. Primary development lives on GitHub at commit `a7f937a` on `main` (Tantalum-IDE).

## License

This project is licensed under the MIT License.

---
