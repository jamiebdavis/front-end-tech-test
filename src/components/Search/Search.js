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
        <div>
            <div data-testid="search-box">
                <input
                    onChange={handleChange}
                    name="search"
                    value={input}
                    placeholder="Pick-up Location"
                    className="border-2 border-indigo-600"
                />
                {/* <button type="submit" className=" flex-1 bg-green-400 rounded-sm p-4 text-white">Search</button> */}
            </div>

            <div data-testid="card">
                <Card />
            </div>
        </div>
    );
}
