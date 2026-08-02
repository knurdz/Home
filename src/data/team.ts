import { members, Member, getMemberGithubUsername } from "@/data/members";

/** Ordered roles; `level` sets org-chart rows (1 = top). Edit titles and `memberGithub` as needed. */
export interface TeamRoleSlot {
  id: string;
  title: string;
  memberGithub: string;
  level: number;
}

export const teamRoles: TeamRoleSlot[] = [
  { id: "president", title: "President", memberGithub: "rkvishwa", level: 1 },
  {
    id: "vice-president",
    title: "Vice President",
    memberGithub: "SadeepaNHerath",
    level: 2,
  },
  {
    id: "operations",
    title: "People & Operations Lead",
    memberGithub: "Kasun-Kumara",
    level: 2,
  },
  { id: "treasurer", title: "Treasurer", memberGithub: "harshasilva", level: 3 },
  {
    id: "hardware",
    title: "Hardware & IoT Lead",
    memberGithub: "Kavee-ginty",
    level: 3,
  },
  {
    id: "events",
    title: "Events Coordinator Lead",
    memberGithub: "Thesaru-p",
    level: 3,
  },
  {
    id: "outreach",
    title: "Outreach Lead",
    memberGithub: "Praveen-R-2518",
    level: 3,
  },
  {
    id: "media",
    title: "Media Lead",
    memberGithub: "Mahinsa-Wattegedara",
    level: 3,
  },
  {
    id: "design",
    title: "Design Lead",
    memberGithub: "Azriel-prog",
    level: 3,
  },
  {
    id: "software",
    title: "Software Lead",
    memberGithub: "BhasiluEgodawatte",
    level: 3,
  },
  {
    id: "photo-video-assets",
    title: "Photo, Video & Assets Lead",
    memberGithub: "Senuka-Deneth",
    level: 3,
  },
  {
    id: "projects",
    title: "Projects Lead",
    memberGithub: "VinuthKarunathilaka",
    level: 3,
  },
  {
    id: "partnerships",
    title: "Partnerships Lead",
    memberGithub: "ARSPFdo-2004",
    level: 3,
  },
  {
    id: "member-experience",
    title: "Member Experience Lead",
    memberGithub: "Dimanya-Perera",
    level: 3,
  },
  {
    id: "technical-content",
    title: "Technical Content Lead",
    memberGithub: "Madhuravishan",
    level: 3,
  },
  {
    id: "logistics",
    title: "Logistics Lead",
    memberGithub: "nelee25",
    level: 3,
  },
];

export function resolveTeamMember(slot: TeamRoleSlot): Member | undefined {
  const key = slot.memberGithub.toLowerCase();
  return members.find(
    (m) => getMemberGithubUsername(m)?.toLowerCase() === key,
  );
}

export function teamRolesByLevel(): TeamRoleSlot[][] {
  const maxLevel = teamRoles.reduce((max, role) => Math.max(max, role.level), 0);
  return Array.from({ length: maxLevel }, (_, index) => {
    const level = index + 1;
    return teamRoles.filter((role) => role.level === level);
  }).filter((roles) => roles.length > 0);
}
