import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import React from "react";
import Search from "../Search";

describe("<Search />", () => {
    it("should render component", () => {
        const { getByTestId } = render(<Search />);
        expect(screen.getByTestId("search-box")).toBeInTheDocument();
    });
});
