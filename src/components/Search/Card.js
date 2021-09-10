import React from "react";
import { SearchContext } from "./SearchProvider";
import Suggestion from "./Suggestion";

export default function Card() {
    const { results, searchTerm } = React.useContext(SearchContext);

    const suggestions = results.map(result => (
        <Suggestion
            title={result.name}
            index={result.index}
            badge={result.placeType}
            subTitle={result.region}
            country={result.country}
        />
    ));

    if (results[0].name === "No results found") {
        return (
            <div className="w-11/12 m-auto border-2 bg-white rounded shadow-lg">
                <ul>
                    <li className="p-2">No results found.</li>
                </ul>
            </div>
        );
    }

    return (
        <div className="w-11/12 m-auto border-2 bg-white rounded shadow-lg">
            <ul>{suggestions}</ul>
        </div>
    );
}
