import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHotel } from 'react-icons/fa';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTripadvisor
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-amber-900 text-white pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <FaHotel className="text-amber-300 text-3xl mr-3" />
              <h3 className="text-3xl font-bold text-amber-100">GrandStay</h3>
            </div>
            <p className="text-amber-100/80 text-sm mb-6 leading-relaxed">
              Experience unparalleled luxury at our premier hotel destination. 
              We combine world-class amenities with exceptional service to create 
              unforgettable stays for our guests.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Luxury', 'Comfort', '5-Star', 'Spa', 'Fine Dining', 'Pool'].map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: -2 }}
                  className="bg-amber-800/40 text-amber-100 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-amber-200 border-b border-amber-700 pb-2">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/rooms", label: "Rooms & Suites" },
                { path: "/dining", label: "Dining" },
                { path: "/spa", label: "Spa & Wellness" },
                { path: "/gallery", label: "Gallery" },
                { path: "/offers", label: "Special Offers" }
              ].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-amber-100/80 hover:text-amber-50 text-sm flex items-center transition"
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-amber-200 border-b border-amber-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <FaMapMarkerAlt className="text-amber-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-amber-100/80">
                  123 Luxury Avenue<br />
                  Kigali, Rwanda
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <FaPhoneAlt className="text-amber-300 mr-3" />
                <a href="tel:+250788123456" className="text-amber-100/80 hover:text-amber-50">
                  +250 788 123 456
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center"
              >
                <FaEnvelope className="text-amber-300 mr-3" />
                <a href="mailto:reservations@grandstay.com" className="text-amber-100/80 hover:text-amber-50">
                  reservations@grandstay.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Social & Legal */}
        <motion.div 
          className="mt-16 border-t border-amber-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                { icon: <FaFacebookF />, color: 'text-blue-400', label: 'Facebook' },
                { icon: <FaTwitter />, color: 'text-sky-400', label: 'Twitter' },
                { icon: <FaInstagram />, color: 'text-pink-400', label: 'Instagram' },
                { icon: <FaLinkedinIn />, color: 'text-blue-500', label: 'LinkedIn' },
                { icon: <FaWhatsapp />, color: 'text-green-400', label: 'WhatsApp' },
                { icon: <FaTripadvisor />, color: 'text-green-500', label: 'TripAdvisor' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className={`${social.color} hover:text-white text-xl transition`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-amber-100/60 text-xs">
                &copy; {currentYear} GrandStay Hotels. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2 text-xs">
                <Link to="/privacy" className="text-amber-100/60 hover:text-amber-50">Privacy Policy</Link>
                <span className="text-amber-700">•</span>
                <Link to="/terms" className="text-amber-100/60 hover:text-amber-50">Terms of Service</Link>
                <span className="text-amber-700">•</span>
                <Link to="/sitemap" className="text-amber-100/60 hover:text-amber-50">Sitemap</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;