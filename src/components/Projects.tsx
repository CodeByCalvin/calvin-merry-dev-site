import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { getTechByName } from "../data/techStack";
import type { Project } from "../types";
import "../css/projects.css";

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
      "Welcome to The Flower Collective's online store! We are a boutique flower shop that provides handcrafted, unique flower arrangements for all occasions. Our aim is to bring joy and beauty into people's lives through the art of floral design.",
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
      "This is a full-stack language learning app which uses spaced repetition to help users learn a new language. The user can create an account, choose a language to learn, and then start learning. The app will track the user's progress and show them their score.",
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
      "Welcome to The Flower Collective's online store! We are a boutique flower shop that provides handcrafted, unique flower arrangements for all occasions. Our aim is to bring joy and beauty into people's lives through the art of floral design.",
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

const featured = projects.filter((p) => p.isFeatured);
const archived = projects.filter((p) => !p.isFeatured);

export default function Projects() {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="projects-section">
      <div className="projects-container">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {archived.length > 0 && (
        <div className="archive-section">
          <button
            className="archive-toggle"
            onClick={() => setShowArchive((prev) => !prev)}
          >
            <span className="archive-toggle-text">
              Project Archive
              <span className="archive-count">{archived.length}</span>
            </span>
            <svg
              className={`archive-chevron ${showArchive ? "open" : ""}`}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <AnimatePresence>
            {showArchive && (
              <motion.div
                className="archive-grid"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {archived.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
