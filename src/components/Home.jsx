import React, { useRef } from "react";
import "../css/home.css";
import "../App.css";
import CvIcon from "../imgs/cv-icon.svg?react";
import profilePic from "../imgs/profile-picture.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, hoverGrow, tapSquish } from "../utils/animations";
import MeshGradient from "./MeshGradient";
import { Element } from "react-scroll";

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
          <img src={profilePic} alt="Profile" className="profile-picture" />

          <nav className="nav-links">
            <motion.a
              href="https://github.com/CodeByCalvin"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              whileHover={hoverGrow}
              whileTap={tapSquish}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
              <span>github</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/calvin-merry/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              whileHover={hoverGrow}
              whileTap={tapSquish}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
              <span>linkedin</span>
            </motion.a>
            <motion.a
              href="https://www.dropbox.com/scl/fi/8o4ov6gkshljwxgpbfa68/Calvin-Merry-CV.pdf?rlkey=s8g128hnsb5yy7smdzmvgo4zp&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              whileHover={hoverGrow}
              whileTap={tapSquish}
            >
              <CvIcon width="20" height="20" />
              <span>cv</span>
            </motion.a>
          </nav>
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
      </div>
    </div>
    </Element>
  );
}
