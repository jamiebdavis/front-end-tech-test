import Badge from "./Badge";
import React from "react";

export default function Suggestion({ index, badge, title, subTitle, country }) {
    return (
        <li key={index}>
            <div className="flex p-4 hover:bg-blue-50">
                <div className="flex-initial p-2 ">
                    <span>
                        <Badge badgeType={badge} />
                    </span>
                </div>
                <div className="flex-1">
                    <p>{title}</p>
                    <p className="font-semibold text-xs">
                        {subTitle}, {country}
                    </p>
                </div>
            </div>
        </li>
    );
}
