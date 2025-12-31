import React from "react";
import BannerImg from "/Images/Banner/scandinavian-interior-mockup-wall-decal-background 1.webp";

const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center md:justify-end px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Background Image */}
      <img
        src={BannerImg}
        alt="Scandinavian Interior Banner"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Box */}
      <div className="relative max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg bg-[#ebe1c8]/90 backdrop-blur-sm text-gray-900 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl shadow-xl md:mr-20 lg:mr-36 text-center md:text-left">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black font-semibold">
          New Arrival
        </p>

        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#B88E2F] font-extrabold mt-2 leading-tight">
          Redefine Your Space <br className="hidden sm:block" /> with Modern
          Elegance
        </h3>
      </div>
    </section>
  );
};

export default Banner;
