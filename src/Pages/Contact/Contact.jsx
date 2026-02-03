import React from "react";
import SecondaryHero from "../../Components/Shared/seconderyHero";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Secondary Hero */}
      <SecondaryHero />

      {/* Main Content */}
      <section className="px-4 py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Get In Touch With Us
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              For more information about our products & services, feel free to
              drop us an email. Our staff will always be there to help you out.
              Do not hesitate!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Section - Contact Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>

              <div className="flex items-start gap-4">
                <MapPin className="text-primary" />
                <div>
                  <h3 className="font-medium text-gray-700">Address</h3>
                  <p className="text-gray-600 text-sm">
                    1215 Mirpur Road, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary" />
                <div>
                  <h3 className="font-medium text-gray-700">Phone</h3>
                  <p className="text-gray-600 text-sm">+880 1234 567890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary" />
                <div>
                  <h3 className="font-medium text-gray-700">Email</h3>
                  <p className="text-gray-600 text-sm">support@furniro.com</p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Send us a message
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
