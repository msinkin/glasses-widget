import { render, screen } from "@testing-library/react";

import SideCard from "./SideCard";

it("render SideCard component", () => {
    render(<SideCard left="Left text" right="Right text" />);
    screen.getByText("Left text");
    screen.getByText("Right text");
});