import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import Header from "../Header";
import React from "react";

describe("<Header />", () => {
    it("should render component", () => {
        render(<Header />);

        expect(screen.getByText("Car Hire – Search, Compare & Save")).toBeInTheDocument();
    });
});
