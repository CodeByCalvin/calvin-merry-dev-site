import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Element } from "react-scroll";
import MeshGradient from "./MeshGradient";
import HeroSidebar from "./HeroSidebar";
import HeroContent from "./HeroContent";
import "../css/home.css";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

    const sidebarY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <Element name="home">
      <div className="hero-section" ref={heroRef}>
        <MeshGradient />
        <div className="container hero-container">
          <div className="hero-layout">
            <HeroSidebar sidebarY={sidebarY} />
            <HeroContent contentY={contentY} />
          </div>
        </div>
      </div>
    </Element>
  );
}
