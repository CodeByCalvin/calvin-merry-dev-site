import { useRef, useCallback } from "react";
import type { TechItem } from "../types";

interface TechPillProps {
  tech: TechItem;
}

export default function TechPill({ tech }: TechPillProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isDark = document.documentElement.classList.contains("dark");
  const gradient = isDark
    ? `linear-gradient(135deg, ${tech.colourDark}, ${tech.colour})`
    : `linear-gradient(135deg, ${tech.colour}, ${tech.colourLight})`;

  const handleMove = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <span
      ref={ref}
      className="tech-pill"
      style={{ backgroundImage: gradient }}
      onMouseMove={handleMove}
    >
      <img src={tech.logo} alt="" className="tech-logo" />
      {tech.name}
    </span>
  );
}
