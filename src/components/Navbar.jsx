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
  { to: "/login", label: "Login", icon: <FaSignInAlt /> },
  { to: "/signup", label: "Sign Up", icon: <FaUserPlus /> },
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

    {/* Desktop Menu - Tight Spacing */}
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
              `flex items-center gap-2 px-2 py-2 rounded-md border border-transparent transition duration-300 ${
                isActive
                  ? 'bg-amber-700 text-white border-amber-300'
                  : 'hover:border-white'
              }`
            }
          >
            <span className="text-amber-200">{link.icon}</span>
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
      className="
        fixed top-16 left-0 
        w-64 max-w-xs 
        max-h-[calc(100vh-4rem)] h-auto 
        bg-amber-900 text-white 
        flex flex-col p-4 space-y-4 text-sm font-medium 
        shadow-xl md:hidden z-40 
        rounded-r-xl 
        border border-white
        overflow-auto
      "
    >
      {navLinks.map((link, idx) => (
        <motion.div
          key={idx}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="border-b border-amber-700/40 pb-3 last:border-none"
        >
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-1 rounded-md ${
                isActive ? 'text-amber-100 font-semibold' : 'hover:bg-amber-700'
              }`
            }
          >
            <span className="text-amber-200 text-lg">{link.icon}</span>
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
