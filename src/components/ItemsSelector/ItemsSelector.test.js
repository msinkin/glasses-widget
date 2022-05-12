import { render, screen } from "@testing-library/react";

import ItemsSelector from "./ItemsSelector";

it("render ItemsSelector with items text", () => {
    const items = [
        { text: "Item#1" },
        { text: "Item#2" }
    ];

    render(<ItemsSelector items={items} />);

    items.forEach(({ text }) => screen.getByText(text));
});