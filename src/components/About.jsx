import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { getTechByName } from "../data/techStack";
import "../css/about.css";

const skillCategories = [
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
    skills: ["Azure DevOps", "Terraform", "Playwright", "Git"],
  },
];

function TechPill({ tech }) {
  const isDark = document.documentElement.classList.contains("dark");
  const gradient = isDark
    ? `linear-gradient(135deg, ${tech.colourDark}, ${tech.colour})`
    : `linear-gradient(135deg, ${tech.colour}, ${tech.colourLight})`;

  return (
    <span className="tech-pill" style={{ backgroundImage: gradient }}>
      <img src={tech.logo} alt="" className="tech-logo" />
      {tech.name}
    </span>
  );
}

export default function About() {
  return (
    <div className="about-section">
      <motion.p
        className="about-text"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
      >
        I'm a full-stack software engineer based in Sheffield, UK. I love
        building things that live on the web — from thoughtfully designed
        interfaces to robust backend systems.
      </motion.p>
      <motion.p
        className="about-text"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeUp}
      >
        My day-to-day involves working with React, TypeScript, Python, and
        Azure, but I'm always picking up new tools and technologies. I care
        about clean code, good UX, and shipping things that actually work.
      </motion.p>

      <div className="skills-grid">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial="hidden"
            animate="visible"
            custom={i + 2}
            variants={fadeUp}
          >
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((name) => {
                const tech = getTechByName(name);
                return tech ? (
                  <TechPill key={name} tech={tech} />
                ) : null;
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
