import Header from "../components/Header/Header";
import React from "react";
import Search from "../components/Search/Search";
import SearchProvider from "../components/Search/SearchProvider";

export default function Home() {
    return (
        <div className="">
            <SearchProvider>
                <Search />
            </SearchProvider>
        </div>
    );
}
