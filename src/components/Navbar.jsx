import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-[#f9f5ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img src={logo} alt="noble-mind" />
          </div>

          <div className="hidden md:flex space-x-6 items-center ">
            <Link
              to="/"
              className="text-sm font-medium text-[#000000] hover:text-[#A854E9] hover:underline relative"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-[#000000] hover:text-[#A854E9] hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/solutions"
              className="text-sm font-medium text-[#000000] hover:text-[#A854E9] hover:underline"
            >
              Solutions
            </Link>
            <Link
              to="/resources"
              className="text-sm font-medium text-[#000000] hover:text-[#A854E9] hover:underline"
            >
              Resources
            </Link>
          </div>
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[rgb(168,84,233)] to-[#4F91FC] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#FFFFFF]  px-4 pb-4">
          <Link to="/" className="block py-2 text-[#000000] font-medium">
            Home
          </Link>
          <Link to="/about" className="block py-2 text-[#000000]">
            About Us
          </Link>
          <Link to="/solutions" className="block py-2 text-[#000000]">
            Solutions
          </Link>
          <Link to="/resources" className="block py-2 text-[#0000000]">
            Resources
          </Link>
          <Link
            to="/contact"
            className="block mt-2 bg-gradient-to-r from-[rgb(168,84,233)] to-[#4F91FC] text-white text-center py-2 rounded-full font-medium"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
