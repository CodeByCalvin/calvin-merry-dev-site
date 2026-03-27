import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeUp } from "../utils/animations";

const typingSequence = [
  "React", 700,
  "Typescript", 700,
  "Javascript", 700,
  "Python", 700,
  "Django", 700,
  "Azure DevOps", 700,
  "Terraform", 700,
  "Playwright", 700,
] as const;

interface HeroContentProps {
  contentY: MotionValue<number>;
}

export default function HeroContent({ contentY }: HeroContentProps) {
  return (
    <motion.div className="hero-content" style={{ y: contentY }}>
      <motion.div
        className="text-with-box"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
      >
        <div className="intro-text">Hi 👋🏻</div>
        <div className="coloured-box" style={{ width: "105%" }} />
      </motion.div>

      <motion.div
        className="text-with-box"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeUp}
      >
        <div className="intro-text name-text">My name is Calvin</div>
        <div className="coloured-box" style={{ width: "105%" }} />
      </motion.div>

      <motion.div
        className="hero-body"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeUp}
      >
        <div className="text-with-box">
          <div className="body-text">I'm a full-stack software engineer</div>
          <div className="coloured-box" style={{ width: "105%" }} />
        </div>
        <div className="text-with-box">
          <div className="body-text">Sheffield, UK</div>
          <div className="coloured-box" style={{ width: "105%" }} />
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
          sequence={[...typingSequence]}
          className="animated-text"
          repeat={Infinity}
          cursor={false}
        />
        <div
          className="coloured-box"
          style={{ width: "105%", top: "59%", height: "2rem" }}
        />
      </motion.div>
    </motion.div>
  );
}
