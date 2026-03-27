import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("./ProjectCard", () => ({
  default: ({ project }: { project: { title: string } }) => (
    <div data-testid="project-card">{project.title}</div>
  ),
}));

vi.mock("../data/techStack", () => ({
  getTechByName: (name: string) => ({
    name,
    colour: "#000",
    colourLight: "#333",
    colourDark: "#111",
    logo: `${name}.svg`,
  }),
}));

describe("Projects", () => {
  it("renders project cards", async () => {
    const { default: Projects } = await import("./Projects");
    render(<Projects />);
    const cards = screen.getAllByTestId("project-card");
    expect(cards.length).toBe(5);
  });

  it("renders all project titles", async () => {
    const { default: Projects } = await import("./Projects");
    render(<Projects />);
    expect(screen.getByText(/BardBox/)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio Site/)).toBeInTheDocument();
    expect(screen.getByText(/Weather App/)).toBeInTheDocument();
    expect(screen.getByText(/Language Learning App/)).toBeInTheDocument();
    expect(screen.getByText(/Flower Collective/)).toBeInTheDocument();
  });

  it("has the projects-container class", async () => {
    const { default: Projects } = await import("./Projects");
    const { container } = render(<Projects />);
    expect(container.querySelector(".projects-container")).toBeInTheDocument();
  });
});
