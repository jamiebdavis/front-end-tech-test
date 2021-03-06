import Header from "../components/Header/Header";
import React from "react";
import SearchBox from "../components/Search/SearchBox";
import SearchProvider from "../components/Search/SearchProvider";

export default function Home() {
    return (
        <div className="">
            <SearchProvider>
                <Header />
                <SearchBox />
            </SearchProvider>
        </div>
    );
}
