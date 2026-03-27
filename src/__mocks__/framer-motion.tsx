import { forwardRef, createElement } from "react";
import type { PropsWithChildren, Ref, ReactNode } from "react";

const motionPropNames = new Set([
  "initial", "animate", "exit", "variants", "custom",
  "whileInView", "viewport", "transition", "whileHover",
  "whileTap", "whileFocus", "whileDrag", "layoutId",
  "layout", "drag", "dragConstraints", "dragElastic",
  "dragMomentum", "onAnimationStart", "onAnimationComplete",
]);

function createMotionComponent(tag: string) {
  const Component = forwardRef(
    ({ children, ...props }: PropsWithChildren<Record<string, unknown>>, ref: Ref<unknown>) => {
      const htmlProps: Record<string, unknown> = { ref };
      for (const [key, value] of Object.entries(props)) {
        if (!motionPropNames.has(key)) {
          htmlProps[key] = value;
        }
      }
      return createElement(tag, htmlProps, children);
    }
  );
  Component.displayName = `motion.${tag}`;
  return Component;
}

export const motion = {
  div: createMotionComponent("div"),
  span: createMotionComponent("span"),
  p: createMotionComponent("p"),
  a: createMotionComponent("a"),
  button: createMotionComponent("button"),
  svg: createMotionComponent("svg"),
  img: createMotionComponent("img"),
  ul: createMotionComponent("ul"),
  li: createMotionComponent("li"),
  section: createMotionComponent("section"),
  header: createMotionComponent("header"),
  footer: createMotionComponent("footer"),
  nav: createMotionComponent("nav"),
  h1: createMotionComponent("h1"),
  h2: createMotionComponent("h2"),
  h3: createMotionComponent("h3"),
};

export function AnimatePresence({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export function LayoutGroup({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

const mockMotionValue = {
  get: () => 0,
  set: () => {},
  on: () => () => {},
  onChange: () => () => {},
  destroy: () => {},
};

export const useScroll = () => ({
  scrollY: mockMotionValue,
  scrollYProgress: mockMotionValue,
  scrollX: mockMotionValue,
  scrollXProgress: mockMotionValue,
});

export const useTransform = () => mockMotionValue;
export const useMotionValue = () => mockMotionValue;
export const useSpring = () => mockMotionValue;
export const useAnimation = () => ({ start: () => Promise.resolve(), stop: () => {} });
export const useInView = () => true;
