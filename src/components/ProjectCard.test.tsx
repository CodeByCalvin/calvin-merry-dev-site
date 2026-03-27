import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import type { Project } from "../types";

vi.mock("./TechPill", () => ({
  default: ({ tech }: { tech: { name: string } }) => (
    <span data-testid="tech-pill">{tech.name}</span>
  ),
}));

const mockProject: Project = {
  title: "Test Project",
  description: "A test project description",
  image: "/test-image.png",
  repo: "https://github.com/test/repo",
  demo: "https://test-demo.com",
  techStack: [
    { name: "React", colour: "#149ECA", colourLight: "#4db8d9", colourDark: "#0d7a9f", logo: "react.svg" },
    { name: "TypeScript", colour: "#3178C6", colourLight: "#5599dd", colourDark: "#265ba0", logo: "ts.svg" },
  ],
};

describe("ProjectCard", () => {
  it("renders project title", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders project description", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("A test project description")).toBeInTheDocument();
  });

  it("renders project image with alt text", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    render(<ProjectCard project={mockProject} />);
    const img = screen.getByAltText("Test Project");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test-image.png");
  });

  it("renders tech stack pills", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    render(<ProjectCard project={mockProject} />);
    const pills = screen.getAllByTestId("tech-pill");
    expect(pills).toHaveLength(2);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders Live and GitHub links", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    render(<ProjectCard project={mockProject} />);
    const liveLink = screen.getByText("Live").closest("a");
    const githubLink = screen.getByText("GitHub").closest("a");
    expect(liveLink).toHaveAttribute("href", "https://test-demo.com");
    expect(githubLink).toHaveAttribute("href", "https://github.com/test/repo");
  });

  it("shows 'New' badge when isNew is true", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    render(<ProjectCard project={{ ...mockProject, isNew: true }} />);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("does not show 'New' badge by default", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    render(<ProjectCard project={mockProject} />);
    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });

  it("shows 'In development' badge when projectIncomplete is true", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    render(<ProjectCard project={{ ...mockProject, projectIncomplete: true }} />);
    expect(screen.getByText("In development")).toBeInTheDocument();
  });

  it("applies blur class when projectIncomplete", async () => {
    const { default: ProjectCard } = await import("./ProjectCard");
    const { container } = render(<ProjectCard project={{ ...mockProject, projectIncomplete: true }} />);
    expect(container.querySelector(".blur-card")).toBeInTheDocument();
    expect(container.querySelector(".blur-img")).toBeInTheDocument();
  });
});
