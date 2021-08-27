import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const fetchResults = () => {};

export default function SearchProvider({ children }) {
    const [placeholder, setPlaceholder] = useState("Pick-up Location");
    const [results, setResults] = useState(["Manchester", "Leeds", "Bath"]);

    const contextValue = { placeholder, results };
    return (
        <div>
            <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
        </div>
    );
}
