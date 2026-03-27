import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SiteFooter from "./SiteFooter";

describe("SiteFooter", () => {
  it("renders copyright text", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/© 2026 Calvin Merry/)).toBeInTheDocument();
  });

  it("renders a footer element", () => {
    const { container } = render(<SiteFooter />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("has the site-footer class", () => {
    const { container } = render(<SiteFooter />);
    expect(container.querySelector(".site-footer")).toBeInTheDocument();
  });
});
