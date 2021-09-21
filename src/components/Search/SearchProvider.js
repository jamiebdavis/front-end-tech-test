import React, { createContext, useEffect, useState } from "react";

import axios from "axios";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [numberOfResults] = useState(6);

  const fetchResults = async () => {
    try {
      const res = await axios.get(
        `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${searchTerm}`
      );
      const data = await res.data.results.docs;
      setResults(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (searchTerm.length < 2) return;
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const contextValue = { results, searchTerm, setSearchTerm };
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
