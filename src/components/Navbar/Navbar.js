import React from "react";

export default function Navbar() {
    return (
        <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 text-white bg-blue-500 shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <img
                    src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg"
                    alt="Rentalcars.com Brand Logo"
                    width="156"
                    height="45"
                ></img>
            </div>
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMUlEQVRIie3SoREAIADDwJT9dy6KCUAAl1dVVQF9L2u07dHjJADj5KnuZEXaZ0V6wATQzQwKQvoBVgAAAABJRU5ErkJggg==" />
            </div>
        </nav>
    );
}
