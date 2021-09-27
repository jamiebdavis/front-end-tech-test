import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import React from "react";
import SearchBox from "../SearchBox";
import SearchProvider from "../SearchProvider";
import userEvent from "@testing-library/user-event";

describe("<SearchBox />", () => {
    beforeEach(() => {
        render(
            <SearchProvider>
                <SearchBox />
            </SearchProvider>
        );
    });
    it("should render component", () => {
        expect(screen.getByTestId("search-container")).toBeInTheDocument();
        expect(screen.getByText("Let's find your ideal car")).toBeInTheDocument();
        expect(screen.getByTestId("search-box")).toBeInTheDocument();
    });

    it("should contain text entered into input field", () => {
        const searchInput = screen.getByRole("textbox", {
            name: "Pick-up Location",
        });

        userEvent.type(searchInput, "Manchester");
        expect(searchInput).toHaveValue("Manchester");
    });
});
