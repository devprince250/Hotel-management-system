import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Hotel Manager</h3>
            <p className="text-gray-300 text-sm mb-4">
              Welcome to HotelManager, your trusted platform for managing hotels, rooms, and reservations with ease and security.
            </p>
            <p className="text-gray-300 text-sm">
              Developed with 💻 by <span className="font-semibold text-green-600">Prince As Developer</span> — Excellence in Web Development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Quick Links</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="/" className="hover:text-green-600 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-green-600 transition duration-300">About Us</a></li>
              <li><a href="/services" className="hover:text-green-600 transition duration-300">Services</a></li>
              <li><a href="/contact" className="hover:text-green-600 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-600">Contact Us</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <span className="block">Email:</span>
                <a href="mailto:support@hotelmanager.com" className="hover:text-green-600 transition duration-300">support@hotelmanager.com</a>
              </li>
              <li>
                <span className="block">Phone:</span>
                <a href="tel:+123456789" className="hover:text-green-600 transition duration-300">+123-456-789</a>
              </li>
              <li>
                <span className="block">Address:</span>
                <p>1234 Hotel St, Kigali, Rwanda</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <motion.a
            href="https://facebook.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-green-600 hover:text-green-600"
          >
            <FaFacebookF className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-green-600 hover:text-green-600"
          >
            <FaTwitter className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-green-600 hover:text-green-600"
          >
            <FaInstagram className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-green-600 hover:text-green-600"
          >
            <FaLinkedinIn className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://wa.me/250789123456" // WhatsApp number (use yours here)
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-green-600 hover:text-green-600"
          >
            <FaWhatsapp className="text-2xl" />
          </motion.a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-6 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-green-600">Hotel Manager</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
