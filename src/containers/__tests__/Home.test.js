import "@testing-library/jest-dom/extend-expect";

import { render, screen, waitFor } from "@testing-library/react";

import Home from "../Home";
import React from "react";
import nock from "nock";
import userEvent from "@testing-library/user-event";

describe("<Home />", () => {
    beforeEach(() => render(<Home />));
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

    it("should display card for search term 'ma'", async () => {
        const searchTerm = "ma";
        const numberOfResults = 6;

        const searchInput = screen.getByRole("textbox", {
            name: "Pick-up Location",
        });

        await userEvent.type(searchInput, searchTerm);

        expect(searchInput).toHaveValue(searchTerm);

        nock("https://www.rentalcars.com")
            .get(
                `/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${searchTerm}`
            )
            .reply(200, {
                results: {
                    docs: [
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
                },
            })
            .persist();

        await waitFor(() => {
            expect(screen.getByTestId("card")).toBeInTheDocument();
            screen.debug();
        });
    });
});
