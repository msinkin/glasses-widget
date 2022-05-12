import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

it("render Button component and check onClick event", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});

it("render disabled Button component", () => {
    render(<Button disabled={false}>Example disabled button</Button>);
});