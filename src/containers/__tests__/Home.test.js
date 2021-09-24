import "@testing-library/jest-dom/extend-expect";

import { render, screen, waitFor } from "@testing-library/react";

import Home from "../Home";
import React from "react";
import nock from "nock";
import userEvent from "@testing-library/user-event";

describe("<Home />", () => {
    beforeEach(() => {});
    it("should render component", () => {
        render(<Home />);
        expect(screen.getByTestId("search-container")).toBeInTheDocument();
        expect(screen.getByText("Let's find your ideal car")).toBeInTheDocument();
        expect(screen.getByTestId("search-box")).toBeInTheDocument();
    });

    it("should contain text entered into input field", () => {
        render(<Home />);

        const searchInput = screen.getByRole("textbox", {
            name: "Pick-up Location",
        });

        userEvent.type(searchInput, "Manchester");
        expect(searchInput).toHaveValue("Manchester");
    });

    // it.only("should display no results found if user enters 'abcd1234'", async () => {
    //     const { getByRole, debug } = container;

    //     await userEvent.type(
    //         getByRole("textbox", {
    //             name: "Pick-up Location",
    //         }),
    //         "abcd123456"
    //     );

    //     nock("https://www.rentalcars.com")
    //         .get(`/FTSAutocomplete.do?solrIndex=fts_en&solrRows=&6solrTerm=abcd123456`)
    //         .reply(200, {
    //             results: {
    //                 docs: [{ name: "No results found" }],
    //             },
    //         });

    //     await waitFor(() => {
    //         expect(screen.getByTestId("card")).toBeInTheDocument();
    //         debug();
    //     });
    // });
});
