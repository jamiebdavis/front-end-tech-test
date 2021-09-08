import React from "react";
import Search from "../components/Search/Search";
import SearchProvider from "../components/Search/SearchProvider";

export default function Home() {
    return (
        <div className="m-auto w-1/2 p-1">
            <SearchProvider>

                <Search />
            </SearchProvider>
        </div>
    );
}
