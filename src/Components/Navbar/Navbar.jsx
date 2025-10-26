import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyBrand
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

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
        <ul className="md:hidden bg-white border-t text-gray-700 font-medium">
          <li className="px-4 py-2 border-b">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 border-b">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-2 border-b">
            <Link to="/services">Services</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
