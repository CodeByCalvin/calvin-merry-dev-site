import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("../../imgs/profile-picture.jpg", () => ({ default: "/mock-profile.jpg" }));
vi.mock("../../data/socialLinks", () => ({
  default: [
    { href: "https://github.com/CodeByCalvin", label: "github", icon: <span>gh</span> },
    { href: "https://www.linkedin.com/in/calvin-merry/", label: "linkedin", icon: <span>li</span> },
    { href: "/calvin-merry-cv.pdf", label: "cv", icon: <span>cv-icon</span> },
  ],
}));

describe("HeroSidebar", () => {
  const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;

  it("renders profile image", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    expect(screen.getByAltText("Profile")).toBeInTheDocument();
  });

  it("renders social links", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    expect(screen.getByText("github")).toBeInTheDocument();
    expect(screen.getByText("linkedin")).toBeInTheDocument();
    expect(screen.getByText("cv")).toBeInTheDocument();
  });

  it("social links open in new tab", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    screen.getAllByRole("link").forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("github link points to correct URL", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    const githubLink = screen.getByText("github").closest("a");
    expect(githubLink).toHaveAttribute("href", "https://github.com/CodeByCalvin");
  });

  it("cv link points to the pdf", async () => {
    const { default: HeroSidebar } = await import("./HeroSidebar");
    render(<HeroSidebar sidebarY={mockMotionValue} />);
    const cvLink = screen.getByText("cv").closest("a");
    expect(cvLink).toHaveAttribute("href", "/calvin-merry-cv.pdf");
  });
});
