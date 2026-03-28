import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import socialLinks from "../../data/socialLinks";
import profilePic from "../../imgs/profile-picture.jpg";

interface HeroSidebarProps {
  sidebarY: MotionValue<number>;
}

export default function HeroSidebar({ sidebarY }: HeroSidebarProps) {
  return (
    <motion.div className="hero-sidebar" initial="hidden" animate="visible" variants={fadeUp} style={{ y: sidebarY }}>
      <div className="profile-wrapper">
        <div className="profile-pic-container">
          <div className="profile-glow" />
          <img src={profilePic} alt="Profile" className="profile-picture" />
        </div>

        <div className="profile-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="profile-link">
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
