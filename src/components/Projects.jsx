import React from "react";
import ProjectCard from "../components/ProjectCard";
import { getTechByName } from "../data/techStack";
import "../css/projects.css";

export default function Projects() {

  const projects = [
    {
      title: "BardBox 🎵",
      description:
        "A tool that allows Dungeon Masters to bring their D&D games to life by organising their music into playlists, tagging, creating soundscape presets and much more.",
      isNew: true,
      image: "/projectImgs/bardboximg.jpeg",
      repo: "https://github.com/CodeByCalvin/bardbox-public",
      demo: "https://www.bardbox.app/",
      techStack: [
        getTechByName("React"),
        getTechByName("Vite.js"),
        getTechByName("Typescript"),
        getTechByName("Tailwind"),
        getTechByName("IndexedDB"),
        getTechByName("APIs"),
      ],
    },
    {
      title: "Portfolio Site 💻",
      description:
        "This is my portfolio website, which I built using React and Material UI. I wanted to create a website that was simple, clean, and easy to navigate. I also wanted to showcase some of my projects and skills.",
      image: "/projectImgs/devportfolioimg.png",
      repo: "https://github.com/CodeByCalvin/Calvin-Merry-Developer-Portfolio-React-",
      demo: "https://calvinmerry.dev/",
      techStack: [
        getTechByName("React"),
        getTechByName("Vite.js"),
        getTechByName("JavaScript"),
        getTechByName("HTML"),
        getTechByName("CSS"),
        getTechByName("Material UI"),
      ],
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
      ],
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
      ],
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
      ],
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => {
        return <ProjectCard key={project.title} projects={project} />;
      })}
    </div>
  );
}
