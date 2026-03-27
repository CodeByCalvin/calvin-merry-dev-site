import type { TechItem } from "../types";

interface TechPillProps {
  tech: TechItem;
}

export default function TechPill({ tech }: TechPillProps) {
  const isDark = document.documentElement.classList.contains("dark");
  const gradient = isDark
    ? `linear-gradient(135deg, ${tech.colourDark}, ${tech.colour})`
    : `linear-gradient(135deg, ${tech.colour}, ${tech.colourLight})`;

  return (
    <span className="tech-pill" style={{ backgroundImage: gradient }}>
      <img src={tech.logo} alt="" className="tech-logo" />
      {tech.name}
    </span>
  );
}
