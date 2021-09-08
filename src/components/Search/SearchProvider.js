import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState(["Manchester", "Leeds", "Bath"]);
    const [numberOfResults, setNumberOfResults] = useState(5);

    const fetchResults = e => {
        axios
            .get(
                `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${searchTerm}`
            )
            .then(res => {
                // handle success
                console.log(res.data.results.docs);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    };

    useEffect(() => {
        if (searchTerm.length < 1) return;
        fetchResults();
    }, [searchTerm]);

    const contextValue = { results, searchTerm, setSearchTerm };
    return (
        <div>
            <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
        </div>
    );
}
