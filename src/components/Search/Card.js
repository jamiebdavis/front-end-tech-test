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

    if (searchTerm.length > 1 && !results) {
        return <p>No results found</p>;
    }

    return (
        <div className="mt-2 w-full border-2 border-indigo-600">
            <ul>{suggestions}</ul>
        </div>
    );
}
