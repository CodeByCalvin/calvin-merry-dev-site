import { useState, useCallback, useRef, useEffect, Fragment } from "react";
import { motion, AnimatePresence, LayoutGroup, useInView } from "framer-motion";
import { Element } from "react-scroll";
import { easeOut } from "../utils/animations";
import Projects from "./Projects";
import About from "./About";
import "../css/sectionSwitcher.css";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
] as const;

type SectionId = (typeof sections)[number]["id"];

const contentVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const SWIPE_THRESHOLD = 30;
const SWIPE_COOLDOWN = 600;

export default function SectionSwitcher() {
  const [activeSection, setActiveSection] = useState<SectionId>("projects");
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSwipeTime = useRef(0);
  const activeSectionRef = useRef(activeSection);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: "some" });
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(true);
      window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = hasScrolled && isInView;

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const switchTo = useCallback((id: SectionId, dir: number) => {
    setDirection(dir);
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let deltaAccum = 0;
    let resetTimer: ReturnType<typeof setTimeout>;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) * 0.8) return;
      if (Math.abs(e.deltaX) < 3) return;

      const now = Date.now();
      if (now - lastSwipeTime.current < SWIPE_COOLDOWN) return;

      deltaAccum += e.deltaX;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => { deltaAccum = 0; }, 200);

      if (Math.abs(deltaAccum) < SWIPE_THRESHOLD) return;

      const currentIndex = sections.findIndex(
        (s) => s.id === activeSectionRef.current
      );

      if (deltaAccum > 0 && currentIndex < sections.length - 1) {
        e.preventDefault();
        lastSwipeTime.current = now;
        deltaAccum = 0;
        switchTo(sections[currentIndex + 1].id, 1);
      } else if (deltaAccum < 0 && currentIndex > 0) {
        e.preventDefault();
        lastSwipeTime.current = now;
        deltaAccum = 0;
        switchTo(sections[currentIndex - 1].id, -1);
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      clearTimeout(resetTimer);
    };
  }, [switchTo]);

  const handleSwitch = useCallback(
    (id: SectionId) => {
      if (id === activeSectionRef.current) return;
      const currentIndex = sections.findIndex(
        (s) => s.id === activeSectionRef.current
      );
      const newIndex = sections.findIndex((s) => s.id === id);
      switchTo(id, newIndex > currentIndex ? 1 : -1);
    },
    [switchTo]
  );

  return (
    <Element name="projects">
      <div className="section-switcher" id="projects">
        <div ref={sectionRef} className="scroll-trigger" />
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={show ? { duration: 0.5, ease: easeOut } : { duration: 0 }}
        >
        <LayoutGroup>
          <motion.div className="section-tabs">
            {sections.map((section, i) => (
              <Fragment key={section.id}>
                {i > 0 && <div className="tab-divider" />}
                <button
                  className={`section-tab ${activeSection === section.id ? "active" : ""}`}
                  onClick={() => handleSwitch(section.id)}
                >
                  <div className="text-with-box">
                    <span className="intro-text">{section.label}</span>
                    {activeSection === section.id && (
                      <motion.div
                        className="coloured-box"
                        layoutId="tab-indicator"
                        style={{ width: "110%" }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </div>
                </button>
              </Fragment>
            ))}
          </motion.div>
        </LayoutGroup>

        <div className="section-content-area" ref={containerRef}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSection}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="section-content"
            >
              {activeSection === "projects" && <Projects />}
              {activeSection === "about" && <About />}
            </motion.div>
          </AnimatePresence>
        </div>
        </motion.div>
      </div>
    </Element>
  );
}
