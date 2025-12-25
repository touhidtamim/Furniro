import React from "react";

const CTA = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6">
      <div className="max-w-3xl text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Build Faster. Launch Smarter.
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10">
          Transform your ideas into scalable, high-performance web applications
          with modern tools and clean architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/40 text-white font-semibold text-lg hover:bg-white/10 transition duration-300">
            View Demo
          </button>
        </div>

        <p className="mt-8 text-sm text-white/70">
          No credit card required. Free to get started.
        </p>
      </div>
    </section>
  );
};

export default CTA;
