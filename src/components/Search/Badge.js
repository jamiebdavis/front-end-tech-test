import React from "react";
import classNames from "classnames";

/* badge a = airport, s = station?? c = city */

const badges = {
    C: {
        backgroundColor: "bg-blue-600",
        textColor: "text-white",
        text: "City",
    },
    T: {
        backgroundColor: "bg-blue-600",
        textColor: "text-white",
        text: "Station",
    },
    A: {
        backgroundColor: "bg-yellow-500",
        textColor: "text-black",
        text: "Airport",
    },
};

const arr = ["C", "T", "A"];

export default function Badge({ badgeType }) {
    if (arr.includes(badgeType)) {
        return (
            <div
                className={classNames(
                    "rounded-md w-20 h-6 m-1 pt-0.5 text-center text-sm font-semibold",
                    badges[badgeType].textColor,
                    badges[badgeType].backgroundColor
                )}
            >
                <span>{badges[badgeType].text}</span>
            </div>
        );
    }
    return null;
}
