import React from "react";

export default function Suggestion({ index, badge, title, subTitle, country }) {
    return (
        <li key={index}>
            <div>
                <div>
                    {/* badge a = airport, s = station?? c = city */}
                    <span>{badge}</span>
                    <div>
                        <p>{title}</p>
                        <p>
                            {subTitle} {country}
                        </p>
                    </div>
                </div>
            </div>

            {title}
        </li>
    );
}
