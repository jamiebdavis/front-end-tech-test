import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import React from "react";
import SearchInput from "../SearchInput";

describe("<SearchInput />", () => {
    it("should contain correct label", () => {
        render(<SearchInput />);
        screen.getByLabelText("Pick-up Location");
    });
});
