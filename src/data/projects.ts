import type { Project } from "../types";
import { getTechByName } from "./techStack";

const projects: Project[] = [
  {
    title: "BardBox 🎵",
    description:
      "A tool that allows Dungeon Masters to bring their D&D games to life by organising their music into playlists, tagging, creating soundscape presets and much more.",
    isNew: true,
    isFeatured: true,
    image: "/projectImgs/bardboximg.png",
    repo: "https://github.com/CodeByCalvin/bardbox-public",
    demo: "https://www.bardbox.app/",
    techStack: [
      getTechByName("React"),
      getTechByName("Vite.js"),
      getTechByName("Typescript"),
      getTechByName("Tailwind"),
      getTechByName("Framer Motion"),
      getTechByName("IndexedDB"),
      getTechByName("CSS"),
      getTechByName("APIs"),
      getTechByName("Vitest"),
    ].filter(Boolean),
  },
  {
    title: "Portfolio Site 💻",
    description:
      "My personal developer portfolio, built with React, TypeScript, and Framer Motion. Features animated transitions, a dark mode toggle, and a responsive layout.",
    isFeatured: true,
    image: "/projectImgs/portfoliositeimg.png",
    repo: "https://github.com/CodeByCalvin/calvin-merry-dev-site",
    demo: "https://calvinmerry.dev/",
    techStack: [
      getTechByName("React"),
      getTechByName("Vite.js"),
      getTechByName("Typescript"),
      getTechByName("Tailwind"),
      getTechByName("Framer Motion"),
      getTechByName("CSS"),
      getTechByName("Vitest"),
    ].filter(Boolean),
  },
  {
    title: "Minimalist Weather App 🌤️",
    description:
      "A clean, minimalist weather app that shows current conditions and forecasts using a public weather API.",
    image: "/projectImgs/weatherappimg.png",
    repo: "https://github.com/CodeByCalvin/weatherapp",
    demo: "https://github.com/CodeByCalvin/weatherapp",
    techStack: [
      getTechByName("React"),
      getTechByName("JavaScript"),
      getTechByName("APIs"),
      getTechByName("Bootstrap"),
      getTechByName("HTML"),
      getTechByName("CSS"),
    ].filter(Boolean),
  },
  {
    title: "Language Learning App 📚",
    description:
      "A full-stack language learning app using spaced repetition. Users create an account, pick a language, and track progress through vocabulary sessions.",
    image: "/projectImgs/languagelearningappimg.png",
    repo: "https://github.com/CodeByCalvin/languagelearningapp-frontend-",
    demo: "https://language-learning-app.onrender.com/",
    techStack: [
      getTechByName("React"),
      getTechByName("JavaScript"),
      getTechByName("Node.js"),
      getTechByName("MongoDB"),
      getTechByName("Express.js"),
      getTechByName("HTML"),
      getTechByName("CSS"),
      getTechByName("APIs"),
    ].filter(Boolean),
  },
  {
    title: "The Flower Collective 🪴",
    description:
      "An online store for a boutique flower shop, showcasing handcrafted arrangements and enabling customers to browse and order for any occasion.",
    image: "/projectImgs/flowercollectiveimg.png",
    repo: "https://github.com/CodeByCalvin/The-Flower-Collective-Website",
    demo: "https://theflowercollective.netlify.app/",
    techStack: [
      getTechByName("JavaScript"),
      getTechByName("HTML"),
      getTechByName("CSS"),
    ].filter(Boolean),
  },
] as Project[];

export const featured = projects.filter((p) => p.isFeatured);
export const archived = projects.filter((p) => !p.isFeatured);

export default projects;
