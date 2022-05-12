import { render, screen } from "@testing-library/react";

import Congrats from "./Congrats";

it("render Congrats component", () => {
    render(<Congrats text="sample text" />);
    screen.getByText("sample text");
});