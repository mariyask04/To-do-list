"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("Form submitted");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-cyan-900 via-teal-800 to-emerald-700 px-4">
            {/* BACKGROUND IMAGES */}
            <div className="absolute inset-0 pointer-events-none z-0">

                {/* Desktop */}
                <div className="hidden md:block">
                    <Image src="/bg_signup_1.png" width={200} height={200} className="absolute top-10 left-20 opacity-30" alt="" />
                    <Image src="/bg_signup_2.png" width={200} height={200} className="absolute top-1/2 right-20 opacity-30" alt="" />
                    <Image src="/bg_signup_3.png" width={200} height={200} className="absolute bottom-10 left-32 opacity-30" alt="" />
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                    <Image src="/bg_signup_1.png" width={120} height={120} className="absolute top-12 left-6 opacity-25" alt="" />
                    <Image src="/bg_signup_2.png" width={100} height={100} className="absolute bottom-20 right-10 opacity-25" alt="" />
                </div>

            </div>

            <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">

                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 mt-1">
                    Sign up to get started
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="px-4 py-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                required
                                className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <span className="absolute top-3 right-3 cursor-pointer text-teal-600" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link href="/">
                        <span className="text-teal-600 cursor-pointer font-medium">
                            Login
                        </span>
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Register;
