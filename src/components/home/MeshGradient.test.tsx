import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("MeshGradient", () => {
  it("renders the mesh gradient container", async () => {
    const { default: MeshGradient } = await import("./MeshGradient");
    const { container } = render(<MeshGradient />);
    expect(container.querySelector(".mesh-gradient")).toBeInTheDocument();
  });

  it("is hidden from accessibility tree", async () => {
    const { default: MeshGradient } = await import("./MeshGradient");
    const { container } = render(<MeshGradient />);
    expect(container.querySelector(".mesh-gradient")).toHaveAttribute("aria-hidden", "true");
  });

  it("renders three blob elements", async () => {
    const { default: MeshGradient } = await import("./MeshGradient");
    const { container } = render(<MeshGradient />);
    expect(container.querySelector(".mesh-blob-1")).toBeInTheDocument();
    expect(container.querySelector(".mesh-blob-2")).toBeInTheDocument();
    expect(container.querySelector(".mesh-blob-3")).toBeInTheDocument();
  });
});
