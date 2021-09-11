import React from "react";
import classNames from "classnames";

export const badges = {
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
    D: {
        backgroundColor: "bg-green-700",
        textColor: "text-white",
        text: "District",
    },
};

export const badgeArray = ["C", "T", "A", "D"];

export default function Badge({ badgeType }) {
    if (badgeArray.includes(badgeType)) {
        return (
            <div
                data-testid="badge"
                className={classNames(
                    "rounded w-16 h-6  pt-1 text-center text-xs font-semibold",
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
