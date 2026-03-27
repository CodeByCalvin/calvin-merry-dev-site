import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("../imgs/profile-picture.jpg", () => ({ default: "/mock-profile.jpg" }));

describe("HeroSidebar", () => {
  it("renders profile image", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    const img = screen.getByAltText("Profile");
    expect(img).toBeInTheDocument();
  });

  it("renders social links", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    expect(screen.getByText("github")).toBeInTheDocument();
    expect(screen.getByText("linkedin")).toBeInTheDocument();
    expect(screen.getByText("cv")).toBeInTheDocument();
  });

  it("social links open in new tab", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("github link points to correct URL", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    const githubLink = screen.getByText("github").closest("a");
    expect(githubLink).toHaveAttribute("href", "https://github.com/CodeByCalvin");
  });
});
