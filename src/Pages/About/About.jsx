import React from "react";
import SecondaryHero from "../../Components/Shared/seconderyHero";

const About = () => {
  return (
    <>
      {/* Secondery Hero Section */}
      <SecondaryHero />

      {/* Main Content page */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          About Furniro
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Welcome to Furniro
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Furniro is built with a simple idea —
              <span className="font-medium text-gray-800">
                “premium quality furniture within budget.”
              </span>
              We believe your home is a reflection of your personality, and our
              goal is to help you decorate it with style, comfort, and elegance.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              From modern designs to long-lasting materials, every product at
              <span className="font-medium"> Furniro </span>
              is designed to fit perfectly into your lifestyle. Whether you're
              setting up your bedroom, living room, or office, we deliver
              furniture that makes your space feel truly yours.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              Why Choose Us?
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>• Premium quality and durable materials</li>
              <li>• Modern & stylish design collections</li>
              <li>• Budget-friendly pricing</li>
              <li>• Fast delivery across Bangladesh</li>
              <li>• Dedicated customer support</li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                alt="Furniro Furniture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-gray-700">Our Mission</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bringing premium, stylish, and affordable furniture to every home in
            Bangladesh.
          </p>

          <p className="text-lg font-semibold text-gray-700 mt-6">Our Vision</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To become the most trusted and loved furniture brand in the country.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
