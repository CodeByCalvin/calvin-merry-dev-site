import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("lucide-react", () => ({
  Moon: () => <span data-testid="moon-icon">Moon</span>,
  Sun: () => <span data-testid="sun-icon">Sun</span>,
}));

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
    vi.resetModules();
  });

  it("renders the toggle button", async () => {
    const { ThemeToggle } = await import("./ThemeToggle");
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeInTheDocument();
  });

  it("defaults to light theme showing moon icon", async () => {
    const { ThemeToggle } = await import("./ThemeToggle");
    render(<ThemeToggle />);
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });

  it("toggles to dark theme on click", async () => {
    const { ThemeToggle } = await import("./ThemeToggle");
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("toggles back to light theme on double click", async () => {
    const { ThemeToggle } = await import("./ThemeToggle");
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("restores saved dark theme from localStorage", async () => {
    localStorage.setItem("theme", "dark");
    const { ThemeToggle } = await import("./ThemeToggle");
    render(<ThemeToggle />);
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
  });
});
