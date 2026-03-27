import { describe, it, expect } from "vitest";
import tech, { getTechByName } from "./techStack";

describe("techStack", () => {
  describe("tech array", () => {
    it("contains tech items", () => {
      expect(tech.length).toBeGreaterThan(0);
    });

    it("each item has required properties", () => {
      tech.forEach((item) => {
        expect(item).toHaveProperty("name");
        expect(item).toHaveProperty("colour");
        expect(item).toHaveProperty("colourLight");
        expect(item).toHaveProperty("colourDark");
        expect(item).toHaveProperty("logo");
      });
    });

    it("includes React", () => {
      const react = tech.find((t) => t.name === "React");
      expect(react).toBeDefined();
      expect(react!.colour).toBe("#149ECA");
    });
  });

  describe("getTechByName", () => {
    it("returns the correct tech item", () => {
      const result = getTechByName("React");
      expect(result).toBeDefined();
      expect(result!.name).toBe("React");
    });

    it("returns undefined for non-existent tech", () => {
      const result = getTechByName("NonExistent");
      expect(result).toBeUndefined();
    });

    it("is case-sensitive", () => {
      const result = getTechByName("react");
      expect(result).toBeUndefined();
    });
  });
});
