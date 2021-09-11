import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import React from "react";
import Subtitle from "../SubTitle";

describe("<Subtitle />", () => {
    it("should render component", () => {
        render(<Subtitle />);

        expect(screen.getByText("Let's find your ideal car")).toBeInTheDocument();
    });
});
