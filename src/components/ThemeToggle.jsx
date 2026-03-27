import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { iconSwap, springSnappy } from "../utils/animations";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.85, rotate: theme === "dark" ? -90 : 90 }}
      transition={springSnappy}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          {...iconSwap}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
