import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/footer.css";

interface FooterProps {
  scrollToTop: () => void;
  scrollToProjects: () => void;
}

export default function Footer({ scrollToTop, scrollToProjects }: FooterProps) {
  const [isPastProjects, setIsPastProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        const rect = projectsEl.getBoundingClientRect();
        setIsPastProjects(rect.top < window.innerHeight * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isPastProjects) {
      scrollToTop();
    } else {
      scrollToProjects();
    }
  };

  return (
    <motion.div
      className="home-footer"
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        <motion.svg
          key={isPastProjects ? "up" : "down"}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="scroll-down-btn"
          initial={{ y: isPastProjects ? 8 : -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: isPastProjects ? -8 : 8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isPastProjects ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
          />
        </motion.svg>
      </AnimatePresence>
    </motion.div>
  );
}
