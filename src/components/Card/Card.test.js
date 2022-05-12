import { render, screen } from "@testing-library/react";

import Card from "./Card";

const contains = (value, container) => container.firstChild.classList.contains(value);

it("render small Card component", () => {
    const { container } = render(<Card text="Small card" size="small" />);
    screen.getByText("Small card");
    expect(contains("small", container)).toBe(true);
});

it("render medium Card component", () => {
    const { container } = render(<Card text="Medium card" size="medium" />);
    screen.getByText("Medium card");
    expect(contains("medium", container)).toBe(true);
});

it("render large Card component", () => {
    const { container } = render(<Card text="Large card" size="large" />);
    screen.getByText("Large card");
    expect(contains("large", container)).toBe(true);
});
