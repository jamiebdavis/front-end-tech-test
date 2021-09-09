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
        <div className="w-full">
            <div data-testid="search-box">
                <input
                    onChange={handleChange}
                    name="search"
                    value={input}
                    placeholder="Pick-up Location"
                    className="border-2 border-indigo-600 w-full"
                />
                {/* <button type="submit" className=" flex-1 bg-green-400 rounded-sm p-4 text-white">Search</button> */}
            </div>

            {/* TODO: Conditionally render card */}
            <div data-testid="card">
                <Card />
            </div>
        </div>
    );
}
