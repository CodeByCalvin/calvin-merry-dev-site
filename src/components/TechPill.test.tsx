import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("TechPill", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
  });

  it("renders the tech name", async () => {
    const { default: TechPill } = await import("./TechPill");
    const tech = {
      name: "React",
      colour: "#149ECA",
      colourLight: "#4db8d9",
      colourDark: "#0d7a9f",
      logo: "react.svg",
    };
    render(<TechPill tech={tech} />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders the tech logo", async () => {
    const { default: TechPill } = await import("./TechPill");
    const tech = {
      name: "React",
      colour: "#149ECA",
      colourLight: "#4db8d9",
      colourDark: "#0d7a9f",
      logo: "react.svg",
    };
    const { container } = render(<TechPill tech={tech} />);
    const img = container.querySelector("img.tech-logo");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "react.svg");
  });

  it("applies light gradient in light mode", async () => {
    const { default: TechPill } = await import("./TechPill");
    const tech = {
      name: "React",
      colour: "#149ECA",
      colourLight: "#4db8d9",
      colourDark: "#0d7a9f",
      logo: "react.svg",
    };
    const { container } = render(<TechPill tech={tech} />);
    const pill = container.querySelector(".tech-pill");
    expect(pill).toHaveStyle({
      backgroundImage: "linear-gradient(135deg, #149ECA, #4db8d9)",
    });
  });

  it("applies dark gradient in dark mode", async () => {
    document.documentElement.classList.add("dark");
    // Need to re-import to pick up the dark class
    vi.resetModules();
    const { default: TechPill } = await import("./TechPill");
    const tech = {
      name: "React",
      colour: "#149ECA",
      colourLight: "#4db8d9",
      colourDark: "#0d7a9f",
      logo: "react.svg",
    };
    const { container } = render(<TechPill tech={tech} />);
    const pill = container.querySelector(".tech-pill");
    expect(pill).toHaveStyle({
      backgroundImage: "linear-gradient(135deg, #0d7a9f, #149ECA)",
    });
  });

  it("has the tech-pill class", async () => {
    const { default: TechPill } = await import("./TechPill");
    const tech = {
      name: "React",
      colour: "#149ECA",
      colourLight: "#4db8d9",
      colourDark: "#0d7a9f",
      logo: "react.svg",
    };
    const { container } = render(<TechPill tech={tech} />);
    expect(container.querySelector(".tech-pill")).toBeInTheDocument();
  });
});
