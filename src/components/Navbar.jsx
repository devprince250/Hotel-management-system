import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHotel, FaHome, FaBed, FaCalendarAlt, FaInfoCircle, FaPhone, FaSignInAlt, FaUserPlus, FaConciergeBell } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="bg-gray-900 text-gray-200 shadow-lg fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-green-600 text-2xl font-bold">
          <FaHotel />
          <span>Hotel Manager</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base font-medium">
          <Link to="/" className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaHome /><span>Home</span>
          </Link>
          <Link to="/rooms" className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaBed /><span>Rooms</span>
          </Link>
          <Link to="/reservations" className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaCalendarAlt /><span>Reservations</span>
          </Link>
          <Link to="/services" className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaConciergeBell /><span>Services</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaInfoCircle /><span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaPhone /><span>Contact</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaSignInAlt /><span>Login</span>
          </Link>
          <Link to="/signup" className="flex items-center space-x-1 hover:text-green-600 transition">
            <FaUserPlus /><span>Sign Up</span>
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 text-white py-4`}>
        <div className="flex flex-col items-center space-y-4 text-base">
          <Link to="/" className="hover:text-green-600 transition"><FaHome className="inline" /> Home</Link>
          <Link to="/rooms" className="hover:text-green-600 transition"><FaBed className="inline" /> Rooms</Link>
          <Link to="/reservations" className="hover:text-green-600 transition"><FaCalendarAlt className="inline" /> Reservations</Link>
          <Link to="/services" className="hover:text-green-600 transition"><FaConciergeBell className="inline" /> Services</Link>
          <Link to="/about" className="hover:text-green-600 transition"><FaInfoCircle className="inline" /> About</Link>
          <Link to="/contact" className="hover:text-green-600 transition"><FaPhone className="inline" /> Contact</Link>
          <Link to="/login" className="hover:text-green-600 transition"><FaSignInAlt className="inline" /> Login</Link>
          <Link to="/signup" className="hover:text-green-600 transition"><FaUserPlus className="inline" /> Sign Up</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
