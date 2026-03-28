import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { getTechByName } from "../data/techStack";
import TechPill from "./TechPill";
import type { SkillCategory } from "../types";
import "../css/about.css";

interface TimelineEvent {
  year: string;
  title: string;
  org: string;
  description: string;
  type: "work" | "education" | "other";
}

const skillCategories: SkillCategory[] = [
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

const timeline: TimelineEvent[] = [
  {
    year: "2025 – Present",
    title: "Software Engineer",
    org: "CGI",
    description:
      "Primarily working with Django and Vite.js (React) apps, Azure DevOps.",
    type: "work",
  },
  {
    year: "2023 – 2025",
    title: "Software Engineer & Squad Lead",
    org: "BJSS",
    description:
      "Software engineer and squad lead. Django and Vite.js (React) apps, Azure DevOps.",
    type: "work",
  },
  {
    year: "2023",
    title: "Full-Stack Developer Bootcamp",
    org: "The Developer Academy",
    description:
      "Intensive full-stack programme covering React, Node.js, databases, and modern web development.",
    type: "education",
  },
  {
    year: "2019 – 2023",
    title: "Primary School Teacher",
    org: "Lower Meadow Primary School",
    description:
      "Worked in KS2 within a deprived area of Sheffield. Lead Science across key stages.",
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
    description:
      "Master of Arts in Photography, first-class degree.",
    type: "education",
  },
];

const typeIcons: Record<TimelineEvent["type"], string> = {
  work: "💼",
  education: "🎓",
  other: "✦",
};

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
        I'm a full-stack software engineer currently working at CGI in the UK.
        Day-to-day I'm mostly in React, TypeScript, Python, Django, and Azure
        DevOps.
      </motion.p>
      <motion.p
        className="about-text"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeUp}
      >
        Outside of work I'm building{" "}
        <a href="https://bardbox.app" target="_blank" rel="noopener noreferrer" className="about-link">
          BardBox
        </a>
        , a D&amp;D music app that lets users create seamless soundscapes with
        custom tags, scenes, and filtering.
      </motion.p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial="hidden"
            animate="visible"
            custom={index + 2}
            variants={fadeUp}
          >
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((name) => {
                const tech = getTechByName(name);
                return tech ? <TechPill key={name} tech={tech} /> : null;
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="timeline">
        <h2 className="timeline-heading">Journey</h2>
        <div className="timeline-line" />
        {timeline.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`timeline-item ${isLeft ? "left" : "right"}`}
              initial={{ opacity: 0, x: isLeft ? 80 : -80, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                mass: 0.8,
                delay: 0.05,
              }}
            >
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.15,
                }}
              >
                <span className="timeline-dot-icon">{typeIcons[event.type]}</span>
              </motion.div>
              <div className="timeline-card">
                <span className="timeline-year">{event.year}</span>
                <h3 className="timeline-title">{event.title}</h3>
                <span className="timeline-org">{event.org}</span>
                <p className="timeline-desc">{event.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
