import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import type { MotionValue } from "framer-motion";
import { fadeUp } from "../../utils/animations";

interface HeroContentProps {
  contentY: MotionValue<number>;
}

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

function TextWithBox({ children, custom }: { children: React.ReactNode; custom: number }) {
  return (
    <motion.div className="text-with-box" initial="hidden" animate="visible" custom={custom} variants={fadeUp}>
      {children}
      <div className="coloured-box" style={{ width: "105%" }} />
    </motion.div>
  );
}

export default function HeroContent({ contentY }: HeroContentProps) {
  return (
    <motion.div className="hero-content" style={{ y: contentY }}>
      <TextWithBox custom={0}>
        <div className="intro-text">Hi 👋🏻</div>
      </TextWithBox>

      <TextWithBox custom={1}>
        <div className="intro-text name-text">My name is Calvin</div>
      </TextWithBox>

      <motion.div className="hero-body" initial="hidden" animate="visible" custom={2} variants={fadeUp}>
        <div className="text-with-box">
          <div className="body-text">I'm a full-stack software engineer</div>
          <div className="coloured-box" style={{ width: "105%" }} />
        </div>
        <div className="text-with-box">
          <div className="body-text">Sheffield, UK</div>
          <div className="coloured-box" style={{ width: "105%" }} />
        </div>
      </motion.div>

      <motion.div className="typing-container" initial="hidden" animate="visible" custom={3} variants={fadeUp}>
        <TypeAnimation
          sequence={[...typingSequence]}
          className="animated-text"
          repeat={Infinity}
          cursor={false}
        />
        <div className="coloured-box" style={{ width: "105%", top: "59%", height: "2rem" }} />
      </motion.div>
    </motion.div>
  );
}
