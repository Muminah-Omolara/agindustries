import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaMapPin,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <IoMail className="w-4 h-4" /> agindustries2002@yahoo.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="w-4 h-4" /> 08098425876, 08052473398,
              08023282550
            </li>
            <li className="flex items-start gap-2">
              <FaMapPin className="w-4 h-4 mt-1" />
              PLOT 3, Royalgad Crescent, Royalgad bus stop, Odo-ona Elewe
              Express Way, G.P.O box 18345 Dugbe, Ibadan.
            </li>
          </ul>
        </div>

        {/* Middle - Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#about" className="hover:text-gray-200 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-gray-200 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/agindustries2002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-green-600 rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/agindustries2002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-green-600 rounded-full hover:bg-gray-100 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.twitter.com/agindustries2002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-green-600 rounded-full hover:bg-gray-100 transition"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/agindustries2002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-green-600 rounded-full hover:bg-gray-100 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-500 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} AG Industries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
