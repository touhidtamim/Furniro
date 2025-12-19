import React from "react";

const BrowseTheRange = () => {
  return (
    <div className="browse-range-container text-center py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
        Browse the Range
      </h2>

      {/* Subheading */}
      <p className="text-lg text-gray-600 mb-10">
        Find the perfect pieces to match your home’s personality
      </p>

      {/* Images with names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Dining */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="Images/HomeImg/Dining.webp"
              alt="Dining"
              className="w-full  object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4 text-gray-800">Dining</h3>
        </div>

        {/* Living Rooms*/}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="Images/HomeImg/Living.webp"
              alt="Living"
              className="w-full  object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4 text-gray-800">Living</h3>
        </div>

        {/* Bedrooms */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="Images/HomeImg/Bedroom.webp"
              alt="Bedroom"
              className="w-full  object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4 text-gray-800">Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseTheRange;
