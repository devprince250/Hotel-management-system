import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaHotel, FaHome, FaBed, FaCalendarAlt, FaInfoCircle,
  FaPhone, FaSignInAlt, FaUserPlus, FaConciergeBell
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: "/", label: "Home", icon: <FaHome /> },
  { to: "/rooms", label: "Rooms", icon: <FaBed /> },
  { to: "/reservations", label: "Reservations", icon: <FaCalendarAlt /> },
  { to: "/services", label: "Services", icon: <FaConciergeBell /> },
  { to: "/about", label: "About", icon: <FaInfoCircle /> },
  { to: "/contact", label: "Contact", icon: <FaPhone /> },
  { to: "/login", label: "Login", icon: <FaSignInAlt />, isButton: true },
  { to: "/signup", label: "Sign Up", icon: <FaUserPlus />, isButton: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => closeMenu(), [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => e.key === 'Escape' && closeMenu();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.nav
      className="bg-amber-800/95 text-white shadow-md border-b border-amber-700 backdrop-blur-sm fixed w-full top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-amber-100 text-xl sm:text-2xl font-bold hover:text-amber-50 transition"
        >
          <FaHotel className="text-amber-200" />
          <span>GrandStay</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-3 text-sm lg:text-base font-medium">
          {navLinks.map((link, idx) => (
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              key={idx}
              className="relative group"
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 border ${
                    isActive
                      ? 'bg-amber-700 text-white border-amber-300'
                      : link.isButton
                        ? 'bg-amber-200 text-amber-800 border-white hover:bg-white'
                        : 'border-transparent hover:border-white text-white'
                  } font-semibold ${link.isButton ? 'shadow-sm' : ''}`
                }
              >
                <span className={link.isButton ? 'text-amber-700' : 'text-amber-200'}>
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="text-amber-100 p-2 rounded-md hover:bg-amber-700 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-16 left-0 w-64 max-w-xs max-h-[calc(100vh-4rem)] h-auto bg-amber-900 text-white flex flex-col p-4 space-y-4 text-sm font-medium shadow-2xl md:hidden z-50 rounded-r-2xl border border-white ring-2 ring-white ring-offset-0 ring-opacity-80 overflow-auto"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                key={idx}
                className="relative group"
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-full transition duration-300 ${
                      isActive
                        ? 'bg-gray-700 text-white border border-amber-300'
                        : link.label === 'Sign Up'
                          ? 'bg-amber-700 text-white hover:bg-amber-600 border border-amber-600 shadow'
                          : link.label === 'Login'
                            ? 'bg-white text-amber-800 hover:bg-amber-100 border border-amber-200'
                            : 'hover:border-white border border-transparent text-white'
                    } font-semibold`
                  }
                >
                  <span className={link.label === 'Sign Up' ? 'text-white' : link.label === 'Login' ? 'text-amber-700' : 'text-amber-200'}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
