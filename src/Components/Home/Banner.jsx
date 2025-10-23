import React from "react";
import BannerImg from "/Images/Banner/scandinavian-interior-mockup-wall-decal-background 1.webp";

const Banner = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={BannerImg}
        alt="Scandinavian Interior Banner"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      {/* Content Box */}
      <div
        className="absolute bg-white/90 backdrop-blur-sm text-gray-800 p-8 rounded-xl shadow-lg"
        style={{
          left: "739px",
          right: "58px",
          top: "328px",
          bottom: "200px",
        }}
      >
        <p className="text-sm uppercase tracking-widest text-gray-500">
          New Arrival
        </p>
        <h3 className="text-3xl font-bold mt-2 leading-snug">
          Discover Our <br /> New Collection
        </h3>
        <p className="mt-3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-5 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
