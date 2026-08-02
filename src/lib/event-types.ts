export type EventStatus = "upcoming" | "ongoing" | "concluded";

export interface EventGalleryItem {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  date: string;
  category: string;
}

export interface EventGalleryEmbed {
  src: string;
  title?: string;
  height?: number;
}

export interface EventGallerySection {
  id: string;
  title: string;
  embed?: EventGalleryEmbed;
  images?: EventGalleryItem[];
  comingSoon?: boolean;
}

export interface OrganizerModule {
  title: string;
  description: string;
}

export interface ProgramPhase {
  title: string;
  date?: string;
  description: string;
}

export interface EventMatter {
  order: number;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  url?: string;
  role: string;
  client: string;
  eventOrganizers: string[];
  eventOrganizersNote: string;
  image: string;
  logo: string;
  secondaryLogo?: string;
  tags: string[];
  showPlatformDetails: boolean;
  platformIntro?: string;
  problem?: string;
  publicExperienceIntro?: string;
  publicPlatformFeatures?: string[];
  organizerIntro?: string;
  organizerModules?: OrganizerModule[];
  infrastructure?: string;
  collaboration?: string[];
  plannedHighlights?: string[];
  programPhases?: ProgramPhase[];
  statusNote: string;
  partnershipQuote?: string;
  partnershipQuoteAttribution?: string;
  status: EventStatus;
  gallery?: EventGalleryItem[];
  gallerySections?: EventGallerySection[];
}

export type EventData = EventMatter & {
  slug: string;
  content: string;
  gallery: EventGalleryItem[];
};

export function getEventStatusLabel(status: EventStatus): string {
  return status;
}

export function showGalleryComingSoonPlaceholders(status: EventStatus): boolean {
  return status === "upcoming" || status === "ongoing";
}
