import React, { useContext } from "react";

import Card from "./Card";
import { SearchContext } from "./SearchProvider";

export default function Search() {
    const { setSearchTerm, searchTerm, results } = useContext(SearchContext);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full bg-blue-500 h-96">
            <h1 className="mb-6 text-center text-3xl text-white font-bold" data-testid="page-title">
                Car Hire – Search, Compare &amp; Save
            </h1>
            <div className="w-11/12 bg-yellow-400 h-60 rounded m-auto">
                <h3 className="font-bold ml-3 text-lg p-4">Let's find your ideal car</h3>
                <div data-testid="search-box" className="w-11/12 m-auto">
                    <input
                        onChange={e => handleChange(e)}
                        name="search"
                        value={searchTerm}
                        placeholder="Pick-up Location"
                        className="border-0 rounded w-full p-4 font-bold text-lg"
                        aria-label="Pick-up Location"
                    />
                    {/* <img
                        src="https://img.icons8.com/windows/32/000000/car.png"
                        alt="search input"
                        className="absolute top-48 h-8 w-8 left-28"
                    /> */}
                </div>

                {results.length > 0 && searchTerm.length > 1 && (
                    <div data-testid="card">
                        <Card />
                    </div>
                )}
            </div>
        </div>
    );
}
