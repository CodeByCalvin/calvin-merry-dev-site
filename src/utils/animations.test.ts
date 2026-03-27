import { describe, it, expect } from "vitest";
import {
  fadeUp,
  scrollReveal,
  iconSwap,
  easeOut,
  springBounce,
  springSnappy,
  hoverPop,
  tapShrink,
  hoverGrow,
  tapSquish,
} from "./animations";

describe("animations", () => {
  describe("easeOut", () => {
    it("is a 4-element cubic bezier array", () => {
      expect(easeOut).toHaveLength(4);
      easeOut.forEach((v) => expect(typeof v).toBe("number"));
    });
  });

  describe("springBounce", () => {
    it("has spring type with stiffness and damping", () => {
      expect(springBounce.type).toBe("spring");
      expect(springBounce.stiffness).toBe(400);
      expect(springBounce.damping).toBe(17);
    });
  });

  describe("springSnappy", () => {
    it("has spring type with stiffness and damping", () => {
      expect(springSnappy.type).toBe("spring");
      expect(springSnappy.stiffness).toBe(400);
      expect(springSnappy.damping).toBe(15);
    });
  });

  describe("hoverPop", () => {
    it("scales up and moves up", () => {
      expect(hoverPop.scale).toBe(1.05);
      expect(hoverPop.y).toBe(-2);
    });
  });

  describe("tapShrink", () => {
    it("scales down", () => {
      expect(tapShrink.scale).toBe(0.97);
    });
  });

  describe("hoverGrow", () => {
    it("scales up", () => {
      expect(hoverGrow.scale).toBe(1.15);
    });
  });

  describe("tapSquish", () => {
    it("scales down", () => {
      expect(tapSquish.scale).toBe(0.92);
    });
  });

  describe("fadeUp", () => {
    it("has hidden and visible variants", () => {
      expect(fadeUp).toHaveProperty("hidden");
      expect(fadeUp).toHaveProperty("visible");
    });

    it("hidden state has opacity 0 and y offset", () => {
      expect(fadeUp.hidden).toEqual({ opacity: 0, y: 30 });
    });

    it("visible returns animated state with delay based on index", () => {
      const visibleFn = fadeUp.visible as (i: number) => Record<string, unknown>;
      const result = visibleFn(2);
      expect(result.opacity).toBe(1);
      expect(result.y).toBe(0);
    });
  });

  describe("scrollReveal", () => {
    it("has initial, whileInView, viewport, and transition properties", () => {
      expect(scrollReveal).toHaveProperty("initial");
      expect(scrollReveal).toHaveProperty("whileInView");
      expect(scrollReveal).toHaveProperty("viewport");
      expect(scrollReveal).toHaveProperty("transition");
    });

    it("starts hidden and animates to visible", () => {
      expect(scrollReveal.initial).toEqual({ opacity: 0, y: 40 });
      expect(scrollReveal.whileInView).toEqual({ opacity: 1, y: 0 });
    });
  });

  describe("iconSwap", () => {
    it("has initial, animate, exit, and transition properties", () => {
      expect(iconSwap).toHaveProperty("initial");
      expect(iconSwap).toHaveProperty("animate");
      expect(iconSwap).toHaveProperty("exit");
      expect(iconSwap).toHaveProperty("transition");
    });
  });
});
