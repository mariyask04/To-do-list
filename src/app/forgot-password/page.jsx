"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function ForgotPasswordPage() {
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setStep(2);
    }

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setStep(3);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            if (!regex.test(password)) {
                alert("Password must be at least 6 characters and include 1 number & 1 symbol");
                return;
            }
            alert("Password reset successfully");
            router.push("/");
        } catch (error) {
            console.error("Error resetting password:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-cyan-900 via-teal-800 to-emerald-700 px-4">

            <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl">

                {/* TITLE */}
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Reset Password
                </h2>
                <p className="text-center text-gray-500 mt-1">
                    {step === 1 && "Enter your email to receive a reset code."}
                    {step === 2 && "Enter the OTP sent to your email."}
                    {step === 3 && "Reset your new password."}
                </p>
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit} className="flex flex-col gap-6 mt-8">
                        <div>
                            <label className="text-sm text-gray-700">Email</label>
                            <input
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="w-full mt-1 px-4 py-3 rounded-lg border bg-gray-50 focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
                        >
                            Send OTP
                        </button>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleOtpSubmit} className="flex flex-col gap-6 mt-8">
                        <div>
                            <label className="text-sm text-gray-700">OTP</label>
                            <input
                                type="text"
                                maxLength={6}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                placeholder="Enter 6-digit OTP"
                                className="w-full mt-1 px-4 py-3 rounded-lg border bg-gray-50 tracking-widest text-center focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
                        >
                            Verify OTP
                        </button>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
                        <div>
                            <label className="text-sm text-gray-700">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="••••••••"
                                    className="w-full mt-1 px-4 py-3 rounded-lg border bg-gray-50 focus:ring-2 focus:ring-teal-500"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-4 text-sm cursor-pointer text-teal-600"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full mt-1 px-4 py-3 rounded-lg border bg-gray-50 focus:ring-2 focus:ring-teal-500"
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
                        >
                            Reset Password
                        </button>
                        <p className="text-xs text-gray-500 mt-1">
                            Must be at least 6 characters, include a number and a symbol
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ForgotPasswordPage;;
