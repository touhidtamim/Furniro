import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F3EADA] via-[#EADBC8] to-[#DCC9A3] px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#3A2F2F] leading-tight mb-6">
          Bring Comfort & Style
          <span className="block">Into Your Home</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#5C4B4B] mb-10 max-w-2xl mx-auto">
          Discover thoughtfully crafted indoor furniture designed to elevate
          your living space with elegance, comfort, and durability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 rounded-full bg-[#3A2F2F] text-white font-semibold text-lg hover:bg-[#2B2222] transition duration-300">
            Shop Collection
          </button>

          <button className="px-10 py-4 rounded-full border border-[#3A2F2F] text-[#3A2F2F] font-semibold text-lg hover:bg-[#3A2F2F]/10 transition duration-300">
            Explore Designs
          </button>
        </div>

        {/* Trust Text */}
        <p className="mt-8 text-sm text-[#6F5E5E]">
          Premium materials • Modern design • Trusted by thousands of homes
        </p>
      </div>
    </section>
  );
};

export default CTA;
