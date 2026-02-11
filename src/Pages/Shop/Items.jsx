import React from "react";

const Items = () => {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Shop Furniture
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white"
            >
              <div className="w-full h-56 overflow-hidden rounded-t-xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 mt-1">৳ {item.price}</p>

                <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;
