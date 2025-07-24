import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Bg from "../assets/sectionimg2.jpg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      {/* Animated Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-green-400 rounded-full opacity-40"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-green-500 rounded-full opacity-30"
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between w-full gap-10">
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left space-y-6 md:w-1/2 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to{" "}
            <motion.span
              className="text-green-400 inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              AG Industries
            </motion.span>
          </h1>

          {/* Typewriter Paragraph */}
          <motion.p
            className="text-white-1200 text-lg md:text-xl max-w-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Typewriter
              words={[
                `Protect your space with advanced disinfectant solutions from AG Industries. We manufacture and supply premium-grade sanitizing products. Keeping homes, workplaces, and industries safe and germ-free.`,
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={20}
              deleteSpeed={0}
              delaySpeed={100000}
              loop={0}
            />
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex justify-center md:justify-start gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a
              href="/shop"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2 font-medium shadow-md"
            >
              Shop Now <FaArrowRight className="text-lg" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
