"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SECTION */}
      <div className="relative hidden md:flex flex-col justify-center px-16 bg-teal-700 text-white overflow-hidden">

        {/* 🔹 Background Icons */}
        <Image src="/bg_login_1.png" width={70} height={70} alt="todo" className="absolute top-16 left-10 text-7xl opacity-40" />
        <Image src="/bg_login_2.png" width={70} height={70} alt="time" className="absolute top-40 right-20 text-6xl opacity-40" />
        <Image src="/bg_login_3.png" width={70} height={70} alt="tick" className="absolute bottom-32 left-24 text-6xl opacity-40" />
        <Image src="/bg_login_4.png" width={70} height={70} alt="calendar" className="absolute bottom-20 right-32 text-7xl opacity-40" />
        <Image src="/bg_login_5.png" width={70} height={70} alt="target" className="absolute top-1/2 left-1/2 text-8xl opacity-40 -translate-x-1/2 -translate-y-1/2" />

        {/* Floating blur shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-white/10 rounded-full blur-3xl" />

        {/* Content */}
        <h1 className="text-5xl font-extrabold leading-tight relative z-10">
          Plan.<br />Track.<br />Achieve.
        </h1>

        <p className="mt-6 text-lg text-white/90 max-w-md relative z-10">
          Stay organized, focused, and productive every single day with your
          smart todo companion.
        </p>

        {/* Feature list */}
        <ul className="mt-8 space-y-3 text-white/90 relative z-10">
          <li className="flex items-center gap-2">✔ Smart task tracking</li>
          <li className="flex items-center gap-2">✔ Simple & fast workflow</li>
          <li className="flex items-center gap-2">✔ Built for daily focus</li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="relative flex items-center justify-center bg-teal-700 md:bg-gray-100 p-6">

        <div className="md:hidden">
          <Image src="/bg_login_1.png" width={50} height={50} alt="todo" className="absolute top-5 left-10 text-7xl opacity-40" />
          <Image src="/bg_login_2.png" width={50} height={50} alt="time" className="absolute top-20 right-20 text-6xl opacity-40" />
          <Image src="/bg_login_3.png" width={50} height={50} alt="tick" className="absolute bottom-30 left-10 text-6xl opacity-40" />
          <Image src="/bg_login_4.png" width={50} height={50} alt="calendar" className="absolute bottom-10 right-10 text-7xl opacity-40" />
          <Image src="/bg_login_2.png" width={50} height={50} alt="time" className="absolute bottom-38 right-20 text-6xl opacity-40" />
          <Image src="/bg_login_5.png" width={50} height={50} alt="todo" className="absolute top-40 left-10 text-7xl opacity-40" />
        </div>

        <div className="relative w-full max-w-md bg-white/15 md:bg-white backdrop-blur-lg md:backdrop-blur-0 border border-white/30 md:border-none shadow-none p-8 rounded-2xl md:shadow-lg z-10">

          <h2 className="text-2xl font-bold text-gray-100 md:text-gray-900">
            Welcome Back!
          </h2>
          <p className="text-gray-300 md:text-gray-500 mt-1">
            Login to your account
          </p>

          {/* FORM */}
          <form className="mt-6 space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-200 md:text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-white md:focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-200 md:text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-white md:focus:ring-indigo-500"
                />
                <span
                  className="absolute right-4 top-5 text-sm cursor-pointer text-black md:text-indigo-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right text-sm text-black md:text-indigo-600 cursor-pointer">
              Forgot password?
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-200 md:text-gray-600 mt-6">
            Don’t have an account?{" "}
            <span className="text-black md:text-indigo-600 cursor-pointer font-medium">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
