import { render, screen, fireEvent } from "@testing-library/react";
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
  it("renders featured project cards", async () => {
    const { default: Projects } = await import("./Projects");
    render(<Projects />);
    expect(screen.getByText(/BardBox/)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio Site/)).toBeInTheDocument();
  });

  it("does not show archived projects by default", async () => {
    const { default: Projects } = await import("./Projects");
    render(<Projects />);
    expect(screen.queryByText(/Weather App/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Language Learning App/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Flower Collective/)).not.toBeInTheDocument();
  });

  it("shows archive toggle button with count", async () => {
    const { default: Projects } = await import("./Projects");
    render(<Projects />);
    expect(screen.getByText("Project Archive")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("shows archived projects when toggle is clicked", async () => {
    const { default: Projects } = await import("./Projects");
    render(<Projects />);
    const toggle = screen.getByText("Project Archive").closest("button")!;
    fireEvent.click(toggle);
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
