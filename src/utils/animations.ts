import type { Variants } from "framer-motion";

export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const springBounce = { type: "spring" as const, stiffness: 400, damping: 17 };
export const springSnappy = { type: "spring" as const, stiffness: 400, damping: 15 };

export const hoverPop = { scale: 1.05, y: -2 };
export const tapShrink = { scale: 0.97 };
export const hoverGrow = { scale: 1.15 };
export const tapSquish = { scale: 0.92 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: easeOut },
  }),
};

export const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: easeOut },
};

export const iconSwap = {
  initial: { scale: 0, rotate: -180, opacity: 0 },
  animate: { scale: 1, rotate: 0, opacity: 1 },
  exit: { scale: 0, rotate: 180, opacity: 0 },
  transition: { duration: 0.25 },
};
