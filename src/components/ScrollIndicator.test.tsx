import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("ScrollIndicator", () => {
  it("renders the scroll indicator", async () => {
    const { default: ScrollIndicator } = await import("./ScrollIndicator");
    const { container } = render(<ScrollIndicator />);
    expect(container.querySelector(".scroll-indicator")).toBeInTheDocument();
  });

  it("renders an svg element", async () => {
    const { default: ScrollIndicator } = await import("./ScrollIndicator");
    const { container } = render(<ScrollIndicator />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
