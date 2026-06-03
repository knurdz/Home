export interface Project {
  name: string;
  slug: string;
  branch: string;
  commit: string;
  description: string;
  tags: string[];
  upcoming: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────────────
  {
    name: "Sonar Code Editor",
    slug: "sonar-code-editor",
    branch: "production",
    commit: "78dc070",
    description:
      "A secure, real-time collaborative coding environment designed specifically for supervised exams and technical interviews.",
    tags: ["Desktop App", "Web"],
    upcoming: false,
  },
  {
    name: "Nothing Dialer 1",
    slug: "nothing-dialer-1",
    branch: "release/beta",
    commit: "1f125a2",
    description:
      "A Dialer app for Nothing OS with custom glyph for outgoing and ongoing calls also.",
    tags: ["Mobile", "IoT"],
    upcoming: false,
  },
  {
    name: "IEEE Student Branch Website",
    slug: "ieee-sb-uom-website",
    branch: "main",
    commit: "b8f2c31",
    description:
      "Official website for the IEEE Student Branch, University of Moratuwa — showcasing chapters, events, and community engagement for 1,000+ members. Built by Knurdz as web partner.",
    tags: ["Web App", "Education", "Community"],
    upcoming: false,
  },
  {
    name: "Origami",
    slug: "origami",
    branch: "main",
    commit: "c4e8a1f",
    description:
      "Upload a PDF, scan a repo, or paste text, Origami streams an interactive explanation and generates a v0-powered MVP in seconds.",
    tags: ["Web App", "AI", "Developer Tool"],
    upcoming: false,
  },
  {
    name: "MazeX",
    slug: "mazex",
    branch: "main",
    commit: "a3m9x07",
    description:
      "Full-stack event platform for MazeX 1.0, an island-wide inter-university Micromouse competition with customizable organizer back-office and cloud infrastructure. Built and hosted by Knurdz as web partner for IEEE RAS & WIE, University of Moratuwa.",
    tags: ["Web App", "Event Platform", "Robotics"],
    upcoming: false,
  },
  {
    name: "What Should I Build",
    slug: "what-should-i-build",
    branch: "main",
    commit: "b7d3f92",
    description:
      "AI project idea generator that turns your skills, GitHub, time, and goals into ranked ideas with roadmap, stack, and build-ready artifacts.",
    tags: ["Web App", "AI", "Developer Tool"],
    upcoming: false,
  },
  {
    name: "The Defense Panel",
    slug: "defense-panel",
    branch: "main",
    commit: "e9a2b14",
    description:
      "Live AI panel simulation with document-aware follow-ups, pressure-testing for startup pitches, academic vivas, and technical interviews.",
    tags: ["Web App", "AI", "Education"],
    upcoming: false,
  },
  {
    name: "Nexus OS",
    slug: "nexus-os",
    branch: "main",
    commit: "f1c8d06",
    description:
      "Revenue and AI engine for founders, monitors channels, scores leads, drafts responses, and automates CRM follow-ups through a six-step protocol.",
    tags: ["Web App", "AI", "SaaS"],
    upcoming: false,
  },
  {
    name: "Diss-Master",
    slug: "diss-master",
    branch: "main",
    commit: "da34852",
    description:
      "Diss-Master is a real-time multiplayer word game inspired by Codenames, the beloved board game designed by Vlaada Chvátil and published by Czech Games Edition.",
    tags: ["Web", "Game"],
    upcoming: false,
  },
  {
    name: "Meta Scribe",
    slug: "meta-scribe",
    branch: "main",
    commit: "fbb32e6",
    description:
      "A web-based SEO auditing tool that analyzes metadata, structured data, and on-page content quality to provide actionable optimization recommendations.",
    tags: ["Web App", "SEO", "Developer Tool"],
    upcoming: false,
  },

  // ── Upcoming Projects ──────────────────────────────────────────────────────
  {
    name: "IEEE SB Volunteer & Event Management System",
    slug: "ieee-sb-volunteer-event-management",
    branch: "development",
    commit: "d2e4f8a",
    description:
      "A unified platform for IEEE Student Branch volunteer coordination, event operations, registrations, and committee workflows — built for student branches that outgrow spreadsheets.",
    tags: ["Web App", "Event Platform", "Education"],
    upcoming: true,
  },
  {
    name: "Project Titanic",
    slug: "project-titanic",
    branch: "feature/marketplace",
    commit: "5a2d9c9",
    description:
      "A multipurpose application for university students featuring 6 core distinct features",
    tags: ["Mobile", "Web"],
    upcoming: true,
  },
  {
    name: "Metal PaaS",
    slug: "metal-paas",
    branch: "main",
    commit: "1g6j9c9",
    description:
      "Metal is a high-performance, AI-Native Platform-as-a-Service (PaaS) that revolutionizes how students and developers build for the cloud.",
    tags: ["PaaS", "Infrastructure"],
    upcoming: true,
  },
  {
    name: "Arduino Remote",
    slug: "arduino-remote",
    branch: "development/alpha",
    commit: "4b8e1c5",
    description:
      "Aruido IDE built from scratch powered Arduino CLI with inbuilt cloud based OTA updates and remote debugging.",
    tags: ["Desktop", "IoT"],
    upcoming: true,
  },
];

export const featuredProjects = projects.filter((p) => !p.upcoming);
export const upcomingProjects = projects.filter((p) => p.upcoming);
