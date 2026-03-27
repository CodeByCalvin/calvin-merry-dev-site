import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../css/projects.css";

export default function Projects() {
  const tech = [
    {
      name: "React",
      colour: "#149ECA",
      colourLight: "#4db8d9",
      colourDark: "#0d7a9f",
      logo: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "Typescript",
      colour: "#3178C6",
      colourLight: "#5599dd",
      colourDark: "#265ba0",
      logo: "https://skillicons.dev/icons?i=typescript",
    },
    {
      name: "JavaScript",
      colour: "#D4A017",
      colourLight: "#E5B84A",
      colourDark: "#a67c0f",
      logo: "https://skillicons.dev/icons?i=javascript",
    },
    {
      name: "HTML",
      colour: "#E34F26",
      colourLight: "#f26b45",
      colourDark: "#b33d1c",
      logo: "https://skillicons.dev/icons?i=html",
    },
    {
      name: "CSS",
      colour: "#1572B6",
      colourLight: "#4186d6",
      colourDark: "#0f588c",
      logo: "https://skillicons.dev/icons?i=css",
    },
    {
      name: "Tailwind",
      colour: "#06B6D4",
      colourLight: "#38bdf8",
      colourDark: "#0891a8",
      logo: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      name: "Vite.js",
      colour: "#646CFF",
      colourLight: "#8891ff",
      colourDark: "#4d55cc",
      logo: "https://skillicons.dev/icons?i=vite",
    },
    {
      name: "Node.js",
      colour: "#689F63",
      colourLight: "#8cb883",
      colourDark: "#507d4a",
      logo: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      name: "Express.js",
      colour: "#000000",
      colourLight: "#333333",
      colourDark: "#1a1a1a",
      logo: "https://skillicons.dev/icons?i=express",
    },
    {
      name: "MongoDB",
      colour: "#47A248",
      colourLight: "#6bb66f",
      colourDark: "#357a38",
      logo: "https://skillicons.dev/icons?i=mongodb",
    },
    {
      name: "APIs",
      colour: "#BDBDBD",
      colourLight: "#d1d1d1",
      colourDark: "#8e8e8e",
      logo: "/projectImgs/apilogo.png",
    },
    {
      name: "Bootstrap",
      colour: "#7952B3",
      colourLight: "#9b75d1",
      colourDark: "#5c3e8a",
      logo: "https://skillicons.dev/icons?i=bootstrap",
    },
    {
      name: "Material UI",
      colour: "#0081CB",
      colourLight: "#339fe5",
      colourDark: "#00629a",
      logo: "https://skillicons.dev/icons?i=materialui",
    },
    {
      name: "IndexedDB",
      colour: "#FF6B35",
      colourLight: "#ff8f62",
      colourDark: "#cc5529",
      logo: "/projectImgs/indexeddblogo.svg",
    },
  ];

  const getTechByName = (name) => {
    return tech.find((t) => t.name === name);
  };

  const projects = [
    {
      title: "BardBox 🎵",
      description:
        "A tool that allows Dungeon Masters to bring their D&D games to life by organising their music into playlists, tagging, creating soundscape presets and much more.",
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
      title: "Calvin's Portfolio Website 💻",
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
    <div className="projects">
      <div className="text-with-box">
        <div className="intro-text">Projects</div>
        <div className="coloured-box" style={{ width: "110%" }}></div>
      </div>
      
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectCard key={project.title} projects={project} />;
        })}
      </div>
    </div>
  );
}
