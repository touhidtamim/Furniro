import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Furniro</h3>
            <p className="text-sm leading-relaxed">
              Where modern design meets everyday comfort and reliability
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-medium mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-medium mb-3">Helps</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Payment options
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-medium mb-3">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get our latest updates.</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Furniro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
