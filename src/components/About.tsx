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
      "Building custom CMS features, data reports, and health assessment tools. Implementing A/B testing frameworks with Adobe Target.",
    type: "work",
  },
  {
    year: "2023 – 2025",
    title: "Software Engineer & Squad Lead",
    org: "BJSS",
    description:
      "Led migration of Azure search to database queries on high-traffic sites. Drove accessibility to WCAG compliance. Managed DevOps pipelines and line-managed a team.",
    type: "work",
  },
  {
    year: "2023",
    title: "Full-Stack Developer Bootcamp",
    org: "The Developer Academy",
    description:
      "Intensive full-stack programme covering React, Node.js, databases, and modern web development practices.",
    type: "education",
  },
  {
    year: "2019 – 2023",
    title: "Primary School Teacher",
    org: "Lower Meadow Primary School",
    description:
      "Led curriculum development across multiple key stages. Worked with external agencies to create bespoke SEN and mental health provision.",
    type: "other",
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
      "Produced digital photo and video content for clients including Sheffield universities and music artists.",
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
