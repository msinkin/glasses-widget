import { render, screen } from "@testing-library/react";

import Icon from "../../assets/round_face.svg";

import SideImageCard from "./SideImageCard";

it("render SideImageCard component", () => {
    render(<SideImageCard text="Side Image Text" icon={Icon} />);
    screen.getByText("Side Image Text");
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain(Icon);
});