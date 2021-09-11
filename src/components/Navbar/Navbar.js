import React from "react";

export default function Navbar() {
    return (
        <nav className="flex text-center justify-between py-4 px-6  bg-booking-blue   w-full">
            <div className="mb-6 m:mb-4">
                <img
                    src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg"
                    alt="Rentalcars.com Brand Logo"
                    width="156"
                    height="45"
                ></img>
            </div>
            <div>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMUlEQVRIie3SoREAIADDwJT9dy6KCUAAl1dVVQF9L2u07dHjJADj5KnuZEXaZ0V6wATQzQwKQvoBVgAAAABJRU5ErkJggg=="
                    alt="burger menu"
                />
            </div>
        </nav>
    );
}
