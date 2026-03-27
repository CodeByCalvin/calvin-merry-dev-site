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
});
