import React from "react";

export default function Header() {
    return (
        <div className="w-full">
            <h1
                className="text-center text-3xl bg-blue-500 text-white font-bold"
                data-testid="page-title"
            >
                Car Hire – Search, Compare &amp; Save
            </h1>
        </div>
    );
}
