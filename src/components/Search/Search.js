import React, { useContext, useState } from "react";

import Card from "./Card";
import { SearchContext } from "./SearchProvider";

export default function Search() {
    const { setSearchTerm, searchTerm, results } = useContext(SearchContext);

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
        setSearchTerm(input);
    };

    return (
        <div className="w-full bg-blue-500 h-96">
            <h1 className="mb-6 text-center text-3xl text-white font-bold" data-testid="page-title">
                Car Hire – Search, Compare &amp; Save
            </h1>
            <div className="w-11/12 bg-yellow-400 h-60 rounded m-auto">
                <h3 className="font-bold">Lets find your ideal car</h3>
                <div data-testid="search-box" className="w-11/12 m-auto">
                    <input
                        onChange={handleChange}
                        name="search"
                        value={input}
                        placeholder="Pick-up Location"
                        className="border-0 rounded w-full"
                    />
                </div>

                {/* TODO: Conditionally render card */}
                {results && (
                    <div data-testid="card">
                        <Card />
                    </div>
                )}
            </div>
        </div>
    );
}
