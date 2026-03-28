import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featured, archived } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";

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
                className="archive-grid-wrapper"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="archive-grid">
                  {archived.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
