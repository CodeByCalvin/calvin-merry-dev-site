import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("react-scroll", () => ({
  Element: ({ children, name }: React.PropsWithChildren<{ name: string }>) => (
    <div data-testid={`scroll-element-${name}`}>{children}</div>
  ),
}));

vi.mock("./Projects", () => ({
  default: () => <div data-testid="projects-section">Projects</div>,
}));

vi.mock("./About", () => ({
  default: () => <div data-testid="about-section">About</div>,
}));

describe("SectionSwitcher", () => {
  it("renders tab buttons", async () => {
    const { default: SectionSwitcher } = await import("./SectionSwitcher");
    render(<SectionSwitcher />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
  });

  it("shows Projects section by default", async () => {
    const { default: SectionSwitcher } = await import("./SectionSwitcher");
    render(<SectionSwitcher />);
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });

  it("switches to About when About tab is clicked", async () => {
    const { default: SectionSwitcher } = await import("./SectionSwitcher");
    render(<SectionSwitcher />);
    const aboutButton = screen.getByText("About").closest("button")!;
    fireEvent.click(aboutButton);
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  it("switches back to Projects when Projects tab is clicked", async () => {
    const { default: SectionSwitcher } = await import("./SectionSwitcher");
    render(<SectionSwitcher />);
    const aboutButton = screen.getByText("About").closest("button")!;
    fireEvent.click(aboutButton);
    const projectsButton = screen.getByText("Projects").closest("button")!;
    fireEvent.click(projectsButton);
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
  });

  it("wraps content in a scroll Element named 'projects'", async () => {
    const { default: SectionSwitcher } = await import("./SectionSwitcher");
    render(<SectionSwitcher />);
    expect(screen.getByTestId("scroll-element-projects")).toBeInTheDocument();
  });
});
