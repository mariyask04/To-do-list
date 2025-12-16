"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Organize Your Tasks",
    description:
      "Create, manage, and prioritize your daily tasks effortlessly in one place.",
    highlight: "Stay Organized",
  },
  {
    title: "Boost Your Productivity",
    description:
      "Focus on what matters most and track your progress every day.",
    highlight: "Get More Done",
  },
  {
    title: "Achieve Your Goals",
    description:
      "Turn small tasks into big achievements with smart planning.",
    highlight: "Achieve More",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[80vh] flex items-center justify-center bg-linear-to-br from-cyan-900 via-teal-800 to-emerald-700 overflow-hidden">

      {/* Background Blur Shapes */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      {/* SLIDE CONTENT */}
      <div className="relative z-10 max-w-4xl text-center px-6 text-white transition-all duration-500">

        <span className="text-sm uppercase tracking-widest text-white/80">
          {slides[current].highlight}
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          {slides[current].title}
        </h1>

        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
          {slides[current].description}
        </p>

        {/* DOT INDICATORS */}
        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
