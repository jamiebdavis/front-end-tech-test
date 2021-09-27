import React from "react";
import { SearchContext } from "./SearchProvider";
import Suggestion from "./Suggestion";

export default function Card() {
    const { results } = React.useContext(SearchContext);

    const suggestions = results.map(result => (
        <li key={result.index}>
            <Suggestion
                title={result.name}
                badge={result.placeType}
                subTitle={result.region}
                country={result.country}
                airport={result.iata}
            />
        </li>
    ));

    if (results[0].name === "No results found") {
        return (
            <div data-testid="no-results-card" className="border-2 bg-white rounded shadow-lg">
                <ul>
                    <li key={results[0].name} className="p-2">
                        No results found.
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div data-testid="card" className="border-2 bg-white rounded shadow-lg">
            <ul>{suggestions}</ul>
        </div>
    );
}
