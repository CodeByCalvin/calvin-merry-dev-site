import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("react-scroll", () => ({
  scroller: { scrollTo: vi.fn() },
  Element: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
}));

vi.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));

vi.mock("./components/ThemeToggle", () => ({
  ThemeToggle: () => <button data-testid="theme-toggle">Toggle</button>,
}));

vi.mock("./components/Home", () => ({
  default: () => <div data-testid="home">Home</div>,
}));

vi.mock("./components/SectionSwitcher", () => ({
  default: () => <div data-testid="section-switcher">SectionSwitcher</div>,
}));

vi.mock("./components/SiteFooter", () => ({
  default: () => <footer data-testid="site-footer">SiteFooter</footer>,
}));

vi.mock("./components/Footer", () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe("App", () => {
  it("renders all main sections", async () => {
    const { default: App } = await import("./App");
    render(<App />);
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("home")).toBeInTheDocument();
    expect(screen.getByTestId("section-switcher")).toBeInTheDocument();
    expect(screen.getByTestId("site-footer")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("has the App class on root div", async () => {
    const { default: App } = await import("./App");
    const { container } = render(<App />);
    expect(container.querySelector(".App")).toBeInTheDocument();
  });
});
