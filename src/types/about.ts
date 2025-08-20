// Shared types for About page components

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface ValueItem {
  title: string;
  description: string;
  number: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  color: string;
}
