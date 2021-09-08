import React from "react";
import { SearchContext } from "./SearchProvider";
import Suggestion from "./Suggestion";

export default function Card() {
    const { results } = React.useContext(SearchContext);

    const suggestions = results.map(result => (
        <Suggestion
            title={result.name}
            index={result.index}
            badge={result.placeType}
            subTitle={result.region}
            country={result.country}
        />
    ));

    return (
        <div>
            <ul>{suggestions}</ul>
        </div>
    );
}
