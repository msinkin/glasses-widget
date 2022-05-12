import { render, screen } from "@testing-library/react";

import Template from "./Template";

it("render empty Template component", () => {
    render(<Template title="This is my title"></Template>);
    screen.getByText("This is my title");
});

it("render empty Template component", () => {
    render(<Template title="This is my title" subtitle="This is my subtitle"></Template>);
    screen.getByText("This is my title");
    screen.getByText("This is my subtitle");
});