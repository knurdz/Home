export interface Member {
  name: string;
  role: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export const members: Member[] = [
  {
    name: "John Doe",
    role: "Lead Developer",
    bio: "Full-stack engineer passionate about building scalable applications and mentoring the community.",
    image: "/team/john-doe.jpg",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe"
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    bio: "Creative designer with a focus on user-centered design and beautiful interfaces.",
    image: "/team/jane-smith.jpg",
    github: "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith"
  },
  {
    name: "Alex Johnson",
    role: "Backend Engineer",
    bio: "Backend specialist with expertise in distributed systems and cloud architecture.",
    image: "/team/alex-johnson.jpg",
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson"
  },
  {
    name: "Sarah Williams",
    role: "DevOps Engineer",
    bio: "Infrastructure expert building reliable CI/CD pipelines and scalable cloud solutions.",
    image: "/team/sarah-williams.jpg",
    github: "https://github.com/sarahwilliams",
    linkedin: "https://linkedin.com/in/sarahwilliams"
  },
  {
    name: "Mike Chen",
    role: "Mobile Developer",
    bio: "Mobile app developer creating seamless cross-platform experiences.",
    image: "/team/mike-chen.jpg",
    github: "https://github.com/mikechen",
    twitter: "https://twitter.com/mikechen"
  },
  {
    name: "Emily Davis",
    role: "Community Manager",
    bio: "Building and nurturing our developer community through events and collaboration.",
    image: "/team/emily-davis.jpg",
    linkedin: "https://linkedin.com/in/emilydavis",
    twitter: "https://twitter.com/emilydavis"
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
