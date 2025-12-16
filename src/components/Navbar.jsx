"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 z-50 bg-white shadow-md px-5 md:px-20 py-4 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/">
                <h1 className="text-2xl font-bold text-teal-600 cursor-pointer">
                    Todo<span className="text-gray-800">Pro</span>
                </h1>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
                <Link
                    href="#hero"
                >
                    <Image
                        src="/home-icon.png"
                        alt="Profile"
                        width={25}
                        height={25}
                    />
                </Link>
                <Link href="#about" className="hover:text-teal-600">About</Link>
                <Link href="/templates" className="hover:text-teal-600">Templates</Link>

                {/* PROFILE DROPDOWN */}
                <div className="relative z-50">

                    <button
                        onClick={() => setProfileOpen(!profileOpen)}
                        className="flex items-center gap-2 bg-gray-400 rounded-full p-1"
                    >
                        <Image
                            src="/profile-pic.png"
                            alt="Profile"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    </button>

                    {profileOpen && (
                        <div className="absolute right-0 mt-3 w-40 bg-white border rounded-lg shadow-lg">
                            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                                My Activities
                            </Link>
                            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="absolute z-50 top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
                        <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="/templates" onClick={() => setMenuOpen(false)}>Templates</Link>
                        <Link href="/profile" onClick={() => setMenuOpen(false)}>My Activities</Link>
                        <button className="text-left text-red-500">Logout</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
