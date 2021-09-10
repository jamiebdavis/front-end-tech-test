import Badge from "./Badge";
import React from "react";

export default function Suggestion({ index, badge, title, subTitle, country, airport }) {
    return (
        <li key={index}>
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
        </li>
    );
}
