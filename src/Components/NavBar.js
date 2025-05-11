// import React, { useState } from "react";
// import { FaPhoneAlt, FaFacebookSquare } from "react-icons/fa";
// import { BsCart3 } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
// import { RiMapPin2Fill, RiInstagramFill } from "react-icons/ri";
// import { FaSquareTwitter } from "react-icons/fa6";
// import { HiMenuAlt3, HiX } from "react-icons/hi";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import {
  RiMapPin2Fill,
  RiInstagramFill,
} from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-gray-100 text-gray-700 text-xs px-4 md:px-10 py-2 flex flex-col md:flex-row justify-between items-center gap-2"
      >
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <div className="flex items-center gap-1">
            <MdEmail />
            <p>Email: rjsolartechnology@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <FaClock />
            <p>Mon - Fri: 8:00 am - 7:00 pm</p>
          </div>
          <div className="flex items-center gap-1 text-green-600 font-medium cursor-pointer hover:underline">
            <RiMapPin2Fill />
            <p>Get Directions</p>
          </div>
        </div>

        <div className="flex gap-3 text-lg text-gray-600">
          <FaFacebookSquare className="hover:text-green-600 cursor-pointer" />
          <RiInstagramFill className="hover:text-green-600 cursor-pointer" />
          <FaSquareTwitter className="hover:text-green-600 cursor-pointer" />
        </div>
      </motion.div>

      {/* Main Nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white shadow-md z-50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="h-[120px] w-auto" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
            {[
              { name: "Home", href: "/", active: true },
              { name: "About Us", href: "/about-us" },
              { name: "Services", href: "#services" },
              { name: "Projects", href: "#projects" },
              { name: "Contact Us", href: "/contact-us" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative hover:text-green-600 transition-all ${
                  link.active
                    ? "text-green-600 font-semibold border-b-2 border-green-500"
                    : ""
                }`}
              >
                {link.name}
                {!link.active && (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <FaPhoneAlt className="text-green-600" />
              <span>8279983842</span>
            </div>
            <a href="mailto:rjsolartechnology@gmail.com">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition">
                Mail Us
              </button>
            </a>

            {/* Mobile Menu Toggle */}
            <div
              className="lg:hidden text-2xl cursor-pointer ml-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </div>
          </div>
        </div>

        {/* Mobile Nav Links with Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden flex flex-col items-start gap-3 px-6 pb-4 text-sm font-medium text-gray-700 bg-white overflow-hidden"
            >
              <a href="/" className="text-green-600 font-semibold">
                Home
              </a>
              <a href="/about-us">About Us</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="/contact-us">Contact Us</a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default NavBar;

