/**
 * Shared animation variants and transition configs for framer-motion.
 */

// Easing curves
export const easeOut = [0.22, 1, 0.36, 1];

// Reusable spring config for buttons / interactive elements
export const springBounce = { type: "spring", stiffness: 400, damping: 17 };
export const springSnappy = { type: "spring", stiffness: 400, damping: 15 };

// Hover / tap presets
export const hoverPop = { scale: 1.05, y: -2 };
export const tapShrink = { scale: 0.97 };
export const hoverGrow = { scale: 1.15 };
export const tapSquish = { scale: 0.92 };

// Fade-up variant (supports stagger via custom index)
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: easeOut },
  }),
};

// Scroll-reveal variant for cards / sections
export const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: easeOut },
};

// Icon swap (theme toggle, footer arrow, etc.)
export const iconSwap = {
  initial: { scale: 0, rotate: -180, opacity: 0 },
  animate: { scale: 1, rotate: 0, opacity: 1 },
  exit: { scale: 0, rotate: 180, opacity: 0 },
  transition: { duration: 0.25 },
};
