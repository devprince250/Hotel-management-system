import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Import animation

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-green-600 to-gray-200 min-h-screen py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        <motion.h2 
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center text-green-600 mb-4"
        >
          Contact Us
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 mb-6 text-sm"
        >
          We'd love to hear from you! Please fill out the form below to reach us.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-3"
        >
          {/* Name Input */}
          <div className="relative">
            <label className="block text-sm text-gray-700">Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-600">
              <FaMapMarkerAlt className="text-green-600 w-4 h-4" />
              <input
                type="text"
                className="w-full px-3 py-2 border-none focus:outline-none pl-8 text-sm"
                placeholder="Your Name"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label className="block text-sm text-gray-700">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-600">
              <FaEnvelope className="text-green-600 w-4 h-4" />
              <input
                type="email"
                className="w-full px-3 py-2 border-none focus:outline-none pl-8 text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Phone Input */}
          <div className="relative">
            <label className="block text-sm text-gray-700">Phone</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-600">
              <FaPhone className="text-green-600 w-4 h-4" />
              <input
                type="tel"
                className="w-full px-3 py-2 border-none focus:outline-none pl-8 text-sm"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="relative">
            <label className="block text-sm text-gray-700">Message</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
              placeholder="Your message here..."
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
