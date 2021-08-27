import React, { useContext } from "react";

import { SearchContext } from "./SearchProvider";

export default function Search() {
    const { placeholder, results } = useContext(SearchContext);
    return (
        <div data-testid="search-box">
            <input name="search" placeholder={placeholder} />
        </div>
    );
}
