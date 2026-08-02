# Projects Portfolio

This file serves as the source of truth for the projects displayed on the Knurdz website. Update this file to add, remove, or modify projects.

## Featured Projects

| Name | Branch | Commit | Description | Tags |
| :-- | :-- | :-- | :-- | :-- |
| Tantalum | main | a7f937a | Local-first Electron Arduino IDE with board detection, built-in Git, OTA deployment, snapshot recovery, cloud sync, and an agentic AI assistant—plus Web admin and Android field provisioning. | Desktop App, IoT, AI, Developer Tool |
| Sonar Code Editor | production | 78dc070 | A secure, real-time collaborative coding environment designed specifically for supervised exams and technical interviews. | Desktop App, Web |
| Nothing Dialer 1 | release/beta | 1f125a2 | A Dialer app for Nothing OS with custom glyph for outgoing and ongoing calls also. | Mobile, IoT |
| IEEE Student Branch Website | main | b8f2c31 | Official website for the IEEE Student Branch, University of Moratuwa: showcasing chapters, events, and community engagement for 1,000+ members. Built by Knurdz as web partner. | Web App, Education, Community |
| Origami | main | c4e8a1f | Upload a PDF, scan a repo, or paste text: Origami streams an interactive explanation and generates a v0-powered MVP in seconds. | Web App, AI, Developer Tool |
| MazeX | main | a3m9x07 | Full-stack event platform for MazeX 1.0: an island-wide inter-university Micromouse competition with customizable organizer back-office and cloud infrastructure. Built and hosted by Knurdz as web partner for IEEE RAS & WIE, University of Moratuwa. | Web App, Event Platform, Robotics |
| OctWave 3.0 | main | 3ac7feb | Official website for OctWave 3.0, Sri Lanka's premier undergraduate AI and Machine Learning competition. Built and hosted by Knurdz as web partner for IEEE IAS, University of Moratuwa. | Web App, Event Platform, AI / ML |
| Centurion | main | c2d57cb | Transparent, auditable platform for allocating industry-sponsored software projects to student teams through structured voting and server-side spin-draw events. Built for FIT Semester Project allocation at University of Moratuwa. | Web App, Education, Event Platform |
| What Should I Build | main | b7d3f92 | AI project idea generator that turns your skills, GitHub, time, and goals into ranked ideas with roadmap, stack, and build-ready artifacts. | Web App, AI, Developer Tool |
| The Defense Panel | main | e9a2b14 | Live AI panel simulation with document-aware follow-ups, pressure-testing for startup pitches, academic vivas, and technical interviews. | Web App, AI, Education |
| Nexus OS | main | f1c8d06 | Revenue and AI engine for founders: monitors channels, scores leads, drafts responses, and automates CRM follow-ups through a six-step protocol. | Web App, AI, SaaS |
| Diss-Master | main | da34852 | Diss-Master is a real-time multiplayer word game inspired by Codenames, the beloved board game designed by Vlaada Chvátil and published by Czech Games Edition. | Web, Game |
| Meta Scribe | main | fbb32e6 | A web-based SEO auditing tool that analyzes metadata, structured data, and on-page content quality to provide actionable optimization recommendations. | Web App, SEO, Developer Tool |

---

## Upcoming projects

| Name | Branch | Commit | Description | Tags |
| :-- | :-- | :-- | :-- | :-- |
| IEEE SB Volunteer & Event Management System | development | d2e4f8a | A unified platform for IEEE Student Branch volunteer coordination, event operations, registrations, and committee workflows: built for student branches that outgrow spreadsheets. | Web App, Event Platform, Education |
| Project Titanic | feature/marketplace | 5a2d9c9 | A multipurpose application for university students featuring 6 core distinct features | Mobile, Web |
| Metal PaaS | main | 1g6j9c9 | Metal is a high-performance, AI-Native Platform-as-a-Service (PaaS) that revolutionizes how students and developers build for the cloud. | PaaS, Infrastructure |
---

### Instructions for the AI Agent:
1.  Read this markdown file to get the latest project information.
2.  Update the `src/data/projects.ts` file in the codebase to reflect these changes.
3.  Ensure the `Featured Projects` section in `src/app/page.tsx` correctly renders the updated project data.
4. Also include the upcoming project in same section with some separate label in home page and with separate title in projects.ts file
5. For non upcoming projects only there should be a separate page for each project with detailed description. banner image, title, and blog like content with image and paragraphs formatted. user will place a md file in required place and display that md file as the content. banner, title, content all will be in that md file. for now create sample md files for each projects and place there
