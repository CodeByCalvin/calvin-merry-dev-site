import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/footer.css";
// Footer arrow animation is kept inline since direction is dynamic

export default function Footer(props) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      setIsScrolledToBottom(
        scrollPosition + windowHeight >= documentHeight - 10
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="home-footer"
      onClick={() =>
        isScrolledToBottom ? props.scrollToTop() : props.scrollToProjects()
      }
      whileHover={{ backgroundColor: "var(--footer-hover)" }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        <motion.svg
          key={isScrolledToBottom ? "up" : "down"}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="scroll-down-btn"
          initial={{ y: isScrolledToBottom ? 8 : -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: isScrolledToBottom ? -8 : 8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isScrolledToBottom ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
          />
        </motion.svg>
      </AnimatePresence>
    </motion.div>
  );
}
