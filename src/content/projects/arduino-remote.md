---
title: "Arduino Remote"
description: "Arduino IDE built from scratch powered by Arduino CLI with inbuilt cloud-based OTA updates and remote debugging."
tags: ["Desktop", "IoT"]
branch: "development/alpha"
commit: "4b8e1c5"
---

## Overview

Arduino Remote is a desktop IDE built from scratch around the **Arduino CLI**, combining familiar embedded development workflows with cloud-based **OTA updates** and **remote debugging** for IoT projects.

## The Problem

Embedded developers often switch between local IDEs, serial monitors, and separate tools for over-the-air firmware updates. Arduino Remote unifies edit, build, flash, debug, and OTA into one environment.

## Planned Features

- Custom IDE shell powered by Arduino CLI
- Cloud-based OTA firmware delivery
- Remote debugging for connected boards
- Project and board management for IoT workflows

## Stack

| Layer | Technology |
|---|---|
| Desktop | Electron or native shell (in development) |
| Toolchain | Arduino CLI |
| IoT | OTA + remote debug services |

## Status

**Upcoming** — early alpha on `development/alpha`. IDE core, CLI integration, and OTA pipeline under active development.

---
