import React from "react";
import BannerImg from "/Images/Banner/scandinavian-interior-mockup-wall-decal-background 1.webp";

const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-end px-12">
      {/* Background Image */}
      <img
        src={BannerImg}
        alt="Scandinavian Interior Banner"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      {/* Overlay*/}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Box */}
      <div className="relative max-w-md bg-[#ebe1c8] backdrop-blur-sm text-gray-900 p-10 rounded-2xl shadow-xl mr-36">
        <p className="text-sm uppercase tracking-[0.2em] text-black font-semibold">
          New Arrival
        </p>
        <h3 className="text-2xl text-[#B88E2F] font-extrabold mt-2 leading-tight">
          Redefine Your Space <br /> with Modern Elegance
        </h3>
        <p className="mt-4 text-black leading-relaxed">
          Experience the perfect balance of comfort and style. Explore our
          latest Scandinavian-inspired furniture that transforms your home into
          a timeless masterpiece.
        </p>
        <button className="mt-6 px-7 py-3 bg-[#B88E2F] text-white font-medium rounded-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
