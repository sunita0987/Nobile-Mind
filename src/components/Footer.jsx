import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import footerlogo from "../assets/images/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#ffffff] py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="flex-1">
          <img src={footerlogo} alt="logo" className="w-32 md:w-40" />
          <p className="text-md mt-5 text-[#FDFCFC] opacity-70 mb-4 max-w-sm leading-relaxed">
            Join us on the journey to embrace the future. Experience the
            transformational impact of AI and automation with Algominds.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-purple-500 hover:text-purple-400 rounded-full bg-[#FFFFFF29] w-8 h-8 flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-purple-400 rounded-full bg-[#FFFFFF29] w-8 h-8 flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-purple-500 hover:text-purple-400 rounded-full bg-[#FFFFFF29] w-8 h-8 flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-3">Main Menu</h3>
          <ul className="space-y-2 text-sm text-[#ffffff] opacity-80">
            <li>
              <a href="#" className="hover:text-[#A854E9]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A854E9]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A854E9]">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A854E9]">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#A854E9]">
                Steps
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row gap-10 md:gap-20">
          <div>
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#A854E9]">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A854E9]">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#A854E9]" /> +0000000000
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#A854E9]" />
                info@noblemindit.gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-purple-800 pt-4 text-center text-sm text-gray-500">
        © Noble Mind IT 2023. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
