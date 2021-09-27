import Badge from "./Badge";
import React from "react";

export default function Suggestion({ badge, title, subTitle, country, airport }) {
    return (
        <div className="flex p-3 hover:bg-blue-50">
            <div className="flex-initial p-1.5 ">
                <Badge badgeType={badge} />
            </div>
            <div className="flex-1">
                <p className="text-sm">
                    {title}
                    {airport ? ` (${airport})` : ""}
                </p>
                <p className="font-semibold text-xs">
                    {subTitle}
                    {subTitle ? ", " : ""}
                    {country}
                </p>
            </div>
        </div>
    );
}
