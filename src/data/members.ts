export interface Member {
  name: string;
  nickname?: string;
  role: string;
  bio: string;
  image: string;
  /** Bump when replacing a local `/team/` photo so browsers fetch the new file. */
  imageVersion?: number;
  github?: string;
  linkedin?: string;
}

export function getMemberGithubUsername(member: Member): string | undefined {
  if (!member.github) return undefined;
  const parts = member.github.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

/** Appends cache-bust query for local member photos. */
export function withMemberImageVersion(member: Member, src: string): string {
  if (!src.startsWith("/") || member.imageVersion == null) {
    return src;
  }
  const joiner = src.includes("?") ? "&" : "?";
  return `${src}${joiner}v=${member.imageVersion}`;
}

export const members: Member[] = [
  {
    name: "RKK Vishva Kumar",
    nickname: "RVK",
    role: "President",
    bio: "",
    image: "/team/rkvishwa.png",
    imageVersion: 2,
    github: "https://github.com/rkvishwa",
    linkedin: "https://www.linkedin.com/in/rkk-vishva/"
  },
  {
    name: "Sadeepa N Herath",
    role: "Vice President",
    bio: "",
    image: "/team/SadeepaNHerath.png",
    imageVersion: 2,
    github: "https://github.com/SadeepaNHerath",
    linkedin: "https://www.linkedin.com/in/sadeepanherath/"
  },
  {
    name: "Kasun Kumara",
    role: "People & Operations Lead",
    bio: "",
    image: "/team/Kasun-Kumara.png",
    imageVersion: 2,
    github: "https://github.com/Kasun-Kumara",
    linkedin: "https://www.linkedin.com/in/kasun-kumara-30baaa338/"
  },
  {
    name: "Praveen R",
    role: "Outreach Lead",
    bio: "",
    image: "/team/Praveen-R-2518.png",
    imageVersion: 1,
    github: "https://github.com/Praveen-R-2518",
    linkedin: "https://www.linkedin.com/in/praveen-r-b374612aa/"
  },
  {
    name: "Thesaru Praneeth",
    role: "Events Coordinator Lead",
    bio: "",
    image: "/team/Thesaru-p.png",
    imageVersion: 3,
    github: "https://github.com/Thesaru-p",
    linkedin: "https://www.linkedin.com/in/thesaru-p/"
  },
  {
    name: "Harsha Silva",
    role: "Treasurer",
    bio: "",
    image: "/team/harshasilva.png",
    imageVersion: 1,
    github: "https://github.com/harshasilva",
    linkedin: "https://www.linkedin.com/in/harsha-silva-b59776357/"
  },
  {
    name: "Senuka Deneth",
    role: "Photo, Video & Assets Lead",
    bio: "",
    image: "/team/Senuka-Deneth.png",
    imageVersion: 1,
    github: "https://github.com/Senuka-Deneth",
    linkedin: "https://www.linkedin.com/in/senuka-deneth-70937a345/"
  },
  {
    name: "Bhasilu Egodawatte",
    role: "Software Lead",
    bio: "",
    image: "/team/BhasiluEgodawatte.png",
    imageVersion: 1,
    github: "https://github.com/BhasiluEgodawatte",
    linkedin: "https://www.linkedin.com/in/bhasilu-egodawatte-79bb70367/"
  },
  {
    name: "Vinuth Karunathilaka",
    role: "Projects Lead",
    bio: "",
    image: "/team/VinuthKarunathilaka.png",
    imageVersion: 1,
    github: "https://github.com/VinuthKarunathilaka",
    linkedin: "https://www.linkedin.com/in/vinuth-karunathilaka-67160334a/"
  },
  {
    name: "Kaveesha Ginodh",
    role: "Hardware & IoT Lead",
    bio: "",
    image: "/team/Kavee-ginty.jpg",
    imageVersion: 3,
    github: "https://github.com/Kavee-ginty",
    linkedin: "https://www.linkedin.com/in/kaveesha-ginodh/"
  },
  {
    name: "Ashen Tharindu",
    role: "Design Lead",
    bio: "",
    image: "/team/Azriel-prog.png",
    imageVersion: 1,
    github: "https://github.com/Azriel-prog",
    linkedin: "https://www.linkedin.com/in/ashen-tharindu-041833365/"
  },
  {
    name: "Praveen Fernando",
    role: "Partnerships Lead",
    bio: "",
    image: "/team/ARSPFdo-2004.png",
    imageVersion: 1,
    github: "https://github.com/ARSPFdo-2004",
    linkedin: "https://www.linkedin.com/in/senuka-deneth-70937a345/"
  },
  {
    name: "Mahinsa Waththegedara",
    role: "Media Lead",
    bio: "",
    image: "/team/Mahinsa-Wattegedara.png",
    imageVersion: 1,
    github: "https://github.com/Mahinsa-Wattegedara",
    linkedin: "https://www.linkedin.com/in/mahinsa-waththegedara-28b7b335a/"
  },
  {
    name: "Madhura Ravishan Abeywickrama",
    role: "Technical Content Lead",
    bio: "",
    image: "/team/Madhuravishan.png",
    imageVersion: 1,
    github: "https://github.com/Madhuravishan",
    linkedin: "https://www.linkedin.com/in/madhuraravishan"
  },
  {
    name: "Neleesha Peiris",
    role: "Logistics Lead",
    bio: "",
    image: "/team/nelee25.png",
    imageVersion: 1,
    github: "https://github.com/nelee25",
    linkedin: "https://www.linkedin.com/in/neleesha-peiris-43b503319"
  },
  {
    name: "Dimanya Perera",
    role: "Member Experience Lead",
    bio: "",
    image: "/team/Dimanya-Perera.png",
    imageVersion: 1,
    github: "https://github.com/Dimanya-Perera",
    linkedin: "https://www.linkedin.com/in/dimanya-perera-072308416"
  }
];

export interface GalleryImage {
  url: string;
  title: string;
  description: string;
  category: "event" | "project" | "team";
}

export const galleryImages: GalleryImage[] = [
  {
    url: "/gallery/hackathon-2024.jpg",
    title: "Annual Hackathon 2024",
    description: "Our community coming together to build innovative solutions",
    category: "event"
  },
  {
    url: "/gallery/workshop-session.jpg",
    title: "Workshop Session",
    description: "Hands-on coding workshop with community members",
    category: "event"
  },
  {
    url: "/gallery/team-meeting.jpg",
    title: "Team Collaboration",
    description: "Weekly sync discussing upcoming projects",
    category: "team"
  },
  {
    url: "/gallery/project-launch.jpg",
    title: "Project Launch Day",
    description: "Celebrating the successful deployment of our latest project",
    category: "project"
  },
  {
    url: "/gallery/community-event.jpg",
    title: "Community Meetup",
    description: "Monthly community gathering and networking",
    category: "event"
  },
  {
    url: "/gallery/code-review.jpg",
    title: "Code Review Session",
    description: "Collaborative code review and knowledge sharing",
    category: "team"
  }
];
