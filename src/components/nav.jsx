import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/ag-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={Logo} alt="AG Industries Logo" className="h-14 w-auto" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-green-600 transition">
              About
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Services
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Contact
            </a>
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
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Services
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// {/* Image */}
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.8 }}
//         >
//           <img
//             src={Hero1}
//             alt="AG Industries"
//             className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
//           />
//         </motion.div>