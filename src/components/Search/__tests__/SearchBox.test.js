import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import React from "react";
import SearchBox from "../SearchBox";
import SearchProvider from "../SearchProvider";

describe("<SearchBox />", () => {
    it("should render component", () => {
        render(
            <SearchProvider>
                <SearchBox />
            </SearchProvider>
        );
        expect(screen.getByTestId("search-container")).toBeInTheDocument();
        expect(screen.getByText("Let's find your ideal car")).toBeInTheDocument();
        expect(screen.getByTestId("search-box")).toBeInTheDocument();
    });
});
