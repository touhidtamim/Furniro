import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/Images/Logo/Meubel House_Logos-05.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ---------- Logo ---------- */}
        <Link to="/" className="flex items-center space-x-1">
          <img
            src={logo}
            alt="Furniro Logo"
            className="h-6 w-auto object-contain"
          />
          <h1 className="text-2xl font-montserrat font-bold text-black tracking-wide">
            Furniro
          </h1>
        </Link>

        {/* ---------- Desktop Menu ---------- */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-amber-700 transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---------- Desktop Auth Buttons ---------- */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-all duration-200"
          >
            Register
          </Link>
        </div>

        {/* ---------- Mobile Menu Button ---------- */}
        <button
          className="md:hidden text-gray-700 hover:text-amber-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {isOpen && (
        <div className="md:hidden bg-white border-t text-gray-700 font-medium animate-fade-in">
          <ul className="flex flex-col text-center">
            {["Home", "Shop", "About", "Contact"].map((item) => (
              <li key={item} className="py-3 border-b hover:bg-gray-50">
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* ---------- Mobile Auth Buttons ---------- */}
          <div className="flex flex-col items-center py-4 space-y-3">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-4/5 text-center px-4 py-2 border border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="w-4/5 text-center px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-all duration-200"
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
