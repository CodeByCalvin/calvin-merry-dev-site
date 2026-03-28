import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("../data/techStack", () => ({
  getTechByName: (name: string) => ({
    name,
    colour: "#000",
    colourLight: "#333",
    colourDark: "#111",
    logo: `https://example.com/${name}.svg`,
  }),
}));

vi.mock("./TechPill", () => ({
  default: ({ tech }: { tech: { name: string } }) => (
    <span data-testid="tech-pill">{tech.name}</span>
  ),
}));

describe("About", () => {
  it("renders the about text paragraphs", async () => {
    const { default: About } = await import("./About");
    render(<About />);
    expect(screen.getByText(/full-stack software engineer currently working at CGI/i)).toBeInTheDocument();
    expect(screen.getByText(/BardBox/i)).toBeInTheDocument();
  });

  it("renders all skill categories", async () => {
    const { default: About } = await import("./About");
    render(<About />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("DevOps & Testing")).toBeInTheDocument();
  });

  it("renders tech pills for skills", async () => {
    const { default: About } = await import("./About");
    render(<About />);
    const pills = screen.getAllByTestId("tech-pill");
    expect(pills.length).toBeGreaterThan(0);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
  });

  it("renders the timeline heading", async () => {
    const { default: About } = await import("./About");
    render(<About />);
    expect(screen.getByText("Journey")).toBeInTheDocument();
  });

  it("renders timeline events", async () => {
    const { default: About } = await import("./About");
    render(<About />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("CGI")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer & Squad Lead")).toBeInTheDocument();
    expect(screen.getByText("BJSS")).toBeInTheDocument();
    expect(screen.getByText(/Full-Stack Developer Bootcamp/i)).toBeInTheDocument();
  });
});
