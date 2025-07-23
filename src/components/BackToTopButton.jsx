import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-green-900 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 group"
        aria-label="Back to Top"
      >
        <FaArrowUp
          size={20}
          className="transition-transform duration-300 group-hover:animate-bounce"
        />
      </button>
    )
  );
};

export default BackToTopButton;
