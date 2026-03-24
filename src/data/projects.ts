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
    branch: "main",
    commit: "7a3d9f2",
    description:
      "A secure, real-time collaborative coding environment designed specifically for supervised exams and technical interviews.",
    tags: ["Desktop App", "Web"],
    upcoming: false,
  },
  {
    name: "Nothing Dialer 1",
    slug: "nothing-dialer-1",
    branch: "feature/mobile",
    commit: "4b8e1c5",
    description:
      "A custom dialer app for Nothing OS with unique Glyph Interface animations for outgoing, ongoing, and incoming calls.",
    tags: ["Mobile", "IoT"],
    upcoming: false,
  },
  {
    name: "Diss-Master",
    slug: "diss-master",
    branch: "webapp/v2",
    commit: "9c2f6a1",
    description:
      "Diss-Master is a real-time multiplayer word game inspired by Codenames, the beloved board game designed by Vlaada Chvátil and published by Czech Games Edition.",
    tags: ["Web", "Game"],
    upcoming: false,
  },

  // ── Upcoming Projects ──────────────────────────────────────────────────────
  {
    name: "Project Titanic",
    slug: "project-titanic",
    branch: "social/mobile",
    commit: "5a2d9c9",
    description:
      "A multipurpose application for university students featuring 6 core distinct features.",
    tags: ["Mobile", "Web"],
    upcoming: true,
  },
  {
    name: "Metal PaaS",
    slug: "metal-paas",
    branch: "feature/platform",
    commit: "1g6j9c9",
    description:
      "Metal is a high-performance, AI-Native Platform-as-a-Service (PaaS) that revolutionizes how students and developers build for the cloud.",
    tags: ["PaaS", "Infrastructure"],
    upcoming: true,
  },
  {
    name: "Arduino Remote",
    slug: "arduino-remote",
    branch: "product/remote",
    commit: "4b8e1c5",
    description:
      "Arduino IDE built from scratch, powered by Arduino CLI with built-in cloud-based OTA updates and remote debugging.",
    tags: ["Desktop", "IoT"],
    upcoming: true,
  },
];

export const featuredProjects = projects.filter((p) => !p.upcoming);
export const upcomingProjects = projects.filter((p) => p.upcoming);
