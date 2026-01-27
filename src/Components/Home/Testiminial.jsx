import React from "react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Interior Designer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Furniro completely changed how my living room feels. The quality, finish, and comfort are unmatched.",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    role: "Home Owner",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Minimal design, premium build, and on-time delivery. Furniro is now my first choice for furniture.",
    rating: 4,
  },
  {
    name: "Nusrat Jahan",
    role: "Architect",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "Elegant and functional furniture. Clients love the Furniro pieces I recommend.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#FAF4F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Real experiences from people who transformed their homes with
            Furniro
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Rating */}

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
