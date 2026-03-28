import type { ReactNode } from "react";

export interface TechItem {
  name: string;
  colour: string;
  colourLight: string;
  colourDark: string;
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  repo: string;
  demo: string;
  techStack: TechItem[];
  projectIncomplete?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
