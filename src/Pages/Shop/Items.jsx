import React from "react";

const products = [
  {
    id: 1,
    name: "Modern Wooden Chair",
    price: 4200,
    img: "https://images.unsplash.com/photo-1582582494700-85d9cdd71e9d",
  },
  {
    id: 2,
    name: "Sofa Comfort Set",
    price: 18500,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    id: 3,
    name: "Elegant Study Table",
    price: 6900,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
  },
  {
    id: 4,
    name: "Minimalist Bed Frame",
    price: 22000,
    img: "https://images.unsplash.com/photo-1615870216519-2f9fa7f4ac4a",
  },
];

const Items = () => {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Shop Furniture
        </h1>

        {/* Product Grid */}
       

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
