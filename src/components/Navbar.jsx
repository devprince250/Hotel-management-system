import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHotel, FaHome, FaBed, FaCalendarAlt, FaInfoCircle,
  FaPhone, FaSignInAlt, FaUserPlus, FaConciergeBell
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { to: "/", label: "Home", icon: <FaHome /> },
  { to: "/rooms", label: "Rooms", icon: <FaBed /> },
  { to: "/reservations", label: "Reservations", icon: <FaCalendarAlt /> },
  { to: "/services", label: "Services", icon: <FaConciergeBell /> },
  { to: "/about", label: "About", icon: <FaInfoCircle /> },
  { to: "/contact", label: "Contact", icon: <FaPhone /> },
  { to: "/login", label: "Login", icon: <FaSignInAlt /> },
  { to: "/signup", label: "Sign Up", icon: <FaUserPlus /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className="bg-amber-800 text-white shadow-lg fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-2 text-amber-100 text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <FaHotel className="text-amber-200" />
          <span>GrandStay</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-base font-medium">
          {navLinks.map((link, idx) => (
            <motion.div
              whileHover={{ 
                y: -2,
                color: "#FEF3C7" // amber-50
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              key={idx}
              className="relative group"
            >
              <Link
                to={link.to}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg transition"
              >
                <span className="text-amber-200">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-amber-200 w-0 group-hover:w-4/5 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Icon */}
        <motion.div 
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={toggleMenu} 
            className="text-amber-100 focus:outline-none p-2 rounded-lg hover:bg-amber-700 transition"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed top-16 left-0 w-64 h-full bg-amber-900 text-white flex flex-col p-6 space-y-6 text-base font-medium shadow-xl md:hidden z-40"
        >
          {navLinks.map((link, idx) => (
            <motion.div
              whileHover={{ 
                x: 5,
                color: "#FEF3C7"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={idx}
              onClick={closeMenu}
              className="border-b border-amber-700/50 pb-4 last:border-0"
            >
              <Link 
                to={link.to} 
                className="flex items-center space-x-3"
              >
                <span className="text-amber-200 text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;