import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("Footer", () => {
  const mockScrollToTop = vi.fn();
  const mockScrollToProjects = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", async () => {
    const { default: Footer } = await import("./Footer");
    const { container } = render(<Footer scrollToTop={mockScrollToTop} scrollToProjects={mockScrollToProjects} />);
    expect(container.querySelector(".home-footer")).toBeInTheDocument();
  });

  it("calls scrollToProjects when not past projects section", async () => {
    const { default: Footer } = await import("./Footer");
    const { container } = render(<Footer scrollToTop={mockScrollToTop} scrollToProjects={mockScrollToProjects} />);
    fireEvent.click(container.querySelector(".home-footer")!);
    expect(mockScrollToProjects).toHaveBeenCalledTimes(1);
  });

  it("renders an svg arrow icon", async () => {
    const { default: Footer } = await import("./Footer");
    const { container } = render(<Footer scrollToTop={mockScrollToTop} scrollToProjects={mockScrollToProjects} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("calls scrollToTop when isPastProjects is true", async () => {
    const projectsEl = document.createElement("div");
    projectsEl.id = "projects";
    vi.spyOn(projectsEl, "getBoundingClientRect").mockReturnValue({
      top: 0,
      bottom: 0,
      height: 0,
      width: 0,
      left: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    });
    vi.spyOn(document, "getElementById").mockReturnValue(projectsEl);
    Object.defineProperty(window, "innerHeight", { value: 800, configurable: true });

    const { default: Footer } = await import("./Footer");
    const { container } = render(<Footer scrollToTop={mockScrollToTop} scrollToProjects={mockScrollToProjects} />);

    fireEvent.scroll(window);
    fireEvent.click(container.querySelector(".home-footer")!);
    expect(mockScrollToTop).toHaveBeenCalledTimes(1);

    vi.restoreAllMocks();
  });
});
