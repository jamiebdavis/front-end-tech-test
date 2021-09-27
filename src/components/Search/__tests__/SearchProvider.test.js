import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import React from "react";
import SearchBox from "../SearchBox";
import { SearchContext } from "../SearchProvider";

describe("<SearchProvider />", () => {
    it("displays correct input value and suggestion when passed the correct data", () => {
        const providerProps = {
            searchTerm: "Manchester",
            setSearchTerm: jest.fn(),
            results: [
                {
                    country: "United Kingdom",
                    city: "Manchester",
                    searchType: "L",
                    alternative: ["GB,UK,England,Manchester Airport"],
                    index: 1,
                    placeType: "A",
                    iata: "MAN",
                    name: "Manchester Airport",
                    region: "Greater Manchester",
                    lang: "en",
                },
            ],
        };

        render(
            <SearchContext.Provider value={providerProps}>
                <SearchBox />
            </SearchContext.Provider>
        );

        // Input
        expect(
            screen.getByRole("textbox", {
                name: "Pick-up Location",
            })
        ).toHaveValue("Manchester");

        // Suggestion card
        expect(screen.getByTestId("search-container")).toBeInTheDocument();
        expect(screen.getByTestId("badge").textContent).toBe("Airport");
        expect(screen.getByTestId("suggestion-title").textContent).toBe("Manchester Airport (MAN)");
    });
});
