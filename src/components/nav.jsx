import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Logo from "../assets/ag-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Products", to: "products" },
    { name: "Contact", to: "contact" },
    { name: "Shop", to: "/shop", type: "route" }, // route for Shop
  ];

  const handleCloseMenu = () => setIsOpen(false);

  // Show only logo on shop and product details page
  if (location.pathname === "/shop" || location.pathname === "/productdetails") {
    return (
      <nav className="fixed w-full top-0 left-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-left justify-left h-16">
          <img src={Logo} alt="AG Industries Logo" className="h-14 w-auto" />
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={Logo} alt="AG Industries Logo" className="h-14 w-auto" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {navLinks.map((link, index) =>
              link.type === "route" ? (
                <RouterLink
                  key={index}
                  to={link.to}
                  className="cursor-pointer hover:text-green-600 transition"
                >
                  {link.name}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-green-600 font-semibold"
                  className="cursor-pointer hover:text-green-600 transition"
                >
                  {link.name}
                </ScrollLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-700 text-3xl"
            >
              {isOpen ? <IoClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
            {navLinks.map((link, index) =>
              link.type === "route" ? (
                <RouterLink
                  key={index}
                  to={link.to}
                  onClick={handleCloseMenu}
                  className="cursor-pointer hover:text-green-600 transition"
                >
                  {link.name}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  onClick={handleCloseMenu}
                  className="cursor-pointer hover:text-green-600 transition"
                >
                  {link.name}
                </ScrollLink>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
