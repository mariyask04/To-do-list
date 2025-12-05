"use client";
import { useState } from "react";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <>
            <div className="flex justify-between p-5 md:px-20 md:py-10 bg-amber-200">
                <h1>Home</h1>
                <div className="flex justify-center gap-5 md:gap-20">
                    <span>Templates</span>
                    <span>About</span>
                    <span>Logout</span>
                </div>
            </div>
        </>
    )
}
export default Navbar;