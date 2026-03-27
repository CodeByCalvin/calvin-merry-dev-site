import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("react-scroll", () => ({
  Element: ({ children, name }: React.PropsWithChildren<{ name: string }>) => (
    <div data-testid={`scroll-element-${name}`}>{children}</div>
  ),
}));

vi.mock("./MeshGradient", () => ({
  default: () => <div data-testid="mesh-gradient" />,
}));

vi.mock("./HeroSidebar", () => ({
  default: () => <div data-testid="hero-sidebar" />,
}));

vi.mock("./HeroContent", () => ({
  default: () => <div data-testid="hero-content" />,
}));

vi.mock("./ScrollIndicator", () => ({
  default: () => <div data-testid="scroll-indicator" />,
}));

describe("Home", () => {
  it("renders all child components", async () => {
    const { default: Home } = await import("./Home");
    const { container } = render(<Home />);
    expect(container.querySelector("[data-testid='mesh-gradient']")).toBeInTheDocument();
    expect(container.querySelector("[data-testid='hero-sidebar']")).toBeInTheDocument();
    expect(container.querySelector("[data-testid='hero-content']")).toBeInTheDocument();
    expect(container.querySelector("[data-testid='scroll-indicator']")).toBeInTheDocument();
  });

  it("wraps in a scroll Element named 'home'", async () => {
    const { default: Home } = await import("./Home");
    const { container } = render(<Home />);
    expect(container.querySelector("[data-testid='scroll-element-home']")).toBeInTheDocument();
  });

  it("has the hero-section class", async () => {
    const { default: Home } = await import("./Home");
    const { container } = render(<Home />);
    expect(container.querySelector(".hero-section")).toBeInTheDocument();
  });
});
