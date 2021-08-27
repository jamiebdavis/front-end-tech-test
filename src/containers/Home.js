import React from "react";
import Search from "../components/Search/Search";
import SearchProvider from "../components/Search/SearchProvider";

export default function Home() {
    return (
        <div>
            <SearchProvider>
                <div>home Component</div>
                <Search />
            </SearchProvider>
        </div>
    );
}
