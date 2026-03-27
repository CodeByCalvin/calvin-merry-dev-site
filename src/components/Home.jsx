import React, { useRef } from "react";
import "../css/home.css";
import "../App.css";
import profilePic from "../imgs/profile-picture.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "../utils/animations";
import MeshGradient from "./MeshGradient";
import { Element } from "react-scroll";

const navItems = [
  {
    href: "https://github.com/CodeByCalvin",
    label: "github",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/calvin-merry/",
    label: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
    ),
  },
  {
    href: "https://www.dropbox.com/scl/fi/8o4ov6gkshljwxgpbfa68/Calvin-Merry-CV.pdf?rlkey=s8g128hnsb5yy7smdzmvgo4zp&dl=0",
    label: "cv",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Profile pic moves slower (parallax)
  const sidebarY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  // Text moves at normal-ish speed
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <Element name="home">
    <div className="hero-section" ref={heroRef}>
      <MeshGradient />
      <div className="container hero-container">
        <div className="hero-layout">
          <motion.div
            className="hero-sidebar"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ y: sidebarY }}
          >
          <div className="profile-wrapper">
            <div className="profile-pic-container">
              <div className="profile-glow" />
              <img src={profilePic} alt="Profile" className="profile-picture" />
            </div>

            <div className="profile-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="hero-content" style={{ y: contentY }}>
          <motion.div
            className="text-with-box"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <div className="intro-text">Hi 👋🏻</div>
            <div className="coloured-box" style={{ width: "105%" }}></div>
          </motion.div>
          <motion.div
            className="text-with-box"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            <div className="intro-text name-text">
              My name is Calvin
            </div>
            <div className="coloured-box" style={{ width: "105%" }}></div>
          </motion.div>

          <motion.div
            className="hero-body"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            <div className="text-with-box">
              <div className="body-text">
                I'm a full-stack software engineer
              </div>
              <div className="coloured-box" style={{ width: "105%" }}></div>
            </div>
            <div className="text-with-box">
              <div className="body-text">Sheffield, UK</div>
              <div className="coloured-box" style={{ width: "105%" }}></div>
            </div>
          </motion.div>

          <motion.div
            className="typing-container"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <TypeAnimation
              sequence={[
                "React",
                700,
                "Typescript",
                700,
                "Javascript",
                700,
                "Python",
                700,
                "Django",
                700,
                "Azure DevOps",
                700,
                "Terraform",
                700,
                "Playwright",
                700,
              ]}
              className="animated-text"
              repeat={Infinity}
              cursor={false}
            />
            <div
              className="coloured-box"
              style={{ width: "105%", top: "59%", height: "2rem" }}
            ></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>

      </div>
    </div>
    </Element>
  );
}
