import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("react-type-animation", () => ({
  TypeAnimation: ({ className }: { className?: string }) => (
    <span className={className} data-testid="type-animation">typing...</span>
  ),
}));

describe("HeroContent", () => {
  it("renders greeting text", async () => {
    const { default: HeroContent } = await import("./HeroContent");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroContent contentY={mockMotionValue} />);
    expect(screen.getByText(/Hi 👋🏻/)).toBeInTheDocument();
  });

  it("renders name text", async () => {
    const { default: HeroContent } = await import("./HeroContent");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroContent contentY={mockMotionValue} />);
    expect(screen.getByText("My name is Calvin")).toBeInTheDocument();
  });

  it("renders job description", async () => {
    const { default: HeroContent } = await import("./HeroContent");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroContent contentY={mockMotionValue} />);
    expect(screen.getByText("I'm a full-stack software engineer")).toBeInTheDocument();
  });

  it("renders location", async () => {
    const { default: HeroContent } = await import("./HeroContent");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroContent contentY={mockMotionValue} />);
    expect(screen.getByText("Sheffield, UK")).toBeInTheDocument();
  });

  it("renders the typing animation", async () => {
    const { default: HeroContent } = await import("./HeroContent");
    const mockMotionValue = { get: () => 0, set: () => {}, on: () => () => {} } as never;
    render(<HeroContent contentY={mockMotionValue} />);
    expect(screen.getByTestId("type-animation")).toBeInTheDocument();
  });
});
