import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-amber-700">
          Furniro
        </Link>

        {/* Center Menu (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-amber-700 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-amber-700 transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-amber-700 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-amber-700 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side (Login/Register) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t text-gray-700 font-medium">
          <ul className="flex flex-col text-center">
            <li className="py-3 border-b">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="py-3 border-b">
              <Link to="/shop" onClick={() => setIsOpen(false)}>
                Shop
              </Link>
            </li>
            <li className="py-3 border-b">
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="py-3 border-b">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col items-center py-4 space-y-3">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-4/5 text-center px-4 py-2 border border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="w-4/5 text-center px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
