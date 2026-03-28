export interface TimelineEvent {
  year: string;
  title: string;
  org: string;
  description: string;
  type: "work" | "education" | "other";
}

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Typescript", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "DevOps & Testing",
    skills: ["Azure DevOps", "Terraform", "Playwright", "Vitest", "Jest", "React Testing Library", "Git"],
  },
] as const;

export const timeline: TimelineEvent[] = [
  {
    year: "2025 – Present",
    title: "Software Engineer",
    org: "CGI",
    description: "Primarily working with Django and Vite.js (React) apps, Azure DevOps.",
    type: "work",
  },
  {
    year: "2023 – 2025",
    title: "Software Engineer & Squad Lead",
    org: "BJSS",
    description: "Software engineer and squad lead. Django and Vite.js (React) apps, Azure DevOps.",
    type: "work",
  },
  {
    year: "2023",
    title: "Full-Stack Developer Bootcamp",
    org: "The Developer Academy",
    description: "Intensive full-stack programme covering React, Node.js, databases, and modern web development.",
    type: "education",
  },
  {
    year: "2019 – 2023",
    title: "Primary School Teacher",
    org: "Lower Meadow Primary School",
    description: "Worked in KS2 within a deprived area of Sheffield. Lead Science across key stages.",
    type: "work",
  },
  {
    year: "2018 – 2019",
    title: "PGCE Education (Distinction)",
    org: "Sheffield Hallam University",
    description: "Postgraduate teaching qualification with distinction.",
    type: "education",
  },
  {
    year: "2013 – 2017",
    title: "MA Photography (First-Class)",
    org: "Sheffield Hallam University",
    description: "Master of Arts in Photography, first-class degree.",
    type: "education",
  },
];

export const typeIcons: Record<TimelineEvent["type"], string> = {
  work: "💼",
  education: "🎓",
  other: "✦",
};
