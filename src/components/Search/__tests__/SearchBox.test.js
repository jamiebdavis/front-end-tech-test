import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import React from "react";
import SearchBox from "../SearchBox";
import SearchProvider from "../SearchProvider";
import userEvent from "@testing-library/user-event";

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

    // it("should not display results card is search term is less than 2", async () => {
    //     const { debug } = render(
    //         <SearchProvider value={{ searchTerm: "abc" }}>
    //             <SearchBox />
    //         </SearchProvider>
    //     );

    //     const searchInput = await screen.getByTestId("search-box");

    //     await userEvent.type(searchInput, "abc");

    //     expect(searchInput).toHaveValue("a");

    //     debug();
    // });
});
