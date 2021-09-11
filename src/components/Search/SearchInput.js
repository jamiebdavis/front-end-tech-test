import React from "react";

export default function SearchInput({ handleChange, searchTerm }) {
    return (
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
    );
}
