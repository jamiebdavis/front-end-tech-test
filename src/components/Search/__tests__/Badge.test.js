import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import Banner from "../Badge";
import React from "react";

describe("<Badge />", () => {
    it.each`
        badgeType | expectedText  | expectedTextBgColor | expectedTextColor
        ${"C"}    | ${"City"}     | ${"bg-blue-600"}    | ${"text-white"}
        ${"T"}    | ${"Station"}  | ${"bg-blue-600"}    | ${"text-white"}
        ${"A"}    | ${"Airport"}  | ${"bg-yellow-500"}  | ${"text-black"}
        ${"D"}    | ${"District"} | ${"bg-green-700"}   | ${"text-white"}
    `(
        "should be rendered with dynamic  props",
        ({ badgeType, expectedText, expectedTextBgColor, expectedTextColor }) => {
            render(<Banner badgeType={badgeType} />);

            expect(screen.getByText(expectedText)).toBeInTheDocument();

            const container = screen.getByTestId("badge");
            expect(container).toHaveClass(expectedTextBgColor);
            expect(container).toHaveClass(expectedTextColor);
        }
    );
});
