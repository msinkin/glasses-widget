import { render, screen } from "@testing-library/react";

import Icon from "../../assets/round_face.svg";

import ImageCard from "./ImageCard";

it("render ImageCard component", () => {
    render(<ImageCard text="Image Card" icon={Icon} />);
    screen.getByText("Image Card");
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain(Icon);
});