import Badge from "./Badge";
import React from "react";

export default function Suggestion({ index, badge, title, subTitle, country }) {
    return (
        <li key={index}>
            <div className="flex p-4">
                <div
                    className="flex-initial p-2
                "
                >
                    {/* badge a = airport, s = station?? c = city */}
                    <span>
                        <Badge badgeType={badge} />
                    </span>
                </div>
                <div className="flex-1">
                    <p>{title}</p>
                    <p className="font-bold text-xs">
                        {subTitle}, {country}
                    </p>
                </div>
            </div>
        </li>
    );
}
