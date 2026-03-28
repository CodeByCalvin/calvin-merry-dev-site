import { motion } from "framer-motion";
import { scrollReveal, hoverPop, tapShrink, springBounce } from "../utils/animations";
import TechPill from "./TechPill";
import type { Project } from "../types";
import "../css/projectCard.css";

interface ProjectCardProps {
  project: Project;
}

function handleBtnMove(e: React.MouseEvent<HTMLAnchorElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    image,
    repo,
    demo,
    techStack,
    projectIncomplete,
    isNew,
  } = project;

  return (
    <motion.div className="project-card-wrapper" {...scrollReveal}>
      <div className={`project-card ${projectIncomplete ? "blur-card" : ""}`}>
        {isNew && <span className="new-badge"><span>New</span></span>}

        <div className="card-image-container">
          <img
            className={`project-img ${projectIncomplete ? "blur-img" : ""}`}
            src={image}
            alt={title}
            loading="lazy"
          />
          {projectIncomplete && (
            <span className="project-status-badge">In development</span>
          )}
        </div>

        <h2 className="card-title">{title}</h2>

        <div className="tech-stack-container">
          {techStack.map((tech) => (
            <TechPill key={tech.name} tech={tech} />
          ))}
        </div>

        <p className="description">{description}</p>

        <div className="cta-group">
          <motion.a
            href={demo}
            className="btn-card-cta btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={hoverPop}
            whileTap={tapShrink}
            transition={springBounce}
            onMouseMove={handleBtnMove}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live
          </motion.a>
          <motion.a
            href={repo}
            className="btn-card-cta btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={hoverPop}
            whileTap={tapShrink}
            transition={springBounce}
            onMouseMove={handleBtnMove}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
            </svg>
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
