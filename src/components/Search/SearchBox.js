import React, { useContext } from "react";

import Card from "./Card";
import { SearchContext } from "./SearchProvider";
import SearchInput from "./SearchInput";
import SubTitle from "./SubTitle";

export default function SearchBox() {
    const { setSearchTerm, searchTerm, results } = useContext(SearchContext);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full bg-booking-blue booking-background-height md:h-44 h-72">
            <div className="py-1 px-1">
                <div className="w-11/12 bg-booking-yellow h-96 md:h-44 rounded-md m-auto">
                    <div data-testid="search-container" className="py-1 px-1 m-4">
                        <SubTitle />
                        <SearchInput searchTerm={searchTerm} handleChange={handleChange} />

                        {results.length > 0 && searchTerm.length > 1 && <Card />}
                    </div>
                </div>
            </div>
        </div>
    );
}
