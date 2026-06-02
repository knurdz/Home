---
title: "MazeX"
description: "Full-stack event platform for MazeX 1.0, an island-wide inter-university Micromouse competition with customizable organizer back-office and cloud infrastructure. Built and hosted by Knurdz as web partner for IEEE RAS & WIE, University of Moratuwa."
tags: ["Web App", "Event Platform", "Robotics"]
branch: "main"
commit: "a3m9x07"
---

- **Live Site**: [https://mazex.knurdz.org](https://mazex.knurdz.org)

## Overview

MazeX 1.0 is an **island-wide inter-university Micromouse Robotics Competition** organized by IEEE Robotics & Automation Society (RAS) and Women in Engineering (WIE) at the University of Moratuwa. Teams from universities across the island design autonomous maze-solving robots and compete across a four-workshop series culminating in a head-to-head final: build, program, solve.

As web partner, Knurdz did not deliver a marketing site alone. We engineered a **full-stack event platform** for the entire competition: a public-facing experience on [mazex.knurdz.org](https://mazex.knurdz.org) that serves participants from every participating university, backed by a modular organizer suite that gives the committee end-to-end control over registrations, communications, content, and operations, all configurable without developer intervention.

All **cloud infrastructure**, including hosting, deployment, databases, email delivery, file storage, and ongoing platform operations, is provisioned and managed by Knurdz. The organizing committee runs the event; Knurdz keeps the entire stack running.

## The Problem

University robotics competitions generate complexity fast, especially at island-wide scale, where organizers coordinate teams from multiple universities. The committee juggles workshop sign-ups, competition entries, sponsor visibility, delegate resources, email campaigns, and last-minute schedule changes, often across spreadsheets, third-party form tools, and disconnected inboxes. MazeX needed a single system the committee could run themselves, from first registration to final debrief.

## Public Experience

The public site introduces the Micromouse concept, communicates the workshop roadmap, and drives registration for teams across participating universities, with an interactive maze demo on the homepage where visitors can click cells to add or remove walls, reinforcing the competition theme before a single form is filled.

- Mission brief and Micromouse explainer for first-time participants
- Four-workshop timeline with milestone cards (April–May 2026)
- Delegate booklet download, rules, schedule, venue, and technical resources in one PDF
- Partner and sponsor showcase with dedicated visibility tiers
- Previous events gallery (BotTalk, Naturenook 2024, Robotics Day, Hackelite 2.0)
- Registration flows and organizing committee contact directory

## Organizer Platform

Behind the public site sits a purpose-built admin environment structured around how event committees actually work. Every module is **fully customizable**: organizers configure content, forms, and workflows without touching code.

### Dashboard & Analytics

Central analytics give the committee a live read on platform activity: registration volume, engagement trends, and operational health at a glance, so decisions are driven by data, not guesswork.

### Registrations

Unified registration management across **all workshops and the main competition**. Organizers view, filter, and export registered participants from one place instead of reconciling separate form submissions. Registration schemas adapt as requirements change between workshop phases and competition day.

### Mail List & Marketing

Built-in mailing list infrastructure removes the need for external newsletter tools. Organizers maintain subscriber lists, segment audiences, and run **marketing email campaigns** from within the platform, workshop reminders, competition updates, sponsor announcements, and last-minute logistics all from the same system that holds registration data.

### Events & Resources

**Event management** covers the full workshop and competition schedule, create, edit, and publish sessions as the timeline evolves. A dedicated **resources** module lets organizers upload and organize delegate materials, technical guides, and downloadable assets that appear on the public site without redeploying code.

### Sponsors

Sponsor profiles, tier assignments, and partner visibility are managed directly in the admin panel. The committee controls who appears on the public site, in what order, and with what collateral, keeping partner relationships current as agreements are finalized.

### Form Builder

A visual **form builder** lets organizers create and modify registration and inquiry forms on demand. Field types, validation rules, and form-to-workflow mappings are configurable, so when Workshop 03 needs different data from Workshop 01, the committee adapts the form themselves.

### Link Shortener

Trackable **short links** for campaigns, social posts, and partner referrals. Organizers generate branded URLs, monitor click-through, and attribute registrations back to specific channels, useful when promoting across IEEE channels, faculty groups, and media partners.

### System Settings

Global platform configuration, branding, contact details, feature toggles, and operational preferences, centralized under settings so the committee maintains full ownership of the live environment.

## Infrastructure

Knurdz owns the full cloud stack behind MazeX 1.0, not just the application code. Production hosting, CI/CD pipelines, database services, transactional and marketing email delivery, asset storage for delegate resources and sponsor collateral, and environment monitoring are all provisioned and operated on Knurdz infrastructure. The IEEE committee gets a turnkey platform; Knurdz handles uptime, scaling, and the operational layer that keeps registrations, mail campaigns, and the public site running through competition day.

## The Event

A Micromouse is a small, fully autonomous robot that navigates and solves a maze in the shortest possible time with no human intervention, using IR or ultrasonic sensors for wall detection, onboard microcontrollers for processing, and algorithms like flood-fill to find the optimal path.

| Date | Workshop | Focus |
|---|---|---|
| 2026/04/11 | Workshop 01 | Foundations, components & build start |
| 2026/04/25 | Workshop 02 | Microcontrollers, sensors & basic movement |
| 2026/05/09 | Workshop 03 | PID control & wall following |
| 2026/05/29 | Workshop 04 | Maze-solving algorithms & full integration |

## Organized By

IEEE Robotics & Automation Society and Women in Engineering at University of Moratuwa, dedicated to fostering innovation and technical excellence in robotics.

## Status

Live at [mazex.knurdz.org](https://mazex.knurdz.org). Public registration and the full organizer suite are operational; competition registration opens soon.

---
