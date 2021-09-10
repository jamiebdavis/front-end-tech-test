import React, { useContext } from "react";

import Card from "./Card";
import { SearchContext } from "./SearchProvider";

export default function Search() {
    const { setSearchTerm, searchTerm, results } = useContext(SearchContext);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full bg-booking-blue booking-background-height md:h-44 h-72">
            <div className="py-1 px-1">
                <h1
                    className="mb-6 text-center text-booking-title text-white font-bold"
                    data-testid="page-title"
                >
                    Car Hire – Search, Compare &amp; Save
                </h1>
                <div className="w-11/12 bg-booking-yellow h-96 md:h-44 rounded-md m-auto">
                    <div data-testid="search-container" className="py-1 px-1 m-4">
                        <h3 className="font-bold text-booking-subtitle my-3">
                            Let's find your ideal car
                        </h3>
                        <div data-testid="search-box" className="m-auto">
                            <input
                                onChange={e => handleChange(e)}
                                name="search"
                                value={searchTerm}
                                placeholder="Pick-up Location"
                                className="border-0 rounded w-full pl-12 p-4 font-bold text-lg"
                                aria-label="Pick-up Location"
                            />
                        </div>

                        {results.length > 0 && searchTerm.length > 1 && (
                            <div data-testid="card">
                                <Card />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
