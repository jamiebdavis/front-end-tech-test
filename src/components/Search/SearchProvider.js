import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [numberOfResults] = useState(6);

    const [formState, setFormState] = useState(null);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            if (searchTerm.length < 2) return;

            if (debouncedSearchTerm) {
                setFormState("loading");
                fetchResults(debouncedSearchTerm, numberOfResults).then(results => {
                    setFormState(null);
                    setResults(results);
                });
            } else {
                setResults([]);
                setFormState(null);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [debouncedSearchTerm] // Only call effect if debounced search term changes
    );

    const contextValue = { results, searchTerm, setSearchTerm, formState };
    return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
}

// API search function
const fetchResults = async (search, count = 6) => {
    try {
        const res = await axios.get(
            `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${count}&solrTerm=${search}`
        );
        const data = await res.data.results.docs;
        return data;
    } catch (error) {
        console.log("error", error);
        return [];
    }
};

// Hook
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}
