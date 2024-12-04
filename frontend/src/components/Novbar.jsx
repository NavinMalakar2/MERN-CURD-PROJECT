import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        {/* Links for desktop */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            MERN
          </a>
          <Link to="/" className="text-white hover:text-gray-300">
            Create Post
          </Link>
          <Link to="/all" className="text-white hover:text-gray-300">
            All Posts
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 bg-blue-500 p-4">
          <a href="#" className="text-white hover:text-gray-300">
            MERN
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Create Post
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            All Posts
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
