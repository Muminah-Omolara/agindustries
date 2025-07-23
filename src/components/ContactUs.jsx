import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-green-50 py-16 pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading and Intro */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions or need assistance? Our team is ready to help you
            with any inquiries about our products or services.
          </p>
        </motion.div>

        {/* Contact Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            className="bg-white shadow-md rounded-xl p-8 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </motion.form>

          {/* Google Map */}
          <motion.div
            className="overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <iframe
              title="AG Industries Location - Ibadan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0589471651157!2d3.9470!3d7.3775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103993e1b4b3f6ff%3A0x2f4d07e4cc02e65f!2sIbadan!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
