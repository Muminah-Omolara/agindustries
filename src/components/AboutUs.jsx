import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionImg from "../assets/ag-hero4.jpg";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
  const [startTyping, setStartTyping] = useState(false);
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start gap-10">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          {/* Animated Heading */}
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => setStartTyping(true)}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            About{" "}
            <span className="text-green-600 text-3xl">
              {startTyping && (
                <Typewriter
                  words={["AG Industries"]}
                  typeSpeed={100} // typing speed
                  deleteSpeed={0}
                  cursor
                  cursorStyle="|"
                  loop={1} // type once
                />
              )}
            </span>
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            We are the Manufacturer and Distributor of the popular, high-end,
            industrial-quality heavy-duty and mild Phenolic Disinfectants and
            Antiseptics used for both industrial and domestic purposes all over
            the country today.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our general hygiene products provide effective, practical solutions
            for cleaning and controlling micro-organisms in diverse
            applications.
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              Disinfectants, Skin Antiseptics and Sanitizers “kill Germs”.
            </li>
            <li>Livestock disinfectants (Poultry, Cattle, and Swine)</li>
            <li>FEFRA-Approved for Avian Flu.</li>
            <li>
              Hospital Disinfectants and Antiseptics for preventing infections.
            </li>
            <li>
              Industrial & Institutional Disinfectants and Janitorial/Household
              solutions.
            </li>
            <li>
              Ensures a germ-free environment, safeguarding human health &
              well-being.
            </li>
          </ul>

          <p className="text-gray-600 leading-relaxed">
            We also provide formulation supplies for seamless manufacture of
            disinfectants, sanitizers, and antiseptics.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 space-y-6">
          {/* Animated Image */}
          <motion.div
            className="w-full h-[350px] rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <img
              src={SectionImg}
              alt="About AG Industries"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          >
            We strongly believe that good hygiene is the key to safeguarding
            human health and well-being.
          </motion.p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              AG Industries Ltd was incorporated on the 3rd of October 2002 to
              manufacture antiseptic-disinfectants.
            </li>
            <li>
              Our range includes: RoyalGad Lysol Disinfectant, RoyalGad
              Germicide, RoyalGad Antiseptic Disinfectant, and RoyalGad Pine
              Disinfectant.
            </li>
            <li>
              All products are registered by NAFDAC and the Pharmaceutical
              Council of Nigeria.
            </li>
            <li>
              We also undertake contract manufacturing and private labeling.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
