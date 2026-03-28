import { useRef, useEffect, useState } from "react";
import type { TechItem } from "../types";

interface TechPillProps {
  tech: TechItem;
}

function useIsDark() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default function TechPill({ tech }: TechPillProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isDark = useIsDark();
  const gradient = isDark
    ? `linear-gradient(135deg, ${tech.colourDark}, ${tech.colour})`
    : `linear-gradient(135deg, ${tech.colour}, ${tech.colourLight})`;

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

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
